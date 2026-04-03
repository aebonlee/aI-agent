# 파일 구조

## 프로젝트 전체 구조

```
aI-agent/
├── Dev_md/                          # 개발 문서
│   ├── README.md                    # 문서 인덱스
│   ├── ARCHITECTURE.md              # 기술 아키텍처
│   ├── FILE_STRUCTURE.md            # 파일 구조 (이 문서)
│   ├── PAGES.md                     # 페이지별 문서
│   ├── COMPONENTS.md                # 컴포넌트 문서
│   ├── STYLING.md                   # CSS 디자인 시스템
│   ├── FEATURES.md                  # 기능 문서
│   ├── API_AUTH.md                  # 인증/API 문서
│   ├── SETUP_GUIDE.md               # 설치 가이드
│   ├── DEPLOYMENT.md                # 배포 가이드
│   └── CHANGELOG.md                 # 변경 이력
│
├── public/                          # 정적 자산 (빌드 시 dist에 복사)
│   ├── CNAME                        # GitHub Pages 커스텀 도메인
│   ├── favicon.svg                  # SVG 파비콘 (AI 로고)
│   ├── icons.svg                    # 아이콘 스프라이트
│   └── og-image.png                 # OG 이미지 (1200x630, sharp 생성)
│
├── scripts/
│   └── generate-og-image.js         # OG 이미지 생성 스크립트
│
├── src/
│   ├── assets/
│   │   └── hero.png                 # 히어로 이미지
│   │
│   ├── components/                  # 공통 컴포넌트
│   │   ├── layout/
│   │   │   ├── Navbar.jsx           # 네비게이션 바 (데스크톱 + 모바일)
│   │   │   └── Footer.jsx           # 푸터
│   │   ├── HeroCarousel.jsx         # 히어로 캐러셀 (5슬라이드)
│   │   ├── HeroBackground.jsx       # 히어로 배경 애니메이션 (4종)
│   │   └── SEOHead.jsx              # 동적 SEO 메타 태그
│   │
│   ├── config/
│   │   └── site.js                  # 사이트 설정, 메뉴, 커리큘럼 타입, 사례 카테고리
│   │
│   ├── contexts/                    # React Context (전역 상태)
│   │   ├── ThemeContext.jsx          # 테마 (light/dark/auto + 5색상)
│   │   ├── LanguageContext.jsx       # 언어 (ko/en)
│   │   └── AuthContext.jsx           # 인증 (Google + Kakao OAuth)
│   │
│   ├── layouts/
│   │   └── PublicLayout.jsx         # 메인 레이아웃 (Navbar + Routes + Footer)
│   │
│   ├── lib/
│   │   └── supabase.js              # Supabase 클라이언트 초기화
│   │
│   ├── pages/                       # 페이지 컴포넌트 (lazy-loaded)
│   │   ├── Home.jsx                 # 홈 페이지
│   │   ├── NotFound.jsx             # 404 페이지
│   │   ├── auth/
│   │   │   └── LoginPage.jsx        # 로그인 (Google + Kakao)
│   │   ├── learning/
│   │   │   └── LearningPage.jsx     # 학습하기 (8섹션 사이드바)
│   │   ├── cases/
│   │   │   └── CasesPage.jsx        # 산업·기관 사례 (5카테고리, 10사례)
│   │   ├── course/
│   │   │   └── CoursePage.jsx       # 과정소개 (6섹션)
│   │   ├── curriculum/
│   │   │   └── CurriculumPage.jsx   # 커리큘럼 (4타입, 8세션)
│   │   ├── faq/
│   │   │   └── FaqPage.jsx          # FAQ (8항목, 아코디언)
│   │   ├── materials/
│   │   │   └── MaterialsPage.jsx    # 실습자료 (7종 자료)
│   │   ├── prompts/
│   │   │   └── PromptsPage.jsx      # 프롬프트 템플릿 (6카테고리)
│   │   ├── results/
│   │   │   └── ResultsPage.jsx      # 결과물 예시 (5카테고리)
│   │   └── tools/
│   │       └── ToolsPage.jsx        # 실습도구 (6종 AI 도구)
│   │
│   ├── styles/                      # CSS 스타일시트 (13개)
│   │   ├── index.css                # CSS 모듈 임포트 허브
│   │   ├── base.css                 # CSS 변수, 리셋, 기본 스타일
│   │   ├── navbar.css               # 네비게이션 바 스타일
│   │   ├── hero.css                 # 히어로 섹션 스타일
│   │   ├── home.css                 # 홈 페이지 섹션 스타일
│   │   ├── footer.css               # 푸터 스타일
│   │   ├── content-pages.css        # 콘텐츠 페이지 공통 레이아웃
│   │   ├── cases.css                # 사례 페이지 전용 스타일
│   │   ├── login.css                # 로그인 페이지 스타일
│   │   ├── community.css            # 커뮤니티 스타일 (확장용)
│   │   ├── animations.css           # 애니메이션 유틸리티
│   │   ├── dark-mode.css            # 다크 모드 오버라이드
│   │   └── responsive.css           # 반응형 (6개 브레이크포인트)
│   │
│   ├── utils/
│   │   └── translations.js          # 한국어/영어 번역 사전
│   │
│   ├── App.jsx                      # 루트 컴포넌트 (Context Providers)
│   └── main.jsx                     # 엔트리 포인트
│
├── .env                             # 환경 변수 (VITE_SUPABASE_*)
├── .gitignore                       # Git 무시 파일
├── eslint.config.js                 # ESLint 설정
├── index.html                       # HTML 엔트리 (OG 태그, 폰트)
├── package.json                     # 의존성 및 스크립트
├── package-lock.json                # 의존성 잠금
└── vite.config.js                   # Vite 빌드 설정
```

## 파일 수 요약

| 분류 | 파일 수 |
|------|---------|
| 페이지 컴포넌트 | 12개 (.jsx) |
| 공통 컴포넌트 | 5개 (.jsx) |
| 레이아웃 | 1개 (.jsx) |
| 컨텍스트 | 3개 (.jsx) |
| 설정/유틸 | 3개 (.js) |
| CSS 스타일시트 | 13개 (.css) |
| 엔트리/설정 파일 | 6개 |
| 정적 자산 | 4개 |
| 스크립트 | 1개 |
| 문서 | 11개 |
| **총합** | **59개** |

## 빌드 출력 (dist/)

```
dist/
├── index.html                       # 2.47 KB
├── CNAME                            # 커스텀 도메인
├── favicon.svg                      # 파비콘
├── icons.svg                        # 아이콘
├── og-image.png                     # OG 이미지
└── assets/
    ├── index-*.css                  # 83.16 KB (gzip 13.93 KB)
    ├── vendor-*.js                  # 230.41 KB (gzip 73.58 KB)
    ├── index-*.js                   # 210.01 KB (gzip 56.77 KB)
    ├── rolldown-runtime-*.js        # 0.55 KB
    ├── Home-*.js                    # 10.64 KB
    ├── CoursePage-*.js              # 14.41 KB
    ├── CurriculumPage-*.js          # 13.71 KB
    ├── ToolsPage-*.js               # 7.32 KB
    ├── MaterialsPage-*.js           # 6.49 KB
    ├── PromptsPage-*.js             # 13.70 KB
    ├── CasesPage-*.js               # 10.83 KB
    ├── ResultsPage-*.js             # 13.86 KB
    ├── LearningPage-*.js             # 56.74 KB
    ├── FaqPage-*.js                 # 9.27 KB
    ├── LoginPage-*.js               # 2.46 KB
    ├── NotFound-*.js                # 1.10 KB
    └── SEOHead-*.js                 # 1.64 KB
```
