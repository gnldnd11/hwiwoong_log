# Hwiwoong Log - 개인 기술 블로그

Next.js, TypeScript, Tailwind CSS로 구축된 개인 기술 블로그입니다. MCP, RAG, AI Engineering, Claude Code 등에 대한 기술적인 생각들을 공유합니다.

## 🚀 기술 스택

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown/MDX
- **Deployment**: GitHub Pages

## 📁 프로젝트 구조

```
hwiwoong_log/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 홈페이지
│   │   ├── posts/[slug]/      # 개별 포스트 페이지
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   └── globals.css        # 전역 스타일
│   ├── components/            # 재사용 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PostCard.tsx
│   ├── lib/                   # 유틸리티 함수
│   │   ├── posts.ts          # 포스트 관련 함수
│   │   └── mdx.ts            # MDX 렌더링
│   └── types/                # TypeScript 타입 정의
├── posts/                    # 블로그 포스트 (.md/.mdx)
├── public/                   # 정적 파일
└── .github/workflows/        # GitHub Actions
```

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/yourusername/hwiwoong_log.git
cd hwiwoong_log
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 📝 블로그 포스트 작성

### 새 포스트 추가

1. `posts/` 폴더에 `.md` 또는 `.mdx` 파일 생성
2. frontmatter 작성:

```markdown
---
title: "포스트 제목"
date: "2024-01-01"
description: "포스트 설명"
tags: ["태그1", "태그2"]
---

# 포스트 내용
```

### 지원하는 기능

- **Markdown/MDX**: 코드 블록, 이미지, 링크 등
- **코드 하이라이팅**: 자동 구문 강조
- **태그 시스템**: 포스트 분류 및 검색
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **다크 모드**: 자동 테마 전환

## 🚀 배포

### GitHub Pages 배포

1. GitHub 저장소에 코드 푸시
2. GitHub Actions가 자동으로 빌드 및 배포
3. `https://yourusername.github.io/hwiwoong_log`에서 확인

### 수동 배포

```bash
npm run build
npm run export
```

정적 파일이 `out/` 폴더에 생성됩니다.

## 🎨 커스터마이징

### 테마 변경

`tailwind.config.ts`에서 색상 및 스타일을 수정할 수 있습니다:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // 커스텀 색상 정의
      }
    }
  }
}
```

### 컴포넌트 수정

- `src/components/Header.tsx`: 헤더 컴포넌트
- `src/components/Footer.tsx`: 푸터 컴포넌트
- `src/components/PostCard.tsx`: 포스트 카드 컴포넌트

## 📚 주요 기능

### 1. 다크 모드
- 자동 테마 감지
- 수동 테마 전환
- 로컬 스토리지에 설정 저장

### 2. 반응형 디자인
- 모바일 퍼스트 접근법
- 모든 디바이스에서 최적화된 경험

### 3. SEO 최적화
- 메타데이터 자동 생성
- Open Graph 태그
- 구조화된 데이터

### 4. 성능 최적화
- 정적 사이트 생성 (SSG)
- 이미지 최적화
- 코드 스플리팅

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이름**: Hwiwoong
- **이메일**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
# Test commit for GitHub Pages deployment
