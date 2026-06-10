export const site = {
  name: "류성국",
  hanja: "柳星國",
  party: "더불어민주당",
  district: "창원시 다선거구",
  neighborhood: "명곡·봉림",
  currentStatus: "창원시의원",
  officeTitle: "창원시의원",
  futureOfficeTitle: "창원시의원",
  slogan: "우리동네 젊은 일꾼",
  mainMessage: "명곡·봉림의 약속, 이제 의정으로 증명하겠습니다.",
  subMessage: "주민의 목소리를 듣고, 예산을 살피고, 생활의 변화를 만들겠습니다.",
  description: "창원시 다선거구 명곡·봉림 류성국 창원시의원의 약속 이행, 의정활동, 주민 제안을 기록하는 공식 홈페이지입니다.",
  domain: "류성국.kr"
};

export const profile = {
  intro:
    "류성국은 명곡과 봉림에서 받은 선택의 무게를 의정활동의 기준으로 삼겠습니다. 주민의 작은 불편을 기록하고, 확인하고, 공개하는 생활정치로 보답하겠습니다.",
  education: "부산대학교 행정대학원 행정학과 석사과정 재학 중",
  careers: [
    "현 더불어민주당 경상남도당 대변인",
    "전 경상국립대학교 울산경남지역혁신플랫폼 총괄운영센터 근무"
  ],
  disclosure: ["직업: 정당인", "전과: 없음", "확인된 공개자료 기준으로 주요 이력을 안내합니다"]
};

export type PromisePhase = "준비중" | "검토중" | "협의중" | "추진중" | "완료" | "장기과제" | "상시과제" | "민생점검";

export type PromiseItem = {
  title: string;
  category: string;
  electionPromise: string;
  currentAction: string;
  phase: PromisePhase;
  lastUpdated: string;
  links: Array<{ label: string; href: string }>;
};

export const promises: PromiseItem[] = [
  {
    title: "포켓 주차장으로 주차난 해소",
    category: "교통·생활",
    electionPromise: "동네 곳곳의 자투리 공간과 생활권 동선을 살펴 주민이 체감하는 주차 불편을 줄이겠습니다.",
    currentAction: "명곡·봉림 생활권의 주차 불편 지점과 활용 가능한 공간을 확인하겠습니다.",
    phase: "검토중",
    lastUpdated: "2026.06",
    links: []
  },
  {
    title: "한국·외국 거주민 상생협의체",
    category: "상생·공동체",
    electionPromise: "서로 다른 배경의 주민이 함께 안전하게 살아갈 수 있도록 소통과 협력의 창구를 만들겠습니다.",
    currentAction: "주민 소통 창구와 관계기관 협의 가능성을 검토하겠습니다.",
    phase: "준비중",
    lastUpdated: "2026.06",
    links: []
  },
  {
    title: "제2외국어 교육 접근성",
    category: "교육",
    electionPromise: "창원 안에서도 다양한 언어를 배울 수 있도록 청소년과 주민의 교육 선택지를 넓히겠습니다.",
    currentAction: "지역 교육 수요와 활용 가능한 프로그램을 살피겠습니다.",
    phase: "검토중",
    lastUpdated: "2026.06",
    links: []
  },
  {
    title: "깐깐한 세금 감시",
    category: "예산·감시",
    electionPromise: "시민의 세금이 꼭 필요한 곳에 쓰이도록 예산 편성부터 집행까지 꼼꼼하게 살피겠습니다.",
    currentAction: "예산 감시와 행정 견제를 상시 과제로 삼겠습니다.",
    phase: "상시과제",
    lastUpdated: "2026.06",
    links: []
  },
  {
    title: "불법 홍보관 퇴출",
    category: "민생보호",
    electionPromise: "주민 피해로 이어질 수 있는 불법·편법 홍보관 문제를 살피고 생활 안전을 지키겠습니다.",
    currentAction: "피해 우려와 주민 제보 여부를 살피고 관계기관 점검 방안을 확인하겠습니다.",
    phase: "민생점검",
    lastUpdated: "2026.06",
    links: []
  }
];

export const policies = promises.map((item) => ({
  title: item.title,
  tag: item.category,
  summary: item.currentAction,
  status: item.phase,
  videoUrl: ""
}));

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
      note: "주거, 교육, 행정 수요가 촘촘하게 이어지는 생활권입니다. 주민의 작은 불편부터 의정 출발점으로 삼겠습니다."
    },
    {
      name: "봉림동",
      area: "12.18㎢",
      population: "28,059명",
      households: "16,656세대",
      units: "62통 295반",
      note: "경남도청 등 주요 기관과 창원중앙역 생활권이 이어지는 지역입니다. 이동, 안전, 행정 접근성을 함께 살피겠습니다."
    }
  ],
  agendas: ["주거", "교육", "교통", "행정", "돌봄", "안전"]
};

export const activityRecords = [
  {
    title: "감사 인사",
    category: "현장활동",
    summary: "보내주신 선택의 무게를 잊지 않고 의정활동으로 보답하겠습니다.",
    status: "기록 준비중"
  },
  {
    title: "명곡·봉림 주민 인사",
    category: "현장활동",
    summary: "선거 이후에도 현장에서 주민의 목소리를 계속 듣겠습니다.",
    status: "진행중"
  },
  {
    title: "지역 현안 청취",
    category: "주민소통",
    summary: "생활권 불편과 제안을 모아 의정 과제로 정리하겠습니다.",
    status: "접수중"
  },
  {
    title: "창원시의회 등원 준비",
    category: "의회활동",
    summary: "확인되지 않은 직책이나 상임위 정보는 확정 뒤 공개하겠습니다.",
    status: "준비중"
  },
  {
    title: "약속 이행계획 정리",
    category: "약속이행",
    summary: "선거 당시 약속을 준비, 검토, 협의, 추진 단계로 나누어 공개하겠습니다.",
    status: "정리중"
  },
  {
    title: "SNS 카드뉴스와 현장 소식",
    category: "SNS",
    summary: "의정활동과 주민 소통 기록을 짧고 정확한 콘텐츠로 전하겠습니다.",
    status: "상시"
  }
];

export const activities = activityRecords.map((item) => item.title);

export type MapCategory = "생활거점" | "주민제안" | "점검중" | "약속이행" | "완료" | "장기과제";

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

export const mapFilters = ["전체", "생활거점", "주민제안", "점검중", "약속이행", "완료", "장기과제"] as const;

export const mapPins: MapPin[] = [
  {
    id: "myeonggok-center",
    title: "명곡동 행정복지센터 일대",
    category: "생활거점",
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
    category: "생활거점",
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
    category: "약속이행",
    district: "명곡·봉림",
    summary: "지역 교육 수요와 활용 가능한 프로그램을 살피는 약속 이행 과제입니다.",
    lat: 35.2513,
    lng: 128.6601,
    pinColor: "#E51B35",
    status: "검토중"
  },
  {
    id: "pocket-parking",
    title: "포켓 주차장으로 주차난 해소",
    category: "점검중",
    district: "명곡·봉림",
    summary: "생활권 안의 작은 공간부터 다시 살피는 주차난 완화 과제입니다.",
    lat: 35.2565,
    lng: 128.6483,
    pinColor: "#005BAC",
    status: "교통·생활"
  },
  {
    id: "resident-council",
    title: "한국·외국 거주민 상생협의체",
    category: "약속이행",
    district: "창원시 다선거구",
    summary: "다양한 주민이 함께 안전하게 살아가는 공동체 과제입니다.",
    lat: 35.2478,
    lng: 128.6717,
    pinColor: "#0099D8",
    status: "준비중"
  },
  {
    id: "tax-watch",
    title: "깐깐한 세금 감시",
    category: "장기과제",
    district: "창원시 다선거구",
    summary: "예산 편성과 집행을 꾸준히 살피는 상시 의정 과제입니다.",
    lat: 35.2381,
    lng: 128.6811,
    pinColor: "#003476",
    status: "상시과제"
  },
  {
    id: "illegal-promo-center",
    title: "불법 홍보관 퇴출",
    category: "주민제안",
    district: "명곡·봉림",
    summary: "주민 피해 우려를 확인하고 민생 안전 점검으로 이어갈 과제입니다.",
    lat: 35.2418,
    lng: 128.6546,
    pinColor: "#E51B35",
    status: "민생점검"
  }
];

export const primaryNavLinks = [
  { label: "홈", href: "/#top" },
  { label: "류성국", href: "/#profile" },
  { label: "약속이행", href: "/policies/" }
];

export const menuLinks = [
  { label: "홈", href: "/#top", description: "메인으로 돌아가기" },
  { label: "류성국", href: "/#profile", description: "약속과 활동의 기준" },
  { label: "약속이행", href: "/policies/", description: "약속의 현재 상태" },
  { label: "의정활동", href: "/activities/", description: "기록과 현장 소식" },
  { label: "명곡·봉림", href: "/district/", description: "생활권과 주민 현안" },
  { label: "주민제안", href: "/contact/", description: "불편과 제안 남기기" }
];

export const instagramUrl = "https://www.instagram.com/seongguk_ryu99?igsh=M2pnaHAwY3czd2d6";
export const youtubeUrl = "https://youtu.be/_9ftYhY6DhQ?si=mFfAgZzi8ihBRlee";
