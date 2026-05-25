export const site = {
  name: "후보명",
  hanja: "",
  party: "정당명",
  district: "선거구명",
  neighborhood: "지역명",
  ballotLabel: "기호 0번",
  ballotBadge: "0",
  slogan: "대표 슬로건을 입력하세요",
  message: "후보자의 핵심 메시지를 입력하세요.",
  secondMessage: "지역의 내일을 준비합니다",
  election: "선거명을 입력하세요",
  description: "국회의원·지방선거 후보 홈페이지 템플릿입니다. src/data/candidate.ts에서 후보 정보를 입력하세요.",
  siteUrl: "https://example.com",
  copyright: "Copyright © 짓마케팅. All rights reserved.",
  footerNotice: "본 페이지는 공개자료와 캠프 제공 자료를 바탕으로 후보 정보를 안내합니다."
};

export const assets = {
  heroWide: "/images/hero-wide.png",
  heroMobile: "/images/hero-mobile.png",
  partySymbol: "/images/minjoo-symbol.svg",
  partyLogo: "/images/minjoo-logo.svg",
  policyVisual: "/images/policy-education-visual.png",
  mapVisual: "/images/district-map-visual.png",
  shareKakao: "/images/share-kakao.jpg",
  shareMessage: "/images/share-message.jpg"
};

export const sections = {
  heroEyebrow: "Candidate Homepage Template",
  profileTitle: `${site.name}을 소개합니다`,
  policiesTitle: "지역의 내일을 바꾸는 약속",
  policiesDescription: "공약 제목, 요약, 추진 방향을 입력하면 카드 형태로 자동 정리됩니다.",
  policiesNote: "이 영역에는 후보자의 핵심 공약을 입력하세요.",
  districtTitle: `우리 지역 ${site.neighborhood}`,
  districtDescription: "지역구 생활권 정보를 한눈에 확인할 수 있도록 정리합니다.",
  mapTitle: `${site.neighborhood} 소통지도`,
  mapDescription: "생활권, 공약, 현장 활동을 지도 위에서 보여줍니다.",
  mapNote: "후보자의 주요 활동 지점과 지역 현안을 지도에 표시하세요.",
  mapGuideTitle: "소통지도 안내",
  mapGuideDescription: "지역 이슈와 공약 의제를 연결해 유권자에게 더 선명하게 보여줍니다.",
  activitiesTitle: "현장에서 시작하는 변화",
  activitiesDescription: "현장 일정, 카드뉴스, 주민 제안 활동을 입력하세요.",
  contactTitle: `${site.neighborhood}의 제안을 기다립니다`,
  contactDescription: "생활 속 불편, 바라는 변화, 지역에 필요한 일을 편하게 남겨주세요.",
  contactNote: "남겨주신 제안은 정책과 활동 계획을 다듬는 데 참고하겠습니다."
};

export const profile = {
  intro: "후보자의 인사말과 소개 문장을 입력하세요. 어떤 지역에서 어떤 변화를 만들 사람인지 한 문단으로 정리하면 좋습니다.",
  education: "학력 정보를 입력하세요",
  careers: ["주요 경력 1", "주요 경력 2", "주요 경력 3"],
  disclosure: ["직업: 입력 전", "전과: 입력 전", "재산/병역/납세 등 공개자료 기준 안내 문구 입력"]
};

export const policies = [
  {
    title: "공약 제목 1",
    tag: "분야",
    summary: "공약의 핵심 내용을 2~3문장으로 입력하세요.",
    status: "추진 방향 또는 상태",
    videoUrl: ""
  },
  {
    title: "공약 제목 2",
    tag: "분야",
    summary: "공약의 핵심 내용을 2~3문장으로 입력하세요.",
    status: "추진 방향 또는 상태",
    videoUrl: ""
  },
  {
    title: "공약 제목 3",
    tag: "분야",
    summary: "공약의 핵심 내용을 2~3문장으로 입력하세요.",
    status: "추진 방향 또는 상태",
    videoUrl: ""
  }
];

export const district = {
  sourceLabel: "공개자료 기준일을 입력하세요",
  total: {
    population: "입력 전",
    households: "입력 전",
    area: "입력 전"
  },
  towns: [
    {
      name: "동/읍/면 이름",
      area: "입력 전",
      population: "입력 전",
      households: "입력 전",
      units: "행정구역 정보",
      note: "지역 특징이나 주요 현안을 입력하세요."
    },
    {
      name: "동/읍/면 이름",
      area: "입력 전",
      population: "입력 전",
      households: "입력 전",
      units: "행정구역 정보",
      note: "지역 특징이나 주요 현안을 입력하세요."
    }
  ]
};

export const activities = ["현장 인사", "정책 카드뉴스", "주민 제안 접수"];

export const socialLinks = {
  instagram: "",
  youtube: ""
};

export const featuredVideo = {
  enabled: false,
  youtubeId: "",
  label: "Campaign TV",
  title: "후보 영상",
  storageKey: "candidate-video-popup-hidden-date"
};

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

export const mapCenter = {
  lat: 37.5665,
  lng: 126.978
};

export const mapFilters = ["전체", "지역거점", "공약", "활동"] as const;

export const mapPins: MapPin[] = [
  {
    id: "campaign-office",
    title: "선거사무소 또는 주요 거점",
    category: "지역거점",
    district: site.neighborhood,
    summary: "선거사무소, 현장 사무실, 주요 생활권 거점 설명을 입력하세요.",
    lat: mapCenter.lat,
    lng: mapCenter.lng,
    pinColor: "#004EA2",
    status: "거점"
  },
  {
    id: "policy-place",
    title: "공약 관련 현장",
    category: "공약",
    district: site.neighborhood,
    summary: "공약과 연결되는 지역 현장 또는 개선 대상지를 입력하세요.",
    lat: mapCenter.lat + 0.006,
    lng: mapCenter.lng + 0.006,
    pinColor: "#E51B35",
    status: "공약"
  },
  {
    id: "activity-place",
    title: "현장 활동 지점",
    category: "활동",
    district: site.neighborhood,
    summary: "후보자의 현장 활동, 주민 간담회, 캠페인 장소를 입력하세요.",
    lat: mapCenter.lat - 0.006,
    lng: mapCenter.lng - 0.006,
    pinColor: "#26A7DF",
    status: "활동"
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
  { label: "지도", href: "/#map", description: "지역 소통지도" },
  { label: "공약", href: "/policies/", description: "핵심 공약 자세히 보기" },
  { label: "지역", href: "/district/", description: "지역구 생활권 정보" },
  { label: "활동", href: "/activities/", description: "현장 소식과 카드뉴스" },
  { label: "문의", href: "/contact/", description: "주민 제안 남기기" }
];
