export const site = {
  name: "류성국",
  hanja: "柳星國",
  party: "더불어민주당",
  district: "창원시 다선거구",
  neighborhood: "명곡·봉림",
  ballotLabel: "창원시의원 후보 1-가",
  slogan: "성실한 아들, 일 잘하는 우리동네 젊은 일꾼",
  message: "생각이 달라도 다 함께 살아갈 시민이다.",
  secondMessage: "시민의 삶을 바꾸는 정치!",
  election: "2026년 제9회 전국동시지방선거",
  description: "더불어민주당 창원시 다선거구 명곡·봉림 류성국 시의원 후보 홈페이지"
};

export const profile = {
  intro:
    "명곡과 봉림의 일상 가까이에서 듣고, 동네의 작은 불편부터 성실하게 바꾸는 젊은 생활정치 후보입니다.",
  education: "부산대학교 행정대학원 행정학과 석사과정 재학 중",
  careers: [
    "현 더불어민주당 경상남도당 대변인",
    "전 경상국립대학교 울산경남지역혁신플랫폼 총괄운영센터 근무"
  ],
  disclosure: ["직업: 정당인", "전과: 없음", "공개자료 기준으로 주요 이력을 안내합니다"]
};

export const policies = [
  {
    title: "제2외국어 교육 접근성",
    tag: "교육",
    summary: "창원 안에서도 다양한 언어를 배울 수 있도록 청소년과 주민의 교육 선택지를 넓히겠습니다.",
    status: "동네에서 배우는 교육 기회"
  },
  {
    title: "깐깐한 세금 감시",
    tag: "예산",
    summary: "시민의 세금이 꼭 필요한 곳에 쓰이도록 예산 편성부터 집행까지 꼼꼼하게 살피겠습니다.",
    status: "낭비 없는 생활 예산"
  }
];

export const district = {
  total: {
    population: "65,804명",
    households: "34,856세대",
    area: "18.80㎢"
  },
  towns: [
    {
      name: "명곡동",
      area: "6.62㎢",
      population: "37,745명",
      households: "18,200세대",
      units: "86통 440반",
      note: "1997년 7월 14일 도계, 명서1, 명서2동이 명곡동으로 통합"
    },
    {
      name: "봉림동",
      area: "12.18㎢",
      population: "28,059명",
      households: "16,656세대",
      units: "62통 295반",
      note: "경남도청 등 도 단위 기관 소재, KTX 창원중앙역과 도로망이 만나는 교통 요충지"
    }
  ]
};

export const activities = [
  "SNS 공약 카드뉴스",
  "현장 인사와 동네 소식",
  "주민 제안과 생활 의제"
];

export type MapCategory = "지역거점" | "공약" | "활동";

export type MapPin = {
  id: string;
  title: string;
  category: MapCategory;
  district: string;
  summary: string;
  lat: number;
  lng: number;
  pinColor?: string;
  status: string;
};

export const mapFilters = ["전체", "지역거점", "공약", "활동"] as const;

export const mapPins: MapPin[] = [
  {
    id: "myeonggok-center",
    title: "명곡동 행정복지센터 일대",
    category: "지역거점",
    district: "명곡동",
    summary: "명곡동 주민 생활과 행정 민원이 만나는 중심 생활권입니다.",
    lat: 35.2588,
    lng: 128.6371,
    pinColor: "#004EA2",
    status: "생활권"
  },
  {
    id: "bongnim-center",
    title: "봉림동 행정복지센터 일대",
    category: "지역거점",
    district: "봉림동",
    summary: "봉림동 주민의 이동, 교육, 행정 수요가 이어지는 생활 거점입니다.",
    lat: 35.2447,
    lng: 128.6857,
    pinColor: "#26A7DF",
    status: "생활권"
  },
  {
    id: "second-language",
    title: "제2외국어 교육 접근성",
    category: "공약",
    district: "명곡·봉림",
    summary: "멀리 가지 않아도 배움의 기회를 넓히는 교육 공약입니다.",
    lat: 35.2513,
    lng: 128.6601,
    pinColor: "#E51B35",
    status: "교육"
  },
  {
    id: "tax-watch",
    title: "깐깐한 세금 감시",
    category: "공약",
    district: "창원시 다선거구",
    summary: "동네에 필요한 예산은 챙기고 낭비는 줄이는 예산 감시 공약입니다.",
    lat: 35.2381,
    lng: 128.6811,
    pinColor: "#003476",
    status: "예산"
  }
];

export const primaryNavLinks = [
  { label: "홈", href: "/#top" },
  { label: "소개", href: "/#profile" },
  { label: "지도", href: "/#map" }
];

export const menuLinks = [
  { label: "홈", href: "/#top", description: "메인으로 돌아가기" },
  { label: "소개", href: "/#profile", description: "후보 이력과 공개자료" },
  { label: "지도", href: "/#map", description: "명곡·봉림 소통지도" },
  { label: "공약", href: "/policies/", description: "생활 공약 자세히 보기" },
  { label: "동네", href: "/district/", description: "명곡·봉림 생활권 정보" },
  { label: "활동", href: "/activities/", description: "카드뉴스와 현장 소식" },
  { label: "문의", href: "/contact/", description: "동네 제안 남기기" }
];

export const instagramUrl = "https://www.instagram.com/seongguk_ryu99?igsh=M2pnaHAwY3czd2d6";
