# 새 후보 홈페이지 제작 체크리스트

이 레포는 `src/data/candidate.ts`만 채우면 대부분의 화면이 자동으로 바뀌도록 구성되어 있습니다.

## 1. 기본 정보

`site`에 아래 값을 입력합니다.

- `name`: 후보자 이름
- `party`: 정당명
- `district`: 선거구명
- `neighborhood`: 대표 지역명
- `ballotLabel`: 기호 문구
- `ballotBadge`: 헤더 원형 배지에 들어갈 짧은 기호
- `slogan`, `message`, `secondMessage`: 메인 화면 문구
- `siteUrl`: 실제 배포 도메인

## 2. 후보 소개

`profile`에 인사말, 학력, 경력, 공개자료 안내를 입력합니다.

## 3. 공약

`policies` 배열에 공약 카드를 추가합니다.

- `title`: 공약 제목
- `tag`: 교통, 교육, 주거, 복지 같은 분야명
- `summary`: 공약 요약
- `status`: 추진 방향 또는 핵심 문구
- `videoUrl`: 공약 영상 링크. 없으면 빈 문자열로 둡니다.

## 4. 지역 정보와 지도

`district`에는 인구, 세대, 면적, 행정동 정보를 넣습니다.

`mapCenter`와 `mapPins`에는 네이버 지도에 표시할 중심 좌표와 핀을 넣습니다.

## 5. 이미지

`public/images/`의 파일을 후보자별 이미지로 교체하거나, `assets`의 경로를 새 파일명으로 바꿉니다.

- PC 히어로: `hero-wide.png`
- 모바일 히어로: `hero-mobile.png`
- 공약 이미지: `policy-education-visual.png`
- 지도 이미지: `district-map-visual.png`
- 카카오 공유 이미지: `share-kakao.jpg`
- 문자/정사각 공유 이미지: `share-message.jpg`

## 6. 영상 팝업

첫 방문 시 유튜브 영상을 띄우려면 아래처럼 설정합니다.

```ts
export const featuredVideo = {
  enabled: true,
  youtubeId: "유튜브 영상 ID",
  label: "Campaign TV",
  title: "후보 영상",
  storageKey: "candidate-video-popup-hidden-date"
};
```

## 7. 배포 전 확인

```bash
npm run build
```

빌드가 성공하면 `main` 브랜치에 푸시합니다. GitHub Actions가 GitHub Pages에 배포합니다.
