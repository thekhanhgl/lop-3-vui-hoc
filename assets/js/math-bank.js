/* Ngân hàng Toán 3 - Kết nối tri thức với cuộc sống.
   Nội dung câu hỏi do dự án tự biên soạn; không sao chép nguyên văn SGK.
   Cấu trúc: [câu hỏi, phương án, chỉ số đáp án đúng, giải thích, mức độ]. */
window.MATH_BANK = {
  topics: [
    {
      id: "math-bai-01",
      lessonNo: 1,
      book: "Tập 1",
      title: "Bài 1. Ôn tập các số đến 1 000",
      icon: "🔢",
      summary: {
        goals: [
          "Đọc và viết được các số trong phạm vi 1 000.",
          "Nhận biết giá trị của chữ số theo hàng trăm, hàng chục, hàng đơn vị.",
          "Phân tích số thành tổng các trăm, chục, đơn vị.",
          "So sánh, sắp xếp và xác định số liền trước, số liền sau."
        ],
        knowledge: [
          {title:"Cấu tạo số", detail:"Số có ba chữ số gồm hàng trăm, hàng chục và hàng đơn vị. Ví dụ: 572 gồm 5 trăm, 7 chục, 2 đơn vị."},
          {title:"Giá trị theo hàng", detail:"Trong số 572, chữ số 5 có giá trị 500; chữ số 7 có giá trị 70; chữ số 2 có giá trị 2."},
          {title:"Viết số thành tổng", detail:"572 = 500 + 70 + 2. Nếu một hàng không có đơn vị thì không cần viết số hạng 0, ví dụ 406 = 400 + 6."},
          {title:"So sánh số", detail:"So sánh từ hàng cao nhất: hàng trăm, rồi hàng chục, cuối cùng hàng đơn vị. Số có nhiều chữ số hơn thì lớn hơn."},
          {title:"Số liền trước, liền sau", detail:"Số liền trước kém số đã cho 1 đơn vị; số liền sau hơn số đã cho 1 đơn vị."}
        ],
        examples: [
          {question:"Viết số gồm 3 trăm, 0 chục và 8 đơn vị.",answer:"308",explain:"3 trăm = 300; 0 chục = 0; 8 đơn vị = 8. Vậy số đó là 308."},
          {question:"So sánh 695 và 659.",answer:"695 > 659",explain:"Hai số có cùng 6 trăm. So sánh hàng chục: 9 chục lớn hơn 5 chục nên 695 lớn hơn 659."}
        ],
        commonMistakes: [
          "Đọc hoặc viết thiếu chữ số 0 ở hàng chục/hàng đơn vị, chẳng hạn viết 408 thành 48.",
          "Nhầm chữ số với giá trị của chữ số: trong 572, chữ số 7 có giá trị là 70.",
          "So sánh hàng đơn vị trước khi so sánh hàng trăm và hàng chục.",
          "Nhầm số liền trước với số liền sau."
        ],
        tip:"Khi đọc, viết hoặc so sánh số có ba chữ số, hãy xác định lần lượt hàng trăm → hàng chục → hàng đơn vị."
      },
      questions: [
        ["Số gồm 4 trăm, 2 chục và 5 đơn vị được viết là:",["425","452","245","405"],0,"4 trăm, 2 chục, 5 đơn vị tạo thành số 425.","NB"],
        ["Trong số 638, chữ số hàng trăm là:",["3","6","8","0"],1,"Chữ số đứng ở hàng trăm là 6.","NB"],
        ["Trong số 572, chữ số 7 có giá trị là:",["7","70","700","72"],1,"Chữ số 7 ở hàng chục nên có giá trị 70.","NB"],
        ["Số 804 có:",["8 trăm, 4 chục","8 trăm, 0 chục, 4 đơn vị","8 chục, 4 đơn vị","8 trăm, 4 đơn vị và 0 chục"],1,"804 gồm 8 trăm, 0 chục và 4 đơn vị.","NB"],
        ["Số nào đọc là 'sáu trăm linh ba'?",["630","603","600","63"],1,"Sáu trăm linh ba được viết là 603.","NB"],
        ["Số 790 gồm:",["7 trăm, 9 chục, 0 đơn vị","7 trăm, 0 chục, 9 đơn vị","9 trăm, 7 chục","7 chục, 9 đơn vị"],0,"790 có 7 ở hàng trăm, 9 ở hàng chục và 0 ở hàng đơn vị.","NB"],
        ["Số liền sau của 499 là:",["498","500","501","490"],1,"Số liền sau hơn số đã cho 1 đơn vị: 499 + 1 = 500.","NB"],
        ["Số liền trước của 700 là:",["701","699","690","600"],1,"Số liền trước kém số đã cho 1 đơn vị: 700 − 1 = 699.","NB"],
        ["Số nào có chữ số 5 ở hàng chục?",["503","350","805","450"],1,"Trong số 350, chữ số 5 ở hàng chục, có giá trị 50.","NB"],
        ["Số lớn nhất có ba chữ số khác nhau là:",["999","987","998","989"],1,"987 là số lớn nhất có ba chữ số khác nhau: hàng trăm 9, hàng chục 8, hàng đơn vị 7.","NB"],

        ["Cách phân tích đúng số 426 thành tổng là:",["400 + 20 + 6","40 + 20 + 6","400 + 2 + 6","4 + 20 + 6"],0,"426 = 400 + 20 + 6.","TH"],
        ["Số 305 được phân tích thành:",["300 + 50","300 + 5","30 + 5","300 + 0 + 50"],1,"305 có 3 trăm, 0 chục và 5 đơn vị nên bằng 300 + 5.","TH"],
        ["Số gồm 9 trăm và 6 đơn vị là:",["960","906","690","96"],1,"9 trăm = 900; 6 đơn vị = 6; số cần tìm là 906.","TH"],
        ["Trong số 481, giá trị chữ số 4 gấp giá trị chữ số 8 bao nhiêu lần?",["2 lần","4 lần","5 lần","10 lần"],2,"Giá trị chữ số 4 là 400; giá trị chữ số 8 là 80. 400 : 80 = 5.","TH"],
        ["Điền dấu thích hợp: 576 ... 567",["<",">","=","+"],1,"Hai số cùng có 5 trăm; 7 chục lớn hơn 6 chục nên 576 > 567.","TH"],
        ["Số bé nhất trong các số 408, 480, 804, 840 là:",["408","480","804","840"],0,"Các số đều có ba chữ số; 408 có hàng trăm bằng 4, nhỏ hơn các số có hàng trăm bằng 8.","TH"],
        ["Dãy số nào được sắp xếp theo thứ tự tăng dần?",["321, 312, 231","205, 250, 502","700, 70, 707","456, 465, 445"],1,"205 < 250 < 502 nên dãy này tăng dần.","TH"],
        ["Số nào nằm giữa 398 và 402?",["397","399","403","410"],1,"399 lớn hơn 398 và nhỏ hơn 402.","TH"],
        ["Từ ba chữ số 2, 0, 7 có thể lập số lớn nhất có ba chữ số là:",["207","720","702","270"],1,"Để được số lớn nhất, đặt 7 ở hàng trăm, 2 ở hàng chục và 0 ở hàng đơn vị: 720.","TH"],
        ["Từ ba chữ số 4, 1, 9 lập được số bé nhất có ba chữ số khác nhau là:",["149","194","419","914"],0,"Đặt chữ số nhỏ nhất 1 ở hàng trăm, tiếp theo 4 ở hàng chục, 9 ở hàng đơn vị: 149.","TH"],

        ["Một thư viện có 6 trăm quyển sách, 3 chục quyển và 8 quyển lẻ. Thư viện có tất cả:",["638 quyển","683 quyển","368 quyển","608 quyển"],0,"6 trăm + 3 chục + 8 đơn vị = 638 quyển.","VD"],
        ["Bảng ghi số cây của ba lớp: 3A có 245 cây, 3B có 254 cây, 3C có 245 cây. Lớp trồng nhiều cây nhất là:",["3A","3B","3C","3A và 3C"],1,"254 lớn hơn 245 nên lớp 3B trồng nhiều cây nhất.","VD"],
        ["Một số có ba chữ số. Hàng trăm là 5, hàng chục hơn hàng đơn vị 2 đơn vị; hàng đơn vị là 3. Số đó là:",["523","553","532","535"],0,"Hàng đơn vị là 3, hàng chục là 3 + 2 = 5; hàng trăm là 5. Số đó là 553. Phương án đúng là 553.","VD"],
        ["Kho có 407 kg gạo. Người ta nhập thêm 1 bao 90 kg. Số biểu thị lượng gạo sau khi nhập là:",["497 kg","4970 kg","490 kg","417 kg"],0,"407 + 90 = 497 kg. Đây là tình huống vận dụng đọc và cấu tạo số.","VD"],
        ["Trên bảng có các số 608, 680, 806, 860. Số lớn thứ hai là:",["608","680","806","860"],2,"Thứ tự từ lớn đến bé: 860, 806, 680, 608. Số lớn thứ hai là 806.","VD"],
        ["Một số có ba chữ số, chữ số hàng trăm là 7, chữ số hàng đơn vị là 0, chữ số hàng chục lớn hơn 2 và nhỏ hơn 4. Số đó là:",["720","730","740","703"],1,"Chữ số hàng chục phải là 3; số cần tìm là 730.","VD"],
        ["Số liền sau của 689 là:",["688","690","691","699"],1,"Số liền sau hơn số đã cho 1 đơn vị: 689 + 1 = 690.","VD"],
        ["Dãy số tăng đều 10 đơn vị: 325, 335, 345, ... Số tiếp theo là:",["346","350","355","365"],2,"Mỗi số hơn số đứng trước 10 đơn vị: 345 + 10 = 355.","VD"],
        ["Một số có ba chữ số lớn hơn 680 và bé hơn 690. Chữ số hàng đơn vị là 4. Số đó là:",["684","694","674","640"],0,"Trong khoảng từ 680 đến 690, số có hàng đơn vị 4 là 684.","VD"],
        ["Ba bạn viết ba số: An viết 509, Bình viết 590, Chi viết 905. Bạn viết số có 9 trăm là:",["An","Bình","Chi","An và Bình"],2,"905 có chữ số 9 ở hàng trăm, tức 9 trăm.","VD"],

        ["Tìm số có ba chữ số khác nhau, lớn hơn 700, bé hơn 800 và có hàng chục là 0. Số nào phù hợp?",["708","807","780","700"],0,"708 có hàng trăm 7, hàng chục 0, hàng đơn vị 8; ba chữ số khác nhau.","VD"],
        ["Từ các chữ số 0, 3, 6, mỗi chữ số dùng một lần, số bé nhất có ba chữ số là:",["036","306","360","603"],1,"Hàng trăm không thể là 0; chọn 3, sau đó 0 rồi 6 được 306.","VD"],
        ["Từ các chữ số 1, 5, 8, mỗi chữ số dùng một lần, hiệu giữa số lớn nhất và số bé nhất là:",["693","639","729","738"],0,"Số lớn nhất 851; số bé nhất 158; hiệu 851 − 158 = 693.","VD"],
        ["Một số khi thêm 1 đơn vị thì được 1 000. Số đó là:",["999","998","990","900"],0,"Số liền trước của 1 000 là 999.","VD"],
        ["Trong các số 707, 770, 707, 700, số lớn nhất và số bé nhất lần lượt là:",["770 và 700","707 và 700","770 và 707","700 và 770"],0,"770 lớn nhất; 700 bé nhất.","VD"],
        ["Một số gồm 8 trăm và một số đơn vị. Số đó lớn hơn 800 nhưng bé hơn 810. Có bao nhiêu khả năng?",["8","9","10","11"],1,"Các số phù hợp là 801 đến 809, có 9 số (không kể 800 và 810).","VD"],
        ["Sắp xếp các số 609, 690, 906, 960 theo thứ tự từ bé đến lớn:",["609, 690, 906, 960","690, 609, 906, 960","960, 906, 690, 609","609, 906, 690, 960"],0,"So sánh hàng trăm trước, rồi hàng chục: 609 < 690 < 906 < 960.","VD"],
        ["Một số có ba chữ số. Nếu đổi chỗ chữ số hàng trăm và hàng đơn vị của số 316 thì được số nào?",["613","631","136","361"],0,"Đổi vị trí 3 và 6, giữ nguyên hàng chục 1, ta được 613.","VD"],
        ["Tìm số lớn nhất có ba chữ số mà tổng ba chữ số bằng 10:",["910","901","820","811"],0,"Để số lớn nhất, chọn hàng trăm 9; hai chữ số còn lại có tổng 1. Chọn hàng chục 1, hàng đơn vị 0 được 910.","VD"],
        ["Số nào lớn hơn 598 đúng 1 đơn vị?",["597","598","599","600"],3,"598 + 1 = 599. Phương án đúng là 599.","VD"]
      ]
    }
  ]
};