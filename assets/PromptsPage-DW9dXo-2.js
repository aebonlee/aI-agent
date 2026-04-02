import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{t,u as n}from"./vendor-DRk63QlX.js";import{n as r}from"./index-B4O8nD4k.js";import{t as i}from"./SEOHead-CG0jzTB0.js";var a=e(n(),1),o=t(),s=[{id:`research`,titleKo:`조사형 프롬프트`,titleEn:`Research Prompts`,icon:`fa-magnifying-glass`},{id:`summary`,titleKo:`요약형 프롬프트`,titleEn:`Summary Prompts`,icon:`fa-compress`},{id:`report`,titleKo:`보고서형 프롬프트`,titleEn:`Report Prompts`,icon:`fa-file-lines`},{id:`review`,titleKo:`검토형 프롬프트`,titleEn:`Review Prompts`,icon:`fa-magnifying-glass-chart`},{id:`action`,titleKo:`실행계획형 프롬프트`,titleEn:`Action Plan Prompts`,icon:`fa-list-check`},{id:`meeting`,titleKo:`회의자료형 프롬프트`,titleEn:`Meeting Material Prompts`,icon:`fa-users-rectangle`}],c={research:{titleKo:`조사형 프롬프트`,titleEn:`Research Prompts`,descKo:`특정 주제에 대한 체계적인 조사와 정보 수집을 위한 프롬프트 템플릿입니다. 산업 동향, 기술 트렌드, 경쟁 분석 등에 활용합니다.`,descEn:`Prompt templates for systematic investigation and information gathering on specific topics. Used for industry trends, technology trends, competitive analysis, etc.`,examples:[{titleKo:`산업 동향 리서치`,titleEn:`Industry Trend Research`,promptKo:`당신은 에너지 산업 전문 리서치 애널리스트입니다.

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
- 출처 명시`,promptEn:`You are a research analyst specializing in the energy industry.

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
- Cite sources`},{titleKo:`기술 트렌드 분석`,titleEn:`Technology Trend Analysis`,promptKo:`당신은 AI 기술 전문가입니다.

[분석 주제]
2024~2025 AI Agent 기술 트렌드 분석

[분석 관점]
1. 주요 AI Agent 플랫폼 비교 (OpenAI, Anthropic, Google)
2. 기업용 AI Agent 시장 동향
3. 주요 기술 키워드 (RAG, 멀티에이전트, 함수 호출 등)
4. 산업별 적용 사례

[요청 사항]
- 기술적 깊이와 비즈니스 관점을 모두 포함
- 비전문가도 이해할 수 있는 설명 수준
- 표 또는 비교 형식 활용`,promptEn:`You are an AI technology expert.

[Analysis Topic]
2024-2025 AI Agent Technology Trend Analysis

[Analysis Perspective]
1. Major AI Agent platform comparison (OpenAI, Anthropic, Google)
2. Enterprise AI Agent market trends
3. Key technology keywords (RAG, multi-agent, function calling, etc.)
4. Industry-specific application cases

[Requirements]
- Include both technical depth and business perspective
- Explanation level accessible to non-experts
- Use tables or comparison formats`}]},summary:{titleKo:`요약형 프롬프트`,titleEn:`Summary Prompts`,descKo:`긴 문서, 회의록, 보고서 등을 핵심만 추출하여 요약하는 프롬프트 템플릿입니다.`,descEn:`Prompt templates for extracting and summarizing key points from long documents, meeting minutes, reports, etc.`,examples:[{titleKo:`회의록 요약`,titleEn:`Meeting Minutes Summary`,promptKo:`당신은 전문 비서입니다. 아래 회의록을 다음 구조로 요약해주세요.

[요약 구조]
1. 회의 개요 (일시, 참석자, 목적) - 2줄 이내
2. 핵심 논의 사항 - 3~5개 불릿포인트
3. 주요 결정 사항 - 번호 목록
4. 후속 조치 (Action Items) - 담당자, 기한 포함
5. 다음 회의 일정 및 안건

[회의록]
(여기에 회의록 텍스트를 붙여넣기)`,promptEn:`You are a professional secretary. Summarize the meeting minutes below in the following structure.

[Summary Structure]
1. Meeting Overview (date, attendees, purpose) - within 2 lines
2. Key Discussion Points - 3-5 bullet points
3. Major Decisions - numbered list
4. Action Items - including person responsible, deadline
5. Next meeting schedule and agenda

[Meeting Minutes]
(Paste meeting minutes text here)`}]},report:{titleKo:`보고서형 프롬프트`,titleEn:`Report Prompts`,descKo:`업무 보고서, 분석 보고서, 제안서 등의 초안을 작성하기 위한 프롬프트 템플릿입니다.`,descEn:`Prompt templates for drafting work reports, analysis reports, proposals, etc.`,examples:[{titleKo:`AX 추진 제안서 초안`,titleEn:`AX Proposal Draft`,promptKo:`당신은 기업 AX(AI Transformation) 컨설턴트입니다.

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
- A4 5~7페이지 분량`,promptEn:`You are an enterprise AX (AI Transformation) consultant.

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
- A4 5-7 page length`}]},review:{titleKo:`검토형 프롬프트`,titleEn:`Review Prompts`,descKo:`문서, 계획, 아이디어의 완성도를 검토하고 피드백을 받기 위한 프롬프트 템플릿입니다.`,descEn:`Prompt templates for reviewing completeness of documents, plans, ideas and receiving feedback.`,examples:[{titleKo:`실행 계획 검토`,titleEn:`Action Plan Review`,promptKo:`당신은 프로젝트 관리 전문가이며, 실행 계획의 검토자입니다.

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
(여기에 실행 계획을 붙여넣기)`,promptEn:`You are a project management expert and action plan reviewer.

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
(Paste action plan here)`}]},action:{titleKo:`실행계획형 프롬프트`,titleEn:`Action Plan Prompts`,descKo:`아이디어를 구체적인 실행 계획으로 전환하기 위한 프롬프트 템플릿입니다.`,descEn:`Prompt templates for converting ideas into concrete action plans.`,examples:[{titleKo:`AI Agent 도입 실행 계획`,titleEn:`AI Agent Implementation Plan`,promptKo:`당신은 AI 프로젝트 매니저입니다.

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
- 단계별 마일스톤 포함`,promptEn:`You are an AI project manager.

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
- Include milestones per phase`}]},meeting:{titleKo:`회의자료형 프롬프트`,titleEn:`Meeting Material Prompts`,descKo:`회의 안건, 보고 자료, 브리핑 문서 등을 작성하기 위한 프롬프트 템플릿입니다.`,descEn:`Prompt templates for creating meeting agendas, report materials, briefing documents, etc.`,examples:[{titleKo:`주간 업무 보고 자료`,titleEn:`Weekly Status Report`,promptKo:`당신은 팀의 업무 보고서 작성을 돕는 AI 비서입니다.

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
- A4 1~2페이지 분량`,promptEn:`You are an AI assistant helping write team status reports.

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
- A4 1-2 page length`}]}};function l(){let{language:e,t}=r(),[n,l]=(0,a.useState)(`research`),u=e===`ko`,d=c[n];return(0,o.jsxs)(`div`,{className:`content-page`,children:[(0,o.jsx)(i,{title:t(`prompts.title`),description:t(`prompts.subtitle`),path:`/prompts`}),(0,o.jsx)(`div`,{className:`page-header`,children:(0,o.jsxs)(`div`,{className:`container`,children:[(0,o.jsx)(`h1`,{children:t(`prompts.title`)}),(0,o.jsx)(`p`,{className:`page-desc`,children:t(`prompts.subtitle`)})]})}),(0,o.jsx)(`div`,{className:`container`,children:(0,o.jsxs)(`div`,{className:`content-page-layout`,children:[(0,o.jsxs)(`aside`,{className:`content-sidebar`,children:[(0,o.jsx)(`h3`,{children:u?`템플릿 유형`:`Template Types`}),(0,o.jsx)(`ul`,{className:`sidebar-nav`,children:s.map(e=>(0,o.jsx)(`li`,{className:`sidebar-nav-item`,children:(0,o.jsxs)(`button`,{className:`sidebar-nav-btn ${n===e.id?`active`:``}`,onClick:()=>l(e.id),children:[(0,o.jsx)(`i`,{className:`fa-solid ${e.icon}`,"aria-hidden":`true`,style:{marginRight:`8px`,width:`16px`}}),u?e.titleKo:e.titleEn]})},e.id))})]}),(0,o.jsx)(`div`,{className:`content-main`,children:(0,o.jsxs)(`div`,{className:`content-card`,children:[(0,o.jsx)(`h2`,{children:u?d.titleKo:d.titleEn}),(0,o.jsx)(`p`,{children:u?d.descKo:d.descEn}),d.examples.map((e,t)=>(0,o.jsxs)(`div`,{style:{marginTop:t>0?`32px`:`20px`},children:[(0,o.jsxs)(`h3`,{children:[(0,o.jsx)(`i`,{className:`fa-solid fa-code`,"aria-hidden":`true`,style:{marginRight:`8px`}}),u?e.titleKo:e.titleEn]}),(0,o.jsxs)(`div`,{className:`example-box`,children:[(0,o.jsx)(`h4`,{children:u?`프롬프트 템플릿`:`Prompt Template`}),(0,o.jsx)(`pre`,{children:u?e.promptKo:e.promptEn})]})]},t)),(0,o.jsxs)(`div`,{className:`info-box tip`,style:{marginTop:`24px`},children:[(0,o.jsx)(`h4`,{children:u?`활용 팁`:`Usage Tips`}),(0,o.jsx)(`p`,{children:u?`- 대괄호 [ ] 안의 내용을 자신의 업무 상황에 맞게 수정하세요`:`- Modify content in brackets [ ] to match your work context`}),(0,o.jsx)(`p`,{children:u?`- 역할 부여 → 맥락 설정 → 구체적 지시 → 출력 형식 순서로 프롬프트를 구성하면 효과적입니다`:`- Structure prompts in order: role assignment → context setting → specific instructions → output format`}),(0,o.jsx)(`p`,{children:u?`- 결과가 만족스럽지 않으면 조건을 추가하거나 구체화하여 다시 요청하세요`:`- If results are unsatisfactory, add conditions or be more specific and try again`})]})]})})]})})]})}export{l as default};