/* Học liệu tự biên soạn theo định hướng kiến thức lớp 3.
   Các câu hỏi là nội dung mới, không sao chép dữ liệu từ các repo tham khảo. */
window.LEARNING_DATA = {
  math: {
    title:"Toán", icon:"🧮", color:"#e9efff", accent:"#315fd0",
    description:"Tính toán, bảng nhân chia và giải toán có lời văn.",
    topics:[
      {id:"math-multiply",title:"Bảng nhân và bảng chia",icon:"✖️",questions:[
        ["7 × 8 = ?",["54","56","58","64"],1,"7 × 8 = 56."],
        ["9 × 6 = ?",["45","52","54","63"],2,"9 × 6 = 54."],
        ["48 : 6 = ?",["6","7","8","9"],2,"48 : 6 = 8."],
        ["8 × 4 = ?",["24","28","32","36"],2,"8 × 4 = 32."],
        ["63 : 7 = ?",["7","8","9","10"],2,"63 : 7 = 9."],
        ["6 × 7 = ?",["36","40","42","48"],2,"6 × 7 = 42."],
        ["72 : 8 = ?",["8","9","10","11"],1,"72 : 8 = 9."],
        ["5 × 9 = ?",["40","45","50","55"],1,"5 × 9 = 45."]
      ]},
      {id:"math-add",title:"Cộng, trừ trong phạm vi 1 000",icon:"➕",questions:[
        ["235 + 142 = ?",["367","377","387","397"],1,"235 + 142 = 377."],
        ["600 − 275 = ?",["315","325","335","345"],1,"600 − 275 = 325."],
        ["408 + 96 = ?",["494","504","514","524"],1,"408 + 96 = 504."],
        ["721 − 308 = ?",["403","413","423","433"],1,"721 − 308 = 413."],
        ["156 + 267 = ?",["413","423","433","443"],1,"156 + 267 = 423."],
        ["900 − 456 = ?",["434","444","454","464"],1,"900 − 456 = 444."],
        ["318 + 205 = ?",["513","523","533","543"],1,"318 + 205 = 523."],
        ["750 − 125 = ?",["615","625","635","645"],1,"750 − 125 = 625."]
      ]},
      {id:"math-measure",title:"Đo lường và xem giờ",icon:"⏰",questions:[
        ["1 m = bao nhiêu cm?",["10 cm","100 cm","1 000 cm","50 cm"],1,"1 mét bằng 100 xăng-ti-mét."],
        ["2 giờ = bao nhiêu phút?",["60 phút","90 phút","120 phút","200 phút"],2,"2 giờ bằng 120 phút."],
        ["Một ngày có bao nhiêu giờ?",["12","18","24","30"],2,"Một ngày có 24 giờ."],
        ["5 kg = bao nhiêu gam?",["50 g","500 g","5 000 g","50 000 g"],2,"1 kg = 1 000 g, vậy 5 kg = 5 000 g."],
        ["Nửa giờ là bao nhiêu phút?",["15","20","30","45"],2,"Nửa giờ bằng 30 phút."],
        ["Chu vi hình vuông cạnh 4 cm là?",["8 cm","12 cm","16 cm","20 cm"],2,"Chu vi hình vuông bằng cạnh nhân 4."],
        ["1 km = bao nhiêu m?",["10 m","100 m","1 000 m","10 000 m"],2,"1 km bằng 1 000 m."],
        ["Kim phút chỉ số 6, kim giờ ở giữa 2 và 3. Mấy giờ?",["2 giờ 30","3 giờ 30","6 giờ 10","2 giờ 06"],0,"Đó là 2 giờ 30 phút."]
      ]},
      {id:"math-word",title:"Toán có lời văn",icon:"🧠",questions:[
        ["Có 24 quyển vở chia đều cho 4 bạn. Mỗi bạn được?",["4","5","6","8"],2,"24 : 4 = 6 quyển."],
        ["Lan có 35 nhãn vở, được tặng thêm 18. Lan có?",["43","53","63","73"],1,"35 + 18 = 53."],
        ["Một cửa hàng có 80 quả cam, bán 27 quả. Còn lại?",["43","53","57","63"],1,"80 − 27 = 53 quả."],
        ["Mỗi hộp có 8 bút. 6 hộp có?",["42","46","48","56"],2,"8 × 6 = 48 bút."],
        ["Có 45 học sinh xếp thành 5 hàng đều nhau. Mỗi hàng?",["8","9","10","11"],1,"45 : 5 = 9 học sinh."],
        ["Mẹ mua 3 túi táo, mỗi túi 7 quả. Có tất cả?",["10","18","21","24"],2,"3 × 7 = 21 quả táo."],
        ["Một đoạn dây dài 90 cm, cắt đi 35 cm. Còn?",["45","55","65","75"],1,"90 − 35 = 55 cm."],
        ["Có 4 bàn, mỗi bàn 6 học sinh. Có tất cả?",["10","20","24","28"],2,"4 × 6 = 24 học sinh."]
      ]}
    ]
  },
  vietnamese: {
    title:"Tiếng Việt", icon:"📖", color:"#fff0e8", accent:"#e07845",
    description:"Từ ngữ, chính tả, câu và đọc hiểu.",
    topics:[
      {id:"viet-words",title:"Từ chỉ sự vật, hoạt động",icon:"🔎",questions:[
        ["Từ nào chỉ sự vật?",["chạy","học sinh","nhanh","đẹp"],1,"Học sinh là từ chỉ người, thuộc nhóm sự vật."],
        ["Từ nào chỉ hoạt động?",["bông hoa","đọc sách","màu đỏ","cái bàn"],1,"Đọc sách là hoạt động."],
        ["Từ nào chỉ đặc điểm?",["con mèo","xanh biếc","nhảy dây","cô giáo"],1,"Xanh biếc chỉ màu sắc, đặc điểm."],
        ["Nhóm từ nào đều chỉ sự vật?",["bút, vở, thước","đẹp, xinh, cao","đi, chạy, nhảy","vui, buồn, ngoan"],0,"Bút, vở, thước đều là đồ vật."],
        ["Từ trái nghĩa với 'chăm chỉ' là?",["siêng năng","cần cù","lười biếng","chịu khó"],2,"Lười biếng trái nghĩa với chăm chỉ."],
        ["Từ gần nghĩa với 'dũng cảm' là?",["gan dạ","nhút nhát","sợ hãi","yếu ớt"],0,"Gan dạ gần nghĩa với dũng cảm."],
        ["Từ nào viết đúng?",["xinh xắn","sinh sắn","xinh sắng","sinh xắn"],0,"Xinh xắn là cách viết đúng."],
        ["Từ nào là từ chỉ tình cảm?",["yêu thương","cây bàng","cái trống","đạp xe"],0,"Yêu thương chỉ tình cảm."]
      ]},
      {id:"viet-sentence",title:"Câu và dấu câu",icon:"✍️",questions:[
        ["Cuối câu hỏi thường dùng dấu nào?",["Dấu chấm","Dấu phẩy","Dấu hỏi","Dấu chấm than"],2,"Câu hỏi kết thúc bằng dấu hỏi."],
        ["Câu nào là câu kể?",["Bạn tên là gì?","Em rất yêu trường em.","Ôi, đẹp quá!","Hãy mở sách ra!"],1,"Đây là câu kể giới thiệu, nêu nhận xét."],
        ["Chọn cách viết đúng:",["em tên là Nam.","Em tên là Nam.","em Tên là nam.","Em tên Là Nam."],1,"Đầu câu viết hoa, tên riêng viết hoa."],
        ["Dấu phẩy trong câu thường dùng để làm gì?",["Kết thúc câu hỏi","Ngăn cách các bộ phận","Kết thúc câu kể","Thể hiện cảm xúc"],1,"Dấu phẩy giúp ngăn cách các bộ phận trong câu."],
        ["Câu nào có hình ảnh so sánh?",["Mặt trời đỏ rực.","Mặt trời như quả cầu lửa.","Mặt trời lên cao.","Mặt trời tỏa nắng."],1,"Từ 'như' tạo phép so sánh."],
        ["Từ nào cần viết hoa?",["quảng ngãi","bàn ghế","học tập","bầu trời"],0,"Tên địa danh Quảng Ngãi phải viết hoa."],
        ["Câu cảm thường kết thúc bằng dấu nào?",["Dấu hỏi","Dấu chấm than","Dấu phẩy","Dấu hai chấm"],1,"Câu cảm thường dùng dấu chấm than."],
        ["Chọn câu có đủ bộ phận chính:",["Đang chạy.","Những bông hoa.","Các bạn học sinh.","Chim én bay lượn trên trời."],3,"Câu có chủ ngữ 'Chim én' và vị ngữ 'bay lượn trên trời'."]
      ]},
      {id:"viet-spelling",title:"Chính tả và âm vần",icon:"🔤",questions:[
        ["Từ nào viết đúng?",["nghỉ ngơi","ngỉ ngơi","nghĩ ngơi","nghĩ ngơi"],0,"Nghỉ ngơi viết với 'ngh' và dấu hỏi."],
        ["Điền s/x: ...inh đẹp",["s","x","ch","tr"],1,"Xinh đẹp viết với x."],
        ["Từ nào viết đúng?",["trung thực","chung thực","trung thiệt","chung thiệt"],0,"Trung thực viết với tr."],
        ["Điền dấu: chăm chỉ, cần cù và ...",["siêng năng","xiêng năng","siêng năn","xiêng năn"],0,"Siêng năng là cách viết đúng."],
        ["Từ nào có vần 'ươn'?",["vườn cây","vương quốc","đường đi","hương thơm"],0,"Vườn có vần ươn."],
        ["Điền ch/tr: ...ăm chỉ",["ch","tr","s","x"],0,"Chăm chỉ viết với ch."],
        ["Từ nào viết đúng?",["khuỷu tay","khủy tay","khuỷ tay","khuỹu tay"],0,"Khuỷu tay là cách viết đúng."],
        ["Điền r/d/gi: ...ữ gìn",["r","d","gi","ch"],2,"Giữ gìn viết với gi."]
      ]},
      {id:"viet-reading",title:"Đọc hiểu ngắn",icon:"🌳",questions:[
        ["Đọc: 'Sáng nào, Minh cũng tưới cây trước khi đi học.' Minh làm gì mỗi sáng?",["Quét nhà","Tưới cây","Đọc truyện","Cho mèo ăn"],1,"Minh tưới cây trước khi đi học."],
        ["Đọc: 'Đàn chim én chao liệng trên bầu trời xanh.' Sự vật nào đang bay?",["Bầu trời","Đàn chim én","Đám mây","Cánh đồng"],1,"Đàn chim én đang chao liệng."],
        ["Đọc: 'Bà kể chuyện cổ tích cho em nghe.' Ai kể chuyện?",["Mẹ","Cô giáo","Bà","Chị"],2,"Bà là người kể chuyện."],
        ["Đọc: 'Trời mưa, Nam mang áo mưa đến trường.' Vì sao Nam mang áo mưa?",["Trời nắng","Trời mưa","Trời lạnh","Nam đi chơi"],1,"Nam mang áo mưa vì trời mưa."],
        ["Đọc: 'Hoa phượng nở đỏ rực sân trường báo hiệu hè về.' Hoa phượng có màu gì?",["Vàng","Trắng","Tím","Đỏ"],3,"Hoa phượng nở đỏ rực."],
        ["Đọc: 'Mỗi tối, An đọc sách khoảng hai mươi phút.' An đọc sách khi nào?",["Buổi sáng","Buổi trưa","Buổi tối","Buổi chiều"],2,"An đọc sách mỗi tối."],
        ["Đọc: 'Chú chó Vàng luôn nằm trước cổng để trông nhà.' Chú chó làm nhiệm vụ gì?",["Bắt chuột","Trông nhà","Kéo xe","Bơi lội"],1,"Chú chó nằm trước cổng để trông nhà."],
        ["Đọc: 'Cả lớp cùng nhặt rác và trồng hoa.' Các bạn đang làm gì?",["Vệ sinh, làm đẹp trường","Tập hát","Đá bóng","Vẽ tranh"],0,"Các bạn cùng nhặt rác và trồng hoa."]
      ]}
    ]
  },
  english: {
    title:"Tiếng Anh", icon:"🔤", color:"#e7f8f3", accent:"#1a9b7b",
    description:"Từ vựng quen thuộc, nghe phát âm và luyện chọn nghĩa.",
    topics:[
      {id:"eng-family",title:"Family – Gia đình",icon:"👨‍👩‍👧",words:[
        ["father","bố","My father is kind."],["mother","mẹ","My mother is happy."],["brother","anh/em trai","I have one brother."],["sister","chị/em gái","My sister is eight."],["grandfather","ông","My grandfather is old."],["grandmother","bà","I love my grandmother."]
      ]},
      {id:"eng-school",title:"School – Trường học",icon:"🏫",words:[
        ["school","trường học","This is my school."],["teacher","giáo viên","My teacher is nice."],["student","học sinh","I am a student."],["book","quyển sách","Open your book."],["pencil","bút chì","I have a pencil."],["ruler","thước kẻ","This is a ruler."]
      ]},
      {id:"eng-colors",title:"Colors – Màu sắc",icon:"🎨",words:[
        ["red","màu đỏ","The apple is red."],["blue","màu xanh dương","The sky is blue."],["yellow","màu vàng","The sun is yellow."],["green","màu xanh lá","The tree is green."],["white","màu trắng","The paper is white."],["black","màu đen","My bag is black."]
      ]},
      {id:"eng-animals",title:"Animals – Động vật",icon:"🐾",words:[
        ["cat","con mèo","I have a cat."],["dog","con chó","The dog is brown."],["bird","con chim","A bird can fly."],["fish","con cá","The fish can swim."],["rabbit","con thỏ","The rabbit is cute."],["elephant","con voi","An elephant is big."]
      ]},
      {id:"eng-food",title:"Food – Đồ ăn",icon:"🍎",words:[
        ["apple","quả táo","I like apples."],["banana","quả chuối","The banana is yellow."],["rice","cơm/gạo","I eat rice."],["bread","bánh mì","I have bread for breakfast."],["milk","sữa","I drink milk."],["water","nước","I drink water every day."]
      ]},
      {id:"eng-body",title:"Body – Cơ thể",icon:"🙂",words:[
        ["head","đầu","Touch your head."],["eyes","đôi mắt","I have two eyes."],["ears","đôi tai","I have two ears."],["nose","mũi","This is my nose."],["mouth","miệng","Open your mouth."],["hands","đôi bàn tay","Wash your hands."]
      ]}
    ]
  }
};
