// TOEIC Part 6 Questions Database
// Each question represents a complete passage with 3-4 blanks to fill

// const TOEIC_PART6_QUESTIONS = [
//   {
//     id: "p6_001",
//     title: "Email về kế hoạch đào tạo",
//     passage: `Dear Team,

// I am writing to inform you about the upcoming training program that our company will ____(1)____ next month. The program is designed to ____(2)____ our employees with the latest skills in digital marketing and customer service. All participants will receive a certificate upon ____(3)____ completion of the course.

// We have invited several industry ____(4)____ to share their experiences and provide valuable insights. The training will be held in our main conference room from 9 AM to 5 PM daily.

// Best regards,
// HR Manager`,
//     blanks: [
//       {
//         id: 1,
//         position: "next month",
//         options: ["launch", "launched", "launching", "to launch"],
//         correct: "A",
//         context: "Cần động từ để chỉ hành động sắp tới của công ty",
//         context_translation:
//           "chương trình đào tạo mà công ty chúng ta sẽ ____ vào tháng tới",
//         explanation:
//           "'Launch' là động từ phù hợp để chỉ việc bắt đầu chương trình đào tạo",
//         distractors: {
//           B: "'Launched' là quá khứ, không phù hợp với ngữ cảnh tương lai",
//           C: "'Launching' là danh động từ, không thể dùng trực tiếp",
//           D: "'To launch' là nguyên mẫu, nhưng cần động từ chính",
//         },
//       },
//       {
//         id: 2,
//         position: "our employees",
//         options: ["equip", "equips", "equipped", "equipping"],
//         correct: "A",
//         context: "Cần động từ để chỉ mục đích của chương trình",
//         context_translation: "được thiết kế để ____ nhân viên của chúng ta",
//         explanation: "'Equip' phù hợp với cấu trúc 'designed to + infinitive'",
//         distractors: {
//           B: "'Equips' là số ít, không phù hợp với 'employees'",
//           C: "'Equipped' là quá khứ phân từ, không đúng thì",
//           D: "'Equipping' là danh động từ, không phù hợp",
//         },
//       },
//       {
//         id: 3,
//         position: "completion",
//         options: ["success", "successful", "successfully", "succeed"],
//         correct: "B",
//         context: "Cần tính từ để bổ nghĩa cho 'completion'",
//         context_translation: "sẽ nhận được chứng chỉ sau khi ____ khóa học",
//         explanation:
//           "'Successful' là tính từ bổ nghĩa cho danh từ 'completion'",
//         distractors: {
//           A: "'Success' là danh từ, không thể đứng trước danh từ khác",
//           C: "'Successfully' là trạng từ, không bổ nghĩa danh từ",
//           D: "'Succeed' là động từ, không phù hợp",
//         },
//       },
//       {
//         id: 4,
//         position: "industry",
//         options: ["experts", "expertise", "expertly", "expert"],
//         correct: "A",
//         context: "Cần danh từ số nhiều để chỉ những người trong ngành",
//         context_translation: "đã mời một số ____ ngành",
//         explanation: "'Experts' là danh từ số nhiều chỉ những chuyên gia",
//         distractors: {
//           B: "'Expertise' là danh từ không đếm được, chỉ kỹ năng",
//           C: "'Expertly' là trạng từ, không phù hợp",
//           D: "'Expert' là danh từ số ít, không phù hợp với ngữ cảnh",
//         },
//       },
//     ],
//     overall_explanation: {
//       vi: "Đây là một email thông báo về chương trình đào tạo. Các chỗ trống tập trung vào ngữ pháp cơ bản như thì động từ, dạng từ, và từ loại phù hợp với ngữ cảnh.",
//       en: "This is an email announcing a training program. The blanks focus on basic grammar including verb tenses, word forms, and appropriate parts of speech.",
//     },
//     difficulty: 1,
//     tags: ["business_email", "future_plans", "training"],
//     translation: {
//       vi: "Kính gửi đội ngũ,\n\nTôi viết thư này để thông báo về chương trình đào tạo sắp tới mà công ty chúng ta sẽ triển khai vào tháng tới. Chương trình được thiết kế để trang bị cho nhân viên những kỹ năng mới nhất trong marketing kỹ thuật số và dịch vụ khách hàng. Tất cả người tham gia sẽ nhận được chứng chỉ sau khi hoàn thành khóa học thành công.\n\nChúng tôi đã mời một số chuyên gia ngành để chia sẻ kinh nghiệm và cung cấp những hiểu biết có giá trị. Đào tạo sẽ được tổ chức tại phòng hội nghị chính từ 9 giờ sáng đến 5 giờ chiều hàng ngày.\n\nTrân trọng,\nQuản lý nhân sự",
//       en: "Original English passage",
//     },
//   },
//   {
//     id: "p6_002",
//     title: "Báo cáo tài chính",
//     passage: `Financial Report - Q4 2023

// Our company's revenue for the fourth quarter ____(1)____ significantly compared to the previous quarter. This increase can be ____(2)____ to our new marketing strategy and improved customer service.

// The marketing department ____(3)____ a 15% rise in website traffic, while the sales team reported a 20% increase in ____(4)____ orders.

// We expect continued growth in the coming year.`,
//     blanks: [
//       {
//         id: 1,
//         position: "significantly",
//         options: ["increased", "increase", "increasing", "increases"],
//         correct: "A",
//         context: "Cần động từ quá khứ để báo cáo kết quả quý 4",
//         explanation:
//           "'Increased' là động từ quá khứ phù hợp với ngữ cảnh báo cáo",
//         distractors: {
//           B: "'Increase' là danh từ, không thể dùng làm động từ chính",
//           C: "'Increasing' là phân từ hiện tại, không đúng thì",
//           D: "'Increases' là hiện tại đơn, không phù hợp với báo cáo quá khứ",
//         },
//       },
//       {
//         id: 2,
//         position: "to our",
//         options: ["attributed", "attribute", "attributing", "attribution"],
//         correct: "A",
//         context: "Cần động từ bị động để giải thích nguyên nhân",
//         explanation:
//           "'Attributed' là dạng bị động phù hợp với cấu trúc 'can be attributed to'",
//         distractors: {
//           B: "'Attribute' là động từ chủ động, không phù hợp",
//           C: "'Attributing' là danh động từ, không đúng dạng",
//           D: "'Attribution' là danh từ, không thể dùng trong cấu trúc này",
//         },
//       },
//       {
//         id: 3,
//         position: "a 15%",
//         options: ["achieved", "achieves", "achieving", "achievement"],
//         correct: "A",
//         context:
//           "Cần động từ quá khứ để báo cáo thành tích của bộ phận marketing",
//         explanation:
//           "'Achieved' là động từ quá khứ phù hợp với ngữ cảnh báo cáo",
//         distractors: {
//           B: "'Achieves' là hiện tại, không phù hợp với báo cáo quá khứ",
//           C: "'Achieving' là danh động từ, không đúng dạng",
//           D: "'Achievement' là danh từ, không thể làm động từ",
//         },
//       },
//       {
//         id: 4,
//         position: "orders",
//         options: ["online", "on-line", "on line", "in line"],
//         correct: "A",
//         context: "Cần tính từ để chỉ loại đơn hàng",
//         explanation: "'Online' là tính từ ghép chỉ đơn hàng qua mạng",
//         distractors: {
//           B: "'On-line' là cách viết cũ, không chuẩn",
//           C: "'On line' là cụm từ riêng biệt, không phải tính từ",
//           D: "'In line' có nghĩa khác, không phù hợp",
//         },
//       },
//     ],
//     overall_explanation: {
//       vi: "Đây là báo cáo tài chính tập trung vào việc sử dụng thì động từ phù hợp, dạng bị động, và từ ghép trong ngữ cảnh kinh doanh.",
//       en: "This financial report focuses on appropriate verb tenses, passive voice, and compound words in a business context.",
//     },
//     difficulty: 2,
//     tags: ["financial_report", "business_growth", "passive_voice"],
//     translation: {
//       vi: "Báo cáo tài chính - Quý 4 năm 2023\n\nDoanh thu của công ty chúng ta trong quý thứ tư đã tăng đáng kể so với quý trước. Sự tăng trưởng này có thể được quy cho chiến lược marketing mới và dịch vụ khách hàng được cải thiện.\n\nBộ phận marketing đã đạt được mức tăng 15% trong lưu lượng truy cập website, trong khi đội ngũ bán hàng báo cáo mức tăng 20% trong đơn hàng trực tuyến.\n\nChúng tôi mong đợi sự tăng trưởng tiếp tục trong năm tới.",
//       en: "Original English passage",
//     },
//   },
//   {
//     id: "p6_003",
//     title: "Thông báo sự kiện công ty",
//     passage: `Company Event Announcement

// We are excited to ____(1)____ our annual company picnic this Saturday at Central Park. The event will ____(2)____ from 10 AM to 6 PM, featuring various activities including games, food, and team-building exercises.

// Employees are ____(3)____ to bring their families and participate in the fun. Please remember to ____(4)____ your attendance by Friday to help us with planning.

// See you there!`,
//     blanks: [
//       {
//         id: 1,
//         position: "our annual",
//         options: ["announce", "announcing", "announced", "announcement"],
//         correct: "A",
//         context: "Cần động từ để chỉ hành động thông báo sự kiện",
//         explanation: "'Announce' là động từ cơ bản phù hợp với cấu trúc câu",
//         distractors: {
//           B: "'Announcing' là danh động từ, không phù hợp",
//           C: "'Announced' là quá khứ, không đúng thì hiện tại",
//           D: "'Announcement' là danh từ, không thể làm động từ",
//         },
//       },
//       {
//         id: 2,
//         position: "from 10",
//         options: ["run", "running", "runs", "ran"],
//         correct: "A",
//         context: "Cần động từ để chỉ thời gian diễn ra sự kiện",
//         explanation: "'Run' có nghĩa là kéo dài, phù hợp với 'from...to...'",
//         distractors: {
//           B: "'Running' là phân từ, không đúng dạng",
//           C: "'Runs' là số ít, không phù hợp",
//           D: "'Ran' là quá khứ, không đúng thì",
//         },
//       },
//       {
//         id: 3,
//         position: "to bring",
//         options: ["encouraged", "encouraging", "encourage", "encouragement"],
//         correct: "A",
//         context: "Cần động từ bị động để chỉ khuyến khích nhân viên",
//         explanation: "'Encouraged' là dạng bị động phù hợp với ngữ cảnh",
//         distractors: {
//           B: "'Encouraging' là tính từ, không đúng dạng",
//           C: "'Encourage' là động từ chủ động, không phù hợp",
//           D: "'Encouragement' là danh từ, không thể làm động từ",
//         },
//       },
//       {
//         id: 4,
//         position: "your attendance",
//         options: ["confirm", "confirmed", "confirming", "confirmation"],
//         correct: "A",
//         context: "Cần động từ để chỉ hành động xác nhận tham gia",
//         explanation:
//           "'Confirm' là động từ phù hợp với 'remember to + infinitive'",
//         distractors: {
//           B: "'Confirmed' là quá khứ, không đúng thì",
//           C: "'Confirming' là danh động từ, không phù hợp",
//           D: "'Confirmation' là danh từ, không thể làm động từ",
//         },
//       },
//     ],
//     overall_explanation: {
//       vi: "Thông báo sự kiện tập trung vào việc sử dụng động từ phù hợp trong các cấu trúc khác nhau như 'be excited to', 'run from...to...', dạng bị động và 'remember to'.",
//       en: "Event announcement focuses on appropriate verbs in different structures like 'be excited to', 'run from...to...', passive voice, and 'remember to'.",
//     },
//     difficulty: 1,
//     tags: ["event_announcement", "company_culture", "invitation"],
//     translation: {
//       vi: "Thông báo sự kiện công ty\n\nChúng tôi rất excited để thông báo về buổi picnic hàng năm của công ty vào thứ Bảy này tại Công viên Trung tâm. Sự kiện sẽ kéo dài từ 10 giờ sáng đến 6 giờ chiều, với nhiều hoạt động khác nhau bao gồm trò chơi, đồ ăn, và bài tập xây dựng đội ngũ.\n\nNhân viên được khuyến khích mang theo gia đình và tham gia vào sự vui vẻ. Vui lòng nhớ xác nhận sự tham gia của bạn trước thứ Sáu để giúp chúng tôi lập kế hoạch.\n\nHẹn gặp ở đó!",
//       en: "Original English passage",
//     },
//   },
//   {
//     id: "p6_004",
//     title: "Mô tả sản phẩm",
//     passage: `Product Description - EcoClean Laundry Detergent

// EcoClean is an ____(1)____ laundry detergent that provides excellent cleaning power while being gentle on fabrics. Our unique formula ____(2)____ harmful chemicals and uses only natural ingredients.

// The product comes in ____(3)____ sizes to meet different household needs. Each bottle is ____(4)____ with a convenient dispenser cap for easy use.

// Try EcoClean today and experience the difference!`,
//     blanks: [
//       {
//         id: 1,
//         position: "laundry",
//         options: [
//           "environmentally friendly",
//           "environmental friendly",
//           "environment-friendly",
//           "environment friend",
//         ],
//         correct: "A",
//         context: "Cần cụm tính từ để mô tả sản phẩm thân thiện với môi trường",
//         explanation:
//           "'Environmentally friendly' là cụm tính từ chuẩn chỉ sản phẩm thân thiện môi trường",
//         distractors: {
//           B: "'Environmental friendly' thiếu 'ly', không chuẩn",
//           C: "'Environment-friendly' dùng dấu gạch ngang, không chuẩn trong ngữ cảnh này",
//           D: "'Environment friend' sai chính tả",
//         },
//       },
//       {
//         id: 2,
//         position: "harmful",
//         options: ["avoids", "avoiding", "avoided", "avoid"],
//         correct: "A",
//         context: "Cần động từ để chỉ hành động tránh xa hóa chất có hại",
//         explanation:
//           "'Avoids' là động từ hiện tại đơn phù hợp với đặc điểm sản phẩm",
//         distractors: {
//           B: "'Avoiding' là danh động từ, không đúng dạng",
//           C: "'Avoided' là quá khứ, không phù hợp",
//           D: "'Avoid' thiếu 's' cho số ít",
//         },
//       },
//       {
//         id: 3,
//         position: "sizes",
//         options: ["variety", "varieties", "various", "vary"],
//         correct: "C",
//         context: "Cần tính từ để chỉ nhiều loại kích cỡ khác nhau",
//         explanation: "'Various' là tính từ chỉ đa dạng, phù hợp với 'sizes'",
//         distractors: {
//           A: "'Variety' là danh từ số ít, không phù hợp",
//           B: "'Varieties' là danh từ số nhiều, không thể làm tính từ",
//           D: "'Vary' là động từ, không đúng từ loại",
//         },
//       },
//       {
//         id: 4,
//         position: "with a",
//         options: ["equipped", "equips", "equip", "equipping"],
//         correct: "A",
//         context: "Cần động từ bị động để chỉ chai được trang bị",
//         explanation:
//           "'Equipped' là dạng bị động phù hợp với 'comes equipped with'",
//         distractors: {
//           B: "'Equips' là chủ động, không phù hợp",
//           C: "'Equip' thiếu 'ped' cho bị động",
//           D: "'Equipping' là danh động từ, không đúng dạng",
//         },
//       },
//     ],
//     overall_explanation: {
//       vi: "Mô tả sản phẩm tập trung vào việc sử dụng cụm tính từ, động từ phù hợp, từ loại chính xác và dạng bị động trong ngữ cảnh marketing.",
//       en: "Product description focuses on compound adjectives, appropriate verbs, correct parts of speech, and passive voice in marketing context.",
//     },
//     difficulty: 2,
//     tags: ["product_description", "eco_friendly", "compound_adjectives"],
//     translation: {
//       vi: "Mô tả sản phẩm - Nước giặt EcoClean\n\nEcoClean là nước giặt thân thiện với môi trường cung cấp sức mạnh làm sạch tuyệt vời đồng thời dịu nhẹ với vải. Công thức độc đáo của chúng tôi tránh các hóa chất có hại và chỉ sử dụng nguyên liệu tự nhiên.\n\nSản phẩm có nhiều kích cỡ khác nhau để đáp ứng nhu cầu hộ gia đình khác nhau. Mỗi chai được trang bị nắp dispenser tiện lợi để dễ sử dụng.\n\nHãy thử EcoClean ngay hôm nay và trải nghiệm sự khác biệt!",
//       en: "Original English passage",
//     },
//   },
//   {
//     id: "p6_005",
//     title: "Lời mời họp",
//     passage: `Meeting Invitation

// Dear colleagues,

// You are ____(1)____ invited to attend the quarterly review meeting scheduled for next Tuesday at 2 PM in Conference Room A. The meeting will ____(2)____ our team's performance over the past three months and discuss strategies for the upcoming quarter.

// Please ____(3)____ any relevant documents or reports you would like to ____(4)____ during the meeting.

// Your participation is greatly appreciated.`,
//     blanks: [
//       {
//         id: 1,
//         position: "invited",
//         options: ["cordially", "cordial", "cordiality", "cordially"],
//         correct: "A",
//         context: "Cần trạng từ để bổ nghĩa cho động từ 'invited'",
//         explanation:
//           "'Cordially' là trạng từ chỉ cách thức mời một cách lịch sự",
//         distractors: {
//           B: "'Cordial' là tính từ, không thể bổ nghĩa động từ",
//           C: "'Cordiality' là danh từ, không đúng từ loại",
//           D: "Trùng với A",
//         },
//       },
//       {
//         id: 2,
//         position: "our team's",
//         options: ["review", "reviewing", "reviewed", "reviews"],
//         correct: "A",
//         context: "Cần động từ để chỉ mục đích của cuộc họp",
//         explanation: "'Review' là động từ cơ bản phù hợp với ngữ cảnh",
//         distractors: {
//           B: "'Reviewing' là danh động từ, không đúng dạng",
//           C: "'Reviewed' là quá khứ, không phù hợp",
//           D: "'Reviews' là số nhiều, không đúng thì",
//         },
//       },
//       {
//         id: 3,
//         position: "any relevant",
//         options: ["bring", "bringing", "brought", "brings"],
//         correct: "A",
//         context: "Cần động từ để chỉ hành động mang tài liệu",
//         explanation: "'Bring' là động từ mệnh lệnh phù hợp với lời mời",
//         distractors: {
//           B: "'Bringing' là danh động từ, không đúng dạng",
//           C: "'Brought' là quá khứ, không phù hợp",
//           D: "'Brings' không đúng thì cho mệnh lệnh",
//         },
//       },
//       {
//         id: 4,
//         position: "during",
//         options: ["present", "presenting", "presented", "presents"],
//         correct: "A",
//         context: "Cần động từ để chỉ hành động trình bày trong cuộc họp",
//         explanation: "'Present' là động từ phù hợp với 'would like to present'",
//         distractors: {
//           B: "'Presenting' là danh động từ, không đúng dạng",
//           C: "'Presented' là quá khứ, không phù hợp",
//           D: "'Presents' không đúng thì",
//         },
//       },
//     ],
//     overall_explanation: {
//       vi: "Lời mời họp tập trung vào việc sử dụng trạng từ, động từ phù hợp trong các cấu trúc khác nhau và thì động từ chính xác trong ngữ cảnh formal.",
//       en: "Meeting invitation focuses on adverbs, appropriate verbs in different structures, and correct tenses in formal context.",
//     },
//     difficulty: 1,
//     tags: ["meeting_invitation", "formal_language", "business_communication"],
//     translation: {
//       vi: "Lời mời họp\n\nKính gửi các đồng nghiệp,\n\nCác bạn được mời một cách lịch sự tham dự cuộc họp đánh giá hàng quý được lên lịch vào thứ Ba tới lúc 2 giờ chiều tại Phòng hội nghị A. Cuộc họp sẽ xem xét hiệu suất của đội ngũ chúng ta trong ba tháng qua và thảo luận các chiến lược cho quý tới.\n\nVui lòng mang theo bất kỳ tài liệu hoặc báo cáo liên quan nào mà bạn muốn trình bày trong cuộc họp.\n\nSự tham gia của bạn được đánh giá cao.",
//       en: "Original English passage",
//     },
//   },
// ];

const TOEIC_PART6_QUESTIONS = [
  {
    id: "p6_001",
    title: "Meeting Reminder",
    passage: `Dear Team,

This is a friendly reminder ____(1)____ our weekly marketing meeting scheduled for tomorrow, October 20th, at 10:00 AM in Conference Room A. Please make sure to ____(2)____ your project updates. Your active ____(3)____ is greatly appreciated.

Thank you.`,
    blanks: [
      {
        id: 1,
        position: "reminder ____ our weekly marketing meeting",
        options: ["about", "of", "for", "with"],
        correct: "A",
        context: "Cần giới từ theo sau 'reminder' để chỉ chủ đề của lời nhắc.",
        context_translation:
          "Bản dịch ngữ cảnh: 'lời nhắc ____ cuộc họp marketing hàng tuần của chúng ta'",
        explanation:
          "'Reminder about' hoặc 'reminder of' đều đúng, nhưng 'about' phổ biến hơn khi nhắc nhở về một sự kiện cụ thể sắp diễn ra. 'About' diễn tả chủ đề của lời nhắc.",
        distractors: {
          B: "'Of' cũng có thể dùng nhưng 'about' tự nhiên hơn trong ngữ cảnh này.",
          C: "'For' thường dùng để chỉ mục đích hoặc người nhận, không phải chủ đề.",
          D: "'With' không phù hợp về ngữ nghĩa để theo sau 'reminder'.",
        },
      },
      {
        id: 2,
        position: "make sure to ____ your project updates",
        options: ["prepare", "preparing", "prepared", "prepares"],
        correct: "A",
        context:
          "Cần một động từ nguyên mẫu theo sau 'make sure to' để chỉ hành động cần thực hiện.",
        context_translation:
          "Bản dịch ngữ cảnh: 'hãy đảm bảo ____ cập nhật dự án của bạn'",
        explanation:
          "Cấu trúc 'make sure to + V (nguyên mẫu)' có nghĩa là 'đảm bảo làm gì'. 'Prepare' là động từ nguyên mẫu phù hợp.",
        distractors: {
          B: "'Preparing' là danh động từ hoặc hiện tại phân từ, không đúng cấu trúc.",
          C: "'Prepared' là quá khứ phân từ hoặc động từ quá khứ đơn, không đúng cấu trúc.",
          D: "'Prepares' là động từ chia ở thì hiện tại đơn ngôi thứ ba số ít, không đúng cấu trúc.",
        },
      },
      {
        id: 3,
        position: "Your active ____ is greatly appreciated",
        options: [
          "participate",
          "participating",
          "participation",
          "participated",
        ],
        correct: "C",
        context: "Cần một danh từ sau tính từ 'active' để làm chủ ngữ cho câu.",
        context_translation:
          "Bản dịch ngữ cảnh: 'Sự ____ tích cực của bạn được đánh giá cao'",
        explanation:
          "Sau tính từ 'active' (tích cực) cần một danh từ. 'Participation' (sự tham gia) là danh từ phù hợp, làm chủ ngữ cho cụm 'is greatly appreciated'.",
        distractors: {
          B: "'Participating' là danh động từ hoặc hiện tại phân từ, không phải danh từ chính.",
          A: "'Participate' là động từ nguyên mẫu, không thể làm chủ ngữ.",
          D: "'Participated' là quá khứ phân từ hoặc động từ quá khứ đơn, không phải danh từ.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một email nhắc nhở về cuộc họp, tập trung vào việc kiểm tra ngữ pháp cơ bản về giới từ, cấu trúc động từ và hình thái từ (danh từ sau tính từ).",
      en: "This passage is an email reminder about a meeting, focusing on basic grammar checks for prepositions, verb structures, and word forms (noun after adjective).",
    },
    difficulty: 1, // Dễ
    tags: ["business_email", "meeting", "communication"],
    translation: {
      vi: "Kính gửi đội ngũ,\n\nĐây là lời nhắc thân ái về cuộc họp marketing hàng tuần của chúng ta được lên lịch vào ngày mai, 20 tháng 10, lúc 10:00 sáng tại Phòng Hội thảo A. Vui lòng đảm bảo chuẩn bị các cập nhật dự án của bạn. Sự tham gia tích cực của bạn được đánh giá cao.\n\nXin cảm ơn.",
      en: "Dear Team,\n\nThis is a friendly reminder about our weekly marketing meeting scheduled for tomorrow, October 20th, at 10:00 AM in Conference Room A. Please make sure to prepare your project updates. Your active participation is greatly appreciated.\n\nThank you.",
    },
  },
  {
    id: "p6_002",
    title: "Office Supplies Order",
    passage: `To ensure our office runs smoothly, please remember to submit all requests for new office ____(1)____ by Friday afternoon. This allows enough time for the administrative team to ____(2)____ and place the order. Any requests received ____(3)____ the deadline will be processed the following week.`,
    blanks: [
      {
        id: 1,
        position: "requests for new office ____ by Friday afternoon",
        options: ["supply", "supplies", "supplied", "supplying"],
        correct: "B",
        context: "Cần một danh từ số nhiều để chỉ các vật phẩm văn phòng.",
        context_translation:
          "Bản dịch ngữ cảnh: 'các yêu cầu về ____ văn phòng mới trước chiều thứ Sáu'",
        explanation:
          "'Office supplies' là một collocation phổ biến, nghĩa là 'vật tư văn phòng'. Vì là 'requests for' (các yêu cầu cho) nhiều loại vật tư, nên cần danh từ số nhiều.",
        distractors: {
          A: "'Supply' là danh từ số ít hoặc động từ, không phù hợp với ngữ cảnh 'requests for new office items'.",
          C: "'Supplied' là quá khứ phân từ, không phải danh từ.",
          D: "'Supplying' là danh động từ hoặc hiện tại phân từ, không phù hợp.",
        },
      },
      {
        id: 2,
        position: "administrative team to ____ and place the order",
        options: ["review", "reviews", "reviewed", "reviewing"],
        correct: "A",
        context:
          "Cần một động từ nguyên mẫu theo sau 'to' (trong cụm 'to allow time for someone to do something').",
        context_translation:
          "Bản dịch ngữ cảnh: 'đội ngũ hành chính ____ và đặt hàng'",
        explanation:
          "Cấu trúc 'to + V (nguyên mẫu)' là động từ nguyên mẫu có 'to'. 'Review' là động từ nguyên mẫu, có nghĩa là 'xem xét'.",
        distractors: {
          B: "'Reviews' là động từ chia ở thì hiện tại đơn ngôi thứ ba số ít.",
          C: "'Reviewed' là quá khứ phân từ hoặc động từ quá khứ đơn.",
          D: "'Reviewing' là danh động từ hoặc hiện tại phân từ.",
        },
      },
      {
        id: 3,
        position: "requests received ____ the deadline",
        options: ["during", "before", "after", "through"],
        correct: "C",
        context:
          "Cần một giới từ chỉ thời gian, trái ngược với việc 'by Friday afternoon' (trước chiều thứ Sáu).",
        context_translation:
          "Bản dịch ngữ cảnh: 'các yêu cầu nhận được ____ thời hạn'",
        explanation:
          "Nếu yêu cầu được gửi 'by Friday afternoon' (trước chiều thứ Sáu), thì những yêu cầu nhận được 'after' (sau) thời hạn sẽ được xử lý vào tuần sau. 'After' tạo sự đối lập hợp lý về thời gian.",
        distractors: {
          A: "'During' (trong suốt) không phù hợp vì nó chỉ khoảng thời gian, không phải mốc thời gian sau.",
          B: "'Before' (trước) trái ngược với ý nghĩa của câu trước.",
          D: "'Through' (xuyên suốt) không phù hợp về ngữ cảnh.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một thông báo nội bộ về quy trình đặt hàng vật tư văn phòng, kiểm tra từ vựng (collocation 'office supplies'), ngữ pháp về động từ nguyên mẫu và giới từ thời gian.",
      en: "This passage is an internal announcement about the office supplies ordering process, checking vocabulary (collocation 'office supplies'), grammar for infinitives, and prepositions of time.",
    },
    difficulty: 1, // Dễ
    tags: ["office_admin", "internal_memo", "procedure"],
    translation: {
      vi: "Để đảm bảo văn phòng của chúng ta hoạt động trơn tru, vui lòng nhớ gửi tất cả các yêu cầu về vật tư văn phòng mới trước chiều thứ Sáu. Điều này cho phép đội ngũ hành chính đủ thời gian để xem xét và đặt hàng. Bất kỳ yêu cầu nào nhận được sau thời hạn sẽ được xử lý vào tuần sau.",
      en: "To ensure our office runs smoothly, please remember to submit all requests for new office supplies by Friday afternoon. This allows enough time for the administrative team to review and place the order. Any requests received after the deadline will be processed the following week.",
    },
  },
  {
    id: "p6_003",
    title: "Software Update Notification",
    passage: `We are excited to announce a new software update for our mobile application, available ____(1)____ today. This update includes several new features and performance ____(2)____. We recommend all users ____(3)____ their apps to the latest version for the best experience.`,
    blanks: [
      {
        id: 1,
        position: "available ____ today",
        options: ["effective", "effectively", "effect", "effects"],
        correct: "A",
        context:
          "Cần một tính từ để mô tả thời điểm bắt đầu có hiệu lực của bản cập nhật.",
        context_translation: "Bản dịch ngữ cảnh: 'có sẵn ____ hôm nay'",
        explanation:
          "'Effective' (có hiệu lực, có hiệu quả) là tính từ phù hợp để chỉ thời điểm một điều gì đó bắt đầu áp dụng. 'Available effective today' nghĩa là 'có sẵn và có hiệu lực từ hôm nay'.",
        distractors: {
          B: "'Effectively' là trạng từ, không dùng để bổ nghĩa cho 'available'.",
          C: "'Effect' là danh từ (ảnh hưởng) hoặc động từ (gây ảnh hưởng), không phù hợp.",
          D: "'Effects' là danh từ số nhiều, không phù hợp.",
        },
      },
      {
        id: 2,
        position: "features and performance ____",
        options: ["improves", "improved", "improvement", "improvements"],
        correct: "D",
        context:
          "Cần một danh từ số nhiều song song với 'features' để liệt kê các bổ sung của bản cập nhật.",
        context_translation:
          "Bản dịch ngữ cảnh: 'các tính năng mới và ____ hiệu suất'",
        explanation:
          "Vế trước 'new features' là danh từ số nhiều, vế sau cũng cần danh từ số nhiều để liệt kê các điểm mới. 'Improvements' (những cải tiến) là danh từ số nhiều phù hợp.",
        distractors: {
          A: "'Improves' là động từ chia ở thì hiện tại đơn ngôi thứ ba số ít.",
          B: "'Improved' là quá khứ phân từ hoặc tính từ, không phù hợp để song song với 'features' như danh từ.",
          C: "'Improvement' là danh từ số ít, nhưng ngữ cảnh gợi ý nhiều cải tiến.",
        },
      },
      {
        id: 3,
        position: "recommend all users ____ their apps",
        options: ["to update", "update", "updates", "updating"],
        correct: "B",
        context:
          "Cần một động từ nguyên mẫu không 'to' sau 'recommend' khi có tân ngữ chỉ người ('users').",
        context_translation:
          "Bản dịch ngữ cảnh: 'khuyên tất cả người dùng ____ ứng dụng của họ'",
        explanation:
          "Cấu trúc 'recommend someone (do) something' hoặc 'recommend that someone (should) do something'. Trong trường hợp này, 'update' là động từ nguyên mẫu không 'to' sau 'users' là phù hợp nhất, ngụ ý 'should update'.",
        distractors: {
          A: "'To update' cũng có thể chấp nhận được trong một số trường hợp, nhưng 'update' (nguyên mẫu không 'to') phổ biến và trang trọng hơn sau 'recommend' với tân ngữ trực tiếp là người.",
          C: "'Updates' là động từ chia ngôi thứ ba số ít hoặc danh từ số nhiều, không đúng cấu trúc.",
          D: "'Updating' là danh động từ hoặc hiện tại phân từ, không đúng cấu trúc.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một thông báo về cập nhật phần mềm, kiểm tra hình thái từ (tính từ, danh từ số nhiều) và cấu trúc động từ với 'recommend'.",
      en: "This passage is a software update announcement, checking word forms (adjective, plural noun) and verb structure with 'recommend'.",
    },
    difficulty: 1, // Dễ
    tags: ["technology", "announcement", "product_update"],
    translation: {
      vi: "Chúng tôi vui mừng thông báo một bản cập nhật phần mềm mới cho ứng dụng di động của chúng tôi, có hiệu lực từ hôm nay. Bản cập nhật này bao gồm một số tính năng mới và cải tiến hiệu suất. Chúng tôi khuyên tất cả người dùng cập nhật ứng dụng của họ lên phiên bản mới nhất để có trải nghiệm tốt nhất.",
      en: "We are excited to announce a new software update for our mobile application, available effective today. This update includes several new features and performance improvements. We recommend all users update their apps to the latest version for the best experience.",
    },
  },
  {
    id: "p6_004",
    title: "Company Picnic Invitation",
    passage: `You are cordially ____(1)____ to our annual company picnic! It will be held on Saturday, August 15th, at City Park. There will be food, games, and activities for all ____(2)____. We look forward to seeing you ____(3)____!`,
    blanks: [
      {
        id: 1,
        position: "You are cordially ____ to our annual company picnic!",
        options: ["invite", "inviting", "invited", "invites"],
        correct: "C",
        context:
          "Cần quá khứ phân từ để tạo thành thể bị động 'be invited' (được mời).",
        context_translation:
          "Bản dịch ngữ cảnh: 'Bạn được trân trọng ____ đến buổi dã ngoại thường niên của công ty!'",
        explanation:
          "Cụm 'are cordially invited' (được trân trọng mời) là cấu trúc bị động, rất phổ biến trong các thư mời trang trọng. 'Invited' là quá khứ phân từ của động từ 'invite'.",
        distractors: {
          A: "'Invite' là động từ nguyên mẫu, không tạo thành thể bị động.",
          B: "'Inviting' là hiện tại phân từ, không phù hợp trong cấu trúc bị động này.",
          D: "'Invites' là động từ chia ngôi thứ ba số ít, không phù hợp.",
        },
      },
      {
        id: 2,
        position: "activities for all ____",
        options: ["age", "aged", "ages", "aging"],
        correct: "C",
        context: "Cần một danh từ số nhiều để chỉ các nhóm tuổi khác nhau.",
        context_translation:
          "Bản dịch ngữ cảnh: 'các hoạt động dành cho mọi ____'",
        explanation:
          "Cụm 'for all ages' (dành cho mọi lứa tuổi) là một thành ngữ phổ biến, nghĩa là phù hợp với tất cả mọi người, bất kể tuổi tác.",
        distractors: {
          A: "'Age' là danh từ số ít, không dùng trong thành ngữ này.",
          B: "'Aged' là tính từ hoặc quá khứ phân từ, không phù hợp.",
          D: "'Aging' là hiện tại phân từ hoặc danh động từ, không phù hợp.",
        },
      },
      {
        id: 3,
        position: "We look forward to seeing you ____!",
        options: ["here", "there", "then", "now"],
        correct: "B",
        context:
          "Cần một trạng từ chỉ địa điểm mà người được mời sẽ đến tham dự sự kiện.",
        context_translation:
          "Bản dịch ngữ cảnh: 'Chúng tôi mong được gặp bạn ____!'",
        explanation:
          "Vì sự kiện được tổ chức 'at City Park', nên người viết mong được gặp người đọc 'there' (ở đó, tại City Park).",
        distractors: {
          A: "'Here' (ở đây) không phù hợp vì người viết đang ở một nơi khác khi gửi lời mời.",
          C: "'Then' (khi đó) là trạng từ chỉ thời gian, không phù hợp ở đây.",
          D: "'Now' (bây giờ) không phù hợp với ngữ cảnh lời mời cho sự kiện trong tương lai.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một lời mời tham gia sự kiện của công ty, tập trung vào ngữ pháp (thể bị động), từ vựng (thành ngữ 'for all ages') và trạng từ chỉ địa điểm.",
      en: "This passage is a company event invitation, focusing on grammar (passive voice), vocabulary (idiom 'for all ages'), and adverbs of place.",
    },
    difficulty: 1, // Dễ
    tags: ["hr_events", "invitation", "company_culture"],
    translation: {
      vi: "Bạn được trân trọng mời đến buổi dã ngoại thường niên của công ty chúng ta! Nó sẽ được tổ chức vào thứ Bảy, ngày 15 tháng Tám, tại Công viên Thành phố. Sẽ có đồ ăn, trò chơi và các hoạt động dành cho mọi lứa tuổi. Chúng tôi mong được gặp bạn ở đó!",
      en: "You are cordially invited to our annual company picnic! It will be held on Saturday, August 15th, at City Park. There will be food, games, and activities for all ages. We look forward to seeing you there!",
    },
  },
  {
    id: "p6_005",
    title: "New Product Advertisement",
    passage: `Introducing the revolutionary new 'EcoClean' vacuum cleaner, designed to make your cleaning routine easier and more ____(1)____. With its advanced suction technology and long-lasting battery, EcoClean offers unparalleled ____(2)____. Pre-order now to receive a special discount and free ____(3)____!`,
    blanks: [
      {
        id: 1,
        position: "easier and more ____",
        options: ["efficient", "efficiency", "efficiently", "efficacious"],
        correct: "A",
        context:
          "Cần một tính từ để song song với 'easier' và bổ nghĩa cho 'cleaning routine'.",
        context_translation: "Bản dịch ngữ cảnh: 'dễ dàng hơn và ____ hơn'",
        explanation:
          "Sau 'more' cần một tính từ để so sánh. 'Efficient' (hiệu quả, năng suất) là tính từ phù hợp, song song với 'easier' để mô tả 'cleaning routine'.",
        distractors: {
          B: "'Efficiency' là danh từ, không phù hợp sau 'more'.",
          C: "'Efficiently' là trạng từ, không phù hợp để bổ nghĩa cho danh từ 'cleaning routine' (qua động từ 'make').",
          D: "'Efficacious' cũng là tính từ (có hiệu lực), nhưng 'efficient' phù hợp hơn với ngữ cảnh về hiệu suất của thiết bị.",
        },
      },
      {
        id: 2,
        position: "offers unparalleled ____",
        options: ["performing", "perform", "performance", "performer"],
        correct: "C",
        context:
          "Cần một danh từ sau tính từ 'unparalleled' (chưa từng có, không gì sánh bằng).",
        context_translation: "Bản dịch ngữ cảnh: 'mang lại ____ chưa từng có'",
        explanation:
          "Sau tính từ 'unparalleled' cần một danh từ để chỉ thứ mà sản phẩm mang lại. 'Performance' (hiệu suất) là danh từ phù hợp trong ngữ cảnh quảng cáo máy hút bụi.",
        distractors: {
          A: "'Performing' là hiện tại phân từ hoặc danh động từ, không phải danh từ chính.",
          B: "'Perform' là động từ nguyên mẫu.",
          D: "'Performer' là danh từ chỉ người biểu diễn, không phù hợp.",
        },
      },
      {
        id: 3,
        position: "discount and free ____",
        options: ["ship", "ships", "shipped", "shipping"],
        correct: "D",
        context:
          "Cần một danh từ sau tính từ 'free' để chỉ một dịch vụ miễn phí.",
        context_translation:
          "Bản dịch ngữ cảnh: 'giảm giá đặc biệt và ____ miễn phí'",
        explanation:
          "Cụm 'free shipping' là collocation phổ biến có nghĩa là 'giao hàng miễn phí'. 'Shipping' ở đây là danh động từ hoạt động như một danh từ.",
        distractors: {
          A: "'Ship' là động từ hoặc danh từ (con tàu), không phù hợp.",
          B: "'Ships' là danh từ số nhiều hoặc động từ chia ngôi thứ ba số ít.",
          C: "'Shipped' là quá khứ phân từ, không phù hợp.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một quảng cáo sản phẩm, kiểm tra hình thái từ (tính từ, danh từ) và từ vựng kinh doanh (collocation 'free shipping').",
      en: "This passage is a product advertisement, checking word forms (adjective, noun) and business vocabulary (collocation 'free shipping').",
    },
    difficulty: 2, // Trung bình
    tags: ["marketing_sales", "product_description", "advertisement"],
    translation: {
      vi: "Giới thiệu máy hút bụi 'EcoClean' mới mang tính cách mạng, được thiết kế để làm cho công việc dọn dẹp của bạn dễ dàng hơn và hiệu quả hơn. Với công nghệ hút tiên tiến và pin bền bỉ, EcoClean mang lại hiệu suất chưa từng có. Đặt hàng trước ngay bây giờ để nhận giảm giá đặc biệt và giao hàng miễn phí!",
      en: "Introducing the revolutionary new 'EcoClean' vacuum cleaner, designed to make your cleaning routine easier and more efficient. With its advanced suction technology and long-lasting battery, EcoClean offers unparalleled performance. Pre-order now to receive a special discount and free shipping!",
    },
  },
  {
    id: "p6_006",
    title: "Quarterly Financial Report Summary",
    passage: `This quarter's financial report indicates strong ____(1)____ growth across all key sectors. Revenue increased by 15% compared to the previous quarter, largely ____(2)____ to successful marketing campaigns and new client acquisitions. We anticipate continued positive ____(3)____ in the next period.`,
    blanks: [
      {
        id: 1,
        position: "strong ____ growth across all key sectors",
        options: ["overall", "overalls", "overally", "overreaching"],
        correct: "A",
        context:
          "Cần một tính từ để bổ nghĩa cho 'growth' (tăng trưởng) và chỉ ra rằng sự tăng trưởng này bao trùm toàn bộ.",
        context_translation:
          "Bản dịch ngữ cảnh: 'tăng trưởng ____ mạnh mẽ trên tất cả các lĩnh vực chính'",
        explanation:
          "'Overall' (tổng thể, toàn diện) là tính từ phù hợp nhất để mô tả sự tăng trưởng bao trùm tất cả các lĩnh vực. 'Overall growth' là một cụm từ phổ biến trong báo cáo tài chính.",
        distractors: {
          B: "'Overalls' là danh từ số nhiều (quần yếm bảo hộ), không phù hợp.",
          C: "'Overally' không phải là một từ chuẩn trong tiếng Anh.",
          D: "'Overreaching' (quá mức, vượt quá giới hạn) không phù hợp với ngữ cảnh tích cực của 'strong growth'.",
        },
      },
      {
        id: 2,
        position: "largely ____ to successful marketing campaigns",
        options: ["attribute", "attributed", "attributes", "attributing"],
        correct: "B",
        context:
          "Cần quá khứ phân từ để tạo thành thể bị động rút gọn, bổ nghĩa cho 'Revenue increased' và chỉ ra nguyên nhân.",
        context_translation:
          "Bản dịch ngữ cảnh: 'phần lớn ____ là do các chiến dịch marketing thành công'",
        explanation:
          "Đây là cấu trúc bị động rút gọn: 'Revenue increased... [which was] largely attributed to...'. 'Attributed' (được quy cho) là quá khứ phân từ, đi với giới từ 'to' để chỉ nguyên nhân.",
        distractors: {
          A: "'Attribute' là động từ nguyên mẫu hoặc danh từ, không phù hợp ở đây.",
          C: "'Attributes' là động từ chia ngôi thứ ba số ít hoặc danh từ số nhiều, không phù hợp.",
          D: "'Attributing' là hiện tại phân từ hoặc danh động từ, sẽ tạo nghĩa chủ động ('tự quy cho'), không phù hợp với câu.",
        },
      },
      {
        id: 3,
        position: "continued positive ____ in the next period",
        options: ["trend", "trends", "trending", "trendy"],
        correct: "B",
        context:
          "Cần một danh từ số nhiều để chỉ các xu hướng tích cực tiếp diễn trong kỳ tới.",
        context_translation:
          "Bản dịch ngữ cảnh: 'dự kiến tiếp tục các ____ tích cực trong kỳ tới'",
        explanation:
          "'Positive trends' (các xu hướng tích cực) là cụm từ phổ biến trong phân tích tài chính để chỉ các diễn biến tốt đẹp tiếp tục diễn ra. Việc sử dụng số nhiều là hợp lý khi nói về nhiều khía cạnh của tăng trưởng.",
        distractors: {
          A: "'Trend' là danh từ số ít, có thể dùng nhưng số nhiều 'trends' phổ biến hơn khi nói về nhiều khía cạnh hoặc sự liên tục của các xu hướng.",
          C: "'Trending' là hiện tại phân từ, không phải danh từ.",
          D: "'Trendy' là tính từ (hợp thời trang), không phù hợp với ngữ cảnh tài chính.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là tóm tắt báo cáo tài chính, tập trung vào từ vựng tài chính (overall growth, positive trends) và ngữ pháp (thể bị động rút gọn).",
      en: "This passage is a financial report summary, focusing on financial vocabulary (overall growth, positive trends) and grammar (reduced passive voice).",
    },
    difficulty: 2, // Trung bình
    tags: ["finance", "financial_report", "business_performance"],
    translation: {
      vi: "Báo cáo tài chính quý này cho thấy sự tăng trưởng tổng thể mạnh mẽ trên tất cả các lĩnh vực chính. Doanh thu tăng 15% so với quý trước, phần lớn là do các chiến dịch marketing thành công và việc thu hút khách hàng mới. Chúng tôi dự kiến tiếp tục các xu hướng tích cực trong kỳ tới.",
      en: "This quarter's financial report indicates strong overall growth across all key sectors. Revenue increased by 15% compared to the previous quarter, largely attributed to successful marketing campaigns and new client acquisitions. We anticipate continued positive trends in the next period.",
    },
  },
  {
    id: "p6_007",
    title: "Project Status Memo",
    passage: `MEMORANDUM
To: All Project Managers
From: Sarah Chen, Head of Development
Date: August 28, 2025
Subject: Project Alpha Status ____(1)____

This memo is to provide an update on Project Alpha. We are pleased to report that the development phase is progressing ____(2)____ schedule, and we are on track for a successful launch next month. Your continued collaboration is highly ____(3)____.`,
    blanks: [
      {
        id: 1,
        position: "Project Alpha Status ____",
        options: ["Update", "Updating", "Updated", "Updates"],
        correct: "A",
        context:
          "Cần một danh từ để hoàn thành tiêu đề 'Status Update' (Cập nhật tình trạng).",
        context_translation: "Bản dịch ngữ cảnh: 'Tình trạng Dự án Alpha ____'",
        explanation:
          "'Status Update' là một cụm danh từ cố định rất phổ biến, nghĩa là 'báo cáo/cập nhật tình trạng'. 'Update' ở đây là danh từ.",
        distractors: {
          B: "'Updating' là danh động từ hoặc hiện tại phân từ, không phù hợp làm một phần tiêu đề như danh từ.",
          C: "'Updated' là tính từ hoặc quá khứ phân từ, không phù hợp.",
          D: "'Updates' là danh từ số nhiều, có thể chấp nhận được nhưng 'Update' (số ít) thường dùng hơn trong tiêu đề như một khái niệm tổng thể.",
        },
      },
      {
        id: 2,
        position: "progressing ____ schedule",
        options: ["on", "in", "ahead of", "behind"],
        correct: "C",
        context:
          "Cần một cụm giới từ để chỉ mối quan hệ về thời gian của tiến độ với lịch trình, trong ngữ cảnh tích cực ('on track for a successful launch').",
        context_translation:
          "Bản dịch ngữ cảnh: 'đang tiến triển ____ lịch trình'",
        explanation:
          "'Ahead of schedule' (trước lịch trình) là một cụm từ cố định chỉ việc hoàn thành hoặc tiến triển nhanh hơn dự kiến, phù hợp với 'on track for a successful launch' (đúng tiến độ để ra mắt thành công).",
        distractors: {
          A: "'On schedule' (đúng lịch trình) cũng tích cực nhưng 'ahead of' phù hợp hơn với ý nghĩa 'on track for a successful launch' (cho thấy mọi thứ đang diễn ra rất tốt).",
          B: "'In schedule' không phải là cụm từ chính xác.",
          D: "'Behind schedule' (chậm tiến độ) có nghĩa tiêu cực, trái ngược với ngữ cảnh.",
        },
      },
      {
        id: 3,
        position: "Your continued collaboration is highly ____",
        options: ["value", "valuing", "valued", "valuable"],
        correct: "C",
        context:
          "Cần quá khứ phân từ để tạo thành thể bị động, bổ nghĩa cho 'collaboration' (sự hợp tác) và chỉ ra nó được đánh giá cao.",
        context_translation:
          "Bản dịch ngữ cảnh: 'Sự hợp tác tiếp tục của bạn được đánh giá rất ____'",
        explanation:
          "'Is highly valued' (được đánh giá cao) là cấu trúc bị động phổ biến để thể hiện sự cảm kích. 'Valued' là quá khứ phân từ.",
        distractors: {
          A: "'Value' là động từ nguyên mẫu hoặc danh từ, không phù hợp.",
          B: "'Valuing' là hiện tại phân từ, tạo nghĩa chủ động ('đang đánh giá'), không phù hợp.",
          D: "'Valuable' là tính từ (có giá trị), nhưng 'highly valued' là cách diễn đạt phổ biến và chính xác hơn trong ngữ cảnh này.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một bản ghi nhớ về tình trạng dự án, kiểm tra từ vựng (cụm danh từ 'status update', cụm giới từ 'ahead of schedule') và ngữ pháp (thể bị động).",
      en: "This passage is a project status memorandum, checking vocabulary (noun phrase 'status update', prepositional phrase 'ahead of schedule') and grammar (passive voice).",
    },
    difficulty: 2, // Trung bình
    tags: ["business_communication", "project_management", "memo"],
    translation: {
      vi: "MEMORANDUM\nĐến: Tất cả các Quản lý Dự án\nTừ: Sarah Chen, Trưởng bộ phận Phát triển\nNgày: 28 tháng 8 năm 2025\nChủ đề: Cập nhật Tình trạng Dự án Alpha\n\nBản ghi nhớ này nhằm cung cấp thông tin cập nhật về Dự án Alpha. Chúng tôi vui mừng báo cáo rằng giai đoạn phát triển đang tiến triển trước lịch trình, và chúng tôi đang đi đúng hướng để ra mắt thành công vào tháng tới. Sự hợp tác tiếp tục của bạn được đánh giá rất cao.",
      en: "MEMORANDUM\nTo: All Project Managers\nFrom: Sarah Chen, Head of Development\nDate: August 28, 2025\nSubject: Project Alpha Status Update\n\nThis memo is to provide an update on Project Alpha. We are pleased to report that the development phase is progressing ahead of schedule, and we are on track for a successful launch next month. Your continued collaboration is highly valued.",
    },
  },
  {
    id: "p6_008",
    title: "Office Renovation Notice",
    passage: `Please be advised that our main office will undergo renovations from September 1st to September 15th. During this ____(1)____, access to certain areas will be restricted. We apologize for any ____(2)____ inconvenience this may cause and appreciate your ____(3)____. Temporary workspaces will be provided.`,
    blanks: [
      {
        id: 1,
        position: "During this ____, access to certain areas",
        options: ["time", "duration", "period", "moment"],
        correct: "C",
        context:
          "Cần một danh từ để chỉ một khoảng thời gian nhất định mà việc sửa chữa diễn ra.",
        context_translation:
          "Bản dịch ngữ cảnh: 'Trong ____ này, quyền truy cập vào một số khu vực'",
        explanation:
          "'Period' (giai đoạn, thời kỳ) là danh từ phù hợp nhất để chỉ một khoảng thời gian cụ thể (từ ngày 1 đến 15 tháng 9) mà trong đó một sự kiện diễn ra. 'During this period' là một cụm từ phổ biến.",
        distractors: {
          A: "'Time' (thời gian) quá chung chung. 'During this time' cũng đúng nhưng 'period' cụ thể hơn cho một khoảng thời gian giới hạn.",
          B: "'Duration' (khoảng thời gian) không phù hợp để đi với 'this' trong cấu trúc này. Thường dùng 'for the duration of'.",
          D: "'Moment' (khoảnh khắc) quá ngắn, không phù hợp với khoảng thời gian 2 tuần.",
        },
      },
      {
        id: 2,
        position: "apologize for any ____ inconvenience",
        options: ["temp", "temporarily", "temporary", "temper"],
        correct: "C",
        context:
          "Cần một tính từ để bổ nghĩa cho danh từ 'inconvenience' (sự bất tiện).",
        context_translation:
          "Bản dịch ngữ cảnh: 'xin lỗi vì bất kỳ sự bất tiện ____ nào'",
        explanation:
          "'Temporary' (tạm thời) là tính từ phù hợp để mô tả sự bất tiện chỉ diễn ra trong thời gian sửa chữa, không phải vĩnh viễn.",
        distractors: {
          A: "'Temp' là dạng rút gọn không trang trọng, hoặc danh từ (nhân viên tạm thời).",
          B: "'Temporarily' là trạng từ, không bổ nghĩa cho danh từ 'inconvenience'.",
          D: "'Temper' là danh từ (tính khí) hoặc động từ, không phù hợp.",
        },
      },
      {
        id: 3,
        position: "appreciate your ____. Temporary workspaces",
        options: [
          "understand",
          "understood",
          "understanding",
          "understandable",
        ],
        correct: "C",
        context:
          "Cần một danh từ sau tính từ sở hữu 'your' để làm tân ngữ cho 'appreciate'.",
        context_translation:
          "Bản dịch ngữ cảnh: 'đánh giá cao sự ____ của bạn'",
        explanation:
          "Sau tính từ sở hữu 'your' cần một danh từ. 'Understanding' (sự thông cảm) là danh từ phù hợp, nghĩa là người viết đánh giá cao sự thông cảm của người đọc đối với tình huống này.",
        distractors: {
          A: "'Understand' là động từ nguyên mẫu.",
          B: "'Understood' là quá khứ phân từ.",
          D: "'Understandable' là tính từ (có thể hiểu được), không phù hợp sau 'your' để làm tân ngữ.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một thông báo về việc cải tạo văn phòng, kiểm tra từ vựng (danh từ chỉ khoảng thời gian), hình thái từ (tính từ, danh từ) và cách diễn đạt sự thông cảm trong giao tiếp kinh doanh.",
      en: "This passage is an office renovation notice, checking vocabulary (noun for a period of time), word forms (adjective, noun), and expressing appreciation in business communication.",
    },
    difficulty: 2, // Trung bình
    tags: ["office_admin", "announcement", "renovation"],
    translation: {
      vi: "Xin thông báo rằng văn phòng chính của chúng tôi sẽ trải qua cải tạo từ ngày 1 tháng 9 đến ngày 15 tháng 9. Trong giai đoạn này, quyền truy cập vào một số khu vực sẽ bị hạn chế. Chúng tôi xin lỗi vì bất kỳ sự bất tiện tạm thời nào mà điều này có thể gây ra và đánh giá cao sự thông cảm của bạn. Các không gian làm việc tạm thời sẽ được cung cấp.",
      en: "Please be advised that our main office will undergo renovations from September 1st to September 15th. During this period, access to certain areas will be restricted. We apologize for any temporary inconvenience this may cause and appreciate your understanding. Temporary workspaces will be provided.",
    },
  },
  {
    id: "p6_009",
    title: "Critical System Upgrade Information",
    passage: `To enhance network security and system stability, a critical infrastructure upgrade ____(1)____ during the upcoming weekend maintenance window. This significant ____(2)____ is expected to improve overall system resilience and performance. Users may experience brief service interruptions, though all efforts ____(3)____ to minimize downtime.`,
    blanks: [
      {
        id: 1,
        position: "upgrade ____ during the upcoming weekend",
        options: [
          "will implement",
          "is implemented",
          "will be implemented",
          "has implemented",
        ],
        correct: "C",
        context:
          "Cần thì tương lai đơn thể bị động để chỉ một hành động sẽ được thực hiện bởi ai đó (không được nêu rõ) vào cuối tuần tới.",
        context_translation:
          "Bản dịch ngữ cảnh: 'nâng cấp cơ sở hạ tầng quan trọng ____ trong cửa sổ bảo trì cuối tuần sắp tới'",
        explanation:
          "Hành động 'implement' (triển khai) sẽ được thực hiện với 'upgrade' (sự nâng cấp) là tân ngữ, và nó sẽ diễn ra trong tương lai ('upcoming weekend'). Do đó, thì tương lai đơn thể bị động 'will be implemented' là phù hợp nhất.",
        distractors: {
          A: "'Will implement' là tương lai đơn chủ động, không phù hợp khi chủ ngữ là 'upgrade' (vật).",
          B: "'Is implemented' là hiện tại đơn bị động, chỉ hành động thường xuyên hoặc sự thật, không phù hợp với 'upcoming weekend'.",
          D: "'Has implemented' là hiện tại hoàn thành chủ động, không phù hợp với chủ ngữ 'upgrade' và ngữ cảnh tương lai.",
        },
      },
      {
        id: 2,
        position: "This significant ____ is expected to improve",
        options: ["enhancing", "enhance", "enhancement", "enhances"],
        correct: "C",
        context:
          "Cần một danh từ sau tính từ 'significant' (đáng kể) để làm chủ ngữ cho câu.",
        context_translation:
          "Bản dịch ngữ cảnh: '____ đáng kể này dự kiến sẽ cải thiện'",
        explanation:
          "Sau tính từ 'significant' cần một danh từ để chỉ sự vật, sự việc mà tính từ đó bổ nghĩa. 'Enhancement' (sự cải thiện, sự nâng cao) là danh từ phù hợp, là chủ ngữ cho động từ 'is expected'.",
        distractors: {
          A: "'Enhancing' là danh động từ hoặc hiện tại phân từ, không phù hợp làm chủ ngữ.",
          B: "'Enhance' là động từ nguyên mẫu.",
          D: "'Enhances' là động từ chia ngôi thứ ba số ít.",
        },
      },
      {
        id: 3,
        position: "all efforts ____ to minimize downtime",
        options: ["will make", "are making", "will be made", "have made"],
        correct: "C",
        context:
          "Cần thì tương lai đơn thể bị động để chỉ rằng 'mọi nỗ lực' sẽ được thực hiện để giảm thiểu thời gian ngừng hoạt động.",
        context_translation:
          "Bản dịch ngữ cảnh: 'tất cả nỗ lực ____ để giảm thiểu thời gian ngừng hoạt động'",
        explanation:
          "'Efforts' (nỗ lực) không tự thực hiện mà cần được thực hiện bởi ai đó. Do đó, cần thể bị động. Vì nói về hành động trong tương lai (sau khi nâng cấp), thì tương lai đơn thể bị động 'will be made' là phù hợp.",
        distractors: {
          A: "'Will make' là tương lai đơn chủ động, không phù hợp với chủ ngữ 'efforts'.",
          B: "'Are making' là hiện tại tiếp diễn chủ động, không phù hợp với chủ ngữ 'efforts' và ý nghĩa bị động.",
          D: "'Have made' là hiện tại hoàn thành chủ động, không phù hợp với chủ ngữ 'efforts' và ngữ cảnh tương lai.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một thông báo về nâng cấp hệ thống quan trọng, tập trung vào thì động từ tương lai thể bị động và hình thái từ (danh từ sau tính từ).",
      en: "This passage is a critical system upgrade announcement, focusing on future passive verb tenses and word forms (noun after adjective).",
    },
    difficulty: 3, // Khó
    tags: ["technology_it", "system_maintenance", "announcement"],
    translation: {
      vi: "Để tăng cường bảo mật mạng và ổn định hệ thống, một bản nâng cấp cơ sở hạ tầng quan trọng sẽ được triển khai trong cửa sổ bảo trì cuối tuần sắp tới. Sự cải thiện đáng kể này dự kiến sẽ cải thiện khả năng phục hồi và hiệu suất tổng thể của hệ thống. Người dùng có thể gặp phải gián đoạn dịch vụ ngắn, mặc dù mọi nỗ lực sẽ được thực hiện để giảm thiểu thời gian ngừng hoạt động.",
      en: "To enhance network security and system stability, a critical infrastructure upgrade will be implemented during the upcoming weekend maintenance window. This significant enhancement is expected to improve overall system resilience and performance. Users may experience brief service interruptions, though all efforts will be made to minimize downtime.",
    },
  },
  {
    id: "p6_010",
    title: "Urgent Travel Itinerary Amendment",
    passage: `Dear Mr. Lee,

Due to unforeseen flight schedule adjustments, your itinerary for the business trip to Singapore has been ____(1)____. Please review the attached document, which details the revised departure and arrival times. We ____(2)____ for any disruption to your plans. A new boarding pass will be issued ____(3)____.

Sincerely,
Travel Department`,
    blanks: [
      {
        id: 1,
        position:
          "your itinerary for the business trip to Singapore has been ____.",
        options: ["amend", "amending", "amended", "amends"],
        correct: "C",
        context:
          "Cần quá khứ phân từ để hoàn thành thì hiện tại hoàn thành thể bị động 'has been amended' (đã được sửa đổi).",
        context_translation:
          "Bản dịch ngữ cảnh: 'lịch trình chuyến công tác của bạn đến Singapore đã được ____.'",
        explanation:
          "Thì hiện tại hoàn thành thể bị động ('has been + V3/ed') được dùng để chỉ một hành động đã xảy ra và có kết quả ở hiện tại. 'Amended' (sửa đổi) là quá khứ phân từ của 'amend'.",
        distractors: {
          A: "'Amend' là động từ nguyên mẫu.",
          B: "'Amending' là hiện tại phân từ hoặc danh động từ.",
          D: "'Amends' là danh từ (bồi thường) hoặc động từ chia ngôi thứ ba số ít.",
        },
      },
      {
        id: 2,
        position: "We ____ for any disruption to your plans.",
        options: ["regret", "apologize", "excuse", "sorry"],
        correct: "B",
        context:
          "Cần một động từ để bày tỏ sự tiếc nuối, hối lỗi về sự gián đoạn chuyến đi.",
        context_translation:
          "Bản dịch ngữ cảnh: 'Chúng tôi ____ vì bất kỳ sự gián đoạn nào đối với kế hoạch của bạn.'",
        explanation:
          "'Apologize' (xin lỗi) là động từ phù hợp nhất trong ngữ cảnh này để bày tỏ sự hối tiếc về sự bất tiện đã gây ra. Nó thường đi với giới từ 'for'.",
        distractors: {
          A: "'Regret' (tiếc nuối) cũng có thể dùng nhưng 'apologize' trực tiếp bày tỏ lời xin lỗi cho sự bất tiện gây ra.",
          C: "'Excuse' (tha thứ, biện hộ) không phù hợp.",
          D: "'Sorry' là tính từ (buồn, tiếc), cần 'are sorry' hoặc 'feel sorry', không đứng một mình làm động từ.",
        },
      },
      {
        id: 3,
        position: "A new boarding pass will be issued ____.",
        options: ["immediately", "shortly", "recently", "lately"],
        correct: "B",
        context:
          "Cần một trạng từ chỉ thời gian, có nghĩa là 'rất sớm', phù hợp với ngữ cảnh một thông báo về thay đổi cần xử lý nhanh.",
        context_translation:
          "Bản dịch ngữ cảnh: 'Thẻ lên máy bay mới sẽ được cấp ____.'",
        explanation:
          "'Shortly' (chẳng bao lâu nữa, sắp sửa) là trạng từ phù hợp nhất để chỉ rằng thẻ lên máy bay mới sẽ được cấp trong thời gian ngắn tới, rất sớm.",
        distractors: {
          A: "'Immediately' (ngay lập tức) cũng có thể dùng nhưng 'shortly' thường có nghĩa là 'trong vài phút/giờ tới', còn 'immediately' là không trì hoãn.",
          C: "'Recently' (gần đây) chỉ thời gian quá khứ, không phù hợp với thì tương lai 'will be issued'.",
          D: "'Lately' (gần đây) cũng chỉ thời gian quá khứ, không phù hợp.",
        },
      },
    ],
    overall_explanation: {
      vi: "Đoạn văn này là một email thông báo khẩn cấp về việc sửa đổi lịch trình chuyến đi, kiểm tra thì động từ (hiện tại hoàn thành bị động), từ vựng (động từ bày tỏ sự hối tiếc) và trạng từ chỉ thời gian.",
      en: "This passage is an urgent email about travel itinerary amendments, checking verb tenses (present perfect passive), vocabulary (verb to express regret), and adverbs of time.",
    },
    difficulty: 3, // Khó
    tags: ["business_communication", "travel", "urgent_notice"],
    translation: {
      vi: "Kính gửi Ông Lee,\n\nDo những điều chỉnh lịch trình chuyến bay không lường trước được, lịch trình chuyến công tác của bạn đến Singapore đã được sửa đổi. Vui lòng xem lại tài liệu đính kèm, trong đó trình bày chi tiết thời gian khởi hành và đến dự kiến. Chúng tôi xin lỗi vì bất kỳ sự gián đoạn nào đối với kế hoạch của bạn. Thẻ lên máy bay mới sẽ được cấp sớm.\n\nTrân trọng,\nPhòng Du lịch",
      en: "Dear Mr. Lee,\n\nDue to unforeseen flight schedule adjustments, your itinerary for the business trip to Singapore has been amended. Please review the attached document, which details the revised departure and arrival times. We apologize for any disruption to your plans. A new boarding pass will be issued shortly.\n\nSincerely,\nTravel Department",
    },
  },
];

// Export for use in app.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = TOEIC_PART6_QUESTIONS;
}
