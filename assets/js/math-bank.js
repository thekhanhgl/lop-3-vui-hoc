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
        ["Một số có ba chữ số. Hàng trăm là 5, hàng chục hơn hàng đơn vị 2 đơn vị; hàng đơn vị là 3. Số đó là:",["523","553","532","535"],1,"Hàng đơn vị là 3, hàng chục là 3 + 2 = 5; hàng trăm là 5. Số đó là 553. Phương án đúng là 553.","VD"],
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
        ["Số nào lớn hơn 598 đúng 1 đơn vị?",["597","598","599","600"],2,"598 + 1 = 599. Phương án đúng là 599.","VD"]
      ]
    },
    {
      id:"math-bai-02",
      lessonNo:2,
      book:"Tập 1",
      title:"Bài 2. Ôn tập phép cộng, phép trừ trong phạm vi 1 000",
      icon:"➕",
      summary:{
        goals:[
          "Thực hiện được phép cộng, phép trừ các số trong phạm vi 1 000.",
          "Biết đặt tính rồi tính, chú ý thẳng cột các hàng.",
          "Vận dụng phép cộng, phép trừ để giải bài toán thực tế.",
          "Biết kiểm tra kết quả bằng phép tính ngược hoặc ước lượng hợp lí."
        ],
        knowledge:[
          {title:"Đặt tính cộng",detail:"Viết các chữ số cùng hàng thẳng cột: đơn vị dưới đơn vị, chục dưới chục, trăm dưới trăm. Cộng từ phải sang trái; nếu tổng một hàng từ 10 trở lên thì nhớ 1 sang hàng liền trước."},
          {title:"Đặt tính trừ",detail:"Viết các chữ số cùng hàng thẳng cột. Trừ từ phải sang trái; nếu chữ số ở hàng trên nhỏ hơn chữ số ở hàng dưới thì mượn 1 ở hàng liền trước."},
          {title:"Tính nhẩm",detail:"Có thể tách số thành trăm, chục, đơn vị hoặc cộng/trừ số tròn chục, tròn trăm trước rồi điều chỉnh."},
          {title:"Kiểm tra phép cộng",detail:"Lấy tổng trừ đi một số hạng, nếu được số hạng còn lại thì phép cộng có thể đúng."},
          {title:"Kiểm tra phép trừ",detail:"Lấy hiệu cộng với số trừ, nếu được số bị trừ thì phép trừ có thể đúng."}
        ],
        examples:[
          {question:"Tính 268 + 157.",answer:"425",explain:"268 + 100 = 368; 368 + 57 = 425. Khi đặt tính, cộng lần lượt từ hàng đơn vị."},
          {question:"Tính 602 − 278.",answer:"324",explain:"602 − 200 = 402; 402 − 78 = 324. Có thể kiểm tra: 324 + 278 = 602."}
        ],
        commonMistakes:[
          "Đặt các chữ số không thẳng cột theo hàng.",
          "Quên nhớ khi cộng hoặc quên giảm 1 ở hàng vừa mượn khi trừ.",
          "Không chú ý chữ số 0 ở giữa số, ví dụ 602.",
          "Chỉ tính một bước trong bài toán có hai bước tính."
        ],
        tip:"Sau khi tính, hãy kiểm tra bằng phép tính ngược: cộng thì thử bằng trừ; trừ thì thử bằng cộng."
      },
      questions:[
        ["235 + 142 = ?",["367","377","387","397"],1,"235 + 142 = 377.","NB"],
        ["600 − 275 = ?",["315","325","335","345"],1,"600 − 275 = 325.","NB"],
        ["408 + 96 = ?",["494","504","514","524"],1,"408 + 96 = 504.","NB"],
        ["721 − 308 = ?",["403","413","423","433"],1,"721 − 308 = 413.","NB"],
        ["356 + 0 = ?",["0","350","356","366"],2,"Cộng với 0 thì giữ nguyên số đó.","NB"],
        ["900 − 0 = ?",["0","90","900","910"],2,"Trừ đi 0 thì giữ nguyên số bị trừ.","NB"],
        ["430 + 50 = ?",["435","470","480","530"],2,"430 + 50 = 480.","NB"],
        ["670 − 40 = ?",["620","630","640","660"],1,"670 − 40 = 630.","NB"],
        ["125 + 200 = ?",["225","305","325","425"],2,"125 + 200 = 325.","NB"],
        ["999 − 1 = ?",["988","989","998","1 000"],2,"999 − 1 = 998.","NB"],

        ["248 + 137 = ?",["375","385","395","405"],1,"248 + 137 = 385.","TH"],
        ["503 − 276 = ?",["217","227","237","327"],1,"503 − 276 = 227.","TH"],
        ["365 + □ = 500. Số thích hợp điền vào ô trống là:",["125","135","145","155"],1,"500 − 365 = 135.","TH"],
        ["□ − 125 = 375. Số thích hợp điền vào ô trống là:",["400","450","500","525"],2,"375 + 125 = 500.","TH"],
        ["240 + 160 = ?",["300","390","400","410"],2,"240 + 160 = 400.","TH"],
        ["800 − 345 = ?",["445","455","465","555"],1,"800 − 345 = 455.","TH"],
        ["478 + □ = 1 000. Số thích hợp là:",["512","522","532","542"],1,"1 000 − 478 = 522.","TH"],
        ["1 000 − □ = 685. Số thích hợp là:",["305","315","325","415"],1,"1 000 − 685 = 315.","TH"],
        ["Phép tính nào có kết quả bằng 350?",["600 − 250","600 − 350","250 + 150","450 − 50"],0,"600 − 250 = 350.","TH"],
        ["Để kiểm tra phép tính 725 − 318 = 407, ta thực hiện:",["725 + 407","407 + 318","725 − 407","318 − 407"],1,"Lấy hiệu cộng số trừ: 407 + 318 = 725.","TH"],

        ["Lớp 3A quyên góp 245 quyển vở, lớp 3B quyên góp 187 quyển. Cả hai lớp quyên góp được:",["422 quyển","432 quyển","442 quyển","452 quyển"],1,"245 + 187 = 432 quyển.","VD"],
        ["Thư viện có 650 quyển truyện, học sinh mượn 275 quyển. Thư viện còn:",["365 quyển","375 quyển","385 quyển","425 quyển"],1,"650 − 275 = 375 quyển.","VD"],
        ["Mỗi thùng có 125 chiếc bút. Ba thùng có tất cả:",["350 chiếc","365 chiếc","375 chiếc","385 chiếc"],2,"125 + 125 + 125 = 375 chiếc.","VD"],
        ["Trên xe có 48 hành khách. Đến bến, 17 người xuống và 12 người lên. Trên xe lúc này có:",["41 người","42 người","43 người","45 người"],2,"48 − 17 + 12 = 43 hành khách.","VD"],
        ["Một cửa hàng có 405 kg gạo, nhập thêm một số gạo để được 700 kg. Cửa hàng đã nhập thêm:",["285 kg","295 kg","305 kg","315 kg"],1,"700 − 405 = 295 kg.","VD"],
        ["Hiệu của 823 và 476 là:",["337","347","357","367"],1,"823 − 476 = 347.","VD"],
        ["Kho có 900 quả trứng. Buổi sáng bán 385 quả, buổi chiều bán 276 quả. Kho còn:",["229 quả","239 quả","249 quả","261 quả"],1,"900 − 385 − 276 = 239 quả.","VD"],
        ["Hai lớp trồng được 640 cây. Lớp thứ nhất trồng 285 cây. Lớp thứ hai trồng:",["345 cây","355 cây","365 cây","375 cây"],1,"640 − 285 = 355 cây.","VD"],
        ["Ba tổ thu gom giấy vụn lần lượt được 128 kg, 136 kg và 145 kg. Cả ba tổ thu gom được:",["399 kg","409 kg","419 kg","429 kg"],1,"128 + 136 + 145 = 409 kg.","VD"],
        ["Một cửa hàng có 720 kg gạo. Buổi sáng bán 185 kg, buổi chiều bán 236 kg. Cửa hàng còn:",["289 kg","299 kg","309 kg","319 kg"],1,"720 − 185 − 236 = 299 kg.","VD"],
        ["Một số là 420. Tăng số đó thêm 175 rồi giảm đi 89, ta được:",["496","506","516","526"],1,"420 + 175 − 89 = 506.","VD"],
        ["Tính 398 + 207 − 155.",["440","450","460","470"],1,"398 + 207 = 605; 605 − 155 = 450.","VD"],
        ["Tính 1 000 − 498 + 127.",["619","629","639","649"],1,"1 000 − 498 = 502; 502 + 127 = 629.","VD"],
        ["Cách tính nhanh 532 − 198 là:",["532 − 200 − 2","532 − 200 + 2","532 − 100 + 98","532 − 190 − 8"],1,"198 = 200 − 2 nên 532 − 198 = 532 − 200 + 2 = 334.","VD"],
        ["Tổng của số lớn nhất có ba chữ số và 1 là:",["999","1 000","1 001","998"],1,"Số lớn nhất có ba chữ số là 999; 999 + 1 = 1 000.","VD"],
        ["Một cửa hàng có 835 chiếc khẩu trang, đã bán 268 chiếc. Sau đó nhập thêm 125 chiếc. Cửa hàng có:",["682 chiếc","692 chiếc","702 chiếc","712 chiếc"],1,"835 − 268 + 125 = 692 chiếc.","VD"],
        ["Tổng hai số là 750. Nếu một số là 368 thì số còn lại là:",["372","382","392","402"],1,"750 − 368 = 382.","VD"],
        ["Một đội phải trồng 1 000 cây. Buổi sáng trồng 325 cây, buổi chiều trồng 418 cây. Đội còn phải trồng:",["247 cây","257 cây","267 cây","277 cây"],1,"1 000 − 325 − 418 = 257 cây.","VD"],
        ["Một cửa hàng có 560 lít dầu, bán lần thứ nhất 175 lít và lần thứ hai 185 lít. Số dầu còn lại là:",["190 lít","200 lít","210 lít","220 lít"],1,"560 − 175 − 185 = 200 lít.","VD"],
        ["Một trường có 690 quyển sách ở thư viện. Nhà trường tặng học sinh 245 quyển rồi được bổ sung thêm 180 quyển. Thư viện hiện có:",["615 quyển","625 quyển","635 quyển","645 quyển"],1,"690 − 245 + 180 = 625 quyển.","VD"]
      ]
    }
  ]
};