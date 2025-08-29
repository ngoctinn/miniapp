# TOEIC Part 5 Trainer

Ứng dụng luyện tập TOEIC Part 5 (Ngữ pháp và Từ vựng) với giao diện web responsive.

## Cấu trúc dự án

```
toeic-app/
├── index.html          # File chính của ứng dụng
├── questions.json      # Dữ liệu câu hỏi TOEIC
└── README.md          # Tài liệu này
```

## Tính năng

- **Luyện tập TOEIC Part 5**: 10 câu hỏi mẫu với giải thích chi tiết
- **Giao diện thân thiện**: Sử dụng Tailwind CSS cho thiết kế hiện đại
- **Chế độ luyện tập**: Practice mode với câu hỏi ngẫu nhiên
- **Chế độ ôn tập**: Review mode cho các câu đã đánh dấu
- **Thống kê chi tiết**: Theo dõi điểm số, tỷ lệ đúng, thời gian trung bình
- **Cài đặt linh hoạt**: Điều chỉnh độ khó, ngôn ngữ, âm thanh
- **Lưu trữ dữ liệu**: Tự động lưu tiến độ vào localStorage
- **Xuất/Nhập dữ liệu**: Export/Import dữ liệu cá nhân

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt web
2. Ứng dụng sẽ tự động tải dữ liệu từ `questions.json`
3. Bắt đầu luyện tập bằng cách chọn câu trả lời và nhấn "Check Answer"
4. Sử dụng các nút điều khiển để xem gợi ý, giải thích, hoặc chuyển câu

## Thêm câu hỏi mới

Để thêm câu hỏi mới:

1. Mở file `questions.json`
2. Thêm object mới vào mảng với cấu trúc:

```json
{
  "id": "q11",
  "question": "Câu hỏi mới ở đây",
  "options": ["A", "B", "C", "D"],
  "answer": "A",
  "explanation": {
    "vi": "Giải thích bằng tiếng Việt",
    "en": "Explanation in English"
  },
  "grammar_tags": ["tag1", "tag2"],
  "vocab_tags": ["tag1", "tag2"],
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
