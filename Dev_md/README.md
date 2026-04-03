# AI Agent Work Lab - 개발 문서

> 실무형 AI Agent 업무혁신 플랫폼 개발 전체 문서

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **프로젝트명** | AI Agent Work Lab |
| **설명** | 실무형 AI Agent 업무혁신 교육 플랫폼 |
| **라이브 URL** | https://ai-agent.dreamitbiz.com |
| **저장소** | https://github.com/aebonlee/aI-agent |
| **기술 스택** | React 19 + Vite 8 (SPA) |
| **인증** | Supabase (Google + Kakao OAuth) |
| **배포** | GitHub Pages (gh-pages) |
| **기본 컬러** | Dark Blue (#1B3A6B) |
| **언어** | 한국어/영어 이중 언어 |

## 문서 목록

| 문서 | 설명 |
|------|------|
| [ARCHITECTURE.md](./ARCHITECTURE.md) | 기술 아키텍처 및 스택 |
| [FILE_STRUCTURE.md](./FILE_STRUCTURE.md) | 전체 파일 구조 |
| [PAGES.md](./PAGES.md) | 페이지별 상세 문서 (11개 페이지) |
| [COMPONENTS.md](./COMPONENTS.md) | 컴포넌트 상세 문서 |
| [STYLING.md](./STYLING.md) | CSS 디자인 시스템 문서 |
| [FEATURES.md](./FEATURES.md) | 기능 상세 문서 |
| [API_AUTH.md](./API_AUTH.md) | Supabase 인증 및 API 문서 |
| [SETUP_GUIDE.md](./SETUP_GUIDE.md) | 설치 및 개발 환경 가이드 |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | 빌드 및 배포 가이드 |
| [CHANGELOG.md](./CHANGELOG.md) | 변경 이력 |

## 빠른 시작

```bash
# 설치
npm install

# 개발 서버 시작 (포트 5176)
npm run dev

# 빌드
npm run build

# OG 이미지 생성
npm run generate:og

# GitHub Pages 배포
npm run deploy
```

## 핵심 수치

- **총 파일 수**: 53개 소스 파일
- **페이지 수**: 11개 (lazy-loaded)
- **CSS 파일 수**: 13개
- **빌드 크기**: vendor 230KB + app 210KB (gzip ~130KB)
- **빌드 시간**: ~385ms
