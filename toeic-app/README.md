# TOEIC Part 5 Trainer

Ứng dụng luyện tập TOEIC Part 5 (Ngữ pháp và Từ vựng) với giao diện web responsive, được thiết kế để giúp người học TOEIC ôn luyện hiệu quả với dữ liệu chất lượng cao.

## Cấu trúc dự án

```
toeic-app/
├── index.html          # File chính của ứng dụng (giao diện và logic)
├── questions.js        # Dữ liệu câu hỏi TOEIC (ES6 module)
└── README.md          # Tài liệu hướng dẫn này
```

## Tính năng chính

- **Luyện tập TOEIC Part 5**: Bộ câu hỏi ngữ pháp và từ vựng chất lượng cao
- **Giao diện hiện đại**: Thiết kế responsive với Tailwind CSS
- **Chế độ luyện tập linh hoạt**:
  - Practice mode: Luyện tập ngẫu nhiên
  - Review mode: Ôn tập câu đã đánh dấu
  - Test mode: Thi thử với thời gian giới hạn
- **Thống kê chi tiết**: Theo dõi tiến độ, tỷ lệ đúng, thời gian làm bài
- **Cài đặt cá nhân hóa**: Điều chỉnh độ khó, ngôn ngữ, âm thanh
- **Lưu trữ thông minh**: Tự động lưu tiến độ vào localStorage
- **Xuất/Nhập dữ liệu**: Sao lưu và khôi phục dữ liệu cá nhân
- **Giải thích song ngữ**: Hỗ trợ tiếng Việt và tiếng Anh
- **Hệ thống gợi ý**: Hỗ trợ học viên khi gặp khó khăn

## Cách sử dụng

### Chạy ứng dụng

1. Mở file `index.html` trong trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
2. Ứng dụng sẽ tự động tải dữ liệu từ `questions.js`
3. Bắt đầu luyện tập bằng cách chọn câu trả lời và nhấn "Check Answer"
4. Sử dụng các nút điều khiển để xem gợi ý, giải thích, hoặc chuyển câu tiếp theo

### Giao diện chính

- **Câu hỏi**: Hiển thị ở phía trên cùng
- **Lựa chọn**: 4 đáp án A, B, C, D
- **Nút điều khiển**: Check Answer, Show Hint, Show Explanation, Next Question
- **Thanh tiến trình**: Hiển thị câu hiện tại và tổng số câu
- **Thống kê**: Điểm số, tỷ lệ đúng, thời gian

## Giao diện ứng dụng

### Màn hình chính

![Màn hình chính](E:\Projects\miniapp\toeic-app\image.png)

_Màn hình chính hiển thị câu hỏi TOEIC Part 5 với 4 lựa chọn đáp án, thanh tiến trình và các nút điều khiển._

## Tạo dữ liệu với AI

Để tạo bộ dữ liệu TOEIC chất lượng cao, bạn có thể sử dụng AI (như ChatGPT, Claude, hoặc GitHub Copilot) với prompt sau:

### Prompt mẫu cho AI:

````
Tôi cần bạn tạo một bộ dữ liệu JSON cho ứng dụng luyện tập TOEIC Part 5 (Ngữ pháp và Từ vựng).

**YÊU CẦU:**
1. **Số lượng:** Tạo 50 câu hỏi TOEIC Part 5 + Từ vựng chất lượng cao
2. **Định dạng:** Tuân thủ cấu trúc JSON chính xác, câu hỏi Part 5 theo hình thức đề TOEIC thật
3. **Ngôn ngữ:** Câu hỏi bằng tiếng Anh (Part 5) hoặc đa dạng (từ vựng), giải thích song ngữ
4. **Độ khó:** Phân bổ đều từ 1-5 (khoảng 10 câu mỗi mức)
5. **Đa dạng:** Bao gồm ngữ pháp TOEIC (tenses, pronouns, prepositions, etc.) và từ vựng (business, office, etc.)
6. **Gộp:** Xen lẫn câu hỏi ngữ pháp và từ vựng

**CẤU TRÚC JSON BẮT BUỘC:**

```javascript
const TOEIC_QUESTIONS = [
  {
    "id": "q1",
    "question": "Câu hỏi bằng tiếng Anh",
    "options": ["Lựa chọn 1", "Lựa chọn 2", "Lựa chọn 3", "Lựa chọn 4"],
    "answer": "A",
    "explanation": {
      "vi": "Giải thích ngữ pháp bằng tiếng Việt",
      "en": "Grammar explanation in English"
    },
    "translation": {
      "vi": "Dịch đầy đủ câu hỏi bằng tiếng Việt",
      "en": "Full translation of the question in English"
    },
    "grammar_tags": ["tense", "present_continuous"],
    "vocab_tags": ["business", "communication"],
    "difficulty": 2,
    "distractor_notes": {
      "B": "Lý do B sai bằng tiếng Việt",
      "C": "Lý do C sai bằng tiếng Việt",
      "D": "Lý do D sai bằng tiếng Việt"
    },
    "hint": "Gợi ý bằng tiếng Việt"
  }
];
````

**Ví dụ Part 5:**

```javascript
{
  id: "q1",
  question: "The manager has asked new interns to help ------ prepare the slides.",
  options: ["she", "her", "herself", "hers"],
  answer: "B",
  explanation: {
    vi: "Động từ 'help' cần tân ngữ. 'Her' là đại từ tân ngữ.",
    en: "The verb 'help' requires an object pronoun. 'Her' is the object pronoun."
  },
  translation: {
    vi: "Quản lý đã yêu cầu thực tập sinh mới giúp cô ấy chuẩn bị các slide.",
    en: "The manager has asked new interns to help her prepare the slides."
  },
  grammar_tags: ["pronoun", "object_pronoun"],
  vocab_tags: ["office", "presentation"],
  difficulty: 1,
  distractor_notes: {
    A: "'She' là đại từ chủ ngữ.",
    C: "'Herself' là đại từ phản thân.",
    D: "'Hers' là đại từ sở hữu."
  },
  hint: "Đại từ sau động từ 'help'?"
}
```

**Ví dụ từ vựng:**

```javascript
{
  id: "q2",
  question: "Từ nào có nghĩa là 'sự chấp thuận'?",
  options: ["prohibit", "authorize", "approval", "regulate"],
  answer: "C",
  explanation: {
    vi: "'Approval' là danh từ nghĩa là sự chấp thuận.",
    en: "'Approval' is a noun meaning agreement or acceptance."
  },
  translation: {
    vi: "Từ nào có nghĩa là 'sự chấp thuận'?",
    en: "Which word means 'approval'?"
  },
  grammar_tags: ["vocabulary"],
  vocab_tags: ["permission", "business"],
  difficulty: 2,
  distractor_notes: {
    A: "'Prohibit' = cấm (động từ).",
    B: "'Authorize' = ủy quyền (động từ).",
    D: "'Regulate' = quy định (động từ)."
  },
  hint: "Tìm danh từ (noun)."
}
```

**Lưu ý cho AI:**

- Đảm bảo field `translation` có bản dịch đầy đủ
- Grammar_tags và vocab_tags đa dạng và chính xác
- Distractor_notes chỉ cho đáp án sai
- Hint ngắn gọn bằng tiếng Việt
- Phân bổ độ khó đều đặn

````

### Cách sử dụng prompt:

1. Copy prompt trên vào ChatGPT/Claude
2. Yêu cầu AI tạo dữ liệu theo cấu trúc
3. Kiểm tra và chỉnh sửa nếu cần
4. Thay thế nội dung trong `questions.js`

## Cấu trúc dữ liệu

Mỗi câu hỏi trong `questions.js` có cấu trúc sau:

```javascript
{
  id: "q1",                    // ID duy nhất
  question: "Câu hỏi",         // Nội dung câu hỏi
  options: ["A", "B", "C", "D"], // 4 lựa chọn
  answer: "A",                 // Đáp án đúng
  explanation: {               // Giải thích ngữ pháp
    vi: "Giải thích tiếng Việt",
    en: "English explanation"
  },
  translation: {               // Dịch câu hỏi đầy đủ
    vi: "Dịch tiếng Việt",
    en: "English translation"
  },
  grammar_tags: ["tag1"],      // Tags ngữ pháp
  vocab_tags: ["tag1"],        // Tags từ vựng
  difficulty: 1,               // Độ khó 1-5
  distractor_notes: {          // Lý do đáp án sai
    "B": "Lý do B sai",
    "C": "Lý do C sai",
    "D": "Lý do D sai"
  },
  hint: "Gợi ý"                // Gợi ý cho người học
}
````

## Công nghệ sử dụng

- **HTML5**: Cấu trúc và semantic markup
- **CSS3 + Tailwind CSS**: Styling responsive và hiện đại
- **Vanilla JavaScript (ES6+)**: Logic ứng dụng, state management
- **Local Storage API**: Lưu trữ dữ liệu client-side
- **Web Audio API**: Phản hồi âm thanh (tùy chọn)

## Phát triển thêm

Ứng dụng có thể được mở rộng với:

- **Backend Integration**: Kết nối với server để lưu dữ liệu đám mây
- **Advanced Analytics**: Biểu đồ thống kê chi tiết với Chart.js
- **Multi-language Support**: Hỗ trợ thêm ngôn ngữ khác
- **Audio Questions**: Thêm câu hỏi nghe TOEIC
- **Collaborative Learning**: Chia sẻ tiến độ với bạn bè
- **Mobile App**: Convert sang React Native hoặc Flutter
- **AI Integration**: Tích hợp AI để tạo câu hỏi tự động

## Đóng góp

Nếu bạn muốn đóng góp:

1. Fork repository
2. Tạo branch mới cho feature
3. Commit changes
4. Push và tạo Pull Request
5. Đảm bảo code quality và documentation

## License

Dự án này được tạo cho mục đích học tập và nghiên cứu. Có thể sử dụng, sửa đổi và phân phối tự do với điều kiện ghi rõ nguồn gốc.

---

_Tạo bởi AI Assistant - Version 1.0_
"difficulty": 2,
"distractor_notes": {
"B": "Lý do B sai",
"C": "Lý do C sai",
"D": "Lý do D sai"
},
"hint": "Gợi ý cho câu hỏi"
}

```

## Công nghệ sử dụng

- **HTML5**: Cấu trúc ứng dụng
- **CSS3 + Tailwind CSS**: Styling và responsive design
- **Vanilla JavaScript**: Logic ứng dụng và tương tác
- **Local Storage**: Lưu trữ dữ liệu người dùng
- **Web Audio API**: Phản hồi âm thanh

## Phát triển thêm

Ứng dụng có thể được mở rộng bằng cách:

- Thêm nhiều câu hỏi hơn vào `questions.json`
- Tích hợp với server để lưu dữ liệu đám mây
- Thêm chế độ thi thử với thời gian giới hạn
- Hỗ trợ nhiều ngôn ngữ hơn
- Thêm biểu đồ thống kê chi tiết

## License

Dự án này được tạo cho mục đích học tập và có thể được sử dụng tự do.
```
