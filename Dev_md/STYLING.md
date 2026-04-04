# CSS 디자인 시스템

## CSS 파일 구조

```css
/* src/styles/index.css */
@import './base.css';          /* 변수, 리셋, 기본 */
@import './navbar.css';        /* 네비게이션 */
@import './hero.css';          /* 히어로 섹션 */
@import './home.css';          /* 홈 페이지 */
@import './footer.css';        /* 푸터 */
@import './content-pages.css'; /* 콘텐츠 페이지 */
@import './cases.css';         /* 사례 페이지 */
@import './login.css';         /* 로그인 */
@import './community.css';     /* 커뮤니티 */
@import './animations.css';    /* 애니메이션 */
@import './dark-mode.css';     /* 다크 모드 */
@import './responsive.css';    /* 반응형 */
```

## CSS 커스텀 프로퍼티 (Design Tokens)

### 컬러 시스템

```css
:root {
  /* 기본 컬러 (Dark Blue) */
  --primary-blue: #1B3A6B;
  --primary-blue-dark: #0F2444;
  --primary-blue-light: #3D6DB5;

  /* 배경 */
  --bg-white: #FFFFFF;
  --bg-light-gray: #F8F9FA;
  --bg-medium-gray: #E9ECEF;

  /* 텍스트 */
  --text-primary: #1A1A2E;
  --text-secondary: #4A5568;
  --text-light: #718096;
  --text-white: #FFFFFF;

  /* 보더 */
  --border-light: #E2E8F0;
  --border-medium: #CBD5E0;
}
```

### 5색상 테마

| 테마 | Primary | Dark | Light |
|------|---------|------|-------|
| blue (기본) | #1B3A6B | #0F2444 | #3D6DB5 |
| red | #C8102E | #8B0000 | #E8384F |
| green | #00855A | #005C3D | #2AAF7A |
| purple | #8B1AC8 | #5B0E85 | #A855F7 |
| orange | #C87200 | #8B4F00 | #F59E0B |

적용 방식: `html[data-color="red"]` 선택자로 CSS 변수 오버라이드

### 레이아웃 변수

```css
:root {
  --nav-height: 80px;
  --section-padding: 80px;
  --container-max: 1280px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 50px;
  --transition-base: all 0.3s ease;
}
```

### 그라디언트

```css
:root {
  --hero-bg: linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%);
  --highlight-gradient: linear-gradient(135deg, #93B5FD 0%, #D4E4FF 100%);
}
```

## 다크 모드

### 적용 방식
`html[data-theme="dark"]` 선택자로 모든 CSS 변수와 컴포넌트 스타일을 오버라이드.

### 주요 다크 모드 색상

| 용도 | Light | Dark |
|------|-------|------|
| 배경 | #FFFFFF | #0F172A |
| 카드 배경 | #FFFFFF | #1E293B |
| 텍스트 주요 | #1A1A2E | #F1F5F9 |
| 텍스트 보조 | #4A5568 | #94A3B8 |
| 보더 | #E2E8F0 | #334155 |
| 입력 배경 | #FFFFFF | #1E293B |

### 오버라이드 대상
- 모든 카드 (home-feature-card, case-card, content-card, tool-card, curriculum-session-card, material-card, login-card, profile-card)
- 네비바, 푸터
- 폼 요소 (input, select, textarea)
- 탭, 필터 버튼
- 사이드바 (sidebar-nav-btn, cases-menu-item)
- 정보 박스 (.info-box, .info-box.warning, .info-box.tip)
- 코드 블록, 인용문
- 로그인 (google-btn, kakao-btn)
- FAQ (faq-item, faq-question, faq-answer)
- 배지 (case-tag, section-badge)
- 스크롤바
- 컬러 피커 드롭다운

## 반응형 브레이크포인트

| 브레이크포인트 | 대상 | 주요 변경 |
|----------------|------|-----------|
| 1400px+ | 대형 데스크톱 | 넓은 패딩 |
| ~1279px | 데스크톱 | 그리드 축소 |
| ~1023px | 태블릿 가로 | 모바일 네비, 1열 히어로, 사이드바 수평 |
| ~767px | 태블릿 세로 | 1열 그리드, 축소된 타이포 |
| ~639px | 모바일 | 최소 패딩, 세로 버튼 |
| ~399px | 소형 모바일 | 극소 타이포, 1열 도구 |

### 추가 미디어 쿼리
- **인쇄**: 네비/푸터 숨김, 배경 제거, URL 표시
- **가로 모드 (높이 500px 이하)**: 히어로 축소
- **고해상도 (2x DPI)**: 이미지 최적화

## 애니메이션

### 스크롤 트리거 애니메이션
```css
.fade-in-up    /* 아래→위 페이드인 */
.fade-in-down  /* 위→아래 페이드인 */
.fade-in-left  /* 왼→오른 페이드인 */
.fade-in-right /* 오른→왼 페이드인 */
.fade-in       /* 단순 페이드인 */
.scale-in      /* 축소→확대 페이드인 */
```
`.visible` 클래스 추가 시 트리거

### 키프레임 애니메이션
- `slideInUp/Down/Left/Right`
- `bounce`, `pulse`, `shake`, `rotate`
- `float`, `glow`, `typing`
- `shimmer` (스켈레톤 로딩)

### 접근성
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 주요 CSS 클래스

### 레이아웃
| 클래스 | 용도 |
|--------|------|
| `.container` | 최대 1280px 중앙 정렬 |
| `.content-page-layout` | 사이드바(280px) + 메인 2열 그리드 |
| `.content-sidebar` | 280px sticky 사이드바 |
| `.content-main` | 유동 메인 영역 |
| `.cases-layout` | 사례 사이드바(300px) + 메인 2열 그리드 |
| `.cases-sidebar` | 300px sticky 사이드바 |

### 홈 페이지 (home-* 접두사)
| 클래스 | 용도 |
|--------|------|
| `.home-features-section` | 피쳐 섹션 래퍼 |
| `.home-features-grid` | 4열 피쳐 그리드 |
| `.home-feature-card` | 피쳐 카드 (좌측 보더) |
| `.home-feature-icon` | 피쳐 아이콘 (64px) |
| `.home-workflow-section` | 워크플로우 섹션 래퍼 |
| `.home-workflow-grid` | 4열 워크플로우 그리드 |
| `.home-workflow-step` | 워크플로우 단계 |
| `.home-workflow-step-num` | 단계 번호 (48px 원형) |
| `.home-tools-section` | 도구 섹션 래퍼 |
| `.home-tools-grid` | 3열 도구 그리드 |
| `.home-tool-card` | 도구 카드 |
| `.home-stats-section` | 통계 섹션 래퍼 |
| `.home-stats-grid` | 4열 통계 그리드 |
| `.home-stat` | 통계 아이템 |
| `.home-stat-number` | 통계 숫자 |
| `.home-stat-label` | 통계 라벨 |
| `.home-cta-section` | CTA 섹션 (그라디언트) |
| `.home-cta-content` | CTA 콘텐츠 래퍼 |
| `.home-cta-buttons` | CTA 버튼 그룹 |

### 히어로 캐러셀
| 클래스 | 용도 |
|--------|------|
| `.hero` | 히어로 섹션 |
| `.carousel-viewport` | 캐러셀 뷰포트 |
| `.carousel-track` | 캐러셀 트랙 (슬라이드 이동) |
| `.carousel-slide` | 개별 슬라이드 |
| `.carousel-arrow-left/right` | 좌우 화살표 |
| `.carousel-dots` | 도트 인디케이터 컨테이너 |
| `.carousel-dot` | 개별 도트 |
| `.hero-description` | 히어로 설명 텍스트 |
| `.hero-buttons` | 히어로 버튼 그룹 |
| `.scroll-indicator` | 스크롤 안내 애니메이션 |

### 카드
| 클래스 | 용도 |
|--------|------|
| `.card` | 기본 카드 (호버 그림자) |
| `.content-card` | 콘텐츠 카드 (패딩, 보더) |
| `.case-card` | 사례 카드 (수평 flex, 아이콘+본문) |
| `.case-tag` | 사례 태그 (pill 형태) |
| `.tool-card` | 도구 카드 (상단 보더) |
| `.curriculum-session-card` | 커리큘럼 세션 카드 |
| `.material-card` | 실습자료 카드 |

### 사이드바 네비게이션
| 클래스 | 용도 |
|--------|------|
| `.sidebar-nav-btn` | 콘텐츠 사이드바 버튼 (hover/active) |
| `.sidebar-nav-group` | 아코디언 그룹 래퍼 |
| `.sidebar-nav-group-toggle` | 그룹 토글 버튼 (접기/펼치기) |
| `.sidebar-nav-group-toggle.open` | 열린 상태 (셰브론 회전) |
| `.sidebar-nav-group-text` | 그룹 라벨 텍스트 |
| `.sidebar-nav-group-count` | 아이템 개수 배지 (pill) |
| `.sidebar-nav-chevron` | 셰브론 화살표 아이콘 |
| `.sidebar-nav-group-items` | 접힘 컨테이너 (grid-template-rows: 0fr) |
| `.sidebar-nav-group-items.expanded` | 펼침 상태 (grid-template-rows: 1fr) |
| `.sidebar-nav-group-items-inner` | 내부 래퍼 (min-height: 0) |
| `.cases-menu-item` | 사례 사이드바 메뉴 아이템 |

### 버튼
| 클래스 | 용도 |
|--------|------|
| `.btn` | 기본 버튼 |
| `.btn-primary` | 파란 배경 버튼 |
| `.btn-secondary` | 테두리 버튼 |
| `.btn-primary-large` | 큰 기본 버튼 |
| `.btn-sm` | 작은 버튼 |

### 로그인
| 클래스 | 용도 |
|--------|------|
| `.login-btn` | 소셜 로그인 버튼 베이스 |
| `.google-btn` | 구글 로그인 버튼 |
| `.kakao-btn` | 카카오 로그인 버튼 |

### 정보 박스
| 클래스 | 색상 |
|--------|------|
| `.info-box` | 기본 (파란) |
| `.info-box.warning` | 경고 (노란) |
| `.info-box.tip` | 도움말 (초록) |

### FAQ
| 클래스 | 용도 |
|--------|------|
| `.faq-list` | FAQ 목록 컨테이너 |
| `.faq-item` | FAQ 아이템 (아코디언) |
| `.faq-question` | 질문 버튼 (클릭 가능) |
| `.faq-answer` | 답변 영역 (열림/닫힘) |

### 배지 및 유틸리티
| 클래스 | 용도 |
|--------|------|
| `.section-badge` | 섹션 상단 배지 (pill) |
| `.badge` | 일반 배지 |
| `.badge-primary` | 프라이머리 배지 |
