"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Ticket, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Zap,
  Search,
  Tag,
  Store,
  Flame
} from "lucide-react";
import { ParsedVoucher } from "@/app/api/vouchers/route";

const INITIAL_FALLBACK_VOUCHERS: ParsedVoucher[] = [
  {
    id: "v-1",
    shop: "Shopee",
    scope: "Toàn sàn",
    used: "Đã dùng 23%",
    title: "Giảm 35% tối đa 700K",
    meta: "HSD 31/08",
    code: "DDVPC3570001808U",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488808434110464&affiliate_id=17394010599&sub_id=linkp-web",
    category: "toan-san"
  },
  {
    id: "v-2",
    shop: "Shopee",
    scope: "Toàn sàn",
    used: "Đã dùng 10%",
    title: "Giảm 35% tối đa 120K",
    meta: "HSD 31/08",
    code: "DDVPC3512001808U",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488810731016192&affiliate_id=17348340657&sub_id=linkp-web",
    category: "toan-san"
  },
  {
    id: "v-3",
    shop: "Shopee",
    scope: "Toàn sàn",
    used: "Đã dùng 92%",
    title: "Giảm 22% tối đa 100K",
    meta: "Đơn từ 150K · HSD 31/12",
    code: "YOUTUBEAPR210105",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fm%2FYouTube-Shopping-Voucher&affiliate_id=17303130585&sub_id=linkp-web",
    category: "toan-san"
  },
  {
    id: "v-4",
    shop: "Shopee",
    scope: "Toàn sàn",
    used: "Đã dùng 62%",
    title: "Giảm 20% tối đa 2tr",
    meta: "Đơn từ 1.3tr · HSD 19/01",
    code: "YOUTUBEMAR200108",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1364363542564864&affiliate_id=17348340657&sub_id=linkp-web",
    category: "toan-san"
  },
  {
    id: "v-8",
    shop: "Shopee",
    scope: "PUMA Official Store",
    title: "Giảm 35% cho đơn tối thiểu 1.500.000đ",
    meta: "Đơn từ 1.5tr · HSD 20/08",
    code: "PUMA20198",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488444519780352&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-14",
    shop: "Shopee",
    scope: "CANIFA Official Store",
    title: "Giảm 100.000 VNĐ cho đơn tối thiểu 999.000 VNĐ",
    meta: "Đơn từ 999K · HSD 20/08",
    code: "CANIF1985",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488914221535232&affiliate_id=17394010599&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-12",
    shop: "Shopee",
    scope: "Lam Thảo Cosmetics",
    title: "Giảm 100.000 VNĐ cho đơn tối thiểu 299.000 VNĐ",
    meta: "Đơn từ 299K · HSD 26/08",
    code: "LAMTSHIMB",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489941817495552&affiliate_id=17394010599&sub_id=linkp-web",
    category: "shopee"
  },
  {
    id: "v-20",
    shop: "Shopee",
    scope: "Cocoon Vietnam Chính Hãng",
    title: "Giảm 35.000 VNĐ cho đơn tối thiểu 399.000 VNĐ",
    meta: "Đơn từ 399K · HSD 22/08",
    code: "COCOON35E",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489684967886848&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  }
];

export default function VoucherRadar() {
  const [vouchers, setVouchers] = useState<ParsedVoucher[]>(INITIAL_FALLBACK_VOUCHERS);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalCount, setTotalCount] = useState<number>(485);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({ hours: 2, minutes: 45, seconds: 30 });

  // Fetch live vouchers from matumi.vn via our Next.js API route
  useEffect(() => {
    async function loadLiveVouchers() {
      try {
        const res = await fetch("/api/vouchers");
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setVouchers(json.data);
            setTotalCount(json.count || json.data.length);
          }
        }
      } catch (err) {
        console.error("Failed to load live vouchers:", err);
      } finally {
        setLoading(false);
      }
    }
    loadLiveVouchers();
  }, []);

  // Countdown timer to next Flash Sale
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
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Filter logic
  const filteredList = useMemo(() => {
    return vouchers.filter(item => {
      const matchTab = 
        activeTab === "all" ||
        (activeTab === "toan-san" && (item.category === "toan-san" || item.scope.toLowerCase().includes("toàn sàn"))) ||
        (activeTab === "mall" && (item.category === "mall" || item.scope.toLowerCase().includes("official") || item.scope.toLowerCase().includes("mall"))) ||
        (activeTab === "shopee" && item.shop.toLowerCase().includes("shopee")) ||
        (activeTab === "tiki" && item.shop.toLowerCase().includes("tiki"));

      const matchSearch = 
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.scope.toLowerCase().includes(searchQuery.toLowerCase());

      return matchTab && matchSearch;
    });
  }, [vouchers, activeTab, searchQuery]);

  return (
    <section id="vouchers" className="py-20 md:py-28 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 text-xs font-bold shadow-sm">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>LIVE FEED · {totalCount}+ MÃ GIẢM GIÁ MỚI NHẤT HÔM NAY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Săn mã giảm giá sàn & <br className="hidden sm:inline" />
              <span className="text-gradient">Nhận thêm hoàn tiền đến 90%</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
              Tổng hợp mã giảm giá Shopee, Tiki còn hiệu lực, cập nhật liên tục. Dùng mã xong vẫn nhận trọn vẹn hoa hồng khi mua qua app LinkP.
            </p>
          </div>

          {/* Golden Hour Countdown */}
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

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: "all", label: `Tất cả (${vouchers.length})`, icon: Ticket },
              { id: "toan-san", label: "Toàn sàn ⚡", icon: Sparkles },
              { id: "mall", label: "Shopee Mall", icon: ShoppingBag },
              { id: "shopee", label: "Shopee", icon: Tag },
              { id: "tiki", label: "Tiki", icon: Store },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-orange-400" : "text-slate-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm theo tên shop, mã giảm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-linkp-blue shadow-sm"
            />
          </div>
        </div>

        {/* Voucher Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredList.slice(0, 30).map((v) => {
            const isShopee = v.shop.toLowerCase().includes("shopee");
            const isToanSan = v.scope.toLowerCase().includes("toàn sàn");

            return (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Shop Badge & Scope */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span 
                      className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full ${
                        isShopee 
                          ? "bg-orange-50 text-[#EE4D2D] border border-[#EE4D2D]/20" 
                          : "bg-blue-50 text-[#1A94FF] border border-[#1A94FF]/20"
                      }`}
                    >
                      {v.shop}
                    </span>

                    <span 
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full truncate max-w-[170px] ${
                        isToanSan 
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200/80" 
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      }`}
                      title={v.scope}
                    >
                      {isToanSan ? "Toàn sàn" : `🏪 ${v.scope}`}
                    </span>

                    {v.used && (
                      <span className="text-[10px] font-bold text-slate-400 ml-auto">
                        {v.used}
                      </span>
                    )}
                  </div>

                  {/* Title & Meta */}
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 font-heading group-hover:text-linkp-blue transition-colors line-clamp-2">
                      {v.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{v.meta}</span>
                    </p>
                  </div>
                </div>

                {/* Actions Row */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(v.code)}
                    className={`flex-1 flex items-center justify-between px-3.5 py-2 rounded-xl font-mono text-xs font-extrabold border border-dashed transition-all ${
                      copiedCode === v.code
                        ? "bg-emerald-50 text-emerald-600 border-emerald-300 shadow-sm"
                        : "bg-blue-50/60 hover:bg-blue-100/60 text-slate-900 border-blue-300"
                    }`}
                  >
                    <span className="truncate">{v.code}</span>
                    {copiedCode === v.code ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 ml-1.5" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 ml-1.5" />
                    )}
                  </button>

                  <a
                    href={v.link}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1 shadow-sm active:scale-95 transition-all flex-shrink-0"
                  >
                    <span>Dùng mã</span>
                    <ExternalLink className="w-3 h-3 text-slate-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredList.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <Ticket className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-slate-600 font-bold">Không tìm thấy mã giảm giá phù hợp</p>
            <button 
              onClick={() => { setActiveTab("all"); setSearchQuery(""); }} 
              className="text-xs text-linkp-blue font-bold hover:underline"
            >
              Xem tất cả mã ({vouchers.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
