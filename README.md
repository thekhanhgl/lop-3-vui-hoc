# Lớp 3 vui học

Website tự học Toán, Tiếng Việt và Tiếng Anh dành cho học sinh lớp 3. Chạy trực tiếp trên trình duyệt, không cần tài khoản, không cần máy chủ.

## Chạy thử
Mở `index.html` bằng trình duyệt hoặc chạy bằng tiện ích Live Server.

## Triển khai GitHub Pages
1. Tải ZIP và giải nén.
2. Mở repository `https://github.com/thekhanhgl/lop-3-vui-hoc`.
3. Chọn **Add file → Upload files**, tải toàn bộ nội dung thư mục này lên nhánh `main`.
4. Chọn **Commit changes**.
5. Vào **Settings → Pages**; chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`.
6. Chờ GitHub Pages triển khai. Địa chỉ dự kiến: `https://thekhanhgl.github.io/lop-3-vui-hoc/`.

## Cấu trúc
- `index.html`: trang chủ.
- `assets/css/style.css`: giao diện responsive.
- `assets/js/data.js`: dữ liệu bài học Tiếng Việt, Tiếng Anh và cấu hình môn học.
- `assets/js/math-bank.js`: ngân hàng học liệu Toán 3 theo từng bài, gồm kiến thức trọng tâm, ví dụ, lỗi thường gặp và câu hỏi luyện tập.
- `docs/TOAN3-MATH-BANK-ROADMAP.md`: lộ trình 81 bài Toán 3 và trạng thái biên soạn.
- `assets/js/app.js`: điều hướng, luyện tập, chấm điểm và lưu tiến độ.
- `docs/SOURCES.md`: nguồn tham khảo và ghi chú giấy phép.

## Lưu tiến độ
Điểm sao và chủ đề hoàn thành được lưu bằng `localStorage` trên trình duyệt/thiết bị đang sử dụng. Dữ liệu không tự đồng bộ giữa các thiết bị.

## Ghi chú nội dung
Ngân hàng Toán đang được biên soạn theo sách Toán 3 Kết nối tri thức với cuộc sống, theo lộ trình tại `docs/TOAN3-MATH-BANK-ROADMAP.md`. Nội dung cần tiếp tục được rà soát chuyên môn trước khi phát hành rộng rãi.
