# 변경 이력 (Changelog)

## [1.0.0] - 2026-04-02

### 초기 릴리스 - AI Agent Work Lab 플랫폼 구축

#### 프로젝트 초기화
- Vite 8 + React 19 프로젝트 생성
- 의존성 설치: react-router-dom, supabase, react-markdown, remark-gfm, sharp, gh-pages
- Git 저장소 초기화 및 GitHub 원격 연결
- GitHub Pages 커스텀 도메인 설정 (ai-agent.dreamitbiz.com)

#### 코어 인프라 (9개 파일)
- `.env` - Supabase 환경 변수 (VITE_ 접두사)
- `src/lib/supabase.js` - Supabase 클라이언트 (`agent_` 테이블 접두사)
- `src/config/site.js` - 사이트 설정, 메뉴 9항목, 커리큘럼 4타입, 사례 5카테고리 (power, public, university, enterprise, custom)
- `src/contexts/ThemeContext.jsx` - 테마 (auto/light/dark + 5색상, 쿠키 저장)
- `src/contexts/LanguageContext.jsx` - 언어 (ko/en, dot-notation t() 함수)
- `src/contexts/AuthContext.jsx` - 인증 (Google + Kakao OAuth)
- `src/utils/translations.js` - 전체 Ko/En 번역 사전
- `vite.config.js` - 포트 5176, 함수형 manualChunks
- `public/CNAME` - ai-agent.dreamitbiz.com

#### 레이아웃 컴포넌트 (5개 파일)
- `src/components/layout/Navbar.jsx` - 글래스모피즘 네비바 (데스크톱+모바일)
- `src/components/layout/Footer.jsx` - 4열 그리드 푸터
- `src/components/HeroCarousel.jsx` - 5슬라이드 히어로 캐러셀 (6초 자동전환)
- `src/components/HeroBackground.jsx` - 4종 CSS 애니메이션 (particles/network/orbs/geometric)
- `src/components/SEOHead.jsx` - 동적 OG/Twitter 메타 태그

#### 페이지 컴포넌트 (11개 파일)
- `src/pages/Home.jsx` - 메인 랜딩 (6섹션)
- `src/pages/course/CoursePage.jsx` - 과정소개 (사이드바+6섹션)
- `src/pages/curriculum/CurriculumPage.jsx` - 커리큘럼 (4탭, 8세션)
- `src/pages/tools/ToolsPage.jsx` - 실습도구 (6종 AI 도구)
- `src/pages/materials/MaterialsPage.jsx` - 실습자료 (7종)
- `src/pages/prompts/PromptsPage.jsx` - 프롬프트 템플릿 (6카테고리)
- `src/pages/cases/CasesPage.jsx` - 산업·기관 사례 (5카테고리, 14사례)
- `src/pages/results/ResultsPage.jsx` - 결과물 예시 (5카테고리, 10개 예시)
- `src/pages/faq/FaqPage.jsx` - FAQ (8항목 아코디언)
- `src/pages/auth/LoginPage.jsx` - 로그인 (Google + Kakao)
- `src/pages/NotFound.jsx` - 404 페이지

#### CSS 디자인 시스템 (13개 파일)
- `src/styles/index.css` - CSS 임포트 허브
- `src/styles/base.css` - CSS 변수, 리셋, 버튼, 폼, 유틸리티
- `src/styles/navbar.css` - 네비바 (컬러피커, 모바일 메뉴)
- `src/styles/hero.css` - 히어로 (캐러셀, 파티클, 스크롤 인디케이터)
- `src/styles/home.css` - 홈 섹션 (피쳐, 프로세스, 통계, CTA)
- `src/styles/footer.css` - 푸터 (다크 그라디언트, 뉴스레터)
- `src/styles/content-pages.css` - 콘텐츠 레이아웃 (사이드바, 정보박스)
- `src/styles/cases.css` - 사례 (필터, 카드, 디테일)
- `src/styles/login.css` - 로그인 (소셜 버튼, 프로필)
- `src/styles/community.css` - 커뮤니티 (게시글, 댓글, 리더보드)
- `src/styles/animations.css` - 애니메이션 (fade, slide, shimmer, reduced-motion)
- `src/styles/dark-mode.css` - 다크 모드 전체 오버라이드
- `src/styles/responsive.css` - 반응형 6개 브레이크포인트 + 인쇄

#### 라우팅 및 엔트리 (7개 파일)
- `src/layouts/PublicLayout.jsx` - 라우트 설정 (11개 lazy-loaded 라우트)
- `src/App.jsx` - 루트 (Context Providers + BrowserRouter)
- `src/main.jsx` - 엔트리 포인트
- `index.html` - HTML 엔트리 (OG 태그, 폰트, FA)
- `public/favicon.svg` - SVG 파비콘
- `scripts/generate-og-image.js` - OG 이미지 생성 (sharp SVG→PNG)
- `.gitignore` - Git 무시 파일

#### 빌드 및 배포
- Vite 8 (Rolldown) 프로덕션 빌드 성공 (~385ms)
- OG 이미지 생성 (1200x630 PNG)
- GitHub Pages 배포 (gh-pages 브랜치)
- 라이브: https://ai-agent.dreamitbiz.com

#### 기술적 해결 사항
- Vite 8 Rolldown에서 `manualChunks` 객체→함수 변환 필요 (빌드 에러 수정)
- Vite 프로젝트 초기화 시 비어있지 않은 디렉토리 이슈 (temp-init 활용)
- Git remote 기존 CNAME 커밋과의 통합 (`git reset origin/main`)

---

## [1.0.1] - 2026-04-04

### 개발 문서화

#### 추가
- `Dev_md/` 폴더 생성 (11개 문서)
  - README.md - 프로젝트 개요 및 문서 인덱스
  - ARCHITECTURE.md - 기술 아키텍처 및 스택
  - FILE_STRUCTURE.md - 전체 파일 구조
  - PAGES.md - 10개 페이지 상세 문서
  - COMPONENTS.md - 5개 컴포넌트 상세 문서
  - STYLING.md - CSS 디자인 시스템 (변수, 다크모드, 반응형, 애니메이션)
  - FEATURES.md - 9가지 기능 상세 (다국어, 테마, 인증, 캐러셀, 반응형, SEO 등)
  - API_AUTH.md - Supabase 인증 및 API 설정
  - SETUP_GUIDE.md - 설치 및 개발 환경 가이드
  - DEPLOYMENT.md - 빌드 및 배포 가이드
  - CHANGELOG.md - 변경 이력 (이 문서)

---

## [1.1.0] - 2026-04-04

### CSS 클래스명 정렬 - JSX 컴포넌트 매칭

CSS 파일들의 클래스명이 실제 JSX 컴포넌트에서 사용하는 클래스명과 불일치하는 문제를 전면 수정.
약 150개 이상의 클래스명 매핑 오류를 해결하여 모든 스타일이 정상 적용되도록 함.

#### 변경된 CSS 파일 (10개)

##### `src/styles/hero.css` - 전면 재작성
- 캐러셀 시스템: `.carousel-viewport`, `.carousel-track`, `.carousel-slide`
- 히어로 콘텐츠: `.hero-content` (단일 열 flex), `.highlight` (그라디언트 텍스트)
- `.hero-desc` → `.hero-description`, `.hero-actions` → `.hero-buttons`
- 캐러셀 네비게이션: `.carousel-arrow`, `.carousel-arrow-left/right`, `.carousel-dots`, `.carousel-dot`
- 스크롤 인디케이터: `.scroll-indicator`, `.mouse`, `.wheel`, `.scroll-text`
- 배경 애니메이션: `.particles`, `.particle` (`particleFloat` keyframe)
- 네트워크 배경: `.network-canvas`, `.network-node` (`nodeFloat` keyframe)
- 오브 배경: `.orbs-container`, `.orb` (`orbRise` keyframe)
- 기하학적 배경: `.geo-container`, `.geo-shape`, `.geo-triangle/square/hexagon` (`geoFloat` keyframe)

##### `src/styles/home.css` - 전면 재작성
- 피쳐 섹션: `.features-section` → `.home-features-section`, `.features-grid` → `.home-features-grid`, `.feature-card` → `.home-feature-card`, `.feature-icon` → `.home-feature-icon`
- 워크플로우 섹션: `.process-section` → `.home-workflow-section`, `.process-steps` → `.home-workflow-grid`, `.process-step` → `.home-workflow-step`, `.home-workflow-icon`, `.home-workflow-step-num`, `.home-workflow-arrow`
- 도구 섹션: `.tools-section` → `.home-tools-section`, `.tools-grid` → `.home-tools-grid`, `.tool-card` → `.home-tool-card`, `.home-tool-number`, `.home-tool-icon`
- 통계 섹션: `.stats-section` → `.home-stats-section`, `.stats-grid` → `.home-stats-grid`, `.stat-item` → `.home-stat`, `.stat-number` → `.home-stat-number`, `.stat-label` → `.home-stat-label`, `.home-stat-desc`
- CTA 섹션: `.cta-section` → `.home-cta-section`, `.cta-content` → `.home-cta-content`, `.cta-actions` → `.home-cta-buttons`
- FAQ 섹션: `.faq-list`, `.faq-item`, `.faq-question`, `.faq-question-icon`, `.faq-question-text`, `.faq-toggle-icon`, `.faq-answer`

##### `src/styles/navbar.css` - 추가
- `.nav-item`, `.user-menu`, `.user-avatar`, `.logout-btn`, `.login-link`

##### `src/styles/footer.css` - 전면 재작성
- `.footer-grid` → `.footer-content` (3열 그리드: 2fr 1fr 1.5fr)
- `.brand-agent`, `.brand-lab` (로고 텍스트)
- `.footer-desc` → `.footer-description`
- `.footer-link-list`, `.footer-email`, `.footer-email-icon`, `.business-hours`
- `.footer-family` (패밀리 사이트 셀렉트)

##### `src/styles/content-pages.css` - 전면 재작성
- `.content-layout` → `.content-page-layout` (280px 사이드바 + 1fr)
- `.sidebar-nav-btn` (hover/active 상태)
- `.framework-grid`, `.framework-item` (2열 그리드, 좌측 보더)
- `.info-box` (기본 파란), `.info-box.tip` (초록), `.info-box.warning` (노란)
- `.example-box`, `.example-box pre` (다크 코드 블록)
- 커리큘럼: `.curriculum-tabs`, `.curriculum-tab`, `.curriculum-session-card`, `.curriculum-session-type` (lecture/practice/workshop/presentation)
- 실습자료: `.materials-grid`, `.material-card`, `.material-icon`, `.material-meta`, `.material-format`, `.material-pages`
- 도구: `.tools-grid`, `.tool-card`, `.tool-icon`, `.tool-name-group`, `.tool-category`, `.tool-usecase`

##### `src/styles/cases.css` - 전면 재작성
- `.cases-layout` (300px 사이드바 + 1fr 그리드)
- `.cases-sidebar` (sticky), `.cases-menu`, `.cases-menu-item` (active 상태)
- `.cases-cards`, `.case-card` (수평 flex)
- `.case-card-icon`, `.case-card-body`, `.case-card-title`, `.case-card-desc`, `.case-card-tags`, `.case-tag`

##### `src/styles/login.css` - 추가
- `.login-buttons`, `.login-btn`, `.login-icon`
- `.google-btn`, `.kakao-btn` (JSX 매칭)

##### `src/styles/base.css` - 추가
- `.section-badge` (상단 배지 스타일)
- `.not-found-icon` (404 아이콘)

##### `src/styles/dark-mode.css` - 클래스명 정렬
- `.feature-card` → `.home-feature-card`, `.feature-icon` → `.home-feature-icon`
- `.process-step-number` → `.home-workflow-step-num`
- `.sidebar-nav-item` → `.sidebar-nav-btn` + `.cases-menu-item` 다크모드 추가
- `.info-box-info/warning/success/error` → `.info-box`, `.info-box.warning`, `.info-box.tip`
- `.social-btn-google/kakao` → `.google-btn`, `.kakao-btn`
- `.case-card-tag` → `.case-tag`, `.faq-answer-content` → `.faq-answer`
- 미사용 클래스 제거 (`program-card`, `testimonial-card`, `news-card` 등)

##### `src/styles/responsive.css` - 전면 재작성
- 모든 홈 섹션: `home-*` 접두사 클래스로 변경
- 히어로: `.hero-description`, `.hero-buttons`, `.carousel-arrow-*`, `.carousel-dots`, `.scroll-indicator`
- 레이아웃: `.content-page-layout`, `.cases-layout` 태블릿 반응형 추가
- CTA: `.home-cta-content h2/p`, `.home-cta-buttons`
- FAQ: `.faq-answer`
- 로그인: `.login-btn`
- 미사용 클래스 제거 (`programs-grid`, `testimonials-grid`, `news-grid`, `partners-grid` 등)
- 인쇄 스타일: `.carousel-dots`, `.carousel-arrow-*`, `.scroll-indicator`, `.cases-sidebar`

#### 기술적 상세
- JSX 파일은 수정하지 않음 (CSS를 JSX에 맞춤)
- 빌드 성공: 357ms
- 최종 CSS 번들: 75.26KB (gzip 12.80KB)

---

## [1.2.0] - 2026-04-04

### 학습 콘텐츠 보강 및 데이터 정합성 수정

전체 학습 콘텐츠를 점검하여 부족한 예시를 보강하고, 페이지 간 데이터 불일치 문제를 수정.

#### 프롬프트 템플릿 보강 (PromptsPage.jsx)
- 기존 7개 → **12개** 프롬프트 예시로 확대
- 추가된 5개 프롬프트:
  - **요약형**: 보고서 핵심 요약 (경영진 보고용 1페이지 축약)
  - **보고서형**: 업무 프로세스 분석 보고서 (AI Agent 적용 방안 포함)
  - **검토형**: 문서 품질 검토 (5점 척도 평가 + Before/After 수정 예시)
  - **실행계획형**: 부서 AI 역량 강화 계획 (6개월 단계별 교육 계획)
  - **회의자료형**: 경영 브리핑 자료 (Executive Summary + 대안 비교 표)
- 연도 참조 업데이트: 2024~2025 → 2025~2026

#### 결과물 예시 보강 (ResultsPage.jsx)
- 기존 6개 → **10개** 결과물 예시로 확대
- 추가된 4개 결과물:
  - **AX 아이디어**: 공공기관 민원 응대 AI Agent (분류 자동화, FAQ 자동응답)
  - **Agent 설계**: 리서치 자동화 Agent 설계서 (Perplexity+Genspark+Claude 워크플로우)
  - **실행안**: 부서 AI 역량 강화 교육 계획서 (6개월 3단계 프로그램)
  - **발표자료**: AX 추진 경영보고 발표자료 (8슬라이드 구성)

#### 산업·기관 사례 보강 (CasesPage.jsx)
- 기존 10개 → **14개** 사례로 확대
- 추가된 4개 사례:
  - **대학**: 대학원 연구 지원 AI Agent (논문 리서치, 선행연구 분석)
  - **대학**: 캡스톤 디자인 프로젝트 AI Agent 적용
  - **기업**: 고객응대 매뉴얼 자동화 및 CS 품질 향상
  - **기업**: 마케팅 콘텐츠 기획 및 제작 자동화

#### 데이터 정합성 수정
- **Home.jsx 통계 수치 교정**:
  - 커리큘럼: `4+` → `4` (정확한 수치)
  - 템플릿: `20+` → `14+` (실제 자료 7종 + 프롬프트 12종 기준)
  - 사례: `15+` → `14+` (실제 14개 사례 반영)
  - 교육시간: `40+` → `28+` (4+8+16=28시간 기준)
- **site.js CASE_CATEGORIES 동기화**: CasesPage.jsx의 실제 카테고리와 일치하도록 수정
  - 변경 전: power-company, public-org, automation, research, ideation
  - 변경 후: power, public, university, enterprise, custom
- **HeroCarousel.jsx 배경 중복 수정**:
  - 변경 전: `[particles, particles, network, orbs, geometric]` (particles 중복)
  - 변경 후: `[particles, network, orbs, geometric, particles]` (5슬라이드에 4종 배경 고르게 배분)

#### 기술적 상세
- 변경 파일 6개: Home.jsx, HeroCarousel.jsx, site.js, CasesPage.jsx, PromptsPage.jsx, ResultsPage.jsx
- 빌드 성공: 433ms
- 코드 변경량: +528행 / -12행

---

## [1.3.0] - 2026-04-04

### "학습하기" 페이지 신설 및 네비게이션 개편

기존 플랫폼에 없던 AI Agent, 에이전틱 AI 등의 이론 학습 콘텐츠를 신설.
"홈" 메뉴를 제거하고 "학습하기" 메뉴를 추가하여 이론+실습 학습 콘텐츠를 체계적으로 정리.

#### 신규 파일 (1개)

##### `src/pages/learning/LearningPage.jsx` - 학습하기 페이지
- 사이드바 기반 8개 섹션 구성 (기존 content-page 패턴 재사용)
- **학습 안내**: 플랫폼 소개, 학습 경로 안내, 콘텐츠 통계 카드, 기존 페이지 바로가기
- **생성형 AI의 이해**: 정의, LLM 작동 원리, 주요 기능(생성/요약/분석/변환), 한계와 환각, 기존 소프트웨어 비교표
- **AI Agent 개론**: 정의, 에이전틱 AI 개념, 생성형 AI vs AI Agent 비교표, 중요성 4가지, 업무 적용 사례
- **AI Agent 유형과 구조**: 4대 구성요소(인식/계획/실행/기억), Agent 유형(반사형/목표형/학습형), 싱글 vs 멀티 Agent 비교, 아키텍처 예시
- **프롬프트 엔지니어링**: 프롬프트 5요소(역할/맥락/지시/형식/조건), 핵심 기법 6가지, 안티패턴 vs 개선법 비교표, `/prompts` 페이지 연결
- **업무 분해 방법론**: IPO 프레임워크, 4단계 방법론, 주간보고 작성 분해 실습 예시표, `/materials` 페이지 연결
- **심화 개념**: RAG, Function Calling/Tool Use, 멀티 에이전트 시스템, AI Agent 플랫폼(GPTs/Claude Projects/Gems/Copilot Studio)
- **학습 로드맵**: 4단계 학습 경로(기초→기법→설계→심화), 전체 콘텐츠 8개 바로가기 그리드, CTA 버튼
- 기존 CSS 클래스 100% 재사용 (신규 CSS 불필요)

#### 수정 파일 (5개)

##### `src/utils/translations.js`
- `ko.nav.home` → `ko.nav.learning` ('학습하기')
- `en.nav.home` → `en.nav.learning` ('Learning')
- `ko.learning` 블록 추가 (title, subtitle)
- `en.learning` 블록 추가 (title, subtitle)

##### `src/config/site.js`
- `MENU_ITEMS`에서 `home` 항목 제거
- `learning` 항목을 첫 번째로 추가 (path: `/learning`, icon: `fa-book-open-reader`)

##### `src/layouts/PublicLayout.jsx`
- `LearningPage` lazy import 추가
- `/learning` Route 추가 (총 12개 라우트)

##### `src/components/layout/Navbar.jsx`
- 데스크톱 메뉴: Home 링크 → Learning 링크로 교체 (첫 번째 위치)
- 모바일 메뉴: Home 링크 → Learning 링크로 교체 (첫 번째 위치)
- 메뉴 총 개수 7개 유지

##### `src/components/layout/Footer.jsx`
- 빠른 링크에 "학습하기" 링크를 첫 번째 항목으로 추가

#### 기술적 상세
- 변경 파일 5개 + 신규 파일 1개 = 총 6개 파일
- 빌드 성공: 683ms
- LearningPage 번들: 56.74 KB (gzip 14.24 KB)
- 전체 CSS 번들: 75.26 KB (gzip 12.80 KB) - 변경 없음 (신규 CSS 불필요)

---

## [2.0.0] - 2026-04-04

### 과정소개+커리큘럼 통합, 실습도구 개편, 산업사례 상세화

3개 주요 페이지를 전면 개편하고, 커리큘럼을 과정소개에 통합하여 네비게이션을 7→6개로 축소.

#### 개요
1. **과정소개 + 커리큘럼 통합**: 별도 페이지였던 커리큘럼을 과정소개 페이지에 사이드바 기반으로 통합 (6+4 = 10개 섹션)
2. **실습도구 전면 개편**: 단순 카드 그리드 → 사이드바 기반 상세 페이지 (8개 섹션, 도구별 링크+기능+팁+프롬프트)
3. **산업사례 전면 개편**: 1~2줄 설명 카드 → 배경/과제/솔루션/과정/성과/교훈 구조의 전문 콘텐츠 (14개 사례 상세화)

#### 삭제 파일 (1개)
- `src/pages/curriculum/CurriculumPage.jsx` — CoursePage에 통합되어 삭제

#### 변경 파일 (12개)

##### 인프라 변경 (7개)

###### `src/config/site.js`
- `MENU_ITEMS`에서 `curriculum` 행 제거 (9→8개 항목)

###### `src/utils/translations.js`
- ko/en `nav.curriculum` 키 제거
- ko/en `curriculum` 섹션 전체 제거
- `course.subtitle` 갱신:
  - ko: "과정소개 및 커리큘럼 — 워크숍의 목적, 대상, 기대효과와 교육 구성을 안내합니다"
  - en: "Course Overview & Curriculum — Purpose, target audience, expected outcomes, and education structure."

###### `src/layouts/PublicLayout.jsx`
- `CurriculumPage` lazy import 제거
- `Navigate` import 추가
- `/curriculum` Route → `<Navigate to="/course" replace />` 리다이렉트로 변경

###### `src/components/layout/Navbar.jsx`
- 데스크톱: curriculum `<li>` 제거 (7→6개 메뉴)
- 모바일: curriculum `<li>` 제거

###### `src/components/layout/Footer.jsx`
- 빠른 링크에서 curriculum 항목 제거

###### `src/components/HeroCarousel.jsx`
- case 0, 1, 2의 `cta2.to`를 `/curriculum` → `/course`로 변경 (3곳)
- default fallback `/curriculum` → `/course`로 변경

###### `src/pages/learning/LearningPage.jsx`
- `<Link to="/curriculum">` 2곳 → `<Link to="/course">`로 변경

##### 페이지 전면 개편 (3개)

###### `src/pages/course/CoursePage.jsx` — 전면 개편
- 기존 6개 섹션 사이드바 → **10개 섹션** 사이드바 (그룹 라벨로 "과정소개"/"커리큘럼" 분리)
- 과정소개 6개 섹션: 과정 개요, 교육 목적, 주요 대상, 기대효과, 왜 이 과정인가, 어떤 문제를 해결하는가
- 커리큘럼 4개 섹션: 8시간 기본과정, 4시간 특강형, 16시간 심화형, 프로젝트형 확장과정
- `SESSIONS_8H` 배열과 `getTypeBadgeClass` 함수를 CurriculumPage에서 이관
- 기존 `.curriculum-session-card` CSS 클래스 그대로 재사용

###### `src/pages/tools/ToolsPage.jsx` — 전면 개편
- 기존 카드 그리드 레이아웃 → **사이드바 기반 8개 섹션** (`content-page-layout` 패턴)
- 사이드바: 도구 개요, ChatGPT, Claude, Gemini, Genspark, Perplexity, Napkin AI, 실습 환경 안내
- 도구별 상세 콘텐츠 구조:
  - 도구명, 카테고리, 설명
  - **외부 링크** (실제 URL, `.tool-external-link` 클래스)
  - **주요 기능** 5가지 (`framework-grid` 재사용)
  - **유용한 팁** 5가지 (`info-box tip` 재사용)
  - **활용 사례 및 프롬프트** 2개 (`example-box` 재사용)
- 도구 URL: ChatGPT(chat.openai.com), Claude(claude.ai), Gemini(gemini.google.com), Genspark(genspark.ai), Perplexity(perplexity.ai), Napkin AI(napkin.ai)
- overview 섹션: 기존 6개 도구 카드 요약 그리드 유지 (클릭 시 상세 섹션 전환)
- environment 섹션: 기존 실습 환경 안내 콘텐츠 + 도구별 바로가기 링크

###### `src/pages/cases/CasesPage.jsx` — 전면 개편
- 기존 `cases-layout` → `content-page-layout` (표준 사이드바 패턴)
- 사이드바: 카테고리별 그룹 라벨 + 개별 사례 버튼 (5개 카테고리, 14개 사례)
- **14개 전체 사례에 상세 콘텐츠 작성** (한/영 이중 언어):
  - 배경 및 맥락 — 조직 소개, 상황 설명
  - 도전 과제 — 4개 핵심 문제점
  - AI Agent 솔루션 — 접근 방법, 사용 도구
  - 실행 과정 — 4~5단계 프로세스 (`curriculum-session-card` 재사용)
  - 성과 및 결과 — 정량적 성과 (`info-box tip`)
  - 핵심 교훈 — 3개 시사점 (`info-box`)
- 카테고리별 사례 수:
  - 발전 공기업 (4): KOMIPO AX 혁신, 회의자료 자동화, 동향 리서치, KOSPO 가이드
  - 공공기관 (2): 업무혁신 프로세스, 정책 문서 분석
  - 대학 (3): AI 교육 커리큘럼, 대학원 연구지원, 캡스톤 디자인
  - 일반기업 (3): 업무 자동화 파일럿, CS 매뉴얼 자동화, 마케팅 콘텐츠 자동화
  - 맞춤형 AX (2): AX 전략 수립, Agent 라이브러리 구축

##### CSS 변경 (2개)

###### `src/styles/content-pages.css`
- `.sidebar-nav-group-label` 추가: 사이드바 그룹 라벨 (11px, uppercase, 0.08em letter-spacing)
- `.sidebar-nav-group-label:first-child` 추가: 첫 번째 그룹 라벨 상단 패딩 제거
- `.tool-external-link` 추가: 외부 링크 버튼 (inline-flex, 8px gap, 8px border-radius)
- `.tool-external-link:hover` 추가: 호버 시 배경 강화

###### `src/styles/dark-mode.css`
- `html[data-theme="dark"] .tool-external-link` 추가: 다크모드 외부 링크 (파란 배경, #7EB8FF 텍스트)
- `html[data-theme="dark"] .tool-external-link:hover` 추가: 다크모드 호버
- `html[data-theme="dark"] .sidebar-nav-group-label` 추가: 다크모드 그룹 라벨

#### 기술적 상세
- 변경 파일 12개 + 삭제 파일 1개 = 총 13개 파일
- 코드 변경량: +1,149행 / -549행
- 빌드 성공: 890ms
- 주요 번들 크기:
  - CoursePage: 27.48 KB (gzip 8.45 KB)
  - ToolsPage: 25.61 KB (gzip 9.85 KB)
  - CasesPage: 56.72 KB (gzip 19.88 KB)
  - 전체 CSS: 75.96 KB (gzip 12.94 KB)

---

## [2.1.0] - 2026-04-04

### 사이드바 드롭다운(아코디언) 디자인 개편

4개 콘텐츠 페이지(CoursePage, CasesPage, ToolsPage, LearningPage)의 사이드바를 평면 리스트에서 그룹별 접기/펼치기가 가능한 아코디언 사이드바로 전면 개편. 재사용 가능한 `SidebarNav` 컴포넌트를 추출하여 4개 페이지에 공통 적용.

#### 신규 파일 (1개)

##### `src/components/SidebarNav.jsx` — 재사용 아코디언 사이드바 컴포넌트
- **Props**: `groups`, `activeId`, `onSelect`, `headingKo`, `headingEn`
- `groups` 구조: `[{ id, labelKo, labelEn, icon, items: [{ id, titleKo, titleEn, icon }] }]`
- `useState(Set)` — 열린 그룹 ID 관리 (다중 열기 가능)
- `useEffect` — `activeId` 변경 시 해당 그룹 자동 펼침
- 초기 마운트 시 `activeId`가 속한 그룹 자동 펼침
- `aria-expanded` 접근성 속성 포함
- `<nav>/<div>/<button>` 구조 (grid-template-rows 트릭을 위해 `<ul>/<li>` 대신 사용)

#### 변경 파일 (7개)

##### `src/pages/course/CoursePage.jsx`
- `SECTIONS` 배열 → `SIDEBAR_GROUPS` 배열로 변환
- 2개 그룹: 과정소개 (6항목), 커리큘럼 (4항목)
- 인라인 사이드바 JSX → `<SidebarNav />` 교체

##### `src/pages/cases/CasesPage.jsx`
- `CATEGORIES` + `CASES`에서 `SIDEBAR_GROUPS` 자동 파생 (`.map()` + `.filter()`)
- 5개 그룹: 발전 공기업(4), 공공기관(2), 대학(3), 일반기업(3), 맞춤형 AX(2)
- 인라인 사이드바 JSX → `<SidebarNav />` 교체

##### `src/pages/tools/ToolsPage.jsx`
- `SECTIONS` 배열 제거, `SIDEBAR_GROUPS` 신규 그룹핑 도입
- 4개 그룹: 개요(1), 대화형 AI(2), 리서치 도구(3), 시각화 및 환경(2)
- 인라인 사이드바 JSX → `<SidebarNav />` 교체

##### `src/pages/learning/LearningPage.jsx`
- `SECTIONS` 배열 제거, `SIDEBAR_GROUPS` 신규 그룹핑 도입
- 3개 그룹: 기초 이론(3), 핵심 역량(3), 심화 학습(2)
- 인라인 사이드바 JSX → `<SidebarNav />` 교체

##### `src/styles/content-pages.css`
- `.sidebar-nav-group-label` 삭제, 아코디언 관련 CSS 추가:
  - `.sidebar-nav-group` — 그룹 래퍼
  - `.sidebar-nav-group-toggle` — 토글 버튼 (flex, uppercase, 700 weight)
  - `.sidebar-nav-group-toggle:hover` — 파란색 호버
  - `.sidebar-nav-group-toggle.open .sidebar-nav-chevron` — 180도 회전
  - `.sidebar-nav-group-text` — 라벨 텍스트 (flex: 1, text-align: left)
  - `.sidebar-nav-group-count` — 아이템 개수 배지 (pill, 11px)
  - `.sidebar-nav-chevron` — 셰브론 아이콘 (10px, 0.3s transition)
  - `.sidebar-nav-group-items` — 접힘 컨테이너 (grid-template-rows: 0fr)
  - `.sidebar-nav-group-items.expanded` — 펼침 (grid-template-rows: 1fr)
  - `.sidebar-nav-group-items-inner` — 내부 래퍼 (min-height: 0, overflow: hidden)
  - `.sidebar-nav-group-items .sidebar-nav-btn` — 중첩 들여쓰기 (padding-left: 36px, 13px)

##### `src/styles/dark-mode.css`
- `.sidebar-nav-group-label` 다크모드 → 새 아코디언 다크모드로 교체:
  - `.sidebar-nav-group-toggle:hover` — rgba(61,109,181,0.08) 배경
  - `.sidebar-nav-group-count` — 다크 배경/텍스트

##### `src/styles/responsive.css`
- `@media (max-width: 1023px)` 블록에 아코디언 모바일 대응 추가:
  - `.sidebar-nav-group-toggle` — `display: none` (그룹 토글 숨김)
  - `.sidebar-nav-group-items` — `grid-template-rows: 1fr !important`, flex-row wrap (강제 펼침)
  - `.sidebar-nav-group-items-inner` — `display: contents` (래퍼 무시)
  - `.sidebar-nav-group-items .sidebar-nav-btn` — 들여쓰기 제거 (padding-left: 16px)

#### 애니메이션 기법
- **grid-template-rows 0fr→1fr 트랜지션**: 높이 auto 애니메이션의 CSS-only 솔루션
- **cubic-bezier(0.4, 0, 0.2, 1)**: Material Design easing curve 적용
- 셰브론 180도 회전 트랜지션

#### 기술적 상세
- 변경 파일 7개 + 신규 파일 1개 = 총 8개 파일
- 빌드 성공: 697ms
- SidebarNav 번들: 1.62 KB (gzip 0.67 KB)
- 전체 CSS: 77.32 KB (gzip 13.14 KB)

---

## [2.2.0] - 2026-04-04

### UX 개선: 사이드바 가독성, 프롬프트 복사 버튼, 푸터 레이아웃

#### 사이드바 가독성 개선 (SidebarNav)

##### 아이템 아이콘 제거
- 3차 메뉴(개별 아이템) 버튼에서 `<i>` 아이콘 삭제 — 텍스트만 표시
- 2차 메뉴(그룹 토글)의 아이콘은 유지 (카테고리 구분 강조)

##### 폰트 계층 미세조정 (`content-pages.css`)
- 그룹 토글: font-size 12px → 13px, letter-spacing 0.06em → 0.04em
- 아이템 버튼: font-size 13px → 12.5px, padding-left 36px → 40px
- 아이템에 `line-height: 1.5`, `gap: 0` 추가
- 그룹 간 `margin-top: 6px` 추가 (`.sidebar-nav-group + .sidebar-nav-group`)

##### 단일 열기 방식으로 변경
- `useState(Set)` → `useState(string | null)` 변경
- 다른 그룹 클릭 시 기존 열린 그룹 자동 닫힘 (단일 열기)
- 이미 열린 그룹 재클릭 시 닫힘

#### 프롬프트 복사 버튼 추가 (PromptsPage)

##### `src/pages/prompts/PromptsPage.jsx`
- 각 프롬프트 샘플 박스에 **복사 버튼** 추가
- `navigator.clipboard.writeText()` API 사용
- 복사 후 2초간 체크 아이콘 + "복사됨/Copied" 피드백 표시
- `useCallback`으로 핸들러 메모이제이션
- 한/영 전환 시 해당 언어 프롬프트만 복사

##### 복사 버튼 CSS (`content-pages.css`)
- `.example-box-header` — flex 레이아웃 (h4 + 복사 버튼 가로 배치)
- `.copy-btn` — pill 스타일 버튼 (12px, 600 weight, var(--radius-full))
- `.copy-btn:hover` — 파란 강조
- `.copy-btn.copied` — 초록 강조 (#00855A)
- `.copy-btn i` — 아이콘 크기 11px

##### 다크모드 (`dark-mode.css`)
- `.copy-btn` — rgba(255,255,255,0.06) 배경
- `.copy-btn:hover` — rgba(61,109,181,0.12) 파란 배경
- `.copy-btn.copied` — rgba(42,175,122,0.12) 초록 배경

#### 푸터 바로가기 2열 배치

##### `src/styles/footer.css`
- `.footer-link-list` — `flex-direction: column` → `grid` 2열 변경
- `grid-template-columns: 1fr 1fr` 적용

#### 변경 파일 요약

| 파일 | 변경 내용 |
|------|-----------|
| `src/components/SidebarNav.jsx` | 아이템 아이콘 제거, 단일 열기 방식 변경 |
| `src/pages/prompts/PromptsPage.jsx` | 복사 버튼 추가 |
| `src/styles/content-pages.css` | 폰트 미세조정, 복사 버튼 CSS |
| `src/styles/dark-mode.css` | 복사 버튼 다크모드 |
| `src/styles/footer.css` | 바로가기 2열 그리드 |

#### 기술적 상세
- 변경 파일 5개
- 빌드 성공: ~500ms
- 전체 CSS: 78.36 KB (gzip 13.29 KB)

---

## [2.3.0] - 2026-04-04

### Supabase 커뮤니티 데이터베이스 구축

Supabase에 커뮤니티 게시판 테이블, RLS 정책, 트리거를 구축.

#### 데이터베이스 테이블 (3개)
- `agent_profiles` — 사용자 프로필 (id, display_name, avatar_url, bio, created_at, updated_at)
- `agent_posts` — 게시글 (id, author_id, title, content, category, views, comment_count, created_at, updated_at)
- `agent_comments` — 댓글 (id, post_id, author_id, content, created_at)

#### RLS 정책
- 모든 테이블에 `SELECT` 공개 읽기 허용
- `INSERT`/`UPDATE`/`DELETE`는 `auth.uid()` 기반 본인 데이터만 허용

#### 트리거
- `agent_profiles`: 신규 사용자 가입 시 자동 프로필 생성
- `agent_posts`: 댓글 추가/삭제 시 `comment_count` 자동 갱신

#### Supabase 클라이언트 (`src/lib/supabase.js`)
- `TABLES` 상수 추가: `PROFILES`, `POSTS`, `COMMENTS` (모두 `agent_` 접두사)

---

## [2.4.0] - 2026-04-04

### 커뮤니티 게시판 프론트엔드 구현

Supabase DB를 활용한 커뮤니티 게시판 UI를 구현. 목록/상세/작성 3개 뷰를 단일 `CommunityPage.jsx`에서 `useState`로 전환.

#### 신규 파일 (1개)

##### `src/pages/community/CommunityPage.jsx` — 커뮤니티 게시판
- **State 관리**: `view` (list/detail/write), `selectedPostId`, `activeCategory`, `searchQuery`, `posts`, `selectedPost`, `comments`, 작성 폼 및 댓글 폼 상태
- **카테고리 6개**: 전체, 자유, 질문, 정보공유, 프롬프트, 결과물 (한/영 이중 언어)
- **목록 뷰**:
  - 카테고리 필터 pills (`.community-categories`)
  - 검색 입력 (`.community-search`, Enter 키 검색)
  - 글쓰기 버튼 (로그인 시만 표시)
  - 게시글 목록 (`.post-list` > `.post-item`) — 카테고리 배지, 제목, 발췌, 작성자, 날짜, 조회수, 댓글수
  - 로딩/빈 상태 처리
- **상세 뷰**:
  - 뒤로가기 버튼 → 목록 복귀
  - 게시글 상세 (`.post-detail-card`) — 카테고리, 제목, 작성자 아바타, 날짜, 조회수, 본문
  - 본인 게시글: 수정/삭제 버튼
  - 댓글 섹션 (`.comments-section`) — 댓글 작성 폼 (로그인 시만), 댓글 목록, 본인 댓글 삭제
  - 조회수 자동 증가 (detail 진입 시 `views` +1)
- **작성/수정 뷰**:
  - 카테고리 select 드롭다운
  - 제목 입력 (`.write-post-title-input`)
  - 내용 textarea (min-height: 300px)
  - 취소/등록 버튼
  - 수정 모드: 기존 데이터 프리필 후 UPDATE
- **Supabase 쿼리 패턴**:
  - 목록: `agent_posts` + `agent_profiles` inner join, 카테고리/검색 필터, created_at DESC
  - 작성: `agent_posts.insert()`, 수정: `.update()`, 삭제: `.delete()`
  - 댓글: `agent_comments` + `agent_profiles` join, created_at ASC
- 기존 `community.css` (701줄) + `dark-mode.css` 커뮤니티 오버라이드 100% 재사용

#### 수정 파일 (6개)

##### `src/config/site.js`
- `MENU_ITEMS`에 `community` 추가 (path: `/community`, icon: `fa-users`)

##### `src/utils/translations.js`
- ko/en `nav.community` 추가 ('커뮤니티' / 'Community')
- ko/en `community` 섹션 추가 (title, subtitle)

##### `src/layouts/PublicLayout.jsx`
- `CommunityPage` lazy import 추가
- `/community` Route 추가 (총 13개 라우트)

##### `src/components/layout/Navbar.jsx`
- 데스크톱 메뉴: community 링크 추가 (7→8개)
- 모바일 메뉴: community 링크 추가

##### `src/components/layout/Footer.jsx`
- 바로가기에 커뮤니티 링크 추가 (8→9개)

##### `src/styles/responsive.css`
- `@media (max-width: 1023px)`: 커뮤니티 툴바/검색/상세/작성 태블릿 반응형
- `@media (max-width: 767px)`: 게시글 목록 단일 열, 투표/통계 숨김, 카드 패딩 축소, 제목 축소

#### 기술적 상세
- 변경 파일 6개 + 신규 파일 1개 = 총 7개 파일
- 빌드 성공: 525ms
- CommunityPage 번들: 11.48 KB (gzip 3.32 KB)
- 전체 CSS: 79.11 KB (gzip 13.39 KB)

---

## [2.5.0] - 2026-04-04

### 학습하기 페이지에 실습도구 통합

기존 ToolsPage의 6개 AI 도구 콘텐츠를 LearningPage 사이드바 4번째 그룹으로 통합. 학습 이론과 실습 도구를 하나의 페이지에서 연속적으로 탐색 가능.

#### 변경 파일 (1개)

##### `src/pages/learning/LearningPage.jsx`
- **TOOLS 데이터 배열 추가**: 6개 AI 도구 (ChatGPT, Claude, Gemini, Genspark, Perplexity, Napkin AI) 전체 데이터
  - 도구별: 이름, 카테고리, 설명, URL, 아이콘, 색상 (한/영)
  - 주요 기능 5개, 유용한 팁 5개, 활용 프롬프트 2개 (한/영)
- **SIDEBAR_GROUPS 4번째 그룹 추가**: `group-tools` (실습도구 / Practice Tools)
  - 8개 항목: 도구 개요, ChatGPT, Claude, Gemini, Genspark, Perplexity, Napkin AI, 실습 환경 안내
- **3개 렌더링 섹션 추가**:
  - `tools-overview`: 6개 도구 카드 그리드 (`.tools-grid` > `.tool-card`), 클릭 시 상세 전환
  - `activeTool` (개별 도구 상세): 카테고리, 설명, 외부 링크, 주요 기능 5개 (`framework-grid`), 유용한 팁 (`info-box tip`), 활용 프롬프트 2개 (`example-box`)
  - `tools-environment`: 실습 환경 요구사항 4개 + 도구별 바로가기 링크
- 기존 ToolsPage는 독립 페이지로 유지 (별도 라우트 `/tools`) — v2.6.0에서 메뉴 제거 및 리다이렉트 처리

#### 사이드바 구조 (변경 후)

| 그룹 | 항목 수 | 내용 |
|------|---------|------|
| 기초 이론 | 3 | 학습 안내, 생성형 AI의 이해, AI Agent 개론 |
| 핵심 역량 | 3 | Agent 유형과 구조, 프롬프트 엔지니어링, 업무 분해 방법론 |
| 심화 학습 | 2 | 심화 개념, 학습 로드맵 |
| **실습도구** | **8** | **도구 개요, ChatGPT, Claude, Gemini, Genspark, Perplexity, Napkin AI, 실습 환경 안내** |

#### 기술적 상세
- 변경 파일 1개
- 코드 변경량: +269행
- 빌드 성공: 472ms
- LearningPage 번들: 56.71 KB → 81.79 KB (gzip 14.24 KB → 22.58 KB)
- 전체 CSS: 79.11 KB (gzip 13.39 KB) — 변경 없음

---

## [2.6.0] - 2026-04-04

### 상단 메뉴 정리: 실습도구 메뉴 제거

학습하기 페이지에 실습도구를 통합(v2.5.0)한 후, 상단 네비게이션에서 별도 "실습도구" 메뉴 항목을 제거. `/tools` URL은 `/learning`으로 자동 리다이렉트 처리.

#### 변경 파일 (5개)

##### `src/config/site.js`
- `MENU_ITEMS`에서 `tools` 항목 제거 (9→8개)

##### `src/components/layout/Navbar.jsx`
- 데스크톱 메뉴: 실습도구 `<li>` 제거 (8→7개 메뉴)
- 모바일 메뉴: 실습도구 `<li>` 제거

##### `src/layouts/PublicLayout.jsx`
- `ToolsPage` lazy import 제거
- `/tools` Route: `<ToolsPage />` → `<Navigate to="/learning" replace />` 리다이렉트로 변경

##### `src/components/HeroCarousel.jsx`
- 슬라이드 4의 CTA 링크: `/tools` → `/learning` 변경

##### `src/pages/learning/LearningPage.jsx`
- 학습 안내 섹션의 "실습도구" 바로가기: `<Link to="/tools">` → 페이지 내 `tools-overview` 섹션 전환 버튼으로 변경

#### 상단 메뉴 구성 (변경 후 7개)
| 순서 | 메뉴 | 경로 |
|------|------|------|
| 1 | 학습하기 | /learning |
| 2 | 과정소개 | /course |
| 3 | 실습자료 | /materials |
| 4 | 프롬프트 템플릿 | /prompts |
| 5 | 산업·기관 사례 | /cases |
| 6 | FAQ | /faq |
| 7 | 커뮤니티 | /community |

#### 리다이렉트 정리
| 기존 경로 | 리다이렉트 | 시점 |
|-----------|-----------|------|
| `/curriculum` | → `/course` | v2.0.0 |
| `/tools` | → `/learning` | v2.6.0 |

#### 기술적 상세
- 변경 파일 5개
- 빌드 성공: 402ms
- 모듈 수: 89 → 88 (ToolsPage lazy import 제거)
- ToolsPage 번들 제거됨 (26.15 KB 절감)
- 전체 CSS: 79.11 KB (gzip 13.39 KB) — 변경 없음

---

## [2.7.0] - 2026-04-04

### 1차 개발 마무리: 종합 평가 및 SEO 인프라 수정

사이트 전체를 종합 평가하여 `Dev_md/EVALUATION_REPORT.md` 보고서 작성. Critical/High 이슈 5건 수정.

#### 신규 파일 (4개)

##### `Dev_md/EVALUATION_REPORT.md` — 종합 평가보고서
- 10개 항목 평가 (라우팅, 네비게이션, 다국어, CSS, 컴포넌트, 접근성, SEO, 성능, 에러처리, 콘텐츠)
- Critical/High/Medium/Low 이슈 분류 및 수정 계획

##### `public/404.html` — GitHub Pages SPA 라우팅 해결
- SPA 클라이언트 라우팅을 위한 리다이렉트 스크립트
- 서브 페이지 직접 접속/새로고침 시 404 대신 SPA 라우터로 전달

##### `public/robots.txt` — 검색엔진 크롤러 안내
- `User-agent: *`, `Allow: /`, `Sitemap` 참조

##### `public/sitemap.xml` — 검색엔진 사이트맵
- 9개 페이지 URL, changefreq, priority 설정

#### 수정 파일 (4개)

##### `index.html`
- GitHub Pages SPA 경로 복원 스크립트 추가 (404.html과 연동)

##### `src/pages/community/CommunityPage.jsx`
- `SEOHead` import 및 3개 뷰(list/detail/write) 모두에 SEOHead 추가

##### `src/config/site.js`
- 이메일: `contact@dreamitbiz.com` → `aebon@dreamitbiz.com` 통일

##### `src/pages/faq/FaqPage.jsx`
- 이메일: `contact@dreamitbiz.co.kr` → `aebon@dreamitbiz.com` 통일

#### 수정된 이슈 요약

| 심각도 | 이슈 | 수정 |
|--------|------|------|
| Critical | 서브 페이지 직접 접속 시 404 | 404.html + index.html 리다이렉트 |
| High | robots.txt 미존재 | public/robots.txt 추가 |
| High | sitemap.xml 미존재 | public/sitemap.xml 추가 |
| High | CommunityPage SEOHead 누락 | SEOHead 컴포넌트 추가 |
| High | 이메일 주소 3개 불일치 | aebon@dreamitbiz.com으로 통일 |

#### 기술적 상세
- 변경 파일 4개 + 신규 파일 4개 = 총 8개 파일
- 빌드 성공: 526ms
- CommunityPage 번들: 11.62 KB → 11.95 KB (+SEOHead 참조)
- dist에 404.html, robots.txt, sitemap.xml, CNAME 모두 포함 확인
