export interface NavItem {
  label: string;
  href: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
  highlight: string;
}

export interface FeatureItem {
  tag: string;
  title: string;
  description: string;
  details: string[];
  imageSrc: string;
  alt: string;
  reverse?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: "LinkP",
  tagline: "Mua sắm như thường. Nhận lại tiền thật.",
  heroBadge: "Hoàn đến 80% hoa hồng ròng*",
  description:
    "Dán link sản phẩm Shopee hoặc TikTok Shop vào LinkP, mua sắm như bình thường và nhận lại 80% hoa hồng ròng từ đơn đủ điều kiện trực tiếp vào ví.",
  referralRate: "5%",
  cashbackRate: "80%",
  appStoreUrl: "#",
  googlePlayUrl: "#",
  apkDirectUrl: "#",
};

export const NAV_LINKS: NavItem[] = [
  { label: "Cách hoạt động", href: "#how-it-works" },
  { label: "Trải nghiệm thử", href: "#demo" },
  { label: "Tính năng", href: "#features" },
  { label: "Giới thiệu bạn", href: "#referral" },
  { label: "FAQ", href: "#faq" },
];

export const TRUST_BADGES = [
  { icon: "ShieldCheck", label: "Minh bạch 80% hoa hồng", desc: "Không giấu phí, nhận hoa hồng ròng cao nhất" },
  { icon: "ShoppingBag", label: "Mua trên Shopee & TikTok", desc: "Giữ nguyên giá, voucher sàn & quyền lợi tài khoản" },
  { icon: "QrCode", label: "Rút về mọi ngân hàng", desc: "Chuyển khoản VietQR siêu tốc, chỉ từ 50.000đ" },
  { icon: "Sparkles", label: "Hoàn toàn miễn phí", desc: "0đ phí tham gia, 0đ phụ phí trọn đời" },
];

export const STEPS: StepItem[] = [
  {
    step: "01",
    title: "Dán link",
    desc: "Sao chép link bất kỳ món đồ yêu thích từ Shopee hoặc TikTok Shop và dán vào LinkP.",
    highlight: "1 chạm nhận diện",
  },
  {
    step: "02",
    title: "Chuyển đổi",
    desc: "LinkP tạo liên kết tiếp thị tự động mang Sub-ID riêng biệt của bạn để hệ thống ghi nhận.",
    highlight: "Sub-ID riêng biệt",
  },
  {
    step: "03",
    title: "Mua & Nhận hoàn tiền",
    desc: "Bấm 'Mua ngay' chuyển sang sàn mua như bình thường. Nhận 80% hoa hồng ròng về ví sau khi đơn hoàn thành.",
    highlight: "Hoàn 80% hoa hồng",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    tag: "GIAO DIỆN & VÍ TIỀN",
    title: "Hoàn tiền rõ ràng, không mập mờ",
    description:
      "Biết chính xác số dư khả dụng, tổng tiền đã nhận và tỷ lệ chia hoa hồng 80% ngay khi mở ứng dụng. Mỗi đồng tiền hoàn về ví đều có thể theo dõi và rút về tài khoản ngân hàng bất kỳ lúc nào.",
    details: [
      "Hiển thị số dư tức thì 0ms, cập nhật thời gian thực",
      "Minh bạch tỷ lệ chia hoa hồng 80% cố định",
      "Lưu trữ an toàn trên hệ thống Supabase & bảo mật mã PIN 6 số",
    ],
    imageSrc: "/assets/screen-home.png",
    alt: "Giao diện Trang chủ và Ví tiền LinkP",
    reverse: false,
  },
  {
    tag: "THEO DÕI ĐƠN HÀNG",
    title: "Kiểm tra từng đơn hàng chi tiết",
    description:
      "Không còn lo lắng đơn hàng có được ghi nhận hay không. LinkP cung cấp danh sách đơn hàng đã đặt, trạng thái duyệt sàn và số tiền hoàn dự kiến chi tiết từng sản phẩm.",
    details: [
      "TikTok sau ~1 giờ, Shopee sau ~1 ngày từ lúc đặt",
      "Phân loại rõ ràng: Chờ xác nhận, Đã duyệt, Bị từ chối",
      "Tiền tự động cộng vào ví sau 7–14 ngày sàn đối soát",
    ],
    imageSrc: "/assets/screen-orders.png",
    alt: "Theo dõi đơn hàng LinkP",
    reverse: true,
  },
  {
    tag: "RÚT TIỀN TIỆN LỢI",
    title: "Rút tiền về mọi ngân hàng Việt Nam",
    description:
      "Chỉ cần liên kết số tài khoản ngân hàng của bạn một lần duy nhất. Hỗ trợ toàn bộ hơn 40 ngân hàng Napas247 (Techcombank, MBBank, Vietcombank, ACB, VPBank,...) với mã VietQR tự động.",
    details: [
      "Hạn mức rút linh hoạt chỉ từ 50.000đ",
      "Bảo vệ giao dịch bằng Mã PIN rút tiền 6 số cá nhân",
      "Admin duyệt chuyển khoản minh bạch, cập nhật lệnh tức thì",
    ],
    imageSrc: "/assets/screen-account.png",
    alt: "Rút tiền về ngân hàng LinkP",
    reverse: false,
  },
  {
    tag: "ĐIỂM DANH HẰNG NGÀY",
    title: "Thêm một chút mỗi ngày",
    description:
      "Mỗi ngày ghé thăm LinkP và bấm điểm danh để nhận cố định 200đ trực tiếp vào ví, hoàn toàn không có yếu tố may rủi, không bắt xem quảng cáo phiền toái.",
    details: [
      "Nhận cố định 200đ mỗi ngày, chu kỳ chuỗi 7 ngày",
      "Cộng thẳng vào số dư ví khả dụng",
      "Tích tiểu thành đại, mở rộng quyền lợi thành viên LinkP",
    ],
    imageSrc: "/assets/screen-checkin.png",
    alt: "Điểm danh hằng ngày LinkP",
    reverse: true,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "LinkP hoạt động như thế nào?",
    answer:
      "Khi bạn mua sắm qua LinkP, sàn thương mại điện tử (Shopee / TikTok Shop) sẽ trả hoa hồng tiếp thị liên kết (affiliate). Thay vì giữ lại toàn bộ, LinkP hoàn lại đến 80% số tiền hoa hồng ròng này trực tiếp vào tài khoản ví của bạn.",
  },
  {
    question: "Tại sao LinkP có thể hoàn tiền 80%?",
    answer:
      "LinkP hoạt động theo mô hình chia sẻ doanh thu: sàn thương mại đối tác trả hoa hồng cho mỗi đơn hàng hợp lệ, và LinkP chia lại 80% khoản hoa hồng đó cho người mua. Đây là tiền thật từ ngân sách tiếp thị của sàn và người bán, không phải điểm thưởng ảo.",
  },
  {
    question: "Bao lâu thì đơn hàng được ghi nhận trên LinkP?",
    answer:
      "Đơn hàng TikTok Shop thường được sàn đồng bộ lên LinkP sau khoảng 1 giờ. Đối với Shopee, thời gian đồng bộ là sau khoảng 24 giờ kể từ khi bạn đặt mua thành công qua link chuyển đổi.",
  },
  {
    question: "Khi nào tôi có thể rút tiền về ngân hàng?",
    answer:
      "Sau khi bạn nhận hàng thành công và sàn kết thúc thời gian đổi trả (thường 7–14 ngày), đơn hàng được duyệt và tiền tự động cộng vào 'Số dư khả dụng'. Khi số dư đạt tối thiểu 50.000đ, bạn có thể tạo lệnh rút về tài khoản ngân hàng bất kỳ lúc nào.",
  },
  {
    question: "Tại sao một đơn hàng có thể không được hoàn tiền?",
    answer:
      "Đơn hàng không được hoàn tiền nếu bị hủy, trả hàng, người bán không có chính sách hoa hồng, hoặc bạn chuyển qua app khác trước khi thanh toán khiến mất dấu liên kết tiếp thị. Để đảm bảo 100% được ghi nhận, hãy bấm 'Mua ngay' và thanh toán liền mạch.",
  },
  {
    question: "LinkP có thu bất kỳ khoản phí nào không?",
    answer:
      "Hoàn toàn KHÔNG. LinkP miễn phí 100% trọn đời. Bạn không cần nạp tiền, không mất phí duy trì và không bị trừ bất kỳ khoản phí nào khi tạo lệnh rút tiền về ngân hàng.",
  },
];
