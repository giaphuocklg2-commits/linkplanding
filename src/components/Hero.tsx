"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Zap, ShieldCheck, CheckCircle2, Sparkles, Smartphone } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import {
  FloatingCashbackCard,
  FloatingOrderSuccessCard,
  FloatingCommissionRateCard,
  FloatingWithdrawCard,
} from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Decorative Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-linkp-blue/10 via-linkp-cyan/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-linkp-cyan/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-linkp-blue animate-ping" />
              <Zap className="w-3.5 h-3.5 text-linkp-blue fill-linkp-blue" />
              <span className="text-xs font-bold text-linkp-blue tracking-wide">
                Phiên bản App v2.0 · Hoàn đến 80% - 90% hoa hồng
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1736] tracking-tight leading-[1.12]"
            >
              Mua sắm như thường. <br className="hidden sm:inline" />
              <span className="text-gradient">Nhận lại tiền thật.</span>
            </motion.h1>

            {/* Supporting Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Dán link sản phẩm Shopee hoặc TikTok Shop vào LinkP, mua sắm như bình thường và nhận lại đến{" "}
              <strong className="text-slate-900 font-bold">80% - 90% hoa hồng ròng</strong> từ đơn đủ điều kiện trực tiếp vào tài khoản ngân hàng.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="/assets/LinkP-v2.0.apk"
                download="LinkP-v2.0.apk"
                className="btn-primary text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/25 w-full sm:w-auto active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Cài Đặt Android APK (v2.0)</span>
              </a>
              <Link
                href="#calculator"
                className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Tính tiền hoàn nhận về</span>
                <ArrowRight className="w-4 h-4 text-linkp-blue" />
              </Link>
            </motion.div>

            {/* Trust Footer Bullet Points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 pt-2 text-xs font-semibold text-slate-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Miễn phí 100% trọn đời</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Tự phát hiện link Shopee</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Rút VietQR chỉ từ 50.000đ</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium 3D Phone Presentation with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative group perspective-1000">
              {/* Phone Mockup with 3D Tilt */}
              <div className="transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                <PhoneMockup imageSrc="/assets/screen-home.png" alt="Giao diện LinkP Trang chủ v2.0" />
              </div>

              {/* 4 Interactive Floating Micro Cards */}
              <FloatingCashbackCard />
              <FloatingOrderSuccessCard />
              <FloatingCommissionRateCard />
              <FloatingWithdrawCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
