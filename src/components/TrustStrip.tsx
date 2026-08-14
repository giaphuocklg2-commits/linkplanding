"use client";

import { ShoppingBag, Zap, QrCode, ShieldCheck } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: ShoppingBag,
    title: "Nền tảng quen thuộc",
    desc: "Shopee & TikTok Shop",
  },
  {
    icon: Zap,
    title: "80% hoa hồng ròng",
    desc: "Tỷ lệ hoàn tiền cao nhất",
  },
  {
    icon: QrCode,
    title: "Rút tiền về ngân hàng",
    desc: "VietQR 24/7 tức thì từ 50k",
  },
  {
    icon: ShieldCheck,
    title: "Hoàn toàn miễn phí",
    desc: "0đ phí tham gia trọn đời",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-8 bg-white/70 backdrop-blur-md border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 p-2 rounded-2xl hover:bg-slate-50/80 transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-linkp-blue flex items-center justify-center shrink-0 border border-blue-100/60 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-extrabold text-[#0B1736] tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
