import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import SidebarNav from '../../components/SidebarNav';

const SIDEBAR_GROUPS = [
  {
    id: 'group-course', labelKo: '과정소개', labelEn: 'Course', icon: 'fa-book-open',
    items: [
      { id: 'overview', titleKo: '과정 개요', titleEn: 'Course Overview', icon: 'fa-book-open' },
      { id: 'objectives', titleKo: '교육 목적', titleEn: 'Objectives', icon: 'fa-bullseye' },
      { id: 'targets', titleKo: '주요 대상', titleEn: 'Target Audience', icon: 'fa-users' },
      { id: 'outcomes', titleKo: '기대효과', titleEn: 'Expected Outcomes', icon: 'fa-chart-line' },
      { id: 'why', titleKo: '왜 이 과정인가', titleEn: 'Why This Course?', icon: 'fa-star' },
      { id: 'problems', titleKo: '어떤 문제를 해결하는가', titleEn: 'What Problems?', icon: 'fa-circle-question' },
    ],
  },
  {
    id: 'group-curriculum', labelKo: '커리큘럼', labelEn: 'Curriculum', icon: 'fa-graduation-cap',
    items: [
      { id: 'basic-8h', titleKo: '8시간 기본과정', titleEn: '8-Hour Basic', icon: 'fa-clock' },
      { id: 'special-4h', titleKo: '4시간 특강형', titleEn: '4-Hour Special', icon: 'fa-bolt' },
      { id: 'advanced-16h', titleKo: '16시간 심화형', titleEn: '16-Hour Advanced', icon: 'fa-graduation-cap' },
      { id: 'project', titleKo: '프로젝트형 확장과정', titleEn: 'Project Extension', icon: 'fa-diagram-project' },
    ],
  },
];

const SESSIONS_8H = [
  {
    num: 1,
    titleKo: 'AI Agent의 이해와 업무혁신',
    titleEn: 'Understanding AI Agent & Work Innovation',
    hours: '1H',
    typeKo: '강의',
    typeEn: 'Lecture',
    descKo: '생성형 AI와 AI Agent의 차이를 이해하고, 업무혁신 관점에서의 활용 가능성을 탐색합니다. 국내외 AI Agent 도입 사례를 통해 실무 적용의 구체적 방향을 제시합니다.',
    descEn: 'Understand the difference between generative AI and AI Agent, explore work innovation possibilities. Present practical directions through domestic and international AI Agent adoption cases.',
    icon: 'fa-brain',
  },
  {
    num: 2,
    titleKo: '고급 프롬프트 엔지니어링',
    titleEn: 'Advanced Prompt Engineering',
    hours: '1H',
    typeKo: '강의+실습',
    typeEn: 'Lecture + Practice',
    descKo: '역할 부여, 단계적 지시, 출력 형식 지정, 조건 설정 등 고급 프롬프트 기법을 학습하고 실습합니다.',
    descEn: 'Learn and practice advanced prompt techniques including role assignment, step-by-step instructions, output formatting, and conditional settings.',
    icon: 'fa-pencil-ruler',
  },
  {
    num: 3,
    titleKo: 'AI Agent 기반 리서치 방법론',
    titleEn: 'AI Agent-Based Research Methodology',
    hours: '1H',
    typeKo: '강의+실습',
    typeEn: 'Lecture + Practice',
    descKo: 'Perplexity, Genspark, Gemini 등을 활용한 체계적 리서치 방법론을 실습하고, 결과를 구조화하는 방법을 학습합니다.',
    descEn: 'Practice systematic research methodology using Perplexity, Genspark, Gemini, and learn how to structure results.',
    icon: 'fa-magnifying-glass-chart',
  },
  {
    num: 4,
    titleKo: '업무분해와 자동화 아이디어 발굴',
    titleEn: 'Task Decomposition & Automation Ideation',
    hours: '1H',
    typeKo: '워크숍',
    typeEn: 'Workshop',
    descKo: '자신의 업무를 AI 관점에서 분해하고, 자동화 가능한 영역을 식별하여 아이디어를 발굴합니다.',
    descEn: 'Decompose your own work from an AI perspective, identify automatable areas, and develop ideas.',
    icon: 'fa-sitemap',
  },
  {
    num: 5,
    titleKo: '나만의 AI Agent 설계',
    titleEn: 'Design Your Own AI Agent',
    hours: '1H',
    typeKo: '워크숍',
    typeEn: 'Workshop',
    descKo: 'Agent 설계 캔버스를 활용하여 나만의 AI Agent를 설계합니다. 역할, 입력, 출력, 도구, 워크플로우를 정의합니다.',
    descEn: 'Design your own AI Agent using the Agent design canvas. Define roles, inputs, outputs, tools, and workflows.',
    icon: 'fa-robot',
  },
  {
    num: 6,
    titleKo: 'AI Agent 구축 체험',
    titleEn: 'AI Agent Building Experience',
    hours: '1H',
    typeKo: '실습',
    typeEn: 'Practice',
    descKo: 'ChatGPT GPTs, Claude Projects 등을 활용하여 설계한 Agent를 실제로 구축하고 테스트합니다.',
    descEn: 'Build and test your designed Agent using ChatGPT GPTs, Claude Projects, and similar tools.',
    icon: 'fa-hammer',
  },
  {
    num: 7,
    titleKo: '아이디어를 실행안으로 구체화하기',
    titleEn: 'From Ideas to Action Plans',
    hours: '1H',
    typeKo: '워크숍',
    typeEn: 'Workshop',
    descKo: '발굴한 아이디어를 절차, 자원, 일정, 리스크까지 포함한 실행 가능한 프로젝트로 구체화합니다.',
    descEn: 'Concretize ideas into executable projects with procedures, resources, timelines, and risk assessments.',
    icon: 'fa-rocket',
  },
  {
    num: 8,
    titleKo: '결과 공유와 현업 적용 로드맵',
    titleEn: 'Results Sharing & Roadmap',
    hours: '1H',
    typeKo: '발표+피드백',
    typeEn: 'Presentation + Feedback',
    descKo: '팀별 결과물을 발표하고 상호 피드백을 교환합니다. 현업 복귀 후 적용할 수 있는 구체적 로드맵을 수립합니다.',
    descEn: 'Present team results and exchange feedback. Establish a concrete roadmap applicable upon returning to work.',
    icon: 'fa-presentation-screen',
  },
];

const getTypeBadgeClass = (typeKo) => {
  if (typeKo === '강의') return 'lecture';
  if (typeKo.includes('실습') || typeKo.includes('강의+실습')) return 'practice';
  if (typeKo === '워크숍') return 'workshop';
  return 'presentation';
};

export default function CoursePage() {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
  const ko = language === 'ko';

  return (
    <div className="content-page">
      <SEOHead title={t('course.title')} description={t('course.subtitle')} path="/course" />

      <div className="page-header">
        <div className="container">
          <h1>{t('course.title')}</h1>
          <p className="page-desc">{t('course.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="content-page-layout">
          <SidebarNav
            groups={SIDEBAR_GROUPS}
            activeId={activeSection}
            onSelect={setActiveSection}
            headingKo="목차"
            headingEn="Contents"
          />

          <div className="content-main">
            {activeSection === 'overview' && (
              <div className="content-card">
                <h2>{ko ? '과정 개요' : 'Course Overview'}</h2>
                <p>{ko
                  ? '본 과정은 「생성형 AI Agent 기반 업무혁신 워크숍」으로, 8시간 집중 실습형 과정입니다. 단순한 AI 도구 소개가 아니라, 참가자 스스로가 자신의 업무를 AI Agent 관점에서 재구성하고 실행 가능한 프로젝트로 설계하는 것을 목표로 합니다.'
                  : 'This is an "AI Agent-Based Work Innovation Workshop" — an intensive 8-hour hands-on course. Rather than a simple AI tool introduction, participants restructure their own work from an AI Agent perspective and design executable projects.'}
                </p>

                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-clock" aria-hidden="true" /> {ko ? '교육 시간' : 'Duration'}</h4>
                    <p>{ko ? '8시간 (기본과정) / 4시간, 16시간, 프로젝트형 확장 가능' : '8 hours (basic) / expandable to 4h, 16h, project-based'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                    <h4><i className="fa-solid fa-chalkboard-user" aria-hidden="true" /> {ko ? '교육 방식' : 'Format'}</h4>
                    <p>{ko ? '이론 30% + 실습/워크숍 70%' : 'Theory 30% + Practice/Workshop 70%'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                    <h4><i className="fa-solid fa-users" aria-hidden="true" /> {ko ? '적정 인원' : 'Group Size'}</h4>
                    <p>{ko ? '15~30명 (팀 기반 워크숍 운영)' : '15-30 participants (team-based workshops)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                    <h4><i className="fa-solid fa-laptop" aria-hidden="true" /> {ko ? '준비물' : 'Requirements'}</h4>
                    <p>{ko ? '노트북, ChatGPT/Claude 계정 (무료 가능)' : 'Laptop, ChatGPT/Claude account (free tier OK)'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'objectives' && (
              <div className="content-card">
                <h2>{ko ? '교육 목적' : 'Objectives'}</h2>
                <p>{ko ? '본 과정은 다음 5가지 핵심 목표를 달성하기 위해 설계되었습니다.' : 'This course is designed to achieve the following 5 core objectives.'}</p>
                <ol>
                  <li>
                    <strong>{ko ? 'AI Agent 개념 이해' : 'Understand AI Agent Concepts'}</strong>
                    <p>{ko ? '생성형 AI와 AI Agent의 차이를 이해하고, 업무혁신 관점에서의 가능성을 파악합니다.' : 'Understand the difference between generative AI and AI Agent, and identify possibilities from a work innovation perspective.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? '고급 프롬프트 역량 강화' : 'Enhance Advanced Prompt Skills'}</strong>
                    <p>{ko ? '역할 부여, 단계적 지시, 조건 설정 등 고급 프롬프트 엔지니어링 기법을 습득합니다.' : 'Master advanced prompt engineering techniques including role assignment, step-by-step instructions, and conditional settings.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? '업무 분해 및 자동화 설계' : 'Task Decomposition & Automation Design'}</strong>
                    <p>{ko ? '자신의 업무를 AI 관점에서 분해하고, 자동화 가능한 영역을 식별합니다.' : 'Decompose your work from an AI perspective and identify areas suitable for automation.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? 'AI Agent 설계 체험' : 'AI Agent Design Experience'}</strong>
                    <p>{ko ? 'Agent 설계 캔버스를 활용하여 나만의 AI Agent를 설계하고 구축을 체험합니다.' : 'Use the Agent design canvas to design your own AI Agent and experience building it.'}</p>
                  </li>
                  <li>
                    <strong>{ko ? '실행안 구체화' : 'Action Plan Development'}</strong>
                    <p>{ko ? '아이디어를 절차, 자원, 리스크까지 포함한 실행 가능한 프로젝트로 구체화합니다.' : 'Concretize ideas into executable projects including procedures, resources, and risk assessments.'}</p>
                  </li>
                </ol>
              </div>
            )}

            {activeSection === 'targets' && (
              <div className="content-card">
                <h2>{ko ? '주요 대상' : 'Target Audience'}</h2>
                <p>{ko ? '이 과정은 다음과 같은 분들을 위해 설계되었습니다.' : 'This course is designed for the following audiences.'}</p>

                <div className="framework-grid">
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-building-columns" aria-hidden="true" /> {ko ? '공공기관 혁신 담당자' : 'Public Institution Innovation Managers'}</h4>
                    <p>{ko ? '디지털 전환 및 업무 자동화 추진을 담당하는 공공기관 실무자' : 'Public sector practitioners responsible for digital transformation and work automation'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-bolt" aria-hidden="true" /> {ko ? '발전사 및 에너지 기업 실무자' : 'Power & Energy Practitioners'}</h4>
                    <p>{ko ? '한국중부발전, 남부발전 등 발전 공기업의 현업 담당자' : 'Field practitioners at power companies like KOMIPO, KOSPO, etc.'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-microchip" aria-hidden="true" /> {ko ? 'AX 추진 담당자' : 'AX (AI Transformation) Leaders'}</h4>
                    <p>{ko ? 'AI 전환(AX)을 기획하고 추진하는 기업/기관 담당자' : 'Corporate/institutional managers planning and driving AI transformation'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-user-tie" aria-hidden="true" /> {ko ? '관리자 및 중간실무자' : 'Managers & Mid-Level Practitioners'}</h4>
                    <p>{ko ? '팀 운영 및 업무 효율화에 AI를 접목하고자 하는 관리자' : 'Managers looking to integrate AI into team operations and work efficiency'}</p>
                  </div>
                  <div className="framework-item">
                    <h4><i className="fa-solid fa-users" aria-hidden="true" /> {ko ? '비개발 직군' : 'Non-Developer Roles'}</h4>
                    <p>{ko ? '코딩 없이 AI를 업무에 연결하고 싶은 일반 실무자' : 'General practitioners who want to connect AI to work without coding'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'outcomes' && (
              <div className="content-card">
                <h2>{ko ? '기대효과' : 'Expected Outcomes'}</h2>

                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? 'AI Agent 활용 역량 확보' : 'AI Agent Competency'}</h4>
                    <p>{ko ? '단순 질의응답을 넘어 리서치, 문서화, 검토, 자동화에 AI를 활용하는 역량을 확보합니다.' : 'Gain competency to use AI beyond simple Q&A for research, documentation, review, and automation.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                    <h4>{ko ? '업무 자동화 아이디어 도출' : 'Automation Idea Generation'}</h4>
                    <p>{ko ? '자신의 업무에서 AI Agent로 자동화할 수 있는 구체적인 영역을 발굴합니다.' : 'Identify specific areas in your work that can be automated with AI Agents.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                    <h4>{ko ? '실행 가능한 프로젝트 설계' : 'Executable Project Design'}</h4>
                    <p>{ko ? '아이디어를 절차, 자원, 일정이 포함된 실행 가능한 프로젝트로 구체화합니다.' : 'Concretize ideas into executable projects with procedures, resources, and timelines.'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                    <h4>{ko ? '조직 내 AI 확산 기반 마련' : 'Foundation for Organizational AI Adoption'}</h4>
                    <p>{ko ? '교육 결과물을 활용하여 조직 내 AI Agent 도입 및 확산의 토대를 마련합니다.' : 'Use training outcomes to lay the groundwork for AI Agent adoption and expansion within the organization.'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'why' && (
              <div className="content-card">
                <h2>{ko ? '왜 이 과정인가' : 'Why This Course?'}</h2>
                <p>{ko
                  ? '현재 대부분의 AI 교육은 "도구 사용법"에 초점을 맞추고 있습니다. ChatGPT에 질문하는 법, 이미지를 생성하는 법을 알려주지만, 정작 "내 업무에 어떻게 적용할 것인가"에 대한 답을 주지 못합니다.'
                  : 'Most current AI training focuses on "how to use tools." They teach how to ask ChatGPT questions or generate images, but fail to answer "how to apply this to my actual work."'}
                </p>
                <p>{ko
                  ? '이 과정은 다릅니다. AI를 업무 관점에서 바라보고, 자신의 업무를 AI Agent 시각으로 재구성하며, 실제로 실행 가능한 프로젝트를 설계하는 것까지 나아갑니다.'
                  : 'This course is different. It views AI from a work perspective, restructures your tasks through an AI Agent lens, and goes all the way to designing actually executable projects.'}
                </p>

                <div className="info-box tip">
                  <h4>{ko ? '핵심 차별점' : 'Key Differentiators'}</h4>
                  <p>{ko ? '- 도구 체험이 아닌 업무 혁신 관점의 교육' : '- Education from a work innovation perspective, not just tool experience'}</p>
                  <p>{ko ? '- 이론이 아닌 "내 업무"를 소재로 한 실습' : '- Practice using "my actual work" as material, not theory'}</p>
                  <p>{ko ? '- 아이디어 발산이 아닌 실행안 구체화까지' : '- Goes beyond ideation to concrete action plan development'}</p>
                  <p>{ko ? '- 공통형 구조로 어떤 조직에서든 재사용 가능' : '- Universal structure reusable in any organization'}</p>
                </div>
              </div>
            )}

            {activeSection === 'problems' && (
              <div className="content-card">
                <h2>{ko ? '어떤 문제를 해결하는가' : 'What Problems Does It Solve?'}</h2>

                <h3>{ko ? '1. AI를 알지만 업무에 못 쓰는 문제' : '1. Knowing AI But Not Using It at Work'}</h3>
                <p>{ko
                  ? 'ChatGPT로 간단한 질문은 할 수 있지만, 실제 업무 보고서, 리서치, 기획에 체계적으로 활용하지 못하는 상황을 해결합니다.'
                  : 'Solves the problem of being able to ask simple questions to ChatGPT but not systematically utilizing it for actual work reports, research, and planning.'}
                </p>

                <h3>{ko ? '2. AI 교육 후 현업 적용이 안 되는 문제' : '2. No Real-World Application After AI Training'}</h3>
                <p>{ko
                  ? '"교육은 좋았는데 돌아가면 어떻게 써야 할지 모르겠다"는 피드백을 해결합니다. 교육 과정 자체가 자신의 업무를 소재로 진행됩니다.'
                  : 'Solves the feedback of "the training was great but I don\'t know how to use it when I go back." The course itself uses your own work as material.'}
                </p>

                <h3>{ko ? '3. 조직별 맞춤이 어려운 문제' : '3. Difficulty in Organization-Specific Customization'}</h3>
                <p>{ko
                  ? '공통형 플랫폼 구조로, 기관별 사례만 교체하면 즉시 활용할 수 있어 맞춤형 교육이 용이합니다.'
                  : 'The universal platform structure allows instant customization by simply swapping organization-specific case studies.'}
                </p>

                <h3>{ko ? '4. 아이디어는 많지만 실행이 안 되는 문제' : '4. Lots of Ideas But No Execution'}</h3>
                <p>{ko
                  ? '아이디어 단계에서 멈추지 않고, 절차, 자원, 리스크까지 포함한 실행 계획서로 구체화하는 과정을 포함합니다.'
                  : 'Includes the process of not stopping at the idea stage but concretizing into action plans with procedures, resources, and risk assessments.'}
                </p>

                <div className="info-box warning">
                  <h4>{ko ? '참고' : 'Note'}</h4>
                  <p>{ko
                    ? '이 과정은 코딩이나 개발 기술을 필요로 하지 않습니다. 비개발 직군도 충분히 참여할 수 있는 실무 중심 교육입니다.'
                    : 'This course does not require coding or development skills. It is a practice-centered education accessible to non-developer roles.'}
                  </p>
                </div>
              </div>
            )}

            {/* Curriculum Sections */}
            {activeSection === 'basic-8h' && (
              <div className="content-card">
                <h2>{ko ? '8시간 기본과정 커리큘럼' : '8-Hour Basic Course Curriculum'}</h2>
                <p>{ko
                  ? '생성형 AI Agent 기반 업무혁신 워크숍의 기본 과정입니다. 이론 30%, 실습 70%로 구성되어 있습니다.'
                  : 'The basic course for the AI Agent-Based Work Innovation Workshop. Composed of 30% theory and 70% practice.'}
                </p>

                <div className="info-box tip">
                  <h4><i className="fa-solid fa-scale-balanced" aria-hidden="true" /> {ko ? '운영 원칙' : 'Operating Principle'}</h4>
                  <p>{ko ? '이론 30% : 실습·워크숍 70% — 체험 중심 학습으로 현업 적용 가능성을 극대화합니다.' : 'Theory 30% : Practice/Workshop 70% — Maximizing real-world applicability through experience-centered learning.'}</p>
                </div>

                <div className="curriculum-sessions">
                  {SESSIONS_8H.map((session) => (
                    <div key={session.num} className="curriculum-session-card">
                      <div className="curriculum-session-header">
                        <div className="curriculum-session-num">
                          {String(session.num).padStart(2, '0')}
                        </div>
                        <div className="curriculum-session-meta">
                          <span className="curriculum-session-hours">
                            <i className="fa-regular fa-clock" aria-hidden="true" /> {session.hours}
                          </span>
                          <span className={`curriculum-session-type ${getTypeBadgeClass(session.typeKo)}`}>
                            {ko ? session.typeKo : session.typeEn}
                          </span>
                        </div>
                      </div>
                      <h4 className="curriculum-session-title">
                        <i className={`fa-solid ${session.icon}`} aria-hidden="true" /> {ko ? session.titleKo : session.titleEn}
                      </h4>
                      <p className="curriculum-session-desc">
                        {ko ? session.descKo : session.descEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'special-4h' && (
              <div className="content-card">
                <h2>{ko ? '4시간 특강형' : '4-Hour Special Lecture'}</h2>
                <p>{ko
                  ? '핵심 내용을 압축하여 전달하는 특강 형식의 과정입니다. AI Agent 이해, 프롬프트 설계, 업무 분해 아이디어 도출에 집중합니다.'
                  : 'A condensed special lecture format focusing on AI Agent understanding, prompt design, and task decomposition ideation.'}
                </p>

                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? '1교시: AI Agent 개론' : 'Session 1: AI Agent Introduction'}</h4>
                    <p>{ko ? '생성형 AI와 Agent 개념, 업무혁신 사례 (1시간, 강의)' : 'GenAI and Agent concepts, work innovation cases (1h, Lecture)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                    <h4>{ko ? '2교시: 프롬프트 실습' : 'Session 2: Prompt Practice'}</h4>
                    <p>{ko ? '고급 프롬프트 기법과 리서치 실습 (1시간, 실습)' : 'Advanced prompt techniques and research practice (1h, Practice)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                    <h4>{ko ? '3교시: 업무 분해' : 'Session 3: Task Decomposition'}</h4>
                    <p>{ko ? '자신의 업무 분해 및 자동화 아이디어 발굴 (1시간, 워크숍)' : 'Decompose your tasks and develop automation ideas (1h, Workshop)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                    <h4>{ko ? '4교시: 공유 및 정리' : 'Session 4: Sharing & Summary'}</h4>
                    <p>{ko ? '아이디어 공유, 피드백, 적용 로드맵 정리 (1시간, 발표)' : 'Idea sharing, feedback, roadmap summary (1h, Presentation)'}</p>
                  </div>
                </div>

                <div className="info-box">
                  <h4>{ko ? '적합한 조직' : 'Suitable For'}</h4>
                  <p>{ko
                    ? '임원/관리자 대상 인사이트 전달, 전사 교육의 사전 탐색, 단시간 집중 워크숍이 필요한 조직'
                    : 'Executive/manager insight delivery, pre-exploration for company-wide training, organizations needing short intensive workshops'}
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'advanced-16h' && (
              <div className="content-card">
                <h2>{ko ? '16시간 심화형' : '16-Hour Advanced Course'}</h2>
                <p>{ko
                  ? '8시간 기본과정을 확장한 심화 과정으로, 2일간 진행됩니다. Agent 설계와 구축을 더 깊이 있게 다루며, 실제 프로젝트 수준의 결과물을 도출합니다.'
                  : 'An extended version of the 8-hour basic course, conducted over 2 days. Covers Agent design and building in greater depth, producing project-level deliverables.'}
                </p>

                <h3>{ko ? 'Day 1 (8시간): 기본과정 + 심화 리서치' : 'Day 1 (8h): Basic Course + Deep Research'}</h3>
                <ul>
                  <li>{ko ? '8시간 기본과정 전체 내용' : 'Full 8-hour basic course content'}</li>
                  <li>{ko ? '멀티소스 리서치 심화 실습' : 'Multi-source research deep practice'}</li>
                  <li>{ko ? '리서치 결과 구조화 및 시각화' : 'Research result structuring and visualization'}</li>
                </ul>

                <h3>{ko ? 'Day 2 (8시간): Agent 설계 심화 + 프로젝트' : 'Day 2 (8h): Advanced Agent Design + Project'}</h3>
                <ul>
                  <li>{ko ? 'Agent 워크플로우 상세 설계' : 'Detailed Agent workflow design'}</li>
                  <li>{ko ? '다중 Agent 연계 설계' : 'Multi-Agent integration design'}</li>
                  <li>{ko ? '실행 계획서 작성 및 발표 준비' : 'Action plan writing and presentation preparation'}</li>
                  <li>{ko ? '팀 발표 및 전문가 피드백' : 'Team presentations and expert feedback'}</li>
                </ul>

                <div className="info-box tip">
                  <h4>{ko ? '기대 산출물' : 'Expected Deliverables'}</h4>
                  <p>{ko
                    ? '리서치 보고서, Agent 설계서, 실행 계획서, 발표자료 등 4종 이상의 실무 활용 가능 산출물'
                    : 'Research report, Agent design document, action plan, presentation materials — 4+ practical deliverables'}
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'project' && (
              <div className="content-card">
                <h2>{ko ? '프로젝트형 확장과정' : 'Project-Based Extension'}</h2>
                <p>{ko
                  ? '16시간 심화 과정 이후 4~8주간 진행되는 프로젝트형 확장 과정입니다. 실제 조직의 업무 과제를 선정하여 AI Agent 기반 솔루션을 설계하고 시범 운영합니다.'
                  : 'A project-based extension conducted over 4-8 weeks after the 16-hour advanced course. Select actual organizational tasks and design AI Agent-based solutions for pilot operation.'}
                </p>

                <h3>{ko ? '과정 구성' : 'Structure'}</h3>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4>{ko ? '1주차: 과제 선정' : 'Week 1: Task Selection'}</h4>
                    <p>{ko ? '조직 내 AI Agent 적용 과제 선정 및 범위 확정' : 'Select AI Agent application tasks and define scope'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                    <h4>{ko ? '2~3주차: 설계 및 구축' : 'Week 2-3: Design & Build'}</h4>
                    <p>{ko ? 'Agent 상세 설계 및 프로토타입 구축' : 'Detailed Agent design and prototype building'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                    <h4>{ko ? '4~6주차: 시범 운영' : 'Week 4-6: Pilot Operation'}</h4>
                    <p>{ko ? '현업에서 시범 운영 및 데이터 수집' : 'Pilot operation in the field and data collection'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                    <h4>{ko ? '7~8주차: 평가 및 확산' : 'Week 7-8: Evaluation & Expansion'}</h4>
                    <p>{ko ? '성과 평가, 개선안 도출, 조직 확산 계획 수립' : 'Performance evaluation, improvement proposals, expansion planning'}</p>
                  </div>
                </div>

                <div className="info-box">
                  <h4>{ko ? '멘토링 지원' : 'Mentoring Support'}</h4>
                  <p>{ko
                    ? '프로젝트 기간 중 주 1회 온라인 멘토링 세션이 제공되며, 전문 멘토가 진행 상황을 점검하고 피드백을 제공합니다.'
                    : 'Weekly online mentoring sessions are provided during the project period, with expert mentors checking progress and providing feedback.'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
