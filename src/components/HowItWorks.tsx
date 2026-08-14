"use client";

import { motion } from "framer-motion";
import { Link2, RefreshCw, Wallet, ArrowRight } from "lucide-react";
import { STEPS } from "@/data/content";

const STEP_ICONS = [Link2, RefreshCw, Wallet];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-linkp-blue text-xs font-extrabold tracking-wider uppercase border border-blue-200/60">
            Quy trình đơn giản
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1736] tracking-tight">
            Hoàn tiền chỉ trong <span className="text-gradient">3 bước</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Không thay đổi thói quen mua sắm của bạn, chỉ cần thêm 1 chạm chuyển đổi để nhận tiền thật.
          </p>
        </div>

        {/* Steps Progression Grid with Connection Line */}
        <div className="relative">
          {/* Desktop Connecting SVG Curve */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-8 h-1 -z-10">
            <svg
              className="w-full h-12 stroke-blue-200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="12%"
                y1="50%"
                x2="88%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((item, index) => {
              const Icon = STEP_ICONS[index];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_15px_35px_rgba(11,23,54,0.04)] hover:shadow-[0_20px_45px_rgba(22,119,242,0.12)] hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-linkp-blue to-linkp-cyan text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-4xl font-black text-slate-200 group-hover:text-blue-100 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <div className="space-y-2">
                      <div className="inline-block text-[11px] font-bold text-linkp-blue bg-blue-50 px-2.5 py-0.5 rounded-md">
                        {item.highlight}
                      </div>
                      <h3 className="text-xl font-black text-[#0B1736] tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Step Bottom Indicator */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-linkp-blue transition-colors">
                    <span>Bước {item.step}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
