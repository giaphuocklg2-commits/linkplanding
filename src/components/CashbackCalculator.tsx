"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Sparkles, 
  Download, 
  TrendingUp, 
  Coins, 
  Crown, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Gift
} from "lucide-react";
import Link from "next/link";

const TIERS = [
  { id: "bronze", name: "Đồng 🥉", rate: 80, bonus: "+0%", desc: "Dành cho thành viên mới", color: "from-amber-700 to-amber-900", border: "border-amber-700/30" },
  { id: "silver", name: "Bạc 🥈", rate: 82, bonus: "+2%", desc: "Từ 5 đơn hoàn thành", color: "from-slate-400 to-slate-600", border: "border-slate-400/30" },
  { id: "gold", name: "Vàng 🥇", rate: 85, bonus: "+5%", desc: "Từ 15 đơn hoàn thành", color: "from-amber-400 to-yellow-600", border: "border-yellow-400/30" },
  { id: "diamond", name: "Kim Cương 💎", rate: 90, bonus: "+10%", desc: "Từ 50 đơn hoàn thành", color: "from-cyan-400 to-blue-600", border: "border-cyan-400/30" },
];

export default function CashbackCalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(3000000); // 3M VND
  const [selectedTier, setSelectedTier] = useState(TIERS[0]);

  // Average Shopee commission pool is ~8% GMV
  const averageCommissionPool = monthlySpend * 0.08;
  const monthlyCashback = Math.round(averageCommissionPool * (selectedTier.rate / 100));
  const yearlyCashback = monthlyCashback * 12;
  const referralBonusEstimate = Math.round(monthlyCashback * 0.05 * 3); // 3 friends

  const formatVnd = (num: number) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(num);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 relative overflow-hidden bg-slate-900 text-white">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold"
          >
            <Calculator className="w-4 h-4 text-blue-400" />
            <span>MÁY TÍNH TIỀN HOÀN TƯƠNG TÁC</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight"
          >
            Bạn mua sắm bao nhiêu? <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Xem ngay số tiền nhận lại mỗi năm
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Kéo thanh trượt chi tiêu hằng tháng và chọn cấp bậc thành viên để ước tính số tiền hoa hồng thực nhận chuyển thẳng về tài khoản ngân hàng của bạn.
          </motion.p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-slate-850/80 backdrop-blur-xl border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between shadow-2xl">
            {/* Spend Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Chi tiêu Shopee & TikTok mỗi tháng
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {formatVnd(monthlySpend)}
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/20">
                  {monthlySpend >= 10000000 ? "Người mua sắm tích cực 🔥" : "Chi tiêu thông minh"}
                </span>
              </div>

              <input
                type="range"
                min="500000"
                max="20000000"
                step="500000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />

              <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                <span>500.000 đ</span>
                <span>5.000.000 đ</span>
                <span>10.000.000 đ</span>
                <span>20.000.000 đ</span>
              </div>
            </div>

            {/* VIP Tier Selector */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Chọn Cấp Bậc VIP Thành Viên
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  Tỷ lệ hoàn: {selectedTier.rate}%
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {TIERS.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTier(tier)}
                      className={`p-3 rounded-2xl border text-left transition-all relative ${
                        isSelected
                          ? `bg-gradient-to-b ${tier.color} text-white border-white/40 shadow-lg scale-[1.02]`
                          : "bg-slate-800/60 hover:bg-slate-800 text-slate-300 border-slate-700"
                      }`}
                    >
                      <div className="text-xs font-black">{tier.name}</div>
                      <div className="text-[11px] font-bold text-white/90 mt-0.5">{tier.rate}% hoàn</div>
                      <div className="text-[10px] text-white/70">{tier.bonus}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Note */}
            <div className="p-3.5 rounded-2xl bg-blue-950/40 border border-blue-500/20 text-xs text-blue-200/90 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                Hoa hồng được tính trên giá trị ròng của đơn hàng hợp lệ và tự động ghi nhận vào ví sau khi sàn đối soát.
              </span>
            </div>
          </div>

          {/* Right Column: Earnings Projection Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl border border-blue-400/30 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-200">
                  Ước tính hoa hồng nhận về
                </span>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                  Cấp {selectedTier.name}
                </span>
              </div>

              {/* Monthly Amount */}
              <div className="space-y-1">
                <span className="text-xs text-blue-200 font-medium">Nhận lại mỗi tháng:</span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  ~{formatVnd(monthlyCashback)}
                </div>
              </div>

              {/* Yearly Amount Highlight */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-100 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    Tích lũy 1 năm:
                  </span>
                  <span className="text-xs font-extrabold text-yellow-300">Tiết kiệm lớn</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  ~{formatVnd(yearlyCashback)}
                </div>
                <div className="text-[11px] text-blue-100/80 pt-1">
                  💡 Tương đương {Math.round(yearlyCashback / 40000)} cốc trà sữa hoặc 1 vé máy bay khứ hồi!
                </div>
              </div>

              {/* Referral Bonus Extra */}
              <div className="flex items-center justify-between text-xs text-blue-100 pt-2 border-t border-white/15">
                <span className="flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-emerald-300" />
                  Thêm từ 3 bạn bè (5% F1):
                </span>
                <span className="font-extrabold text-emerald-300">+{formatVnd(referralBonusEstimate)}/tháng</span>
              </div>
            </div>

            {/* Direct Download Action */}
            <div className="pt-6">
              <Link
                href="/assets/LinkP-v2.0.apk"
                className="w-full py-4 rounded-2xl bg-white hover:bg-slate-100 text-blue-700 font-black text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all active:scale-98"
              >
                <Download className="w-4 h-4" />
                <span>TẢI LINKP APK (v2.0) ĐỂ NHẬN TIỀN</span>
              </Link>
              <div className="text-center text-[11px] text-blue-200 mt-2 font-medium">
                Bản cài đặt Android trực tiếp · Miễn phí 100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
