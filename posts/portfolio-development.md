---
title: "포트폴리오 웹사이트 개발기"
description: "Next.js와 TypeScript를 활용한 개인 포트폴리오 웹사이트 개발 과정과 기술적 고려사항"
date: "2024-01-15"
tags: ["Next.js", "TypeScript", "Tailwind CSS", "포트폴리오", "개발기"]
---

# 포트폴리오 웹사이트 개발기

개발자로서 자신을 표현할 수 있는 가장 좋은 방법 중 하나는 포트폴리오 웹사이트를 만드는 것입니다. 이번 글에서는 Next.js와 TypeScript를 활용하여 개인 포트폴리오 웹사이트를 개발한 과정과 기술적 고려사항들을 공유하고자 합니다.

## 🎯 프로젝트 목표

### 주요 목표
- **개인 브랜딩**: 개발자로서의 정체성과 전문성을 표현
- **프로젝트 쇼케이스**: 다양한 프로젝트 경험을 시각적으로 전달
- **기술 스택 데모**: 실제 사용 가능한 기술들을 보여주기
- **접근성**: 모바일 친화적이고 반응형 디자인

### 기술적 요구사항
- **성능**: 빠른 로딩 속도와 최적화
- **SEO**: 검색 엔진 최적화
- **접근성**: 웹 접근성 표준 준수
- **유지보수성**: 확장 가능한 코드 구조

## 🛠️ 기술 스택 선택

### Frontend Framework
**Next.js 15**를 선택한 이유:
- **App Router**: 최신 라우팅 시스템으로 더 나은 성능
- **SSG/SSR**: 정적 생성과 서버 사이드 렌더링 지원
- **TypeScript**: 타입 안정성과 개발 생산성 향상
- **Vercel 배포**: 간편한 배포와 최적화

### Styling
**Tailwind CSS**를 선택한 이유:
- **유틸리티 퍼스트**: 빠른 스타일링과 일관성
- **다크 모드**: 시스템 설정 기반 자동 테마 전환
- **반응형**: 모바일 퍼스트 접근법
- **번들 크기**: 사용된 클래스만 포함하여 최적화

### 추가 라이브러리
- **next-mdx-remote**: 마크다운 기반 블로그 포스트
- **date-fns**: 날짜 포맷팅
- **remark-gfm**: GitHub Flavored Markdown 지원

## 📁 프로젝트 구조

```
hwiwoong_log/
├── src/
│   ├── app/                 # App Router 페이지
│   │   ├── about/          # About Me 페이지
│   │   ├── projects/       # 프로젝트 목록
│   │   ├── blog/           # 블로그 포스트 목록
│   │   ├── tags/           # 태그 페이지
│   │   └── posts/          # 개별 포스트
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── lib/               # 유틸리티 함수
│   └── types/             # TypeScript 타입 정의
├── posts/                 # 마크다운 블로그 포스트
├── public/               # 정적 파일
└── package.json
```

## 🎨 디자인 시스템

### 색상 팔레트
```css
:root {
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-900: #1e3a8a;
}
```

### 타이포그래피
- **제목**: Inter 폰트, 굵은 가중치
- **본문**: 시스템 폰트 스택
- **코드**: JetBrains Mono, 모노스페이스

### 컴포넌트 설계
- **재사용성**: PostCard, Header, Footer 등
- **일관성**: 동일한 스타일 가이드 적용
- **접근성**: ARIA 라벨과 키보드 네비게이션

## 🚀 개발 과정

### 1단계: 기본 구조 설정
```bash
npx create-next-app@latest hwiwoong_log --typescript --tailwind --app
```

### 2단계: 페이지 구조 설계
- 홈페이지: 포트폴리오 메인
- About Me: 개인 정보와 경력
- Projects: 프로젝트 쇼케이스
- Blog: 개발 로그
- Tags: 포스트 분류

### 3단계: 컴포넌트 개발
- Header: 네비게이션과 테마 토글
- PostCard: 블로그 포스트 카드
- Footer: 연락처 정보

### 4단계: 스타일링 및 반응형
- 모바일 퍼스트 접근법
- 다크 모드 지원
- 접근성 고려

## 🔧 기술적 고려사항

### 성능 최적화
1. **이미지 최적화**: Next.js Image 컴포넌트 사용
2. **코드 스플리팅**: 자동 코드 분할
3. **정적 생성**: 빌드 타임에 HTML 생성
4. **번들 분석**: webpack-bundle-analyzer 활용

### SEO 최적화
```typescript
// metadata 설정
export const metadata: Metadata = {
  title: 'Hwiwoong Portfolio',
  description: '개발자 포트폴리오',
  openGraph: {
    title: 'Hwiwoong Portfolio',
    description: '개발자 포트폴리오',
  },
}
```

### 접근성
- **시맨틱 HTML**: 올바른 태그 사용
- **키보드 네비게이션**: Tab 키 지원
- **스크린 리더**: ARIA 라벨 추가
- **색상 대비**: WCAG 가이드라인 준수

## 📱 반응형 디자인

### 브레이크포인트
```css
/* Tailwind CSS 브레이크포인트 */
sm: 640px   /* 태블릿 */
md: 768px   /* 작은 데스크톱 */
lg: 1024px  /* 데스크톱 */
xl: 1280px  /* 큰 데스크톱 */
```

### 모바일 최적화
- 터치 친화적 버튼 크기
- 스와이프 제스처 지원
- 빠른 로딩 속도

## 🚀 배포 및 호스팅

### GitHub Pages 배포
1. **정적 내보내기**: `output: 'export'` 설정
2. **basePath 설정**: `/hwiwoong_log` 경로 설정
3. **GitHub Actions**: 자동 배포 워크플로우
4. **gh-pages 브랜치**: 정적 파일만 포함

### 배포 설정
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/hwiwoong_log' : '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hwiwoong_log/' : '',
}
```

## 📊 성능 결과

### Lighthouse 점수
- **Performance**: 95/100
- **Accessibility**: 98/100
- **Best Practices**: 100/100
- **SEO**: 100/100

### 로딩 속도
- **First Contentful Paint**: 1.2초
- **Largest Contentful Paint**: 2.1초
- **Cumulative Layout Shift**: 0.05

## 🎯 향후 개선 계획

### 기능 추가
- **댓글 시스템**: Giscus 통합
- **검색 기능**: 클라이언트 사이드 검색
- **RSS 피드**: 블로그 구독 기능
- **다국어 지원**: 한국어/영어

### 기술적 개선
- **PWA**: 오프라인 지원
- **Analytics**: 사용자 행동 분석
- **A/B 테스트**: 성능 최적화
- **CDN**: 글로벌 배포

## 💡 학습한 점

### 기술적 인사이트
1. **Next.js 15**: App Router의 강력함과 성능
2. **TypeScript**: 타입 안정성의 중요성
3. **Tailwind CSS**: 유틸리티 퍼스트의 효율성
4. **정적 사이트**: SEO와 성능의 균형

### 개발 프로세스
1. **계획의 중요성**: 명확한 목표 설정
2. **점진적 개발**: 단계별 기능 구현
3. **테스트**: 다양한 환경에서 검증
4. **문서화**: 코드와 프로세스 기록

## 🎉 결론

포트폴리오 웹사이트 개발을 통해 Next.js와 TypeScript의 강력함을 다시 한번 확인할 수 있었습니다. 특히 App Router와 정적 사이트 생성의 조합은 성능과 개발 경험 모두에서 뛰어난 결과를 보여주었습니다.

이 프로젝트는 단순한 포트폴리오를 넘어서, 실제로 사용할 수 있는 웹 애플리케이션으로 발전시킬 수 있는 기반을 마련했습니다. 앞으로도 지속적인 개선과 새로운 기능 추가를 통해 더 나은 개발자 경험을 제공하고자 합니다.

---

**기술 스택**: Next.js 15, TypeScript, Tailwind CSS, MDX  
**배포**: GitHub Pages  
**소스 코드**: [GitHub Repository](https://github.com/gnldnd11/hwiwoong_log) 