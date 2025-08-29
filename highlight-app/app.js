class HighlightApp {
  constructor() {
    // Canvas elements
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.selectionArea = document.getElementById("selectionArea");

    // Image data
    this.originalImage = null;
    this.originalImageBitmap = null;
    this.imageScale = 1;
    this.canvasScale = 1;

    // Selection state
    this.isSelecting = false;
    this.selections = [];
    this.currentSelection = null;
    this.startPos = { x: 0, y: 0 };

    // History for undo/redo
    this.history = [];
    this.historyIndex = -1;

    // Settings
    this.settings = {
      borderColor: "#3b82f6",
      darkness: 0.7,
      blur: 0,
      borderWidth: 2,
      borderRadius: 10,
    };

    // DOM elements
    this.uploadZone = document.getElementById("uploadZone");
    this.fileInput = document.getElementById("fileInput");
    this.mainContent = document.getElementById("mainContent");
    this.canvasContainer = document.getElementById("canvasContainer");
    this.imageInfo = document.getElementById("imageInfo");
    this.loadingOverlay = document.getElementById("loadingOverlay");
    this.warningModal = document.getElementById("warningModal");

    // Control elements
    this.colorSwatches = document.querySelectorAll(".color-swatch");
    this.customColor = document.getElementById("customColor");
    this.darknessSlider = document.getElementById("darknessSlider");
    this.blurSlider = document.getElementById("blurSlider");
    this.borderWidthSlider = document.getElementById("borderWidthSlider");
    this.borderRadiusSlider = document.getElementById("borderRadiusSlider");
    this.resetBtn = document.getElementById("resetBtn");
    this.exportBtn = document.getElementById("exportBtn");
    this.continueBtn = document.getElementById("continueBtn");
    this.undoBtn = document.getElementById("undoBtn");
    this.redoBtn = document.getElementById("redoBtn");

    // Value display elements
    this.darknessValue = document.getElementById("darknessValue");
    this.blurValue = document.getElementById("blurValue");
    this.borderWidthValue = document.getElementById("borderWidthValue");
    this.borderRadiusValue = document.getElementById("borderRadiusValue");

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupDragDrop();
    this.updateHistoryButtons();
  }

  setupEventListeners() {
    // File input
    this.uploadZone.addEventListener("click", () => this.fileInput.click());
    this.fileInput.addEventListener("change", (e) =>
      this.handleFileSelect(e.target.files)
    );

    // Canvas events
    this.canvas.addEventListener("mousedown", (e) => this.startSelection(e));
    this.canvas.addEventListener("mousemove", (e) => this.updateSelection(e));
    this.canvas.addEventListener("mouseup", () => this.endSelection());
    this.canvas.addEventListener("mouseleave", () => this.endSelection(true));

    // Touch events for mobile
    this.canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.canvas.dispatchEvent(new MouseEvent("mouseup", {}));
    });

    // Color controls
    this.colorSwatches.forEach((swatch) => {
      swatch.addEventListener("click", () => this.selectColor(swatch));
    });

    this.customColor.addEventListener("input", (e) => {
      this.settings.borderColor = e.target.value;
      this.updateColorSwatches();
      this.render();
    });

    // Sliders
    this.darknessSlider.addEventListener("input", (e) => {
      this.settings.darkness = parseFloat(e.target.value);
      this.darknessValue.textContent = this.settings.darkness;
      this.updateSettingsAndHistory();
    });

    this.blurSlider.addEventListener("input", (e) => {
      this.settings.blur = parseFloat(e.target.value);
      this.blurValue.textContent = this.settings.blur;
      this.updateSettingsAndHistory();
    });

    this.borderWidthSlider.addEventListener("input", (e) => {
      this.settings.borderWidth = parseInt(e.target.value);
      this.borderWidthValue.textContent =
        this.settings.borderWidth === 0 ? "0" : this.settings.borderWidth;
      this.updateSettingsAndHistory();
    });

    this.borderRadiusSlider.addEventListener("input", (e) => {
      this.settings.borderRadius = parseInt(e.target.value);
      this.borderRadiusValue.textContent = this.settings.borderRadius;
      this.updateSettingsAndHistory();
    });

    // Buttons
    this.resetBtn.addEventListener("click", () => this.reset());
    this.exportBtn.addEventListener("click", () => this.exportImage());
    this.continueBtn.addEventListener("click", () =>
      this.warningModal.classList.add("hidden")
    );
    this.undoBtn.addEventListener("click", () => this.undo());
    this.redoBtn.addEventListener("click", () => this.redo());
  }

  setupDragDrop() {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      this.uploadZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      this.uploadZone.addEventListener(eventName, () => {
        this.uploadZone.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      this.uploadZone.addEventListener(eventName, () => {
        this.uploadZone.classList.remove("dragover");
      });
    });

    this.uploadZone.addEventListener("drop", (e) => {
      const files = [...e.dataTransfer.files];
      this.handleFileSelect(files);
    });
  }

  async handleFileSelect(files) {
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Vui lòng chọn file ảnh hợp lệ!");
      return;
    }

    this.showLoading(true);

    try {
      await this.loadImage(file);
    } catch (error) {
      console.error("Error loading image:", error);
      alert("Có lỗi xảy ra khi tải ảnh. Vui lòng thử lại!");
    } finally {
      this.showLoading(false);
    }
  }

  async loadImage(file) {
    // Create object URL
    if (this.originalImage) {
      URL.revokeObjectURL(this.originalImage.src);
    }

    const objectURL = URL.createObjectURL(file);

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = async () => {
        try {
          console.log("Image loaded:", img.width, "x", img.height);

          // Check image size
          const megapixels = (img.width * img.height) / 1000000;
          if (megapixels > 30) {
            this.warningModal.classList.remove("hidden");
          }

          // Handle EXIF orientation
          const orientedImageData = await this.handleEXIFOrientation(file, img);

          // Store original image
          this.originalImage = orientedImageData.image;
          console.log(
            "Original image stored:",
            this.originalImage.width,
            "x",
            this.originalImage.height
          );

          // Create ImageBitmap for better performance
          if (window.createImageBitmap) {
            this.originalImageBitmap = await createImageBitmap(
              orientedImageData.image
            );
          } else {
            this.originalImageBitmap = orientedImageData.image;
          }

          // Setup canvas
          this.setupCanvas();
          this.reset();

          // Show main content
          this.mainContent.classList.remove("hidden");

          // Update image info
          this.updateImageInfo(
            file,
            this.originalImage.width,
            this.originalImage.height
          );

          resolve();
        } catch (error) {
          console.error("Error in image load handler:", error);
          reject(error);
        }
      };

      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = objectURL;
    });
  }

  async handleEXIFOrientation(file, img) {
    // Simple EXIF orientation handling
    try {
      const arrayBuffer = await file.arrayBuffer();
      const orientation = this.getEXIFOrientation(arrayBuffer);

      if (orientation && orientation > 1) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Set canvas size based on orientation
        if (orientation >= 5 && orientation <= 8) {
          canvas.width = img.height;
          canvas.height = img.width;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }

        // Apply transformation
        ctx.save();
        this.applyOrientation(ctx, orientation, img.width, img.height);
        ctx.drawImage(img, 0, 0);
        ctx.restore();

        // Create corrected image
        const correctedImg = new Image();
        correctedImg.src = canvas.toDataURL();

        return new Promise((resolve) => {
          correctedImg.onload = () =>
            resolve({ image: correctedImg, orientation });
        });
      }
    } catch (error) {
      console.warn("Could not read EXIF data:", error);
    }

    return { image: img, orientation: 1 };
  }

  getEXIFOrientation(arrayBuffer) {
    const dataView = new DataView(arrayBuffer);

    // Check for JPEG
    if (dataView.getUint16(0) !== 0xffd8) return null;

    let offset = 2;
    let marker;

    // Find APP1 marker
    while (offset < dataView.byteLength) {
      marker = dataView.getUint16(offset);
      if (marker === 0xffe1) break;
      offset += 2 + dataView.getUint16(offset + 2);
    }

    if (marker !== 0xffe1) return null;

    offset += 4;

    // Check for EXIF
    if (dataView.getUint32(offset) !== 0x45786966) return null;

    offset += 6;
    const little = dataView.getUint16(offset) === 0x4949;
    offset += dataView.getUint32(offset + 4, little);

    const tags = dataView.getUint16(offset, little);
    offset += 2;

    // Find orientation tag (0x0112)
    for (let i = 0; i < tags; i++) {
      if (dataView.getUint16(offset + i * 12, little) === 0x0112) {
        return dataView.getUint16(offset + i * 12 + 8, little);
      }
    }

    return 1;
  }

  applyOrientation(ctx, orientation, width, height) {
    switch (orientation) {
      case 2:
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        break;
      case 3:
        ctx.translate(width, height);
        ctx.rotate(Math.PI);
        break;
      case 4:
        ctx.translate(0, height);
        ctx.scale(1, -1);
        break;
      case 5:
        ctx.rotate(0.5 * Math.PI);
        ctx.scale(1, -1);
        break;
      case 6:
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(0, -height);
        break;
      case 7:
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(width, -height);
        ctx.scale(-1, 1);
        break;
      case 8:
        ctx.rotate(-0.5 * Math.PI);
        ctx.translate(-width, 0);
        break;
    }
  }

  setupCanvas() {
    if (!this.originalImage) return;

    const containerWidth = this.canvasContainer.clientWidth || 800;
    const containerHeight = window.innerHeight * 0.8;

    // Calculate scale to fit container while maintaining aspect ratio
    const scaleX = containerWidth / this.originalImage.width;
    const scaleY = containerHeight / this.originalImage.height;
    this.imageScale = Math.min(scaleX, scaleY, 1);

    // Account for device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    this.canvasScale = dpr;

    // Set display size
    const displayWidth = this.originalImage.width * this.imageScale;
    const displayHeight = this.originalImage.height * this.imageScale;

    this.canvas.style.width = displayWidth + "px";
    this.canvas.style.height = displayHeight + "px";

    // Set actual canvas size for sharp rendering
    this.canvas.width = displayWidth * this.canvasScale;
    this.canvas.height = displayHeight * this.canvasScale;

    // Scale context for sharp rendering
    this.ctx.scale(this.canvasScale, this.canvasScale);

    // Enable image smoothing
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = "high";

    // Immediately render the image
    this.render();
  }

  startSelection(e) {
    if (!this.originalImage) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    this.isSelecting = true;
    this.startPos = { x, y };
    this.currentSelection = {
      x,
      y,
      width: 0,
      height: 0,
      borderColor: this.settings.borderColor,
      borderWidth: this.settings.borderWidth,
      borderRadius: this.settings.borderRadius,
    };

    this.selectionArea.classList.remove("hidden");
    this.updateSelectionArea();
  }

  updateSelection(e) {
    if (!this.isSelecting || !this.originalImage) return;

    const rect = this.canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    this.currentSelection.x = Math.min(this.startPos.x, currentX);
    this.currentSelection.y = Math.min(this.startPos.y, currentY);
    this.currentSelection.width = Math.abs(currentX - this.startPos.x);
    this.currentSelection.height = Math.abs(currentY - this.startPos.y);

    this.updateSelectionArea();
    this.render(); // Re-render to show the temporary selection box
  }

  endSelection(isMouseLeave = false) {
    if (!this.isSelecting) return;

    this.isSelecting = false;
    this.selectionArea.classList.add("hidden");

    if (isMouseLeave && !this.currentSelection) {
      this.render();
      return;
    }

    // Only keep selection if it has meaningful size
    if (
      this.currentSelection &&
      this.currentSelection.width > 10 &&
      this.currentSelection.height > 10
    ) {
      this.selections.push(this.currentSelection);
      this.saveState();
    }

    this.currentSelection = null;
    this.render();
  }

  clearSelections() {
    this.selections = [];
    this.saveState();
    this.render();
  }

  updateSelectionArea() {
    if (!this.currentSelection) {
      this.selectionArea.classList.add("hidden");
      return;
    }

    const { x, y, width, height, borderWidth, borderColor, borderRadius } =
      this.currentSelection;

    this.selectionArea.classList.remove("hidden");
    this.selectionArea.style.left = x - borderWidth + "px";
    this.selectionArea.style.top = y - borderWidth + "px";
    this.selectionArea.style.width = width + borderWidth * 2 + "px";
    this.selectionArea.style.height = height + borderWidth * 2 + "px";
    this.selectionArea.style.borderWidth = borderWidth + "px";
    this.selectionArea.style.borderColor = borderColor;
    this.selectionArea.style.borderRadius = borderRadius + "px";
  }

  render() {
    if (!this.originalImage) {
      return;
    }

    // Clear canvas
    const displayWidth = this.originalImage.width * this.imageScale;
    const displayHeight = this.originalImage.height * this.imageScale;
    this.ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Draw original image
    this.ctx.drawImage(
      this.originalImageBitmap,
      0,
      0,
      displayWidth,
      displayHeight
    );

    // Apply highlight effect
    this.applyHighlightEffect();

    // Draw all committed selections' borders
    this.drawSelectionBorders();

    // Draw the current, temporary selection box
    if (this.isSelecting && this.currentSelection) {
      this.drawSelectionBorders([this.currentSelection]);
    }

    this.exportBtn.disabled = this.selections.length === 0;
  }

  applyHighlightEffect() {
    const { darkness, blur } = this.settings;

    if (this.selections.length === 0) return;

    this.ctx.save();

    // Create a mask for all selection areas
    this.ctx.beginPath();
    this.selections.forEach((sel) => {
      this.ctx.roundRect(sel.x, sel.y, sel.width, sel.height, sel.borderRadius);
    });

    // Invert the path to create overlay everywhere EXCEPT the selections
    this.ctx.rect(
      0,
      0,
      this.canvas.width / this.canvasScale,
      this.canvas.height / this.canvasScale
    );
    this.ctx.clip("evenodd");

    // Apply blur if needed
    if (blur > 0) {
      this.ctx.filter = `blur(${blur}px)`;
    }

    // Fill with dark overlay
    this.ctx.fillStyle = `rgba(0, 0, 0, ${darkness})`;
    this.ctx.fillRect(
      0,
      0,
      this.canvas.width / this.canvasScale,
      this.canvas.height / this.canvasScale
    );

    this.ctx.restore();
  }

  drawSelectionBorders(selections = this.selections) {
    this.ctx.save();
    selections.forEach((sel) => {
      if (sel.borderWidth > 0) {
        this.ctx.strokeStyle = sel.borderColor;
        this.ctx.lineWidth = sel.borderWidth;
        this.ctx.beginPath();
        this.ctx.roundRect(
          sel.x,
          sel.y,
          sel.width,
          sel.height,
          sel.borderRadius
        );
        this.ctx.stroke();
      }
    });
    this.ctx.restore();
  }

  selectColor(swatch) {
    this.colorSwatches.forEach((s) => s.classList.remove("active"));
    swatch.classList.add("active");

    const color = swatch.dataset.color;
    this.settings.borderColor = color;
    this.customColor.value = color;
  }

  updateColorSwatches() {
    this.colorSwatches.forEach((swatch) => {
      swatch.classList.toggle(
        "active",
        swatch.dataset.color === this.settings.borderColor
      );
    });
  }

  reset() {
    // Clear selection state
    this.selections = [];
    this.currentSelection = null;
    this.selectionArea.classList.add("hidden");

    // Reset settings
    this.settings = {
      borderColor: "#3b82f6",
      darkness: 0.7,
      blur: 0,
      borderWidth: 2,
      borderRadius: 10,
    };

    // Reset UI controls
    this.updateUIFromState();
    this.saveState(); // Save the initial (reset) state
    this.render();
  }

  updateSettingsAndHistory() {
    this.saveState();
    this.render();
  }

  saveState() {
    // Create a deep copy of the current state
    const state = {
      selections: JSON.parse(JSON.stringify(this.selections)),
      settings: JSON.parse(JSON.stringify(this.settings)),
    };

    // If we are not at the end of history, truncate it
    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }

    this.history.push(state);
    this.historyIndex++;
    this.updateHistoryButtons();
  }

  loadState(state) {
    this.selections = JSON.parse(JSON.stringify(state.selections));
    this.settings = JSON.parse(JSON.stringify(state.settings));
    this.updateUIFromState();
    this.render();
  }

  updateUIFromState() {
    this.darknessSlider.value = this.settings.darkness;
    this.darknessValue.textContent = this.settings.darkness;
    this.blurSlider.value = this.settings.blur;
    this.blurValue.textContent = this.settings.blur;
    this.borderWidthSlider.value = this.settings.borderWidth;
    this.borderWidthValue.textContent =
      this.settings.borderWidth === 0
        ? "Không viền"
        : this.settings.borderWidth;
    this.borderRadiusSlider.value = this.settings.borderRadius;
    this.borderRadiusValue.textContent = this.settings.borderRadius;
    this.customColor.value = this.settings.borderColor;
    this.updateColorSwatches();
  }

  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.loadState(this.history[this.historyIndex]);
      this.updateHistoryButtons();
    }
  }

  redo() {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      this.loadState(this.history[this.historyIndex]);
      this.updateHistoryButtons();
    }
  }

  updateHistoryButtons() {
    this.undoBtn.disabled = this.historyIndex <= 0;
    this.redoBtn.disabled = this.historyIndex >= this.history.length - 1;
  }

  async exportImage() {
    if (!this.originalImage || this.selections.length === 0) return;

    this.showLoading(true);

    try {
      // Create export canvas at original resolution
      const exportCanvas = document.createElement("canvas");
      const exportCtx = exportCanvas.getContext("2d");

      exportCanvas.width = this.originalImage.width;
      exportCanvas.height = this.originalImage.height;

      // Enable high-quality rendering
      exportCtx.imageSmoothingEnabled = true;
      exportCtx.imageSmoothingQuality = "high";

      // Draw original image
      exportCtx.drawImage(this.originalImage, 0, 0);

      // Calculate selections in original image coordinates
      const scaleToOriginal = 1 / this.imageScale;
      const originalSelections = this.selections.map((sel) => ({
        x: sel.x * scaleToOriginal,
        y: sel.y * scaleToOriginal,
        width: sel.width * scaleToOriginal,
        height: sel.height * scaleToOriginal,
        borderWidth: sel.borderWidth * scaleToOriginal,
        borderRadius: sel.borderRadius * scaleToOriginal,
        borderColor: sel.borderColor,
      }));

      // Apply highlight effect
      exportCtx.save();

      // Create a mask for the selection areas
      exportCtx.beginPath();
      originalSelections.forEach((sel) => {
        exportCtx.roundRect(
          sel.x,
          sel.y,
          sel.width,
          sel.height,
          sel.borderRadius
        );
      });
      exportCtx.rect(0, 0, exportCanvas.width, exportCanvas.height);
      exportCtx.clip("evenodd");

      // Apply blur if needed
      if (this.settings.blur > 0) {
        const scaledBlur = this.settings.blur * scaleToOriginal;
        exportCtx.filter = `blur(${scaledBlur}px)`;
      }

      // Fill with dark overlay
      exportCtx.fillStyle = `rgba(0, 0, 0, ${this.settings.darkness})`;
      exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

      exportCtx.restore();

      // Draw borders on top
      exportCtx.save();
      originalSelections.forEach((sel) => {
        if (sel.borderWidth > 0) {
          exportCtx.strokeStyle = sel.borderColor;
          exportCtx.lineWidth = sel.borderWidth;
          exportCtx.beginPath();
          exportCtx.roundRect(
            sel.x,
            sel.y,
            sel.width,
            sel.height,
            sel.borderRadius
          );
          exportCtx.stroke();
        }
      });
      exportCtx.restore();

      // Export as PNG
      exportCanvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `highlight_${new Date().getTime()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showLoading(false);
      }, "image/png");
    } catch (error) {
      console.error("Export error:", error);
      alert("Có lỗi xảy ra khi xuất ảnh!");
      this.showLoading(false);
    }
  }

  updateImageInfo(file, width, height) {
    const size = (file.size / 1024 / 1024).toFixed(2);
    const megapixels = ((width * height) / 1000000).toFixed(1);
    this.imageInfo.textContent = `${width} × ${height} px • ${megapixels}MP • ${size}MB`;
  }

  showLoading(show) {
    this.loadingOverlay.classList.toggle("hidden", !show);
  }
}

// Add roundRect polyfill for older browsers
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function (
    x,
    y,
    width,
    height,
    radius
  ) {
    if (typeof radius === "number") {
      radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
      radius = { tl: 0, tr: 0, br: 0, bl: 0, ...radius };
    }

    this.beginPath();
    this.moveTo(x + radius.tl, y);
    this.lineTo(x + width - radius.tr, y);
    this.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    this.lineTo(x + width, y + height - radius.br);
    this.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius.br,
      y + height
    );
    this.lineTo(x + radius.bl, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    this.lineTo(x, y + radius.tl);
    this.quadraticCurveTo(x, y, x + radius.tl, y);
    this.closePath();
  };
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new HighlightApp();
});
