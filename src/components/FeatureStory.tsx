"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FEATURES } from "@/data/content";
import PhoneMockup from "./PhoneMockup";

export default function FeatureStory() {
  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-linkp-blue text-xs font-extrabold tracking-wider uppercase border border-blue-200/60">
            Trải nghiệm toàn diện
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1736] tracking-tight">
            Thiết kế vì sự <span className="text-gradient">minh bạch & tiện lợi</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Mọi tính năng trên LinkP đều được xây dựng để mang lại sự an tâm tuyệt đối cho trải nghiệm mua sắm của bạn.
          </p>
        </div>

        {/* Alternating Feature Showcases */}
        {FEATURES.map((feature, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
              feature.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Visual Phone Presentation Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-6 flex justify-center ${
                feature.reverse ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-tr from-linkp-blue/15 to-linkp-cyan/15 rounded-full blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />
                <PhoneMockup imageSrc={feature.imageSrc} alt={feature.alt} />
              </div>
            </motion.div>

            {/* Feature Story Text Column */}
            <motion.div
              initial={{ opacity: 0, x: feature.reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`lg:col-span-6 space-y-6 text-center lg:text-left ${
                feature.reverse ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="inline-block text-xs font-black tracking-wider text-linkp-blue uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                {feature.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1736] tracking-tight leading-snug">
                {feature.title}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Bullet Detail List */}
              <div className="space-y-3 pt-2">
                {feature.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
