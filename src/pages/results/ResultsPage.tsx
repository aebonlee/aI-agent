import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  { id: 'research', titleKo: '리서치 결과 예시', titleEn: 'Research Results', icon: 'fa-magnifying-glass-chart' },
  { id: 'ax-idea', titleKo: 'AX 아이디어 예시', titleEn: 'AX Idea Examples', icon: 'fa-lightbulb' },
  { id: 'agent-design', titleKo: 'Agent 설계 예시', titleEn: 'Agent Design Examples', icon: 'fa-robot' },
  { id: 'action-plan', titleKo: '실행안 예시', titleEn: 'Action Plan Examples', icon: 'fa-clipboard-list' },
  { id: 'presentation', titleKo: '발표자료 예시', titleEn: 'Presentation Examples', icon: 'fa-file-powerpoint' },
];

const RESULTS = {
  research: [
    {
      titleKo: '발전산업 AI 도입 현황 리서치 결과',
      titleEn: 'Power Industry AI Adoption Status Research',
      descKo: '국내외 발전사의 AI 도입 현황을 Perplexity와 Genspark을 활용하여 조사한 결과물입니다. 기술 동향, 적용 분야, 성과 지표를 구조화하여 정리하였습니다.',
      descEn: 'Research results on AI adoption status of domestic and international power companies using Perplexity and Genspark. Structured technology trends, application areas, and performance metrics.',
      contentKo: `[조사 개요]
- 조사 기간: 2024.01 ~ 2024.12
- 조사 도구: Perplexity, Genspark, Gemini
- 대상: 국내 6대 발전사 + 해외 주요 사례 10건

[핵심 발견]
1. 예측 정비(Predictive Maintenance)가 가장 활발한 적용 분야
   - 국내: 한국중부발전, 남부발전 등 4개사 도입 완료
   - 해외: GE, Siemens 등 글로벌 기업 적용 확대
2. 운영 최적화 영역 확대 추세
   - 연료 혼합 최적화, 배출가스 관리 AI 적용 증가
3. 문서 자동화는 초기 단계
   - 회의자료, 보고서 자동화 시범 사업 진행 중

[시사점]
- 단순 자동화를 넘어 의사결정 지원으로 확대 필요
- 비정형 업무(문서, 소통)의 AI 적용이 다음 성장 영역`,
      contentEn: `[Research Overview]
- Period: 2024.01 ~ 2024.12
- Tools: Perplexity, Genspark, Gemini
- Scope: 6 major domestic power companies + 10 major overseas cases

[Key Findings]
1. Predictive Maintenance is the most active application area
   - Domestic: 4 companies including KOMIPO, KOSPO completed adoption
   - Overseas: Global companies like GE, Siemens expanding adoption
2. Expanding trend in operational optimization
   - Increasing AI application in fuel mix optimization, emissions management
3. Document automation is in early stages
   - Meeting materials, report automation pilots in progress

[Implications]
- Need to expand beyond simple automation to decision support
- AI application for unstructured work (documents, communication) is the next growth area`,
    },
    {
      titleKo: '공공기관 AI 활용 정책 동향 리서치',
      titleEn: 'Public Sector AI Policy Trend Research',
      descKo: '정부의 AI 관련 정책, 공공부문 디지털 전환 전략, 공공기관 AI 도입 가이드라인을 조사하고 정리한 결과물입니다.',
      descEn: 'Research results on government AI policies, public sector digital transformation strategies, and public institution AI adoption guidelines.',
      contentKo: `[핵심 정책 동향]
1. 디지털 플랫폼 정부 추진
   - 공공서비스 AI 기반 혁신 가속화
   - 범정부 AI 활용 가이드라인 수립
2. 공공기관 AI 역량 강화
   - 직무별 AI 교육 의무화 추진
   - AI 활용 우수 사례 공유 확대
3. 데이터 기반 행정 강화
   - 공공데이터 개방 확대
   - AI 기반 데이터 분석 인프라 구축`,
      contentEn: `[Key Policy Trends]
1. Digital Platform Government
   - Accelerating AI-based public service innovation
   - Establishing government-wide AI utilization guidelines
2. Public Institution AI Capability Enhancement
   - Promoting mandatory AI education by job function
   - Expanding sharing of AI utilization best practices
3. Data-Based Administration Enhancement
   - Expanding public data openness
   - Building AI-based data analysis infrastructure`,
    },
  ],
  'ax-idea': [
    {
      titleKo: '발전소 안전관리 AI Agent 아이디어',
      titleEn: 'Power Plant Safety Management AI Agent Idea',
      descKo: '발전소의 안전관리 업무에 AI Agent를 적용하여 안전점검 보고서 자동 생성, 위험 요인 사전 식별, 안전 교육 콘텐츠 자동화를 구현하는 아이디어입니다.',
      descEn: 'An idea to apply AI Agent to power plant safety management for auto-generating safety inspection reports, proactive risk identification, and safety training content automation.',
      contentKo: `[아이디어 개요]
- 대상 업무: 안전관리 보고서 작성, 위험성 평가, 교육자료 제작
- 적용 AI: ChatGPT GPTs (보고서), Claude (검토), Napkin AI (시각화)

[기대 효과]
- 보고서 작성 시간 60% 단축
- 위험 요인 식별 정확도 향상
- 교육 콘텐츠 제작 주기 1/3 단축

[구현 방안]
1. 안전점검 데이터 → AI Agent → 보고서 초안 자동 생성
2. 과거 사고 사례 학습 → 유사 위험 패턴 사전 알림
3. 법규 변경 → AI 요약 → 교육자료 자동 업데이트`,
      contentEn: `[Idea Overview]
- Target Tasks: Safety report writing, risk assessment, training material creation
- Applied AI: ChatGPT GPTs (reports), Claude (review), Napkin AI (visualization)

[Expected Benefits]
- 60% reduction in report writing time
- Improved risk identification accuracy
- 1/3 reduction in training content production cycle

[Implementation Plan]
1. Safety inspection data → AI Agent → Auto-generate report draft
2. Learn from past incidents → Proactive similar risk pattern alerts
3. Regulation changes → AI summary → Auto-update training materials`,
    },
    {
      titleKo: '공공기관 민원 응대 AI Agent 아이디어',
      titleEn: 'Public Institution Civil Service AI Agent Idea',
      descKo: '공공기관의 민원 응대 업무를 AI Agent로 지원하여 초기 분류, FAQ 자동응답, 답변 초안 작성을 자동화하는 아이디어입니다.',
      descEn: 'An idea to support public institution civil service with AI Agent for initial categorization, FAQ auto-response, and draft reply generation.',
      contentKo: `[아이디어 개요]
- 대상 업무: 민원 접수 분류, 반복 민원 자동 응대, 답변서 초안 작성
- 적용 AI: ChatGPT (답변 생성), Claude (민원 분석), Perplexity (관련 법규 조사)

[기대 효과]
- 민원 초기 분류 자동화로 담당자 배정 시간 70% 단축
- 반복 민원 자동 응답으로 응대 건수 40% 절감
- 답변 초안 작성 시간 50% 단축

[구현 방안]
1. 민원 접수 → AI 분류 → 담당부서 자동 배정
2. FAQ 데이터베이스 기반 → 유사 민원 자동 응답
3. 복잡 민원 → AI 답변 초안 생성 → 담당자 검토 후 발송`,
      contentEn: `[Idea Overview]
- Target Tasks: Civil complaint classification, repetitive inquiry auto-response, reply draft generation
- Applied AI: ChatGPT (reply generation), Claude (complaint analysis), Perplexity (legal research)

[Expected Benefits]
- 70% reduction in complaint assignment time through auto-classification
- 40% reduction in response volume through FAQ auto-responses
- 50% reduction in reply draft creation time

[Implementation Plan]
1. Complaint received → AI classification → Auto-assign to responsible department
2. FAQ database-based → Auto-respond to similar complaints
3. Complex complaints → AI draft reply → Staff review and send`,
    },
  ],
  'agent-design': [
    {
      titleKo: '회의자료 자동작성 Agent 설계서',
      titleEn: 'Meeting Document Auto-Writer Agent Design',
      descKo: '주간 업무 보고, 팀 회의, 경영회의 등에 필요한 회의자료를 자동으로 작성하는 AI Agent의 설계서 예시입니다.',
      descEn: 'Design document example for an AI Agent that automatically creates meeting materials for weekly reports, team meetings, and management meetings.',
      contentKo: `[Agent 설계 캔버스]

■ Agent 이름: MeetingDoc Agent
■ 역할: 회의 유형에 맞는 자료를 자동 작성하는 AI 비서
■ 목표: 회의자료 초안 작성 시간을 80% 단축

■ 입력(Input)
- 회의 유형 (주간보고/팀회의/경영회의)
- 핵심 키워드 또는 메모
- 이전 회의록 (선택)

■ 출력(Output)
- 구조화된 회의자료 초안 (문서 형태)
- 주요 이슈 및 안건 목록
- 후속 조치 사항 정리

■ 사용 도구
- ChatGPT (문서 작성)
- Claude (논리 검토)
- Google Docs (최종 문서)

■ 워크플로우
1. 사용자가 회의 유형과 키워드 입력
2. Agent가 템플릿에 맞춰 초안 작성
3. 이전 회의록 참조하여 연속성 확보
4. 검토 Agent가 논리/형식 점검
5. 최종 문서 출력`,
      contentEn: `[Agent Design Canvas]

■ Agent Name: MeetingDoc Agent
■ Role: AI assistant that auto-creates meeting materials by type
■ Goal: Reduce meeting material drafting time by 80%

■ Input
- Meeting type (weekly report/team meeting/management meeting)
- Key keywords or notes
- Previous meeting minutes (optional)

■ Output
- Structured meeting material draft (document format)
- Key issues and agenda list
- Follow-up action items

■ Tools
- ChatGPT (document writing)
- Claude (logic review)
- Google Docs (final document)

■ Workflow
1. User inputs meeting type and keywords
2. Agent creates draft based on template
3. References previous minutes for continuity
4. Review Agent checks logic/format
5. Output final document`,
    },
    {
      titleKo: '리서치 자동화 Agent 설계서',
      titleEn: 'Research Automation Agent Design',
      descKo: '산업 동향, 경쟁사 분석 등의 리서치 업무를 자동화하는 AI Agent 설계서 예시입니다.',
      descEn: 'Design document example for an AI Agent that automates research tasks such as industry trends and competitor analysis.',
      contentKo: `[Agent 설계 캔버스]

■ Agent 이름: ResearchBot Agent
■ 역할: 주제 기반 리서치를 자동 수행하고 구조화된 보고서를 생성하는 AI 리서처
■ 목표: 리서치 보고서 작성 시간을 70% 단축

■ 입력(Input)
- 리서치 주제 및 키워드
- 조사 범위 (국내/해외, 기간)
- 출력 형식 지정 (보고서/표/비교분석)

■ 출력(Output)
- 구조화된 리서치 보고서
- 출처 목록 및 신뢰도 평가
- 핵심 인사이트 요약

■ 사용 도구
- Perplexity (웹 기반 리서치)
- Genspark (심층 분석)
- Claude (보고서 구조화 및 검토)
- Napkin AI (데이터 시각화)

■ 워크플로우
1. 사용자가 리서치 주제와 범위 입력
2. Perplexity로 1차 정보 수집
3. Genspark으로 심층 분석 수행
4. Claude로 수집 정보 구조화 및 보고서 초안 작성
5. 검토 Agent가 출처 신뢰성 및 논리 검증
6. Napkin AI로 주요 데이터 시각화
7. 최종 보고서 출력`,
      contentEn: `[Agent Design Canvas]

■ Agent Name: ResearchBot Agent
■ Role: AI researcher that auto-performs topic-based research and generates structured reports
■ Goal: Reduce research report creation time by 70%

■ Input
- Research topic and keywords
- Research scope (domestic/international, period)
- Output format specification (report/table/comparison)

■ Output
- Structured research report
- Source list and reliability assessment
- Key insight summary

■ Tools
- Perplexity (web-based research)
- Genspark (deep analysis)
- Claude (report structuring and review)
- Napkin AI (data visualization)

■ Workflow
1. User inputs research topic and scope
2. Primary information gathering via Perplexity
3. Deep analysis via Genspark
4. Claude structures collected info and drafts report
5. Review Agent verifies source reliability and logic
6. Napkin AI visualizes key data
7. Output final report`,
    },
  ],
  'action-plan': [
    {
      titleKo: '사내 AI Agent 도입 실행 계획서',
      titleEn: 'Internal AI Agent Implementation Plan',
      descKo: '사내 업무에 AI Agent를 도입하기 위한 3개월 시범 운영 실행 계획서 예시입니다.',
      descEn: 'Example 3-month pilot implementation plan for introducing AI Agents to internal operations.',
      contentKo: `[프로젝트 개요]
- 프로젝트명: 사내 AI Agent 시범 도입
- 기간: 3개월 (12주)
- 대상: 경영지원부 회의자료 작성 업무

[단계별 계획]
Phase 1 (1~4주): 준비 및 설계
- AI 도구 선정 및 계정 확보
- 대상 업무 상세 분석
- Agent 설계 및 프롬프트 개발
- 마일스톤: Agent 프로토타입 완성

Phase 2 (5~8주): 시범 운영
- 실무자 교육 (4시간)
- 시범 운영 시작
- 주간 피드백 수집 및 개선
- 마일스톤: 4주간 시범 운영 데이터 확보

Phase 3 (9~12주): 평가 및 확산
- 성과 측정 (시간 절감, 품질 평가)
- 개선안 도출
- 타 부서 확산 계획 수립
- 마일스톤: 최종 보고서 및 확산 계획서

[성공 지표]
- 회의자료 작성 시간 50% 이상 단축
- 사용자 만족도 4.0/5.0 이상
- 월 20건 이상 Agent 활용`,
      contentEn: `[Project Overview]
- Project: Internal AI Agent Pilot Introduction
- Duration: 3 months (12 weeks)
- Target: Management support meeting document creation

[Phased Plan]
Phase 1 (Week 1-4): Preparation & Design
- AI tool selection and account setup
- Detailed target task analysis
- Agent design and prompt development
- Milestone: Agent prototype complete

Phase 2 (Week 5-8): Pilot Operation
- Practitioner training (4 hours)
- Begin pilot operation
- Weekly feedback collection and improvement
- Milestone: 4-week pilot operation data secured

Phase 3 (Week 9-12): Evaluation & Expansion
- Performance measurement (time savings, quality)
- Improvement proposals
- Expansion plan for other departments
- Milestone: Final report and expansion plan

[Success Metrics]
- 50%+ reduction in meeting material creation time
- User satisfaction 4.0/5.0 or higher
- 20+ Agent utilizations per month`,
    },
    {
      titleKo: '부서 AI 역량 강화 교육 계획서',
      titleEn: 'Department AI Capability Training Plan',
      descKo: '부서 구성원의 AI 활용 역량을 단계적으로 강화하기 위한 6개월 교육 실행 계획서 예시입니다.',
      descEn: 'Example 6-month training plan for progressively strengthening department members\' AI utilization capabilities.',
      contentKo: `[계획 개요]
- 과제명: 경영지원부 AI 역량 강화 프로그램
- 기간: 6개월
- 대상: 부서원 15명 (초급 8명, 중급 5명, 고급 2명)

[단계별 교육 계획]
Step 1 (1~2개월): AI 기초 역량
- 생성형 AI 개념 및 도구 소개 (4시간)
- 프롬프트 작성 기초 실습 (4시간)
- 개인별 AI 도구 계정 설정 및 기본 활용
- 목표: 전원 기본 프롬프트 작성 가능

Step 2 (3~4개월): 업무 적용 실습
- 부서 업무별 AI 활용 실습 (8시간)
- 프롬프트 템플릿 제작 워크숍 (4시간)
- 주 1회 AI 활용 과제 수행
- 목표: 주 3회 이상 업무에 AI 활용

Step 3 (5~6개월): AI Agent 설계 및 자동화
- AI Agent 설계 캔버스 워크숍 (4시간)
- 부서 맞춤형 Agent 프로토타입 개발 (8시간)
- 성과 발표 및 우수 사례 공유
- 목표: 팀별 1개 이상 Agent 프로토타입 완성

[성과 측정]
- 월별 AI 활용 건수 추적
- 업무 효율화 시간 측정 (Before/After)
- 분기별 만족도 조사`,
      contentEn: `[Plan Overview]
- Project: Management Support Dept. AI Capability Program
- Duration: 6 months
- Target: 15 department members (8 beginner, 5 intermediate, 2 advanced)

[Phased Training Plan]
Step 1 (Month 1-2): AI Basic Capabilities
- Generative AI concepts and tools introduction (4 hours)
- Basic prompt writing practice (4 hours)
- Individual AI tool account setup and basic usage
- Goal: All members can write basic prompts

Step 2 (Month 3-4): Work Application Practice
- Department task-specific AI utilization practice (8 hours)
- Prompt template creation workshop (4 hours)
- Weekly AI utilization assignments
- Goal: Use AI in work 3+ times per week

Step 3 (Month 5-6): AI Agent Design & Automation
- AI Agent design canvas workshop (4 hours)
- Department-customized Agent prototype development (8 hours)
- Performance presentation and best practice sharing
- Goal: Complete 1+ Agent prototype per team

[Performance Measurement]
- Monthly AI utilization count tracking
- Work efficiency time measurement (Before/After)
- Quarterly satisfaction survey`,
    },
  ],
  presentation: [
    {
      titleKo: '팀 발표자료 예시 (AI Agent 기반 업무혁신)',
      titleEn: 'Team Presentation Example (AI Agent Work Innovation)',
      descKo: '교육 마지막 세션에서 팀별로 발표하는 결과 발표자료의 예시 구성입니다.',
      descEn: 'Example structure of team presentation materials for the final education session.',
      contentKo: `[발표자료 구성 (12슬라이드)]

슬라이드 1: 표지
- 팀명, 주제, 팀원 소개

슬라이드 2: 문제 정의
- 현재 업무의 비효율 포인트
- 정량적 문제 규모 (시간, 비용)

슬라이드 3-4: 업무 분해 결과
- 대상 업무 프로세스 맵
- AI 적용 가능 영역 표시

슬라이드 5-6: AI Agent 설계
- Agent 설계 캔버스 요약
- 핵심 워크플로우 다이어그램

슬라이드 7: 프로토타입 시연
- Agent 구축 체험 결과
- 실제 동작 스크린샷

슬라이드 8-9: 실행 계획
- 3개월 로드맵
- 필요 자원 및 예산

슬라이드 10: 기대 효과
- 정량적 효과 (시간/비용 절감)
- 정성적 효과 (업무 품질 향상)

슬라이드 11: 리스크 및 대응
- 주요 리스크 3가지
- 대응 방안

슬라이드 12: Q&A
- 핵심 메시지 정리
- 질의응답`,
      contentEn: `[Presentation Structure (12 Slides)]

Slide 1: Cover
- Team name, topic, member introduction

Slide 2: Problem Definition
- Current work inefficiency points
- Quantitative problem scale (time, cost)

Slide 3-4: Task Decomposition Results
- Target task process map
- AI-applicable areas highlighted

Slide 5-6: AI Agent Design
- Agent design canvas summary
- Core workflow diagram

Slide 7: Prototype Demo
- Agent building experience results
- Actual operation screenshots

Slide 8-9: Action Plan
- 3-month roadmap
- Required resources and budget

Slide 10: Expected Benefits
- Quantitative (time/cost savings)
- Qualitative (work quality improvement)

Slide 11: Risks & Mitigation
- Top 3 risks
- Mitigation strategies

Slide 12: Q&A
- Key message summary
- Questions and answers`,
    },
    {
      titleKo: 'AX 추진 경영보고 발표자료 예시',
      titleEn: 'AX Initiative Executive Report Presentation',
      descKo: '부서 또는 기관 차원의 AX(AI Transformation) 추진 현황을 경영진에게 보고하는 발표자료 구성 예시입니다.',
      descEn: 'Example presentation structure for reporting AX (AI Transformation) progress to executives at department or institutional level.',
      contentKo: `[발표자료 구성 (8슬라이드)]

슬라이드 1: 표지
- AX 추진 현황 보고
- 부서명, 보고일, 보고자

슬라이드 2: 추진 배경
- 외부 환경 변화 (AI 기술 발전, 정부 정책)
- 내부 필요성 (업무 효율화 요구, 인력 변화)

슬라이드 3: 추진 경과
- 타임라인 (교육 → 시범 적용 → 성과 측정)
- 주요 마일스톤 달성 현황

슬라이드 4: 주요 성과
- 정량 성과 (시간 절감, 비용 절감, 처리 건수)
- 정성 성과 (업무 품질, 직원 만족도)

슬라이드 5: 활용 사례 Best 3
- 사례별 Before/After 비교
- 적용 AI 도구 및 방법

슬라이드 6: 향후 계획
- 확산 대상 (부서, 업무)
- 단계별 로드맵

슬라이드 7: 소요 예산 및 자원
- 항목별 예산 (교육, 도구, 인프라)
- 투자 대비 기대 효과 (ROI)

슬라이드 8: 건의 사항
- 경영진 의사결정 요청 항목
- 지원 필요 사항`,
      contentEn: `[Presentation Structure (8 Slides)]

Slide 1: Cover
- AX Progress Report
- Department, date, presenter

Slide 2: Background
- External changes (AI technology advancement, government policy)
- Internal needs (efficiency demands, workforce changes)

Slide 3: Progress Summary
- Timeline (training → pilot application → performance measurement)
- Key milestone achievement status

Slide 4: Key Results
- Quantitative (time savings, cost reduction, processing volume)
- Qualitative (work quality, employee satisfaction)

Slide 5: Top 3 Use Cases
- Before/After comparison per case
- Applied AI tools and methods

Slide 6: Future Plans
- Expansion targets (departments, tasks)
- Phased roadmap

Slide 7: Budget & Resources
- Budget by category (education, tools, infrastructure)
- Expected ROI

Slide 8: Recommendations
- Executive decision request items
- Support requirements`,
    },
  ],
};

export default function ResultsPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('research');
  const ko = language === 'ko';
  const results = RESULTS[activeCategory] || [];

  return (
    <div className="content-page">
      <SEOHead title={t('results.title')} description={t('results.subtitle')} path="/results" />

      <div className="page-header">
        <div className="container">
          <h1>{t('results.title')}</h1>
          <p className="page-desc">{t('results.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="content-page-layout">
          <aside className="content-sidebar">
            <h3>{ko ? '결과물 유형' : 'Result Types'}</h3>
            <ul className="sidebar-nav">
              {CATEGORIES.map(cat => (
                <li key={cat.id} className="sidebar-nav-item">
                  <button
                    className={`sidebar-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <i className={`fa-solid ${cat.icon}`} aria-hidden="true" style={{ marginRight: '8px', width: '16px' }} />
                    {ko ? cat.titleKo : cat.titleEn}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="content-main">
            {results.map((result, idx) => (
              <div key={idx} className="content-card">
                <h2>{ko ? result.titleKo : result.titleEn}</h2>
                <p>{ko ? result.descKo : result.descEn}</p>
                <div className="example-box">
                  <h4>{ko ? '산출물 내용' : 'Deliverable Content'}</h4>
                  <pre>{ko ? result.contentKo : result.contentEn}</pre>
                </div>
              </div>
            ))}

            <div className="info-box" style={{ marginTop: '12px' }}>
              <h4>{ko ? '안내' : 'Note'}</h4>
              <p>{ko
                ? '위 결과물은 교육 과정에서 실제로 만들어지는 산출물의 예시입니다. 실제 교육에서는 참가자 본인의 업무를 소재로 더욱 구체적인 결과물이 생성됩니다.'
                : 'The above are examples of deliverables actually created during the education program. In actual training, more specific deliverables are generated using participants\' own work as material.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
