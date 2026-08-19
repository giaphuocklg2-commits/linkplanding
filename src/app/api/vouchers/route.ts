import { NextResponse } from "next/server";

export interface ParsedVoucher {
  id: string;
  shop: string;
  scope: string;
  used?: string;
  title: string;
  meta: string;
  code: string;
  link: string;
  category: "all" | "toan-san" | "shopee" | "tiki" | "mall";
}

// Fallback real vouchers parsed directly from matumi.vn/ma-giam-gia
const FALLBACK_VOUCHERS: ParsedVoucher[] = [
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
    id: "v-5",
    shop: "Shopee",
    scope: "Toàn sàn",
    used: "Đã dùng 58%",
    title: "Giảm 22% tối đa 500K",
    meta: "Đơn từ 50K · HSD 31/12",
    code: "METAPAR2MARD22750",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fm%2Fkol-affiliate&affiliate_id=17303130585&sub_id=linkp-web",
    category: "toan-san"
  },
  {
    id: "v-6",
    shop: "Tiki",
    scope: "Toàn sàn",
    title: "Giảm 10%",
    meta: "HSD 07/09",
    code: "NSLD2",
    link: "https://tiki.vn",
    category: "tiki"
  },
  {
    id: "v-7",
    shop: "Tiki",
    scope: "Toàn sàn",
    title: "Giảm 10K",
    meta: "Đơn từ 200K · HSD 31/12",
    code: "HKIM10",
    link: "https://tiki.vn",
    category: "tiki"
  },
  {
    id: "v-8",
    shop: "Shopee",
    scope: "PUMA Official Store",
    title: "Giảm 35%-tối đa 0 VNĐ cho đơn tối thiểu 1,500,000 VNĐ",
    meta: "Đơn từ 1.5tr · HSD 20/08",
    code: "PUMA20198",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488444519780352&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-9",
    shop: "Shopee",
    scope: "PUMA Official Store",
    title: "Giảm 25% cho mọi đơn hàng",
    meta: "HSD 31/08",
    code: "PUMABD25",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1468556294656000&affiliate_id=17394010599&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-10",
    shop: "Shopee",
    scope: "PUMA Official Store",
    title: "Giảm 30% cho đơn hàng",
    meta: "HSD 20/08",
    code: "PUMA19208",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488442841534464&affiliate_id=17348340657&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-11",
    shop: "Shopee",
    scope: "WMF Official Store",
    title: "Giảm 4%-tối đa 1,000,000 VNĐ cho đơn tối thiểu 100,000 VNĐ",
    meta: "Đơn từ 100K · HSD 31/08",
    code: "WMFO4NEW",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489559994404864&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-12",
    shop: "Shopee",
    scope: "Lam Thảo Cosmetics",
    title: "Giảm 100,000 VNĐ cho đơn tối thiểu 299,000 VNĐ",
    meta: "Đơn từ 299K · HSD 26/08",
    code: "LAMTSHIMB",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489941817495552&affiliate_id=17394010599&sub_id=linkp-web",
    category: "shopee"
  },
  {
    id: "v-13",
    shop: "Shopee",
    scope: "TIAM KOREA",
    title: "Giảm 200,000 VNĐ cho đơn tối thiểu 0 VNĐ",
    meta: "HSD 22/08",
    code: "MINCFD",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489680002355200&affiliate_id=17348340657&sub_id=linkp-web",
    category: "shopee"
  },
  {
    id: "v-14",
    shop: "Shopee",
    scope: "CANIFA Official Store",
    title: "Giảm 100,000 VNĐ cho đơn tối thiểu 999,000 VNĐ",
    meta: "Đơn từ 999K · HSD 20/08",
    code: "CANIF1985",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488914221535232&affiliate_id=17394010599&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-15",
    shop: "Shopee",
    scope: "CANIFA Official Store",
    title: "Giảm 70,000 VNĐ cho đơn tối thiểu 799,000 VNĐ",
    meta: "Đơn từ 799K · HSD 20/08",
    code: "CANIF1984",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488913895952384&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-16",
    shop: "Shopee",
    scope: "CANIFA Official Store",
    title: "Giảm 50,000 VNĐ cho đơn tối thiểu 599,000 VNĐ",
    meta: "Đơn từ 599K · HSD 20/08",
    code: "CANIF1983",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488913517809664&affiliate_id=17348340657&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-17",
    shop: "Shopee",
    scope: "CANIFA Official Store",
    title: "Giảm 30,000 VNĐ cho đơn tối thiểu 449,000 VNĐ",
    meta: "Đơn từ 449K · HSD 20/08",
    code: "CANIF1982",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1488913122627584&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-18",
    shop: "Shopee",
    scope: "CANIFA Official Store",
    title: "Giảm 30,000 VNĐ cho đơn tối thiểu 300,000 VNĐ",
    meta: "Đơn từ 300K · HSD 31/08",
    code: "MAM812504",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1476667860094976&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-19",
    shop: "Shopee",
    scope: "Hafele Official Store",
    title: "Giảm 690,000 VNĐ cho đơn tối thiểu 9,500,000 VNĐ",
    meta: "Đơn từ 9.5tr · HSD 31/08",
    code: "HAFE72666",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489536160927744&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-20",
    shop: "Shopee",
    scope: "Cocoon Vietnam Chính Hãng",
    title: "Giảm 35,000 VNĐ cho đơn tối thiểu 399,000 VNĐ",
    meta: "Đơn từ 399K · HSD 22/08",
    code: "COCOON35E",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489684967886848&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-21",
    shop: "Shopee",
    scope: "Cocoon Vietnam Chính Hãng",
    title: "Giảm 20,000 VNĐ cho đơn tối thiểu 299,000 VNĐ",
    meta: "Đơn từ 299K · HSD 22/08",
    code: "COCOON20E",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489684666159104&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-22",
    shop: "Shopee",
    scope: "Cocoon Vietnam Chính Hãng",
    title: "Giảm 10,000 VNĐ cho đơn tối thiểu 199,000 VNĐ",
    meta: "Đơn từ 199K · HSD 22/08",
    code: "COCOON10E",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489684355780608&affiliate_id=17394010599&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-23",
    shop: "Shopee",
    scope: "Kính Mắt Anna Official",
    title: "Giảm 50,000 VNĐ cho đơn tối thiểu 799,000 VNĐ",
    meta: "Đơn từ 799K · HSD 24/08",
    code: "ANNA5079",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489659767328768&affiliate_id=17394010599&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-24",
    shop: "Shopee",
    scope: "Kính Mắt Anna Official",
    title: "Giảm 20,000 VNĐ cho đơn tối thiểu 259,000 VNĐ",
    meta: "Đơn từ 259K · HSD 24/08",
    code: "ANNA2029",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489659491946496&affiliate_id=17394010599&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-25",
    shop: "Shopee",
    scope: "Midori Workshop",
    title: "Giảm 150,000 VNĐ cho đơn tối thiểu 344,000 VNĐ",
    meta: "Đơn từ 344K · HSD 18/09",
    code: "MIDOGVBR",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489511682969600&affiliate_id=17394010599&sub_id=linkp-web",
    category: "shopee"
  },
  {
    id: "v-26",
    shop: "Shopee",
    scope: "Midori Workshop",
    title: "Giảm 130,000 VNĐ cho đơn tối thiểu 390,000 VNĐ",
    meta: "Đơn từ 390K · HSD 18/09",
    code: "MIDOBGF",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489511155929088&affiliate_id=17303130585&sub_id=linkp-web",
    category: "shopee"
  },
  {
    id: "v-27",
    shop: "Shopee",
    scope: "DELI OFFICE OFFICIAL STORE",
    title: "Giảm 6%-tối đa 25,000 VNĐ cho đơn tối thiểu 199,000 VNĐ",
    meta: "Đơn từ 199K · HSD 31/08",
    code: "DELIODI68",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489543257821184&affiliate_id=17303130585&sub_id=linkp-web",
    category: "mall"
  },
  {
    id: "v-28",
    shop: "Shopee",
    scope: "Deli Tools Official Store",
    title: "Giảm 7%-tối đa 20,000 VNĐ cho đơn tối thiểu 249,000 VNĐ",
    meta: "Đơn từ 249K · HSD 31/08",
    code: "DELIKSAJD",
    link: "https://s.shopee.vn/an_redir?origin_link=https%3A%2F%2Fshopee.vn%2Fsearch%3FpromotionId%3D1489699085520896&affiliate_id=17394010599&sub_id=linkp-web",
    category: "mall"
  }
];

function parseVouchersFromHtml(html: string): ParsedVoucher[] {
  const vouchers: ParsedVoucher[] = [];
  const articleRegex = /<article class="v-card">([\s\S]*?)<\/article>/g;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = articleRegex.exec(html)) !== null) {
    const cardContent = match[1];

    const shopMatch = /<span class="v-shop"[^>]*>([^<]+)<\/span>/.exec(cardContent);
    const shop = shopMatch ? shopMatch[1].trim() : "Shopee";

    const scopeMatch = /<span class="v-scope[^"]*"[^>]*>([\s\S]*?)<\/span>/.exec(cardContent);
    let scope = scopeMatch ? scopeMatch[1].replace(/<[^>]+>/g, "").trim() : "Toàn sàn";
    scope = scope.replace(/^🏪\s*/, "");

    const usedMatch = /<span class="v-used">([^<]+)<\/span>/.exec(cardContent);
    const used = usedMatch ? usedMatch[1].trim() : undefined;

    const titleMatch = /<h3 class="v-title">([^<]+)<\/h3>/.exec(cardContent);
    const title = titleMatch ? titleMatch[1].trim() : "Mã giảm giá hấp dẫn";

    const metaMatch = /<p class="v-meta">([^<]+)<\/p>/.exec(cardContent);
    const meta = metaMatch ? metaMatch[1].trim() : "Hạn dùng trong ngày";

    const codeMatch = /data-code="([^"]+)"/.exec(cardContent);
    const code = codeMatch ? codeMatch[1].trim() : "LINKP";

    const linkMatch = /href="([^"]+)"/.exec(cardContent);
    let link = linkMatch ? linkMatch[1].replace(/&amp;/g, "&") : "https://shopee.vn";

    // Replace default sub_id with LinkP sub_id
    link = link.replace(/sub_id=[^&]*/, "sub_id=linkp-web");

    let category: ParsedVoucher["category"] = "shopee";
    if (scope.toLowerCase().includes("toàn sàn")) {
      category = "toan-san";
    } else if (shop.toLowerCase().includes("tiki")) {
      category = "tiki";
    } else if (scope.toLowerCase().includes("official") || scope.toLowerCase().includes("mall") || scope.toLowerCase().includes("store")) {
      category = "mall";
    }

    idx++;
    vouchers.push({
      id: `live-${idx}`,
      shop,
      scope,
      used,
      title,
      meta,
      code,
      link,
      category,
    });
  }

  return vouchers;
}

export async function GET() {
  try {
    const res = await fetch("https://matumi.vn/ma-giam-gia", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      return NextResponse.json({
        success: true,
        source: "fallback",
        count: FALLBACK_VOUCHERS.length,
        data: FALLBACK_VOUCHERS,
      });
    }

    const html = await res.text();
    const parsed = parseVouchersFromHtml(html);

    if (parsed.length === 0) {
      return NextResponse.json({
        success: true,
        source: "fallback",
        count: FALLBACK_VOUCHERS.length,
        data: FALLBACK_VOUCHERS,
      });
    }

    return NextResponse.json({
      success: true,
      source: "live",
      count: parsed.length,
      data: parsed,
    });
  } catch (error) {
    return NextResponse.json({
      success: true,
      source: "fallback-error",
      count: FALLBACK_VOUCHERS.length,
      data: FALLBACK_VOUCHERS,
    });
  }
}
