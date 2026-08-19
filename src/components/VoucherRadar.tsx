"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Ticket, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Truck, 
  Coins, 
  Zap,
  ArrowRight
} from "lucide-react";

interface Voucher {
  id: string;
  code: string;
  category: "all" | "mall" | "freeship" | "coin" | "exclusive";
  discount: string;
  minSpend: string;
  description: string;
  expireTime: string;
  tag: string;
  tagColor: string;
}

const VOUCHERS: Voucher[] = [
  {
    id: "v1",
    code: "LINKP50K",
    category: "exclusive",
    discount: "Giảm 50.000đ",
    minSpend: "Đơn từ 250.000đ",
    description: "Mã độc quyền LinkP áp dụng toàn sàn Shopee",
    expireTime: "Hết hạn sau 4 giờ",
    tag: "Độc Quyền LinkP",
    tagColor: "bg-blue-50 text-linkp-blue border-blue-200/80"
  },
  {
    id: "v2",
    code: "FREESHIP0D",
    category: "freeship",
    discount: "Freeship Đơn 0đ",
    minSpend: "Đơn từ 0đ",
    description: "Miễn phí vận chuyển tối đa 30.000đ toàn quốc",
    expireTime: "Khung giờ 0H - 9H",
    tag: "Freeship Xtra",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-200/80"
  },
  {
    id: "v3",
    code: "MALL15PCT",
    category: "mall",
    discount: "Giảm 15% tối đa 100k",
    minSpend: "Đơn từ 300.000đ",
    description: "Áp dụng cho mọi gian hàng chính hãng Shopee Mall",
    expireTime: "Hôm nay",
    tag: "Shopee Mall",
    tagColor: "bg-rose-50 text-rose-600 border-rose-200/80"
  },
  {
    id: "v4",
    code: "HOANXU25K",
    category: "coin",
    discount: "Hoàn 25.000 Xu",
    minSpend: "Đơn từ 150.000đ",
    description: "Tích lũy xu Shopee dùng cho các đơn hàng sau",
    expireTime: "Sắp hết lượt",
    tag: "Hoàn Xu Xtra",
    tagColor: "bg-amber-50 text-amber-600 border-amber-200/80"
  },
  {
    id: "v5",
    code: "LINKP100K",
    category: "exclusive",
    discount: "Giảm 100.000đ",
    minSpend: "Đơn từ 500.000đ",
    description: "Mã thưởng KOC LinkP áp dụng ngành Thời trang & Mỹ phẩm",
    expireTime: "Có hạn 100 lượt",
    tag: "Độc Quyền LinkP",
    tagColor: "bg-blue-50 text-linkp-blue border-blue-200/80"
  },
  {
    id: "v6",
    code: "MALL70K",
    category: "mall",
    discount: "Giảm 70.000đ",
    minSpend: "Đơn từ 400.000đ",
    description: "Áp dụng gian hàng Điện Tử & Gia Dụng Thông Minh",
    expireTime: "Khung giờ 12H - 21H",
    tag: "Điện Tử Mall",
    tagColor: "bg-purple-50 text-purple-600 border-purple-200/80"
  }
];

export default function VoucherRadar() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({ hours: 2, minutes: 45, seconds: 30 });

  // Countdown timer to next Golden Hour
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 3, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const filteredVouchers = activeCategory === "all" 
    ? VOUCHERS 
    : VOUCHERS.filter(v => v.category === activeCategory);

  return (
    <section id="vouchers" className="py-20 md:py-28 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Live Countdown */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs font-bold shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-orange-500" />
              <span>KHO MÃ GIẢM GIÁ SHOPEE LIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Săn mã giảm giá & <br className="hidden sm:inline" />
              <span className="text-gradient">Nhận thêm hoàn tiền x2</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-lg">
              Áp dụng đồng thời mã giảm giá sàn Shopee cùng tỷ lệ hoàn tiền 80% từ LinkP để tiết kiệm tối đa mọi đơn mua.
            </p>
          </div>

          {/* Golden Hour Countdown Box */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-center gap-4 self-center md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase text-slate-400">Đợt mã Flash Sale kế tiếp:</div>
              <div className="flex items-center gap-1.5 font-mono text-lg font-black text-slate-900 mt-0.5">
                <span className="bg-slate-100 px-2 py-0.5 rounded-md">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded-md">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded-md text-orange-600">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {[
            { id: "all", label: "Tất cả mã (32)", icon: Ticket },
            { id: "exclusive", label: "Độc quyền LinkP (6)", icon: Sparkles },
            { id: "freeship", label: "Freeship Xtra (8)", icon: Truck },
            { id: "mall", label: "Shopee Mall (12)", icon: ShoppingBag },
            { id: "coin", label: "Hoàn Xu 15% (6)", icon: Coins },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-orange-400" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Voucher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredVouchers.map((v) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Tag & Expiry */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${v.tagColor}`}>
                    {v.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {v.expireTime}
                  </span>
                </div>

                {/* Discount Title */}
                <div>
                  <div className="text-xl font-black text-slate-900 font-heading group-hover:text-linkp-blue transition-colors">
                    {v.discount}
                  </div>
                  <div className="text-xs font-bold text-slate-500 mt-0.5">{v.minSpend}</div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{v.description}</p>
                </div>
              </div>

              {/* Code Box & Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-dashed border-slate-300 font-mono text-xs font-extrabold text-slate-900">
                  <span>{v.code}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(v.code)}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    {copiedCode === v.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Đã lưu</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Lưu mã</span>
                      </>
                    )}
                  </button>
                  <a
                    href="https://shopee.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-orange-50 text-slate-600 hover:text-orange-600 transition-colors"
                    title="Mở Shopee"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
