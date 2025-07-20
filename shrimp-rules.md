# Development Guidelines

## Project Overview

### Personal Tech Blog with Next.js

- **Technology Stack**: Next.js 13+ (App Router), TypeScript, Tailwind CSS
- **Deployment**: GitHub Pages (static export)
- **Content**: Markdown/MDX blog posts about MCP, RAG, AI Engineering, Claude Code
- **Theme**: Dark theme with developer-friendly design

## Project Architecture

### Directory Structure

```
hwiwoong_log/
├── src/
│   ├── app/                    # Next.js 13+ App Router
│   │   ├── page.tsx           # 홈페이지 (블로그 목록)
│   │   ├── posts/
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # 개별 포스트 페이지
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   └── globals.css        # 전역 스타일
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   └── MDXRenderer.tsx
│   ├── lib/                   # 유틸리티 함수
│   │   ├── mdx.ts            # MDX 처리
│   │   ├── posts.ts          # 포스트 관련 함수
│   │   └── utils.ts          # 일반 유틸리티
│   └── types/                # TypeScript 타입 정의
│       └── blog.ts
├── posts/                    # 블로그 포스트 (.md/.mdx)
├── public/                   # 정적 파일
├── next.config.js           # Next.js 설정
├── tailwind.config.js       # Tailwind 설정
├── tsconfig.json            # TypeScript 설정
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml        # GitHub Actions
```

## Code Standards

### File Naming Conventions

- **Components**: PascalCase (Header.tsx, PostCard.tsx)
- **Utilities**: camelCase (mdx.ts, posts.ts)
- **Pages**: kebab-case (blog-post.tsx)
- **Blog Posts**: kebab-case (mcp-vibe-coding.md)

### TypeScript Standards

- **Strict Mode**: 반드시 사용
- **Component Props**: 명시적 인터페이스 정의 필수
- **Type Definitions**: src/types/ 폴더에 중앙 집중화
- **Function Components**: 모든 컴포넌트는 함수형으로 작성

### Styling Standards

- **Tailwind CSS Class Order**: layout > spacing > sizing > typography > colors > effects
- **Dark Theme**: 기본 테마로 설정
- **Responsive Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **Typography**: Inter 폰트 사용, 가독성 우선

## Functionality Implementation Standards

### Blog Post Structure

- **Frontmatter 필수**: title, date, description, tags
- **MDX 사용 권장**: 코드 블록, 컴포넌트 삽입 가능
- **이미지 저장**: /public/images/ 폴더에 저장
- **SEO 메타데이터**: 각 포스트별 개별 설정

### Component Implementation

- **Header**: 블로그 제목, 네비게이션, 다크/라이트 모드 토글
- **PostCard**: 포스트 제목, 날짜, 요약, 태그 표시
- **MDXRenderer**: 마크다운 렌더링, 코드 하이라이팅
- **Footer**: 저작권, 소셜 링크, RSS 피드

### Performance Optimization

- **Image Optimization**: next/image 컴포넌트 사용
- **Code Splitting**: 자동 적용
- **Static Generation**: SSG 우선 사용
- **Bundle Analysis**: 빌드 시 번들 크기 확인

## Framework/Plugin Usage Standards

### Next.js Configuration

- **Static Export**: output: 'export' 설정 필수
- **Base Path**: GitHub Pages 배포를 위한 basePath 설정
- **Image Optimization**: 정적 내보내기 시 비활성화
- **Trailing Slash**: false 설정

### Tailwind CSS Configuration

- **Content Paths**: src/**/*.{js,ts,jsx,tsx,md,mdx} 포함
- **Dark Mode**: class 기반 설정
- **Custom Colors**: 블로그 브랜드 컬러 정의
- **Typography**: prose 클래스 사용

### MDX Processing

- **next-mdx-remote**: MDX 렌더링에 사용
- **rehype-highlight**: 코드 하이라이팅
- **remark-gfm**: GitHub Flavored Markdown 지원

## Workflow Standards

### Development Workflow

1. **새 포스트 작성**: /posts/ 폴더에 .mdx 파일 생성
2. **컴포넌트 개발**: src/components/ 폴더에 추가
3. **타입 정의**: src/types/ 폴더에 중앙 집중화
4. **빌드 테스트**: npm run build && npm run export
5. **배포**: GitHub Actions 자동 배포

### Git Workflow

- **Branch Naming**: feature/component-name, fix/issue-description
- **Commit Messages**: Conventional Commits 형식 사용
- **Pull Request**: 코드 리뷰 필수
- **Deployment**: main 브랜치 푸시 시 자동 배포

## Key File Interaction Standards

### Configuration Files

- **next.config.js 수정 시**: basePath, output 설정 확인
- **tailwind.config.js 수정 시**: content 경로 업데이트
- **package.json 수정 시**: 의존성 버전 호환성 확인

### Component Dependencies

- **Header 컴포넌트 수정 시**: layout.tsx에서 사용되는 props 확인
- **PostCard 컴포넌트 수정 시**: 홈페이지와 태그 페이지에서 사용 확인
- **MDXRenderer 수정 시**: 모든 포스트 페이지에 영향 확인

### Blog Post Updates

- **새 포스트 추가 시**: frontmatter 형식 통일, 태그 시스템 업데이트
- **이미지 추가 시**: /public/images/ 폴더에 저장, 최적화 확인
- **메타데이터 수정 시**: SEO 설정 업데이트

## AI Decision-making Standards

### Priority Decision Tree

1. **성능 최적화**: 정적 생성 가능한 경우 SSG 사용
2. **접근성**: ARIA 라벨, 키보드 네비게이션 필수
3. **SEO**: 메타데이터, 구조화된 데이터 우선
4. **사용자 경험**: 로딩 상태, 에러 처리 구현

### Component Creation Rules

- **재사용성**: 3곳 이상에서 사용될 경우 컴포넌트로 분리
- **Props 설계**: 필수 props와 선택적 props 명확히 구분
- **타입 안전성**: TypeScript strict 모드 준수

### Styling Decisions

- **Tailwind 우선**: 커스텀 CSS 최소화
- **반응형 우선**: 모바일 퍼스트 접근법
- **다크 테마**: 기본 테마로 설정, 라이트 테마 지원

## Prohibited Actions

### Code Quality

- ❌ **클라이언트 사이드 렌더링 불필요한 사용**
- ❌ **인라인 스타일 사용**
- ❌ **하드코딩된 경로 사용**
- ❌ **any 타입 사용**

### Performance

- ❌ **SEO 메타데이터 누락**
- ❌ **이미지 최적화 생략**
- ❌ **번들 크기 무시**

### Accessibility

- ❌ **접근성 고려하지 않은 마크업**
- ❌ **색상만으로 정보 전달**
- ❌ **키보드 네비게이션 무시**

### Content Management

- ❌ **frontmatter 없는 블로그 포스트**
- ❌ **이미지 최적화 없는 이미지 사용**
- ❌ **태그 시스템 일관성 없는 태그 사용**

## Required Dependencies

### Core Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.3.0",
  "next-mdx-remote": "^4.4.0",
  "gray-matter": "^4.0.3",
  "date-fns": "^2.30.0"
}
```

### Development Dependencies

```json
{
  "@types/node": "^20.0.0",
  "@types/react": "^18.0.0",
  "@types/react-dom": "^18.0.0",
  "eslint": "^8.0.0",
  "eslint-config-next": "^14.0.0",
  "prettier": "^3.0.0"
}
```

## Deployment Configuration

### GitHub Pages Settings

- **Repository Settings**: Pages > Source > Deploy from a branch
- **Branch**: gh-pages
- **Base Path**: /hwiwoong_log (repository name)
- **Custom Domain**: 설정 가능 (선택사항)

### GitHub Actions Workflow

- **Trigger**: main 브랜치 푸시 시
- **Build Command**: npm run build
- **Export Command**: npm run export
- **Deploy Target**: gh-pages 브랜치 