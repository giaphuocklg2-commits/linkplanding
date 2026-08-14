"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Building2 } from "lucide-react";

const TRUST_CARDS = [
  {
    icon: Eye,
    title: "Minh bạch từng đơn hàng",
    desc: "Mọi đơn hàng từ Shopee hay TikTok Shop đều hiển thị rõ trạng thái: Chờ xác nhận, Đã duyệt, hoặc Bị từ chối cùng thời gian đối soát rõ ràng.",
  },
  {
    icon: Lock,
    title: "Bảo mật PIN rút tiền 6 số",
    desc: "Tài khoản được bảo vệ 2 lớp với mã PIN rút tiền 6 số riêng biệt. Chỉ bạn mới có quyền tạo lệnh rút hoa hồng về tài khoản ngân hàng.",
  },
  {
    icon: Building2,
    title: "Liên kết 40+ Ngân hàng Napas247",
    desc: "Hỗ trợ rút về mọi ngân hàng tại Việt Nam (Techcombank, MBBank, VCB, ACB, VietinBank...) thông qua mã chuẩn VietQR chuyển nhanh 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Không thu bất kỳ loại phí nào",
    desc: "LinkP cam kết 100% miễn phí trọn đời. Bạn không mất phí duy trì, không phí chuyển đổi link và không mất phí rút tiền.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-linkp-blue text-xs font-black tracking-wider uppercase border border-blue-200/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Cam kết an tâm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1736] tracking-tight">
            Tiền của bạn, <span className="text-gradient">luôn rõ ràng & bảo vệ</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Chúng tôi xây dựng LinkP với nguyên tắc tài chính minh bạch, nói không với những lời hứa ảo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_15px_35px_rgba(11,23,54,0.04)] hover:border-blue-300 hover:shadow-[0_20px_45px_rgba(22,119,242,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-linkp-blue flex items-center justify-center border border-blue-100 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#0B1736] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
