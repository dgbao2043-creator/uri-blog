# OK, Uri — Design System (MASTER)

> Nguồn sự thật cho giao diện blog. Khi thêm trang mới, đọc file này trước.
> Tham chiếu: The Hanoi Chamomile (giọng kể gần gũi, About me) + Horizone (hero ảnh lớn, bộ lọc chủ đề, lưới thẻ).
> Phần riêng của Uri: nét vẽ tay + chữ viết tay + highlight vàng nắng, trang Now, bộ ba chủ đề "Học · Sống · Đi".

## Tinh thần
Youth · Minimalism · Ghi chép trong sổ tay. Trắng – đen là nền, **vàng nắng** là "bút dạ quang" của Uri.
Mỗi màn hình chỉ 1–2 nét vẽ tay — đủ để thấy cá tính, không lấn nội dung.

## Màu (CSS tokens trong `src/styles/global.css`)
| Token | Giá trị | Dùng cho |
|---|---|---|
| `--bg` | `#FFFFFF` | Nền trang |
| `--surface` | `#F5F4EF` | Chip, khối phụ |
| `--ink` | `#121212` | Chữ chính, nút chính |
| `--ink-muted` | `#5A5852` | Chữ phụ (≈7:1 trên nền trắng) |
| `--line` | `#E7E5DE` | Viền, đường kẻ |
| `--sun` | `#FFC83D` | Highlight, nét vẽ tay, chấm nhấn — **không dùng làm màu chữ trên nền trắng** |
| `--sun-soft` | `#FFF3CC` | Nền highlight nhạt, ghi chú |
| `--sun-deep` | `#8A5A00` | Chữ nhấn màu vàng khi cần (đạt 4.5:1) |

## Chữ
- **Be Vietnam Pro** (400/500/600/700) — toàn bộ giao diện & bài viết. Thiết kế cho tiếng Việt.
- **Mansalva** — chỉ dùng cho chữ ký "Uri", ghi chú viết tay, chú thích nhỏ. Không dùng cho đoạn văn dài.
- Thang chữ: 13 / 15 / 17 (body) / 20 / 24 / 32 / 44 / 60. Line-height body 1.75, tiêu đề 1.15–1.25.
- Độ rộng đoạn văn bài viết: tối đa ~68 ký tự.

## Khoảng cách & hình khối
- Thang 4px: 4 8 12 16 24 32 48 64 96.
- Bo góc: 10px (thẻ ảnh), 16px (hero), 999px (chip).
- Không đổ bóng nặng. Hover = ảnh phóng nhẹ 1.03 + gạch chân dạ quang dưới tiêu đề.

## Thành phần đặc trưng
- **Tên blog**: **OK, Uri** — concept *ổn cả, Uri.* (EN: *it's all okay, Uri.*). Tác giả: Uri Dương.
- **Wordmark**: linh vật Nắng + "OK," (Mansalva, chữ mực trên sticker vàng nghiêng -6°, bóng đổ mực) + "Uri" (Mansalva, màu mực / trắng trên ảnh). Không dùng nét gạch trang trí.
- **Linh vật "Nắng"** (`src/components/Mascot.astro`): mặt trời nhỏ (Dương = nắng), mắt to có đốm sáng, nháy một mắt = "ổn cả mà", má hồng, tóc vểnh, viền mực kiểu sticker. Hover logo: tia nắng xoay, nghiêng đầu, chớp mắt. Dùng ở logo, chữ ký cuối bài, favicon.
- **Highlight**: `<mark>` trong Markdown → vệt bút dạ quang vàng nghiêng nhẹ.
- **Ghi chú tay** (`HandNote`): chữ Mansalva + mũi tên SVG vẽ tay.
- **Chip chủ đề**: Học / Sống / Đi (EN: Learn / Live / Go).

## Chuyển động
- 150–250ms, ease-out. Tôn trọng `prefers-reduced-motion`.
- Hero chuyển slide thủ công (không tự chạy) — người đọc tự điều khiển.

## Không làm
- Emoji làm icon · chữ vàng trên nền trắng · nhiều hơn 1 màu nhấn · tự động chạy slide · đoạn văn full width.
