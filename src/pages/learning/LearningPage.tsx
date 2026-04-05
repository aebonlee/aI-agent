import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import SidebarNav from '../../components/SidebarNav';

const TOOLS = [
  {
    id: 'chatgpt',
    nameKo: 'ChatGPT (GPT-4o)', nameEn: 'ChatGPT (GPT-4o)',
    categoryKo: '대화형 AI Agent', categoryEn: 'Conversational AI Agent',
    descKo: '자연어 대화 기반의 범용 AI 도구. 문서 작성, 코드 생성, 데이터 분석, 아이디어 구체화 등 다양한 업무에 활용 가능합니다. GPTs 기능을 통해 맞춤형 Agent 구축이 가능합니다.',
    descEn: 'General-purpose AI tool based on natural language conversation. Applicable to document writing, code generation, data analysis, and idea development. Custom Agent building available through GPTs.',
    url: 'https://chat.openai.com', icon: 'fa-comments', color: '#10A37F',
    featuresKo: ['GPTs를 통한 맞춤형 Agent 생성', 'Code Interpreter로 데이터 분석 및 시각화', 'DALL-E 기반 이미지 생성', 'Web Browsing으로 실시간 정보 검색', 'Advanced Data Analysis로 파일 처리'],
    featuresEn: ['Custom Agent creation via GPTs', 'Data analysis & visualization with Code Interpreter', 'Image generation with DALL-E', 'Real-time info search with Web Browsing', 'File processing with Advanced Data Analysis'],
    tipsKo: ['역할 부여 시 "당신은 ~분야 전문가입니다"로 시작하면 답변 품질이 향상됩니다', 'Custom Instructions에 조직 컨텍스트를 저장하면 매번 배경 설명을 반복할 필요가 없습니다', 'GPTs에 지식 파일을 업로드하면 조직 전용 Agent를 만들 수 있습니다', '"단계별로 생각하세요(Think step by step)" 프롬프트는 복잡한 문제에서 정확도를 높입니다', '출력 형식을 명확히 지정하세요: 표, 마크다운, 번호 목록 등'],
    tipsEn: ['Start with "You are an expert in ~" for better response quality', 'Save organizational context in Custom Instructions to avoid repeating background info', 'Upload knowledge files to GPTs to create organization-specific Agents', '"Think step by step" prompt improves accuracy for complex problems', 'Specify output format clearly: table, markdown, numbered list, etc.'],
    promptsKo: [
      { title: '회의자료 초안 생성', prompt: '당신은 [조직명]의 경영기획 전문가입니다. 다음 안건에 대한 회의자료 초안을 작성해주세요.\n\n안건: [안건명]\n참석자: [참석자]\n형식: 제목, 배경, 현황, 제안사항, 논의사항, 일정 순서로 작성\n분량: A4 2~3장\n톤: 공식적이고 간결하게' },
      { title: '업무 자동화 아이디어 도출', prompt: '당신은 업무혁신 컨설턴트입니다. 다음 업무 프로세스를 분석하고 AI Agent로 자동화할 수 있는 영역을 식별해주세요.\n\n업무: [업무명]\n현재 프로세스: [단계별 설명]\n\n각 단계별로 자동화 가능 여부, 적합한 AI 도구, 예상 시간 절감율을 표로 정리해주세요.' },
    ],
    promptsEn: [
      { title: 'Meeting Document Draft', prompt: 'You are a management planning expert at [Organization]. Please draft meeting materials for the following agenda.\n\nAgenda: [Topic]\nAttendees: [Attendees]\nFormat: Title, Background, Status, Proposals, Discussion Points, Schedule\nLength: 2-3 pages\nTone: Formal and concise' },
      { title: 'Task Automation Ideation', prompt: 'You are a work innovation consultant. Analyze the following work process and identify areas that can be automated with AI Agents.\n\nTask: [Task name]\nCurrent process: [Step-by-step description]\n\nFor each step, organize automation feasibility, suitable AI tools, and estimated time savings in a table.' },
    ],
  },
  {
    id: 'claude',
    nameKo: 'Claude (Sonnet/Opus)', nameEn: 'Claude (Sonnet/Opus)',
    categoryKo: '문서 분석 및 구조화', categoryEn: 'Document Analysis & Structuring',
    descKo: '긴 문서 분석, 구조적 글쓰기, 논리적 검토에 강점을 가진 AI. Claude Projects를 통해 전용 Agent 환경을 구성할 수 있습니다.',
    descEn: 'AI with strengths in long document analysis, structural writing, and logical review. Claude Projects enables dedicated Agent environment setup.',
    url: 'https://claude.ai', icon: 'fa-file-lines', color: '#D97706',
    featuresKo: ['Projects로 프로젝트별 전용 컨텍스트 관리', '200K 토큰 컨텍스트로 긴 문서 전체 분석', 'Artifacts를 통한 결과물 실시간 미리보기', '논리적 구조화와 체계적 검토에 뛰어난 성능', '코드 작성 및 수학적 추론 능력'],
    featuresEn: ['Project-specific context management via Projects', 'Full document analysis with 200K token context', 'Real-time preview of outputs through Artifacts', 'Excellent logical structuring and systematic review', 'Code writing and mathematical reasoning capabilities'],
    tipsKo: ['Claude Projects에 조직 문서와 가이드를 업로드하면 조직 맞춤형 답변을 받을 수 있습니다', '긴 보고서는 전체를 붙여넣고 분석을 요청하면 뛰어난 요약 품질을 보여줍니다', 'Artifacts 기능을 활용하면 코드, 문서, 다이어그램 등을 인라인으로 미리 볼 수 있습니다', '복잡한 논리적 검토(계약서, 정책 문서 등)에서 특히 강점을 보입니다', '체계적인 XML 태그 구조로 프롬프트를 작성하면 더 정확한 결과를 얻을 수 있습니다'],
    tipsEn: ['Upload organization docs and guides to Claude Projects for customized responses', 'Paste entire long reports for analysis — Claude excels at summarization', 'Use Artifacts to preview code, documents, and diagrams inline', 'Particularly strong in complex logical reviews (contracts, policy documents)', 'Structure prompts with XML tags for more precise results'],
    promptsKo: [
      { title: '정책 문서 분석 및 시사점 도출', prompt: '다음 정책 문서를 분석하고 우리 조직에 대한 시사점을 도출해주세요.\n\n[문서 전문 또는 핵심 내용 붙여넣기]\n\n분석 형식:\n1. 핵심 요약 (3줄)\n2. 주요 변경사항 (표)\n3. 우리 조직 영향도 (상/중/하)\n4. 대응 방안 (단기/중기)' },
      { title: '보고서 구조 검토 및 개선', prompt: '다음 보고서의 논리적 구조를 검토하고 개선 제안을 해주세요.\n\n[보고서 내용 붙여넣기]\n\n검토 항목:\n- 논리적 흐름의 일관성\n- 근거 자료의 충분성\n- 결론과 제안의 타당성\n- 독자 관점에서의 이해도\n\n개선 후 수정된 구조를 제시해주세요.' },
    ],
    promptsEn: [
      { title: 'Policy Document Analysis', prompt: 'Analyze the following policy document and derive implications for our organization.\n\n[Paste document content]\n\nFormat:\n1. Key Summary (3 lines)\n2. Major Changes (table)\n3. Impact on Our Organization (High/Medium/Low)\n4. Response Plans (Short-term/Mid-term)' },
      { title: 'Report Structure Review', prompt: 'Review the logical structure of this report and suggest improvements.\n\n[Paste report content]\n\nReview items:\n- Logical flow consistency\n- Evidence sufficiency\n- Conclusion and proposal validity\n- Reader comprehension\n\nPresent the improved structure.' },
    ],
  },
  {
    id: 'gemini',
    nameKo: 'Gemini', nameEn: 'Gemini',
    categoryKo: '검색 기반 리서치', categoryEn: 'Search-Based Research',
    descKo: 'Google 검색 엔진과 연동된 AI 리서치 도구. 최신 정보 검색, 멀티모달(텍스트+이미지) 분석, Google Workspace 연동에 강점이 있습니다.',
    descEn: 'AI research tool integrated with Google Search. Strong in latest information retrieval, multimodal (text+image) analysis, and Google Workspace integration.',
    url: 'https://gemini.google.com', icon: 'fa-diamond', color: '#4285F4',
    featuresKo: ['Google 검색 통합으로 최신 정보 실시간 접근', 'Google Workspace(Gmail, Docs, Drive) 연동', 'Gems를 통한 맞춤형 AI 도우미 생성', '멀티모달 입력(이미지, PDF 분석) 지원', 'Google 생태계와의 원활한 통합'],
    featuresEn: ['Real-time access to latest info via Google Search', 'Google Workspace (Gmail, Docs, Drive) integration', 'Custom AI assistants via Gems', 'Multimodal input (image, PDF analysis) support', 'Seamless integration with Google ecosystem'],
    tipsKo: ['Google Workspace와 연동하면 Gmail, Drive 파일을 기반으로 답변을 생성할 수 있습니다', '최신 뉴스나 실시간 데이터가 필요한 리서치에 특히 유용합니다', 'Gems에 반복 업무 지침을 저장하면 매번 새로 프롬프트를 작성할 필요가 없습니다', '이미지를 업로드하여 차트나 그래프를 분석할 수 있습니다', '구글 독스에서 직접 Gemini를 호출하여 문서 작성을 가속할 수 있습니다'],
    tipsEn: ['Link with Google Workspace to generate responses based on Gmail and Drive files', 'Particularly useful for research requiring latest news or real-time data', 'Save recurring task instructions in Gems to avoid rewriting prompts', 'Upload images to analyze charts and graphs', 'Call Gemini directly from Google Docs to accelerate document writing'],
    promptsKo: [
      { title: '산업 동향 리서치', prompt: '[산업명] 분야의 최신 동향을 조사해주세요.\n\n조사 항목:\n1. 최근 3개월 주요 뉴스 및 이슈\n2. 기술 트렌드 (국내/해외)\n3. 정책 및 규제 변화\n4. 주요 기업 동향\n\n각 항목별로 출처와 날짜를 명시하고, 마지막에 시사점을 정리해주세요.' },
      { title: '경쟁사 분석', prompt: '[업종] 분야에서 [경쟁사명] 3곳의 AI 도입 현황을 조사하고 비교해주세요.\n\n비교 항목: 도입 분야, 활용 도구, 성과, 투자 규모\n형식: 비교표 + 각 기업별 상세 분석\n기간: 최근 1년 내 정보 기준' },
    ],
    promptsEn: [
      { title: 'Industry Trend Research', prompt: 'Research the latest trends in the [industry] sector.\n\nResearch items:\n1. Major news & issues in past 3 months\n2. Technology trends (domestic/international)\n3. Policy & regulatory changes\n4. Major company activities\n\nCite sources and dates for each item, and summarize implications at the end.' },
      { title: 'Competitor Analysis', prompt: 'Research and compare AI adoption status of 3 competitors in the [industry] sector.\n\nComparison items: Adoption areas, tools used, results, investment scale\nFormat: Comparison table + detailed analysis per company\nPeriod: Based on information from the past year' },
    ],
  },
  {
    id: 'genspark',
    nameKo: 'Genspark', nameEn: 'Genspark',
    categoryKo: 'AI 기반 통합 검색', categoryEn: 'AI-Powered Integrated Search',
    descKo: '여러 검색 엔진과 AI를 통합한 리서치 플랫폼. 복잡한 주제에 대한 종합적인 리서치와 요약이 가능하며, 구조화된 결과물을 제공합니다.',
    descEn: 'Research platform integrating multiple search engines and AI. Enables comprehensive research and summarization on complex topics with structured outputs.',
    url: 'https://www.genspark.ai', icon: 'fa-magnifying-glass-chart', color: '#7C3AED',
    featuresKo: ['다중 소스 통합 검색 및 크로스체크', 'Sparkpages로 리서치 결과 자동 구조화', '복잡한 주제에 대한 종합 보고서 생성', '실시간 웹 검색 기반 최신 정보 반영', '시각적으로 정리된 리서치 결과물 제공'],
    featuresEn: ['Multi-source integrated search and cross-checking', 'Auto-structured research results via Sparkpages', 'Comprehensive report generation on complex topics', 'Latest info based on real-time web search', 'Visually organized research deliverables'],
    tipsKo: ['복잡한 주제를 조사할 때 다른 AI 도구의 결과와 크로스체크용으로 활용하세요', 'Sparkpages는 리서치 결과를 자동으로 구조화해주므로 보고서 초안으로 바로 활용할 수 있습니다', '산업 분석, 시장조사, 기술 동향 등 종합적 조사에 특히 효과적입니다', '검색 결과의 출처를 확인하여 신뢰성을 검증하세요', '여러 관점을 비교하는 질문을 하면 균형 잡힌 결과를 얻을 수 있습니다'],
    tipsEn: ['Use for cross-checking results from other AI tools on complex topics', 'Sparkpages auto-structures results — use directly as report drafts', 'Particularly effective for industry analysis, market research, and tech trends', 'Verify credibility by checking sources of search results', 'Ask comparison questions for balanced perspectives'],
    promptsKo: [
      { title: '종합 산업 리서치', prompt: '[산업/기술명]에 대해 종합적으로 조사해주세요. 기술 현황, 시장 규모, 주요 플레이어, 국내외 정책, 향후 전망을 포함해주세요.' },
      { title: '트렌드 비교 분석', prompt: '[주제A]와 [주제B]를 비교 분석해주세요. 각각의 장단점, 적용 사례, 향후 발전 방향을 표 형식으로 정리하고 시사점을 도출해주세요.' },
    ],
    promptsEn: [
      { title: 'Comprehensive Industry Research', prompt: 'Conduct comprehensive research on [industry/technology]. Include technology status, market size, key players, domestic/international policies, and future outlook.' },
      { title: 'Trend Comparison Analysis', prompt: 'Compare and analyze [Topic A] and [Topic B]. Organize pros/cons, application cases, and future directions in table format and derive implications.' },
    ],
  },
  {
    id: 'perplexity',
    nameKo: 'Perplexity', nameEn: 'Perplexity',
    categoryKo: '리서치 특화 AI', categoryEn: 'Research-Specialized AI',
    descKo: '출처 기반 리서치에 특화된 AI 검색 도구. 검색 결과에 출처를 명시하여 신뢰성 있는 리서치가 가능하며, 팔로업 질문으로 심층 탐색이 가능합니다.',
    descEn: 'AI search tool specialized in source-based research. Provides credible research with cited sources and enables deep exploration through follow-up questions.',
    url: 'https://www.perplexity.ai', icon: 'fa-searchengin', color: '#1B9AAA',
    featuresKo: ['모든 답변에 출처(URL) 자동 표시', '팔로업 질문을 통한 심층 탐색', 'Collections로 리서치 주제별 정리', 'Focus 모드로 학술/뉴스/소셜 등 소스 선택', '파일 업로드 기반 분석 지원'],
    featuresEn: ['Auto-citation (URL) on all responses', 'Deep exploration via follow-up questions', 'Topic-based organization with Collections', 'Source selection via Focus mode (Academic/News/Social)', 'File upload-based analysis support'],
    tipsKo: ['Focus 모드에서 "Academic"을 선택하면 학술 논문 기반 리서치가 가능합니다', '팔로업 질문을 연속으로 하면 주제를 점점 깊이 파고들 수 있습니다', 'Collections 기능을 활용하면 프로젝트별로 리서치 히스토리를 관리할 수 있습니다', '출처가 명시되므로 보고서 작성 시 참고문헌 정리가 용이합니다', '"~에 대한 최신 연구 동향을 알려줘"와 같은 리서치 질문에 최적화되어 있습니다'],
    tipsEn: ['Select "Academic" in Focus mode for research paper-based results', 'Chain follow-up questions to progressively deepen topic exploration', 'Use Collections to manage research history by project', 'Citations make it easy to organize references for reports', 'Optimized for research questions like "latest research trends on ~"'],
    promptsKo: [
      { title: '출처 기반 팩트 체크', prompt: '[주장/정보]에 대해 신뢰할 수 있는 출처를 바탕으로 팩트 체크해주세요. 공식 통계, 연구 논문, 정부 발표 자료를 우선 참조해주세요.' },
      { title: '최신 연구 동향 조사', prompt: '[연구 분야]에 대한 최신 연구 동향을 조사해주세요. 최근 1년 내 발표된 주요 논문, 학회 발표, 기술 보고서를 중심으로 정리하고 핵심 시사점을 도출해주세요.' },
    ],
    promptsEn: [
      { title: 'Source-Based Fact Check', prompt: 'Fact-check [claim/information] based on reliable sources. Prioritize official statistics, research papers, and government publications.' },
      { title: 'Latest Research Trends', prompt: 'Research latest trends in [research field]. Focus on major papers, conference presentations, and technical reports published within the past year, and derive key implications.' },
    ],
  },
  {
    id: 'napkin',
    nameKo: 'Napkin AI', nameEn: 'Napkin AI',
    categoryKo: '시각화 도구', categoryEn: 'Visualization Tool',
    descKo: '텍스트 기반의 아이디어를 시각적 다이어그램, 플로우차트, 인포그래픽으로 변환하는 AI 도구. 발표자료 및 보고서의 시각화에 활용합니다.',
    descEn: 'AI tool that transforms text-based ideas into visual diagrams, flowcharts, and infographics. Used for visualizing presentations and reports.',
    url: 'https://www.napkin.ai', icon: 'fa-chart-diagram', color: '#EC4899',
    featuresKo: ['텍스트를 다이어그램으로 자동 변환', '프로세스 플로우차트 생성', '인포그래픽 스타일 시각화', '발표자료용 비주얼 자동 생성', '다양한 레이아웃 및 스타일 선택'],
    featuresEn: ['Auto-convert text to diagrams', 'Process flowchart generation', 'Infographic-style visualization', 'Auto-generate visuals for presentations', 'Various layout and style options'],
    tipsKo: ['다른 AI로 생성한 텍스트 결과물을 Napkin에 붙여넣으면 즉시 시각화할 수 있습니다', '워크플로우나 프로세스 설명을 단계별로 작성하면 깔끔한 플로우차트가 생성됩니다', '비교 분석 결과를 입력하면 비교 다이어그램을 자동으로 만들어줍니다', '발표자료 준비 시 핵심 포인트를 정리한 후 시각화하면 효과적입니다', 'Agent 설계 캔버스의 결과물을 시각화하는 데 활용할 수 있습니다'],
    tipsEn: ['Paste text outputs from other AIs into Napkin for instant visualization', 'Write step-by-step workflow descriptions for clean flowcharts', 'Input comparison analysis for auto-generated comparison diagrams', 'Organize key points before visualization for effective presentations', 'Use to visualize Agent design canvas outputs'],
    promptsKo: [
      { title: 'Agent 워크플로우 시각화', prompt: '다음 AI Agent 워크플로우를 시각적 다이어그램으로 변환해주세요:\n\n1. 사용자가 업무 요청을 입력\n2. Agent가 요청을 분석하고 하위 작업으로 분해\n3. 각 하위 작업에 적합한 도구 선택\n4. 순차적으로 작업 실행\n5. 결과 통합 및 품질 검토\n6. 최종 결과물 제공' },
      { title: '비교 분석 인포그래픽', prompt: '다음 AI 도구 비교 분석을 인포그래픽으로 시각화해주세요:\n\n- ChatGPT: 범용 대화, Agent 구축\n- Claude: 문서 분석, 구조적 글쓰기\n- Gemini: 검색 기반 리서치\n- Perplexity: 출처 기반 팩트체크' },
    ],
    promptsEn: [
      { title: 'Agent Workflow Visualization', prompt: 'Convert this AI Agent workflow into a visual diagram:\n\n1. User submits work request\n2. Agent analyzes request and decomposes into sub-tasks\n3. Select appropriate tools for each sub-task\n4. Execute tasks sequentially\n5. Integrate results and quality review\n6. Deliver final output' },
      { title: 'Comparison Infographic', prompt: 'Visualize this AI tool comparison as an infographic:\n\n- ChatGPT: General conversation, Agent building\n- Claude: Document analysis, structural writing\n- Gemini: Search-based research\n- Perplexity: Source-based fact-checking' },
    ],
  },
];

const SIDEBAR_GROUPS = [
  {
    id: 'group-foundation', labelKo: '기초 이론', labelEn: 'Foundation', icon: 'fa-seedling',
    items: [
      { id: 'overview', titleKo: '학습 안내', titleEn: 'Learning Guide', icon: 'fa-compass' },
      { id: 'ai-basics', titleKo: '생성형 AI의 이해', titleEn: 'Understanding Generative AI', icon: 'fa-microchip' },
      { id: 'ai-agent', titleKo: 'AI Agent 개론', titleEn: 'AI Agent Introduction', icon: 'fa-robot' },
    ],
  },
  {
    id: 'group-core', labelKo: '핵심 역량', labelEn: 'Core Skills', icon: 'fa-pencil-ruler',
    items: [
      { id: 'agent-types', titleKo: 'AI Agent 유형과 구조', titleEn: 'Agent Types & Architecture', icon: 'fa-diagram-project' },
      { id: 'prompt-theory', titleKo: '프롬프트 엔지니어링', titleEn: 'Prompt Engineering Theory', icon: 'fa-pencil-ruler' },
      { id: 'task-decomposition', titleKo: '업무 분해 방법론', titleEn: 'Task Decomposition', icon: 'fa-sitemap' },
    ],
  },
  {
    id: 'group-advanced', labelKo: '심화 학습', labelEn: 'Advanced', icon: 'fa-layer-group',
    items: [
      { id: 'advanced-concepts', titleKo: '심화 개념', titleEn: 'Advanced Concepts', icon: 'fa-layer-group' },
      { id: 'learning-path', titleKo: '학습 로드맵', titleEn: 'Learning Roadmap', icon: 'fa-route' },
    ],
  },
  {
    id: 'group-tools', labelKo: '실습도구', labelEn: 'Practice Tools', icon: 'fa-screwdriver-wrench',
    items: [
      { id: 'tools-overview', titleKo: '도구 개요', titleEn: 'Tools Overview', icon: 'fa-grid-2' },
      { id: 'chatgpt', titleKo: 'ChatGPT (GPT-4o)', titleEn: 'ChatGPT (GPT-4o)', icon: 'fa-comments' },
      { id: 'claude', titleKo: 'Claude (Sonnet/Opus)', titleEn: 'Claude (Sonnet/Opus)', icon: 'fa-file-lines' },
      { id: 'gemini', titleKo: 'Gemini', titleEn: 'Gemini', icon: 'fa-diamond' },
      { id: 'genspark', titleKo: 'Genspark', titleEn: 'Genspark', icon: 'fa-magnifying-glass-chart' },
      { id: 'perplexity', titleKo: 'Perplexity', titleEn: 'Perplexity', icon: 'fa-searchengin' },
      { id: 'napkin', titleKo: 'Napkin AI', titleEn: 'Napkin AI', icon: 'fa-chart-diagram' },
      { id: 'tools-environment', titleKo: '실습 환경 안내', titleEn: 'Practice Environment', icon: 'fa-laptop-code' },
    ],
  },
];

export default function LearningPage() {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
  const ko = language === 'ko';

  const activeTool = TOOLS.find(tool => tool.id === activeSection);

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
          <SidebarNav
            groups={SIDEBAR_GROUPS}
            activeId={activeSection}
            onSelect={setActiveSection}
            headingKo="목차"
            headingEn="Contents"
          />

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
                    <h4><button onClick={() => setActiveSection('tools-overview')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', font: 'inherit', padding: 0 }}><i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" /> {ko ? '실습도구' : 'Practice Tools'}</button></h4>
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

            {/* ===== 실습도구: 도구 개요 ===== */}
            {activeSection === 'tools-overview' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" /> {ko ? '실습도구 개요' : 'Practice Tools Overview'}</h2>
                <p>{ko
                  ? '교육 과정에서 활용하는 6개의 핵심 AI 도구입니다. 각 도구를 클릭하면 상세 정보, 외부 링크, 주요 기능, 유용한 팁, 활용 프롬프트를 확인할 수 있습니다.'
                  : 'These are the 6 core AI tools used in the education program. Click each tool for detailed information, external links, key features, useful tips, and practice prompts.'}
                </p>
                <div className="tools-grid">
                  {TOOLS.map((tool) => (
                    <div
                      key={tool.id}
                      className="tool-card"
                      style={{ cursor: 'pointer', borderTopColor: tool.color }}
                      onClick={() => setActiveSection(tool.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter') setActiveSection(tool.id); }}
                    >
                      <div className="tool-card-header">
                        <div className="tool-icon" style={{ background: `${tool.color}15`, color: tool.color }}>
                          <i className={`fa-solid ${tool.icon}`} aria-hidden="true" />
                        </div>
                        <div className="tool-name-group">
                          <h3>{ko ? tool.nameKo : tool.nameEn}</h3>
                          <span className="tool-category">{ko ? tool.categoryKo : tool.categoryEn}</span>
                        </div>
                      </div>
                      <p className="tool-desc">{ko ? tool.descKo : tool.descEn}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== 실습도구: 개별 도구 상세 ===== */}
            {activeTool && (
              <div className="content-card">
                <h2>
                  <i className={`fa-solid ${activeTool.icon}`} aria-hidden="true" style={{ color: activeTool.color, marginRight: '10px' }} />
                  {ko ? activeTool.nameKo : activeTool.nameEn}
                </h2>
                <p style={{ marginBottom: '4px' }}>
                  <strong>{ko ? '카테고리' : 'Category'}:</strong> {ko ? activeTool.categoryKo : activeTool.categoryEn}
                </p>
                <p>{ko ? activeTool.descKo : activeTool.descEn}</p>

                <a href={activeTool.url} target="_blank" rel="noopener noreferrer" className="tool-external-link">
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                  {activeTool.url}
                </a>

                <h3>{ko ? '주요 기능' : 'Key Features'}</h3>
                <div className="framework-grid">
                  {(ko ? activeTool.featuresKo : activeTool.featuresEn).map((feature, idx) => {
                    const colors = ['#1B3A6B', '#2E86AB', '#A23B72', '#F18F01', '#00855A'];
                    return (
                      <div key={idx} className="framework-item" style={{ borderLeft: `3px solid ${colors[idx % colors.length]}` }}>
                        <h4>{ko ? `기능 ${idx + 1}` : `Feature ${idx + 1}`}</h4>
                        <p>{feature}</p>
                      </div>
                    );
                  })}
                </div>

                <h3>{ko ? '유용한 팁' : 'Useful Tips'}</h3>
                <div className="info-box tip">
                  <h4><i className="fa-solid fa-lightbulb" aria-hidden="true" /> {ko ? '실습 팁' : 'Practice Tips'}</h4>
                  <ul>
                    {(ko ? activeTool.tipsKo : activeTool.tipsEn).map((tip, idx) => (
                      <li key={idx} style={{ marginBottom: '8px', fontSize: '14px', lineHeight: '1.7' }}>{tip}</li>
                    ))}
                  </ul>
                </div>

                <h3>{ko ? '활용 사례 및 프롬프트' : 'Use Cases & Prompts'}</h3>
                {(ko ? activeTool.promptsKo : activeTool.promptsEn).map((item, idx) => (
                  <div key={idx} className="example-box">
                    <div className="example-label">{item.title}</div>
                    <pre>{item.prompt}</pre>
                  </div>
                ))}
              </div>
            )}

            {/* ===== 실습도구: 실습 환경 안내 ===== */}
            {activeSection === 'tools-environment' && (
              <div className="content-card">
                <h2><i className="fa-solid fa-laptop-code" aria-hidden="true" /> {ko ? '실습 환경 안내' : 'Practice Environment Guide'}</h2>
                <p>{ko
                  ? '교육 참가자는 아래 환경을 사전에 준비해 주시기 바랍니다.'
                  : 'Please prepare the following environment before the training.'}
                </p>
                <div className="framework-grid">
                  <div className="framework-item" style={{ borderLeft: '3px solid #1B3A6B' }}>
                    <h4><i className="fa-solid fa-laptop" aria-hidden="true" /> {ko ? '노트북' : 'Laptop'}</h4>
                    <p>{ko ? '인터넷 접속 가능한 노트북 (Windows/Mac 무관)' : 'Internet-connected laptop (Windows/Mac)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #3D6DB5' }}>
                    <h4><i className="fa-solid fa-user-plus" aria-hidden="true" /> {ko ? '계정 준비' : 'Account Setup'}</h4>
                    <p>{ko ? 'ChatGPT, Claude 무료 계정 (사전 가입 권장)' : 'ChatGPT, Claude free accounts (pre-registration recommended)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #00855A' }}>
                    <h4><i className="fa-solid fa-wifi" aria-hidden="true" /> {ko ? '네트워크' : 'Network'}</h4>
                    <p>{ko ? '안정적인 인터넷 접속 환경 (Wi-Fi 제공)' : 'Stable internet connection (Wi-Fi provided)'}</p>
                  </div>
                  <div className="framework-item" style={{ borderLeft: '3px solid #C87200' }}>
                    <h4><i className="fa-solid fa-globe" aria-hidden="true" /> {ko ? '브라우저' : 'Browser'}</h4>
                    <p>{ko ? 'Chrome 또는 Edge 최신 버전 권장' : 'Latest Chrome or Edge recommended'}</p>
                  </div>
                </div>

                <h3>{ko ? '도구별 바로가기' : 'Quick Links'}</h3>
                <div className="framework-grid">
                  {TOOLS.map(tool => (
                    <div key={tool.id} className="framework-item">
                      <h4>
                        <i className={`fa-solid ${tool.icon}`} aria-hidden="true" style={{ color: tool.color }} />
                        {' '}{ko ? tool.nameKo : tool.nameEn}
                      </h4>
                      <p>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>
                          {tool.url} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" style={{ fontSize: '11px' }} />
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
