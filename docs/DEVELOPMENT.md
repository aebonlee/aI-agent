# AI Agents Work Lab - 종합 개발 문서

## 프로젝트 개요

**AI Agents Work Lab**은 공공기관, 발전사, 기업, 대학 등에서 활용 가능한 **실무형 AI Agent 교육 플랫폼**입니다.

- **URL**: https://ai-agent.dreamitbiz.com
- **기술 스택**: React 19 + Vite 8 + Supabase + CSS (vanilla)
- **배포**: GitHub Pages (gh-pages)
- **현재 버전**: v2.8.0

---

## 프로젝트 구조

```
src/
├── App.jsx                          # 루트 컴포넌트 (Provider 래핑)
├── main.jsx                         # 엔트리 포인트
├── config/
│   └── site.js                      # 사이트 메타 설정 (SEO)
├── lib/
│   └── supabase.js                  # Supabase 클라이언트 + 테이블명
├── contexts/
│   ├── ThemeContext.jsx              # 다크모드 + 색상 테마
│   ├── LanguageContext.jsx           # 한/영 다국어
│   ├── ToastContext.jsx              # 토스트 알림 시스템 (v2.8.0)
│   └── AuthContext.jsx              # Supabase 인증 (Google/Kakao)
├── utils/
│   └── translations.js              # ko/en 번역 데이터
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx               # 상단 네비게이션
│   │   └── Footer.jsx               # 하단 푸터
│   ├── SidebarNav.jsx               # 재사용 아코디언 사이드바
│   ├── SEOHead.jsx                  # 페이지별 메타태그
│   ├── HeroCarousel.jsx             # 히어로 슬라이드
│   └── HeroBackground.jsx           # 히어로 배경 효과
├── layouts/
│   └── PublicLayout.jsx             # 공통 레이아웃 (Nav + Routes + Footer)
├── pages/
│   ├── Home.jsx                     # 메인 랜딩 페이지
│   ├── NotFound.jsx                 # 404 페이지
│   ├── learning/LearningPage.jsx    # 학습하기 (8개 섹션 + 실습도구)
│   ├── course/CoursePage.jsx        # 과정소개 + 커리큘럼
│   ├── tools/ToolsPage.jsx          # 실습도구 (/learning으로 리다이렉트)
│   ├── materials/MaterialsPage.jsx  # 실습자료 (템플릿 다운로드)
│   ├── prompts/PromptsPage.jsx      # 프롬프트 템플릿 (복사 기능)
│   ├── cases/CasesPage.jsx          # 산업·기관 사례 (필터+페이지네이션)
│   ├── results/ResultsPage.jsx      # 결과물 예시
│   ├── faq/FaqPage.jsx              # FAQ 아코디언
│   ├── community/CommunityPage.jsx  # 커뮤니티 게시판 (CRUD+댓글)
│   └── auth/LoginPage.jsx           # 로그인 (Google/Kakao OAuth)
├── styles/
│   ├── index.css                    # CSS 임포트 허브
│   ├── base.css                     # 기본 스타일 + 토스트
│   ├── dark-mode.css                # 다크모드
│   ├── responsive.css               # 반응형 (5단 브레이크포인트)
│   ├── navbar.css                   # 네비게이션
│   ├── hero.css                     # 히어로 섹션
│   ├── home.css                     # 홈페이지
│   ├── footer.css                   # 푸터
│   ├── content-pages.css            # 콘텐츠 페이지 공통
│   ├── cases.css                    # 사례 페이지
│   ├── community.css                # 커뮤니티
│   ├── login.css                    # 로그인
│   └── animations.css               # 애니메이션
└── assets/
    └── hero.png                     # 히어로 이미지
```

---

## Context/Provider 아키텍처

```
ThemeProvider          (다크모드, 색상테마)
  └── LanguageProvider (한/영 전환)
       └── ToastProvider (토스트 알림)
            └── AuthProvider (인증 상태)
                 └── BrowserRouter (라우팅)
                      └── PublicLayout (Navbar + Routes + Footer)
```

---

## 주요 기능

### 1. 다크모드 + 5색 컬러 테마
- `ThemeContext`에서 관리, `html[data-theme]`와 `html[data-color]` 활용
- 컬러: blue(기본), red, green, purple, orange

### 2. 한/영 다국어 (i18n)
- `LanguageContext` + `translations.js`
- `t('key.path')` 함수로 번역 텍스트 접근

### 3. 인증 (Supabase OAuth)
- Google / Kakao 소셜 로그인
- `AuthContext`에서 user 상태 관리
- 커뮤니티 글쓰기/댓글에 인증 필요

### 4. 커뮤니티 게시판 (Supabase CRUD)
- 게시글 CRUD + 카테고리 필터 + 검색
- 댓글 CRUD + 조회수 카운트
- `agent_posts`, `agent_comments`, `agent_profiles` 테이블

### 5. 토스트 알림 시스템 (v2.8.0)
- `ToastContext` + `useToast()` 훅
- 3가지 타입: success, error, info
- 3초 자동 닫힘, slide-in/out 애니메이션
- 다크모드 + 반응형 지원

### 6. SEO 인프라
- `SEOHead` 컴포넌트: 페이지별 title, description, OG 태그
- `site.js`: 사이트 전역 메타 설정
- robots.txt, sitemap.xml 지원

### 7. 반응형 디자인 (5단 브레이크포인트)
- Large Desktop: 1400px+
- Desktop: 1024-1279px
- Tablet Landscape: 768-1023px
- Tablet Portrait: 640-767px
- Mobile: ~639px
- Small Mobile: ~399px

---

## 버전 히스토리

### v2.8.0 — 에러 처리 및 사용자 피드백 시스템
- 토스트 알림 시스템 신규 구현 (`ToastContext.jsx`)
- 13개 try-catch 블록 추가 (Auth 3개 + Community 10개)
- 17개 다국어 토스트 메시지 (ko/en)
- submitting 상태 + 버튼 disabled/spinner
- 다크모드 + 반응형 토스트 CSS
- **파일**: ToastContext.jsx(신규), translations.js, base.css, dark-mode.css, responsive.css, App.jsx, AuthContext.jsx, CommunityPage.jsx

### v2.7.0 — SEO 인프라 + 사이트 평가
- `SEOHead` 컴포넌트, `site.js` 설정
- 페이지별 메타태그 + OG 태그
- 1차 종합 평가: 91/100 (A)

### v2.6.0 — 네비게이션 정리
- /tools → /learning 리다이렉트
- 네비바에서 도구 메뉴 제거

### v2.5.0 — 실습도구 Learning 통합
- 실습도구를 Learning 사이드바에 통합
- 학습 + 도구 원스톱 경험

### v2.4.0 — 커뮤니티 게시판
- Supabase 연동 게시판 CRUD
- 댓글 시스템, 카테고리 필터, 검색
- 조회수 카운트, 익명 프로필

### v2.3.0 — Supabase 마이그레이션
- `agent_posts`, `agent_comments`, `agent_profiles` 테이블
- RLS 정책, idempotent 마이그레이션 스크립트

### v2.2.0 — UX 개선
- 사이드바 아코디언 (다른 그룹 자동 닫기)
- 프롬프트 복사 버튼
- 푸터 2열 바로가기
- 사이드바 아이콘 제거, 폰트 계층 조정

### v2.0.0 — 대규모 콘텐츠 통합
- SidebarNav 아코디언 재사용 컴포넌트
- 과정+커리큘럼 통합, 도구/사례 페이지 개편
- Learning 페이지 8개 섹션 이론 콘텐츠

### v1.2.0 — 콘텐츠 보강
- 학습 콘텐츠 추가 예시 및 수정

### v1.1.0 — CSS 정렬
- 모든 CSS 클래스명 JSX 컴포넌트와 매칭

### v1.0.0 — 초기 플랫폼 구축
- React + Vite 기반 플랫폼 구축
- 전체 페이지 구조, 스타일, 다국어, 다크모드

---

## Supabase 테이블 구조

### agent_profiles
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | auth.users.id 참조 |
| display_name | text | 표시 이름 |
| avatar_url | text | 프로필 이미지 URL |

### agent_posts
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | 자동 생성 |
| author_id | uuid (FK) | agent_profiles.id |
| title | text | 게시글 제목 |
| content | text | 게시글 내용 |
| category | text | free/question/share/prompt/result |
| views | integer | 조회수 (default: 0) |
| comment_count | integer | 댓글 수 (default: 0) |
| created_at | timestamptz | 생성일 |

### agent_comments
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | uuid (PK) | 자동 생성 |
| post_id | uuid (FK) | agent_posts.id |
| author_id | uuid (FK) | agent_profiles.id |
| content | text | 댓글 내용 |
| created_at | timestamptz | 생성일 |

---

## 개발 명령어

```bash
npm run dev        # 개발 서버 (Vite HMR)
npm run build      # 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
npm run deploy     # GitHub Pages 배포 (gh-pages)
```

---

## 배포 구성

- **호스팅**: GitHub Pages
- **도메인**: ai-agent.dreamitbiz.com (CNAME)
- **빌드 도구**: Vite 8
- **배포 스크립트**: `gh-pages -d dist`
