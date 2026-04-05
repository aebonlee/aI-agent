import { useState, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const TEMPLATE_TYPES = [
  { id: 'research', titleKo: '조사형 프롬프트', titleEn: 'Research Prompts', icon: 'fa-magnifying-glass' },
  { id: 'summary', titleKo: '요약형 프롬프트', titleEn: 'Summary Prompts', icon: 'fa-compress' },
  { id: 'report', titleKo: '보고서형 프롬프트', titleEn: 'Report Prompts', icon: 'fa-file-lines' },
  { id: 'review', titleKo: '검토형 프롬프트', titleEn: 'Review Prompts', icon: 'fa-magnifying-glass-chart' },
  { id: 'action', titleKo: '실행계획형 프롬프트', titleEn: 'Action Plan Prompts', icon: 'fa-list-check' },
  { id: 'meeting', titleKo: '회의자료형 프롬프트', titleEn: 'Meeting Material Prompts', icon: 'fa-users-rectangle' },
];

const TEMPLATES = {
  research: {
    titleKo: '조사형 프롬프트',
    titleEn: 'Research Prompts',
    descKo: '특정 주제에 대한 체계적인 조사와 정보 수집을 위한 프롬프트 템플릿입니다. 산업 동향, 기술 트렌드, 경쟁 분석 등에 활용합니다.',
    descEn: 'Prompt templates for systematic investigation and information gathering on specific topics. Used for industry trends, technology trends, competitive analysis, etc.',
    examples: [
      {
        titleKo: '산업 동향 리서치',
        titleEn: 'Industry Trend Research',
        promptKo: `당신은 에너지 산업 전문 리서치 애널리스트입니다.

[조사 주제]
국내 발전산업의 AI 도입 현황과 향후 전망

[조사 범위]
1. 국내 주요 발전사(한국중부발전, 남부발전 등)의 AI 도입 사례
2. 해외 주요 발전사의 AI 활용 동향
3. 발전산업 특화 AI 기술 트렌드
4. 향후 3~5년 전망

[출력 형식]
- 항목별 구조화된 보고서 형태
- 각 항목에 구체적 사례와 수치 포함
- 시사점과 제언 포함
- 출처 명시`,
        promptEn: `You are a research analyst specializing in the energy industry.

[Research Topic]
Current status and future prospects of AI adoption in the domestic power generation industry

[Research Scope]
1. AI adoption cases of major domestic power companies (KOMIPO, KOSPO, etc.)
2. AI utilization trends of major overseas power companies
3. AI technology trends specialized for the power industry
4. 3-5 year outlook

[Output Format]
- Structured report by category
- Include specific cases and figures for each item
- Include implications and recommendations
- Cite sources`,
      },
      {
        titleKo: '기술 트렌드 분석',
        titleEn: 'Technology Trend Analysis',
        promptKo: `당신은 AI 기술 전문가입니다.

[분석 주제]
2025~2026 AI Agent 기술 트렌드 분석

[분석 관점]
1. 주요 AI Agent 플랫폼 비교 (OpenAI, Anthropic, Google)
2. 기업용 AI Agent 시장 동향
3. 주요 기술 키워드 (RAG, 멀티에이전트, 함수 호출 등)
4. 산업별 적용 사례

[요청 사항]
- 기술적 깊이와 비즈니스 관점을 모두 포함
- 비전문가도 이해할 수 있는 설명 수준
- 표 또는 비교 형식 활용`,
        promptEn: `You are an AI technology expert.

[Analysis Topic]
2025-2026 AI Agent Technology Trend Analysis

[Analysis Perspective]
1. Major AI Agent platform comparison (OpenAI, Anthropic, Google)
2. Enterprise AI Agent market trends
3. Key technology keywords (RAG, multi-agent, function calling, etc.)
4. Industry-specific application cases

[Requirements]
- Include both technical depth and business perspective
- Explanation level accessible to non-experts
- Use tables or comparison formats`,
      },
    ],
  },
  summary: {
    titleKo: '요약형 프롬프트',
    titleEn: 'Summary Prompts',
    descKo: '긴 문서, 회의록, 보고서 등을 핵심만 추출하여 요약하는 프롬프트 템플릿입니다.',
    descEn: 'Prompt templates for extracting and summarizing key points from long documents, meeting minutes, reports, etc.',
    examples: [
      {
        titleKo: '회의록 요약',
        titleEn: 'Meeting Minutes Summary',
        promptKo: `당신은 전문 비서입니다. 아래 회의록을 다음 구조로 요약해주세요.

[요약 구조]
1. 회의 개요 (일시, 참석자, 목적) - 2줄 이내
2. 핵심 논의 사항 - 3~5개 불릿포인트
3. 주요 결정 사항 - 번호 목록
4. 후속 조치 (Action Items) - 담당자, 기한 포함
5. 다음 회의 일정 및 안건

[회의록]
(여기에 회의록 텍스트를 붙여넣기)`,
        promptEn: `You are a professional secretary. Summarize the meeting minutes below in the following structure.

[Summary Structure]
1. Meeting Overview (date, attendees, purpose) - within 2 lines
2. Key Discussion Points - 3-5 bullet points
3. Major Decisions - numbered list
4. Action Items - including person responsible, deadline
5. Next meeting schedule and agenda

[Meeting Minutes]
(Paste meeting minutes text here)`,
      },
      {
        titleKo: '보고서 핵심 요약',
        titleEn: 'Report Executive Summary',
        promptKo: `당신은 문서 분석 전문가입니다. 아래 보고서를 경영진에게 보고할 수 있는 수준으로 요약해주세요.

[요약 규칙]
1. 전체 내용을 1페이지(A4) 이내로 축약
2. 핵심 수치와 데이터는 반드시 포함
3. "그래서 어떻게 해야 하는가"(So What)를 명확히 제시

[요약 구조]
- 핵심 결론 (1~2문장)
- 주요 발견 사항 (3~5개 불릿포인트)
- 핵심 수치 요약 (표 형식)
- 시사점 및 제언

[보고서]
(여기에 보고서 텍스트를 붙여넣기)`,
        promptEn: `You are a document analysis expert. Summarize the report below to an executive-ready level.

[Summary Rules]
1. Condense the entire content within 1 page (A4)
2. Must include key figures and data
3. Clearly present the "So What" implications

[Summary Structure]
- Key Conclusion (1-2 sentences)
- Major Findings (3-5 bullet points)
- Key Metrics Summary (table format)
- Implications and Recommendations

[Report]
(Paste report text here)`,
      },
    ],
  },
  report: {
    titleKo: '보고서형 프롬프트',
    titleEn: 'Report Prompts',
    descKo: '업무 보고서, 분석 보고서, 제안서 등의 초안을 작성하기 위한 프롬프트 템플릿입니다.',
    descEn: 'Prompt templates for drafting work reports, analysis reports, proposals, etc.',
    examples: [
      {
        titleKo: 'AX 추진 제안서 초안',
        titleEn: 'AX Proposal Draft',
        promptKo: `당신은 기업 AX(AI Transformation) 컨설턴트입니다.

[작성 문서]
사내 AI Agent 도입을 위한 AX 추진 제안서

[포함 내용]
1. 추진 배경 및 필요성
2. 추진 목표 (정량/정성 목표)
3. 추진 범위 및 대상
4. 단계별 추진 계획 (Phase 1~3)
5. 소요 자원 (인력, 예산, 인프라)
6. 기대효과 및 ROI 예상
7. 리스크 요인 및 대응 방안

[조건]
- 공공기관(발전 공기업) 관점으로 작성
- 경영진 보고용 수준의 격식
- 구체적 수치와 사례 포함
- A4 5~7페이지 분량`,
        promptEn: `You are an enterprise AX (AI Transformation) consultant.

[Document]
AX Proposal for In-House AI Agent Adoption

[Include]
1. Background and necessity
2. Goals (quantitative/qualitative)
3. Scope and targets
4. Phased plan (Phase 1-3)
5. Required resources (personnel, budget, infrastructure)
6. Expected benefits and ROI projection
7. Risk factors and mitigation strategies

[Conditions]
- Written from public institution (power company) perspective
- Executive-level reporting format
- Include specific figures and cases
- A4 5-7 page length`,
      },
      {
        titleKo: '업무 프로세스 분석 보고서',
        titleEn: 'Work Process Analysis Report',
        promptKo: `당신은 업무 프로세스 개선 전문 컨설턴트입니다.

[작성 문서]
현재 업무 프로세스 분석 및 AI Agent 적용 방안 보고서

[분석 대상 업무]
(업무명과 간단한 설명 입력)

[보고서 구성]
1. 현행 업무 프로세스 현황
   - 업무 흐름도 (텍스트 기반)
   - 각 단계별 소요 시간 및 투입 인력
   - 비효율 요인 식별
2. AI Agent 적용 가능 영역
   - 자동화 가능 업무 (반복적, 정형화된 업무)
   - AI 보조 가능 업무 (판단이 필요한 업무)
   - 인간 필수 업무 (창의적, 대면 업무)
3. 개선 방안 및 기대 효과
   - 예상 시간 절감률
   - 품질 향상 포인트
4. 추진 우선순위 및 로드맵

[조건]
- 현업 담당자가 이해할 수 있는 수준
- Before/After 비교 형태 포함`,
        promptEn: `You are a work process improvement consultant.

[Document]
Current Work Process Analysis and AI Agent Application Report

[Target Work]
(Enter task name and brief description)

[Report Structure]
1. Current Work Process Status
   - Workflow diagram (text-based)
   - Time and personnel per step
   - Inefficiency factors identified
2. AI Agent Applicable Areas
   - Automatable tasks (repetitive, structured)
   - AI-assistable tasks (requiring judgment)
   - Human-essential tasks (creative, face-to-face)
3. Improvement Plan and Expected Benefits
   - Expected time savings rate
   - Quality improvement points
4. Prioritization and Roadmap

[Conditions]
- Understandable by field staff
- Include Before/After comparison format`,
      },
    ],
  },
  review: {
    titleKo: '검토형 프롬프트',
    titleEn: 'Review Prompts',
    descKo: '문서, 계획, 아이디어의 완성도를 검토하고 피드백을 받기 위한 프롬프트 템플릿입니다.',
    descEn: 'Prompt templates for reviewing completeness of documents, plans, ideas and receiving feedback.',
    examples: [
      {
        titleKo: '실행 계획 검토',
        titleEn: 'Action Plan Review',
        promptKo: `당신은 프로젝트 관리 전문가이며, 실행 계획의 검토자입니다.

아래 실행 계획을 다음 관점에서 검토해주세요:

[검토 관점]
1. 목표의 명확성 및 측정 가능성 (SMART 기준)
2. 실행 단계의 논리적 순서와 완전성
3. 자원 배분의 적절성 (인력, 예산, 시간)
4. 리스크 식별 및 대응 방안의 충분성
5. 이해관계자 관리 계획
6. 성과 측정 지표의 적절성

[출력 형식]
각 관점별로:
- 현재 수준 평가 (상/중/하)
- 구체적 개선 제안
- 보완이 필요한 항목

[실행 계획]
(여기에 실행 계획을 붙여넣기)`,
        promptEn: `You are a project management expert and action plan reviewer.

Review the action plan below from the following perspectives:

[Review Perspectives]
1. Clarity and measurability of goals (SMART criteria)
2. Logical sequence and completeness of execution steps
3. Appropriateness of resource allocation (personnel, budget, time)
4. Sufficiency of risk identification and mitigation plans
5. Stakeholder management plan
6. Appropriateness of performance metrics

[Output Format]
For each perspective:
- Current level assessment (High/Medium/Low)
- Specific improvement suggestions
- Items needing supplementation

[Action Plan]
(Paste action plan here)`,
      },
      {
        titleKo: '문서 품질 검토',
        titleEn: 'Document Quality Review',
        promptKo: `당신은 공공기관 문서 작성 전문가이자 품질 검토자입니다.

아래 문서를 다음 기준으로 검토해주세요:

[검토 기준]
1. 논리 구조: 서론-본론-결론의 흐름이 자연스러운가
2. 근거 충실도: 주장에 대한 데이터/사례가 충분한가
3. 표현 적절성: 보고 대상에 맞는 격식과 용어를 사용하는가
4. 형식 완성도: 표, 그래프, 번호 매기기 등이 일관되는가
5. 오류 점검: 오탈자, 수치 오류, 날짜 불일치 등

[출력 형식]
- 총평 (100자 이내)
- 항목별 평가 (5점 척도 + 코멘트)
- 수정 필요 사항 (우선순위 순)
- 수정 예시 (Before → After)

[문서]
(여기에 검토할 문서를 붙여넣기)`,
        promptEn: `You are a public institution document writing expert and quality reviewer.

Review the document below against these criteria:

[Review Criteria]
1. Logic Structure: Is the intro-body-conclusion flow natural?
2. Evidence Quality: Is there sufficient data/cases for claims?
3. Expression Appropriateness: Are formality and terms suitable for the audience?
4. Format Completeness: Are tables, charts, numbering consistent?
5. Error Check: Typos, numerical errors, date inconsistencies, etc.

[Output Format]
- Overall Assessment (within 100 characters)
- Per-criteria evaluation (5-point scale + comments)
- Required corrections (by priority)
- Correction examples (Before → After)

[Document]
(Paste document to review here)`,
      },
    ],
  },
  action: {
    titleKo: '실행계획형 프롬프트',
    titleEn: 'Action Plan Prompts',
    descKo: '아이디어를 구체적인 실행 계획으로 전환하기 위한 프롬프트 템플릿입니다.',
    descEn: 'Prompt templates for converting ideas into concrete action plans.',
    examples: [
      {
        titleKo: 'AI Agent 도입 실행 계획',
        titleEn: 'AI Agent Implementation Plan',
        promptKo: `당신은 AI 프로젝트 매니저입니다.

아래 아이디어를 실행 가능한 프로젝트 계획으로 구체화해주세요.

[아이디어]
회의자료 초안을 AI Agent가 자동으로 작성하는 시스템

[구체화 항목]
1. 프로젝트 개요 (목적, 범위, 기간)
2. 상세 실행 단계 (WBS 수준)
   - 각 단계별 활동, 산출물, 담당자, 기한
3. 필요 자원
   - 기술 자원 (AI 도구, API, 인프라)
   - 인적 자원 (역할별 필요 인원)
   - 예산 (항목별 추정)
4. 성공 지표 (KPI)
5. 리스크 및 대응 방안
6. 커뮤니케이션 계획

[조건]
- 3개월 이내 시범 운영 가능한 수준
- 비개발 부서에서 운영 가능한 수준
- 단계별 마일스톤 포함`,
        promptEn: `You are an AI project manager.

Concretize the idea below into an executable project plan.

[Idea]
A system where AI Agent automatically drafts meeting materials

[Detailed Items]
1. Project overview (purpose, scope, duration)
2. Detailed execution steps (WBS level)
   - Activities, deliverables, responsible person, deadline per step
3. Required resources
   - Technical (AI tools, API, infrastructure)
   - Human (headcount per role)
   - Budget (estimates per item)
4. Success metrics (KPI)
5. Risks and mitigation strategies
6. Communication plan

[Conditions]
- Pilot-operable within 3 months
- Operable by non-development departments
- Include milestones per phase`,
      },
      {
        titleKo: '부서 AI 역량 강화 계획',
        titleEn: 'Department AI Capability Plan',
        promptKo: `당신은 조직 내 AI 교육 및 역량 강화 전문가입니다.

아래 조건에 맞는 부서 AI 역량 강화 실행 계획을 수립해주세요.

[대상 부서]
(부서명, 인원수, 주요 업무 입력)

[계획 구성]
1. 현황 진단
   - 부서 업무 중 AI 적용 가능 영역 식별
   - 구성원 디지털 역량 수준 분류 (초급/중급/고급)
2. 교육 계획
   - 단계별 교육 프로그램 (기초 → 실습 → 적용)
   - 교육 일정 및 방식 (집합/온라인/OJT)
3. 실습 과제
   - 부서 실무에 바로 적용 가능한 AI 활용 과제 3개
4. 성과 관리
   - 월별 활용 목표 및 측정 방법
   - 우수 활용 사례 공유 체계

[조건]
- 6개월 계획
- 업무 병행 가능한 수준의 학습 부담
- 구체적인 일정과 담당자 포함`,
        promptEn: `You are an organizational AI education and capability building expert.

Create a department AI capability enhancement plan under these conditions.

[Target Department]
(Enter department name, headcount, main tasks)

[Plan Structure]
1. Current Status Assessment
   - Identify AI-applicable areas in department work
   - Classify member digital capability levels (beginner/intermediate/advanced)
2. Education Plan
   - Phased program (basics → hands-on → application)
   - Schedule and methods (in-person/online/OJT)
3. Practice Assignments
   - 3 AI utilization tasks directly applicable to department work
4. Performance Management
   - Monthly utilization targets and measurement methods
   - Best practice sharing system

[Conditions]
- 6-month plan
- Learning load manageable alongside regular work
- Include specific schedule and responsible persons`,
      },
    ],
  },
  meeting: {
    titleKo: '회의자료형 프롬프트',
    titleEn: 'Meeting Material Prompts',
    descKo: '회의 안건, 보고 자료, 브리핑 문서 등을 작성하기 위한 프롬프트 템플릿입니다.',
    descEn: 'Prompt templates for creating meeting agendas, report materials, briefing documents, etc.',
    examples: [
      {
        titleKo: '주간 업무 보고 자료',
        titleEn: 'Weekly Status Report',
        promptKo: `당신은 팀의 업무 보고서 작성을 돕는 AI 비서입니다.

[문서 유형] 주간 업무 보고 자료

[입력 정보]
- 부서: (부서명)
- 보고 기간: (날짜)
- 주요 업무 내용: (키워드 또는 메모 형태로 입력)

[출력 구조]
1. 금주 주요 성과 (3~5개, 정량 수치 포함)
2. 진행 중인 업무 (업무별 진행률, 이슈)
3. 차주 계획 (우선순위 순)
4. 협조/보고 사항
5. 특이 사항

[스타일]
- 공공기관 보고서 스타일
- 간결하고 명확한 문체
- 불릿포인트 중심
- A4 1~2페이지 분량`,
        promptEn: `You are an AI assistant helping write team status reports.

[Document Type] Weekly Status Report

[Input]
- Department: (department name)
- Report Period: (date)
- Key Activities: (enter as keywords or notes)

[Output Structure]
1. This week's key achievements (3-5, with quantitative figures)
2. Ongoing tasks (progress rate per task, issues)
3. Next week's plan (by priority)
4. Coordination/reporting items
5. Special notes

[Style]
- Public institution report style
- Concise and clear writing
- Bullet-point focused
- A4 1-2 page length`,
      },
      {
        titleKo: '경영 브리핑 자료',
        titleEn: 'Management Briefing Material',
        promptKo: `당신은 경영진 보고 전문 비서입니다.

아래 정보를 바탕으로 임원 브리핑 자료를 작성해주세요.

[브리핑 주제]
(주제 입력)

[입력 정보]
- 배경: (간단한 배경 설명)
- 핵심 데이터: (관련 수치나 현황)
- 의사결정 필요 사항: (경영진에게 요청할 사항)

[출력 구조]
1. Executive Summary (3줄 이내)
2. 현황 및 배경 (핵심만 간결하게)
3. 주요 이슈 및 분석
   - 이슈별 팩트 + 시사점
4. 대안 비교 (있을 경우)
   - 표 형식으로 장단점 비교
5. 건의 사항 / 의사결정 요청
6. 향후 일정

[스타일]
- 핵심만 담은 간결한 문체
- 숫자와 팩트 중심
- 시각적 구분 (불릿, 표, 강조) 활용
- A4 2~3페이지 분량`,
        promptEn: `You are an executive reporting specialist assistant.

Create a management briefing document based on the information below.

[Briefing Topic]
(Enter topic)

[Input Information]
- Background: (brief background description)
- Key Data: (relevant figures or status)
- Decision Required: (what to request from management)

[Output Structure]
1. Executive Summary (within 3 lines)
2. Current Status & Background (concise essentials only)
3. Key Issues & Analysis
   - Facts + implications per issue
4. Alternative Comparison (if applicable)
   - Pros/cons comparison in table format
5. Recommendations / Decision Request
6. Upcoming Schedule

[Style]
- Concise writing with essentials only
- Numbers and facts focused
- Visual distinction (bullets, tables, emphasis)
- A4 2-3 page length`,
      },
    ],
  },
};

export default function PromptsPage() {
  const { language, t } = useLanguage();
  const [activeType, setActiveType] = useState('research');
  const [copiedId, setCopiedId] = useState(null);
  const ko = language === 'ko';
  const template = TEMPLATES[activeType];

  const handleCopy = useCallback((text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  return (
    <div className="content-page">
      <SEOHead title={t('prompts.title')} description={t('prompts.subtitle')} path="/prompts" />

      <div className="page-header">
        <div className="container">
          <h1>{t('prompts.title')}</h1>
          <p className="page-desc">{t('prompts.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="content-page-layout">
          <aside className="content-sidebar">
            <h3>{ko ? '템플릿 유형' : 'Template Types'}</h3>
            <ul className="sidebar-nav">
              {TEMPLATE_TYPES.map(type => (
                <li key={type.id} className="sidebar-nav-item">
                  <button
                    className={`sidebar-nav-btn ${activeType === type.id ? 'active' : ''}`}
                    onClick={() => setActiveType(type.id)}
                  >
                    <i className={`fa-solid ${type.icon}`} aria-hidden="true" style={{ marginRight: '8px', width: '16px' }} />
                    {ko ? type.titleKo : type.titleEn}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="content-main">
            <div className="content-card">
              <h2>{ko ? template.titleKo : template.titleEn}</h2>
              <p>{ko ? template.descKo : template.descEn}</p>

              {template.examples.map((example, idx) => {
                const promptText = ko ? example.promptKo : example.promptEn;
                const copyId = `${activeType}-${idx}`;
                const isCopied = copiedId === copyId;
                return (
                  <div key={idx} style={{ marginTop: idx > 0 ? '32px' : '20px' }}>
                    <h3>
                      <i className="fa-solid fa-code" aria-hidden="true" style={{ marginRight: '8px' }} />
                      {ko ? example.titleKo : example.titleEn}
                    </h3>
                    <div className="example-box">
                      <div className="example-box-header">
                        <h4>{ko ? '프롬프트 템플릿' : 'Prompt Template'}</h4>
                        <button
                          className={`copy-btn ${isCopied ? 'copied' : ''}`}
                          onClick={() => handleCopy(promptText, copyId)}
                          aria-label={ko ? '복사' : 'Copy'}
                        >
                          <i className={`fa-solid ${isCopied ? 'fa-check' : 'fa-copy'}`} aria-hidden="true" />
                          <span>{isCopied ? (ko ? '복사됨' : 'Copied') : (ko ? '복사' : 'Copy')}</span>
                        </button>
                      </div>
                      <pre>{promptText}</pre>
                    </div>
                  </div>
                );
              })}

              <div className="info-box tip" style={{ marginTop: '24px' }}>
                <h4>{ko ? '활용 팁' : 'Usage Tips'}</h4>
                <p>{ko
                  ? '- 대괄호 [ ] 안의 내용을 자신의 업무 상황에 맞게 수정하세요'
                  : '- Modify content in brackets [ ] to match your work context'}
                </p>
                <p>{ko
                  ? '- 역할 부여 → 맥락 설정 → 구체적 지시 → 출력 형식 순서로 프롬프트를 구성하면 효과적입니다'
                  : '- Structure prompts in order: role assignment → context setting → specific instructions → output format'}
                </p>
                <p>{ko
                  ? '- 결과가 만족스럽지 않으면 조건을 추가하거나 구체화하여 다시 요청하세요'
                  : '- If results are unsatisfactory, add conditions or be more specific and try again'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
