# Uri Dương — Blog cá nhân

Blog song ngữ Việt – Anh, phong cách **youth minimalism**: nền trắng, chữ đen, vàng nắng làm điểm nhấn, nét vẽ tay làm chữ ký riêng.
Dựng bằng [Astro](https://astro.build) — viết bài bằng file Markdown, web tĩnh, nhẹ, deploy miễn phí.

## Chạy trên máy

```bash
npm install      # chỉ cần lần đầu
npm run dev      # mở http://localhost:4321
npm run build    # xuất web tĩnh ra thư mục dist/
```

## Viết bài mới

1. Tạo file trong `src/content/blog/vi/ten-bai.md` (và bản dịch ở `src/content/blog/en/ten-bai-en.md` nếu muốn).
2. Đầu file là phần thông tin:

```md
---
title: 'Tiêu đề bài viết'
description: 'Một-hai câu tóm tắt, hiện ở thẻ bài và hero.'
date: 2026-12-01
category: learn        # learn = Học · live = Sống · go = Đi
cover: /images/posts/ten-anh.jpg
coverAlt: 'Mô tả ảnh cho người dùng trình đọc màn hình'
coverPosition: '50% 30%'  # (tuỳ chọn) giữ vùng nào của ảnh khi cắt khung — hữu ích với ảnh dọc
translationKey: ten-bai  # GIỐNG NHAU ở bản vi và en để nối hai bản dịch
featured: true           # (tuỳ chọn) đưa lên hero trang chủ, tối đa 3 bài
draft: true              # (tuỳ chọn) chỉ hiện khi chạy dev, không xuất bản
---

Nội dung bài viết...
```

### Mẹo trình bày
- `<mark>câu quan trọng</mark>` → vệt bút dạ quang vàng.
- `> trích dẫn` → ô ghi chú vàng nhạt như giấy nhớ.
- `---` → đường lượn sóng vẽ tay ngăn đoạn.

Các bài hiện có đều là **bài mẫu** — xóa đi khi bạn bắt đầu viết thật.

## Thay ảnh

- **Ảnh bìa bài viết**: bỏ ảnh vào `public/images/posts/`, rồi sửa `cover:` trong bài. Nên dùng ảnh ngang, rộng ~1600px, định dạng `.jpg` hoặc `.webp`.
- **Ảnh chân dung**: `public/images/avatar.jpg` (dọc 4:5, trang Về Uri) và `public/images/avatar-face.jpg` (vuông, cắt sát mặt, cho avatar tròn nhỏ). Đường dẫn khai báo trong `src/site.config.ts`.
- **Mẹo**: ảnh dọc dùng làm bìa bài nổi bật (hero) nên cắt sẵn thành ảnh ngang 16:10 để khuôn mặt nằm ở 1/3 phía trên — tránh bị tiêu đề đè lên. Ảnh gốc của bạn để trong `anh-moi/` (không đưa lên mạng).

## Sửa thông tin cá nhân

- Tên, avatar, email, mạng xã hội: `src/site.config.ts` (để trống thì icon tự ẩn).
- Trang **Về Uri**: `src/content/pages/vi/about.md` và `en/about.md`.
- Trang **Bây giờ (Now)**: `src/content/pages/vi/now.md` và `en/now.md` — nhớ cập nhật `updated:` mỗi lần sửa.
- Chữ trên giao diện (menu, nút, câu ghi chú tay): `src/i18n/ui.ts`.

## Thiết kế

Toàn bộ quy tắc màu, chữ, khoảng cách nằm trong [`design-system/MASTER.md`](design-system/MASTER.md). Token CSS ở `src/styles/global.css`.

## Đưa lên mạng (miễn phí)

1. Đẩy thư mục này lên GitHub.
2. Vào [Vercel](https://vercel.com) hoặc [Netlify](https://netlify.com) → *Import project* → chọn repo. Không cần cấu hình gì thêm.
3. Khi có tên miền, sửa `site:` trong `astro.config.mjs`.
