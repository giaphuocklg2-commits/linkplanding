"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link2,
  Clipboard,
  Zap,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  RefreshCw,
} from "lucide-react";

interface SampleItem {
  name: string;
  url: string;
  price: number;
  commission: number;
}

const SAMPLES: SampleItem[] = [
  {
    name: "Tai nghe Bluetooth ANC",
    url: "https://shopee.vn/product/123456/7890123",
    price: 499000,
    commission: 32000,
  },
  {
    name: "Áo thun Form Rộng Unisex",
    url: "https://shopee.vn/product/888999/1122334",
    price: 189000,
    commission: 15000,
  },
  {
    name: "Nồi chiên không dầu 6L",
    url: "https://shopee.vn/product/555666/9988776",
    price: 1250000,
    commission: 80000,
  },
];

export default function LinkDemo() {
  const [inputUrl, setInputUrl] = useState(SAMPLES[0].url);
  const [activeSample, setActiveSample] = useState<SampleItem>(SAMPLES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasConverted, setHasConverted] = useState(true);

  const handlePasteClipboard = async () => {
    try {
      if (navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setInputUrl(text);
        }
      }
    } catch {
      setInputUrl(SAMPLES[1].url);
      setActiveSample(SAMPLES[1]);
    }
  };

  const handleSelectSample = (s: SampleItem) => {
    setActiveSample(s);
    setInputUrl(s.url);
    handleConvert(s);
  };

  const handleConvert = (itemToConvert = activeSample) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setHasConverted(true);
    }, 600);
  };

  const formatVnd = (num: number) => {
    return new Intl.NumberFormat("vi-VN").format(num) + "đ";
  };

  const userCashback = Math.round(activeSample.commission * 0.8);

  return (
    <section id="demo" className="py-20 md:py-28 relative bg-[#F4F8FF]/80 border-y border-blue-100/60">
      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-200/20 via-cyan-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-linkp-blue text-xs font-extrabold tracking-wider uppercase border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trải nghiệm trực quan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1736] tracking-tight">
            Thử cảm giác <span className="text-gradient">dùng LinkP</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dán thử link sản phẩm để thấy tốc độ chuyển đổi và cơ chế tính hoàn tiền 80% hoa hồng ròng minh bạch.
          </p>
        </div>

        {/* Interactive Converter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_20px_50px_rgba(22,119,242,0.08)] space-y-6"
        >
          {/* Sample Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-500">Mẫu link thử nhanh:</span>
            {SAMPLES.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSample(s)}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  activeSample.name === s.name
                    ? "bg-linkp-blue text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="space-y-3">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider">
              Dán link Shopee hoặc TikTok — nhận 80% hoa hồng ròng đủ điều kiện
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="Dán link sản phẩm Shopee hoặc TikTok Shop..."
                  className="w-full pl-4 pr-12 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-linkp-blue focus:bg-white transition-all shadow-inner"
                />
                <button
                  type="button"
                  onClick={handlePasteClipboard}
                  title="Dán từ Clipboard"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-linkp-blue hover:bg-blue-50 rounded-xl transition-colors"
                >
                  <Clipboard className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleConvert()}
                disabled={isLoading}
                className="btn-primary text-white font-extrabold text-sm px-7 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 shrink-0"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>ĐANG XỬ LÝ...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-white" />
                    <span>CHUYỂN ĐỔI LINK NGAY ⚡</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Simulated Conversion Result Box */}
          <AnimatePresence mode="wait">
            {hasConverted && !isLoading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-gradient-to-tr from-blue-50/70 via-slate-50 to-emerald-50/50 border border-blue-200/80 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-linkp-blue">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Đã sẵn sàng mua
                        </span>
                        <span className="text-xs text-slate-400">Sub-ID: u_103576</span>
                      </div>
                      <h4 className="text-base font-extrabold text-[#0B1736] tracking-tight mt-0.5">
                        {activeSample.name}
                      </h4>
                    </div>
                  </div>

                  <a
                    href="#download"
                    className="btn-primary text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>MUA NGAY VÀO APP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 3-Column Calculation Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-xs text-slate-500 font-medium">Giá sản phẩm</span>
                    <p className="text-lg font-black text-slate-800 tracking-tight mt-1">
                      {formatVnd(activeSample.price)}
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-xs text-slate-500 font-medium">Hoa hồng sàn dự kiến</span>
                    <p className="text-lg font-black text-blue-600 tracking-tight mt-1">
                      +{formatVnd(activeSample.commission)}
                    </p>
                  </div>

                  <div className="bg-emerald-600 text-white p-4 rounded-xl shadow-md shadow-emerald-500/20 border border-emerald-500">
                    <div className="flex items-center justify-between sm:justify-start gap-1">
                      <span className="text-xs text-emerald-100 font-bold">Bạn nhận (80% ròng)</span>
                      <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded font-black">⚡ MAX</span>
                    </div>
                    <p className="text-xl font-black tracking-tight mt-1">
                      ~{formatVnd(userCashback)}
                    </p>
                  </div>
                </div>

                {/* Transparency Note */}
                <div className="text-xs text-slate-500 flex items-start gap-2 bg-white/80 p-3 rounded-xl border border-slate-200/60">
                  <Zap className="w-4 h-4 text-linkp-blue shrink-0 mt-0.5" />
                  <span>
                    <strong>Cách tính chuẩn xác:</strong> LinkP nhận được {formatVnd(activeSample.commission)} hoa hồng tiếp thị từ sàn đối tác và chia sẻ trực tiếp <strong>80% ({formatVnd(userCashback)})</strong> cho bạn sau khi hoàn thành đơn.
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
