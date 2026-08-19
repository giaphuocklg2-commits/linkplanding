"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Smartphone, Apple, Zap, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="download" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] bg-gradient-to-br from-linkp-blue via-[#0D5CC8] to-[#1677F2] text-white p-8 sm:p-12 md:p-16 shadow-[0_25px_60px_-15px_rgba(22,119,242,0.4)] overflow-hidden">
          {/* Subtle Background Glow Rings */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-linkp-cyan/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-black tracking-wide">
                <Zap className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                <span>Tiết kiệm ngay từ đơn hàng hôm nay</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Mua món bạn thích. <br />
                Đừng bỏ lại phần <span className="text-linkp-cyan">hoàn tiền</span>.
              </h2>

              <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Tải ngay ứng dụng LinkP để bắt đầu nhận lại 80% hoa hồng tiếp thị trên mọi đơn Shopee và TikTok Shop đủ điều kiện.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="/assets/LinkP-v2.0.apk"
                  download="LinkP-v2.0.apk"
                  className="bg-white text-[#0B1736] hover:bg-blue-50 font-black text-sm px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-xl transition-all w-full sm:w-auto hover:scale-105 active:scale-95"
                >
                  <Smartphone className="w-5 h-5 text-linkp-blue" />
                  <div className="text-left flex flex-col">
                    <span className="text-[10px] text-slate-500 font-bold uppercase leading-none">Tải trực tiếp v2.0</span>
                    <span className="font-extrabold text-sm leading-tight">Cài đặt Android (APK)</span>
                  </div>
                </a>

                <a
                  href="#download"
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-black text-sm px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 backdrop-blur-md transition-all w-full sm:w-auto hover:scale-105 active:scale-95"
                >
                  <Apple className="w-5 h-5 text-white" />
                  <div className="text-left flex flex-col">
                    <span className="text-[10px] text-blue-200 font-bold uppercase leading-none">Sắp có trên</span>
                    <span className="font-extrabold text-sm leading-tight">iOS App Store</span>
                  </div>
                </a>
              </div>

              {/* Small Note */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-blue-100 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-linkp-cyan" /> Miễn phí 100%
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-linkp-cyan" /> Không cần nạp tiền
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-linkp-cyan" /> Rút tiền VietQR
                </span>
              </div>
            </div>

            {/* Right: QR Code Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-2xl text-center space-y-3 max-w-[240px] border border-white/50">
                <div className="w-44 h-44 rounded-2xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/assets/logo.png"
                    alt="LinkP App QR"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-black text-[#0B1736]">Quét để tải LinkP</p>
                  <p className="text-[10px] text-slate-400 font-semibold">Hỗ trợ Android & iOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
