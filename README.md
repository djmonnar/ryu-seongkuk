# 후보자 홈페이지 템플릿

국회의원, 지방선거 후보자, 캠프 소개용 홈페이지를 빠르게 만들기 위한 Next.js 정적 사이트 템플릿입니다.

## 빠른 수정 순서

1. `src/data/candidate.ts`에서 후보명, 정당명, 지역명, 슬로건, 약력, 공약, 지역 정보, 지도 핀을 입력합니다.
2. `public/images/`의 대표 이미지와 공유 이미지를 후보자별 이미지로 교체합니다.
3. `site.siteUrl`을 실제 도메인으로 바꿉니다.
4. 영상 팝업을 쓰려면 `featuredVideo.enabled`를 `true`로 바꾸고 `youtubeId`를 입력합니다.

## 주요 파일

- `src/data/candidate.ts`: 후보자 정보 입력 파일
- `components/`: 화면 구성 요소
- `app/`: Next.js 페이지
- `public/images/`: 히어로, 정당 로고, 공유 이미지
- `TEMPLATE_GUIDE.md`: 새 후보 사이트 제작 체크리스트

## 실행

```bash
npm install
npm run dev
```

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 정적 사이트를 빌드해 GitHub Pages로 배포합니다.
