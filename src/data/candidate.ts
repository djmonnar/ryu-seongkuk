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
    "명곡과 봉림의 일상 가까이에서 듣고, 확인된 약속부터 성실하게 공개하는 젊은 생활정치 후보입니다.",
  education: "부산대학교 행정대학원 행정학과 석사과정 재학 중",
  careers: [
    "현 더불어민주당 경상남도당 대변인",
    "전 경상국립대학교 울산경남지역혁신플랫폼 총괄운영센터 근무"
  ],
  disclosure: ["직업: 정당인", "전과: 없음으로 공개자료에 표기", "최종 후보등록 정보는 중앙선거관리위원회 후보자 명부 기준으로 업데이트 예정"]
};

export const policies = [
  {
    title: "제2외국어 교육 접근성",
    tag: "교육",
    summary: "대도시를 가지 않아도 배울 수 있는 제2외국어 교육 접근성을 높이겠다는 취지의 공약입니다.",
    status: "원문 확인 후 세부 실행계획 업데이트"
  },
  {
    title: "깐깐한 세금 감시",
    tag: "예산",
    summary: "시민의 혈세가 낭비되지 않도록 예산을 꼼꼼하게 살피겠다는 취지의 공약입니다.",
    status: "예산·대상·일정 확인 후 업데이트"
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
  "공약 원문 공개 예정"
];

export type MapCategory = "지역거점" | "공약" | "활동준비";

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

export const mapFilters = ["전체", "지역거점", "공약", "활동준비"] as const;

export const mapPins: MapPin[] = [
  {
    id: "myeonggok-center",
    title: "명곡동 행정복지센터 일대",
    category: "지역거점",
    district: "명곡동",
    summary: "명곡동 생활권과 주민 소통 거점으로 표시한 초안 핀입니다.",
    lat: 35.2588,
    lng: 128.6371,
    pinColor: "#004EA2",
    status: "초안"
  },
  {
    id: "bongnim-center",
    title: "봉림동 행정복지센터 일대",
    category: "지역거점",
    district: "봉림동",
    summary: "봉림동 생활권과 주민 소통 거점으로 표시한 초안 핀입니다.",
    lat: 35.2447,
    lng: 128.6857,
    pinColor: "#26A7DF",
    status: "초안"
  },
  {
    id: "second-language",
    title: "제2외국어 교육 접근성",
    category: "공약",
    district: "명곡·봉림",
    summary: "대도시를 가지 않아도 배울 수 있는 교육 접근성 공약을 표시할 자리입니다.",
    lat: 35.2513,
    lng: 128.6601,
    pinColor: "#E51B35",
    status: "원문 확인 예정"
  },
  {
    id: "tax-watch",
    title: "깐깐한 세금 감시",
    category: "공약",
    district: "창원시 다선거구",
    summary: "예산 감시 공약의 현장·의정 활동을 연결할 자리입니다.",
    lat: 35.2381,
    lng: 128.6811,
    pinColor: "#003476",
    status: "원문 확인 예정"
  }
];

export const navLinks = [
  { label: "홈", href: "#top" },
  { label: "소개", href: "#profile" },
  { label: "공약", href: "#policies" },
  { label: "동네", href: "#district" },
  { label: "지도", href: "#map" },
  { label: "활동", href: "#activities" },
  { label: "문의", href: "#contact" }
];
