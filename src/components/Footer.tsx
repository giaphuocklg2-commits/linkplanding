"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="LinkP Logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-[#0B1736] tracking-tight">
                  Link<span className="text-linkp-blue">P</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
                  Hoàn tiền mua sắm
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              LinkP là nền tảng hoàn tiền mua sắm thông minh, chia sẻ trực tiếp đến 80% hoa hồng tiếp thị ròng từ các sàn thương mại điện tử hàng đầu về ví người dùng.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Chính sách hoàn tiền minh bạch 80%</span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#0B1736] uppercase tracking-wider">Sản phẩm</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="#how-it-works" className="hover:text-linkp-blue transition-colors">
                  Cách hoạt động
                </Link>
              </li>
              <li>
                <Link href="#demo" className="hover:text-linkp-blue transition-colors">
                  Trải nghiệm dán link
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-linkp-blue transition-colors">
                  Tính năng hoàn tiền
                </Link>
              </li>
              <li>
                <Link href="#referral" className="hover:text-linkp-blue transition-colors">
                  Giới thiệu bạn bè (+5%)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#0B1736] uppercase tracking-wider">Hỗ trợ</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="#faq" className="hover:text-linkp-blue transition-colors">
                  Câu hỏi thường gặp (FAQ)
                </Link>
              </li>
              <li>
                <a href="mailto:support@linkp.vn" className="hover:text-linkp-blue transition-colors">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="https://t.me/linkp_support" target="_blank" rel="noreferrer" className="hover:text-linkp-blue transition-colors">
                  Cộng đồng LinkP
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-[#0B1736] uppercase tracking-wider">Pháp lý</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <a href="#" className="hover:text-linkp-blue transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-linkp-blue transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-linkp-blue transition-colors">
                  Quy định đối soát hoàn tiền
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} LinkP Vietnam. All rights reserved. <br className="sm:hidden" />
            LinkP là ứng dụng hoàn tiền độc lập, không phải sản phẩm trực thuộc Shopee hay TikTok.
          </p>

          <div className="flex items-center gap-1">
            <span>Xây dựng với</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>tại Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
