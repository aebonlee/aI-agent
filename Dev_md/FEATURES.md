# 기능 상세 문서

## 1. 다국어 지원 (Ko/En)

### 구현 방식
- `LanguageContext`에서 전역 언어 상태 관리
- `translations.js`에 전체 번역 사전 (Ko/En)
- `t('key.path')` 함수로 dot-notation 번역 조회
- 쿠키 기반 언어 설정 저장

### 번역 범위
| 영역 | 키 접두사 |
|------|-----------|
| 네비게이션 | `nav.*` |
| 히어로 (5슬라이드) | `hero.slides.*` |
| 홈 섹션 | `home.*` |
| 과정소개 | `course.*` |
| 커리큘럼 | `curriculum.*` |
| 실습도구 | `tools.*` |
| 실습자료 | `materials.*` |
| 프롬프트 | `prompts.*` |
| 사례 | `cases.*` |
| 결과물 | `results.*` |
| FAQ | `faq.*` |
| 로그인 | `login.*` |
| 404 | `notFound.*` |
| 푸터 | `footer.*` |

### 언어 전환
- 네비바 언어 토글 버튼 (EN/KO 표시)
- 모바일 메뉴 하단에도 동일 토글
- 전환 시 전체 UI 즉시 반영

---

## 2. 테마 시스템

### 테마 모드 (3가지)
| 모드 | 동작 |
|------|------|
| auto | 시간 기반 자동 전환 (7시~19시 light, 나머지 dark) |
| light | 항상 라이트 모드 |
| dark | 항상 다크 모드 |

### 컬러 테마 (5가지)
| 이름 | Primary | 설명 |
|------|---------|------|
| blue | #1B3A6B | 기본, 다크 블루 |
| red | #C8102E | 레드 |
| green | #00855A | 그린 |
| purple | #8B1AC8 | 퍼플 |
| orange | #C87200 | 오렌지 |

### 저장 방식
- 쿠키: `theme` (모드), `colorTheme` (컬러)
- 7일 유효 기간

### 적용 방식
- `html[data-theme="dark"]` - 다크 모드 CSS 변수 오버라이드
- `html[data-color="red"]` - 컬러 테마 CSS 변수 오버라이드

---

## 3. 인증 시스템

### 지원 인증 방식
| 방식 | Provider | 설명 |
|------|----------|------|
| Google | `google` | Google 이메일 OAuth |
| Kakao | `kakao` | 카카오 OAuth |

### 인증 플로우
1. 사용자가 로그인 버튼 클릭
2. Supabase OAuth redirect → 외부 인증 화면
3. 인증 성공 → 리다이렉트 back
4. `onAuthStateChange` 리스너가 세션 감지
5. `user` 상태 업데이트 → UI 반영

### 인증 상태에 따른 UI
- **비로그인**: 네비바에 "로그인" 링크
- **로그인**: 아바타 + 이름 + 로그아웃 버튼
- **LoginPage**: 로그인 상태면 자동 홈 리다이렉트

---

## 4. 히어로 캐러셀

### 5개 슬라이드 구성
각 슬라이드는 독립적인 배경 애니메이션과 콘텐츠를 가짐.

### 4가지 배경 애니메이션
| 타입 | 요소 | 애니메이션 |
|------|------|------------|
| particles | 30개 입자 | 랜덤 부유 |
| network | 15개 노드 | 느린 표류 |
| orbs | 12개 구체 | 아래→위 상승 |
| geometric | 12개 도형 | 회전+이동 |

### 인터랙션
- 자동 전환: 6초 간격
- 좌/우 화살표 네비게이션 (데스크톱)
- 도트 인디케이터 클릭
- 스크롤 인디케이터 (마우스 애니메이션)

---

## 5. 반응형 디자인

### 6개 브레이크포인트
```
1400px+ │ 대형 데스크톱
~1279px │ 데스크톱
~1023px │ 태블릿 가로 (모바일 네비 활성화)
~767px  │ 태블릿 세로
~639px  │ 모바일
~399px  │ 소형 모바일
```

### 주요 반응형 변경
- 1023px 이하: 네비 → 햄버거 메뉴
- 767px 이하: 히어로 단일 열, 버튼 세로 배치
- 639px 이하: 카드 그리드 1열, 축소 패딩
- 인쇄, 가로 모드, 고해상도 대응 포함

---

## 6. SEO 최적화

### 정적 SEO (index.html)
- OG 메타 태그 (type, url, title, description, image, site_name, locale)
- Twitter Card 메타 태그
- Canonical URL
- 구조화된 HTML (lang 속성)

### 동적 SEO (SEOHead 컴포넌트)
- 각 페이지별 고유 title, description, canonical
- 언어 전환 시 og:locale 변경 (ko_KR/en_US)
- document.documentElement.lang 속성 동적 변경

### OG 이미지
- 1200x630px PNG
- sharp를 통한 SVG→PNG 변환
- 다크 블루 그라디언트 배경
- "AI Agents Work Lab" 타이틀
- 기능 칩 (프롬프트, 리서치, 자동화, Agent 설계)
- `npm run generate:og`로 생성

---

## 7. 코드 스플리팅

### 라우트 기반 분할
모든 페이지 컴포넌트가 `React.lazy()` + `Suspense`로 동적 로딩:
- Home, CoursePage, CurriculumPage, ToolsPage
- MaterialsPage, PromptsPage, CasesPage, ResultsPage
- FaqPage, LoginPage, NotFound

### 벤더 분할 (manualChunks)
| 청크 | 포함 모듈 | 크기 |
|------|-----------|------|
| vendor | react, react-dom, react-router-dom | ~230KB |
| markdown | react-markdown, remark-gfm | 별도 |
| 각 페이지 | 해당 페이지 코드 | 1~14KB |

---

## 8. 접근성

### 구현 항목
- **Skip Navigation**: `<a class="skip-nav">본문 바로가기</a>`
- **시맨틱 HTML**: `<main>`, `<nav>`, `<footer>`, `<section>`
- **ARIA 속성**: `aria-label`, `aria-hidden`, `aria-expanded`
- **포커스 관리**: `:focus-visible` 스타일
- **모션 감소**: `prefers-reduced-motion` 미디어 쿼리
- **키보드 접근**: 모든 인터랙티브 요소 접근 가능
- **언어 속성**: `<html lang="ko">` 동적 변경

---

## 9. 콘텐츠 특징

### 범용 플랫폼 설계
- 특정 기관에 종속되지 않는 공통 구조
- 사례(Cases)와 실습 시나리오를 기관별로 교체 가능
- 5개 산업 카테고리: 발전 공기업, 공공기관, 대학, 일반기업, 맞춤형 AX

### 풍부한 한국어 콘텐츠
- 8시간 워크숍 전체 커리큘럼 (8세션)
- 10개 산업·기관 실적용 사례
- 6종 프롬프트 템플릿 (12개 예시)
- 7종 실습 자료
- 5종 결과물 예시 (리서치, 아이디어, 설계서, 실행안, 발표자료)
- 8개 FAQ 항목

### 4가지 커리큘럼 타입
| 타입 | 시간 | 특징 |
|------|------|------|
| 기본과정 | 8시간 | 이론 30% + 실습 70% |
| 특강형 | 4시간 | 압축 핵심 |
| 심화형 | 16시간 | 2일, 프로젝트 수준 |
| 프로젝트형 | 8주 | 멘토링 포함 |
