import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const SECTIONS = [
  { id: 'overview', titleKo: '학습 안내', titleEn: 'Learning Guide', icon: 'fa-compass' },
  { id: 'ai-basics', titleKo: '생성형 AI의 이해', titleEn: 'Understanding Generative AI', icon: 'fa-microchip' },
  { id: 'ai-agent', titleKo: 'AI Agent 개론', titleEn: 'AI Agent Introduction', icon: 'fa-robot' },
  { id: 'agent-types', titleKo: 'AI Agent 유형과 구조', titleEn: 'Agent Types & Architecture', icon: 'fa-diagram-project' },
  { id: 'prompt-theory', titleKo: '프롬프트 엔지니어링', titleEn: 'Prompt Engineering Theory', icon: 'fa-pencil-ruler' },
  { id: 'task-decomposition', titleKo: '업무 분해 방법론', titleEn: 'Task Decomposition', icon: 'fa-sitemap' },
  { id: 'advanced-concepts', titleKo: '심화 개념', titleEn: 'Advanced Concepts', icon: 'fa-layer-group' },
  { id: 'learning-path', titleKo: '학습 로드맵', titleEn: 'Learning Roadmap', icon: 'fa-route' },
];

export default function LearningPage() {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const ko = language === 'ko';

  return (
    <div className="content-page">
      <SEOHead title={t('learning.title')} description={t('learning.subtitle')} path="/learning" />

      <div className="page-header">
        <div className="container">
          <h1>{t('learning.title')}</h1>
          <p className="page-desc">{t('learning.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="content-page-layout">
          <aside className="content-sidebar">
            <h3>{ko ? '목차' : 'Contents'}</h3>
            <ul className="sidebar-nav">
              {SECTIONS.map(s => (
                <li key={s.id} className="sidebar-nav-item">
                  <button
                    className={`sidebar-nav-btn ${activeSection === s.id ? 'active' : ''}`}
                    onClick={() => setActiveSection(s.id)}
                  >
                    <i className={`fa-solid ${s.icon}`} aria-hidden="true" /> {ko ? s.titleKo : s.titleEn}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="content-main">

            {/* 1. 학습 안내 */}
            {activeSection === 'overview' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-compass" aria-hidden="true" /> {ko ? '학습 안내' : 'Learning Guide'}</h2>
                <p>
                  {ko
                    ? '본 학습 페이지는 AI Agent와 생성형 AI에 대한 이론적 기초부터 실무 적용까지 체계적으로 학습할 수 있도록 구성되었습니다. 각 섹션은 독립적으로 학습할 수 있으며, 순서대로 진행하면 최적의 학습 효과를 얻을 수 있습니다.'
                    : 'This learning page is designed to provide systematic learning from theoretical foundations of AI Agents and Generative AI to practical applications. Each section can be studied independently, but following the sequence provides the optimal learning experience.'}
                </p>

                <div className="info-box tip">
                  <h4>{ko ? '학습 경로 안내' : 'Learning Path Guide'}</h4>
                  <p>
                    {ko
                      ? '생성형 AI 기초 → AI Agent 개론 → Agent 유형과 구조 → 프롬프트 엔지니어링 → 업무 분해 → 심화 개념 → 학습 로드맵 순서로 학습하시면 가장 효과적입니다.'
                      : 'For best results, follow this path: GenAI Basics → AI Agent Introduction → Agent Types → Prompt Engineering → Task Decomposition → Advanced Concepts → Learning Roadmap.'}
                  </p>
                </div>

                <h3>{ko ? '전체 콘텐츠 현황' : 'Content Overview'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-book" aria-hidden="true" /> {ko ? '이론 학습' : 'Theory'}</h4>
                    <p>{ko ? '8개 섹션의 체계적인 이론 콘텐츠' : '8 sections of systematic theory content'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4><i className="fa-solid fa-flask" aria-hidden="true" /> {ko ? '실습 자료' : 'Practice Materials'}</h4>
                    <p>{ko ? '워크시트, 캔버스, 템플릿 제공' : 'Worksheets, canvas, and templates provided'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4><i className="fa-solid fa-terminal" aria-hidden="true" /> {ko ? '프롬프트 템플릿' : 'Prompt Templates'}</h4>
                    <p>{ko ? '목적별 프롬프트 설계 템플릿' : 'Purpose-built prompt design templates'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4><i className="fa-solid fa-building" aria-hidden="true" /> {ko ? '산업별 사례' : 'Industry Cases'}</h4>
                    <p>{ko ? '공공기관, 발전사, 기업, 대학 사례' : 'Public, power, enterprise, university cases'}</p>
                  </div>
                </div>

                <h3>{ko ? '바로가기' : 'Quick Links'}</h3>
                <div className="framework-grid">
                  <div className="framework-item">
                    <h4><Link to="/course"><i className="fa-solid fa-book-open" aria-hidden="true" /> {ko ? '과정소개' : 'Course Overview'}</Link></h4>
                    <p>{ko ? '워크숍의 목적, 대상, 기대효과' : 'Workshop purpose, audience, outcomes'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/course"><i className="fa-solid fa-list-check" aria-hidden="true" /> {ko ? '커리큘럼' : 'Curriculum'}</Link></h4>
                    <p>{ko ? '8시간 기본부터 프로젝트형 확장까지' : 'From 8-hour basic to project extensions'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/prompts"><i className="fa-solid fa-terminal" aria-hidden="true" /> {ko ? '프롬프트 템플릿' : 'Prompt Templates'}</Link></h4>
                    <p>{ko ? '목적별 프롬프트 설계 가이드' : 'Purpose-built prompt design guides'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/materials"><i className="fa-solid fa-file-lines" aria-hidden="true" /> {ko ? '실습자료' : 'Practice Materials'}</Link></h4>
                    <p>{ko ? '워크시트, 캔버스, 실행계획서' : 'Worksheets, canvas, action plans'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. 생성형 AI의 이해 */}
            {activeSection === 'ai-basics' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-microchip" aria-hidden="true" /> {ko ? '생성형 AI의 이해' : 'Understanding Generative AI'}</h2>

                <h3>{ko ? '생성형 AI란?' : 'What is Generative AI?'}</h3>
                <p>
                  {ko
                    ? '생성형 AI(Generative AI)는 학습한 데이터를 바탕으로 새로운 텍스트, 이미지, 코드 등을 생성하는 인공지능 기술입니다. 기존 AI가 분류, 예측 등 정해진 작업을 수행했다면, 생성형 AI는 창의적인 결과물을 만들어낼 수 있습니다.'
                    : 'Generative AI is an artificial intelligence technology that creates new text, images, code, and more based on learned data. While traditional AI performed defined tasks like classification and prediction, Generative AI can produce creative outputs.'}
                </p>

                <h3>{ko ? 'LLM(대규모 언어 모델) 작동 원리' : 'How LLMs Work'}</h3>
                <p>
                  {ko
                    ? 'LLM은 방대한 텍스트 데이터를 학습하여 다음에 올 단어를 예측하는 방식으로 작동합니다. 트랜스포머(Transformer) 아키텍처를 기반으로 문맥을 이해하고, 확률적으로 가장 적합한 응답을 생성합니다.'
                    : 'LLMs work by learning from vast text data to predict the next word. Based on Transformer architecture, they understand context and generate probabilistically appropriate responses.'}
                </p>
                <div className="info-box tip">
                  <h4>{ko ? '핵심 포인트' : 'Key Point'}</h4>
                  <p>{ko
                    ? 'LLM은 "이해"하는 것이 아니라 "패턴을 학습"하여 응답을 생성합니다. 이 차이를 이해하는 것이 효과적인 AI 활용의 첫걸음입니다.'
                    : 'LLMs don\'t "understand" — they "learn patterns" to generate responses. Understanding this distinction is the first step to effective AI utilization.'}</p>
                </div>

                <h3>{ko ? '주요 기능' : 'Key Capabilities'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-pen-fancy" aria-hidden="true" /> {ko ? '생성 (Generation)' : 'Generation'}</h4>
                    <p>{ko ? '보고서, 이메일, 기획안, 코드 등 새로운 콘텐츠를 작성합니다.' : 'Create new content: reports, emails, proposals, code, and more.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4><i className="fa-solid fa-compress" aria-hidden="true" /> {ko ? '요약 (Summarization)' : 'Summarization'}</h4>
                    <p>{ko ? '긴 문서를 핵심만 추려 간결하게 정리합니다.' : 'Condense long documents into key points concisely.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4><i className="fa-solid fa-magnifying-glass-chart" aria-hidden="true" /> {ko ? '분석 (Analysis)' : 'Analysis'}</h4>
                    <p>{ko ? '데이터와 텍스트에서 패턴, 인사이트를 도출합니다.' : 'Extract patterns and insights from data and text.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4><i className="fa-solid fa-language" aria-hidden="true" /> {ko ? '변환 (Transformation)' : 'Transformation'}</h4>
                    <p>{ko ? '번역, 형식 변환, 톤 조정 등 콘텐츠를 변형합니다.' : 'Transform content: translation, format conversion, tone adjustment.'}</p>
                  </div>
                </div>

                <h3>{ko ? '한계와 환각(Hallucination)' : 'Limitations & Hallucination'}</h3>
                <p>
                  {ko
                    ? '생성형 AI는 강력하지만 명확한 한계가 있습니다. 가장 대표적인 것이 "환각(Hallucination)" 현상으로, AI가 사실이 아닌 정보를 마치 사실인 것처럼 생성하는 것을 말합니다.'
                    : 'Generative AI is powerful but has clear limitations. The most notable is "Hallucination" — when AI generates non-factual information as if it were true.'}
                </p>
                <div className="info-box">
                  <h4>{ko ? '주요 한계점' : 'Key Limitations'}</h4>
                  <ul>
                    <li>{ko ? '학습 데이터 이후의 최신 정보를 알지 못함 (지식 컷오프)' : 'No knowledge beyond training data cutoff'}</li>
                    <li>{ko ? '수학적 계산이나 논리적 추론에서 오류 가능' : 'Potential errors in mathematical calculations and logical reasoning'}</li>
                    <li>{ko ? '출처가 불분명한 정보 생성 가능' : 'May generate information with unclear sources'}</li>
                    <li>{ko ? '편향된 학습 데이터로 인한 편향된 출력' : 'Biased outputs due to biased training data'}</li>
                  </ul>
                </div>

                <h3>{ko ? '기존 소프트웨어와 비교' : 'Comparison with Traditional Software'}</h3>
                <div className="example-box">
                  <div className="example-label">{ko ? '비교표' : 'Comparison Table'}</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '구분' : 'Aspect'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '기존 소프트웨어' : 'Traditional Software'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '생성형 AI' : 'Generative AI'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '작동 방식' : 'How it works'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '규칙 기반, 결정론적' : 'Rule-based, deterministic'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '패턴 학습, 확률론적' : 'Pattern learning, probabilistic'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '입력' : 'Input'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '정형 데이터' : 'Structured data'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '자연어, 비정형 데이터' : 'Natural language, unstructured data'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '출력' : 'Output'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '항상 동일한 결과' : 'Always same result'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '매번 다를 수 있는 결과' : 'Results may vary each time'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px' }}>{ko ? '유연성' : 'Flexibility'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '사전 정의된 범위 내' : 'Within predefined scope'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '새로운 상황에 대응 가능' : 'Can handle novel situations'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. AI Agent 개론 */}
            {activeSection === 'ai-agent' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-robot" aria-hidden="true" /> {ko ? 'AI Agent 개론' : 'AI Agent Introduction'}</h2>

                <h3>{ko ? 'AI Agent란?' : 'What is an AI Agent?'}</h3>
                <p>
                  {ko
                    ? 'AI Agent는 주어진 목표를 달성하기 위해 스스로 환경을 인식하고, 계획을 세우고, 행동을 실행하며, 결과를 평가하여 다음 행동을 결정하는 자율적 AI 시스템입니다. 단순히 질문에 답하는 챗봇과 달리, 복잡한 업무를 단계별로 처리할 수 있습니다.'
                    : 'An AI Agent is an autonomous AI system that perceives its environment, plans, executes actions, and evaluates results to determine next steps toward a given goal. Unlike simple chatbots that answer questions, it can handle complex tasks step by step.'}
                </p>

                <h3>{ko ? '에이전틱 AI(Agentic AI)란?' : 'What is Agentic AI?'}</h3>
                <p>
                  {ko
                    ? '에이전틱 AI는 AI가 단순 도구를 넘어 "에이전트"로서 자율적으로 판단하고 행동하는 패러다임을 말합니다. 사용자가 목표만 제시하면, AI가 스스로 필요한 정보를 수집하고, 계획을 세우며, 도구를 활용하여 작업을 완료합니다.'
                    : 'Agentic AI refers to the paradigm where AI goes beyond being a tool to act as an autonomous "agent" that makes decisions and takes actions. Given a goal, the AI autonomously gathers information, creates plans, and uses tools to complete tasks.'}
                </p>

                <h3>{ko ? '생성형 AI vs AI Agent 비교' : 'Generative AI vs AI Agent'}</h3>
                <div className="example-box">
                  <div className="example-label">{ko ? '비교표' : 'Comparison'}</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '구분' : 'Aspect'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '생성형 AI' : 'Generative AI'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? 'AI Agent' : 'AI Agent'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '상호작용' : 'Interaction'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '1회성 질문-응답' : 'Single Q&A'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '다단계 자율 실행' : 'Multi-step autonomous execution'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '도구 사용' : 'Tool Use'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '제한적' : 'Limited'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '외부 도구 적극 활용' : 'Active use of external tools'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '기억' : 'Memory'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '대화 내 맥락만' : 'Within conversation only'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '장기 기억 가능' : 'Long-term memory capable'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '계획 수립' : 'Planning'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '없음' : 'None'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '목표 기반 계획 수립' : 'Goal-based planning'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px' }}>{ko ? '적용 예시' : 'Example'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '"이메일 초안 써줘"' : '"Draft an email"'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '"고객 데이터 분석 후 보고서 작성하고 팀에 공유해줘"' : '"Analyze customer data, write report, share with team"'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>{ko ? '왜 AI Agent가 중요한가?' : 'Why AI Agents Matter'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? '업무 자동화의 진화' : 'Evolution of Automation'}</h4>
                    <p>{ko ? '반복 업무를 넘어 판단이 필요한 복잡한 업무까지 자동화 가능' : 'Automate complex tasks requiring judgment, beyond simple repetition'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>{ko ? '생산성 혁신' : 'Productivity Innovation'}</h4>
                    <p>{ko ? '하나의 지시로 여러 단계의 업무를 연쇄적으로 처리' : 'Handle multi-step workflows from a single instruction'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4>{ko ? '의사결정 지원' : 'Decision Support'}</h4>
                    <p>{ko ? '데이터 수집, 분석, 비교를 통한 근거 기반 의사결정 지원' : 'Evidence-based decision support through data collection and analysis'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4>{ko ? '조직 역량 강화' : 'Organizational Capability'}</h4>
                    <p>{ko ? '개인과 팀의 역량을 AI로 증폭하여 조직 전체의 경쟁력 향상' : 'Amplify individual and team capabilities with AI for organizational competitiveness'}</p>
                  </div>
                </div>

                <h3>{ko ? '업무 적용 사례' : 'Business Application Examples'}</h3>
                <ul>
                  <li>{ko ? '리서치 Agent: 시장 동향 자동 조사 및 보고서 생성' : 'Research Agent: Automated market trend research and report generation'}</li>
                  <li>{ko ? '문서화 Agent: 회의록 정리, 보고서 초안 작성, 서식 자동 변환' : 'Documentation Agent: Meeting minutes, report drafting, format conversion'}</li>
                  <li>{ko ? '검토 Agent: 계약서, 정책 문서의 리스크 항목 자동 검토' : 'Review Agent: Auto-review risk items in contracts and policy documents'}</li>
                  <li>{ko ? '분석 Agent: 데이터 분석, 트렌드 파악, 인사이트 도출' : 'Analysis Agent: Data analysis, trend identification, insight extraction'}</li>
                </ul>
              </div>
            )}

            {/* 4. AI Agent 유형과 구조 */}
            {activeSection === 'agent-types' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-diagram-project" aria-hidden="true" /> {ko ? 'AI Agent 유형과 구조' : 'Agent Types & Architecture'}</h2>

                <h3>{ko ? 'Agent의 4대 구성요소' : 'Four Core Components of an Agent'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-eye" aria-hidden="true" /> {ko ? '인식 (Perception)' : 'Perception'}</h4>
                    <p>{ko ? '환경과 입력을 이해합니다. 사용자의 요청, 외부 데이터, 시스템 상태 등을 인식합니다.' : 'Understands environment and inputs. Recognizes user requests, external data, and system states.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4><i className="fa-solid fa-brain" aria-hidden="true" /> {ko ? '계획 (Planning)' : 'Planning'}</h4>
                    <p>{ko ? '목표를 달성하기 위한 실행 계획을 수립합니다. 작업을 하위 단계로 분해하고 순서를 정합니다.' : 'Creates execution plans to achieve goals. Decomposes tasks into sub-steps and sequences them.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4><i className="fa-solid fa-gears" aria-hidden="true" /> {ko ? '실행 (Action)' : 'Action'}</h4>
                    <p>{ko ? '계획에 따라 도구를 사용하고 작업을 수행합니다. API 호출, 파일 작성, 데이터 처리 등을 실행합니다.' : 'Uses tools and performs tasks according to plan. Executes API calls, file operations, data processing.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4><i className="fa-solid fa-database" aria-hidden="true" /> {ko ? '기억 (Memory)' : 'Memory'}</h4>
                    <p>{ko ? '과거 경험과 맥락을 저장하고 활용합니다. 단기 기억(현재 대화)과 장기 기억(축적된 지식)을 관리합니다.' : 'Stores and utilizes past experiences and context. Manages short-term (current conversation) and long-term (accumulated knowledge) memory.'}</p>
                  </div>
                </div>

                <h3>{ko ? 'Agent 유형' : 'Agent Types'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? '반사형 Agent (Reactive)' : 'Reactive Agent'}</h4>
                    <p>{ko
                      ? '현재 입력에 즉각 반응합니다. 규칙 기반으로 작동하며, 과거 경험을 참조하지 않습니다. 예: 간단한 챗봇, 자동 응답 시스템'
                      : 'Reacts immediately to current input. Rule-based operation without referencing past experience. Example: Simple chatbots, auto-response systems'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>{ko ? '목표 기반 Agent (Goal-based)' : 'Goal-based Agent'}</h4>
                    <p>{ko
                      ? '목표를 설정하고 달성하기 위한 계획을 수립합니다. 여러 단계를 거쳐 복잡한 작업을 처리합니다. 예: 프로젝트 관리 Agent, 리서치 Agent'
                      : 'Sets goals and creates plans to achieve them. Handles complex tasks through multiple steps. Example: Project management Agent, Research Agent'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4>{ko ? '학습형 Agent (Learning)' : 'Learning Agent'}</h4>
                    <p>{ko
                      ? '경험을 통해 성능을 개선합니다. 피드백을 반영하여 점점 더 나은 결과를 생성합니다. 예: 추천 시스템, 적응형 비서'
                      : 'Improves performance through experience. Reflects feedback to generate increasingly better results. Example: Recommendation systems, adaptive assistants'}</p>
                  </div>
                </div>

                <h3>{ko ? '싱글 Agent vs 멀티 Agent' : 'Single Agent vs Multi-Agent'}</h3>
                <div className="example-box">
                  <div className="example-label">{ko ? '비교' : 'Comparison'}</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '구분' : 'Aspect'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '싱글 Agent' : 'Single Agent'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '멀티 Agent' : 'Multi-Agent'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '구조' : 'Structure'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '하나의 Agent가 모든 작업 수행' : 'One Agent handles all tasks'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '역할별 전문 Agent 협업' : 'Specialized Agents collaborate by role'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '복잡도' : 'Complexity'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '단순한 작업에 적합' : 'Suitable for simple tasks'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '복잡한 워크플로우 처리' : 'Handles complex workflows'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px' }}>{ko ? '예시' : 'Example'}</td>
                        <td style={{ padding: '8px' }}>{ko ? 'ChatGPT, Claude 대화' : 'ChatGPT, Claude conversations'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '리서치+분석+보고서 작성 파이프라인' : 'Research+Analysis+Report pipeline'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>{ko ? '아키텍처 예시' : 'Architecture Example'}</h3>
                <div className="info-box tip">
                  <h4>{ko ? '멀티 Agent 아키텍처' : 'Multi-Agent Architecture'}</h4>
                  <p>{ko
                    ? '오케스트레이터(Orchestrator) Agent가 전체 작업을 관리하고, 하위 Agent(리서치, 분석, 작성)에게 작업을 분배합니다. 각 Agent는 자신의 전문 영역에서 작업을 수행하고, 결과를 오케스트레이터에게 반환합니다.'
                    : 'An Orchestrator Agent manages the overall workflow and distributes tasks to sub-agents (research, analysis, writing). Each agent performs tasks in its specialty and returns results to the orchestrator.'}</p>
                </div>
              </div>
            )}

            {/* 5. 프롬프트 엔지니어링 */}
            {activeSection === 'prompt-theory' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-pencil-ruler" aria-hidden="true" /> {ko ? '프롬프트 엔지니어링' : 'Prompt Engineering Theory'}</h2>

                <h3>{ko ? '프롬프트 구조' : 'Prompt Structure'}</h3>
                <p>{ko
                  ? '효과적인 프롬프트는 5가지 핵심 요소로 구성됩니다. 이 구조를 이해하면 AI에게 더 정확한 지시를 내릴 수 있습니다.'
                  : 'Effective prompts consist of 5 core elements. Understanding this structure allows you to give more precise instructions to AI.'}</p>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? '역할 (Role)' : 'Role'}</h4>
                    <p>{ko ? 'AI에게 부여할 전문가 역할을 정의합니다. "당신은 에너지 산업 분석가입니다."' : 'Define the expert role for AI. "You are an energy industry analyst."'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>{ko ? '맥락 (Context)' : 'Context'}</h4>
                    <p>{ko ? '배경 정보와 상황을 제공합니다. "2024년 국내 발전사의 AI 도입 현황 보고서를 작성 중입니다."' : 'Provide background and situation. "We are preparing a 2024 report on AI adoption in domestic power companies."'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4>{ko ? '지시 (Instruction)' : 'Instruction'}</h4>
                    <p>{ko ? '구체적으로 수행할 작업을 명시합니다. "주요 발전사 5곳의 AI 도입 사례를 비교 분석해주세요."' : 'Specify the task clearly. "Compare and analyze AI adoption cases of 5 major power companies."'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4>{ko ? '형식 (Format)' : 'Format'}</h4>
                    <p>{ko ? '원하는 출력 형태를 지정합니다. "표 형식으로, 회사명/도입 분야/성과 항목으로 정리해주세요."' : 'Specify desired output format. "In table format with company/area/results columns."'}</p>
                  </div>
                </div>
                <div className="info-box tip">
                  <h4>{ko ? '조건 (Constraints)' : 'Constraints'}</h4>
                  <p>{ko
                    ? '제약 조건과 품질 기준을 설정합니다. "500자 이내로 작성하되, 구체적인 수치를 포함해주세요. 공식 보도자료 기반으로 작성하세요."'
                    : 'Set constraints and quality criteria. "Write within 500 words, include specific numbers. Base on official press releases."'}</p>
                </div>

                <h3>{ko ? '핵심 기법 6가지' : 'Six Core Techniques'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>1. {ko ? '역할 부여 (Role Playing)' : 'Role Playing'}</h4>
                    <p>{ko ? 'AI에게 전문가 페르소나를 부여하여 답변 품질을 높입니다.' : 'Assign expert personas to AI to improve response quality.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>2. {ko ? '단계적 사고 (Chain-of-Thought)' : 'Chain-of-Thought'}</h4>
                    <p>{ko ? '"단계별로 생각해주세요"를 추가하여 논리적 추론을 유도합니다.' : 'Add "think step by step" to induce logical reasoning.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4>3. {ko ? '예시 제공 (Few-shot)' : 'Few-shot'}</h4>
                    <p>{ko ? '원하는 형태의 예시를 1-3개 제공하여 출력 형식을 안내합니다.' : 'Provide 1-3 examples of desired format to guide output.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4>4. {ko ? '구조화된 출력 (Structured Output)' : 'Structured Output'}</h4>
                    <p>{ko ? '표, 목록, JSON 등 명확한 출력 형식을 지정합니다.' : 'Specify clear output formats like tables, lists, JSON.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>5. {ko ? '반복 개선 (Iterative Refinement)' : 'Iterative Refinement'}</h4>
                    <p>{ko ? '첫 결과를 바탕으로 피드백을 주어 점진적으로 품질을 높입니다.' : 'Provide feedback on initial results to incrementally improve quality.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>6. {ko ? '제약 조건 설정 (Constraint Setting)' : 'Constraint Setting'}</h4>
                    <p>{ko ? '분량, 톤, 대상 독자, 금지 사항 등을 명시하여 범위를 한정합니다.' : 'Specify length, tone, audience, restrictions to define scope.'}</p>
                  </div>
                </div>

                <h3>{ko ? '안티패턴과 개선법' : 'Anti-patterns & Improvements'}</h3>
                <div className="example-box">
                  <div className="example-label">{ko ? '안티패턴 vs 개선된 프롬프트' : 'Anti-pattern vs Improved Prompt'}</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '안티패턴' : 'Anti-pattern'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '개선된 프롬프트' : 'Improved Prompt'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '"AI에 대해 알려줘"' : '"Tell me about AI"'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '"공공기관 관점에서 업무에 적용 가능한 AI 기술 3가지를 설명해줘"' : '"Explain 3 AI technologies applicable to public sector work"'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '"보고서 써줘"' : '"Write a report"'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '"당신은 에너지 정책 전문가입니다. 2024년 신재생에너지 정책 동향을 A4 2장 분량으로 요약해주세요"' : '"You are an energy policy expert. Summarize 2024 renewable energy policy trends in 2 pages"'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px' }}>{ko ? '"좋은 글 써줘"' : '"Write something good"'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '"목적: 팀 주간보고 / 톤: 공식적 / 분량: 500자 / 구조: 이번주 성과, 다음주 계획, 이슈 항목으로 작성"' : '"Purpose: Team weekly report / Tone: Formal / Length: 500 words / Structure: This week\'s results, next week\'s plan, issues"'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="info-box tip">
                  <h4>{ko ? '실습으로 이어가기' : 'Continue with Practice'}</h4>
                  <p>{ko
                    ? '프롬프트 엔지니어링 이론을 실습으로 적용해 보세요.'
                    : 'Apply prompt engineering theory through hands-on practice.'} <Link to="/prompts">{ko ? '프롬프트 템플릿 바로가기 →' : 'Go to Prompt Templates →'}</Link></p>
                </div>
              </div>
            )}

            {/* 6. 업무 분해 방법론 */}
            {activeSection === 'task-decomposition' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-sitemap" aria-hidden="true" /> {ko ? '업무 분해 방법론' : 'Task Decomposition Methodology'}</h2>

                <h3>{ko ? '업무 분해의 중요성' : 'Why Task Decomposition Matters'}</h3>
                <p>
                  {ko
                    ? 'AI Agent가 업무를 효과적으로 처리하려면, 복잡한 업무를 AI가 처리할 수 있는 단위로 분해해야 합니다. 업무 분해는 AI 활용의 핵심 역량이며, 이를 통해 자동화 가능 영역을 식별하고 Agent를 설계할 수 있습니다.'
                    : 'For AI Agents to handle tasks effectively, complex work must be decomposed into AI-processable units. Task decomposition is a core competency for AI utilization, enabling identification of automatable areas and Agent design.'}
                </p>

                <h3>{ko ? 'IPO 프레임워크' : 'IPO Framework'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-arrow-right-to-bracket" aria-hidden="true" /> Input ({ko ? '입력' : 'Input'})</h4>
                    <p>{ko ? '업무에 필요한 데이터, 자료, 정보를 정의합니다. "어떤 데이터가 필요한가?"' : 'Define required data, materials, and information. "What data is needed?"'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4><i className="fa-solid fa-gear" aria-hidden="true" /> Process ({ko ? '처리' : 'Process'})</h4>
                    <p>{ko ? '입력을 결과물로 변환하는 과정을 정의합니다. "어떤 작업을 수행하는가?"' : 'Define the process of transforming input to output. "What tasks are performed?"'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4><i className="fa-solid fa-arrow-right-from-bracket" aria-hidden="true" /> Output ({ko ? '출력' : 'Output'})</h4>
                    <p>{ko ? '최종 결과물과 산출물을 정의합니다. "어떤 형태의 결과물이 나오는가?"' : 'Define final deliverables and outputs. "What form does the result take?"'}</p>
                  </div>
                </div>

                <h3>{ko ? '4단계 업무 분해 방법론' : '4-Step Decomposition Methodology'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>Step 1: {ko ? '업무 목록화' : 'Task Listing'}</h4>
                    <p>{ko ? '현재 수행 중인 업무를 모두 나열합니다. 일일/주간/월간 업무를 빠짐없이 정리합니다.' : 'List all current tasks. Organize daily/weekly/monthly work comprehensively.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>Step 2: {ko ? '하위 작업 분해' : 'Sub-task Decomposition'}</h4>
                    <p>{ko ? '각 업무를 3-7개의 하위 작업으로 분해합니다. 각 하위 작업에 IPO를 적용합니다.' : 'Decompose each task into 3-7 sub-tasks. Apply IPO framework to each sub-task.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4>Step 3: {ko ? 'AI 적용 가능성 평가' : 'AI Applicability Assessment'}</h4>
                    <p>{ko ? '각 하위 작업의 AI 자동화 가능성을 평가합니다. 완전 자동화 / 부분 자동화 / 수동으로 구분합니다.' : 'Evaluate AI automation potential for each sub-task. Classify as fully automated / partially automated / manual.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4>Step 4: {ko ? 'Agent 설계' : 'Agent Design'}</h4>
                    <p>{ko ? '자동화 가능한 작업을 묶어 Agent 워크플로우를 설계합니다. 입력→처리→출력 파이프라인을 구성합니다.' : 'Group automatable tasks and design Agent workflows. Build input→process→output pipelines.'}</p>
                  </div>
                </div>

                <h3>{ko ? '실습 예시: 주간보고 작성 분해' : 'Practice Example: Weekly Report Decomposition'}</h3>
                <div className="example-box">
                  <div className="example-label">{ko ? '주간보고 작성 업무 분해' : 'Weekly Report Task Decomposition'}</div>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>{ko ? '하위 작업' : 'Sub-task'}</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>Input</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>Process</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>Output</th>
                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-light)' }}>AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '실적 수집' : 'Collect results'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '업무일지' : 'Work logs'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '항목별 정리' : 'Organize by item'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '실적 목록' : 'Results list'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '부분' : 'Partial'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '성과 분석' : 'Analyze performance'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '실적 목록' : 'Results list'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? 'KPI 대비 분석' : 'KPI comparison'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '분석 결과' : 'Analysis'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '가능' : 'Yes'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '이슈 정리' : 'Summarize issues'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '회의록, 이메일' : 'Minutes, emails'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '핵심 이슈 추출' : 'Extract key issues'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '이슈 목록' : 'Issue list'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '가능' : 'Yes'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '보고서 작성' : 'Write report'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '분석+이슈' : 'Analysis+issues'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '서식에 맞춰 작성' : 'Write in format'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '주간보고서' : 'Weekly report'}</td>
                        <td style={{ padding: '8px', borderBottom: '1px solid var(--border-light)' }}>{ko ? '가능' : 'Yes'}</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px' }}>{ko ? '검토/승인' : 'Review/approve'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '주간보고서' : 'Weekly report'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '내용 확인' : 'Content review'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '최종 보고서' : 'Final report'}</td>
                        <td style={{ padding: '8px' }}>{ko ? '수동' : 'Manual'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="info-box tip">
                  <h4>{ko ? '실습 자료로 이어가기' : 'Continue with Practice Materials'}</h4>
                  <p>{ko
                    ? '업무 분해 워크시트와 Agent 설계 캔버스를 활용하여 직접 실습해 보세요.'
                    : 'Practice with task decomposition worksheets and Agent design canvas.'} <Link to="/materials">{ko ? '실습자료 바로가기 →' : 'Go to Practice Materials →'}</Link></p>
                </div>
              </div>
            )}

            {/* 7. 심화 개념 */}
            {activeSection === 'advanced-concepts' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-layer-group" aria-hidden="true" /> {ko ? '심화 개념' : 'Advanced Concepts'}</h2>

                <h3>RAG (Retrieval-Augmented Generation)</h3>
                <p>
                  {ko
                    ? 'RAG는 AI가 응답을 생성하기 전에 외부 지식 베이스에서 관련 정보를 검색하여 참조하는 기술입니다. 이를 통해 환각(Hallucination)을 줄이고, 최신 정보를 반영한 정확한 답변을 제공할 수 있습니다.'
                    : 'RAG is a technique where AI retrieves relevant information from an external knowledge base before generating responses. This reduces hallucination and provides accurate answers reflecting the latest information.'}
                </p>
                <div className="info-box tip">
                  <h4>{ko ? 'RAG 작동 원리' : 'How RAG Works'}</h4>
                  <ul>
                    <li>{ko ? '1단계: 사용자 질문을 벡터로 변환' : 'Step 1: Convert user query to vector'}</li>
                    <li>{ko ? '2단계: 벡터 DB에서 유사한 문서 검색' : 'Step 2: Search similar documents in vector DB'}</li>
                    <li>{ko ? '3단계: 검색된 문서를 컨텍스트로 LLM에 전달' : 'Step 3: Pass retrieved documents as context to LLM'}</li>
                    <li>{ko ? '4단계: LLM이 컨텍스트 기반으로 정확한 답변 생성' : 'Step 4: LLM generates accurate answer based on context'}</li>
                  </ul>
                </div>

                <h3>Function Calling / Tool Use</h3>
                <p>
                  {ko
                    ? 'Function Calling(또는 Tool Use)은 AI가 외부 도구와 API를 직접 호출하여 작업을 수행하는 기능입니다. 이를 통해 AI는 단순한 텍스트 생성을 넘어 실제 시스템과 상호작용할 수 있습니다.'
                    : 'Function Calling (or Tool Use) enables AI to directly call external tools and APIs to perform tasks. This allows AI to interact with real systems beyond simple text generation.'}
                </p>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? '웹 검색' : 'Web Search'}</h4>
                    <p>{ko ? '실시간 정보 검색 및 최신 데이터 수집' : 'Real-time information search and latest data collection'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>{ko ? '데이터베이스 조회' : 'Database Query'}</h4>
                    <p>{ko ? '사내 DB에서 필요한 데이터를 직접 조회' : 'Query necessary data directly from internal databases'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4>{ko ? '파일 처리' : 'File Processing'}</h4>
                    <p>{ko ? '문서 읽기, 작성, 변환 등 파일 시스템 조작' : 'Read, write, convert documents and file system operations'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4>{ko ? '외부 API 연동' : 'External API Integration'}</h4>
                    <p>{ko ? '이메일 전송, 캘린더 관리, 메시지 전달 등' : 'Email sending, calendar management, message delivery, etc.'}</p>
                  </div>
                </div>

                <h3>{ko ? '멀티 에이전트 시스템' : 'Multi-Agent Systems'}</h3>
                <p>
                  {ko
                    ? '멀티 에이전트 시스템은 여러 전문 Agent가 협업하여 복잡한 작업을 수행하는 아키텍처입니다. 각 Agent는 고유한 역할과 도구를 가지며, 오케스트레이터를 통해 조율됩니다.'
                    : 'Multi-Agent systems are architectures where multiple specialized Agents collaborate to perform complex tasks. Each Agent has unique roles and tools, coordinated through an orchestrator.'}
                </p>
                <div className="info-box">
                  <h4>{ko ? '멀티 에이전트 활용 사례' : 'Multi-Agent Use Cases'}</h4>
                  <ul>
                    <li>{ko ? '리서치 파이프라인: 검색 Agent → 분석 Agent → 보고서 작성 Agent' : 'Research Pipeline: Search Agent → Analysis Agent → Report Agent'}</li>
                    <li>{ko ? '코드 개발: 설계 Agent → 코딩 Agent → 테스트 Agent → 리뷰 Agent' : 'Code Development: Design Agent → Coding Agent → Testing Agent → Review Agent'}</li>
                    <li>{ko ? '고객 서비스: 분류 Agent → 답변 Agent → 에스컬레이션 Agent' : 'Customer Service: Classification Agent → Response Agent → Escalation Agent'}</li>
                  </ul>
                </div>

                <h3>{ko ? 'AI Agent 플랫폼' : 'AI Agent Platforms'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>GPTs (OpenAI)</h4>
                    <p>{ko ? '사용자 정의 지시사항, 지식 파일, 도구를 결합한 맞춤형 AI 에이전트 생성 플랫폼' : 'Platform for creating custom AI agents combining instructions, knowledge files, and tools'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4>Claude Projects (Anthropic)</h4>
                    <p>{ko ? '프로젝트 단위로 컨텍스트, 문서, 지침을 관리하는 AI 워크스페이스' : 'AI workspace managing context, documents, and instructions by project'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4>Gems (Google)</h4>
                    <p>{ko ? 'Google Gemini 기반의 맞춤형 AI 도우미 생성 기능' : 'Custom AI assistant creation based on Google Gemini'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4>Copilot Studio (Microsoft)</h4>
                    <p>{ko ? 'Microsoft 365와 통합된 엔터프라이즈 AI 에이전트 빌더' : 'Enterprise AI agent builder integrated with Microsoft 365'}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 8. 학습 로드맵 */}
            {activeSection === 'learning-path' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-route" aria-hidden="true" /> {ko ? '학습 로드맵' : 'Learning Roadmap'}</h2>

                <h3>{ko ? '4단계 학습 경로' : '4-Stage Learning Path'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-seedling" aria-hidden="true" /> Stage 1: {ko ? '기초 이해' : 'Foundation'}</h4>
                    <p>{ko ? '생성형 AI 이해 → AI Agent 개론 → Agent 유형과 구조' : 'Understanding GenAI → AI Agent Intro → Agent Types & Architecture'}</p>
                    <ul>
                      <li>{ko ? '학습 목표: AI와 Agent의 개념 구분' : 'Goal: Distinguish AI and Agent concepts'}</li>
                      <li>{ko ? '예상 소요: 2시간' : 'Estimated time: 2 hours'}</li>
                    </ul>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #2E86AB' }}>
                    <h4><i className="fa-solid fa-pencil" aria-hidden="true" /> Stage 2: {ko ? '기법 습득' : 'Skill Building'}</h4>
                    <p>{ko ? '프롬프트 엔지니어링 → 프롬프트 템플릿 실습' : 'Prompt Engineering → Prompt Template Practice'}</p>
                    <ul>
                      <li>{ko ? '학습 목표: 효과적인 프롬프트 설계 역량' : 'Goal: Effective prompt design capability'}</li>
                      <li>{ko ? '예상 소요: 2시간' : 'Estimated time: 2 hours'}</li>
                    </ul>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #A23B72' }}>
                    <h4><i className="fa-solid fa-compass-drafting" aria-hidden="true" /> Stage 3: {ko ? '설계 실습' : 'Design Practice'}</h4>
                    <p>{ko ? '업무 분해 방법론 → 실습자료 활용 → Agent 설계 캔버스' : 'Task Decomposition → Practice Materials → Agent Design Canvas'}</p>
                    <ul>
                      <li>{ko ? '학습 목표: 자신의 업무를 Agent로 설계' : 'Goal: Design your own work as an Agent'}</li>
                      <li>{ko ? '예상 소요: 2.5시간' : 'Estimated time: 2.5 hours'}</li>
                    </ul>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #F18F01' }}>
                    <h4><i className="fa-solid fa-rocket" aria-hidden="true" /> Stage 4: {ko ? '심화 및 확장' : 'Advanced & Extension'}</h4>
                    <p>{ko ? '심화 개념 → 산업 사례 연구 → 실행안 구체화' : 'Advanced Concepts → Industry Cases → Action Plan Development'}</p>
                    <ul>
                      <li>{ko ? '학습 목표: 실무 적용 가능한 실행안 수립' : 'Goal: Develop actionable implementation plans'}</li>
                      <li>{ko ? '예상 소요: 1.5시간' : 'Estimated time: 1.5 hours'}</li>
                    </ul>
                  </div>
                </div>

                <h3>{ko ? '전체 콘텐츠 바로가기' : 'All Content Quick Links'}</h3>
                <div className="framework-grid">
                  <div className="framework-item">
                    <h4><Link to="/course"><i className="fa-solid fa-book-open" aria-hidden="true" /> {ko ? '과정소개' : 'Course Overview'}</Link></h4>
                    <p>{ko ? '워크숍의 목적, 대상, 기대효과 안내' : 'Workshop purpose, audience, expected outcomes'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/course"><i className="fa-solid fa-list-check" aria-hidden="true" /> {ko ? '커리큘럼' : 'Curriculum'}</Link></h4>
                    <p>{ko ? '8시간 기본과정부터 프로젝트형 확장까지' : 'From 8-hour basic to project extensions'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/tools"><i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" /> {ko ? '실습도구' : 'Practice Tools'}</Link></h4>
                    <p>{ko ? 'AI 도구와 실습 환경 소개' : 'AI tools and practice environment introduction'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/materials"><i className="fa-solid fa-file-lines" aria-hidden="true" /> {ko ? '실습자료' : 'Practice Materials'}</Link></h4>
                    <p>{ko ? '워크시트, 캔버스, 템플릿' : 'Worksheets, canvas, templates'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/prompts"><i className="fa-solid fa-terminal" aria-hidden="true" /> {ko ? '프롬프트 템플릿' : 'Prompt Templates'}</Link></h4>
                    <p>{ko ? '목적별 프롬프트 설계 가이드' : 'Purpose-built prompt design guides'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/cases"><i className="fa-solid fa-building" aria-hidden="true" /> {ko ? '산업별 사례' : 'Industry Cases'}</Link></h4>
                    <p>{ko ? '공공기관, 발전사, 기업, 대학 사례' : 'Public, power, enterprise, university cases'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/results"><i className="fa-solid fa-clipboard-check" aria-hidden="true" /> {ko ? '결과물 예시' : 'Result Examples'}</Link></h4>
                    <p>{ko ? '교육 산출물 예시 모음' : 'Education output examples collection'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><Link to="/faq"><i className="fa-solid fa-circle-question" aria-hidden="true" /> FAQ</Link></h4>
                    <p>{ko ? '자주 묻는 질문과 답변' : 'Frequently asked questions and answers'}</p>
                  </div>
                </div>

                <div className="info-box tip">
                  <h4>{ko ? '지금 시작하세요!' : 'Start Now!'}</h4>
                  <p>
                    {ko
                      ? 'AI Agent 기반 업무혁신의 첫걸음을 내딛어 보세요. 이론 학습부터 실습, 프로젝트 설계까지 본 플랫폼이 함께합니다.'
                      : 'Take your first step in AI Agent-based work innovation. From theory to practice to project design, this platform is with you.'}
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '32px' }}>
                  <Link to="/course" className="btn-primary" style={{ display: 'inline-block', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
                    {ko ? '과정 살펴보기 →' : 'Explore Courses →'}
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
