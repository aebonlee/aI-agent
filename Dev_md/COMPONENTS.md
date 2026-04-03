# 컴포넌트 상세 문서

## 컴포넌트 구조

```
src/components/
├── layout/
│   ├── Navbar.jsx          # 네비게이션 바
│   └── Footer.jsx          # 푸터
├── HeroCarousel.jsx        # 히어로 캐러셀
├── HeroBackground.jsx      # 히어로 배경 애니메이션
└── SEOHead.jsx             # 동적 SEO 메타 태그
```

---

## Navbar.jsx

**경로**: `src/components/layout/Navbar.jsx`

### 기능
- 고정 네비게이션 바 (`position: fixed`)
- 스크롤 시 배경 변경 (`scrolled` 클래스)
- 데스크톱: 7개 네비 링크 + 컬러 피커 + 테마 토글 + 언어 토글 + 인증
- 모바일: 햄버거 메뉴 (1100px 이하)

### 사용 Hook
- `useTheme()` - 테마/컬러 상태
- `useLanguage()` - 언어 전환
- `useAuth()` - 인증 상태
- `useLocation()` - 현재 경로 (active 링크)

### 상태
| 상태 | 타입 | 설명 |
|------|------|------|
| `isScrolled` | boolean | 스크롤 50px 이상 |
| `isMobileOpen` | boolean | 모바일 메뉴 열림 |
| `isColorOpen` | boolean | 컬러 피커 드롭다운 열림 |

### 네비게이션 링크 (7개)
Home, Course, Curriculum, Tools, Prompts, Cases, FAQ

### 인증 상태에 따른 표시
- **로그인 전**: "로그인" 링크 버튼
- **로그인 후**: 아바타 + 이름 + 로그아웃 버튼

### 컬러 피커
- 5개 컬러 옵션: blue(#1B3A6B), red(#C8102E), green(#00855A), purple(#8B1AC8), orange(#C87200)
- 데스크톱: 네비바 우측 드롭다운
- 모바일: 모바일 메뉴 하단 액션 영역

---

## Footer.jsx

**경로**: `src/components/layout/Footer.jsx`

### 구성
- 4열 그리드: 브랜드 | 빠른 링크 | 연락처 | 패밀리 사이트
- **브랜드**: "AI Agent Work Lab" + 설명 텍스트
- **빠른 링크** (7개): Course, Curriculum, Materials, Prompts, Cases, Results, FAQ
- **연락처**: 이메일(aebon@dreamitbiz.com), 전화, 평일 영업시간
- **패밀리 사이트**: DreamIT Biz, Teaching AI, Planning Academy
- 하단: 저작권, 사업자등록 정보

---

## HeroCarousel.jsx

**경로**: `src/components/HeroCarousel.jsx`

### 5개 슬라이드

| 슬라이드 | 배경 | 주요 키워드 |
|----------|------|-------------|
| 1 | particles | 실무형 AI Agent 업무혁신 플랫폼 |
| 2 | network | 산업 맞춤형 AI Agent 교육 |
| 3 | orbs | 실습 중심 워크숍 구조 |
| 4 | geometric | 업무를 바꾸는 AI Agent 설계 |
| 5 | particles | 아이디어에서 실행안까지 |

### 기능
- **자동 전환**: 6초 간격 (`setInterval`)
- **좌우 화살표**: 1024px 이상에서 표시
- **도트 인디케이터**: 하단 5개 점
- **스크롤 인디케이터**: 마우스 애니메이션
- 각 슬라이드별 배지, 타이틀, 하이라이트, 설명, CTA 버튼

### 의존성
- `HeroBackground` 컴포넌트 (배경 애니메이션)
- `useLanguage()` (다국어 텍스트)

---

## HeroBackground.jsx

**경로**: `src/components/HeroBackground.jsx`

### 4가지 애니메이션 타입

| 타입 | 컴포넌트 | 요소 수 | 설명 |
|------|----------|---------|------|
| `particles` | Particles | 30개 | 무작위 떠다니는 입자 |
| `network` | NetworkNodes | 15개 | 느리게 표류하는 노드 |
| `orbs` | RisingOrbs | 12개 | 아래에서 위로 상승하는 구체 |
| `geometric` | GeometricShapes | 12개 | 회전하는 기하학적 도형 (삼각/사각/육각) |

### 구현
- 모든 요소는 CSS 커스텀 프로퍼티로 위치/크기/딜레이 랜덤화
- `@keyframes` 기반 CSS 애니메이션
- `useMemo`로 요소 배열 메모이제이션

---

## SEOHead.jsx

**경로**: `src/components/SEOHead.jsx`

### Props

| Prop | 타입 | 설명 |
|------|------|------|
| `title` | string | 페이지 제목 |
| `description` | string | 페이지 설명 |
| `path` | string | URL 경로 (예: `/course`) |

### 동적 메타 태그
- `document.title` - 페이지 제목 설정
- `<link rel="canonical">` - Canonical URL
- `<meta name="description">` - 설명
- `og:type`, `og:url`, `og:site_name`, `og:title`, `og:description`, `og:image`, `og:locale`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `document.documentElement.lang` - 문서 언어 속성

### 동작
- `useEffect`에서 DOM 직접 조작
- 메타 태그가 없으면 생성, 있으면 업데이트
- `og:locale`은 언어에 따라 `ko_KR` / `en_US` 전환
- 렌더링은 `null` (UI 없음)

---

## 컨텍스트 Providers

### ThemeContext.jsx
```jsx
const { theme, setTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
```
- `theme`: 'auto' | 'light' | 'dark'
- `colorTheme`: 'blue' | 'red' | 'green' | 'purple' | 'orange'
- auto 모드: 7시~19시 light, 나머지 dark

### LanguageContext.jsx
```jsx
const { language, toggleLanguage, t } = useLanguage();
```
- `language`: 'ko' | 'en'
- `t('key.path')`: dot-notation 번역 조회
- 쿠키 기반 저장 (`lang`)

### AuthContext.jsx
```jsx
const { user, loading, signInWithGoogle, signInWithKakao, signOut } = useAuth();
```
- Supabase `onAuthStateChange` 리스너
- OAuth redirect 방식 로그인
