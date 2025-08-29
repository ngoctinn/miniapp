// TOEIC Part 6 App Logic
class TOEICPart6App {
  constructor() {
    this.questions = TOEIC_PART6_QUESTIONS;
    this.currentQuestionIndex = 0;
    this.currentBlankIndex = 0;
    this.userAnswers = [];
    this.completedBlanks = []; // Track which blanks are completed
    this.score = 0;
    this.totalCorrect = 0;
    this.totalAnswered = 0;
    this.startTime = Date.now();
    this.studyTime = 0;
    this.focusMode = false;
    this.showContext = false;

    this.init();
  }

  init() {
    this.loadQuestion();
    this.setupEventListeners();
    this.updateStats();
    this.startTimer();
  }

  loadQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    this.userAnswers = new Array(question.blanks.length).fill(null);
    this.completedBlanks = new Array(question.blanks.length).fill(false); // Initialize completed blanks

    this.renderPassage();
    this.renderOptions();
    this.updateProgress();
    this.showCurrentBlank();
  }

  renderPassage() {
    const question = this.questions[this.currentQuestionIndex];
    const container = document.getElementById("passage-container");

    // Split passage into parts and replace blanks with interactive elements
    let passageHTML = question.passage;
    const blankRegex = /____\(\d+\)____/g;

    // Replace each blank with proper numbering
    passageHTML = passageHTML.replace(
      blankRegex,
      (match, offset, fullString) => {
        // Find which blank number this is by counting previous blanks
        const beforeMatch = fullString.substring(0, offset);
        const previousBlanks = (beforeMatch.match(/____\(\d+\)____/g) || [])
          .length;
        const currentBlankNum = previousBlanks + 1;
        const blankIndex = currentBlankNum - 1;

        // If this blank is completed, show the correct answer
        if (this.completedBlanks[blankIndex]) {
          const correctAnswer = question.blanks[blankIndex].correct;
          const correctOptionIndex = correctAnswer.charCodeAt(0) - 65;
          const correctWord =
            question.blanks[blankIndex].options[correctOptionIndex];

          return `<span class="completed-blank bg-green-100 text-green-800 px-2 py-1 rounded font-semibold border border-green-300">${correctWord}</span>`;
        }

        // Otherwise, show interactive blank
        const isActive = blankIndex === this.currentBlankIndex;
        const classes = `blank-highlight ${
          isActive ? "blank-active pulse-animation" : ""
        }`;
        return `<span class="${classes}" data-blank="${blankIndex}" onclick="app.selectBlank(${blankIndex})">____(${currentBlankNum})____</span>`;
      }
    );

    container.innerHTML = passageHTML;
  }

  renderOptions() {
    const question = this.questions[this.currentQuestionIndex];
    const currentBlank = question.blanks[this.currentBlankIndex];
    const container = document.getElementById("options-container");

    const optionsHTML = currentBlank.options
      .map((option, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        const isSelected = this.userAnswers[this.currentBlankIndex] === letter;
        return `
                <button class="option-btn p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }"
                        data-option="${letter}"
                        onclick="app.selectOption('${letter}')">
                    <div class="flex items-center">
                        <span class="font-semibold text-lg mr-3 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                          isSelected
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-gray-300"
                        }">
                            ${letter}
                        </span>
                        <span class="text-gray-700">${option}</span>
                    </div>
                </button>
            `;
      })
      .join("");

    container.innerHTML = optionsHTML;
  }

  selectBlank(blankIndex) {
    if (
      blankIndex < 0 ||
      blankIndex >= this.questions[this.currentQuestionIndex].blanks.length
    ) {
      return;
    }

    // Don't allow selecting completed blanks
    if (this.completedBlanks[blankIndex]) {
      return;
    }

    this.currentBlankIndex = blankIndex;
    this.renderPassage();
    this.renderOptions();
    this.showCurrentBlank();
    this.resetBlankState();
  }

  resetBlankState() {
    // Clear any previous selection for current blank
    this.userAnswers[this.currentBlankIndex] = null;

    // Reset buttons
    document.getElementById("check-blank-btn").disabled = true;
    document.getElementById("next-blank-btn").disabled = true;

    // Hide all panels
    this.hideAllPanels();
  }

  selectOption(option) {
    this.userAnswers[this.currentBlankIndex] = option;
    this.renderOptions();

    // Enable check button when current blank has an answer
    if (this.userAnswers[this.currentBlankIndex] !== null) {
      document.getElementById("check-blank-btn").disabled = false;
    }
  }

  showCurrentBlank() {
    const question = this.questions[this.currentQuestionIndex];
    const currentBlank = question.blanks[this.currentBlankIndex];
    const infoDiv = document.getElementById("blank-info");

    document.getElementById("current-blank-num").textContent =
      this.currentBlankIndex + 1;
    document.getElementById(
      "blank-context"
    ).textContent = `Ngữ cảnh: "${currentBlank.context}"`;

    infoDiv.classList.remove("hidden");
  }

  checkAnswer() {
    const question = this.questions[this.currentQuestionIndex];
    const currentBlank = question.blanks[this.currentBlankIndex];
    const userAnswer = this.userAnswers[this.currentBlankIndex];
    const correctAnswer = currentBlank.correct;

    // Only check if user has selected an answer
    if (userAnswer === null) {
      return;
    }

    this.showExplanation(userAnswer === correctAnswer);

    if (userAnswer === correctAnswer) {
      this.totalCorrect++;
    }

    this.totalAnswered++;
    this.updateStats();

    // Mark this blank as completed and show correct answer in passage
    this.completedBlanks[this.currentBlankIndex] = true;
    this.renderPassage(); // Re-render to show correct answer

    // Always enable next blank button after checking
    document.getElementById("next-blank-btn").disabled = false;
    // Disable check button after checking
    document.getElementById("check-blank-btn").disabled = true;
  }

  showExplanation(isCorrect) {
    const question = this.questions[this.currentQuestionIndex];
    const currentBlank = question.blanks[this.currentBlankIndex];
    const explanationPanel = document.getElementById("explanation-panel");
    const explanationContent = document.getElementById("explanation-content");

    let explanationHTML = `
            <div class="mb-3">
                <span class="font-semibold ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }">
                    ${isCorrect ? "✅ Đúng!" : "❌ Sai!"} Đáp án đúng: ${
      currentBlank.correct
    } - ${currentBlank.options[currentBlank.correct.charCodeAt(0) - 65]}
                </span>
            </div>
            <div class="mb-3">
                <strong>Giải thích:</strong> ${currentBlank.explanation}
            </div>
        `;

    // Add distractor analysis if wrong
    if (!isCorrect && currentBlank.distractors) {
      explanationHTML += `
                <div class="mt-3 p-3 bg-red-50 rounded-lg">
                    <strong>Tại sao đáp án sai:</strong>
                    <div class="mt-2 text-sm space-y-1">
                        ${Object.entries(currentBlank.distractors)
                          .map(
                            ([key, explanation]) =>
                              `<div>• ${key}: ${explanation}</div>`
                          )
                          .join("")}
                    </div>
                </div>
            `;
    }

    explanationContent.innerHTML = explanationHTML;
    explanationPanel.classList.remove("hidden");
  }

  nextBlank() {
    const question = this.questions[this.currentQuestionIndex];

    // Find the next incomplete blank
    let nextBlankIndex = this.currentBlankIndex + 1;
    while (
      nextBlankIndex < question.blanks.length &&
      this.completedBlanks[nextBlankIndex]
    ) {
      nextBlankIndex++;
    }

    if (nextBlankIndex < question.blanks.length) {
      this.currentBlankIndex = nextBlankIndex;
      this.renderPassage();
      this.renderOptions();
      this.showCurrentBlank();
      this.resetBlankState();
    } else {
      // All blanks completed, move to next question
      this.nextQuestion();
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentBlankIndex = 0;
      this.loadQuestion();
      this.hideAllPanels();
    } else {
      this.showFinalResults();
    }
  }

  showHint() {
    const question = this.questions[this.currentQuestionIndex];
    const currentBlank = question.blanks[this.currentBlankIndex];
    const hintPanel = document.getElementById("hint-panel");
    const hintContent = document.getElementById("hint-content");

    // Generate hint based on blank context
    let hint = "";
    if (
      currentBlank.position.includes("month") ||
      currentBlank.position.includes("next")
    ) {
      hint = "Nhìn vào thì động từ - đây là hành động sắp tới";
    } else if (
      currentBlank.position.includes("employees") ||
      currentBlank.position.includes("team")
    ) {
      hint = "Cần động từ phù hợp với chủ ngữ số nhiều";
    } else if (
      currentBlank.position.includes("completion") ||
      currentBlank.position.includes("successful")
    ) {
      hint = "Xác định từ loại cần thiết - tính từ hay trạng từ?";
    } else {
      hint = "Xem xét ngữ cảnh xung quanh chỗ trống để chọn từ phù hợp";
    }

    hintContent.textContent = hint;
    hintPanel.classList.remove("hidden");
  }

  toggleFocusMode() {
    this.focusMode = !this.focusMode;
    const btn = document.getElementById("focus-mode-btn");

    if (this.focusMode) {
      btn.classList.add("bg-blue-200", "text-blue-800");
      btn.classList.remove("bg-blue-100", "text-blue-700");
      this.highlightCurrentBlank();
    } else {
      btn.classList.remove("bg-blue-200", "text-blue-800");
      btn.classList.add("bg-blue-100", "text-blue-700");
      this.renderPassage();
    }
  }

  highlightCurrentBlank() {
    if (!this.focusMode) return;

    const blanks = document.querySelectorAll(".blank-highlight");
    blanks.forEach((blank, index) => {
      if (index === this.currentBlankIndex) {
        blank.classList.add("blank-active", "pulse-animation");
      } else {
        blank.classList.add("opacity-30");
      }
    });
  }

  toggleContextTranslation() {
    const panel = document.getElementById("context-translation-panel");
    const content = document.getElementById("context-translation-content");
    const btn = document.getElementById("translate-context-btn");

    if (panel.classList.contains("hidden")) {
      // Show translation
      const question = this.questions[this.currentQuestionIndex];
      const currentBlank = question.blanks[this.currentBlankIndex];

      if (currentBlank.context_translation) {
        content.textContent = currentBlank.context_translation;
        panel.classList.remove("hidden");
        btn.classList.add("bg-purple-200", "text-purple-800");
        btn.classList.remove("bg-purple-100", "text-purple-700");
      }
    } else {
      // Hide translation
      panel.classList.add("hidden");
      btn.classList.remove("bg-purple-200", "text-purple-800");
      btn.classList.add("bg-purple-100", "text-purple-700");
    }
  }

  hideAllPanels() {
    [
      "hint-panel",
      "explanation-panel",
      "answer-analysis",
      "context-translation-panel",
    ].forEach((id) => {
      document.getElementById(id).classList.add("hidden");
    });
  }

  updateProgress() {
    const progress = `${this.currentQuestionIndex + 1}/${
      this.questions.length
    }`;
    document.getElementById("progress").textContent = `Đoạn ${progress}`;
  }

  updateStats() {
    document.getElementById("total-passages").textContent =
      this.currentQuestionIndex + 1;
    document.getElementById("total-correct").textContent = this.totalCorrect;
    const accuracy =
      this.totalAnswered > 0
        ? Math.round((this.totalCorrect / this.totalAnswered) * 100)
        : 0;
    document.getElementById("accuracy").textContent = `${accuracy}%`;

    // Update progress bar based on completed blanks
    const completedCount = this.completedBlanks.filter(
      (completed) => completed
    ).length;
    const progressPercent =
      (completedCount /
        this.questions[this.currentQuestionIndex].blanks.length) *
      100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;

    // Update blanks completed
    document.getElementById(
      "blanks-completed"
    ).textContent = `${completedCount}/${
      this.questions[this.currentQuestionIndex].blanks.length
    }`;
    document.getElementById("correct-blanks").textContent = this.totalCorrect;
  }

  startTimer() {
    setInterval(() => {
      this.studyTime = Math.floor((Date.now() - this.startTime) / 1000 / 60);
      document.getElementById(
        "study-time"
      ).textContent = `${this.studyTime} phút`;
    }, 1000);
  }

  setupEventListeners() {
    // Button event listeners
    document
      .getElementById("check-blank-btn")
      .addEventListener("click", () => this.checkAnswer());
    document
      .getElementById("next-blank-btn")
      .addEventListener("click", () => this.nextBlank());
    document
      .getElementById("hint-btn")
      .addEventListener("click", () => this.showHint());
    document
      .getElementById("focus-mode-btn")
      .addEventListener("click", () => this.toggleFocusMode());
    document
      .getElementById("translate-context-btn")
      .addEventListener("click", () => this.toggleContextTranslation());

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      switch (e.key.toLowerCase()) {
        case "1":
        case "a":
          this.selectOption("A");
          break;
        case "2":
        case "b":
          this.selectOption("B");
          break;
        case "3":
        case "c":
          this.selectOption("C");
          break;
        case "4":
        case "d":
          this.selectOption("D");
          break;
        case "enter":
        case "k":
          if (!document.getElementById("check-blank-btn").disabled) {
            this.checkAnswer();
          }
          break;
        case " ":
          e.preventDefault();
          this.nextBlank();
          break;
        case "h":
          this.showHint();
          break;
        case "f":
          this.toggleFocusMode();
          break;
        case "c":
          this.toggleContextTranslation();
          break;
      }
    });
  }

  showFinalResults() {
    const accuracy =
      this.totalAnswered > 0
        ? Math.round((this.totalCorrect / this.totalAnswered) * 100)
        : 0;
    const resultsHTML = `
            <div class="text-center py-8">
                <h2 class="text-3xl font-bold text-blue-600 mb-4">🎉 Hoàn thành!</h2>
                <div class="grid grid-cols-2 gap-6 max-w-md mx-auto">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-blue-600">${this.totalCorrect}</div>
                        <div class="text-gray-600">Đáp án đúng</div>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-green-600">${accuracy}%</div>
                        <div class="text-gray-600">Độ chính xác</div>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-purple-600">${this.studyTime}</div>
                        <div class="text-gray-600">Thời gian (phút)</div>
                    </div>
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <div class="text-2xl font-bold text-yellow-600">${this.questions.length}</div>
                        <div class="text-gray-600">Đoạn hoàn thành</div>
                    </div>
                </div>
                <button onclick="location.reload()" class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Làm lại từ đầu
                </button>
            </div>
        `;

    document.getElementById("passage-container").innerHTML = resultsHTML;
    document.getElementById("options-container").innerHTML = "";
    document.getElementById("blank-info").classList.add("hidden");
  }
}

// Initialize the app when DOM is loaded
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new TOEICPart6App();
});
