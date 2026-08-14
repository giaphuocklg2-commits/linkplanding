"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Share2, Gift } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function ReferralSection() {
  const [copied, setCopied] = useState(false);
  const sampleCode = "LP103576";

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="referral" className="py-20 md:py-28 relative bg-[#F4F8FF]/60 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Referral Value Prop & Live Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-linkp-blue text-xs font-black tracking-wider uppercase border border-blue-200/60">
                <Gift className="w-3.5 h-3.5" />
                <span>Chương trình bạn bè</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1736] tracking-tight leading-tight">
                Bạn mua có hoàn tiền. <br />
                <span className="text-gradient">Bạn bè mua, bạn có thêm.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Chia sẻ mã giới thiệu LinkP của bạn cho bạn bè. Khi họ mua sắm đơn hàng đủ điều kiện qua LinkP, bạn sẽ nhận thêm <strong className="text-slate-900 font-bold">+5% hoa hồng</strong> theo chính sách hiện hành mà không ảnh hưởng quyền lợi của người mua.
              </p>
            </div>

            {/* Blue Referral Card Replica */}
            <div className="bg-gradient-to-r from-linkp-blue to-[#0D5CC8] text-white p-7 sm:p-8 rounded-3xl shadow-xl shadow-blue-500/25 space-y-6 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-100 font-bold uppercase tracking-wider">
                  Mã giới thiệu của bạn
                </span>
                <span className="bg-white/20 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full backdrop-blur-md">
                  +5% trọn đời
                </span>
              </div>

              {/* Promo Code Box */}
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black tracking-wider">
                  {sampleCode}
                </span>
                <button
                  onClick={handleCopy}
                  className="bg-white text-linkp-blue text-xs font-extrabold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm hover:bg-blue-50 transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={handleCopy}
                  className="bg-white/20 hover:bg-white/30 text-white font-extrabold text-xs py-3 rounded-xl border border-white/30 transition-all text-center"
                >
                  SAO CHÉP MÃ
                </button>
                <a
                  href="#download"
                  className="bg-white text-linkp-blue hover:bg-blue-50 font-extrabold text-xs py-3 rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>CHIA SẺ NGAY</span>
                </a>
              </div>
            </div>

            {/* How Referral Works Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <span className="text-xs font-black text-linkp-blue">1. Gửi link & mã</span>
                <p className="text-[11px] text-slate-500 mt-1">Gửi link tải kèm mã của bạn qua Zalo, Messenger...</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <span className="text-xs font-black text-linkp-blue">2. Bạn bè nhập mã</span>
                <p className="text-[11px] text-slate-500 mt-1">Bạn bè tải app và nhập mã trong 7 ngày đầu.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <span className="text-xs font-black text-linkp-blue">3. Cùng nhận hoàn</span>
                <p className="text-[11px] text-slate-500 mt-1">Họ nhận 80% ròng, bạn nhận thêm 5% hoa hồng.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Screenshot of Referral Screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <PhoneMockup imageSrc="/assets/screen-referral.png" alt="Màn hình Giới thiệu bạn bè LinkP" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
