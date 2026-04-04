# 페이지별 상세 문서

## 라우팅 구조

| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | Home.jsx | 메인 랜딩 페이지 |
| `/learning` | LearningPage.jsx | 학습하기 |
| `/course` | CoursePage.jsx | 과정소개 및 커리큘럼 |
| `/curriculum` | → `/course` 리다이렉트 | (v2.0.0에서 통합) |
| `/tools` | ToolsPage.jsx | 실습도구 |
| `/materials` | MaterialsPage.jsx | 실습자료 |
| `/prompts` | PromptsPage.jsx | 프롬프트 템플릿 |
| `/cases` | CasesPage.jsx | 산업·기관 사례 |
| `/results` | ResultsPage.jsx | 결과물 예시 |
| `/faq` | FaqPage.jsx | FAQ |
| `/community` | CommunityPage.jsx | 커뮤니티 게시판 |
| `/login` | LoginPage.jsx | 로그인 |
| `*` | NotFound.jsx | 404 |

모든 페이지는 `React.lazy()`로 동적 임포트되며, `Suspense`에 의해 로딩 스피너가 표시됨.

---

## 1. Home (홈 페이지)

**파일**: `src/pages/Home.jsx`

### 섹션 구성
1. **HeroCarousel** - 5개 슬라이드 (자동 6초 전환)
   - 슬라이드 1: 실무형 AI Agent 업무혁신 플랫폼 (particles 배경)
   - 슬라이드 2: 산업 맞춤형 AI Agent 교육 (network)
   - 슬라이드 3: 실습 중심 워크숍 구조 (orbs)
   - 슬라이드 4: 업무를 바꾸는 AI Agent 설계 (geometric)
   - 슬라이드 5: 아이디어에서 실행안까지 (particles)
2. **핵심 가치 섹션** - 4개 카드 (공통 플랫폼, 산업 맞춤, 실습 중심, 확장성)
3. **워크플로우 섹션** - 4단계 프로세스 (이해→설계→구축→실행)
4. **대상 청중 섹션** - 5개 타겟 (공공기관, 발전사, AX담당, 관리자, 비개발직군)
5. **통계 섹션** - 4개 수치 (4 커리큘럼, 14+ 템플릿, 14+ 사례, 28+ 교육시간)
6. **CTA 섹션** - 과정 탐색, 자료 보기 버튼

---

## 1-1. LearningPage (학습하기)

**파일**: `src/pages/learning/LearningPage.jsx`

### 사이드바 + 콘텐츠 레이아웃 (8개 섹션)

| 섹션 ID | 한국어 | 영어 | 아이콘 |
|---------|--------|------|--------|
| `overview` | 학습 안내 | Learning Guide | fa-compass |
| `ai-basics` | 생성형 AI의 이해 | Understanding Generative AI | fa-microchip |
| `ai-agent` | AI Agent 개론 | AI Agent Introduction | fa-robot |
| `agent-types` | AI Agent 유형과 구조 | Agent Types & Architecture | fa-diagram-project |
| `prompt-theory` | 프롬프트 엔지니어링 | Prompt Engineering Theory | fa-pencil-ruler |
| `task-decomposition` | 업무 분해 방법론 | Task Decomposition | fa-sitemap |
| `advanced-concepts` | 심화 개념 | Advanced Concepts | fa-layer-group |
| `learning-path` | 학습 로드맵 | Learning Roadmap | fa-route |

### 섹션별 콘텐츠 요약

1. **학습 안내** - 플랫폼 소개, 학습 경로 안내, 전체 콘텐츠 통계 4카드, 기존 페이지 바로가기 4개
2. **생성형 AI의 이해** - 정의, LLM 원리, 주요 기능 4가지, 한계와 환각, 기존 SW 비교표
3. **AI Agent 개론** - 정의, 에이전틱 AI 개념, GenAI vs Agent 비교표, 중요성 4가지, 적용 사례 4개
4. **AI Agent 유형과 구조** - 4대 구성요소, 3가지 유형, 싱글 vs 멀티 비교표, 아키텍처 예시
5. **프롬프트 엔지니어링** - 5요소 구조, 핵심 기법 6가지, 안티패턴 비교표, `/prompts` 연결
6. **업무 분해 방법론** - IPO 프레임워크, 4단계 방법론, 주간보고 분해 예시표, `/materials` 연결
7. **심화 개념** - RAG, Function Calling, 멀티 에이전트, AI Agent 플랫폼 4종
8. **학습 로드맵** - 4단계 학습 경로, 전체 콘텐츠 8개 바로가기, CTA

### 재사용 CSS 클래스
`content-page`, `content-page-layout`, `content-sidebar`, `sidebar-nav-btn`, `content-card`, `framework-grid`, `framework-item`, `info-box`, `info-box.tip`, `example-box`

---

## 2. CoursePage (과정소개 및 커리큘럼) — v2.0.0 통합

**파일**: `src/pages/course/CoursePage.jsx`

### 사이드바 + 콘텐츠 레이아웃 (10개 섹션, 그룹 라벨 분리)

**과정소개 그룹 (6개 섹션)**:
| 섹션 ID | 한국어 | 영어 | 아이콘 |
|---------|--------|------|--------|
| `overview` | 과정 개요 | Course Overview | fa-book-open |
| `objectives` | 교육 목적 | Objectives | fa-bullseye |
| `targets` | 주요 대상 | Target Audience | fa-users |
| `outcomes` | 기대효과 | Expected Outcomes | fa-chart-line |
| `why` | 왜 이 과정인가 | Why This Course? | fa-star |
| `problems` | 어떤 문제를 해결하는가 | What Problems? | fa-circle-question |

**커리큘럼 그룹 (4개 섹션)**:
| 섹션 ID | 한국어 | 영어 | 아이콘 |
|---------|--------|------|--------|
| `basic-8h` | 8시간 기본과정 | 8-Hour Basic | fa-clock |
| `special-4h` | 4시간 특강형 | 4-Hour Special | fa-bolt |
| `advanced-16h` | 16시간 심화형 | 16-Hour Advanced | fa-graduation-cap |
| `project` | 프로젝트형 확장과정 | Project Extension | fa-diagram-project |

8시간 기본과정은 `SESSIONS_8H` 배열 (8개 세션)과 `getTypeBadgeClass` 함수로 curriculum-session-card를 렌더링.
`/curriculum` 접속 시 `/course`로 자동 리다이렉트 (PublicLayout.jsx에서 Navigate 처리)

---

## 4. ToolsPage (실습도구) — v2.0.0 전면 개편

**파일**: `src/pages/tools/ToolsPage.jsx`

### 사이드바 + 콘텐츠 레이아웃 (8개 섹션)

| 섹션 ID | 한국어 | 영어 | 아이콘 |
|---------|--------|------|--------|
| `overview` | 도구 개요 | Tools Overview | fa-grid-2 |
| `chatgpt` | ChatGPT (GPT-4o) | ChatGPT (GPT-4o) | fa-comments |
| `claude` | Claude (Sonnet/Opus) | Claude (Sonnet/Opus) | fa-file-lines |
| `gemini` | Gemini | Gemini | fa-diamond |
| `genspark` | Genspark | Genspark | fa-magnifying-glass-chart |
| `perplexity` | Perplexity | Perplexity | fa-searchengin |
| `napkin` | Napkin AI | Napkin AI | fa-chart-diagram |
| `environment` | 실습 환경 안내 | Practice Environment | fa-laptop-code |

### 도구별 상세 콘텐츠 구조
1. 도구명, 카테고리, 설명
2. **외부 링크** (실제 URL, `.tool-external-link` 클래스)
3. **주요 기능** 5가지 (`framework-grid`)
4. **유용한 팁** 5가지 (`info-box tip`)
5. **활용 사례 및 프롬프트** 2개 (`example-box`)

### 도구 URL
| 도구 | URL |
|------|-----|
| ChatGPT | https://chat.openai.com |
| Claude | https://claude.ai |
| Gemini | https://gemini.google.com |
| Genspark | https://www.genspark.ai |
| Perplexity | https://www.perplexity.ai |
| Napkin AI | https://www.napkin.ai |

### overview 섹션
기존 6개 도구 카드 요약 그리드 유지 (`tools-grid` 재사용), 클릭 시 상세 섹션으로 전환

### environment 섹션
노트북, 계정, 네트워크, 브라우저 요구사항 + 도구별 바로가기 링크

---

## 5. MaterialsPage (실습자료)

**파일**: `src/pages/materials/MaterialsPage.jsx`

### 사이드바 필터 (5카테고리)
- 전체, 워크시트, 설계 캔버스, 템플릿, 체크리스트

### 7개 자료
| 자료 | 형식 | 분량 |
|------|------|------|
| 업무 분해 워크시트 | PDF | 4페이지 |
| Agent 설계 캔버스 | PDF | 2페이지 |
| 실행안 템플릿 | DOCX | 6페이지 |
| 발표자료 템플릿 | PPTX | 12슬라이드 |
| 검토 체크리스트 | PDF | 2페이지 |
| 리서치 결과 템플릿 | PDF | 3페이지 |
| 자동화 아이디어 캔버스 | PDF | 2페이지 |

---

## 6. PromptsPage (프롬프트 템플릿)

**파일**: `src/pages/prompts/PromptsPage.jsx`

### 사이드바 (6개 프롬프트 유형)

| 유형 | 예시 수 | 내용 |
|------|---------|------|
| 리서치 | 2개 | 산업 동향 리서치, 기술 트렌드 분석 |
| 요약 | 2개 | 회의록 요약, 보고서 핵심 요약 |
| 보고서 | 2개 | AX 추진 제안서 초안, 업무 프로세스 분석 보고서 |
| 검토 | 2개 | 실행 계획 검토, 문서 품질 검토 |
| 실행안 | 2개 | AI Agent 도입 실행 계획, 부서 AI 역량 강화 계획 |
| 회의자료 | 2개 | 주간 업무 보고 자료, 경영 브리핑 자료 |

각 프롬프트 샘플에 **복사 버튼** 포함 (클릭 시 클립보드 복사, 2초간 "복사됨" 피드백)

활용 팁 정보 박스 포함

---

## 7. CasesPage (산업·기관 사례) — v2.0.0 전면 개편

**파일**: `src/pages/cases/CasesPage.jsx`

### 사이드바 + 콘텐츠 레이아웃 (`content-page-layout` 패턴)

사이드바에 `SidebarNav` 아코디언 컴포넌트 사용 (카테고리별 그룹 토글 + 개별 사례 버튼, 단일 열기)

| 카테고리 | 사례 수 | 주요 사례 |
|----------|---------|-----------|
| 발전 공기업 | 4 | 한국중부발전 AX 혁신, 회의자료 자동화, 발전산업 리서치, KOSPO 가이드 |
| 공공기관 | 2 | 업무혁신 프로세스 재설계, 정책 문서 분석 자동화 |
| 대학 | 3 | AI 교육 커리큘럼, 대학원 연구 지원, 캡스톤 디자인 |
| 일반기업 | 3 | 업무 자동화 파일럿, CS 매뉴얼 자동화, 마케팅 콘텐츠 자동화 |
| 맞춤형 AX | 2 | AX 전략 수립, Agent 라이브러리 구축 |

### 사례별 상세 콘텐츠 구조 (6개 섹션, 한/영 이중 언어)
1. **배경 및 맥락** — 조직 소개, 상황 설명
2. **도전 과제** — 4개 핵심 문제점 (ul)
3. **AI Agent 솔루션** — 접근 방법, 사용 도구 (p)
4. **실행 과정** — 4~5단계 프로세스 (`curriculum-session-card` 재사용)
5. **성과 및 결과** — 정량적 성과 (`info-box tip`)
6. **핵심 교훈** — 3개 시사점 (`info-box`)

---

## 8. ResultsPage (결과물 예시)

**파일**: `src/pages/results/ResultsPage.jsx`

### 사이드바 (5개 카테고리)

| 카테고리 | 예시 수 | 내용 |
|----------|---------|------|
| 리서치 결과 | 2 | 발전산업 AI 도입 현황, 공공기관 AI 정책 동향 |
| AX 아이디어 | 2 | 발전소 안전관리 AI Agent, 공공기관 민원 응대 AI Agent |
| Agent 설계 | 2 | 회의자료 자동작성 Agent 설계서, 리서치 자동화 Agent 설계서 |
| 실행안 | 2 | 사내 AI Agent 3개월 도입 계획서, 부서 AI 역량 강화 교육 계획서 |
| 발표자료 | 2 | 팀 발표자료 12슬라이드 구성, AX 추진 경영보고 8슬라이드 구성 |

---

## 9. FaqPage (FAQ)

**파일**: `src/pages/faq/FaqPage.jsx`

### 8개 질문/답변 (아코디언 토글)

| 질문 |
|------|
| 이 과정은 누구를 위한 것인가요? |
| AI 관련 기술 배경이 없어도 참여할 수 있나요? |
| 실습에 필요한 준비물은 무엇인가요? |
| 8시간 과정과 4시간 특강의 차이는? |
| 기관별 맞춤 교육이 가능한가요? |
| 교육 후 자료 제공은 어떻게 되나요? |
| Agent를 실제로 만들 수 있나요? |
| 온라인 교육도 가능한가요? |

하단에 연락처 (이메일, 전화) 카드

---

## 9-1. CommunityPage (커뮤니티 게시판) — v2.4.0 신규

**파일**: `src/pages/community/CommunityPage.jsx`

### 단일 컴포넌트 3뷰 전환 (`useState` 기반)

| 뷰 | 설명 |
|----|------|
| `list` | 게시글 목록 (카테고리 필터, 검색, 페이지네이션) |
| `detail` | 게시글 상세 + 댓글 |
| `write` | 게시글 작성/수정 |

### 카테고리 (6개)

| ID | 한국어 | 영어 |
|----|--------|------|
| all | 전체 | All |
| free | 자유 | Free |
| question | 질문 | Q&A |
| share | 정보공유 | Info |
| prompt | 프롬프트 | Prompt |
| result | 결과물 | Result |

### 기능
- **목록**: 카테고리 pills 필터, 텍스트 검색, 글쓰기 버튼 (로그인 시만)
- **상세**: 게시글 + 댓글 CRUD, 조회수 자동 증가, 본인 글/댓글만 수정/삭제
- **작성**: 카테고리 선택, 제목/내용 입력, 수정 모드 지원
- **Supabase 연동**: `agent_posts`, `agent_comments`, `agent_profiles` 테이블 JOIN 쿼리

### 재사용 CSS 클래스
`community-page`, `community-layout`, `community-toolbar`, `community-categories`, `community-category-btn`, `community-search`, `community-write-btn`, `post-list`, `post-item`, `post-vote`, `post-content`, `post-category`, `post-title`, `post-excerpt`, `post-meta`, `post-stats`, `post-detail`, `post-detail-card`, `post-detail-header`, `post-detail-body`, `post-actions`, `comments-section`, `comment-form`, `comment-list`, `comment-item`, `write-post-page`, `write-post-card`, `write-post-title-input`, `write-post-actions`

---

## 10. LoginPage (로그인)

**파일**: `src/pages/auth/LoginPage.jsx`

### 구성
- 로봇 아이콘 로고
- "AI Agent Work Lab" 타이틀
- Google 로그인 버튼 (흰색, Google SVG 로고)
- Kakao 로그인 버튼 (노란색, Kakao SVG 로고)
- 개인정보 안내 텍스트
- 로그인 후 자동으로 홈으로 리다이렉트

---

## 11. NotFound (404)

**파일**: `src/pages/NotFound.jsx`

### 구성
- 로봇 아이콘
- "404" 대형 텍스트
- 안내 메시지
- 홈으로 / 뒤로 가기 버튼
