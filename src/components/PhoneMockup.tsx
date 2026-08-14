"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PhoneMockupProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export default function PhoneMockup({
  imageSrc = "/assets/screen-home.png",
  alt = "Giao diện ứng dụng LinkP",
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto max-w-[310px] sm:max-w-[330px] md:max-w-[340px] ${className}`}>
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-linkp-blue/25 to-linkp-cyan/30 rounded-[48px] blur-2xl -z-10 opacity-70" />

      {/* Phone Hardware Chassis */}
      <div className="relative rounded-[44px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-[0_25px_60px_-15px_rgba(11,23,54,0.35),0_0_0_1px_rgba(255,255,255,0.15)_inset]">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 shadow-inner">
          <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700/50" />
        </div>

        {/* Screen Bezel Container */}
        <div className="relative rounded-[34px] overflow-hidden bg-white aspect-[9/19.5] shadow-inner border border-black/80">
          <Image
            src={imageSrc}
            alt={alt}
            width={340}
            height={730}
            className="w-full h-full object-cover select-none pointer-events-none"
            priority
          />
          {/* Subtle Screen Reflection Glare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none" />
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-20" />
      </div>
    </div>
  );
}
