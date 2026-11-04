/* Mở rộng ngân hàng Toán 3 từ Bài 3 đến Bài 81.
   Câu hỏi được tạo theo các mẫu biến đổi số liệu có kiểm soát; mỗi bài có 40 câu
   (10 NB, 10 TH, 20 VD). Nội dung cần được giáo viên rà soát trước khi phát hành. */
(function(){
  const lessons = [
    [3,"Tìm thành phần trong phép cộng, phép trừ","unknown",0],
    [4,"Ôn tập bảng nhân 2; 5, bảng chia 2; 5","table",2],
    [5,"Bảng nhân 3, bảng chia 3","table",3],
    [6,"Bảng nhân 4, bảng chia 4","table",4],
    [7,"Ôn tập hình học và đo lường","geometry",0],
    [8,"Luyện tập chung","review1",0],
    [9,"Bảng nhân 6, bảng chia 6","table",6],
    [10,"Bảng nhân 7, bảng chia 7","table",7],
    [11,"Bảng nhân 8, bảng chia 8","table",8],
    [12,"Bảng nhân 9, bảng chia 9","table",9],
    [13,"Tìm thành phần trong phép nhân, phép chia","unknownmul",0],
    [14,"Một phần mấy","fraction",0],
    [15,"Luyện tập chung","review1",1],
    [16,"Điểm ở giữa, trung điểm của đoạn thẳng","midpoint",0],
    [17,"Hình tròn. Tâm, bán kính, đường kính của hình tròn","circle",0],
    [18,"Góc, góc vuông, góc không vuông","angle",0],
    [19,"Hình tam giác, hình tứ giác. Hình chữ nhật, hình vuông","polygon",0],
    [20,"Thực hành vẽ góc vuông, vẽ đường tròn, hình vuông, hình chữ nhật và vẽ trang trí","draw",0],
    [21,"Khối lập phương, khối hộp chữ nhật","solid",0],
    [22,"Luyện tập chung","review1",2],
    [23,"Nhân số có hai chữ số với số có một chữ số","mult2",0],
    [24,"Gấp một số lên một số lần","timesmore",0],
    [25,"Phép chia hết, phép chia có dư","division-remainder",0],
    [26,"Chia số có hai chữ số cho số có một chữ số","div2",0],
    [27,"Giảm một số đi một số lần","divideby",0],
    [28,"Bài toán giải bằng hai bước tính","twostep",0],
    [29,"Luyện tập chung","review1",3],
    [30,"Mi-li-mét","unit-mm",0],
    [31,"Gam","unit-g",0],
    [32,"Mi-li-lít","unit-ml",0],
    [33,"Nhiệt độ. Đơn vị đo nhiệt độ","temperature",0],
    [34,"Thực hành và trải nghiệm với các đơn vị mi-li-mét, gam, mi-li-mét, độ C","unit-mix",0],
    [35,"Luyện tập chung","review1",4],
    [36,"Nhân số có ba chữ số với số có một chữ số","mult3",0],
    [37,"Chia số có ba chữ số cho số có một chữ số","div3",0],
    [38,"Biểu thức số. Tính giá trị của biểu thức số","expression",0],
    [39,"So sánh số lớn gấp mấy lần số bé","timesmore",1],
    [40,"Luyện tập chung","review1",5],
    [41,"Ôn tập phép nhân, phép chia trong phạm vi 100, 1 000","review-mul",0],
    [42,"Ôn tập biểu thức số","expression",1],
    [43,"Ôn tập hình học và đo lường","review-geometry",0],
    [44,"Ôn tập chung","review1",6],
    [45,"Các số có bốn chữ số. Số 10 000","number4",0],
    [46,"So sánh các số trong phạm vi 10 000","compare4",0],
    [47,"Làm quen với chữ số La Mã","roman",0],
    [48,"Làm tròn số đến hàng chục, hàng trăm","round4",0],
    [49,"Luyện tập chung","review2",0],
    [50,"Chu vi hình tam giác, hình tứ giác, hình chữ nhật, hình vuông","perimeter",0],
    [51,"Diện tích của một hình. Xăng-ti-mét vuông","area-unit",0],
    [52,"Diện tích hình chữ nhật, diện tích hình vuông","area",0],
    [53,"Luyện tập chung","review2",1],
    [54,"Phép cộng trong phạm vi 10 000","add4",0],
    [55,"Phép trừ trong phạm vi 10 000","sub4",0],
    [56,"Nhân số có bốn chữ số với số có một chữ số","mult4",0],
    [57,"Chia số có bốn chữ số cho số có một chữ số","div4",0],
    [58,"Luyện tập chung","review2",2],
    [59,"Các số có năm chữ số. Số 100 000","number5",0],
    [60,"So sánh các số trong phạm vi 100 000","compare5",0],
    [61,"Làm tròn số đến hàng nghìn, hàng chục nghìn","round5",0],
    [62,"Luyện tập chung","review2",3],
    [63,"Phép cộng trong phạm vi 100 000","add5",0],
    [64,"Phép trừ trong phạm vi 100 000","sub5",0],
    [65,"Luyện tập chung","review2",4],
    [66,"Xem đồng hồ. Tháng – năm","time",0],
    [67,"Thực hành xem đồng hồ, xem lịch","calendar",0],
    [68,"Tiền Việt Nam","money",0],
    [69,"Luyện tập chung","review2",5],
    [70,"Nhân số có năm chữ số với số có một chữ số","mult5",0],
    [71,"Chia số có năm chữ số cho số có một chữ số","div5",0],
    [72,"Luyện tập chung","review2",6],
    [73,"Thu thập, phân loại, ghi chép số liệu. Bảng số liệu","statistics",0],
    [74,"Khả năng xảy ra của một sự kiện","probability",0],
    [75,"Thực hành và trải nghiệm thu thập, phân loại, ghi chép số liệu, đọc bảng số liệu","stats-practice",0],
    [76,"Ôn tập các số trong phạm vi 10 000, 100 000","review-number",0],
    [77,"Ôn tập phép cộng, phép trừ trong phạm vi 100 000","review-addsub",0],
    [78,"Ôn tập phép nhân, phép chia trong phạm vi 100 000","review-mul5",0],
    [79,"Ôn tập hình học và đo lường","review-geometry2",0],
    [80,"Ôn tập bảng số liệu, khả năng xảy ra của một sự kiện","review-stats",0],
    [81,"Ôn tập chung","review-final",0]
  ];
  const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g," ");
  const uniq=a=>[...new Set(a.map(String))];
  function mc(q,correct,wrong,ex,level){
    const answer=String(correct), opts=uniq([answer,...wrong.map(String)]).slice(0,4);
    let bump=0; while(opts.length<4){opts.push(String(Number(answer)+(++bump)*7));}
    const shift=(level.charCodeAt(0)+q.length)%4;
    const rotated=opts.slice(shift).concat(opts.slice(0,shift));
    return [q,rotated,rotated.indexOf(answer),ex,level];
  }
  function build(m,i,level){
    const n=i+1, a=3+(n*7)%37, b=2+(n*3)%9, c=a*b, d=11+(n*13)%88;
    const x=120+(n*37)%780, y=15+(n*19)%280;
    const big=1200+(n*173)%7800, digit=2+(n*5)%8;
    let q,ans,w,ex;
    switch(m[2]){
      case "unknown":
        if(n%4===0){q="□ + "+a+" = "+(a+b)+". Số cần điền là:";ans=b;ex=ans+" + "+a+" = "+(a+b)+". Lấy tổng trừ số hạng đã biết.";}
        else if(n%4===1){q=a+" + □ = "+(a+b)+". Số cần điền là:";ans=b;ex=(a+b)+" − "+a+" = "+b+".";}
        else if(n%4===2){q="□ − "+a+" = "+b+". Số cần điền là:";ans=a+b;ex=b+" + "+a+" = "+(a+b)+".";}
        else {q=(a+b)+" − □ = "+a+". Số cần điền là:";ans=b;ex=(a+b)+" − "+a+" = "+b+".";}
        w=[ans+1,Math.max(0,ans-1),ans+10]; break;
      case "unknownmul":
        if(n%2){q="□ × "+b+" = "+c+". Số cần điền là:";ans=a;ex=c+" : "+b+" = "+a+".";}
        else {q=c+" : □ = "+a+". Số cần điền là:";ans=b;ex=c+" : "+a+" = "+b+".";}
        w=[ans+1,Math.max(1,ans-1),ans+2]; break;
      case "table":{
        const k=m[3]===2?(n%2?2:5):m[3], v=2+(n*7)%10, product=k*v;
        if(n%2){q=k+" × "+v+" = ?";ans=product;ex=k+" groups of "+v+" equal "+product+".";}
        else {q=product+" : "+k+" = ?";ans=v;ex=product+" : "+k+" = "+v+".";}
        w=[ans+ k,Math.max(0,ans-1),ans+2*k]; break;
      }
      case "fraction":{
        const den=2+(n%8), unit=den*(2+(n%9));
        q="Một phần "+den+" của "+unit+" là:";ans=unit/den;ex=unit+" : "+den+" = "+ans+". Chia số thành "+den+" phần bằng nhau.";
        w=[ans+1,ans+den,Math.max(0,ans-1)];break;
      }
      case "mult2": case "mult3": case "mult4": case "mult5":{
        const max=m[2]==="mult2"?89:m[2]==="mult3"?999:m[2]==="mult4"?9999:99999;
        const left=m[2]==="mult2"?11+(n*3)%18:m[2]==="mult3"?101+(n*3)%10:m[2]==="mult4"?1001+(n*7)%100:10001+(n*71)%1000;
        const right=m[2]==="mult2"?2+(n%3):2+(n*3)%8; ans=left*right; q=fmt(left)+" × "+right+" = ?";ex=fmt(left)+" × "+right+" = "+fmt(ans)+". Nhân lần lượt theo từng hàng, chú ý nhớ.";
        w=[ans+right,ans-right,ans+10];break;
      }
      case "div2": case "div3": case "div4": case "div5":{
        const base=m[2]==="div2"?12+(n*7)%20:m[2]==="div3"?102+(n*3)%10:m[2]==="div4"?1002+(n*7)%100:10002+(n*71)%1000;
        const divisor=2+(n*3)%8, dividend=base*divisor;ans=base;q=fmt(dividend)+" : "+divisor+" = ?";ex=fmt(dividend)+" chia "+divisor+" được "+fmt(base)+". Có thể nhân thương với số chia để thử lại.";
        w=[ans+1,Math.max(0,ans-1),ans+divisor];break;
      }
      case "division-remainder":{
        const divisor=2+(n%7), quotient=3+(n*5)%20, rem=n%(divisor);
        const dividend=quotient*divisor+rem;
        q=fmt(dividend)+" : "+divisor+" có thương và số dư là:";ans=quotient+" dư "+rem;
        w=[(quotient+1)+" dư "+rem,quotient+" dư "+((rem+1)%divisor), (quotient-1)+" dư "+rem];
        return mc(q,ans,w,fmt(dividend)+" = "+divisor+" × "+quotient+" + "+rem+". Số dư phải bé hơn số chia.","TH");
      }
      case "timesmore": case "divideby":{
        const factor=2+(n%8), small=3+(n*5)%20;ans=small*factor;
        if(m[2]==="timesmore"){q="Số lớn gấp "+factor+" lần số bé "+small+". Số lớn là:";ex=small+" × "+factor+" = "+ans+".";}
        else {q="Giảm "+ans+" đi "+factor+" lần được:";ans=small;ex=fmt(ans*factor)+" : "+factor+" = "+ans+".";}
        w=[ans+factor,Math.max(0,ans-factor),ans+2];break;
      }
      case "multtable": break;
      case "number4": case "number5": case "compare4": case "compare5":{
        const limit=m[2].includes("5")?100000:10000, value=1000+(n*719)% (limit-1000);
        if(m[2].startsWith("compare")){const v2=value+(n%2?37:-43);q="So sánh hai số "+fmt(value)+" và "+fmt(v2)+": chọn kết luận đúng.";ans=value>v2?fmt(value)+" > "+fmt(v2):fmt(value)+" < "+fmt(v2);w=[fmt(value)+" = "+fmt(v2),fmt(v2)+" > "+fmt(value),fmt(value)+" > "+fmt(v2)];}
        else {const place=Math.pow(10,n%4), val=Math.floor(value/place)%10*place;q="Trong số "+fmt(value)+", giá trị chữ số ở hàng "+(["đơn vị","chục","trăm","nghìn"][n%4])+" được xác định như thế nào?";ans=fmt(val);w=[fmt(val+place),fmt(Math.max(0,val-place)),fmt(val+10*place)];}
        ex="Xác định hàng của chữ số rồi đọc giá trị theo hàng.";break;
      }
      case "round4": case "round5":{
        const step=m[2]==="round4"?(n%2?10:100):(n%2?1000:10000), value=m[2]==="round4"?2456+(n*137)%7000:12456+(n*1379)%75000;
        ans=Math.round(value/step)*step;q="Làm tròn số "+fmt(value)+" đến hàng "+(step===10?"chục":step===100?"trăm":step===1000?"nghìn":"chục nghìn")+":";
        w=[ans+step,Math.max(0,ans-step),ans+2*step];ex="Xét chữ số ngay bên phải hàng cần làm tròn; từ 5 trở lên thì tăng 1 ở hàng đó.";
        break;
      }
      case "roman":{
        const v=1+(n%20), roman=v<=3?"I".repeat(v):v===4?"IV":v===5?"V":v<9?"V"+"I".repeat(v-5):v===9?"IX":v===10?"X":v<14?"X"+"I".repeat(v-10):v===14?"XIV":v===15?"XV":v<19?"XV"+"I".repeat(v-15):v===19?"XIX":"XX";
        q="Số La Mã "+roman+" biểu thị số nào?";ans=v;w=[v+1,Math.max(1,v-1),v+2];ex="Đọc các kí hiệu I, V, X theo quy tắc ghép số La Mã đã học.";break;
      }
      case "perimeter":{
        const l=4+n%12, h=3+(n*3)%9; q="Hình chữ nhật có chiều dài "+l+" cm, chiều rộng "+h+" cm. Chu vi là:";ans=2*(l+h);w=[l*h,l+h,2*l+h];ex="Chu vi = (dài + rộng) × 2 = ("+l+" + "+h+") × 2 = "+ans+" cm.";break;
      }
      case "area": case "area-unit":{
        const l=3+n%12,h=2+(n*3)%10;q="Hình chữ nhật có chiều dài "+l+" cm, chiều rộng "+h+" cm. Diện tích là:";ans=l*h;w=[2*(l+h),l+h,ans+l];ex="Diện tích = chiều dài × chiều rộng = "+l+" × "+h+" = "+ans+" cm².";break;
      }
      case "add4": case "add5": case "sub4": case "sub5":{
        const lim=m[2].includes("5")?70000:7000, p=1000+(n*317)%lim, r=200+(n*139)%Math.max(300,lim/3);
        const sub=m[2].startsWith("sub");let A=p+r,B=p;
        if(sub){A=Math.max(p,r)+Math.min(p,r);B=Math.min(p,r);ans=A-B;q=fmt(A)+" − "+fmt(B)+" = ?";}else{ans=A+B;q=fmt(A)+" + "+fmt(B)+" = ?";}
        w=[ans+10,Math.max(0,ans-10),ans+100];ex="Đặt tính thẳng cột theo từng hàng rồi thực hiện từ phải sang trái.";break;
      }
      case "midpoint":{
        const length=2*(2+n%15);q="Đoạn thẳng AB dài "+length+" cm. M là trung điểm AB. Độ dài AM là:";ans=length/2;w=[length,length/2+1,Math.max(1,length/2-1)];ex="Trung điểm chia đoạn thẳng thành hai đoạn bằng nhau: "+length+" : 2 = "+ans+" cm.";break;
      }
      case "circle":{
        const opts=["tâm","bán kính","đường kính","dây cung"];q=n%2?"Đoạn thẳng nối tâm hình tròn với một điểm trên đường tròn gọi là gì?":"Đoạn thẳng đi qua tâm và có hai đầu mút trên đường tròn gọi là gì?";
        ans=n%2?"bán kính":"đường kính";w=opts.filter(v=>v!==ans).slice(0,3);ex=n%2?"Bán kính nối tâm với một điểm trên đường tròn.":"Đường kính đi qua tâm và bằng hai lần bán kính.";return mc(q,ans,w,ex,level);
      }
      case "angle":{
        const opts=["góc vuông","góc nhọn","góc tù","góc bẹt"];q="Góc có dạng như góc ở một góc viên gạch hình vuông là:";ans="góc vuông";w=opts.filter(v=>v!==ans);ex="Góc vuông có dạng góc của hình vuông, hình chữ nhật.";return mc(q,ans,w,ex,level);
      }
      case "polygon":{
        const opts=["3 cạnh","4 cạnh","5 cạnh","6 cạnh"];q="Hình tứ giác có bao nhiêu cạnh?";ans="4 cạnh";w=opts.filter(v=>v!==ans);ex="Tứ giác là hình có bốn cạnh và bốn đỉnh.";return mc(q,ans,w,ex,level);
      }
      case "draw":{
        const opts=["thước thẳng và ê ke","compa","cân","nhiệt kế"];q="Dụng cụ phù hợp để kiểm tra và vẽ góc vuông là:";ans="thước thẳng và ê ke";w=opts.filter(v=>v!==ans);ex="Ê ke giúp nhận biết và vẽ góc vuông.";return mc(q,ans,w,ex,level);
      }
      case "solid":{
        const opts=["6 mặt vuông bằng nhau","6 mặt chữ nhật khác nhau","4 mặt tam giác","2 mặt tròn"];q="Khối lập phương có đặc điểm nào?";ans="6 mặt vuông bằng nhau";w=opts.filter(v=>v!==ans);ex="Khối lập phương có 6 mặt đều là hình vuông bằng nhau.";return mc(q,ans,w,ex,level);
      }
      case "unit-mm":{
        const cm=2+n%15;q=cm+" cm bằng bao nhiêu mi-li-mét?";ans=cm*10;w=[cm*100,cm,cm*10+5];ex="1 cm = 10 mm nên "+cm+" cm = "+ans+" mm.";break;
      }
      case "unit-g":{
        const g=100+(n*25)%900;q="Khối lượng "+g+" g được viết bằng số gam là:";ans=g;w=[g*10,g+100,g-10];ex="Đơn vị gam dùng để đo khối lượng; giữ nguyên số đo khi cùng đơn vị gam.";break;
      }
      case "unit-ml":{
        const ml=100+(n*50)%900;q="Bình có "+ml+" ml nước. Thể tích nước là:";ans=ml;w=[ml+100,ml-50,ml*2];ex="Mi-li-lít (ml) là đơn vị đo dung tích.";break;
      }
      case "temperature":{
        const t=15+n%20;q="Nhiệt độ buổi sáng là "+t+"°C, buổi trưa tăng 5°C. Buổi trưa là:";ans=t+5;w=[t-5,t+10,t+4];ex=t+" + 5 = "+(t+5)+"°C.";break;
      }
      case "twostep":{
        const first=25+n%50, second=10+n%20, third=5+n%10;ans=first+second-third;
        q="Có "+first+" quyển vở, được tặng thêm "+second+" quyển rồi dùng "+third+" quyển. Còn lại:";w=[ans+third,ans-2,ans+2];ex=first+" + "+second+" − "+third+" = "+ans+" quyển.";break;
      }
      case "expression":{
        const p=2+n%9, r=3+(n*2)%9, z=4+n%7;ans=p*r+z;q=p+" × "+r+" + "+z+" = ?";w=[p*(r+z),p*r-z,p+r*z];ex="Thực hiện phép nhân trước: "+p+" × "+r+" = "+p*r+"; sau đó cộng "+z+" được "+ans+".";break;
      }
      case "time":{
        const hour=6+n%12, minute=(n%4)*15;q="Đồng hồ chỉ "+hour+" giờ "+(minute?minute+" phút":"đúng")+". Sau 30 phút là:";let total=hour*60+minute+30;ans=Math.floor(total/60)+":"+String(total%60).padStart(2,"0");w=[hour+":"+String(minute).padStart(2,"0"),(hour+1)+":00",(hour+2)+":30"];ex="Cộng thêm 30 phút và đổi sang giờ, phút khi đủ 60 phút.";return mc(q,ans,w,ex,level);
      }
      case "calendar":{
        const days=[28,30,31][n%3];q="Một tháng có "+days+" ngày. Tháng đó có thể là:";ans=days===28?"tháng 2 của năm không nhuận":days===30?"tháng 4, 6, 9 hoặc 11":"tháng 1, 3, 5, 7, 8, 10 hoặc 12";w=["tháng 2 luôn có 30 ngày","tháng nào cũng có "+days+" ngày","không có tháng nào"];return mc(q,ans,w,"Số ngày trong các tháng không giống nhau; cần xem lịch để xác định.",level);
      }
      case "money":{
        const a=10000+(n%5)*5000,b=5000+(n%4)*5000;q="Mua một món đồ giá "+fmt(a)+" đồng và trả thêm "+fmt(b)+" đồng. Tổng số tiền là:";ans=a+b;w=[a-b,a+b+5000,a+2*b];ex=fmt(a)+" + "+fmt(b)+" = "+fmt(ans)+" đồng.";break;
      }
      case "statistics": case "stats-practice":{
        const vals=[3+n%7,5+(n*2)%8,2+(n*3)%6], max=Math.max(...vals);q="Bảng ghi số sách ba tổ quyên góp lần lượt là "+vals.join(", ")+" quyển. Tổ có số sách nhiều nhất là tổ:";ans="Tổ "+(vals.indexOf(max)+1);w=["Tổ "+((vals.indexOf(max)+1)%3+1),"Tổ "+((vals.indexOf(max)+2)%3+1),"Cả ba tổ bằng nhau"];ex="So sánh các số liệu, số lớn nhất là "+max+".";return mc(q,ans,w,ex,level);
      }
      case "probability":{
        const opts=["chắc chắn","có thể","không thể","luôn luôn"];q="Trong hộp chỉ có các viên bi màu đỏ. Lấy ngẫu nhiên một viên bi, sự kiện lấy được bi đỏ là:";ans="chắc chắn";w=opts.filter(v=>v!==ans);ex="Vì trong hộp tất cả viên bi đều màu đỏ nên lấy được bi đỏ là sự kiện chắc chắn.";return mc(q,ans,w,ex,level);
      }
      case "review1": case "review2": case "review-mul": case "review-geometry": case "review-geometry2": case "review-number": case "review-addsub": case "review-mul5": case "review-stats": case "review-final":{
        const family=m[2], choice=n%4;
        if(family==="review-geometry"||family==="review-geometry2"){q="Hình vuông có cạnh 6 cm. Chu vi hình vuông là:";ans=24;w=[12,18,36];ex="Chu vi hình vuông = 4 × cạnh = 4 × 6 = 24 cm.";}
        else if(family==="review-stats"){q="Một bảng có số liệu 4, 7, 5. Số lớn nhất là:";ans=7;w=[4,5,6];ex="So sánh ba số liệu: 7 là số lớn nhất.";}
        else if(family==="review-number"){q="Số liền sau của 9 999 là:";ans=10000;w=[9998,9990,10001];ex="Số liền sau hơn số đã cho 1 đơn vị.";}
        else if(family==="review-addsub"){q="25 000 + 15 000 = ?";ans=40000;w=[30000,41000,45000];ex="25 000 + 15 000 = 40 000.";}
        else if(family==="review-mul5"){q="12 000 × 3 = ?";ans=36000;w=[24000,35000,3600];ex="12 000 × 3 = 36 000.";}
        else if(family==="review-mul"){q="8 × 7 = ?";ans=56;w=[54,48,64];ex="8 × 7 = 56.";}
        else {q="345 + 120 = ?";ans=465;w=[455,475,565];ex="345 + 120 = 465.";}
        break;
      }
      case "unit-mix":{
        q="1 cm bằng bao nhiêu mi-li-mét?";ans=10;w=[100,1,5];ex="1 cm = 10 mm.";break;
      }
      default:
        q="Tính "+a+" + "+b+" = ?";ans=a+b;w=[ans+1,ans-1,ans+10];ex=a+" + "+b+" = "+ans+".";break;
    }
    return mc(q,ans,w,ex,level);
  }
  const descriptions={
    unknown:["Tìm số hạng chưa biết bằng cách lấy tổng trừ số hạng đã biết; tìm số bị trừ bằng tổng của hiệu và số trừ; tìm số trừ bằng số bị trừ trừ hiệu.","Khi tìm thành phần chưa biết, hãy xác định vai trò của số đã biết trong phép tính."],
    table:["Phép nhân là phép cộng các số hạng bằng nhau; phép chia là phép tính ngược của phép nhân.","Học thuộc bảng nhân, bảng chia và kiểm tra phép chia bằng phép nhân."],
    fraction:["Chia một nhóm thành các phần bằng nhau; một phần mấy được xác định bằng số phần bằng nhau.","Muốn tìm một phần mấy của một số, lấy số đó chia cho số phần."],
    geometry:["Nhận biết các yếu tố hình học, đặc điểm hình phẳng và hình khối qua quan sát, mô tả và thực hành.","Quan sát số cạnh, đỉnh, góc và các yếu tố đặc trưng của hình."],
    perimeter:["Chu vi là độ dài đường bao quanh hình; tính bằng tổng độ dài các cạnh.","Hình chữ nhật: (dài + rộng) × 2; hình vuông: cạnh × 4."],
    area:["Diện tích biểu thị phần mặt phẳng được hình chiếm; dùng ô vuông đơn vị để đo.","Hình chữ nhật: dài × rộng; hình vuông: cạnh × cạnh."],
    number4:["Số có bốn chữ số gồm hàng nghìn, trăm, chục, đơn vị; 10 000 là số có năm chữ số.","Đọc, viết và phân tích số theo từng hàng."],
    number5:["Số có năm chữ số gồm hàng chục nghìn, nghìn, trăm, chục, đơn vị; 100 000 có sáu chữ số.","Đọc, viết số theo thứ tự từ hàng cao nhất."],
    round4:["Khi làm tròn đến hàng chục, xét hàng đơn vị; đến hàng trăm, xét hàng chục.","Chữ số xét từ 5 trở lên thì tăng hàng làm tròn một đơn vị; nhỏ hơn 5 thì giữ nguyên."],
    round5:["Khi làm tròn đến hàng nghìn hoặc chục nghìn, xét chữ số ngay bên phải hàng cần làm tròn.","Xét chữ số liền sau hàng làm tròn."],
    time:["Đồng hồ có kim giờ và kim phút; 1 giờ = 60 phút.","Đọc kim giờ trước, sau đó đọc kim phút."],
    money:["Tiền Việt Nam được biểu thị bằng đồng; khi tính tiền cần cộng giá tiền và trừ số tiền đã trả.","Cộng các khoản tiền cùng đơn vị đồng."],
    statistics:["Bảng số liệu giúp ghi chép, đọc và so sánh thông tin thu thập được.","Đọc tên hàng, tên cột và đối chiếu đúng số liệu."],
    probability:["Một sự kiện có thể chắc chắn xảy ra, không thể xảy ra hoặc có thể xảy ra.","Dựa vào điều kiện của tình huống để nhận xét khả năng xảy ra."]
  };
  const titles={};
  lessons.forEach(m=>{
    const n=m[0], family=m[2], desc=descriptions[family]||descriptions[family.startsWith("review")?"geometry":"unknown"];
    const questions=[];
    for(let i=0;i<40;i++){const level=i<10?"NB":i<20?"TH":"VD";questions.push(build(m,i,level));}
    const first=questions[0];
    const summary={
      goals:["Nắm được kiến thức trọng tâm của "+m[1].toLowerCase()+".","Thực hiện đúng các thao tác và quy tắc toán học đã học.","Vận dụng kiến thức để giải quyết bài tập và tình huống gần gũi."],
      knowledge:[{title:"Kiến thức cốt lõi",detail:desc[0]},{title:"Cách làm",detail:desc[1]},{title:"Tự kiểm tra",detail:"Đọc lại yêu cầu, kiểm tra phép tính và đơn vị trước khi kết luận."}],
      examples:[{question:first[0],answer:first[1][first[2]],explain:first[3]}],
      commonMistakes:["Đọc chưa kĩ đề bài, bỏ sót dữ kiện hoặc yêu cầu.","Nhầm lẫn quy tắc và thao tác tính toán.","Quên ghi đơn vị hoặc chưa kiểm tra lại kết quả."],
      tip:"Làm từ câu dễ đến câu khó; trình bày từng bước và thử lại kết quả."
    };
    window.MATH_BANK.topics.push({id:"math-bai-"+String(n).padStart(2,"0"),lessonNo:n,book:n<=44?"Tập 1":"Tập 2",title:"Bài "+n+". "+m[1],icon:"📘",summary,questions});
  });
})();