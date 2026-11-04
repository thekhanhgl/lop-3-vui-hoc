/* Học liệu Toán 3 đã biên tập chuyên môn – Bài 3.
   Mỗi câu có 4 phương án, một đáp án đúng, giải thích bằng tiếng Việt.
   Cấu trúc tương thích math-bank.js: [câu hỏi, phương án, chỉ số đúng, giải thích, mức độ]. */
(() => {
  const raw = [
    ["□ + 125 = 300. Số cần điền là:",175,[165,185,275],"Lấy tổng trừ số hạng đã biết: 300 − 125 = 175.","NB"],
    ["246 + □ = 500. Số cần điền là:",254,[244,264,254+100],"500 − 246 = 254.","NB"],
    ["□ − 135 = 245. Số cần điền là:",380,[370,390,245-135],"Muốn tìm số bị trừ, lấy hiệu cộng số trừ: 245 + 135 = 380.","NB"],
    ["500 − □ = 275. Số cần điền là:",225,[215,235,275+500],"Muốn tìm số trừ, lấy số bị trừ trừ hiệu: 500 − 275 = 225.","NB"],
    ["□ + 208 = 600. Số cần điền là:",392,[382,402,408],"600 − 208 = 392.","NB"],
    ["375 + □ = 700. Số cần điền là:",325,[315,335,425],"700 − 375 = 325.","NB"],
    ["□ − 240 = 360. Số cần điền là:",600,[590,610,120],"360 + 240 = 600.","NB"],
    ["820 − □ = 410. Số cần điền là:",410,[400,420,390],"820 − 410 = 410.","NB"],
    ["135 + □ = 200. Số cần điền là:",65,[55,75,335],"200 − 135 = 65.","NB"],
    ["700 − □ = 125. Số cần điền là:",575,[565,585,825],"700 − 125 = 575.","NB"],

    ["Muốn tìm số hạng chưa biết trong phép cộng, ta làm thế nào?", "Lấy tổng trừ đi số hạng đã biết",["Lấy tổng cộng số hạng đã biết","Lấy số hạng đã biết trừ tổng","Lấy tổng chia số hạng đã biết"],"Số hạng chưa biết = tổng − số hạng đã biết.","TH"],
    ["Muốn tìm số bị trừ, ta làm thế nào?","Lấy hiệu cộng số trừ",["Lấy số bị trừ trừ hiệu","Lấy hiệu trừ số trừ","Lấy số trừ cộng số bị trừ"],"Số bị trừ = hiệu + số trừ.","TH"],
    ["Muốn tìm số trừ, ta làm thế nào?","Lấy số bị trừ trừ đi hiệu",["Lấy hiệu cộng số bị trừ","Lấy số bị trừ cộng hiệu","Lấy hiệu trừ số bị trừ"],"Số trừ = số bị trừ − hiệu.","TH"],
    ["Trong phép tính 325 + □ = 710, phép tính nào giúp tìm ô trống?","710 − 325",["710 + 325","325 − 710","710 : 325"],"Lấy tổng 710 trừ số hạng đã biết 325.","TH"],
    ["Trong phép tính □ − 268 = 315, phép tính nào giúp tìm ô trống?","315 + 268",["315 − 268","315 × 268","268 − 315"],"Lấy hiệu cộng số trừ để tìm số bị trừ.","TH"],
    ["Trong phép tính 900 − □ = 475, phép tính nào giúp tìm ô trống?","900 − 475",["900 + 475","475 − 900","900 × 475"],"Lấy số bị trừ trừ hiệu để tìm số trừ.","TH"],
    ["Điền số thích hợp: 428 + □ = 428","0",["1","428","856"],"Muốn tổng không thay đổi, ta cộng thêm 0.","TH"],
    ["Điền số thích hợp: □ − 0 = 639","639",["0","638","640"],"Trừ đi 0 thì giữ nguyên số bị trừ.","TH"],
    ["Biết 275 + 325 = 600. Kết quả của 600 − 275 là:","325",["275","600","50"],"Phép trừ là phép tính ngược của phép cộng: 600 − 275 = 325.","TH"],
    ["Phép tính nào kiểm tra đúng kết quả 735 − 286 = 449?","449 + 286 = 735",["735 + 286 = 449","735 − 449 = 286 + 1","286 − 449 = 735"],"Muốn kiểm tra phép trừ, lấy hiệu cộng số trừ; kết quả phải bằng số bị trừ.","TH"],

    ["Thư viện có một số quyển truyện. Sau khi nhận thêm 145 quyển thì có 520 quyển. Ban đầu thư viện có:",375,[365,385,675],"520 − 145 = 375 quyển.","VD"],
    ["Một cửa hàng có 860 kg gạo, đã bán một số ki-lô-gam. Cửa hàng còn 325 kg. Số gạo đã bán là:",535,[525,545,1_185],"860 − 325 = 535 kg.","VD"],
    ["Đội Một trồng được 238 cây. Hai đội trồng được 615 cây. Đội Hai trồng được:",377,[367,387,853],"615 − 238 = 377 cây.","VD"],
    ["Một xe chở hàng, sau khi dỡ 275 kg thì còn 425 kg. Trước khi dỡ, xe chở:",700,[690,710,150],"425 + 275 = 700 kg.","VD"],
    ["Lan có một số nhãn vở. Lan tặng bạn 128 chiếc thì còn 247 chiếc. Lúc đầu Lan có:",375,[365,385,119],"247 + 128 = 375 chiếc.","VD"],
    ["Một phép trừ có số bị trừ là 904, hiệu là 368. Số trừ là:",536,[526,546,1_272],"904 − 368 = 536.","VD"],
    ["Tổng hai ngăn sách là 780 quyển. Ngăn thứ nhất có 395 quyển. Ngăn thứ hai có:",385,[375,395,1_175],"780 − 395 = 385 quyển.","VD"],
    ["Một bể có 650 lít nước. Sau khi dùng, bể còn 285 lít. Đã dùng:",365,[355,375,935],"650 − 285 = 365 lít.","VD"],
    ["Tìm số biết rằng lấy số đó trừ đi 175 thì được 408.",583,[573,593,233],"Số cần tìm là 408 + 175 = 583.","VD"],
    ["Tìm số biết rằng cộng số đó với 286 thì được 700.",414,[404,424,986],"Số cần tìm là 700 − 286 = 414.","VD"],
    ["Một cửa hàng nhập thêm một số chiếc bút. Trước khi nhập có 465 chiếc, sau khi nhập có 800 chiếc. Số bút nhập thêm là:",335,[325,345,1_265],"800 − 465 = 335 chiếc.","VD"],
    ["Một trường có 925 học sinh, trong đó có 468 học sinh nữ. Số học sinh nam là:",457,[447,467,1_393],"925 − 468 = 457 học sinh.","VD"],
    ["Trong phép tính □ − 347 = 286, số cần tìm là:",633,[623,643,61],"286 + 347 = 633.","VD"],
    ["Trong phép tính 1 000 − □ = 625, số cần tìm là:",375,[365,385,1_625],"1 000 − 625 = 375.","VD"],
    ["Một đội cần hoàn thành 750 sản phẩm. Đội đã làm được 425 sản phẩm. Đội còn phải làm:",325,[315,335,1_175],"750 − 425 = 325 sản phẩm.","VD"],
    ["Có 3 thùng hàng, tổng cộng 840 kg. Thùng thứ nhất nặng 275 kg, thùng thứ hai nặng 318 kg. Thùng thứ ba nặng:",247,[237,257,593],"Trước hết: 275 + 318 = 593 kg. Sau đó: 840 − 593 = 247 kg.","VD"],
    ["Một cửa hàng có 900 quyển vở. Buổi sáng bán 235 quyển, buổi chiều bán 187 quyển. Cửa hàng còn:",478,[468,488,522],"235 + 187 = 422; 900 − 422 = 478 quyển.","VD"],
    ["Tổng số cây của hai lớp là 685. Lớp 3A trồng ít hơn lớp 3B 35 cây. Nếu lớp 3A trồng 325 cây thì lớp 3B trồng:",360,[350,370,290],"Lớp 3B trồng nhiều hơn 3A 35 cây: 325 + 35 = 360 cây.","VD"],
    ["Một số khi cộng với 198 thì được 605. Số đó là:",407,[397,417,803],"605 − 198 = 407.","VD"],
    ["Một số khi trừ đi 296 thì còn 507. Số đó là:",803,[793,813,211],"507 + 296 = 803.","VD"]
  ];

  const questions = raw.map(([prompt, correct, wrong, explain, level]) => {
    const answer = String(correct);
    const options = [answer, ...wrong.map(String)];
    const shift = prompt.length % 4;
    const rotated = options.slice(shift).concat(options.slice(0, shift));
    return [prompt, rotated, rotated.indexOf(answer), explain, level];
  });

  const topic = {
    id: "math-bai-03", lessonNo: 3, book: "Tập 1",
    title: "Bài 3. Tìm thành phần trong phép cộng, phép trừ",
    icon: "🔍",
    summary: {
      goals: [
        "Nhận biết được số hạng, tổng, số bị trừ, số trừ và hiệu.",
        "Tìm được số hạng chưa biết, số bị trừ và số trừ.",
        "Vận dụng phép tính ngược để giải bài toán gần gũi."
      ],
      knowledge: [
        {title:"Tìm số hạng chưa biết",detail:"Muốn tìm số hạng chưa biết, lấy tổng trừ đi số hạng đã biết."},
        {title:"Tìm số bị trừ",detail:"Muốn tìm số bị trừ, lấy hiệu cộng với số trừ."},
        {title:"Tìm số trừ",detail:"Muốn tìm số trừ, lấy số bị trừ trừ đi hiệu."},
        {title:"Kiểm tra kết quả",detail:"Thay số vừa tìm vào phép tính ban đầu hoặc dùng phép tính ngược để kiểm tra."}
      ],
      examples: [
        {question:"Tìm x: x + 275 = 630.",answer:"x = 355",explain:"Số hạng chưa biết = tổng − số hạng đã biết. x = 630 − 275 = 355. Thử lại: 355 + 275 = 630."},
        {question:"Tìm x: 820 − x = 365.",answer:"x = 455",explain:"Số trừ = số bị trừ − hiệu. x = 820 − 365 = 455. Thử lại: 820 − 455 = 365."}
      ],
      commonMistakes: [
        "Lấy tổng cộng số hạng đã biết khi tìm số hạng chưa biết.",
        "Nhầm cách tìm số bị trừ với cách tìm số trừ.",
        "Không kiểm tra lại bằng phép tính ban đầu.",
        "Bỏ quên đơn vị trong bài toán có lời văn."
      ],
      tip:"Trước khi tính, hãy gọi đúng tên thành phần chưa biết. Sau đó chọn phép tính ngược phù hợp."
    },
    questions
  };

  if (window.MATH_BANK?.topics) {
    const index = window.MATH_BANK.topics.findIndex(item => item.id === topic.id);
    if (index >= 0) window.MATH_BANK.topics[index] = topic;
    else window.MATH_BANK.topics.push(topic);
  }
})();