"use client";

import { motion } from "framer-motion";
import { 
  Trophy, 
  Crown, 
  Medal, 
  Sparkles, 
  TrendingUp, 
  ArrowUpRight, 
  Users, 
  Award,
  Gift
} from "lucide-react";
import Link from "next/link";

const TOP_AFFILIATES = [
  {
    rank: 1,
    name: "Hoàng Minh ***",
    avatar: "HM",
    earnings: "28.450.000 ₫",
    orders: "412 đơn",
    badge: "Chiến Thần Shopee 👑",
    prize: "+1.000.000 ₫",
    color: "from-amber-400 to-yellow-500",
    ring: "ring-amber-400"
  },
  {
    rank: 2,
    name: "Trần Thanh ***",
    avatar: "TT",
    earnings: "21.200.000 ₫",
    orders: "328 đơn",
    badge: "Đại Sứ KOC 🥈",
    prize: "+500.000 ₫",
    color: "from-slate-300 to-slate-400",
    ring: "ring-slate-300"
  },
  {
    rank: 3,
    name: "Lê Văn ***",
    avatar: "LV",
    earnings: "16.800.000 ₫",
    orders: "245 đơn",
    badge: "Trùm Săn Deal 🥉",
    prize: "+300.000 ₫",
    color: "from-amber-600 to-amber-700",
    ring: "ring-amber-600"
  }
];

const RUNNER_UPS = [
  { rank: 4, name: "Nguyễn Thu ***", earnings: "13.650.000 ₫", orders: "192 đơn", tier: "VIP Kim Cương", growth: "+18%" },
  { rank: 5, name: "Phạm Quốc ***", earnings: "11.400.000 ₫", orders: "160 đơn", tier: "VIP Kim Cương", growth: "+12%" },
  { rank: 6, name: "Đỗ Mai ***", earnings: "9.850.000 ₫", orders: "135 đơn", tier: "VIP Vàng", growth: "+25%" },
  { rank: 7, name: "Vũ Hải ***", earnings: "8.900.000 ₫", orders: "120 đơn", tier: "VIP Vàng", growth: "+15%" },
  { rank: 8, name: "Bùi Thị ***", earnings: "7.600.000 ₫", orders: "98 đơn", tier: "VIP Vàng", growth: "+8%" }
];

export default function LeaderboardSection() {
  return (
    <section id="leaderboard" className="py-20 md:py-28 relative overflow-hidden bg-slate-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-400 text-xs font-bold"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>BẢNG VINH DANH THÁNG</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Top Thành Viên <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Nhận Hoa Hồng Cao Nhất Tháng
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Mua sắm thông minh và chia sẻ mã giới thiệu LinkP để cùng nhau tạo nguồn thu nhập thụ động không giới hạn mỗi tháng.
          </motion.p>
        </div>

        {/* Top 3 Podium Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-4xl mx-auto mb-12">
          {/* Top 2 (Silver) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 text-center relative order-2 md:order-1 flex flex-col items-center shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-400 to-slate-200 text-slate-900 font-black text-xl flex items-center justify-center shadow-lg ring-4 ring-slate-700/50 mb-3">
              🥈
            </div>
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {TOP_AFFILIATES[1].badge}
            </span>
            <h3 className="font-black text-lg text-white mt-2 font-heading">{TOP_AFFILIATES[1].name}</h3>
            <div className="text-2xl font-black text-slate-100 mt-1 font-heading">{TOP_AFFILIATES[1].earnings}</div>
            <div className="text-xs text-slate-400 mt-1">{TOP_AFFILIATES[1].orders} đã hoàn thành</div>
            <div className="mt-4 pt-3 border-t border-slate-800 w-full flex items-center justify-center gap-1 text-xs text-amber-400 font-bold">
              <Gift className="w-3.5 h-3.5" />
              <span>Thưởng Top: {TOP_AFFILIATES[1].prize}</span>
            </div>
          </motion.div>

          {/* Top 1 (Gold) - Elevated Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/60 rounded-3xl p-8 text-center relative order-1 md:order-2 flex flex-col items-center shadow-2xl shadow-amber-500/10 md:-translate-y-4"
          >
            <div className="absolute -top-4 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-[11px] font-black uppercase tracking-widest shadow-md flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 fill-slate-950" />
              <span>QUÁN QUÂN THÁNG</span>
            </div>
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-500 text-slate-950 font-black text-3xl flex items-center justify-center shadow-xl ring-4 ring-amber-400/40 mb-3 mt-2">
              🥇
            </div>
            <span className="text-xs font-extrabold px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
              {TOP_AFFILIATES[0].badge}
            </span>
            <h3 className="font-black text-xl text-white mt-2 font-heading">{TOP_AFFILIATES[0].name}</h3>
            <div className="text-3xl font-black text-amber-400 mt-1 font-heading">{TOP_AFFILIATES[0].earnings}</div>
            <div className="text-xs text-slate-400 mt-1">{TOP_AFFILIATES[0].orders} đã hoàn thành</div>
            <div className="mt-4 pt-3 border-t border-amber-500/20 w-full flex items-center justify-center gap-1.5 text-xs text-amber-300 font-extrabold">
              <Gift className="w-4 h-4 text-amber-400" />
              <span>Thưởng Top 1: {TOP_AFFILIATES[0].prize}</span>
            </div>
          </motion.div>

          {/* Top 3 (Bronze) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 text-center relative order-3 md:order-3 flex flex-col items-center shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-700 text-white font-black text-xl flex items-center justify-center shadow-lg ring-4 ring-amber-800/50 mb-3">
              🥉
            </div>
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {TOP_AFFILIATES[2].badge}
            </span>
            <h3 className="font-black text-lg text-white mt-2 font-heading">{TOP_AFFILIATES[2].name}</h3>
            <div className="text-2xl font-black text-slate-100 mt-1 font-heading">{TOP_AFFILIATES[2].earnings}</div>
            <div className="text-xs text-slate-400 mt-1">{TOP_AFFILIATES[2].orders} đã hoàn thành</div>
            <div className="mt-4 pt-3 border-t border-slate-800 w-full flex items-center justify-center gap-1 text-xs text-amber-400 font-bold">
              <Gift className="w-3.5 h-3.5" />
              <span>Thưởng Top: {TOP_AFFILIATES[2].prize}</span>
            </div>
          </motion.div>
        </div>

        {/* Runners up Table (Top 4 - 8) */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Bảng Xếp Hạng Vị Trí 4 - 8
            </span>
            <span className="text-xs font-bold text-emerald-400">
              Tự động cập nhật 24/7
            </span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {RUNNER_UPS.map((item) => (
              <div
                key={item.rank}
                className="p-4 sm:px-6 flex items-center justify-between hover:bg-slate-850 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 font-black text-xs flex items-center justify-center border border-slate-700">
                    #{item.rank}
                  </span>
                  <div>
                    <div className="font-bold text-sm text-slate-200">{item.name}</div>
                    <div className="text-[11px] text-slate-400">{item.orders} · {item.tier}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-black text-sm text-emerald-400 font-heading">{item.earnings}</div>
                  <div className="text-[10px] text-slate-500 flex items-center justify-end gap-0.5">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>{item.growth} vs tháng trước</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Footer CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/assets/LinkP-v2.0.apk"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 hover:opacity-95 transition-all active:scale-98"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>TẢI APP & BẮT ĐẦU ĐUA TOP NGAY</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
