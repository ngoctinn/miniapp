// 🎯 TOEIC Part 6 - Dữ liệu mẫu được tạo bởi AI
// File này chứa các câu hỏi mẫu được sinh tự động từ prompt AI
// Bạn có thể sử dụng dữ liệu này để test hoặc làm tham khảo

const AI_GENERATED_SAMPLES = [
  {
    id: "p6_ai_001",
    title: "Business Email About Training",
    passage: `Dear Team,

I am writing to inform you about the upcoming training program that our company will ____(1)____ next month. The program is designed to ____(2)____ our employees with the latest skills in digital marketing and customer service. All participants will receive a certificate upon ____(3)____ completion of the course.

We have invited several industry ____(4)____ to share their experiences and provide valuable insights. The training will be held in our main conference room from 9 AM to 5 PM daily.

Best regards,
HR Manager`,
    blanks: [
      {
        id: 1,
        position: "next month",
        options: ["launch", "launched", "launching", "to launch"],
        correct: "A",
        context: "Cần động từ chỉ hành động sắp tới của công ty",
        context_translation:
          "chương trình đào tạo mà công ty chúng ta sẽ ____ vào tháng tới",
        explanation:
          "'Launch' là động từ phù hợp để chỉ việc bắt đầu chương trình đào tạo",
        distractors: {
          B: "'Launched' là quá khứ, không phù hợp với ngữ cảnh tương lai",
          C: "'Launching' là danh động từ, không thể dùng trực tiếp",
          D: "'To launch' là nguyên mẫu, nhưng cần động từ chính",
        },
      },
      {
        id: 2,
        position: "our employees",
        options: ["equip", "equips", "equipped", "equipping"],
        correct: "A",
        context: "Cần động từ để chỉ mục đích của chương trình",
        context_translation: "được thiết kế để ____ nhân viên của chúng ta",
        explanation: "'Equip' phù hợp với cấu trúc 'designed to + infinitive'",
        distractors: {
          B: "'Equips' là số ít, không phù hợp với 'employees'",
          C: "'Equipped' là quá khứ phân từ, không đúng thì",
          D: "'Equipping' là danh động từ, không phù hợp",
        },
      },
      {
        id: 3,
        position: "completion",
        options: ["success", "successful", "successfully", "succeed"],
        correct: "B",
        context: "Cần tính từ để bổ nghĩa cho 'completion'",
        context_translation: "sẽ nhận được chứng chỉ sau khi ____ khóa học",
        explanation:
          "'Successful' là tính từ bổ nghĩa cho danh từ 'completion'",
        distractors: {
          A: "'Success' là danh từ, không thể đứng trước danh từ khác",
          C: "'Successfully' là trạng từ, không bổ nghĩa danh từ",
          D: "'Succeed' là động từ, không phù hợp",
        },
      },
      {
        id: 4,
        position: "industry",
        options: ["experts", "expertise", "expertly", "expert"],
        correct: "A",
        context: "Cần danh từ số nhiều để chỉ những người trong ngành",
        context_translation: "đã mời một số ____ ngành",
        explanation: "'Experts' là danh từ số nhiều chỉ những chuyên gia",
        distractors: {
          B: "'Expertise' là danh từ không đếm được, chỉ kỹ năng",
          C: "'Expertly' là trạng từ, không phù hợp",
          D: "'Expert' là danh từ số ít, không phù hợp với ngữ cảnh",
        },
      },
    ],
    overall_explanation: {
      vi: "Đây là một email thông báo về chương trình đào tạo. Các chỗ trống tập trung vào ngữ pháp cơ bản như thì động từ, dạng từ, và từ loại phù hợp với ngữ cảnh.",
      en: "This is an email announcing a training program. The blanks focus on basic grammar including verb tenses, word forms, and appropriate parts of speech.",
    },
    difficulty: 1,
    tags: ["business_email", "training", "future_plans"],
    translation: {
      vi: "Kính gửi đội ngũ,\n\nTôi viết thư này để thông báo về chương trình đào tạo sắp tới mà công ty chúng ta sẽ triển khai vào tháng tới. Chương trình được thiết kế để trang bị cho nhân viên những kỹ năng mới nhất trong marketing kỹ thuật số và dịch vụ khách hàng. Tất cả người tham gia sẽ nhận được chứng chỉ sau khi hoàn thành khóa học thành công.\n\nChúng tôi đã mời một số chuyên gia ngành để chia sẻ kinh nghiệm và cung cấp những hiểu biết có giá trị. Đào tạo sẽ được tổ chức tại phòng hội nghị chính từ 9 giờ sáng đến 5 giờ chiều hàng ngày.\n\nTrân trọng,\nQuản lý nhân sự",
      en: "Original English passage",
    },
  },
  {
    id: "p6_ai_002",
    title: "Financial Report",
    passage: `Financial Report - Q4 2023

Our company's revenue for the fourth quarter ____(1)____ significantly compared to the previous quarter. This increase can be ____(2)____ to our new marketing strategy and improved customer service.

The marketing department ____(3)____ a 15% rise in website traffic, while the sales team reported a 20% increase in ____(4)____ orders.

We expect continued growth in the coming year.`,
    blanks: [
      {
        id: 1,
        position: "significantly",
        options: ["increased", "increase", "increasing", "increases"],
        correct: "A",
        context: "Cần động từ quá khứ để báo cáo kết quả quý 4",
        explanation:
          "'Increased' là động từ quá khứ phù hợp với ngữ cảnh báo cáo",
        distractors: {
          B: "'Increase' là danh từ, không thể dùng làm động từ chính",
          C: "'Increasing' là phân từ hiện tại, không đúng thì",
          D: "'Increases' là hiện tại đơn, không phù hợp với báo cáo quá khứ",
        },
      },
      {
        id: 2,
        position: "to our",
        options: ["attributed", "attribute", "attributing", "attribution"],
        correct: "A",
        context: "Cần động từ bị động để giải thích nguyên nhân",
        explanation:
          "'Attributed' là dạng bị động phù hợp với cấu trúc 'can be attributed to'",
        distractors: {
          B: "'Attribute' là động từ chủ động, không phù hợp",
          C: "'Attributing' là danh động từ, không đúng dạng",
          D: "'Attribution' là danh từ, không thể dùng trong cấu trúc này",
        },
      },
      {
        id: 3,
        position: "a 15%",
        options: ["achieved", "achieves", "achieving", "achievement"],
        correct: "A",
        context:
          "Cần động từ quá khứ để báo cáo thành tích của bộ phận marketing",
        explanation:
          "'Achieved' là động từ quá khứ phù hợp với ngữ cảnh báo cáo",
        distractors: {
          B: "'Achieves' là hiện tại, không phù hợp với báo cáo quá khứ",
          C: "'Achieving' là danh động từ, không đúng dạng",
          D: "'Achievement' là danh từ, không thể làm động từ",
        },
      },
      {
        id: 4,
        position: "orders",
        options: ["online", "on-line", "on line", "in line"],
        correct: "A",
        context: "Cần tính từ để chỉ loại đơn hàng",
        explanation: "'Online' là tính từ ghép chỉ đơn hàng qua mạng",
        distractors: {
          B: "'On-line' là cách viết cũ, không chuẩn",
          C: "'On line' là cụm từ riêng biệt, không phải tính từ",
          D: "'In line' có nghĩa khác, không phù hợp",
        },
      },
    ],
    overall_explanation: {
      vi: "Đây là báo cáo tài chính tập trung vào việc sử dụng thì động từ phù hợp, dạng bị động, và từ ghép trong ngữ cảnh kinh doanh.",
      en: "This financial report focuses on appropriate verb tenses, passive voice, and compound words in a business context.",
    },
    difficulty: 2,
    tags: ["financial_report", "business_growth", "passive_voice"],
    translation: {
      vi: "Báo cáo tài chính - Quý 4 năm 2023\n\nDoanh thu của công ty chúng ta trong quý thứ tư đã tăng đáng kể so với quý trước. Sự tăng trưởng này có thể được quy cho chiến lược marketing mới và dịch vụ khách hàng được cải thiện.\n\nBộ phận marketing đã đạt được mức tăng 15% trong lưu lượng truy cập website, trong khi đội ngũ bán hàng báo cáo mức tăng 20% trong đơn hàng trực tuyến.\n\nChúng tôi mong đợi sự tăng trưởng tiếp tục trong năm tới.",
      en: "Original English passage",
    },
  },
];

// 📝 HƯỚNG DẪN SỬ DỤNG:

// 1. Copy dữ liệu từ AI_GENERATED_SAMPLES
// 2. Paste vào TOEIC_PART6_QUESTIONS trong questions.js
// 3. Test ứng dụng để đảm bảo hoạt động đúng
// 4. Nếu cần chỉnh sửa, sửa trực tiếp trong questions.js

// 🎯 MẸO TỐI ƯU:
// - Kiểm tra lại ngữ pháp và chính tả
// - Đảm bảo đáp án đúng hoàn toàn chính xác
// - Test từng câu hỏi riêng biệt
// - Xem xét việc điều chỉnh độ khó nếu cần
// - Đảm bảo context_translation chính xác và tự nhiên

// 🔄 QUY TRÌNH TỰ ĐỘNG HÓA:
// 1. Sử dụng AI_PROMPT_GENERATOR.md để tạo dữ liệu
// 2. Paste kết quả vào file này để review
// 3. Merge vào questions.js khi đã kiểm tra xong
// 4. Lặp lại để tạo thêm dữ liệu mới

export { AI_GENERATED_SAMPLES };
