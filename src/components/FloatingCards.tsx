"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, ArrowDownToLine, ShoppingBag } from "lucide-react";

export function FloatingCashbackCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="absolute -top-6 -left-6 sm:-top-8 sm:-left-10 z-30"
    >
      <div className="animate-float-slow bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_15px_35px_rgba(22,119,242,0.18)] border border-blue-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm shadow-sm border border-emerald-100">
          +80%
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] text-slate-500 font-medium">Hoa hồng vừa duyệt</span>
          <span className="text-sm font-extrabold text-emerald-600 tracking-tight">
            +18.400đ hoàn tiền
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function FloatingOrderSuccessCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="absolute top-1/3 -right-6 sm:-right-12 z-30"
    >
      <div className="animate-float-delayed bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_15px_35px_rgba(11,23,54,0.12)] border border-slate-100 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-linkp-blue flex items-center justify-center shadow-sm">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-800">Đơn hàng đã ghi nhận ✓</span>
          <span className="text-[10px] text-slate-400 font-medium">Khớp Sub-ID tự động</span>
        </div>
      </div>
    </motion.div>
  );
}

export function FloatingCommissionRateCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="absolute bottom-16 -left-6 sm:-left-12 z-30"
    >
      <div className="animate-float-slow bg-gradient-to-r from-linkp-blue to-[#0D5CC8] text-white rounded-2xl p-3 shadow-[0_15px_35px_rgba(22,119,242,0.3)] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
          <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-blue-100 font-medium leading-none">Chính sách chia sẻ</span>
          <span className="text-xs font-black tracking-wide">80% hoa hồng ròng</span>
        </div>
      </div>
    </motion.div>
  );
}

export function FloatingWithdrawCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.0, duration: 0.6 }}
      className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-8 z-30"
    >
      <div className="animate-float-delayed bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-[0_15px_35px_rgba(11,23,54,0.12)] border border-slate-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
          <ArrowDownToLine className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-800">Rút về ngân hàng</span>
          <span className="text-[10px] text-slate-400 font-medium">VietQR 24/7 tức thì</span>
        </div>
      </div>
    </motion.div>
  );
}
