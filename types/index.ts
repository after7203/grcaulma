export type ProdType = {
  _id: string;
  name: string;
  type?: string;
  imgSrc: string;
  price: number;
  category: Category;
};

export const Category = {
  cpu: "CPU",
  case: "케이스",
  cooler: "쿨러/튜닝",
  graphiccard: "그래픽카드",
  hdd: "HDD",
  mainboard: "메인보드",
  power: "파워",
  ram: "메모리",
  ssd: "SSD",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const Filter = {
  CPU: { by: "제조사", list: ["인텔", "AMD"] },
  그래픽카드: {
    by: "칩셋",
    list: [
      "GTX650",
      "GTX650 Ti",
      "GTX660",
      "GTX660 TI",
      "GTX750",
      "GTX750 Ti",
      "GTX760",
      "GTX950",
      "GTX960",
      "GTX970",
      "GTX1050",
      "GTX1050 Ti",
      "GTX1060",
      "GTX1070",
      "GTX1070 Ti",
      "GTX1080",
      "GTX1080 Ti",
      "GTX 1630",
      "GTX 1650",
      "GTX 1650 SUPER",
      "GTX 1660",
      "GTX 1660 SUPER",
      "GTX 1660 Ti",
      "RTX 2060",
      "RTX 2060 SUPER",
      "RTX 2070",
      "RTX 2070 SUPER",
      "RTX 2080",
      "RTX 2080 SUPER",
      "RTX 2080 Ti",
      "RTX 3050",
      "RTX 3060",
      "RTX 3060 Ti",
      "RTX 3070",
      "RTX 3070 Ti",
      "RTX 3080",
      "RTX 3080 Ti",
      "RTX 3090",
      "RTX 3090 Ti",
      "RTX 4070 Ti",
      "RTX 4080",
      "RTX 4090",
    ],
  },
} as const;

export const Service = {
  none: { price: 0, desc: "조립신청 + AS 상품을 선택해주세요" },
  basic: { price: 29000, desc: "기본조립 + 1년 방문 출장AS (1대분)" },
  premium: { price: 49000, desc: "프리미엄 조립 + 1년 방문 출장AS (1대분)" },
} as const;
export type Service = (typeof Service)[keyof typeof Service];

export const Sort = {
  NEW: "new",
  LOW_PRICE: "lowPrice",
  HIGH_PRICE: "highPrice",
  NAME: "name",
} as const;
export type Sort = (typeof Sort)[keyof typeof Sort];

export type CartItem = ProdType & { count: number };

export type CartType = {
  [category in Category]: Map<string, CartItem>;
} & { service: { price: number; desc: string; count: number } };
