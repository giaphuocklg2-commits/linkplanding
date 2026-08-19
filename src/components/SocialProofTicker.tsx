"use client";

import { motion } from "framer-motion";
import { Zap, CheckCircle2, Wallet, Users, Crown, ArrowUpRight } from "lucide-react";

const PROOF_ITEMS = [
  { icon: "wallet", text: "Trần M*** vừa rút 150.000đ về Vietcombank", time: "1 phút trước", badge: "VietQR 247", color: "text-emerald-600 bg-emerald-50 border-emerald-200/80" },
  { icon: "shopee", text: "Lê H*** vừa nhận hoàn 42.000đ từ Shopee Mall", time: "2 phút trước", badge: "+80% Hoàn", color: "text-blue-600 bg-blue-50 border-blue-200/80" },
  { icon: "referral", text: "Nguyễn V*** vừa nhận 15.000đ hoa hồng giới thiệu F1", time: "4 phút trước", badge: "5% F1", color: "text-indigo-600 bg-indigo-50 border-indigo-200/80" },
  { icon: "wallet", text: "Phạm K*** vừa rút 500.000đ về Techcombank", time: "5 phút trước", badge: "VietQR 247", color: "text-emerald-600 bg-emerald-50 border-emerald-200/80" },
  { icon: "vip", text: "Đỗ T*** vừa nâng hạng VIP Vàng (Nhận hoàn 85%)", time: "7 phút trước", badge: "VIP Vàng", color: "text-amber-600 bg-amber-50 border-amber-200/80" },
  { icon: "shopee", text: "Hoàng N*** vừa nhận hoàn 88.500đ từ đơn Shopee", time: "9 phút trước", badge: "+80% Hoàn", color: "text-blue-600 bg-blue-50 border-blue-200/80" },
  { icon: "stats", text: "Tổng chi trả: 5.2+ tỷ VNĐ cho 45.000+ thành viên", time: "Tháng này", badge: "Minh bạch", color: "text-purple-600 bg-purple-50 border-purple-200/80" },
];

export default function SocialProofTicker() {
  return (
    <div className="py-4 bg-slate-900 border-y border-slate-800 overflow-hidden relative select-none">
      {/* Gradient fade masks on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex items-center gap-6 animate-ticker whitespace-nowrap">
        {[...PROOF_ITEMS, ...PROOF_ITEMS, ...PROOF_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-850 border border-slate-700/80 text-xs text-slate-200 shadow-md flex-shrink-0 hover:border-slate-600 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
            <span className="font-semibold text-slate-100">{item.text}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.color}`}>
              {item.badge}
            </span>
            <span className="text-[10px] text-slate-400 font-normal">({item.time})</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          display: flex;
          width: max-content;
          animation: ticker 35s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
