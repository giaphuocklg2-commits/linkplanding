import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1677F2",
};

export const metadata: Metadata = {
  title: "LinkP — Hoàn tiền mua sắm Shopee & TikTok Shop đến 80% hoa hồng",
  description:
    "Ứng dụng hoàn tiền thông minh hàng đầu Việt Nam. Dán link Shopee hoặc TikTok Shop, mua sắm như bình thường và nhận lại đến 80% hoa hồng ròng trực tiếp về tài khoản ngân hàng.",
  keywords: [
    "LinkP",
    "hoàn tiền shopee",
    "hoàn tiền tiktok shop",
    "cashback việt nam",
    "hoàn tiền 80%",
    "kiếm tiền affiliate",
    "rút tiền vietqr",
  ],
  authors: [{ name: "LinkP Vietnam" }],
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${jakarta.variable} scroll-smooth`}>
      <body className="antialiased text-slate-900 bg-[#F8FAFF] selection:bg-blue-500 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
