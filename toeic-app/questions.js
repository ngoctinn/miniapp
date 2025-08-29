// const TOEIC_QUESTIONS = [
//   {
//     id: "q1",
//     question:
//       "The manager has asked new interns to help ------ prepare the slides for tomorrow’s briefing.",
//     options: ["she", "her", "herself", "hers"],
//     answer: "B",
//     translation: {
//       vi: "Quản lý đã yêu cầu thực tập sinh mới giúp cô ấy chuẩn bị các slide cho buổi báo cáo ngày mai.",
//       en: "The manager has asked new interns to help her prepare the slides for tomorrow’s briefing.",
//     },
//     explanation: {
//       vi: "Sau động từ 'help' cần đại từ tân ngữ. 'her' là đại từ tân ngữ.",
//       en: "After the verb 'help', an object pronoun is required. 'Her' is the correct object pronoun.",
//     },
//     grammar_tags: ["pronoun", "object_pronoun"],
//     vocab_tags: ["office", "presentation"],
//     difficulty: 1,
//     distractor_notes: {
//       B: "",
//       C: "'Herself' is reflexive; use it when the subject and object are the same person.",
//       D: "'Hers' is a possessive pronoun and cannot precede a verb.",
//     },
//     hint: "Sau động từ, dùng đại từ tân ngữ (me, him, her, us, them).",
//   },
//   {
//     id: "q2",
//     question: "Prices at BizMart are ------ lower than at nearby supermarkets.",
//     options: [
//       "more significant",
//       "significant",
//       "significance",
//       "significantly",
//     ],
//     answer: "D",
//     translation: {
//       vi: "Giá cả tại BizMart thấp hơn đáng kể so với các siêu thị lân cận.",
//       en: "Prices at BizMart are significantly lower than at nearby supermarkets.",
//     },
//     explanation: {
//       vi: "Đứng trước tính từ so sánh hơn 'lower' cần trạng từ chỉ mức độ 'significantly'.",
//       en: "Before the comparative adjective 'lower', use the degree adverb 'significantly'.",
//     },
//     grammar_tags: ["adverb", "comparative"],
//     vocab_tags: ["retail", "pricing"],
//     difficulty: 1,
//     distractor_notes: {
//       B: "'significant' là tính từ, không bổ nghĩa trực tiếp cho 'lower' trong cấu trúc này.",
//       C: "'significance' là danh từ, không phù hợp.",
//       A: "Cụm tính từ 'more significant' không đi với 'lower' để chỉ mức độ.",
//     },
//     hint: "Từ bổ nghĩa cho tính từ so sánh thường là trạng từ (e.g., 'much', 'far', 'significantly').",
//   },
//   {
//     id: "q3",
//     question:
//       "All temporary staff must have extensive ------ of our current inventory system.",
//     options: ["know", "knew", "knowledge", "knowledgeable"],
//     answer: "C",
//     translation: {
//       vi: "Tất cả nhân viên tạm thời phải có kiến thức sâu rộng về hệ thống kiểm kê hiện tại của chúng tôi.",
//       en: "All temporary staff must have extensive knowledge of our current inventory system.",
//     },
//     explanation: {
//       vi: "Sau tính từ 'extensive' cần danh từ. 'knowledge' là danh từ phù hợp.",
//       en: "After the adjective 'extensive', a noun is needed. 'Knowledge' fits.",
//     },
//     grammar_tags: ["parts_of_speech", "noun"],
//     vocab_tags: ["IT", "operations"],
//     difficulty: 1,
//     distractor_notes: {
//       A: "'know' là động từ, không thể đứng sau 'extensive'.",
//       B: "'knew' là quá khứ của 'know', vẫn là động từ.",
//       D: "'knowledgeable' là tính từ, không phù hợp sau 'extensive'.",
//     },
//     hint: "Nhìn hậu tố: '-ledge' thường là danh từ (knowledge).",
//   },
//   {
//     id: "q4",
//     question:
//       "RHC International has remained the leading food ------ for over a decade.",
//     options: ["supply", "supplier", "supplement", "supplemental"],
//     answer: "B",
//     translation: {
//       vi: "RHC International đã duy trì vị trí dẫn đầu về cung cấp thực phẩm trong hơn một thập kỷ.",
//       en: "RHC International has remained the leading food supplier for over a decade.",
//     },
//     explanation: {
//       vi: "Cần danh từ chỉ người/đơn vị: 'supplier' (nhà cung cấp).",
//       en: "A noun referring to a person/company is required: 'supplier'.",
//     },
//     grammar_tags: ["word_family", "parts_of_speech"],
//     vocab_tags: ["logistics", "food_industry"],
//     difficulty: 1,
//     distractor_notes: {
//       A: "'supply' là danh từ/động từ nhưng không chỉ người/đơn vị.",
//       C: "'supplement' là danh từ/động từ khác nghĩa.",
//       D: "'supplemental' là tính từ.",
//     },
//     hint: "Đuôi '-er/-or' thường chỉ người/đơn vị thực hiện.",
//   },
//   {
//     id: "q5",
//     question:
//       "Từ nào có nghĩa gần nhất với 'sự chấp thuận' trong ngữ cảnh kinh doanh?",
//     options: ["approval", "prohibit", "regulate", "authorize"],
//     answer: "A",
//     translation: {
//       vi: "Từ nào có nghĩa gần nhất với 'sự chấp thuận' trong ngữ cảnh kinh doanh?",
//       en: "Which word has the closest meaning to 'approval' in a business context?",
//     },
//     explanation: {
//       vi: "'Approval' là danh từ 'sự chấp thuận'.",
//       en: "'Approval' is the noun meaning 'agreement or acceptance'.",
//     },
//     grammar_tags: ["vocabulary"],
//     vocab_tags: ["permission", "business"],
//     difficulty: 1,
//     distractor_notes: {
//       B: "'prohibit' = cấm (động từ).",
//       C: "'regulate' = quy định, điều chỉnh (động từ).",
//       D: "'authorize' = ủy quyền/cho phép (động từ), không phải danh từ.",
//     },
//     hint: "Bạn đang tìm danh từ (noun).",
//   },
//   {
//     id: "q6",
//     question:
//       "Most of the stores downtown ------ at 10 A.M. and close at 9 P.M. every day.",
//     options: ["opens", "opening", "will open", "open"],
//     answer: "D",
//     translation: {
//       vi: "Hầu hết các cửa hàng ở trung tâm thành phố mở cửa lúc 10 giờ sáng và đóng cửa lúc 9 giờ tối mỗi ngày.",
//       en: "Most of the stores downtown open at 10 A.M. and close at 9 P.M. every day.",
//     },
//     explanation: {
//       vi: "Chủ ngữ số nhiều 'stores' + hiện tại đơn diễn tả thói quen: 'open'.",
//       en: "Plural subject 'stores' + present simple for routine: 'open'.",
//     },
//     grammar_tags: ["tense", "present_simple", "subject_verb_agreement"],
//     vocab_tags: ["business_hours"],
//     difficulty: 1,
//     distractor_notes: {
//       A: "Số ít; không phù hợp với 'stores'.",
//       B: "V-ing không phải thì thích hợp ở đây.",
//       C: "Tương lai không diễn tả lịch mở cửa hằng ngày.",
//     },
//     hint: "Thói quen/lịch trình hiện tại dùng hiện tại đơn.",
//   },
//   {
//     id: "q7",
//     question:
//       "Bella Fashion announced the grand opening of ------ first clothing store downtown.",
//     options: ["it", "its", "his", "itself"],
//     answer: "B",
//     translation: {
//       vi: "Bella Fashion thông báo khai trương cửa hàng quần áo đầu tiên ở trung tâm thành phố.",
//       en: "Bella Fashion announced the grand opening of its first clothing store downtown.",
//     },
//     explanation: {
//       vi: "Trước danh từ cần tính từ sở hữu: 'its'.",
//       en: "Before a noun, use a possessive determiner: 'its'.",
//     },
//     grammar_tags: ["pronoun", "possessive_determiner", "parts_of_speech"],
//     vocab_tags: ["retail", "announcement"],
//     difficulty: 1,
//     distractor_notes: {
//       A: "'it' là đại từ, không bổ nghĩa danh từ.",
//       C: "'his' chỉ nam giới, không phù hợp với công ty.",
//       D: "'itself' là phản thân, không đứng trước danh từ.",
//     },
//     hint: "Tính từ sở hữu (my/your/his/her/its/our/their) + danh từ.",
//   },
//   {
//     id: "q8",
//     question:
//       "Glory Furnishings is closing some showrooms because customers are ------ ordering furniture online.",
//     options: ["increasing", "increase", "increasingly", "increased"],
//     answer: "C",
//     translation: {
//       vi: "Glory Furnishings đang đóng cửa một số phòng trưng bày vì khách hàng ngày càng đặt mua đồ nội thất trực tuyến.",
//       en: "Glory Furnishings is closing some showrooms because customers are increasingly ordering furniture online.",
//     },
//     explanation: {
//       vi: "Cần trạng từ bổ nghĩa cho động từ 'ordering' về mức độ: 'increasingly'.",
//       en: "An adverb modifying 'ordering' is needed: 'increasingly'.",
//     },
//     grammar_tags: ["adverb", "parts_of_speech"],
//     vocab_tags: ["ecommerce", "retail"],
//     difficulty: 1,
//     distractor_notes: {
//       A: "V-ing không đóng vai trò trạng từ.",
//       B: "Động từ nguyên thể không phù hợp.",
//       D: "Quá khứ phân từ không dùng làm trạng từ ở đây.",
//     },
//     hint: "Đứng trước/ sau V-ing thường là trạng từ khi nói về mức độ.",
//   },
//   {
//     id: "q9",
//     question:
//       "Next month, the city government will be ------ a third public library near the post office.",
//     options: ["construct", "constructs", "constructed", "constructing"],
//     answer: "D",
//     translation: {
//       vi: "Tháng tới, chính quyền thành phố sẽ xây dựng thư viện công cộng thứ ba gần bưu điện.",
//       en: "Next month, the city government will be constructing a third public library near the post office.",
//     },
//     explanation: {
//       vi: "Tương lai tiếp diễn: will be + V-ing → 'will be constructing'.",
//       en: "Future continuous: will be + V-ing → 'will be constructing'.",
//     },
//     grammar_tags: ["tense", "future_continuous"],
//     vocab_tags: ["public_services", "infrastructure"],
//     difficulty: 1,
//     distractor_notes: {
//       A: "Thiếu 'will be'.",
//       B: "Hiện tại đơn không đúng.",
//       C: "Quá khứ phân từ; không dùng sau 'will be' (trừ bị động).",
//     },
//     hint: "Dấu hiệu 'next month' + hành động đang diễn ra trong tương lai.",
//   },
//   {
//     id: "q10",
//     question:
//       'Chọn từ đúng điền vào chỗ trống: "We need board ------ before upgrading the system."',
//     options: ["approval", "approve", "approved", "approving"],
//     answer: "A",
//     translation: {
//       vi: 'Chọn từ đúng điền vào chỗ trống: "Chúng ta cần sự chấp thuận của ban quản lý trước khi nâng cấp hệ thống."',
//       en: 'Choose the correct word to fill in the blank: "We need board approval before upgrading the system."',
//     },
//     explanation: {
//       vi: "Sau 'need' + danh từ: 'approval' (sự chấp thuận).",
//       en: "After 'need', a noun fits: 'approval'.",
//     },
//     grammar_tags: ["vocabulary", "parts_of_speech"],
//     vocab_tags: ["governance", "IT"],
//     difficulty: 1,
//     distractor_notes: {
//       B: "Động từ nguyên thể, không phù hợp.",
//       C: "Tính từ/PP không phù hợp vai trò danh từ.",
//       D: "V-ing không phải danh từ tự nhiên ở đây.",
//     },
//     hint: "Nhận biết danh từ qua nghĩa/ vị trí sau động từ mang nghĩa cần + N.",
//   },

//   {
//     id: "q11",
//     question:
//       "After the team meeting next Friday, Ms. Suba ------ whether the deadline needs to be extended.",
//     options: ["to decide", "deciding", "will decide", "has decided"],
//     answer: "C",
//     translation: {
//       vi: "Sau cuộc họp nhóm vào thứ Sáu tới, bà Suba sẽ quyết định xem thời hạn có cần được gia hạn hay không.",
//       en: "After the team meeting next Friday, Ms. Suba will decide whether the deadline needs to be extended.",
//     },
//     explanation: {
//       vi: "Dấu hiệu tương lai cụ thể → dùng tương lai đơn: 'will decide'.",
//       en: "A specific future time calls for the simple future: 'will decide'.",
//     },
//     grammar_tags: ["tense", "future_simple"],
//     vocab_tags: ["project_management", "scheduling"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "Không phải dạng chia thì.",
//       B: "V-ing không phù hợp sau chủ ngữ ở đây.",
//       D: "Hiện tại hoàn thành không dùng cho tương lai dự định.",
//     },
//     hint: "next Friday → tương lai đơn.",
//   },
//   {
//     id: "q12",
//     question:
//       "Mr. Robert would like ------ a meeting about the new project as soon as possible.",
//     options: ["to arrange", "arranging", "having arranged", "arrangement"],
//     answer: "A",
//     translation: {
//       vi: "Ông Robert muốn sắp xếp một cuộc họp về dự án mới càng sớm càng tốt.",
//       en: "Mr. Robert would like to arrange a meeting about the new project as soon as possible.",
//     },
//     explanation: {
//       vi: "Cấu trúc 'would like + to V' → 'to arrange'.",
//       en: "Use the pattern 'would like + to + verb' → 'to arrange'.",
//     },
//     grammar_tags: ["verb_form", "infinitive"],
//     vocab_tags: ["meetings", "projects"],
//     difficulty: 2,
//     distractor_notes: {
//       B: "Danh động từ không theo sau 'would like'.",
//       C: "V-ing nhấn mạnh hoàn thành không phù hợp.",
//       D: "Danh từ không đúng vai trò.",
//     },
//     hint: "Nhớ cấu trúc 'would like + to V'.",
//   },
//   {
//     id: "q13",
//     question:
//       "Từ nào là trạng từ để mô tả mức độ phù hợp khi đứng trước tính từ? (ví dụ: '------ effective')",
//     options: ["effect", "effective", "effectively", "effectiveness"],
//     answer: "C",
//     translation: {
//       vi: "Từ nào là trạng từ để mô tả mức độ phù hợp khi đứng trước tính từ? (ví dụ: 'highly effective')",
//       en: "Which word is an adverb that appropriately describes degree when placed before an adjective? (example: 'highly effective')",
//     },
//     explanation: {
//       vi: "'effectively' là trạng từ, đứng trước tính từ khác thường là 'very', 'highly', nhưng 'effectively' đi với động từ; câu hỏi yêu cầu trạng từ nói chung—chọn 'effectively' là dạng trạng từ đúng.",
//       en: "'Effectively' is an adverb. The prompt asks for an adverb form; 'effectively' is correct.",
//     },
//     grammar_tags: ["adverb", "word_family"],
//     vocab_tags: ["communication"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "Danh từ/động từ tùy ngữ cảnh, không phải trạng từ.",
//       B: "Tính từ.",
//       D: "Danh từ trừu tượng.",
//     },
//     hint: "Đuôi '-ly' thường là trạng từ.",
//   },
//   {
//     id: "q14",
//     question: "The newly hired analyst wrote a ------- report on market risks.",
//     options: ["detail", "detailed", "detailing", "in detail"],
//     answer: "B",
//     translation: {
//       vi: "Nhà phân tích mới được thuê đã viết một báo cáo chi tiết về các rủi ro thị trường.",
//       en: "The newly hired analyst wrote a detailed report on market risks.",
//     },
//     explanation: {
//       vi: "Trước danh từ 'report' cần tính từ: 'detailed'.",
//       en: "An adjective is needed before 'report': 'detailed'.",
//     },
//     grammar_tags: ["adjective", "parts_of_speech"],
//     vocab_tags: ["finance", "reporting"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "Danh từ, không bổ nghĩa danh từ khác trực tiếp.",
//       C: "V-ing không phải tính từ tự nhiên ở đây.",
//       D: "Cụm giới từ; không đặt trước danh từ làm định ngữ.",
//     },
//     hint: "Adj + noun: 'a detailed report'.",
//   },
//   {
//     id: "q15",
//     question:
//       "Due to the high initial cost, our redesign ------ is not approved.",
//     options: ["propose", "proposed", "proposal", "proposing"],
//     answer: "C",
//     translation: {
//       vi: "Do chi phí ban đầu cao, đề xuất thiết kế lại của chúng tôi không được phê duyệt.",
//       en: "Due to the high initial cost, our redesign proposal is not approved.",
//     },
//     explanation: {
//       vi: "Sau tính từ sở hữu 'our' cần danh từ: 'proposal'.",
//       en: "After 'our', a noun is expected: 'proposal'.",
//     },
//     grammar_tags: ["word_family", "noun"],
//     vocab_tags: ["construction", "budget"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "Động từ nguyên thể, không phù hợp.",
//       B: "Tính từ/PP, không phải danh từ.",
//       D: "V-ing danh danh hóa ít tự nhiên hơn 'proposal'.",
//     },
//     hint: "Hậu tố '-al' thường tạo danh từ (proposal, approval).",
//   },
//   {
//     id: "q16",
//     question:
//       "We invited those who have concerns about our campaign to join ------ at the conference tomorrow.",
//     options: ["ours", "us", "ourselves", "we"],
//     answer: "B",
//     translation: {
//       vi: "Chúng tôi mời những người có lo ngại về chiến dịch của chúng tôi tham gia cùng chúng tôi tại hội nghị ngày mai.",
//       en: "We invited those who have concerns about our campaign to join us at the conference tomorrow.",
//     },
//     explanation: {
//       vi: "Sau động từ 'join' cần tân ngữ: 'us'.",
//       en: "After the verb 'join', use an object pronoun: 'us'.",
//     },
//     grammar_tags: ["pronoun", "object_pronoun"],
//     vocab_tags: ["events", "PR"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "Đại từ sở hữu.",
//       C: "Phản thân không cần thiết.",
//       D: "Chủ ngữ, không làm tân ngữ.",
//     },
//     hint: "join + tân ngữ (me/us/them).",
//   },
//   {
//     id: "q17",
//     question:
//       "Thanks to effective marketing, profits in Q3 differed ------ from original projections.",
//     options: ["significant", "significance", "significantly", "signify"],
//     answer: "C",
//     translation: {
//       vi: "Nhờ marketing hiệu quả, lợi nhuận quý 3 khác biệt đáng kể so với dự báo ban đầu.",
//       en: "Thanks to effective marketing, profits in Q3 differed significantly from original projections.",
//     },
//     explanation: {
//       vi: "Động từ 'differ' cần trạng từ để bổ nghĩa: 'significantly'.",
//       en: "The verb 'differ' takes an adverb: 'significantly'.",
//     },
//     grammar_tags: ["adverb", "verb_adverb_collocation"],
//     vocab_tags: ["marketing", "finance"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "Tính từ không bổ nghĩa động từ.",
//       B: "Danh từ.",
//       D: "Động từ khác nghĩa.",
//     },
//     hint: "Verb + adverb (move quickly, differ significantly).",
//   },
//   {
//     id: "q18",
//     question:
//       'Which option best completes the sentence? "All candidates must wear a badge with ------ name on it."',
//     options: ["its", "it's", "their", "theirs"],
//     answer: "C",
//     translation: {
//       vi: 'Tùy chọn nào hoàn thành câu tốt nhất? "Tất cả ứng viên phải đeo huy hiệu có tên của họ trên đó."',
//       en: 'Which option best completes the sentence? "All candidates must wear a badge with their name on it."',
//     },
//     explanation: {
//       vi: "'their' (tính từ sở hữu) + danh từ 'name'.",
//       en: "'Their' is the possessive determiner before 'name'.",
//     },
//     grammar_tags: ["pronoun", "possessive_determiner", "agreement"],
//     vocab_tags: ["HR", "policy"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "'its' dùng cho vật/đơn vị số ít.",
//       B: "'it's' = it is/it has, sai loại.",
//       D: "'theirs' là đại từ sở hữu, không đi kèm danh từ.",
//     },
//     hint: "Tính từ sở hữu + danh từ (their name).",
//   },
//   {
//     id: "q19",
//     question:
//       'Complete the sentence: "The company announced a list of suppliers ------ it considers reliable."',
//     options: ["it", "itself", "they", "their"],
//     answer: "A",
//     translation: {
//       vi: 'Hoàn thành câu: "Công ty công bố danh sách các nhà cung cấp mà nó coi là đáng tin cậy."',
//       en: 'Complete the sentence: "The company announced a list of suppliers that it considers reliable."',
//     },
//     explanation: {
//       vi: "Mệnh đề quan hệ rút gọn tân ngữ: 'it considers (them) reliable' → giữ 'it' là chủ ngữ của mệnh đề sau.",
//       en: "In the relative clause, 'it' is the subject of 'considers': 'it considers (them) reliable'.",
//     },
//     grammar_tags: ["relative_clause", "pronoun"],
//     vocab_tags: ["procurement", "trust"],
//     difficulty: 2,
//     distractor_notes: {
//       B: "Phản thân không đúng vai trò.",
//       C: "Thay đổi chủ ngữ không phù hợp.",
//       D: "Tính từ sở hữu không đúng chỗ.",
//     },
//     hint: "Xem mệnh đề sau chỗ trống cần chủ ngữ gì.",
//   },
//   {
//     id: "q20",
//     question:
//       "We are contacting ------ who recently purchased our products to invite them to our survey.",
//     options: ["something", "nothing", "no one", "everyone"],
//     answer: "D",
//     translation: {
//       vi: "Chúng tôi đang liên hệ với tất cả những ai gần đây đã mua sản phẩm của chúng tôi để mời họ tham gia khảo sát.",
//       en: "We are contacting everyone who recently purchased our products to invite them to our survey.",
//     },
//     explanation: {
//       vi: "'everyone' (mọi người) phù hợp với 'them'.",
//       en: "'Everyone' matches the pronoun 'them' later.",
//     },
//     grammar_tags: ["pronoun", "indefinite_pronoun"],
//     vocab_tags: ["customer_service", "survey"],
//     difficulty: 2,
//     distractor_notes: {
//       A: "Chỉ vật, không chỉ người.",
//       B: "Nghĩa 'không gì' không phù hợp.",
//       C: "Phủ định 'không ai' mâu thuẫn ngữ cảnh.",
//     },
//     hint: "Cần đại từ bất định chỉ người.",
//   },

//   {
//     id: "q21",
//     question:
//       "While the mayor ------ the crowd, the microphone suddenly failed.",
//     options: [
//       "was addressing",
//       "was addressed",
//       "had addressed",
//       "has been addressing",
//     ],
//     answer: "A",
//     explanation: {
//       vi: "Quá khứ tiếp diễn diễn tả hành động đang diễn ra bị chen ngang.",
//       en: "Past continuous for an ongoing action interrupted by another event.",
//     },
//     grammar_tags: ["tense", "past_continuous", "complex_sentence"],
//     vocab_tags: ["public_speaking", "events"],
//     difficulty: 3,
//     distractor_notes: {
//       B: "Bị động không phù hợp.",
//       C: "Quá khứ hoàn thành không diễn tả hành động đang diễn ra.",
//       D: "Hiện tại hoàn thành tiếp diễn không phù hợp mốc quá khứ.",
//     },
//     hint: "'While' + quá khứ tiếp diễn; mệnh đề kia quá khứ đơn.",
//   },
//   {
//     id: "q22",
//     question: "Our compliance team found the new filing process ------ to use.",
//     options: ["convenient", "convenience", "conveniently", "conveniences"],
//     answer: "A",
//     explanation: {
//       vi: "Cấu trúc 'find + O + adj' → 'convenient'.",
//       en: "Use 'find + object + adjective' → 'convenient'.",
//     },
//     grammar_tags: ["adjective", "object_complement"],
//     vocab_tags: ["compliance", "process"],
//     difficulty: 3,
//     distractor_notes: {
//       B: "Danh từ.",
//       C: "Trạng từ không làm bổ ngữ tân ngữ.",
//       D: "Danh từ số nhiều.",
//     },
//     hint: "find + something + easy/possible/convenient.",
//   },
//   {
//     id: "q23",
//     question:
//       "Applicants will be shortlisted ------ they meet all mandatory criteria.",
//     options: ["because", "although", "unless", "provided that"],
//     answer: "D",
//     explanation: {
//       vi: "'provided that' = với điều kiện là (điều kiện đủ).",
//       en: "'Provided that' expresses a condition (if and only if).",
//     },
//     grammar_tags: ["conjunction", "condition"],
//     vocab_tags: ["recruitment", "criteria"],
//     difficulty: 3,
//     distractor_notes: {
//       A: "Nguyên nhân, không phải điều kiện.",
//       B: "Nhượng bộ, trái nghĩa.",
//       C: "'trừ khi' phủ định điều kiện.",
//     },
//     hint: "Tìm liên từ diễn đạt điều kiện đủ.",
//   },
//   {
//     id: "q24",
//     question:
//       "The conference fee usually ------ admittance to multiple workshops.",
//     options: ["include", "includes", "included", "including"],
//     answer: "B",
//     explanation: {
//       vi: "Chủ ngữ số ít 'fee' → 'includes' (hiện tại đơn).",
//       en: "Singular subject 'fee' takes 'includes' in the present simple.",
//     },
//     grammar_tags: ["subject_verb_agreement", "present_simple"],
//     vocab_tags: ["events", "fees"],
//     difficulty: 3,
//     distractor_notes: {
//       A: "Dạng số nhiều.",
//       C: "Quá khứ đơn.",
//       D: "Danh động từ/giới từ, không làm vị ngữ.",
//     },
//     hint: "Xác định chủ ngữ số ít hay số nhiều.",
//   },
//   {
//     id: "q25",
//     question:
//       'Select the best option: "Most consumers ------ enthusiastically to the software update."',
//     options: ["response", "responded", "responsively", "respondent"],
//     answer: "B",
//     explanation: {
//       vi: "Cần động từ quá khứ đơn: 'responded'.",
//       en: "A past simple verb is required: 'responded'.",
//     },
//     grammar_tags: ["tense", "past_simple"],
//     vocab_tags: ["software", "customer_feedback"],
//     difficulty: 3,
//     distractor_notes: {
//       A: "Danh từ.",
//       C: "Trạng từ.",
//       D: "Danh từ chỉ người.",
//     },
//     hint: "Sau chủ ngữ cần động từ chia thì quá khứ.",
//   },
//   {
//     id: "q26",
//     question:
//       "No one without excellent academic results is granted ------ to the program.",
//     options: ["admit", "admitted", "admission", "admitting"],
//     answer: "C",
//     explanation: {
//       vi: "Cần danh từ: 'admission' (sự chấp nhận/nhập học).",
//       en: "A noun is needed: 'admission'.",
//     },
//     grammar_tags: ["parts_of_speech", "noun"],
//     vocab_tags: ["education", "eligibility"],
//     difficulty: 3,
//     distractor_notes: {
//       A: "Động từ.",
//       B: "Tính từ/PP.",
//       D: "Danh động từ không tự nhiên ở đây.",
//     },
//     hint: "grant + N (grant permission/admission).",
//   },
//   {
//     id: "q27",
//     question:
//       "Although the third quarter was not particularly ------, the company increased R&D spending.",
//     options: ["profitable", "profitably", "profit", "profitability"],
//     answer: "A",
//     explanation: {
//       vi: "Sau 'not particularly' + tính từ: 'profitable'.",
//       en: "After 'not particularly', use an adjective: 'profitable'.",
//     },
//     grammar_tags: ["adjective", "clause"],
//     vocab_tags: ["finance", "R&D"],
//     difficulty: 3,
//     distractor_notes: {
//       B: "Trạng từ.",
//       C: "Danh từ.",
//       D: "Danh từ trừu tượng.",
//     },
//     hint: "Xem từ đứng trước để xác định từ loại.",
//   },
//   {
//     id: "q28",
//     question:
//       "Please submit additional documentation ------ according to its importance.",
//     options: ["separate", "separately", "separation", "separateness"],
//     answer: "B",
//     explanation: {
//       vi: "Bổ nghĩa cho cả mệnh đề/động từ 'submit' → dùng trạng từ 'separately'.",
//       en: "Modify the action; use the adverb 'separately'.",
//     },
//     grammar_tags: ["adverb", "sentence_adverbial"],
//     vocab_tags: ["documentation", "procedure"],
//     difficulty: 3,
//     distractor_notes: {
//       A: "Tính từ.",
//       C: "Danh từ.",
//       D: "Danh từ trừu tượng hiếm dùng.",
//     },
//     hint: "Hành động thực hiện *như thế nào* → trạng từ.",
//   },
//   {
//     id: "q29",
//     question: "As the marketing initiative was unclear, ------ was rejected.",
//     options: ["they", "them", "these", "it"],
//     answer: "D",
//     explanation: {
//       vi: "Thay thế cho 'initiative' (đề xuất) → đại từ 'it'.",
//       en: "Refer back to a singular idea 'initiative' → 'it'.",
//     },
//     grammar_tags: ["pronoun", "reference"],
//     vocab_tags: ["marketing", "proposal"],
//     difficulty: 3,
//     distractor_notes: {
//       A: "Số nhiều, không phù hợp.",
//       B: "Tân ngữ số nhiều.",
//       C: "Chỉ gần—số nhiều.",
//     },
//     hint: "Khớp số ít/số nhiều với danh từ thay thế.",
//   },
//   {
//     id: "q30",
//     question:
//       'Which word fits? "Corporate-security training helps safeguard sensitive and ------ information."',
//     options: ["confident", "confide", "confidence", "confidential"],
//     answer: "D",
//     explanation: {
//       vi: "Trước 'information' là tính từ mô tả: 'confidential'.",
//       en: "Use an adjective before 'information': 'confidential'.",
//     },
//     grammar_tags: ["adjective", "collocation"],
//     vocab_tags: ["security", "policy"],
//     difficulty: 3,
//     distractor_notes: {
//       A: "Tính từ nhưng nghĩa 'tự tin', sai ngữ nghĩa.",
//       B: "Động từ.",
//       C: "Danh từ.",
//     },
//     hint: "Collocation phổ biến: confidential information.",
//   },

//   {
//     id: "q31",
//     question:
//       "By the time the audit begins next week, the finance team ------ all expense reports.",
//     options: ["reviews", "will review", "will have reviewed", "has reviewed"],
//     answer: "C",
//     explanation: {
//       vi: "Tương lai hoàn thành cho hành động hoàn tất trước mốc tương lai.",
//       en: "Future perfect indicates completion before a future point.",
//     },
//     grammar_tags: ["tense", "future_perfect"],
//     vocab_tags: ["audit", "finance"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Hiện tại đơn không đúng mốc thời gian.",
//       B: "Tương lai đơn không nhấn mạnh hoàn tất trước.",
//       D: "Hiện tại hoàn thành không đặt trước mốc tương lai.",
//     },
//     hint: "'by the time + mốc tương lai' → will have + V3.",
//   },
//   {
//     id: "q32",
//     question:
//       "If the supplier had sent the components earlier, we ------ the assembly yesterday.",
//     options: [
//       "completed",
//       "would complete",
//       "will have completed",
//       "would have completed",
//     ],
//     answer: "D",
//     explanation: {
//       vi: "Câu điều kiện loại 3: had + V3 → would have + V3.",
//       en: "Third conditional: past perfect → would have + past participle.",
//     },
//     grammar_tags: ["conditional", "past_perfect"],
//     vocab_tags: ["supply_chain", "manufacturing"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Thiếu phần điều kiện tương ứng.",
//       B: "Không đúng dạng loại 3.",
//       C: "Sai thì và cấu trúc.",
//     },
//     hint: "Điều kiện không có thật trong quá khứ → would have + V3.",
//   },
//   {
//     id: "q33",
//     question: "Only after the system reboot ------ to submit the form.",
//     options: [
//       "users are able",
//       "are users able",
//       "users will be able",
//       "will users able",
//     ],
//     answer: "B",
//     explanation: {
//       vi: "Đảo ngữ với trạng từ phủ định/nhấn mạnh: 'Only after ...' → đảo trợ động từ trước chủ ngữ.",
//       en: "Inversion after 'Only after ...': auxiliary + subject + verb.",
//     },
//     grammar_tags: ["inversion", "adverbial_phrase"],
//     vocab_tags: ["IT", "forms"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Thiếu đảo ngữ.",
//       C: "Không đảo ngữ và sai thì.",
//       D: "Thiếu 'be' sau 'will users'.",
//     },
//     hint: "Only after/only then/rarely/seldom → đảo ngữ.",
//   },
//   {
//     id: "q34",
//     question:
//       "The documents, ------ were requested last week, have been forwarded to legal.",
//     options: ["which", "that", "who", "whom"],
//     answer: "A",
//     explanation: {
//       vi: "Mệnh đề không hạn định (có dấu phẩy) dùng 'which' cho vật.",
//       en: "Non-restrictive clause with commas: use 'which' for things.",
//     },
//     grammar_tags: ["relative_pronoun", "nonrestrictive_clause"],
//     vocab_tags: ["legal", "documents"],
//     difficulty: 4,
//     distractor_notes: {
//       B: "'that' không dùng trong mệnh đề không hạn định.",
//       C: "'who' dùng cho người.",
//       D: "'whom' là tân ngữ chỉ người.",
//     },
//     hint: "Có dấu phẩy → which/ who (không dùng 'that').",
//   },
//   {
//     id: "q35",
//     question:
//       "Having ------ the site survey, the contractor submitted a revised timeline.",
//     options: ["complete", "completed", "completing", "to complete"],
//     answer: "B",
//     explanation: {
//       vi: "Cấu trúc tuyệt đối/participle phrase nhấn mạnh hoàn thành: 'Having + V3'.",
//       en: "Perfect participle phrase: 'Having + past participle'.",
//     },
//     grammar_tags: ["participle_clause", "perfect_participle"],
//     vocab_tags: ["construction", "project_timeline"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Động từ nguyên thể.",
//       C: "Hiện tại phân từ không nhấn mạnh hoàn thành.",
//       D: "To-V không phù hợp cấu trúc.",
//     },
//     hint: "Hoàn tất trước hành động chính → Having + V3.",
//   },
//   {
//     id: "q36",
//     question:
//       "Not only did the campaign increase brand awareness, but it also ------ online sales by 18%.",
//     options: ["boost", "boosts", "boosted", "was boosting"],
//     answer: "C",
//     explanation: {
//       vi: "Vế sau quá khứ đơn phù hợp với bối cảnh; vế đầu dùng đảo ngữ 'did ...', nên vế sau đồng nhất thì: 'boosted'.",
//       en: "Match the past context; use past simple 'boosted'.",
//     },
//     grammar_tags: ["correlative_conjunction", "parallelism", "tense"],
//     vocab_tags: ["marketing", "ecommerce"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Nguyên thể.",
//       B: "Hiện tại đơn sai thì.",
//       D: "Quá khứ tiếp diễn không cần thiết.",
//     },
//     hint: "Not only... but also → song hành về thì/ cấu trúc.",
//   },
//   {
//     id: "q37",
//     question:
//       "All procedures written in this manual must be ------ implemented to avoid issues.",
//     options: ["faith", "faithful", "faithfully", "faithfulness"],
//     answer: "C",
//     explanation: {
//       vi: "Bổ nghĩa cho động từ 'implemented' → trạng từ 'faithfully'.",
//       en: "Modify the verb 'implemented' with the adverb 'faithfully'.",
//     },
//     grammar_tags: ["adverb", "modal_passive"],
//     vocab_tags: ["SOP", "quality"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Danh từ.",
//       B: "Tính từ.",
//       D: "Danh từ.",
//     },
//     hint: "Modal + be + V3; trạng từ bổ nghĩa cho toàn hành động.",
//   },
//   {
//     id: "q38",
//     question:
//       'Select the best word: "Golden Restaurant earned its ------ reputation for hygiene and fair pricing."',
//     options: ["super", "superior", "superiorly", "superiority"],
//     answer: "B",
//     explanation: {
//       vi: "'reputation' thường đi với tính từ 'strong/solid/superior'; ở đây 'superior' phù hợp.",
//       en: "Use an adjective before 'reputation'; 'superior' fits the collocation.",
//     },
//     grammar_tags: ["adjective", "collocation"],
//     vocab_tags: ["hospitality", "quality"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Tính từ nhưng quá khẩu ngữ, không tự nhiên.",
//       C: "Trạng từ.",
//       D: "Danh từ trừu tượng.",
//     },
//     hint: "Adj + reputation (excellent/superior).",
//   },
//   {
//     id: "q39",
//     question:
//       "The vendor agreed to replace any units found ------ within 30 days of purchase.",
//     options: ["defect", "defective", "defected", "defectively"],
//     answer: "B",
//     explanation: {
//       vi: "Sau 'found' + O + bổ ngữ tính chất → tính từ 'defective'.",
//       en: "Use an object complement adjective after 'found': 'defective'.",
//     },
//     grammar_tags: ["object_complement", "adjective"],
//     vocab_tags: ["warranty", "products"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "Danh từ.",
//       C: "Động từ quá khứ không phù hợp.",
//       D: "Trạng từ.",
//     },
//     hint: "found + O + adj (found the device faulty).",
//   },
//   {
//     id: "q40",
//     question:
//       'Choose the correct preposition: "The policy is effective ------ January 1 and applies to all staff."',
//     options: ["at", "from", "in", "on"],
//     answer: "B",
//     explanation: {
//       vi: "'effective from + mốc thời gian' là cụm cố định.",
//       en: "Fixed phrase: 'effective from + date'.",
//     },
//     grammar_tags: ["preposition", "fixed_collocation"],
//     vocab_tags: ["policy", "HR"],
//     difficulty: 4,
//     distractor_notes: {
//       A: "'at' dùng cho giờ/địa điểm cụ thể.",
//       C: "'in' dùng cho tháng/năm, không với 'effective'.",
//       D: "'on January 1' đúng trong câu khác, nhưng cụm cố định ở đây là 'effective from'.",
//     },
//     hint: "Ghi nhớ collocation: effective from + date.",
//   },

//   {
//     id: "q41",
//     question:
//       "The board requested that the CFO ------ a contingency budget for Q4.",
//     options: ["prepared", "prepare", "prepares", "has prepared"],
//     answer: "B",
//     explanation: {
//       vi: "Câu giả định (subjunctive) sau 'request/require/insist' dùng động từ nguyên mẫu không 's'.",
//       en: "In the mandative subjunctive, use base form after 'requested that'.",
//     },
//     grammar_tags: ["subjunctive", "clause"],
//     vocab_tags: ["finance", "budgeting"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "Quá khứ đơn sai cấu trúc giả định.",
//       C: "Thêm 's' sai với subjunctive.",
//       D: "Hiện tại hoàn thành sai cấu trúc.",
//     },
//     hint: "request/insist/suggest + that + S + V (nguyên mẫu).",
//   },
//   {
//     id: "q42",
//     question: "Had the team communicated earlier, the delay ------ avoidable.",
//     options: ["will be", "would be", "would have been", "was"],
//     answer: "C",
//     explanation: {
//       vi: "Câu điều kiện đảo loại 3: 'Had + S + V3' → 'would have been'.",
//       en: "Inverted third conditional: 'Had + past perfect' → 'would have been'.",
//     },
//     grammar_tags: ["conditional", "inversion"],
//     vocab_tags: ["communication", "scheduling"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "Tương lai không đúng.",
//       B: "Loại 2, không đúng ngữ cảnh quá khứ.",
//       D: "Quá khứ đơn không diễn tả giả định.",
//     },
//     hint: "Đảo 'Had' thay cho 'If' trong loại 3.",
//   },
//   {
//     id: "q43",
//     question:
//       "All data shared during the trial must remain ------, even after termination.",
//     options: ["confidentiality", "confidential", "confidently", "confidence"],
//     answer: "B",
//     explanation: {
//       vi: "Sau 'remain' + tính từ: 'confidential'.",
//       en: "After 'remain', use an adjective: 'confidential'.",
//     },
//     grammar_tags: ["linking_verb", "adjective"],
//     vocab_tags: ["NDA", "legal"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "Danh từ.",
//       C: "Trạng từ.",
//       D: "Danh từ.",
//     },
//     hint: "Linking verb (be/seem/remain) + adjective.",
//   },
//   {
//     id: "q44",
//     question:
//       "Từ nào phù hợp để diễn đạt 'phân bổ' ngân sách? Chọn động từ đúng.",
//     options: ["allocate", "allocation", "allocated", "allocator"],
//     answer: "A",
//     explanation: {
//       vi: "'allocate' là động từ 'phân bổ'.",
//       en: "'Allocate' is the verb meaning 'distribute for a purpose'.",
//     },
//     grammar_tags: ["vocabulary"],
//     vocab_tags: ["budgeting", "management"],
//     difficulty: 5,
//     distractor_notes: {
//       B: "Danh từ.",
//       C: "Quá khứ phân từ/tính từ.",
//       D: "Danh từ chỉ người (hiếm dùng).",
//     },
//     hint: "Bạn tìm 'động từ' → chọn dạng nguyên mẫu.",
//   },
//   {
//     id: "q45",
//     question:
//       "Only when the NDA is signed ------ access be granted to the repository.",
//     options: ["access will", "will access", "will", "will be"],
//     answer: "C",
//     explanation: {
//       vi: "Đảo ngữ với 'Only when' → 'will + S + V'; chủ ngữ 'access' → 'will access be granted' là sai vì 'access' không là chủ ngữ hành động. Ở đây chủ ngữ ngầm là 'it/permission'; tối ưu là 'will be granted' với chủ ngữ bị lược → dùng cấu trúc 'will be granted' sau đó: 'Only when... will access be granted...' → chọn 'will' để khớp cụm sẵn có.",
//       en: "Inversion after 'Only when': 'will + subject + verb'. The sentence frame expects '... will access be granted ...'; choose 'will' to complete the inverted structure.",
//     },
//     grammar_tags: ["inversion", "passive", "modal"],
//     vocab_tags: ["security", "access_control"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "Sai trật tự đảo ngữ.",
//       B: "Đảo sai vai trò chủ ngữ.",
//       D: "Thiếu chủ ngữ sau 'will be'.",
//     },
//     hint: "'Only when/if/after' + đảo trợ động từ lên trước chủ ngữ.",
//   },
//   {
//     id: "q46",
//     question:
//       "The CFO spoke ------, ensuring that even non-specialists understood the new policy.",
//     options: ["clarify", "clarity", "clarifying", "clearly"],
//     answer: "D",
//     explanation: {
//       vi: "Cần trạng từ bổ nghĩa cho 'spoke' → 'clearly'.",
//       en: "Modify the verb 'spoke' with the adverb 'clearly'.",
//     },
//     grammar_tags: ["adverb", "verb_adverb"],
//     vocab_tags: ["communication", "policy"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "Động từ.",
//       B: "Danh từ.",
//       C: "V-ing không làm trạng từ ở đây.",
//     },
//     hint: "speak + clearly/slowly/briefly.",
//   },
//   {
//     id: "q47",
//     question:
//       'Chọn từ đúng: "The redesign plan includes a detailed ------ for phased rollout."',
//     options: ["time", "timely", "timeline", "times"],
//     answer: "C",
//     explanation: {
//       vi: "'timeline' là danh từ: lộ trình/thời gian biểu.",
//       en: "'Timeline' is the noun meaning 'schedule/roadmap'.",
//     },
//     grammar_tags: ["vocabulary", "noun"],
//     vocab_tags: ["project_management", "planning"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "Danh từ chung không đủ nghĩa.",
//       B: "Tính từ 'đúng lúc'.",
//       D: "Số nhiều chung chung, không là thuật ngữ.",
//     },
//     hint: "Thuật ngữ quản trị dự án: 'project timeline'.",
//   },
//   {
//     id: "q48",
//     question:
//       'Having been ------ as "mission critical," the upgrade cannot be postponed.',
//     options: ["classify", "classifies", "classified", "classification"],
//     answer: "C",
//     explanation: {
//       vi: "'Having been + V3' → bị động hoàn thành rút gọn: 'classified'.",
//       en: "Perfect passive participle: 'having been + past participle' → 'classified'.",
//     },
//     grammar_tags: ["participle_clause", "passive"],
//     vocab_tags: ["IT", "priority"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "Nguyên mẫu.",
//       B: "Hiện tại đơn sai hình thái.",
//       D: "Danh từ.",
//     },
//     hint: "Having been + V3 (bị động).",
//   },
//   {
//     id: "q49",
//     question:
//       "Từ nào đồng nghĩa gần nhất với 'initiative' trong ngữ cảnh quản trị?",
//     options: ["project", "drive", "routine", "formula"],
//     answer: "B",
//     explanation: {
//       vi: "'initiative' ≈ 'drive' (sáng kiến/động lực chiến lược).",
//       en: "'Initiative' is close to 'drive' (strategic effort).",
//     },
//     grammar_tags: ["vocabulary", "synonym"],
//     vocab_tags: ["management", "strategy"],
//     difficulty: 5,
//     distractor_notes: {
//       A: "'project' hẹp nghĩa.",
//       C: "'routine' là công việc thường nhật.",
//       D: "'formula' là công thức.",
//     },
//     hint: "Nghĩ về 'nỗ lực thúc đẩy' cấp tổ chức.",
//   },
//   {
//     id: "q50",
//     question:
//       "By implementing the new guidelines, we aim to make our process far ------ and more transparent.",
//     options: ["efficient", "efficiency", "efficiently", "efficiencies"],
//     answer: "A",
//     explanation: {
//       vi: "Sau 'far' + tính từ so sánh hơn (ngầm) → 'efficient' (so với trước).",
//       en: "Use an adjective after 'far' to modify the noun phrase 'process' implied comparison.",
//     },
//     grammar_tags: ["adjective", "comparison"],
//     vocab_tags: ["process_improvement", "governance"],
//     difficulty: 5,
//     distractor_notes: {
//       B: "Danh từ.",
//       C: "Trạng từ bổ nghĩa động từ, không phù hợp.",
//       D: "Danh từ số nhiều.",
//     },
//     hint: "far + adj (better/faster/more efficient).",
//   },
// ];

const TOEIC_QUESTIONS = [
  {
    id: "q1",
    question:
      "The regional manager will arrive tomorrow, so please ensure that all ------ documents are ready.",
    options: ["she", "her", "hers", "herself"],
    answer: "B",
    explanation: {
      vi: "Trước danh từ 'documents' (tài liệu), chúng ta cần một tính từ sở hữu để chỉ sự sở hữu. 'Her' là tính từ sở hữu tương ứng với ngôi thứ ba số ít, chỉ phái nữ.",
      en: "Before the noun 'documents', we need a possessive adjective to indicate ownership. 'Her' is the correct possessive adjective for the third-person singular female.",
    },
    translation: {
      vi: "Quản lý khu vực sẽ đến vào ngày mai, vì vậy hãy đảm bảo rằng tất cả các tài liệu của cô ấy đã sẵn sàng.",
      en: "The regional manager will arrive tomorrow, so please ensure that all her documents are ready.",
    },
    grammar_tags: ["pronoun", "possessive_adjective"],
    vocab_tags: ["office", "management"],
    difficulty: 1,
    distractor_notes: {
      A: "'She' là một đại từ nhân xưng chủ ngữ, không thể đứng trước một danh từ để chỉ sự sở hữu.",
      C: "'Hers' là một đại từ sở hữu, nó thay thế cho 'her + danh từ' và thường đứng một mình.",
      D: "'Herself' là một đại từ phản thân, được sử dụng khi chủ ngữ và tân ngữ là cùng một người.",
    },
    hint: "Bạn cần một từ để chỉ 'của cô ấy' đứng trước một danh từ.",
  },
  {
    id: "q2",
    question:
      "Từ nào trong tiếng Anh đồng nghĩa với 'sự cho phép' hoặc 'sự chấp thuận'?",
    options: ["prohibition", "authorization", "permission", "regulation"],
    answer: "C",
    explanation: {
      vi: "'Permission' là một danh từ có nghĩa là sự cho phép hoặc sự chấp thuận để làm điều gì đó.",
      en: "'Permission' is a noun that means the act of allowing someone to do something.",
    },
    translation: {
      vi: "Từ nào trong tiếng Anh đồng nghĩa với 'sự cho phép' hoặc 'sự chấp thuận'?",
      en: "Which English word is a synonym for 'allowance' or 'approval'?",
    },
    grammar_tags: ["vocabulary"],
    vocab_tags: ["business", "authorization"],
    difficulty: 2,
    distractor_notes: {
      A: "'Prohibition' là danh từ có nghĩa là sự cấm đoán.",
      B: "'Authorization' là danh từ có nghĩa là sự cấp phép, sự ủy quyền.",
      D: "'Regulation' là danh từ có nghĩa là quy định, điều lệ.",
    },
    hint: "Từ này thường được dùng khi xin phép ai đó làm gì.",
  },
  {
    id: "q3",
    question:
      "Using proper techniques to ------ items drastically reduces the risk of back injury.",
    options: ["select", "lift", "damage", "attract"],
    answer: "B",
    explanation: {
      vi: "Trong ngữ cảnh này, 'lift' (nâng) là động từ hợp lý nhất. Sử dụng kỹ thuật đúng để nâng vật nặng giúp giảm nguy cơ chấn thương lưng.",
      en: "In this context, 'lift' is the most logical verb. Using proper techniques to lift items reduces the risk of back injury.",
    },
    translation: {
      vi: "Sử dụng các kỹ thuật phù hợp để nâng đồ vật làm giảm đáng kể nguy cơ chấn thương lưng.",
      en: "Using proper techniques to lift items drastically reduces the risk of back injury.",
    },
    grammar_tags: ["vocabulary", "verb_choice"],
    vocab_tags: ["safety", "health"],
    difficulty: 2,
    distractor_notes: {
      A: "'Select' (lựa chọn) không phù hợp với ngữ cảnh giảm nguy cơ chấn thương thể chất.",
      C: "'Damage' (làm hỏng) có nghĩa trái ngược với mục đích của câu.",
      D: "'Attract' (thu hút) không liên quan đến hành động thể chất gây ra chấn thương lưng.",
    },
    hint: "Hành động nào liên quan đến việc di chuyển vật nặng có thể gây chấn thương lưng?",
  },
  {
    id: "q4",
    question:
      "The new printer operates more ------ than the previous model did.",
    options: ["quickest", "quickness", "quick", "quickly"],
    answer: "D",
    explanation: {
      vi: "Động từ 'operates' (hoạt động) cần một trạng từ để bổ nghĩa cho nó. 'Quickly' là trạng từ. Cấu trúc so sánh hơn với trạng từ là 'more + adverb'.",
      en: "The verb 'operates' needs an adverb to modify it. 'Quickly' is the adverb. The comparative structure for adverbs is 'more + adverb'.",
    },
    translation: {
      vi: "Máy in mới hoạt động nhanh hơn so với mẫu trước đó.",
      en: "The new printer operates more quickly than the previous model did.",
    },
    grammar_tags: ["adverb", "comparative"],
    vocab_tags: ["office_equipment", "technology"],
    difficulty: 3,
    distractor_notes: {
      A: "'Quickest' là dạng so sánh nhất của tính từ, không phù hợp.",
      B: "'Quickness' là một danh từ.",
      C: "'Quick' là một tính từ, không thể bổ nghĩa cho động từ 'operates'.",
    },
    hint: "Cần một từ để mô tả cách thức mà máy in hoạt động.",
  },
  {
    id: "q5",
    question:
      "Một cách ------ để hỗ trợ tăng trưởng kinh tế là mua sắm tại các doanh nghiệp địa phương.",
    options: ["practice", "practicing", "practical", "practically"],
    answer: "C",
    explanation: {
      vi: "Trong câu này, chúng ta cần một tính từ để bổ nghĩa cho danh từ 'cách'. 'Practical' là tính từ có nghĩa là 'thực tế, thiết thực'.",
      en: "In this sentence, we need an adjective to modify the noun 'way'. 'Practical' is an adjective meaning 'relating to real situations'.",
    },
    translation: {
      vi: "Một cách thiết thực để hỗ trợ tăng trưởng kinh tế là mua sắm tại các doanh nghiệp địa phương.",
      en: "A practical way to support economic growth is to shop at local businesses.",
    },
    grammar_tags: ["word_form", "adjective"],
    vocab_tags: ["economics", "community"],
    difficulty: 3,
    distractor_notes: {
      A: "'Practice' là một danh từ (sự thực hành) hoặc động từ (thực hành).",
      B: "'Practicing' là một động từ dạng V-ing hoặc danh động từ.",
      D: "'Practically' là một trạng từ.",
    },
    hint: "Bạn đang tìm một từ có nghĩa là 'thiết thực' hoặc 'hữu ích trong thực tế'.",
  },
  {
    id: "q6",
    question:
      "The conference fee ------ admittance to more than twenty workshops and seminars.",
    options: ["include", "includes", "is included", "including"],
    answer: "B",
    explanation: {
      vi: "Chủ ngữ 'The conference fee' là danh từ số ít, vì vậy động từ phải được chia ở ngôi thứ ba số ít trong thì hiện tại đơn, đó là 'includes'.",
      en: "The subject 'The conference fee' is singular, so the verb must be in the third-person singular present tense, which is 'includes'.",
    },
    translation: {
      vi: "Phí hội nghị bao gồm quyền tham dự hơn hai mươi hội thảo và chuyên đề.",
      en: "The conference fee includes admittance to more than twenty workshops and seminars.",
    },
    grammar_tags: ["subject_verb_agreement", "present_simple"],
    vocab_tags: ["conference", "finance"],
    difficulty: 2,
    distractor_notes: {
      A: "'Include' là dạng nguyên thể, dùng cho chủ ngữ số nhiều.",
      C: "'Is included' là dạng bị động, không phù hợp vì phí hội nghị là chủ thể thực hiện hành động 'bao gồm'.",
      D: "'Including' là một giới từ hoặc phân từ, không thể làm động từ chính của câu.",
    },
    hint: "Chủ ngữ của câu là 'The conference fee' (số ít).",
  },
  {
    id: "q7",
    question:
      "Từ nào mô tả một người hoặc một vật 'có uy tín' và 'được kính trọng'?",
    options: ["overwhelmed", "intentional", "prestigious", "deserving"],
    answer: "C",
    explanation: {
      vi: "'Prestigious' là một tính từ có nghĩa là có uy tín, danh giá, được nhiều người ngưỡng mộ.",
      en: "'Prestigious' is an adjective that means inspiring respect and admiration; having high status.",
    },
    translation: {
      vi: "Từ nào mô tả một người hoặc một vật 'có uy tín' và 'được kính trọng'?",
      en: "Which word describes a person or thing that is 'respected' and 'admired'?",
    },
    grammar_tags: ["vocabulary", "adjective"],
    vocab_tags: ["awards", "reputation"],
    difficulty: 4,
    distractor_notes: {
      A: "'Overwhelmed' có nghĩa là bị choáng ngợp.",
      B: "'Intentional' có nghĩa là cố ý, có chủ đích.",
      D: "'Deserving' có nghĩa là xứng đáng.",
    },
    hint: "Từ này thường đi kèm với các giải thưởng, trường đại học hoặc chức danh công việc quan trọng.",
  },
  {
    id: "q8",
    question:
      "------ the new acai juice blend has proved so popular, we should move quickly to increase our production volume.",
    options: ["If", "Whether", "Since", "Unless"],
    answer: "C",
    explanation: {
      vi: "'Since' được sử dụng như một liên từ để chỉ nguyên nhân, tương tự như 'because'. Mệnh đề đầu tiên giải thích lý do tại sao họ nên tăng sản lượng.",
      en: "'Since' is used as a conjunction to indicate a reason, similar to 'because'. The first clause explains why they should increase production.",
    },
    translation: {
      vi: "Vì hỗn hợp nước ép acai mới đã được chứng minh là rất phổ biến, chúng ta nên nhanh chóng tăng khối lượng sản xuất.",
      en: "Since the new acai juice blend has proved so popular, we should move quickly to increase our production volume.",
    },
    grammar_tags: ["conjunctions", "cause_effect"],
    vocab_tags: ["business", "production"],
    difficulty: 3,
    distractor_notes: {
      A: "'If' giới thiệu một điều kiện, không phải là một lý do đã được xác nhận.",
      B: "'Whether' giới thiệu các khả năng hoặc sự không chắc chắn.",
      D: "'Unless' có nghĩa là 'if not' (nếu không), giới thiệu một điều kiện phủ định.",
    },
    hint: "Mệnh đề đầu tiên đưa ra lý do cho hành động trong mệnh đề thứ hai.",
  },
  {
    id: "q9",
    question:
      "The staff must ------ as much market-research data as possible before planning the advertising campaign.",
    options: ["equip", "compile", "endorse", "compose"],
    answer: "B",
    explanation: {
      vi: "'Compile' có nghĩa là thu thập và tập hợp thông tin từ nhiều nguồn khác nhau. Đây là hành động hợp lý nhất cần làm với dữ liệu nghiên cứu thị trường.",
      en: "'Compile' means to collect and put together information from various sources. This is the most logical action to take with market-research data.",
    },
    translation: {
      vi: "Nhân viên phải tổng hợp càng nhiều dữ liệu nghiên cứu thị trường càng tốt trước khi lên kế hoạch cho chiến dịch quảng cáo.",
      en: "The staff must compile as much market-research data as possible before planning the advertising campaign.",
    },
    grammar_tags: ["vocabulary", "verb_choice"],
    vocab_tags: ["marketing", "research"],
    difficulty: 4,
    distractor_notes: {
      A: "'Equip' có nghĩa là trang bị (cho ai đó/cái gì đó với một thứ gì đó).",
      C: "'Endorse' có nghĩa là tán thành hoặc quảng cáo cho một sản phẩm.",
      D: "'Compose' có nghĩa là sáng tác hoặc tạo ra (nhạc, thư).",
    },
    hint: "Bạn cần một động từ có nghĩa là 'thu thập và sắp xếp thông tin'.",
  },
  {
    id: "q10",
    question:
      "The building inspector declared the new facility ------ sound and ready to open.",
    options: ["structured", "structuring", "structural", "structurally"],
    answer: "D",
    explanation: {
      vi: "Trong câu này, 'sound' là một tính từ. Chúng ta cần một trạng từ ('structurally') để bổ nghĩa cho tính từ đó, có nghĩa là 'vững chắc về mặt kết cấu'.",
      en: "In this sentence, 'sound' is an adjective. We need an adverb ('structurally') to modify that adjective, meaning 'sound in terms of structure'.",
    },
    translation: {
      vi: "Thanh tra xây dựng đã tuyên bố cơ sở mới vững chắc về mặt kết cấu và sẵn sàng mở cửa.",
      en: "The building inspector declared the new facility structurally sound and ready to open.",
    },
    grammar_tags: ["word_form", "adverb"],
    vocab_tags: ["construction", "safety"],
    difficulty: 5,
    distractor_notes: {
      A: "'Structured' là một động từ ở dạng quá khứ phân từ hoặc một tính từ.",
      B: "'Structuring' là một động từ dạng V-ing.",
      C: "'Structural' là một tính từ, không thể bổ nghĩa cho một tính từ khác ('sound').",
    },
    hint: "Cần một từ để mô tả 'về mặt kết cấu' cho tính từ 'vững chắc'.",
  },
  {
    id: "q11",
    question: "Một từ có nghĩa là 'sự thiếu hụt' hoặc 'không đủ'?",
    options: ["frequency", "length", "shortage", "series"],
    answer: "C",
    explanation: {
      vi: "'Shortage' là một danh từ có nghĩa là tình trạng không có đủ thứ gì đó cần thiết.",
      en: "'Shortage' is a noun that means a state or situation in which something needed cannot be obtained in sufficient amounts.",
    },
    translation: {
      vi: "Một từ có nghĩa là 'sự thiếu hụt' hoặc 'không đủ'?",
      en: "A word that means 'a lack of something' or 'not enough'?",
    },
    grammar_tags: ["vocabulary"],
    vocab_tags: ["supply", "economics"],
    difficulty: 3,
    distractor_notes: {
      A: "'Frequency' có nghĩa là tần suất.",
      B: "'Length' có nghĩa là độ dài.",
      D: "'Series' có nghĩa là một chuỗi, một loạt.",
    },
    hint: "Khi nhu cầu vượt quá nguồn cung, bạn sẽ gặp phải điều này.",
  },
  {
    id: "q12",
    question:
      "The new software is designed to make the entire accounting process more ------.",
    options: ["efficiency", "efficiently", "efficient", "efficacious"],
    answer: "C",
    explanation: {
      vi: "Sau cấu trúc 'make something + ...', chúng ta cần một tính từ để mô tả đối tượng đó. 'Efficient' là tính từ có nghĩa là 'hiệu quả'.",
      en: "After the structure 'make something + ...', we need an adjective to describe the object. 'Efficient' is the adjective meaning 'working effectively'.",
    },
    translation: {
      vi: "Phần mềm mới được thiết kế để làm cho toàn bộ quy trình kế toán trở nên hiệu quả hơn.",
      en: "The new software is designed to make the entire accounting process more efficient.",
    },
    grammar_tags: ["word_form", "adjective"],
    vocab_tags: ["software", "accounting"],
    difficulty: 2,
    distractor_notes: {
      A: "'Efficiency' là một danh từ.",
      B: "'Efficiently' là một trạng từ.",
      D: "'Efficacious' cũng là một tính từ nhưng thường dùng cho thuốc men hoặc phương pháp điều trị, có nghĩa là 'có hiệu nghiệm'.",
    },
    hint: "Bạn cần một từ để mô tả 'quy trình kế toán'.",
  },
  {
    id: "q13",
    question:
      "The board of directors will vote on the proposal ------ the financial committee has reviewed it.",
    options: ["once", "while", "yet", "still"],
    answer: "A",
    explanation: {
      vi: "'Once' được sử dụng như một liên từ có nghĩa là 'ngay sau khi'. Nó chỉ ra rằng hành động thứ hai (bỏ phiếu) sẽ xảy ra sau khi hành động đầu tiên (xem xét) hoàn tất.",
      en: "'Once' is used as a conjunction meaning 'as soon as'. It indicates that the second action (voting) will happen after the first action (reviewing) is complete.",
    },
    translation: {
      vi: "Hội đồng quản trị sẽ bỏ phiếu về đề xuất ngay sau khi ủy ban tài chính đã xem xét nó.",
      en: "The board of directors will vote on the proposal once the financial committee has reviewed it.",
    },
    grammar_tags: ["conjunctions", "time_clauses"],
    vocab_tags: ["corporate", "finance"],
    difficulty: 3,
    distractor_notes: {
      B: "'While' (trong khi) chỉ ra hai hành động xảy ra đồng thời.",
      C: "'Yet' (nhưng/tuy nhiên) được sử dụng để chỉ sự tương phản, thường ở cuối câu trong câu phủ định.",
      D: "'Still' (vẫn) là một trạng từ chỉ sự tiếp diễn, không phải là liên từ.",
    },
    hint: "Hành động bỏ phiếu sẽ diễn ra sau khi việc xem xét hoàn tất.",
  },
  {
    id: "q14",
    question:
      "Từ nào có nghĩa là 'thực hiện' hoặc 'thi hành' một nhiệm vụ hoặc kế hoạch?",
    options: ["executing", "equipping", "returning", "involving"],
    answer: "A",
    explanation: {
      vi: "'Executing' có nghĩa là thực hiện một mệnh lệnh, kế hoạch hoặc quá trình hành động.",
      en: "'Executing' means carrying out an order, a plan, or a course of action.",
    },
    translation: {
      vi: "Từ nào có nghĩa là 'thực hiện' hoặc 'thi hành' một nhiệm vụ hoặc kế hoạch?",
      en: "Which word means to 'carry out' or 'perform' a task or plan?",
    },
    grammar_tags: ["vocabulary"],
    vocab_tags: ["management", "tasks"],
    difficulty: 4,
    distractor_notes: {
      B: "'Equipping' có nghĩa là trang bị.",
      C: "'Returning' có nghĩa là quay trở lại.",
      D: "'Involving' có nghĩa là bao gồm, liên quan đến.",
    },
    hint: "Từ này có cùng gốc với từ 'executive' (giám đốc điều hành).",
  },
  {
    id: "q15",
    question:
      "All employees are required to attend the mandatory safety training session ------ Friday afternoon.",
    options: ["on", "at", "in", "by"],
    answer: "A",
    explanation: {
      vi: "Giới từ 'on' được sử dụng với các ngày cụ thể trong tuần hoặc các ngày trong tháng.",
      en: "The preposition 'on' is used with specific days of the week or dates.",
    },
    translation: {
      vi: "Tất cả nhân viên được yêu cầu tham dự buổi đào tạo an toàn bắt buộc vào chiều thứ Sáu.",
      en: "All employees are required to attend the mandatory safety training session on Friday afternoon.",
    },
    grammar_tags: ["prepositions", "time"],
    vocab_tags: ["training", "safety"],
    difficulty: 1,
    distractor_notes: {
      B: "'At' được sử dụng với thời gian cụ thể (ví dụ: at 3 PM).",
      C: "'In' được sử dụng với các khoảng thời gian dài hơn như tháng, năm, mùa (ví dụ: in July).",
      D: "'By' có nghĩa là trước hoặc không muộn hơn một thời điểm nhất định.",
    },
    hint: "Giới từ nào được dùng cho các ngày trong tuần?",
  },
  {
    id: "q16",
    question:
      "The marketing team has created a ------ new logo for the company's rebranding campaign.",
    options: ["boldly", "bolder", "bold", "boldness"],
    answer: "C",
    explanation: {
      vi: "Chúng ta cần một tính từ ('bold') để bổ nghĩa cho danh từ 'logo'. Cụm từ 'a bold new logo' có nghĩa là một logo mới táo bạo.",
      en: "We need an adjective ('bold') to modify the noun 'logo'. The phrase 'a bold new logo' means a new logo that is striking.",
    },
    translation: {
      vi: "Đội ngũ tiếp thị đã tạo ra một logo mới táo bạo cho chiến dịch tái định vị thương hiệu của công ty.",
      en: "The marketing team has created a bold new logo for the company's rebranding campaign.",
    },
    grammar_tags: ["word_form", "adjective"],
    vocab_tags: ["marketing", "design"],
    difficulty: 2,
    distractor_notes: {
      A: "'Boldly' là một trạng từ.",
      B: "'Bolder' là dạng so sánh hơn của tính từ.",
      D: "'Boldness' là một danh từ.",
    },
    hint: "Cần một từ để mô tả cho danh từ 'logo'.",
  },
  {
    id: "q17",
    question:
      "Một từ mô tả hành động 'từ chối' một lời đề nghị hoặc lời mời một cách lịch sự?",
    options: ["decline", "decrease", "prevent", "convert"],
    answer: "A",
    explanation: {
      vi: "'Decline' là một động từ có nghĩa là từ chối một cách lịch sự một lời đề nghị hoặc lời mời.",
      en: "'Decline' is a verb that means to politely refuse an offer or invitation.",
    },
    translation: {
      vi: "Một từ mô tả hành động 'từ chối' một lời đề nghị hoặc lời mời một cách lịch sự?",
      en: "A word that describes the act of politely 'refusing' an offer or invitation?",
    },
    grammar_tags: ["vocabulary"],
    vocab_tags: ["communication", "business_etiquette"],
    difficulty: 3,
    distractor_notes: {
      B: "'Decrease' có nghĩa là giảm sút.",
      C: "'Prevent' có nghĩa là ngăn chặn.",
      D: "'Convert' có nghĩa là chuyển đổi.",
    },
    hint: "Khi bạn không muốn chấp nhận một lời mời làm việc, bạn sẽ làm gì?",
  },
  {
    id: "q18",
    question:
      "The factory will be situated away ------ the city's residential area to reduce complaints.",
    options: ["from", "about", "with", "out"],
    answer: "A",
    explanation: {
      vi: "Cụm từ 'away from' có nghĩa là 'cách xa khỏi' một nơi nào đó. Đây là giới từ chính xác để sử dụng trong ngữ cảnh này.",
      en: "The phrase 'away from' means 'at a distance from' a place. It is the correct preposition to use in this context.",
    },
    translation: {
      vi: "Nhà máy sẽ được đặt cách xa khu dân cư của thành phố để giảm thiểu những lời phàn nàn.",
      en: "The factory will be situated away from the city's residential area to reduce complaints.",
    },
    grammar_tags: ["prepositions", "phrasal_prepositions"],
    vocab_tags: ["location", "construction"],
    difficulty: 2,
    distractor_notes: {
      B: "'About' (về) không chỉ ra khoảng cách.",
      C: "'With' (với) không phù hợp về mặt ngữ nghĩa.",
      D: "'Out' (ra ngoài) thường đi với 'of' trong ngữ cảnh này (out of the area).",
    },
    hint: "Bạn cần một giới từ để chỉ khoảng cách so với một địa điểm.",
  },
  {
    id: "q19",
    question:
      "The quality assurance department needs to hire additional staff ------ production has increased by 50 percent.",
    options: ["even though", "since", "because of", "therefore"],
    answer: "B",
    explanation: {
      vi: "'Since' (vì) là một liên từ chỉ nguyên nhân, nối hai mệnh đề độc lập. Mệnh đề thứ hai giải thích lý do tại sao cần thuê thêm nhân viên.",
      en: "'Since' is a conjunction of reason, connecting two independent clauses. The second clause explains the reason for needing to hire additional staff.",
    },
    translation: {
      vi: "Bộ phận đảm bảo chất lượng cần thuê thêm nhân viên vì sản lượng đã tăng 50%.",
      en: "The quality assurance department needs to hire additional staff since production has increased by 50 percent.",
    },
    grammar_tags: ["conjunctions", "cause_effect"],
    vocab_tags: ["human_resources", "production"],
    difficulty: 3,
    distractor_notes: {
      A: "'Even though' (mặc dù) chỉ sự tương phản, không phù hợp ở đây.",
      C: "'Because of' là một cụm giới từ và phải đi với một danh từ hoặc cụm danh từ, không phải một mệnh đề.",
      D: "'Therefore' (do đó) là một trạng từ liên kết và thường bắt đầu một câu mới hoặc đứng sau dấu chấm phẩy.",
    },
    hint: "Tìm một từ nối chỉ lý do, tương tự như 'because'.",
  },
  {
    id: "q20",
    question: "Một tính từ mô tả thứ gì đó 'cần thiết' hoặc 'rất quan trọng'?",
    options: ["slight", "equal", "obliged", "essential"],
    answer: "D",
    explanation: {
      vi: "'Essential' là một tính từ có nghĩa là hoàn toàn cần thiết hoặc cực kỳ quan trọng.",
      en: "'Essential' is an adjective that means absolutely necessary or extremely important.",
    },
    translation: {
      vi: "Một tính từ mô tả thứ gì đó 'cần thiết' hoặc 'rất quan trọng'?",
      en: "An adjective that describes something as 'necessary' or 'very important'?",
    },
    grammar_tags: ["vocabulary", "adjective"],
    vocab_tags: ["importance", "requirements"],
    difficulty: 3,
    distractor_notes: {
      A: "'Slight' có nghĩa là nhỏ, không đáng kể.",
      B: "'Equal' có nghĩa là ngang bằng.",
      C: "'Obliged' có nghĩa là bị bắt buộc hoặc có nghĩa vụ.",
    },
    hint: "Từ này đồng nghĩa với 'vital' hoặc 'crucial'.",
  },
  {
    id: "q21",
    question:
      "The new manager is ------ to improving the workflow and communication between departments.",
    options: ["committed", "committing", "commitment", "commits"],
    answer: "A",
    explanation: {
      vi: "Cấu trúc 'to be committed to something/doing something' có nghĩa là 'cam kết với việc gì đó'. 'Committed' là một tính từ (dạng quá khứ phân từ).",
      en: "The structure 'to be committed to something/doing something' means 'to be dedicated to something'. 'Committed' is an adjective (past participle form).",
    },
    translation: {
      vi: "Người quản lý mới cam kết cải thiện quy trình làm việc và giao tiếp giữa các phòng ban.",
      en: "The new manager is committed to improving the workflow and communication between departments.",
    },
    grammar_tags: ["adjective", "prepositional_phrase"],
    vocab_tags: ["management", "commitment"],
    difficulty: 4,
    distractor_notes: {
      B: "'Committing' là dạng V-ing, không phù hợp sau động từ 'to be' trong cấu trúc này.",
      C: "'Commitment' là một danh từ.",
      D: "'Commits' là một động từ ở ngôi thứ ba số ít.",
    },
    hint: "Sau động từ 'to be' (is), bạn cần một tính từ. Cụm từ này có nghĩa là 'tận tâm với'.",
  },
  {
    id: "q22",
    question:
      "------ the high cost of fuel, many airlines have been forced to increase their ticket prices.",
    options: ["Together with", "Instead of", "As well as", "Because of"],
    answer: "D",
    explanation: {
      vi: "'Because of' là một cụm giới từ chỉ nguyên nhân và theo sau là một danh từ hoặc cụm danh từ ('the high cost of fuel').",
      en: "'Because of' is a prepositional phrase indicating a reason and is followed by a noun or noun phrase ('the high cost of fuel').",
    },
    translation: {
      vi: "Do chi phí nhiên liệu cao, nhiều hãng hàng không đã buộc phải tăng giá vé.",
      en: "Because of the high cost of fuel, many airlines have been forced to increase their ticket prices.",
    },
    grammar_tags: ["prepositions", "cause_effect"],
    vocab_tags: ["travel", "finance"],
    difficulty: 2,
    distractor_notes: {
      A: "'Together with' (cùng với) không chỉ nguyên nhân.",
      B: "'Instead of' (thay vì) chỉ sự thay thế.",
      C: "'As well as' (cũng như) dùng để thêm thông tin.",
    },
    hint: "Cụm từ này giải thích lý do tại sao giá vé tăng.",
  },
  {
    id: "q23",
    question:
      "Một từ có nghĩa là 'dễ bị tổn thương' hoặc 'dễ bị ảnh hưởng bởi điều gì đó tiêu cực'?",
    options: ["exposed", "automatic", "limited", "vulnerable"],
    answer: "D",
    explanation: {
      vi: "'Vulnerable' là một tính từ có nghĩa là dễ bị tấn công hoặc làm hại về thể chất hoặc tình cảm. Thường đi với giới từ 'to'.",
      en: "'Vulnerable' is an adjective that means susceptible to physical or emotional attack or harm. It is often followed by the preposition 'to'.",
    },
    translation: {
      vi: "Một từ có nghĩa là 'dễ bị tổn thương' hoặc 'dễ bị ảnh hưởng bởi điều gì đó tiêu cực'?",
      en: "A word that means 'susceptible to' or 'easily affected by something negative'?",
    },
    grammar_tags: ["vocabulary", "adjective"],
    vocab_tags: ["risk", "safety"],
    difficulty: 5,
    distractor_notes: {
      A: "'Exposed' có nghĩa là bị phơi bày, không được che chắn.",
      B: "'Automatic' có nghĩa là tự động.",
      C: "'Limited' có nghĩa là bị giới hạn.",
    },
    hint: "Hệ thống máy tính không có phần mềm chống vi-rút sẽ ở trong tình trạng này.",
  },
  {
    id: "q24",
    question:
      "The company ------ a new policy last month regarding employee work hours.",
    options: [
      "is implementing",
      "has been implementing",
      "implemented",
      "implements",
    ],
    answer: "C",
    explanation: {
      vi: "Cụm từ chỉ thời gian 'last month' (tháng trước) là một dấu hiệu rõ ràng cho thấy hành động đã xảy ra và kết thúc trong quá khứ, vì vậy chúng ta sử dụng thì quá khứ đơn 'implemented'.",
      en: "The time phrase 'last month' is a clear indicator that the action happened and finished in the past, so we use the simple past tense 'implemented'.",
    },
    translation: {
      vi: "Công ty đã thực hiện một chính sách mới vào tháng trước liên quan đến giờ làm việc của nhân viên.",
      en: "The company implemented a new policy last month regarding employee work hours.",
    },
    grammar_tags: ["tenses", "past_simple"],
    vocab_tags: ["policy", "human_resources"],
    difficulty: 2,
    distractor_notes: {
      A: "'Is implementing' là thì hiện tại tiếp diễn, chỉ hành động đang diễn ra.",
      B: "'Has been implementing' là thì hiện tại hoàn thành tiếp diễn, chỉ hành động bắt đầu trong quá khứ và vẫn tiếp diễn.",
      D: "'Implements' là thì hiện tại đơn, chỉ thói quen hoặc sự thật chung.",
    },
    hint: "Hãy chú ý đến cụm từ chỉ thời gian 'last month'.",
  },
  {
    id: "q25",
    question:
      "The new software allows users to ------ customize their interface with a variety of themes.",
    options: ["full", "fully", "fullness", "fuller"],
    answer: "B",
    explanation: {
      vi: "Chúng ta cần một trạng từ ('fully') để bổ nghĩa cho động từ 'customize'. Nó mô tả mức độ mà người dùng có thể tùy chỉnh.",
      en: "We need an adverb ('fully') to modify the verb 'customize'. It describes the extent to which users can customize.",
    },
    translation: {
      vi: "Phần mềm mới cho phép người dùng tùy chỉnh hoàn toàn giao diện của họ với nhiều chủ đề khác nhau.",
      en: "The new software allows users to fully customize their interface with a variety of themes.",
    },
    grammar_tags: ["word_form", "adverb"],
    vocab_tags: ["software", "customization"],
    difficulty: 3,
    distractor_notes: {
      A: "'Full' là một tính từ.",
      C: "'Fullness' là một danh từ.",
      D: "'Fuller' là dạng so sánh hơn của tính từ.",
    },
    hint: "Cần một từ để bổ nghĩa cho động từ 'customize' (tùy chỉnh).",
  },
  {
    id: "q26",
    question: "Một từ có nghĩa là 'sự phối hợp' giữa nhiều người hoặc bộ phận?",
    options: ["coordination", "attention", "appreciation", "consideration"],
    answer: "A",
    explanation: {
      vi: "'Coordination' là danh từ chỉ hành động tổ chức, sắp xếp để mọi người hoặc các bộ phận làm việc cùng nhau một cách hiệu quả.",
      en: "'Coordination' is the noun for the action of organizing people or groups so that they work together effectively.",
    },
    translation: {
      vi: "Một từ có nghĩa là 'sự phối hợp' giữa nhiều người hoặc bộ phận?",
      en: "A word that means 'the act of organizing' between people or departments?",
    },
    grammar_tags: ["vocabulary"],
    vocab_tags: ["teamwork", "management"],
    difficulty: 4,
    distractor_notes: {
      B: "'Attention' có nghĩa là sự chú ý.",
      C: "'Appreciation' có nghĩa là sự đánh giá cao, sự cảm kích.",
      D: "'Consideration' có nghĩa là sự cân nhắc.",
    },
    hint: "Khi một dự án lớn cần nhiều đội làm việc cùng nhau, điều này rất quan trọng.",
  },
  {
    id: "q27",
    question:
      "The ------ of the new marketing campaign will be discussed at the next weekly meeting.",
    options: ["effective", "effectiveness", "effect", "effectively"],
    answer: "B",
    explanation: {
      vi: "Sau mạo từ 'the', chúng ta cần một danh từ. 'Effectiveness' (sự hiệu quả) là danh từ phù hợp nhất trong ngữ cảnh này.",
      en: "After the article 'the', we need a noun. 'Effectiveness' is the most suitable noun in this context.",
    },
    translation: {
      vi: "Sự hiệu quả của chiến dịch tiếp thị mới sẽ được thảo luận tại cuộc họp hàng tuần tiếp theo.",
      en: "The effectiveness of the new marketing campaign will be discussed at the next weekly meeting.",
    },
    grammar_tags: ["word_form", "noun"],
    vocab_tags: ["marketing", "meetings"],
    difficulty: 3,
    distractor_notes: {
      A: "'Effective' là một tính từ.",
      C: "'Effect' là một danh từ có nghĩa là 'ảnh hưởng' hoặc 'kết quả', nhưng 'effectiveness' phù hợp hơn khi nói về mức độ thành công.",
      D: "'Effectively' là một trạng từ.",
    },
    hint: "Bạn cần một danh từ có nghĩa là 'mức độ thành công' hoặc 'tính hiệu quả'.",
  },
  {
    id: "q28",
    question:
      "The vice president ------ travels to international conferences to represent the company.",
    options: ["frequent", "frequency", "frequently", "frequented"],
    answer: "C",
    explanation: {
      vi: "Chúng ta cần một trạng từ ('frequently') để bổ nghĩa cho động từ 'travels', mô tả tần suất của hành động.",
      en: "We need an adverb ('frequently') to modify the verb 'travels', describing the frequency of the action.",
    },
    translation: {
      vi: "Phó chủ tịch thường xuyên đi đến các hội nghị quốc tế để đại diện cho công ty.",
      en: "The vice president frequently travels to international conferences to represent the company.",
    },
    grammar_tags: ["word_form", "adverb_of_frequency"],
    vocab_tags: ["travel", "business"],
    difficulty: 2,
    distractor_notes: {
      A: "'Frequent' là một tính từ.",
      B: "'Frequency' là một danh từ.",
      D: "'Frequented' là một động từ ở dạng quá khứ phân từ.",
    },
    hint: "Cần một từ để chỉ 'thường xuyên'.",
  },
  {
    id: "q29",
    question:
      "Một từ có nghĩa là 'sự tin cậy' hoặc 'khả năng hoạt động tốt một cách nhất quán'?",
    options: ["reliability", "allowance", "dependence", "estimation"],
    answer: "A",
    explanation: {
      vi: "'Reliability' là danh từ chỉ chất lượng của việc đáng tin cậy hoặc hoạt động tốt một cách nhất quán.",
      en: "'Reliability' is the noun for the quality of being trustworthy or of performing consistently well.",
    },
    translation: {
      vi: "Một từ có nghĩa là 'sự tin cậy' hoặc 'khả năng hoạt động tốt một cách nhất quán'?",
      en: "A word that means 'trustworthiness' or 'the ability to perform well consistently'?",
    },
    grammar_tags: ["vocabulary"],
    vocab_tags: ["quality", "products"],
    difficulty: 4,
    distractor_notes: {
      B: "'Allowance' có nghĩa là tiền trợ cấp hoặc sự cho phép.",
      C: "'Dependence' có nghĩa là sự phụ thuộc.",
      D: "'Estimation' có nghĩa là sự ước tính.",
    },
    hint: "Đây là một yếu tố quan trọng khi chọn mua xe hơi hoặc thiết bị.",
  },
  {
    id: "q30",
    question:
      "The final report must be submitted ------ the end of the business day.",
    options: ["by", "until", "since", "during"],
    answer: "A",
    explanation: {
      vi: "'By' được sử dụng để chỉ một hạn chót, có nghĩa là 'trước hoặc không muộn hơn' một thời điểm cụ thể. 'Until' chỉ sự kéo dài của một hành động cho đến một thời điểm.",
      en: "'By' is used to indicate a deadline, meaning 'on or before' a specific time. 'Until' indicates the duration of an action up to a point.",
    },
    translation: {
      vi: "Báo cáo cuối cùng phải được nộp trước cuối ngày làm việc.",
      en: "The final report must be submitted by the end of the business day.",
    },
    grammar_tags: ["prepositions", "time"],
    vocab_tags: ["deadlines", "office"],
    difficulty: 4,
    distractor_notes: {
      B: "'Until' (cho đến khi) không phù hợp với hành động nộp một lần.",
      C: "'Since' (kể từ khi) chỉ điểm bắt đầu của một khoảng thời gian.",
      D: "'During' (trong suốt) chỉ một khoảng thời gian mà hành động diễn ra.",
    },
    hint: "Giới từ này được dùng để chỉ hạn chót (deadline).",
  },
];

/* const TOEIC_QUESTIONS = [
  {
    "id": "q31",
    "question": "The marketing seminar will be held ------ the Rosedale Convention Center.",
    "options": ["on", "at", "in", "with"],
    "answer": "B",
    "explanation": {
      "vi": "Giới từ 'at' được sử dụng để chỉ một địa điểm hoặc địa chỉ cụ thể.",
      "en": "The preposition 'at' is used to indicate a specific location or address."
    },
    "translation": {
      "vi": "Hội thảo tiếp thị sẽ được tổ chức tại Trung tâm Hội nghị Rosedale.",
      "en": "The marketing seminar will be held at the Rosedale Convention Center."
    },
    "grammar_tags": ["prepositions", "place"],
    "vocab_tags": ["events", "location"],
    "difficulty": 1,
    "distractor_notes": {
      "A": "'On' được dùng cho các bề mặt hoặc tên đường.",
      "C": "'In' được dùng cho các không gian kín hoặc các thành phố, quốc gia.",
      "D": "'With' (với) không phù hợp về mặt ngữ nghĩa."
    },
    "hint": "Giới từ nào được dùng cho một địa điểm cụ thể như tòa nhà?"
  },
  {
    "id": "q32",
    "question": "Từ nào có nghĩa là 'sự bồi thường' cho thiệt hại hoặc mất mát?",
    "options": ["compensation", "promotion", "donation", "registration"],
    "answer": "A",
    "explanation": {
      "vi": "'Compensation' là danh từ chỉ khoản tiền được trả cho ai đó vì họ đã phải chịu thiệt hại, thương tích, hoặc mất mát.",
      "en": "'Compensation' is a noun referring to money that is paid to someone in exchange for something that has been lost or damaged."
    },
    "translation": {
      "vi": "Từ nào có nghĩa là 'sự bồi thường' cho thiệt hại hoặc mất mát?",
      "en": "Which word means 'reimbursement' for damage or loss?"
    },
    "grammar_tags": ["vocabulary"],
    "vocab_tags": ["finance", "legal"],
    "difficulty": 3,
    "distractor_notes": {
      "B": "'Promotion' là sự thăng chức hoặc quảng bá.",
      "C": "'Donation' là sự quyên góp.",
      "D": "'Registration' là sự đăng ký."
    },
    "hint": "Khi một công ty gây ra thiệt hại, họ phải trả khoản này."
  },
  {
    "id": "q33",
    "question": "The company's annual report was ------ detailed and well-organized.",
    "options": ["exception", "exceptional", "exceptionally", "except"],
    "answer": "C",
    "explanation": {
      "vi": "Chúng ta cần một trạng từ ('exceptionally') để bổ nghĩa cho tính từ 'detailed'. Nó có nghĩa là 'một cách đặc biệt' hoặc 'cực kỳ'.",
      "en": "We need an adverb ('exceptionally') to modify the adjective 'detailed'. It means 'to an unusually great degree'."
    },
    "translation": {
      "vi": "Báo cáo thường niên của công ty chi tiết và được tổ chức một cách đặc biệt tốt.",
      "en": "The company's annual report was exceptionally detailed and well-organized."
    },
    "grammar_tags": ["word_form", "adverb"],
    "vocab_tags": ["reporting", "business"],
    "difficulty": 3,
    "distractor_notes": {
      "A": "'Exception' là một danh từ.",
      "B": "'Exceptional' là một tính từ.",
      "D": "'Except' là một giới từ."
    },
    "hint": "Cần một từ để nhấn mạnh mức độ 'chi tiết'."
  },
  {
    "id": "q34",
    "question": "To ------ access to the online portal, employees must enter their unique password.",
    "options": ["gain", "spend", "lose", "change"],
    "answer": "A",
    "explanation": {
      "vi": "'Gain access' là một cụm từ phổ biến có nghĩa là 'có được quyền truy cập'.",
      "en": "'Gain access' is a common collocation meaning 'to get the right to use or enter something'."
    },
    "translation": {
      "vi": "Để có được quyền truy cập vào cổng trực tuyến, nhân viên phải nhập mật khẩu duy nhất của họ.",
      "en": "To gain access to the online portal, employees must enter their unique password."
    },
    "grammar_tags": ["vocabulary", "collocation"],
    "vocab_tags": ["technology", "security"],
    "difficulty": 2,
    "distractor_notes": {
      "B": "'Spend' (dành ra, tiêu xài) không phù hợp.",
      "C": "'Lose' (mất) có nghĩa trái ngược.",
      "D": "'Change' (thay đổi) không hợp lý trong ngữ cảnh này."
    },
    "hint": "Bạn cần một động từ có nghĩa là 'có được' hoặc 'đạt được'."
  },
  {
    "id": "q35",
    "question": "By the time the manager arrived, the team ------ the presentation.",
    "options": ["finishes", "has finished", "had finished", "will finish"],
    "answer": "C",
    "explanation": {
      "vi": "Cấu trúc 'By the time + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)' được sử dụng để diễn tả một hành động đã hoàn thành trước một hành động khác trong quá khứ.",
      "en": "The structure 'By the time + S + V(simple past), S + V(past perfect)' is used to describe an action that was completed before another action in the past."
    },
    "translation": {
      "vi": "Vào lúc người quản lý đến, đội đã hoàn thành bài thuyết trình.",
      "en": "By the time the manager arrived, the team had finished the presentation."
    },
    "grammar_tags": ["tenses", "past_perfect"],
    "vocab_tags": ["meetings", "office"],
    "difficulty": 4,
    "distractor_notes": {
      "A": "'Finishes' là thì hiện tại đơn.",
      "B": "'Has finished' là thì hiện tại hoàn thành.",
      "D": "'Will finish' là thì tương lai đơn."
    },
    "hint": "Hành động 'hoàn thành' xảy ra trước hành động 'đến' trong quá khứ."
  },
  {
    "id": "q36",
    "question": "Một từ mô tả một cuộc thảo luận chính thức để đạt được một thỏa thuận là gì?",
    "options": ["negotiation", "presentation", "celebration", "exhibition"],
    "answer": "A",
    "explanation": {
      "vi": "'Negotiation' là danh từ chỉ quá trình thảo luận giữa hai hay nhiều bên để đi đến một thỏa thuận chung.",
      "en": "'Negotiation' is the noun for the process of discussion between two or more parties aimed at reaching a mutual agreement."
    },
    "translation": {
      "vi": "Một từ mô tả một cuộc thảo luận chính thức để đạt được một thỏa thuận là gì?",
      "en": "What is a word that describes a formal discussion to reach an agreement?"
    },
    "grammar_tags": ["vocabulary"],
    "vocab_tags": ["business", "contracts"],
    "difficulty": 4,
    "distractor_notes": {
      "B": "'Presentation' là bài thuyết trình.",
      "C": "'Celebration' là lễ kỷ niệm.",
      "D": "'Exhibition' là cuộc triển lãm."
    },
    "hint": "Các nhà ngoại giao và doanh nhân thường làm điều này."
  },
  {
    "id": "q37",
    "question": "------ Mr. Chen has extensive experience, he was not hired for the senior position.",
    "options": ["However", "Therefore", "Although", "Because"],
    "answer": "C",
    "explanation": {
      "vi": "'Although' là một liên từ chỉ sự nhượng bộ, dùng để nối hai mệnh đề có ý nghĩa tương phản.",
      "en": "'Although' is a conjunction of concession, used to connect two contrasting ideas."
    },
    "translation": {
      "vi": "Mặc dù ông Chen có kinh nghiệm sâu rộng, ông đã không được tuyển dụng vào vị trí cấp cao.",
      "en": "Although Mr. Chen has extensive experience, he was not hired for the senior position."
    },
    "grammar_tags": ["conjunctions", "concession"],
    "vocab_tags": ["human_resources", "career"],
    "difficulty": 2,
    "distractor_notes": {
      "A": "'However' là một trạng từ liên kết và thường đứng sau dấu chấm hoặc dấu chấm phẩy.",
      "B": "'Therefore' (do đó) chỉ kết quả.",
      "D": "'Because' (bởi vì) chỉ nguyên nhân."
    },
    "hint": "Hai vế của câu có ý nghĩa trái ngược nhau."
  },
  {
    "id": "q38",
    "question": "The new safety regulations are ------ for all factory workers.",
    "options": ["mandatory", "optional", "partial", "temporary"],
    "answer": "A",
    "explanation": {
      "vi": "'Mandatory' có nghĩa là bắt buộc theo luật lệ hoặc quy định.",
      "en": "'Mandatory' means required by law or rule; compulsory."
    },
    "translation": {
      "vi": "Các quy định an toàn mới là bắt buộc đối với tất cả công nhân nhà máy.",
      "en": "The new safety regulations are mandatory for all factory workers."
    },
    "grammar_tags": ["vocabulary", "adjective"],
    "vocab_tags": ["safety", "regulations"],
    "difficulty": 3,
    "distractor_notes": {
      "B": "'Optional' có nghĩa là tùy chọn, không bắt buộc.",
      "C": "'Partial' có nghĩa là một phần, không hoàn chỉnh.",
      "D": "'Temporary' có nghĩa là tạm thời."
    },
    "hint": "Từ này đồng nghĩa với 'compulsory' hoặc 'required'."
  },
  {
    "id": "q39",
    "question": "The CEO, ------ is known for his innovative ideas, will be speaking at the event.",
    "options": ["who", "which", "whose", "whom"],
    "answer": "A",
    "explanation": {
      "vi": "Chúng ta cần một đại từ quan hệ để thay thế cho 'The CEO' (chỉ người) và làm chủ ngữ cho động từ 'is'. 'Who' là lựa chọn chính xác.",
      "en": "We need a relative pronoun to refer to 'The CEO' (a person) and act as the subject for the verb 'is'. 'Who' is the correct choice."
    },
    "translation": {
      "vi": "Giám đốc điều hành, người nổi tiếng với những ý tưởng sáng tạo của mình, sẽ phát biểu tại sự kiện.",
      "en": "The CEO, who is known for his innovative ideas, will be speaking at the event."
    },
    "grammar_tags": ["relative_clauses", "pronoun"],
    "vocab_tags": ["corporate", "leadership"],
    "difficulty": 2,
    "distractor_notes": {
      "B": "'Which' được dùng cho vật.",
      "C": "'Whose' chỉ sự sở hữu và phải đi kèm với một danh từ.",
      "D": "'Whom' được dùng làm tân ngữ."
    },
    "hint": "Đại từ quan hệ này chỉ người và làm chủ ngữ trong mệnh đề phụ."
  },
  {
    "id": "q40",
    "question": "The ------ of the new production line will increase output by 20%.",
    "options": ["install", "installed", "installation", "installing"],
    "answer": "C",
    "explanation": {
      "vi": "Sau mạo từ 'The', chúng ta cần một danh từ. 'Installation' (sự lắp đặt) là danh từ phù hợp.",
      "en": "After the article 'The', we need a noun. 'Installation' is the correct noun."
    },
    "translation": {
      "vi": "Việc lắp đặt dây chuyền sản xuất mới sẽ tăng sản lượng lên 20%.",
      "en": "The installation of the new production line will increase output by 20%."
    },
    "grammar_tags": ["word_form", "noun"],
    "vocab_tags": ["production", "manufacturing"],
    "difficulty": 2,
    "distractor_notes": {
      "A": "'Install' là một động từ.",
      "B": "'Installed' là một động từ ở dạng quá khứ/phân từ.",
      "D": "'Installing' là một danh động từ hoặc hiện tại phân từ."
    },
    "hint": "Bạn cần một danh từ có nghĩa là 'hành động lắp đặt'."
  },
  {
    "id": "q41",
    "question": "Từ nào có nghĩa là 'tuân thủ' các quy tắc hoặc luật lệ?",
    "options": ["violate", "ignore", "comply", "challenge"],
    "answer": "C",
    "explanation": {
      "vi": "'Comply' là một động từ có nghĩa là hành động theo một mệnh lệnh, quy tắc hoặc yêu cầu. Thường đi với giới từ 'with'.",
      "en": "'Comply' is a verb that means to act in accordance with a wish or command. It is often followed by 'with'."
    },
    "translation": {
      "vi": "Từ nào có nghĩa là 'tuân thủ' các quy tắc hoặc luật lệ?",
      "en": "Which word means to 'obey' rules or regulations?"
    },
    "grammar_tags": ["vocabulary"],
    "vocab_tags": ["rules", "legal"],
    "difficulty": 4,
    "distractor_notes": {
      "A": "'Violate' có nghĩa là vi phạm.",
      "B": "'Ignore' có nghĩa là phớt lờ.",
      "D": "'Challenge' có nghĩa là thách thức."
    },
    "hint": "Đây là hành động trái ngược với 'violate'."
  },
  {
    "id": "q42",
    "question": "This year's sales figures are significantly ------ than last year's.",
    "options": ["high", "higher", "highest", "highly"],
    "answer": "B",
    "explanation": {
      "vi": "Sự xuất hiện của 'than' cho thấy đây là một cấu trúc so sánh hơn. 'Higher' là dạng so sánh hơn của tính từ 'high'.",
      "en": "The presence of 'than' indicates a comparative structure. 'Higher' is the comparative form of the adjective 'high'."
    },
    "translation": {
      "vi": "Doanh số bán hàng năm nay cao hơn đáng kể so với năm ngoái.",
      "en": "This year's sales figures are significantly higher than last year's."
    },
    "grammar_tags": ["comparative", "adjective"],
    "vocab_tags": ["sales", "finance"],
    "difficulty": 1,
    "distractor_notes": {
      "A": "'High' là dạng nguyên thể.",
      "C": "'Highest' là dạng so sánh nhất.",
      "D": "'Highly' là một trạng từ."
    },
    "hint": "Từ 'than' là một dấu hiệu của so sánh hơn."
  },
  {
    "id": "q43",
    "question": "The company decided to ------ its old computer systems with new ones.",
    "options": ["replace", "repair", "repeat", "reduce"],
    "answer": "A",
    "explanation": {
      "vi": "'Replace' có nghĩa là thay thế một thứ gì đó bằng một thứ khác. Cấu trúc 'replace something with something' là phổ biến.",
      "en": "'Replace' means to take the place of something with something else. The structure 'replace something with something' is common."
    },
    "translation": {
      "vi": "Công ty đã quyết định thay thế hệ thống máy tính cũ của mình bằng những hệ thống mới.",
      "en": "The company decided to replace its old computer systems with new ones."
    },
    "grammar_tags": ["vocabulary", "verb_choice"],
    "vocab_tags": ["technology", "upgrade"],
    "difficulty": 2,
    "distractor_notes": {
      "B": "'Repair' có nghĩa là sửa chữa.",
      "C": "'Repeat' có nghĩa là lặp lại.",
      "D": "'Reduce' có nghĩa là giảm bớt."
    },
    "hint": "Hành động này liên quan đến việc loại bỏ cái cũ và đưa vào cái mới."
  },
  {
    "id": "q44",
    "question": "A new security system ------ in the main office last week.",
    "options": ["installs", "is installed", "was installed", "has installed"],
    "answer": "C",
    "explanation": {
      "vi": "Chủ ngữ 'A new security system' là vật, vì vậy câu nên ở dạng bị động. 'Last week' chỉ thời gian trong quá khứ, vì vậy chúng ta dùng thì quá khứ đơn bị động 'was installed'.",
      "en": "The subject 'A new security system' is a thing, so the sentence should be in the passive voice. 'Last week' indicates past time, so we use the passive simple past 'was installed'."
    },
    "translation": {
      "vi": "Một hệ thống an ninh mới đã được lắp đặt tại văn phòng chính vào tuần trước.",
      "en": "A new security system was installed in the main office last week."
    },
    "grammar_tags": ["passive_voice", "past_simple"],
    "vocab_tags": ["security", "office"],
    "difficulty": 2,
    "distractor_notes": {
      "A": "'Installs' là dạng chủ động, thì hiện tại đơn.",
      "B": "'Is installed' là dạng bị động, thì hiện tại đơn.",
      "D": "'Has installed' là dạng chủ động, thì hiện tại hoàn thành."
    },
    "hint": "Hệ thống không thể tự lắp đặt nó, và sự việc đã xảy ra 'tuần trước'."
  },
  {
    "id": "q45",
    "question": "The report provided a ------ analysis of the market trends.",
    "options": ["comprehend", "comprehensive", "comprehension", "comprehensively"],
    "answer": "B",
    "explanation": {
      "vi": "Chúng ta cần một tính từ ('comprehensive') để bổ nghĩa cho danh từ 'analysis'. Nó có nghĩa là 'toàn diện, bao quát'.",
      "en": "We need an adjective ('comprehensive') to modify the noun 'analysis'. It means 'complete; including all or nearly all elements or aspects of something'."
    },
    "translation": {
      "vi": "Báo cáo đã cung cấp một phân tích toàn diện về các xu hướng thị trường.",
      "en": "The report provided a comprehensive analysis of the market trends."
    },
    "grammar_tags": ["word_form", "adjective"],
    "vocab_tags": ["research", "analysis"],
    "difficulty": 4,
    "distractor_notes": {
      "A": "'Comprehend' là một động từ.",
      "C": "'Comprehension' là một danh từ.",
      "D": "'Comprehensively' là một trạng từ."
    },
    "hint": "Bạn cần một từ để mô tả 'phân tích' là 'đầy đủ và chi tiết'."
  },
  {
    "id": "q46",
    "question": "Please submit your expense reports ------ the end of the month.",
    "options": ["by", "on", "at", "in"],
    "answer": "A",
    "explanation": {
      "vi": "'By' được sử dụng để chỉ một hạn chót, có nghĩa là 'trước hoặc không muộn hơn' một thời điểm.",
      "en": "'By' is used to indicate a deadline, meaning 'not later than'."
    },
    "translation": {
      "vi": "Vui lòng nộp báo cáo chi phí của bạn trước cuối tháng.",
      "en": "Please submit your expense reports by the end of the month."
    },
    "grammar_tags": ["prepositions", "time"],
    "vocab_tags": ["deadlines", "finance"],
    "difficulty": 3,
    "distractor_notes": {
      "B": "'On' được dùng cho ngày cụ thể.",
      "C": "'At' được dùng cho giờ cụ thể.",
      "D": "'In' được dùng cho tháng hoặc năm."
    },
    "hint": "Giới từ này được dùng để chỉ hạn chót (deadline)."
  },
  {
    "id": "q47",
    "question": "Từ nào mô tả một người 'tỉ mỉ' và 'chú ý đến chi tiết'?",
    "options": ["careless", "meticulous", "general", "spontaneous"],
    "answer": "B",
    "explanation": {
      "vi": "'Meticulous' là một tính từ mô tả một người rất cẩn thận và chú ý đến từng chi tiết nhỏ.",
      "en": "'Meticulous' is an adjective describing someone who is very careful and pays great attention to every detail."
    },
    "translation": {
      "vi": "Từ nào mô tả một người 'tỉ mỉ' và 'chú ý đến chi tiết'?",
      "en": "Which word describes someone who is 'thorough' and 'pays attention to detail'?"
    },
    "grammar_tags": ["vocabulary", "adjective"],
    "vocab_tags": ["personality", "work_ethic"],
    "difficulty": 5,
    "distractor_notes": {
      "A": "'Careless' có nghĩa là bất cẩn.",
      "C": "'General' có nghĩa là chung chung.",
      "D": "'Spontaneous' có nghĩa là tự phát, ngẫu hứng."
    },
    "hint": "Các biên tập viên và kế toán viên giỏi thường có phẩm chất này."
  },
  {
    "id": "q48",
    "question": "You can either pay by credit card ------ you can pay with cash.",
    "options": ["and", "but", "or", "so"],
    "answer": "C",
    "explanation": {
      "vi": "Cấu trúc 'either ... or ...' được sử dụng để đưa ra hai hoặc nhiều lựa chọn.",
      "en": "The structure 'either ... or ...' is used to present two or more choices."
    },
    "translation": {
      "vi": "Bạn có thể thanh toán bằng thẻ tín dụng hoặc bạn có thể thanh toán bằng tiền mặt.",
      "en": "You can either pay by credit card or you can pay with cash."
    },
    "grammar_tags": ["conjunctions", "correlative_conjunctions"],
    "vocab_tags": ["payment", "finance"],
    "difficulty": 1,
    "distractor_notes": {
      "A": "'And' dùng để nối các ý tương đồng.",
      "B": "'But' dùng để chỉ sự tương phản.",
      "D": "'So' dùng để chỉ kết quả."
    },
    "hint": "Đây là một cặp liên từ dùng để chỉ sự lựa chọn."
  },
  {
    "id": "q49",
    "question": "The ------ of the two companies is expected to be finalized next quarter.",
    "options": ["merger", "separation", "decline", "competition"],
    "answer": "A",
    "explanation": {
      "vi": "'Merger' là sự sáp nhập của hai hoặc nhiều công ty thành một.",
      "en": "'Merger' is the combination of two or more companies into one."
    },
    "translation": {
      "vi": "Việc sáp nhập hai công ty dự kiến sẽ được hoàn tất vào quý tới.",
      "en": "The merger of the two companies is expected to be finalized next quarter."
    },
    "grammar_tags": ["vocabulary", "noun"],
    "vocab_tags": ["business", "corporate"],
    "difficulty": 3,
    "distractor_notes": {
      "B": "'Separation' có nghĩa là sự chia tách.",
      "C": "'Decline' có nghĩa là sự suy giảm.",
      "D": "'Competition' có nghĩa là sự cạnh tranh."
    },
    "hint": "Đây là hành động khi hai công ty kết hợp lại thành một."
  },
  {
    "id": "q50",
    "question": "The manager spoke ------ about the team's recent achievements.",
    "options": ["enthusiasm", "enthusiastic", "enthusiastically", "enthusiast"],
    "answer": "C",
    "explanation": {
      "vi": "Chúng ta cần một trạng từ ('enthusiastically') để bổ nghĩa cho động từ 'spoke', mô tả cách người quản lý nói.",
      "en": "We need an adverb ('enthusiastically') to modify the verb 'spoke', describing how the manager spoke."
    },
    "translation": {
      "vi": "Người quản lý đã nói một cách đầy nhiệt huyết về những thành tựu gần đây của đội.",
      "en": "The manager spoke enthusiastically about the team's recent achievements."
    },
    "grammar_tags": ["word_form", "adverb"],
    "vocab_tags": ["communication", "management"],
    "difficulty": 2,
    "distractor_notes": {
      "A": "'Enthusiasm' là một danh từ.",
      "B": "'Enthusiastic' là một tính từ.",
      "D": "'Enthusiast' là một danh từ chỉ người."
    },
    "hint": "Cần một từ để mô tả hành động 'nói'."
  },
  {
    "id": "q51",
    "question": "The new policy is intended to ------ waste and improve efficiency.",
    "options": ["generate", "maximize", "eliminate", "encourage"],
    "answer": "C",
    "explanation": {
      "vi": "'Eliminate' có nghĩa là loại bỏ hoàn toàn. Trong ngữ cảnh này, chính sách nhằm mục đích loại bỏ lãng phí.",
      "en": "'Eliminate' means to completely remove. In this context, the policy aims to get rid of waste."
    },
    "translation": {
      "vi": "Chính sách mới nhằm mục đích loại bỏ lãng phí và cải thiện hiệu quả.",
      "en": "The new policy is intended to eliminate waste and improve efficiency."
    },
    "grammar_tags": ["vocabulary", "verb_choice"],
    "vocab_tags": ["policy", "efficiency"],
    "difficulty": 3,
    "distractor_notes": {
      "A": "'Generate' có nghĩa là tạo ra.",
      "B": "'Maximize' có nghĩa là tối đa hóa.",
      "D": "'Encourage' có nghĩa là khuyến khích."
    },
    "hint": "Từ này có nghĩa là 'loại bỏ' hoặc 'xóa sổ'."
  },
  {
    "id": "q52",
    "question": "All employees should familiarize ------ with the new safety procedures.",
    "options": ["them", "their", "they", "themselves"],
    "answer": "D",
    "explanation": {
      "vi": "Động từ 'familiarize' thường đi với một đại từ phản thân. Vì chủ ngữ là 'All employees' (số nhiều), đại từ phản thân tương ứng là 'themselves'.",
      "en": "The verb 'familiarize' is typically used with a reflexive pronoun. Since the subject is 'All employees' (plural), the corresponding reflexive pronoun is 'themselves'."
    },
    "translation": {
      "vi": "Tất cả nhân viên nên tự làm quen với các quy trình an toàn mới.",
      "en": "All employees should familiarize themselves with the new safety procedures."
    },
    "grammar_tags": ["pronoun", "reflexive_pronoun"],
    "vocab_tags": ["training", "safety"],
    "difficulty": 2,
    "distractor_notes": {
      "A": "'Them' là một đại từ tân ngữ.",
      "B": "'Their' là một tính từ sở hữu.",
      "C": "'They' là một đại từ chủ ngữ."
    },
    "hint": "Cụm từ có nghĩa là 'tự làm quen với'."
  },
  {
    "id": "q53",
    "question": "Một từ có nghĩa là 'sự đồng thuận' hoặc 'thỏa thuận chung' là gì?",
    "options": ["disagreement", "conflict", "consensus", "debate"],
    "answer": "C",
    "explanation": {
      "vi": "'Consensus' là một danh từ có nghĩa là sự đồng ý chung của tất cả mọi người trong một nhóm.",
      "en": "'Consensus' is a noun that means a general agreement among all the people in a group."
    },
    "translation": {
      "vi": "Một từ có nghĩa là 'sự đồng thuận' hoặc 'thỏa thuận chung' là gì?",
      "en": "What is a word that means 'general agreement'?"
    },
    "grammar_tags": ["vocabulary"],
    "vocab_tags": ["meetings", "decision_making"],
    "difficulty": 5,
    "distractor_notes": {
      "A": "'Disagreement' là sự bất đồng.",
      "B": "'Conflict' là sự xung đột.",
      "D": "'Debate' là cuộc tranh luận."
    },
    "hint": "Khi một nhóm đạt được điều này, mọi người đều đồng ý."
  },
  {
    "id": "q54",
    "question": "Ms. Garcia ------ in the marketing department for five years before she was promoted.",
    "options": ["works", "has worked", "had been working", "will work"],
    "answer": "C",
    "explanation": {
      "vi": "Hành động 'làm việc' kéo dài trong một khoảng thời gian ('for five years') và xảy ra trước một hành động khác trong quá khứ ('was promoted'). Thì quá khứ hoàn thành tiếp diễn ('had been working') được sử dụng để nhấn mạnh sự kéo dài của hành động đó.",
      "en": "The action of 'working' happened over a period of time ('for five years') before another past action ('was promoted'). The past perfect continuous tense ('had been working') is used to emphasize the duration of that action."
    },
    "translation": {
      "vi": "Bà Garcia đã làm việc trong bộ phận tiếp thị được năm năm trước khi bà được thăng chức.",
      "en": "Ms. Garcia had been working in the marketing department for five years before she was promoted."
    },
    "grammar_tags": ["tenses", "past_perfect_continuous"],
    "vocab_tags": ["career", "employment"],
    "difficulty": 4,
    "distractor_notes": {
      "A": "'Works' là thì hiện tại đơn.",
      "B": "'Has worked' là thì hiện tại hoàn thành.",
      "D": "'Will work' là thì tương lai đơn."
    },
    "hint": "Hành động này kéo dài một thời gian trong quá khứ trước một sự kiện quá khứ khác."
  },
  {
    "id": "q55",
    "question": "The feedback from the client was ------ positive, with only minor suggestions for improvement.",
    "options": ["overwhelm", "overwhelming", "overwhelmingly", "overwhelmed"],
    "answer": "C",
    "explanation": {
      "vi": "Chúng ta cần một trạng từ ('overwhelmingly') để bổ nghĩa cho tính từ 'positive'. Nó có nghĩa là 'một cách áp đảo' hoặc 'phần lớn'.",
      "en": "We need an adverb ('overwhelmingly') to modify the adjective 'positive'. It means 'to a very great degree'."
    },
    "translation": {
      "vi": "Phản hồi từ khách hàng tích cực một cách áp đảo, chỉ có những đề xuất nhỏ để cải thiện.",
      "en": "The feedback from the client was overwhelmingly positive, with only minor suggestions for improvement."
    },
    "grammar_tags": ["word_form", "adverb"],
    "vocab_tags": ["feedback", "customers"],
    "difficulty": 4,
    "distractor_notes": {
      "A": "'Overwhelm' là một động từ.",
      "B": "'Overwhelming' là một tính từ.",
      "D": "'Overwhelmed' là một tính từ (dạng quá khứ phân từ)."
    },
    "hint": "Cần một từ để nhấn mạnh mức độ 'tích cực'."
  },
  {
    "id": "q56",
    "question": "The document provides a detailed overview ------ the project's objectives.",
    "options": ["of", "for", "with", "by"],
    "answer": "A",
    "explanation": {
      "vi": "Cụm từ 'overview of something' có nghĩa là 'tổng quan về một cái gì đó'.",
      "en": "The phrase 'overview of something' means 'a general review or summary of a subject'."
    },
    "translation": {
      "vi": "Tài liệu cung cấp một cái nhìn tổng quan chi tiết về các mục tiêu của dự án.",
      "en": "The document provides a detailed overview of the project's objectives."
    },
    "grammar_tags": ["prepositions", "collocation"],
    "vocab_tags": ["documents", "projects"],
    "difficulty": 1,
    "distractor_notes": {
      "B": "'For' (cho) không phù hợp.",
      "C": "'With' (với) không phù hợp.",
      "D": "'By' (bởi) không phù hợp."
    },
    "hint": "Giới từ này thường đi sau danh từ 'overview'."
  },
  {
    "id": "q57",
    "question": "We need to ------ that all the data is accurate before publishing the report.",
    "options": ["verify", "assume", "ignore", "guess"],
    "answer": "A",
    "explanation": {
      "vi": "'Verify' có nghĩa là xác minh, kiểm tra để đảm bảo điều gì đó là đúng hoặc chính xác.",
      "en": "'Verify' means to make sure or demonstrate that something is true, accurate, or justified."
    },
    "translation": {
      "vi": "Chúng ta cần xác minh rằng tất cả dữ liệu là chính xác trước khi công bố báo cáo.",
      "en": "We need to verify that all the data is accurate before publishing the report."
    },
    "grammar_tags": ["vocabulary", "verb_choice"],
    "vocab_tags": ["data", "reporting"],
    "difficulty": 3,
    "distractor_notes": {
      "B": "'Assume' có nghĩa là cho rằng, giả định.",
      "C": "'Ignore' có nghĩa là phớt lờ.",
      "D": "'Guess' có nghĩa là đoán."
    },
    "hint": "Hành động này có nghĩa là 'kiểm tra lại cho chắc chắn'."
  },
  {
    "id": "q58",
    "question": "The flight was delayed ------ bad weather conditions.",
    "options": ["because", "due to", "although", "so"],
    "answer": "B",
    "explanation": {
      "vi": "'Due to' là một cụm giới từ có nghĩa là 'bởi vì' và nó phải được theo sau bởi một danh từ hoặc cụm danh từ ('bad weather conditions').",
      "en": "'Due to' is a prepositional phrase meaning 'because of' and it must be followed by a noun or noun phrase ('bad weather conditions')."
    },
    "translation": {
      "vi": "Chuyến bay đã bị hoãn do điều kiện thời tiết xấu.",
      "en": "The flight was delayed due to bad weather conditions."
    },
    "grammar_tags": ["prepositions", "cause_effect"],
    "vocab_tags": ["travel", "weather"],
    "difficulty": 3,
    "distractor_notes": {
      "A": "'Because' là một liên từ và phải được theo sau bởi một mệnh đề (chủ ngữ + động từ).",
      "C": "'Although' (mặc dù) chỉ sự tương phản.",
      "D": "'So' (vì vậy) chỉ kết quả."
    },
    "hint": "Bạn cần một cụm từ chỉ nguyên nhân đi với danh từ."
  },
  {
    "id": "q59",
    "question": "The company is known for its commitment to environmental ------.",
    "options": ["sustain", "sustainable", "sustainability", "sustained"],
    "answer": "C",
    "explanation": {
      "vi": "Sau tính từ 'environmental', chúng ta cần một danh từ. 'Sustainability' (sự bền vững) là danh từ phù hợp.",
      "en": "After the adjective 'environmental', we need a noun. 'Sustainability' is the correct noun."
    },
    "translation": {
      "vi": "Công ty được biết đến với cam kết về sự bền vững môi trường.",
      "en": "The company is known for its commitment to environmental sustainability."
    },
    "grammar_tags": ["word_form", "noun"],
    "vocab_tags": ["environment", "corporate_responsibility"],
    "difficulty": 4,
    "distractor_notes": {
      "A": "'Sustain' là một động từ.",
      "B": "'Sustainable' là một tính từ.",
      "D": "'Sustained' là một động từ ở dạng quá khứ phân từ hoặc một tính từ."
    },
    "hint": "Bạn cần một danh từ có nghĩa là 'khả năng duy trì ở một mức độ nhất định'."
  },
  {
    "id": "q60",
    "question": "The new office layout is much more ------ than the old one.",
    "options": ["space", "spacious", "spaciously", "spacing"],
    "answer": "B",
    "explanation": {
      "vi": "Sau 'more' trong cấu trúc so sánh, chúng ta cần một tính từ. 'Spacious' là tính từ có nghĩa là 'rộng rãi'.",
      "en": "After 'more' in a comparative structure, we need an adjective. 'Spacious' is the adjective meaning 'having ample space'."
    },
    "translation": {
      "vi": "Bố trí văn phòng mới rộng rãi hơn nhiều so với cái cũ.",
      "en": "The new office layout is much more spacious than the old one."
    },
    "grammar_tags": ["comparative", "adjective"],
    "vocab_tags": ["office", "design"],
    "difficulty": 2,
    "distractor_notes": {
      "A": "'Space' là một danh từ.",
      "C": "'Spaciously' là một trạng từ.",
      "D": "'Spacing' là một danh từ (sự giãn cách)."
    },
    "hint": "Cần một tính từ để so sánh 'bố trí văn phòng'."
  }
];
 */
