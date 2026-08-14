"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Download, Sparkles } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-nav shadow-[0_10px_30px_rgba(11,23,54,0.05)] border-b border-slate-200/70"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(22,119,242,0.25)] group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/assets/logo.png"
              alt="LinkP Logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold text-[#0B1736] tracking-tight">
                Link<span className="text-linkp-blue">P</span>
              </span>
              <span className="bg-blue-50 text-linkp-blue text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-blue-200/60">
                80%
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
              Hoàn tiền mua sắm
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-linkp-blue hover:bg-blue-50/60 rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action CTAs (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://vrsaihfqfgmvrtxtyxpf.supabase.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-700 hover:text-linkp-blue px-3 py-2 transition-colors"
          >
            Đăng nhập
          </a>
          <Link
            href="#download"
            className="btn-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md shadow-blue-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải LinkP</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="#download"
            className="btn-primary text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải App</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 bg-white/80 border border-slate-200/80 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav mt-2 border-y border-slate-200 px-6 py-5 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-linkp-blue hover:bg-blue-50 rounded-xl transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <Link
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-white text-sm font-bold w-full py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Tải LinkP miễn phí</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
