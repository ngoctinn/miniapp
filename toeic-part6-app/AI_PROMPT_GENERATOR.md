# 🎯 TOEIC Part 6 - Prompt để Sinh Dữ Liệu Tự Động

## 📝 Mục đích

Prompt này được thiết kế để nhờ AI (ChatGPT, Claude, Gemini, v.v.) tự động sinh dữ liệu cho ứng dụng TOEIC Part 6 dựa trên tài liệu học tập có sẵn.

## 🚀 Cách sử dụng

### 1. Sao chép toàn bộ prompt bên dưới

### 2. Dán vào AI tool (ChatGPT, Claude, v.v.)

### 3. Chỉnh sửa các tham số nếu cần (số lượng câu hỏi, chủ đề, độ khó)

### 4. Chạy và lấy kết quả

### 5. Copy kết quả vào file `questions.js`

---

## 📋 PROMPT CHÍNH

````
Bạn là chuyên gia TOEIC với hơn 10 năm kinh nghiệm dạy học và ra đề thi. Tôi cần bạn tạo dữ liệu cho ứng dụng TOEIC Part 6 (Text Completion) theo định dạng JavaScript.

## 📚 YÊU CẦU CHUNG

**Số lượng:** Tạo 10 đoạn văn TOEIC Part 6
**Độ khó:** Phân bổ đều - 4 câu dễ, 4 câu trung bình, 2 câu khó
**Chủ đề:** Business, Office, Technology, Marketing, Finance, HR, Events, Travel, Communication
**Ngôn ngữ:** Tiếng Anh chuẩn (US/UK), phù hợp với TOEIC
**Độ dài:** Mỗi đoạn 4-6 câu, 3-4 chỗ trống

## 🎯 ĐỊNH DẠNG DỮ LIỆU

Tạo dữ liệu theo cấu trúc JSON sau, sau đó convert sang JavaScript:

```javascript
const TOEIC_PART6_QUESTIONS = [
  {
    id: "p6_001",
    title: "Tiêu đề đoạn văn (ví dụ: Email về kế hoạch đào tạo)",
    passage: `Đoạn văn hoàn chỉnh với ____(1)____ chỗ trống được đánh số`,
    blanks: [
      {
        id: 1,
        position: "Từ ngữ cảnh để xác định vị trí",
        options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
        correct: "A",
        context: "Mô tả ngữ cảnh xung quanh chỗ trống",
        context_translation: "Bản dịch ngữ cảnh: 'chương trình đào tạo mà công ty chúng ta sẽ ____ vào tháng tới'",
        explanation: "Giải thích tại sao đáp án này đúng",
        distractors: {
          B: "Tại sao đáp án B sai",
          C: "Tại sao đáp án C sai",
          D: "Tại sao đáp án D sai"
        }
      }
    ],
    overall_explanation: {
      vi: "Giải thích tổng thể bằng tiếng Việt",
      en: "Overall explanation in English"
    },
    difficulty: 1, // 1=dễ, 2=trung bình, 3=khó
    tags: ["business_email", "training", "future_plans"],
    translation: {
      vi: "Bản dịch đầy đủ sang tiếng Việt",
      en: "Original English passage"
    }
  }
];
````

## 📖 QUY TẮC TẠO CÂU HỎI

### 1. **Chủ đề và Bối cảnh**

- Business emails, reports, announcements
- Meeting invitations, event planning
- Product descriptions, advertisements
- Financial reports, performance reviews
- Job applications, company policies
- Travel arrangements, booking confirmations

### 2. **Loại từ cần điền**

- **Grammar**: Verb tenses, articles, prepositions
- **Vocabulary**: Business terms, phrasal verbs, collocations
- **Word forms**: Noun/verb/adjective/adverb
- **Fixed expressions**: Idioms, business phrases
- **Passive voice**: Common in formal writing

### 3. **Độ khó**

- **Dễ (1)**: Basic grammar, common vocabulary
- **Trung bình (2)**: Mixed tenses, business terms, word forms
- **Khó (3)**: Complex structures, less common vocabulary, context-dependent

### 4. **Chất lượng đáp án**

- **Đáp án đúng**: Hoàn toàn chính xác, phù hợp ngữ cảnh
- **Đáp án sai**: Sai về grammar, nghĩa, hoặc không phù hợp
- **Giải thích**: Rõ ràng, dễ hiểu, có ví dụ nếu cần
- **Context Translation**: Dịch chính xác ngữ cảnh xung quanh chỗ trống

## 🎨 VÍ DỤ CHI TIẾT

### Ví dụ 1: Email đơn giản (Dễ)

```javascript
{
  id: "p6_001",
  title: "Email về kế hoạch đào tạo",
  passage: `Dear Team,

I am writing to inform you about the upcoming training program that our company will ____(1)____ next month. The program is designed to ____(2)____ our employees with the latest skills in digital marketing and customer service.

Best regards,
HR Manager`,
  blanks: [
    {
      id: 1,
      position: "next month",
      options: ["launch", "launched", "launching", "to launch"],
      correct: "A",
      context: "Cần động từ chỉ hành động sắp tới",
      explanation: "'Launch' là động từ phù hợp cho kế hoạch tương lai",
      distractors: {
        B: "'Launched' là quá khứ",
        C: "'Launching' là danh động từ",
        D: "'To launch' không phù hợp với cấu trúc"
      }
    }
  ],
  overall_explanation: {
    vi: "Email thông báo về chương trình đào tạo tập trung vào thì động từ tương lai",
    en: "Announcement email focusing on future tense verbs"
  },
  difficulty: 1,
  tags: ["business_email", "training", "future_plans"],
  translation: {
    vi: "Kính gửi đội ngũ,\n\nTôi viết để thông báo về chương trình đào tạo sắp tới mà công ty sẽ triển khai vào tháng tới...",
    en: "Original English passage"
  }
}
```

## 📊 THỐNG KÊ YÊU CẦU

### Phân bổ chủ đề (10 câu):

- Business Communication: 3
- Office/Admin: 2
- Technology/IT: 2
- Marketing/Sales: 1
- Finance: 1
- HR/Events: 1

### Phân bổ loại từ:

- Verbs (30%)
- Nouns (25%)
- Adjectives/Adverbs (20%)
- Prepositions (10%)
- Fixed expressions (10%)
- Articles (5%)

### Phân bổ độ khó:

- Dễ: 4 câu
- Trung bình: 4 câu
- Khó: 2 câu

## ✅ TIÊU CHÍ ĐÁNH GIÁ

### Độ chính xác:

- [ ] Ngữ pháp hoàn toàn đúng
- [ ] Từ vựng phù hợp với TOEIC
- [ ] Ngữ cảnh logic và tự nhiên
- [ ] Đáp án sai có lỗi rõ ràng

### Tính đa dạng:

- [ ] Chủ đề đa dạng
- [ ] Loại từ điền đa dạng
- [ ] Độ khó phân bổ đều
- [ ] Độ dài đoạn văn phù hợp

### Chất lượng:

- [ ] Giải thích rõ ràng
- [ ] Bản dịch chính xác
- [ ] Tags phù hợp
- [ ] Format đúng chuẩn

## 🚨 LƯU Ý QUAN TRỌNG

1. **KHÔNG** tạo câu hỏi trùng lặp với dữ liệu có sẵn
2. **ĐẢM BẢO** tất cả đáp án đều có giải thích chi tiết
3. **KIỂM TRA** ngữ pháp và chính tả cẩn thận
4. **ĐÁNH GIÁ** độ khó phù hợp với trình độ TOEIC
5. **TEST** bằng cách chạy ứng dụng để đảm bảo hoạt động

## 📤 ĐẦU RA

Sau khi tạo xong, hãy:

1. Đếm số lượng câu hỏi: \_\_\_/10
2. Kiểm tra format JSON: ✅
3. Test với ứng dụng: ✅
4. Gửi kết quả để review: ✅

---

**Hãy bắt đầu tạo dữ liệu TOEIC Part 6 theo yêu cầu trên!**

````

---

## 🔧 Cách tích hợp vào ứng dụng

### 1. **Lấy dữ liệu từ AI**
- Copy prompt trên
- Chạy với AI tool
- Nhận kết quả JSON

### 2. **Chuyển đổi format**
```javascript
// Từ JSON sang JavaScript
const TOEIC_PART6_QUESTIONS = [/* Paste AI result here */];

// Hoặc merge với dữ liệu có sẵn
const TOEIC_PART6_QUESTIONS = [
  ...existing_questions,
  ...new_ai_generated_questions
];
````

### 3. **Cập nhật ứng dụng**

- Paste vào file `questions.js`
- Test ứng dụng
- Kiểm tra tính ổn định

## 📈 Lợi ích của phương pháp này

### 🎯 **Tự động hóa**

- Sinh hàng trăm câu hỏi trong vài phút
- Tiết kiệm thời gian so với tạo thủ công
- Duy trì tính nhất quán về chất lượng

### 📚 **Đa dạng hóa**

- Chủ đề phong phú và đa dạng
- Độ khó linh hoạt điều chỉnh
- Thích ứng với nhu cầu học tập

### 🔄 **Lặp lại**

- Dễ dàng tạo thêm dữ liệu mới
- Cập nhật nội dung thường xuyên
- Mở rộng cơ sở dữ liệu

## 🎨 Tùy chỉnh nâng cao

### Thay đổi tham số:

```
**Số lượng:** Tạo 20 đoạn văn TOEIC Part 6
**Độ khó:** Chỉ tạo câu khó (level 3)
**Chủ đề:** Chỉ tập trung vào Business Communication
```

### Thêm yêu cầu đặc biệt:

```
**Focus:** Tập trung vào phrasal verbs
**Style:** Formal business English only
**Length:** Chỉ tạo đoạn văn dài (6-8 câu)
```

---

**Bắt đầu tạo dữ liệu TOEIC Part 6 với AI ngay! 🚀**
