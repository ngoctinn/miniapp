# TOEIC Part 6 - Hoàn Thành Đoạn Văn 🎯

Một ứng dụng web sáng tạo và tương tác để luyện tập TOEIC Par## 📁 Cấu trúc dự án

````
toeic-part6-app/
├── index.html           # Giao diện chính
├── questions.js         # Cơ sở dữ liệu câu hỏi
├── app.js              # Logic ứng dụng
├── README.md           # Tài liệu này
├── AI_PROMPT_GENERATOR.md  # Prompt sinh dữ liệu AI
└── [Các file khác nếu có]
``` Completion), giúp người học nắm bắt toàn bộ đoạn văn thay vì chỉ tập trung vào từng câu riêng lẻ.

## ✨ Tính năng nổi bật

### 🎨 Thiết kế sáng tạo

- **Giao diện hiện đại**: Sử dụng Tailwind CSS với gradient và animation
- **Trải nghiệm tương tác**: Highlight chỗ trống, pulse animation khi active
- **Responsive design**: Hoạt động tốt trên mọi thiết bị

### 🧠 Cách tiếp cận toàn diện

- **Focus Mode**: Làm nổi bật chỗ trống hiện tại, làm mờ các chỗ khác
- **Dịch ngữ cảnh**: Hiển thị bản dịch tiếng Việt của ngữ cảnh xung quanh chỗ trống
- **Progressive Learning**: Học từng chỗ trống một cách có hệ thống

### 📊 Theo dõi tiến độ chi tiết

- **Real-time Stats**: Theo dõi số câu đúng, độ chính xác, thời gian học
- **Progress Bar**: Thanh tiến trình cho từng đoạn văn
- **Performance Analytics**: Phân tích hiệu suất tổng thể

### ⌨️ Phím tắt tiện lợi

- `1-4` hoặc `A-D`: Chọn đáp án
- `Enter` hoặc `K`: Kiểm tra đáp án
- `Space`: Chuyển sang chỗ trống tiếp theo
- `H`: Hiển thị gợi ý
- `F`: Bật/tắt Focus Mode
- `C`: Bật/tắt Dịch ngữ cảnh

## 📖 Cách TOEIC Part 6 hoạt động

TOEIC Part 6 yêu cầu bạn:

1. Đọc một đoạn văn (thường 4-5 câu)
2. Hoàn thành các chỗ trống bằng cách chọn từ phù hợp từ 4 lựa chọn
3. Mỗi đoạn có 3-4 chỗ trống
4. Tập trung vào ngữ pháp, từ vựng, và logic của đoạn văn

## 🎯 Ưu điểm của ứng dụng này

### So với Part 5 (câu đơn lẻ):

- **Toàn diện hơn**: Hiểu được ngữ cảnh toàn đoạn
- **Logic mạnh hơn**: Các chỗ trống liên kết với nhau
- **Thực tế hơn**: Gần với tình huống thực tế
- **Giữ nhịp độ**: Không bị đứt đoạn giữa các câu

### Tính năng học tập nâng cao:

- **Giải thích chi tiết**: Không chỉ đáp án đúng mà còn phân tích đáp án sai
- **Gợi ý thông minh**: Dựa trên ngữ cảnh cụ thể
- **Học từ lỗi**: Hiểu tại sao đáp án sai để tránh lặp lại
- **Tiếp cận linh hoạt**: Có thể học từng chỗ trống hoặc toàn đoạn

## 🤖 Sinh Dữ Liệu Tự Động với AI

### 🎯 **Tính năng đặc biệt**
Ứng dụng hỗ trợ **sinh dữ liệu tự động** bằng AI để mở rộng kho câu hỏi một cách nhanh chóng và hiệu quả.

### 📋 **Cách sử dụng**
1. **Mở file**: `AI_PROMPT_GENERATOR.md`
2. **Copy prompt** đầy đủ
3. **Dán vào AI tool** (ChatGPT, Claude, Gemini, v.v.)
4. **Chỉnh sửa tham số** nếu cần (số lượng, chủ đề, độ khó)
5. **Chạy và lấy kết quả**
6. **Tích hợp vào ứng dụng**

### 📊 **Lợi ích**
- **Tự động hóa**: Sinh hàng trăm câu hỏi trong vài phút
- **Đa dạng hóa**: Chủ đề phong phú, độ khó linh hoạt
- **Tùy chỉnh**: Điều chỉnh tham số theo nhu cầu
- **Cập nhật**: Dễ dàng bổ sung nội dung mới

### 🔧 **Ví dụ sử dụng**
```javascript
// Kết quả từ AI sẽ có format như này:
const new_questions = [
  {
    id: "p6_011",
    title: "Business Report",
    passage: `Our quarterly sales ____(1)____ significantly...`,
    // ... các trường khác
  }
];

// Tích hợp vào ứng dụng
const TOEIC_PART6_QUESTIONS = [
  ...existing_questions,
  ...new_questions
];
````

### 📈 **Thống kê dữ liệu AI**

- **Số lượng**: Có thể tạo 10-50 câu hỏi mỗi lần
- **Chất lượng**: Đảm bảo theo tiêu chuẩn TOEIC
- **Đa dạng**: 9 chủ đề kinh doanh khác nhau
- **Độ khó**: Phân bổ đều từ dễ đến khó

---

## 📁 Cấu trúc dự án

```
toeic-part6-app/
├── index.html              # Giao diện chính
├── questions.js            # Cơ sở dữ liệu câu hỏi
├── app.js                  # Logic ứng dụng
├── ai_samples.js           # Dữ liệu mẫu từ AI
├── AI_PROMPT_GENERATOR.md  # Prompt sinh dữ liệu AI
├── README.md               # Tài liệu này
└── [Các file khác nếu có]
```

## 🚀 Cách sử dụng

1. **Mở ứng dụng**: Mở `index.html` trong trình duyệt
2. **Đọc đoạn văn**: Hiểu ngữ cảnh tổng thể
3. **Chọn chỗ trống**: Click vào chỗ trống hoặc dùng Focus Mode
4. **Chọn đáp án**: Click vào lựa chọn hoặc dùng phím tắt
5. **Kiểm tra**: Nhấn "Kiểm tra chỗ trống này"
6. **Học từ kết quả**: Đọc giải thích và phân tích
7. **Tiếp tục**: Chuyển sang chỗ trống tiếp theo

## 📚 Nội dung học tập

### Các chủ đề chính:

- **Business Communication**: Email, báo cáo, thông báo
- **Corporate Events**: Lời mời họp, sự kiện công ty
- **Product Descriptions**: Mô tả sản phẩm, quảng cáo
- **Financial Reports**: Báo cáo tài chính, kết quả kinh doanh

### Kỹ năng ngữ pháp:

- **Verb Tenses**: Thì động từ phù hợp
- **Word Forms**: Dạng từ (noun, verb, adjective, adverb)
- **Passive Voice**: Bị động
- **Compound Words**: Từ ghép
- **Prepositions**: Giới từ
- **Articles**: Mạo từ

## 🎮 Chế độ học tập

### 1. **Learning Mode** (Mặc định)

- Học từng chỗ trống một cách tuần tự
- Nhận feedback ngay lập tức
- Xem giải thích chi tiết

### 2. **Focus Mode**

- Chỉ tập trung vào chỗ trống hiện tại
- Các chỗ trống khác bị làm mờ
- Giúp tập trung tốt hơn

### 3. **Dịch ngữ cảnh**

- Hiển thị bản dịch tiếng Việt của ngữ cảnh xung quanh chỗ trống
- Giúp hiểu rõ hơn ý nghĩa của câu
- Hỗ trợ người học tiếng Anh ở mức cơ bản

## 📈 Theo dõi tiến độ

Ứng dụng tự động theo dõi:

- **Số đoạn đã hoàn thành**
- **Tổng số đáp án đúng**
- **Độ chính xác (%)**
- **Thời gian học tập**
- **Tiến độ từng đoạn**

## 🔧 Tùy chỉnh

### Thêm câu hỏi mới:

1. Mở `questions.js`
2. Thêm object mới vào `TOEIC_PART6_QUESTIONS`
3. Đảm bảo format đúng:
   ```javascript
   {
     id: "p6_xxx",
     title: "Tiêu đề đoạn văn",
     passage: "Đoạn văn với ____(1)____ chỗ trống",
     blanks: [
       {
         id: 1,
         options: ["A", "B", "C", "D"],
         correct: "A",
         // ... các trường khác
       }
     ]
   }
   ```

### Tùy chỉnh giao diện:

- Chỉnh sửa `index.html` để thay đổi CSS
- Thêm animation trong `app.js`
- Tùy chỉnh màu sắc trong Tailwind classes

## 🌟 Mẹo học tập hiệu quả

1. **Đọc toàn bộ đoạn trước**: Hiểu ngữ cảnh tổng thể
2. **Xác định loại từ cần**: Noun, verb, adjective?
3. **Xem ngữ cảnh xung quanh**: Các từ trước và sau chỗ trống
4. **Loại trừ đáp án sai**: Đôi khi dễ hơn tìm đáp án đúng
5. **Học từ các lỗi**: Phân tích tại sao chọn sai
6. **Luyện tập thường xuyên**: 15-20 phút mỗi ngày

## 📞 Liên hệ

Nếu bạn có ý kiến đóng góp hoặc phát hiện lỗi, vui lòng tạo issue trong repository.

## 🚀 Hướng Dẫn Sinh Dữ Liệu với AI

### 📋 **Bước 1: Chuẩn bị**

1. Mở file `AI_PROMPT_GENERATOR.md`
2. Copy toàn bộ nội dung prompt
3. Mở AI tool (ChatGPT, Claude, Gemini, v.v.)

### 🎯 **Bước 2: Tùy chỉnh (tùy chọn)**

```javascript
// Thay đổi các tham số này trong prompt:
**Số lượng:** Tạo 15 đoạn văn TOEIC Part 6  // Thay đổi số lượng
**Độ khó:** Chỉ tạo câu trung bình (level 2)  // Thay đổi độ khó
**Chủ đề:** Chỉ tập trung vào Business Communication  // Thay đổi chủ đề
```

### 🤖 **Bước 3: Chạy AI**

1. Paste prompt vào AI
2. Nhấn "Generate" hoặc "Run"
3. Đợi AI tạo dữ liệu (thường 1-2 phút)

### 📝 **Bước 4: Xử lý kết quả**

```javascript
// Kết quả từ AI sẽ có format như này:
const new_questions = [
  {
    id: "p6_011",
    title: "Meeting Invitation",
    passage: `You are ____(1)____ invited to attend...`,
    blanks: [
      {
        id: 1,
        context: "Cần trạng từ chỉ cách thức mời",
        context_translation: "Bạn được ____ mời tham dự...", // Dịch ngữ cảnh
        explanation: "Giải thích đáp án đúng",
        distractors: {
          /* Giải thích đáp án sai */
        },
      },
    ],
    // ... các trường khác
  },
  // ... thêm 9-14 câu hỏi nữa
];
```

### 🔧 **Bước 5: Tích hợp**

1. Mở file `questions.js`
2. Thêm dữ liệu mới vào mảng:

```javascript
const TOEIC_PART6_QUESTIONS = [
  // Dữ liệu cũ có sẵn
  ...existing_questions,

  // Dữ liệu mới từ AI
  ...new_questions,
];
```

### ✅ **Bước 6: Test**

1. Mở `index.html` trong trình duyệt
2. Kiểm tra các câu hỏi mới
3. Đảm bảo hoạt động ổn định

## 📊 Ví dụ Kết quả AI

### Câu hỏi mẫu được tạo:

```javascript
{
  id: "p6_011",
  title: "Product Launch Announcement",
  passage: `We are excited to ____(1)____ our new software solution next week. The product has been ____(2)____ tested and is ready for market release.`,
  blanks: [
    {
      id: 1,
      options: ["launch", "launched", "launching", "to launch"],
      correct: "A",
      context: "Cần động từ chỉ hành động sắp tới",
      context_translation: "Chúng tôi rất excited để ____ giải pháp phần mềm mới của mình vào tuần tới",
      explanation: "'Launch' is the correct verb form for future plans",
      // ... các trường khác
    }
  ],
  difficulty: 1,
  tags: ["product_launch", "announcement", "future_plans"]
}
```

## 🎨 Tùy Chỉnh Nâng Cao

### Thay đổi tham số prompt:

```
**Số lượng:** Tạo 25 đoạn văn
**Độ khó:** 10 dễ + 10 trung bình + 5 khó
**Chủ đề:** Technology, Finance, Marketing
**Focus:** Tập trung vào phrasal verbs
```

### Yêu cầu đặc biệt:

```
**Style:** Formal business English only
**Length:** Chỉ tạo đoạn văn dài (6-8 câu)
**Vocabulary:** Sử dụng từ vựng TOEIC 750+ điểm
```

## 🔄 Lặp Lại Quy Trình

1. **Tạo thêm dữ liệu**: Lặp lại bước 1-6
2. **Cập nhật thường xuyên**: Tạo 5-10 câu hỏi mới mỗi tuần
3. **Đa dạng hóa**: Thay đổi chủ đề và độ khó
4. **Kiểm soát chất lượng**: Review và chỉnh sửa nếu cần

---

**Chúc bạn học tập hiệu quả! 🎓**
