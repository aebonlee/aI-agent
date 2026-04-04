import{n as e}from"./rolldown-runtime-DF2fYuay.js";import{d as t,t as n}from"./vendor-DCezTRfP.js";import{n as r}from"./index-De4pnXAI.js";import{t as i}from"./SEOHead-wNVFQteS.js";import{t as a}from"./SidebarNav-W8TMakyv.js";var o=e(t(),1),s=n(),c=[{id:`chatgpt`,nameKo:`ChatGPT (GPT-4o)`,nameEn:`ChatGPT (GPT-4o)`,categoryKo:`대화형 AI Agent`,categoryEn:`Conversational AI Agent`,descKo:`자연어 대화 기반의 범용 AI 도구. 문서 작성, 코드 생성, 데이터 분석, 아이디어 구체화 등 다양한 업무에 활용 가능합니다. GPTs 기능을 통해 맞춤형 Agent 구축이 가능합니다.`,descEn:`General-purpose AI tool based on natural language conversation. Applicable to document writing, code generation, data analysis, and idea development. Custom Agent building available through GPTs.`,url:`https://chat.openai.com`,icon:`fa-comments`,color:`#10A37F`,featuresKo:[`GPTs를 통한 맞춤형 Agent 생성`,`Code Interpreter로 데이터 분석 및 시각화`,`DALL-E 기반 이미지 생성`,`Web Browsing으로 실시간 정보 검색`,`Advanced Data Analysis로 파일 처리`],featuresEn:[`Custom Agent creation via GPTs`,`Data analysis & visualization with Code Interpreter`,`Image generation with DALL-E`,`Real-time info search with Web Browsing`,`File processing with Advanced Data Analysis`],tipsKo:[`역할 부여 시 "당신은 ~분야 전문가입니다"로 시작하면 답변 품질이 향상됩니다`,`Custom Instructions에 조직 컨텍스트를 저장하면 매번 배경 설명을 반복할 필요가 없습니다`,`GPTs에 지식 파일을 업로드하면 조직 전용 Agent를 만들 수 있습니다`,`"단계별로 생각하세요(Think step by step)" 프롬프트는 복잡한 문제에서 정확도를 높입니다`,`출력 형식을 명확히 지정하세요: 표, 마크다운, 번호 목록 등`],tipsEn:[`Start with "You are an expert in ~" for better response quality`,`Save organizational context in Custom Instructions to avoid repeating background info`,`Upload knowledge files to GPTs to create organization-specific Agents`,`"Think step by step" prompt improves accuracy for complex problems`,`Specify output format clearly: table, markdown, numbered list, etc.`],promptsKo:[{title:`회의자료 초안 생성`,prompt:`당신은 [조직명]의 경영기획 전문가입니다. 다음 안건에 대한 회의자료 초안을 작성해주세요.

안건: [안건명]
참석자: [참석자]
형식: 제목, 배경, 현황, 제안사항, 논의사항, 일정 순서로 작성
분량: A4 2~3장
톤: 공식적이고 간결하게`},{title:`업무 자동화 아이디어 도출`,prompt:`당신은 업무혁신 컨설턴트입니다. 다음 업무 프로세스를 분석하고 AI Agent로 자동화할 수 있는 영역을 식별해주세요.

업무: [업무명]
현재 프로세스: [단계별 설명]

각 단계별로 자동화 가능 여부, 적합한 AI 도구, 예상 시간 절감율을 표로 정리해주세요.`}],promptsEn:[{title:`Meeting Document Draft`,prompt:`You are a management planning expert at [Organization]. Please draft meeting materials for the following agenda.

Agenda: [Topic]
Attendees: [Attendees]
Format: Title, Background, Status, Proposals, Discussion Points, Schedule
Length: 2-3 pages
Tone: Formal and concise`},{title:`Task Automation Ideation`,prompt:`You are a work innovation consultant. Analyze the following work process and identify areas that can be automated with AI Agents.

Task: [Task name]
Current process: [Step-by-step description]

For each step, organize automation feasibility, suitable AI tools, and estimated time savings in a table.`}]},{id:`claude`,nameKo:`Claude (Sonnet/Opus)`,nameEn:`Claude (Sonnet/Opus)`,categoryKo:`문서 분석 및 구조화`,categoryEn:`Document Analysis & Structuring`,descKo:`긴 문서 분석, 구조적 글쓰기, 논리적 검토에 강점을 가진 AI. Claude Projects를 통해 전용 Agent 환경을 구성할 수 있습니다.`,descEn:`AI with strengths in long document analysis, structural writing, and logical review. Claude Projects enables dedicated Agent environment setup.`,url:`https://claude.ai`,icon:`fa-file-lines`,color:`#D97706`,featuresKo:[`Projects로 프로젝트별 전용 컨텍스트 관리`,`200K 토큰 컨텍스트로 긴 문서 전체 분석`,`Artifacts를 통한 결과물 실시간 미리보기`,`논리적 구조화와 체계적 검토에 뛰어난 성능`,`코드 작성 및 수학적 추론 능력`],featuresEn:[`Project-specific context management via Projects`,`Full document analysis with 200K token context`,`Real-time preview of outputs through Artifacts`,`Excellent logical structuring and systematic review`,`Code writing and mathematical reasoning capabilities`],tipsKo:[`Claude Projects에 조직 문서와 가이드를 업로드하면 조직 맞춤형 답변을 받을 수 있습니다`,`긴 보고서는 전체를 붙여넣고 분석을 요청하면 뛰어난 요약 품질을 보여줍니다`,`Artifacts 기능을 활용하면 코드, 문서, 다이어그램 등을 인라인으로 미리 볼 수 있습니다`,`복잡한 논리적 검토(계약서, 정책 문서 등)에서 특히 강점을 보입니다`,`체계적인 XML 태그 구조로 프롬프트를 작성하면 더 정확한 결과를 얻을 수 있습니다`],tipsEn:[`Upload organization docs and guides to Claude Projects for customized responses`,`Paste entire long reports for analysis — Claude excels at summarization`,`Use Artifacts to preview code, documents, and diagrams inline`,`Particularly strong in complex logical reviews (contracts, policy documents)`,`Structure prompts with XML tags for more precise results`],promptsKo:[{title:`정책 문서 분석 및 시사점 도출`,prompt:`다음 정책 문서를 분석하고 우리 조직에 대한 시사점을 도출해주세요.

[문서 전문 또는 핵심 내용 붙여넣기]

분석 형식:
1. 핵심 요약 (3줄)
2. 주요 변경사항 (표)
3. 우리 조직 영향도 (상/중/하)
4. 대응 방안 (단기/중기)`},{title:`보고서 구조 검토 및 개선`,prompt:`다음 보고서의 논리적 구조를 검토하고 개선 제안을 해주세요.

[보고서 내용 붙여넣기]

검토 항목:
- 논리적 흐름의 일관성
- 근거 자료의 충분성
- 결론과 제안의 타당성
- 독자 관점에서의 이해도

개선 후 수정된 구조를 제시해주세요.`}],promptsEn:[{title:`Policy Document Analysis`,prompt:`Analyze the following policy document and derive implications for our organization.

[Paste document content]

Format:
1. Key Summary (3 lines)
2. Major Changes (table)
3. Impact on Our Organization (High/Medium/Low)
4. Response Plans (Short-term/Mid-term)`},{title:`Report Structure Review`,prompt:`Review the logical structure of this report and suggest improvements.

[Paste report content]

Review items:
- Logical flow consistency
- Evidence sufficiency
- Conclusion and proposal validity
- Reader comprehension

Present the improved structure.`}]},{id:`gemini`,nameKo:`Gemini`,nameEn:`Gemini`,categoryKo:`검색 기반 리서치`,categoryEn:`Search-Based Research`,descKo:`Google 검색 엔진과 연동된 AI 리서치 도구. 최신 정보 검색, 멀티모달(텍스트+이미지) 분석, Google Workspace 연동에 강점이 있습니다.`,descEn:`AI research tool integrated with Google Search. Strong in latest information retrieval, multimodal (text+image) analysis, and Google Workspace integration.`,url:`https://gemini.google.com`,icon:`fa-diamond`,color:`#4285F4`,featuresKo:[`Google 검색 통합으로 최신 정보 실시간 접근`,`Google Workspace(Gmail, Docs, Drive) 연동`,`Gems를 통한 맞춤형 AI 도우미 생성`,`멀티모달 입력(이미지, PDF 분석) 지원`,`Google 생태계와의 원활한 통합`],featuresEn:[`Real-time access to latest info via Google Search`,`Google Workspace (Gmail, Docs, Drive) integration`,`Custom AI assistants via Gems`,`Multimodal input (image, PDF analysis) support`,`Seamless integration with Google ecosystem`],tipsKo:[`Google Workspace와 연동하면 Gmail, Drive 파일을 기반으로 답변을 생성할 수 있습니다`,`최신 뉴스나 실시간 데이터가 필요한 리서치에 특히 유용합니다`,`Gems에 반복 업무 지침을 저장하면 매번 새로 프롬프트를 작성할 필요가 없습니다`,`이미지를 업로드하여 차트나 그래프를 분석할 수 있습니다`,`구글 독스에서 직접 Gemini를 호출하여 문서 작성을 가속할 수 있습니다`],tipsEn:[`Link with Google Workspace to generate responses based on Gmail and Drive files`,`Particularly useful for research requiring latest news or real-time data`,`Save recurring task instructions in Gems to avoid rewriting prompts`,`Upload images to analyze charts and graphs`,`Call Gemini directly from Google Docs to accelerate document writing`],promptsKo:[{title:`산업 동향 리서치`,prompt:`[산업명] 분야의 최신 동향을 조사해주세요.

조사 항목:
1. 최근 3개월 주요 뉴스 및 이슈
2. 기술 트렌드 (국내/해외)
3. 정책 및 규제 변화
4. 주요 기업 동향

각 항목별로 출처와 날짜를 명시하고, 마지막에 시사점을 정리해주세요.`},{title:`경쟁사 분석`,prompt:`[업종] 분야에서 [경쟁사명] 3곳의 AI 도입 현황을 조사하고 비교해주세요.

비교 항목: 도입 분야, 활용 도구, 성과, 투자 규모
형식: 비교표 + 각 기업별 상세 분석
기간: 최근 1년 내 정보 기준`}],promptsEn:[{title:`Industry Trend Research`,prompt:`Research the latest trends in the [industry] sector.

Research items:
1. Major news & issues in past 3 months
2. Technology trends (domestic/international)
3. Policy & regulatory changes
4. Major company activities

Cite sources and dates for each item, and summarize implications at the end.`},{title:`Competitor Analysis`,prompt:`Research and compare AI adoption status of 3 competitors in the [industry] sector.

Comparison items: Adoption areas, tools used, results, investment scale
Format: Comparison table + detailed analysis per company
Period: Based on information from the past year`}]},{id:`genspark`,nameKo:`Genspark`,nameEn:`Genspark`,categoryKo:`AI 기반 통합 검색`,categoryEn:`AI-Powered Integrated Search`,descKo:`여러 검색 엔진과 AI를 통합한 리서치 플랫폼. 복잡한 주제에 대한 종합적인 리서치와 요약이 가능하며, 구조화된 결과물을 제공합니다.`,descEn:`Research platform integrating multiple search engines and AI. Enables comprehensive research and summarization on complex topics with structured outputs.`,url:`https://www.genspark.ai`,icon:`fa-magnifying-glass-chart`,color:`#7C3AED`,featuresKo:[`다중 소스 통합 검색 및 크로스체크`,`Sparkpages로 리서치 결과 자동 구조화`,`복잡한 주제에 대한 종합 보고서 생성`,`실시간 웹 검색 기반 최신 정보 반영`,`시각적으로 정리된 리서치 결과물 제공`],featuresEn:[`Multi-source integrated search and cross-checking`,`Auto-structured research results via Sparkpages`,`Comprehensive report generation on complex topics`,`Latest info based on real-time web search`,`Visually organized research deliverables`],tipsKo:[`복잡한 주제를 조사할 때 다른 AI 도구의 결과와 크로스체크용으로 활용하세요`,`Sparkpages는 리서치 결과를 자동으로 구조화해주므로 보고서 초안으로 바로 활용할 수 있습니다`,`산업 분석, 시장조사, 기술 동향 등 종합적 조사에 특히 효과적입니다`,`검색 결과의 출처를 확인하여 신뢰성을 검증하세요`,`여러 관점을 비교하는 질문을 하면 균형 잡힌 결과를 얻을 수 있습니다`],tipsEn:[`Use for cross-checking results from other AI tools on complex topics`,`Sparkpages auto-structures results — use directly as report drafts`,`Particularly effective for industry analysis, market research, and tech trends`,`Verify credibility by checking sources of search results`,`Ask comparison questions for balanced perspectives`],promptsKo:[{title:`종합 산업 리서치`,prompt:`[산업/기술명]에 대해 종합적으로 조사해주세요. 기술 현황, 시장 규모, 주요 플레이어, 국내외 정책, 향후 전망을 포함해주세요.`},{title:`트렌드 비교 분석`,prompt:`[주제A]와 [주제B]를 비교 분석해주세요. 각각의 장단점, 적용 사례, 향후 발전 방향을 표 형식으로 정리하고 시사점을 도출해주세요.`}],promptsEn:[{title:`Comprehensive Industry Research`,prompt:`Conduct comprehensive research on [industry/technology]. Include technology status, market size, key players, domestic/international policies, and future outlook.`},{title:`Trend Comparison Analysis`,prompt:`Compare and analyze [Topic A] and [Topic B]. Organize pros/cons, application cases, and future directions in table format and derive implications.`}]},{id:`perplexity`,nameKo:`Perplexity`,nameEn:`Perplexity`,categoryKo:`리서치 특화 AI`,categoryEn:`Research-Specialized AI`,descKo:`출처 기반 리서치에 특화된 AI 검색 도구. 검색 결과에 출처를 명시하여 신뢰성 있는 리서치가 가능하며, 팔로업 질문으로 심층 탐색이 가능합니다.`,descEn:`AI search tool specialized in source-based research. Provides credible research with cited sources and enables deep exploration through follow-up questions.`,url:`https://www.perplexity.ai`,icon:`fa-searchengin`,color:`#1B9AAA`,featuresKo:[`모든 답변에 출처(URL) 자동 표시`,`팔로업 질문을 통한 심층 탐색`,`Collections로 리서치 주제별 정리`,`Focus 모드로 학술/뉴스/소셜 등 소스 선택`,`파일 업로드 기반 분석 지원`],featuresEn:[`Auto-citation (URL) on all responses`,`Deep exploration via follow-up questions`,`Topic-based organization with Collections`,`Source selection via Focus mode (Academic/News/Social)`,`File upload-based analysis support`],tipsKo:[`Focus 모드에서 "Academic"을 선택하면 학술 논문 기반 리서치가 가능합니다`,`팔로업 질문을 연속으로 하면 주제를 점점 깊이 파고들 수 있습니다`,`Collections 기능을 활용하면 프로젝트별로 리서치 히스토리를 관리할 수 있습니다`,`출처가 명시되므로 보고서 작성 시 참고문헌 정리가 용이합니다`,`"~에 대한 최신 연구 동향을 알려줘"와 같은 리서치 질문에 최적화되어 있습니다`],tipsEn:[`Select "Academic" in Focus mode for research paper-based results`,`Chain follow-up questions to progressively deepen topic exploration`,`Use Collections to manage research history by project`,`Citations make it easy to organize references for reports`,`Optimized for research questions like "latest research trends on ~"`],promptsKo:[{title:`출처 기반 팩트 체크`,prompt:`[주장/정보]에 대해 신뢰할 수 있는 출처를 바탕으로 팩트 체크해주세요. 공식 통계, 연구 논문, 정부 발표 자료를 우선 참조해주세요.`},{title:`최신 연구 동향 조사`,prompt:`[연구 분야]에 대한 최신 연구 동향을 조사해주세요. 최근 1년 내 발표된 주요 논문, 학회 발표, 기술 보고서를 중심으로 정리하고 핵심 시사점을 도출해주세요.`}],promptsEn:[{title:`Source-Based Fact Check`,prompt:`Fact-check [claim/information] based on reliable sources. Prioritize official statistics, research papers, and government publications.`},{title:`Latest Research Trends`,prompt:`Research latest trends in [research field]. Focus on major papers, conference presentations, and technical reports published within the past year, and derive key implications.`}]},{id:`napkin`,nameKo:`Napkin AI`,nameEn:`Napkin AI`,categoryKo:`시각화 도구`,categoryEn:`Visualization Tool`,descKo:`텍스트 기반의 아이디어를 시각적 다이어그램, 플로우차트, 인포그래픽으로 변환하는 AI 도구. 발표자료 및 보고서의 시각화에 활용합니다.`,descEn:`AI tool that transforms text-based ideas into visual diagrams, flowcharts, and infographics. Used for visualizing presentations and reports.`,url:`https://www.napkin.ai`,icon:`fa-chart-diagram`,color:`#EC4899`,featuresKo:[`텍스트를 다이어그램으로 자동 변환`,`프로세스 플로우차트 생성`,`인포그래픽 스타일 시각화`,`발표자료용 비주얼 자동 생성`,`다양한 레이아웃 및 스타일 선택`],featuresEn:[`Auto-convert text to diagrams`,`Process flowchart generation`,`Infographic-style visualization`,`Auto-generate visuals for presentations`,`Various layout and style options`],tipsKo:[`다른 AI로 생성한 텍스트 결과물을 Napkin에 붙여넣으면 즉시 시각화할 수 있습니다`,`워크플로우나 프로세스 설명을 단계별로 작성하면 깔끔한 플로우차트가 생성됩니다`,`비교 분석 결과를 입력하면 비교 다이어그램을 자동으로 만들어줍니다`,`발표자료 준비 시 핵심 포인트를 정리한 후 시각화하면 효과적입니다`,`Agent 설계 캔버스의 결과물을 시각화하는 데 활용할 수 있습니다`],tipsEn:[`Paste text outputs from other AIs into Napkin for instant visualization`,`Write step-by-step workflow descriptions for clean flowcharts`,`Input comparison analysis for auto-generated comparison diagrams`,`Organize key points before visualization for effective presentations`,`Use to visualize Agent design canvas outputs`],promptsKo:[{title:`Agent 워크플로우 시각화`,prompt:`다음 AI Agent 워크플로우를 시각적 다이어그램으로 변환해주세요:

1. 사용자가 업무 요청을 입력
2. Agent가 요청을 분석하고 하위 작업으로 분해
3. 각 하위 작업에 적합한 도구 선택
4. 순차적으로 작업 실행
5. 결과 통합 및 품질 검토
6. 최종 결과물 제공`},{title:`비교 분석 인포그래픽`,prompt:`다음 AI 도구 비교 분석을 인포그래픽으로 시각화해주세요:

- ChatGPT: 범용 대화, Agent 구축
- Claude: 문서 분석, 구조적 글쓰기
- Gemini: 검색 기반 리서치
- Perplexity: 출처 기반 팩트체크`}],promptsEn:[{title:`Agent Workflow Visualization`,prompt:`Convert this AI Agent workflow into a visual diagram:

1. User submits work request
2. Agent analyzes request and decomposes into sub-tasks
3. Select appropriate tools for each sub-task
4. Execute tasks sequentially
5. Integrate results and quality review
6. Deliver final output`},{title:`Comparison Infographic`,prompt:`Visualize this AI tool comparison as an infographic:

- ChatGPT: General conversation, Agent building
- Claude: Document analysis, structural writing
- Gemini: Search-based research
- Perplexity: Source-based fact-checking`}]}],l=[{id:`group-overview`,labelKo:`개요`,labelEn:`Overview`,icon:`fa-grid-2`,items:[{id:`overview`,titleKo:`도구 개요`,titleEn:`Tools Overview`,icon:`fa-grid-2`}]},{id:`group-conversational`,labelKo:`대화형 AI`,labelEn:`Conversational AI`,icon:`fa-comments`,items:[{id:`chatgpt`,titleKo:`ChatGPT (GPT-4o)`,titleEn:`ChatGPT (GPT-4o)`,icon:`fa-comments`},{id:`claude`,titleKo:`Claude (Sonnet/Opus)`,titleEn:`Claude (Sonnet/Opus)`,icon:`fa-file-lines`}]},{id:`group-research`,labelKo:`리서치 도구`,labelEn:`Research Tools`,icon:`fa-magnifying-glass-chart`,items:[{id:`gemini`,titleKo:`Gemini`,titleEn:`Gemini`,icon:`fa-diamond`},{id:`genspark`,titleKo:`Genspark`,titleEn:`Genspark`,icon:`fa-magnifying-glass-chart`},{id:`perplexity`,titleKo:`Perplexity`,titleEn:`Perplexity`,icon:`fa-searchengin`}]},{id:`group-visual`,labelKo:`시각화 및 환경`,labelEn:`Visual & Setup`,icon:`fa-chart-diagram`,items:[{id:`napkin`,titleKo:`Napkin AI`,titleEn:`Napkin AI`,icon:`fa-chart-diagram`},{id:`environment`,titleKo:`실습 환경 안내`,titleEn:`Practice Environment`,icon:`fa-laptop-code`}]}];function u(){let{language:e,t}=r(),[n,u]=(0,o.useState)(`overview`),d=e===`ko`,f=c.find(e=>e.id===n);return(0,s.jsxs)(`div`,{className:`content-page`,children:[(0,s.jsx)(i,{title:t(`tools.title`),description:t(`tools.subtitle`),path:`/tools`}),(0,s.jsx)(`div`,{className:`page-header`,children:(0,s.jsxs)(`div`,{className:`container`,children:[(0,s.jsx)(`h1`,{children:t(`tools.title`)}),(0,s.jsx)(`p`,{className:`page-desc`,children:t(`tools.subtitle`)})]})}),(0,s.jsx)(`div`,{className:`container`,children:(0,s.jsxs)(`div`,{className:`content-page-layout`,children:[(0,s.jsx)(a,{groups:l,activeId:n,onSelect:u,headingKo:`목차`,headingEn:`Contents`}),(0,s.jsxs)(`div`,{className:`content-main`,children:[n===`overview`&&(0,s.jsxs)(`div`,{className:`content-card`,children:[(0,s.jsx)(`h2`,{children:d?`도구 개요`:`Tools Overview`}),(0,s.jsx)(`p`,{children:d?`교육 과정에서 활용하는 6개의 핵심 AI 도구입니다. 각 도구를 클릭하면 상세 정보, 외부 링크, 주요 기능, 유용한 팁, 활용 프롬프트를 확인할 수 있습니다.`:`These are the 6 core AI tools used in the education program. Click each tool for detailed information, external links, key features, useful tips, and practice prompts.`}),(0,s.jsx)(`div`,{className:`tools-grid`,children:c.map(e=>(0,s.jsxs)(`div`,{className:`tool-card`,style:{cursor:`pointer`,borderTopColor:e.color},onClick:()=>u(e.id),role:`button`,tabIndex:0,onKeyDown:t=>{t.key===`Enter`&&u(e.id)},children:[(0,s.jsxs)(`div`,{className:`tool-card-header`,children:[(0,s.jsx)(`div`,{className:`tool-icon`,style:{background:`${e.color}15`,color:e.color},children:(0,s.jsx)(`i`,{className:`fa-solid ${e.icon}`,"aria-hidden":`true`})}),(0,s.jsxs)(`div`,{className:`tool-name-group`,children:[(0,s.jsx)(`h3`,{children:d?e.nameKo:e.nameEn}),(0,s.jsx)(`span`,{className:`tool-category`,children:d?e.categoryKo:e.categoryEn})]})]}),(0,s.jsx)(`p`,{className:`tool-desc`,children:d?e.descKo:e.descEn})]},e.id))})]}),f&&(0,s.jsxs)(`div`,{className:`content-card`,children:[(0,s.jsxs)(`h2`,{children:[(0,s.jsx)(`i`,{className:`fa-solid ${f.icon}`,"aria-hidden":`true`,style:{color:f.color,marginRight:`10px`}}),d?f.nameKo:f.nameEn]}),(0,s.jsxs)(`p`,{style:{marginBottom:`4px`},children:[(0,s.jsxs)(`strong`,{children:[d?`카테고리`:`Category`,`:`]}),` `,d?f.categoryKo:f.categoryEn]}),(0,s.jsx)(`p`,{children:d?f.descKo:f.descEn}),(0,s.jsxs)(`a`,{href:f.url,target:`_blank`,rel:`noopener noreferrer`,className:`tool-external-link`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square`,"aria-hidden":`true`}),f.url]}),(0,s.jsx)(`h3`,{children:d?`주요 기능`:`Key Features`}),(0,s.jsx)(`div`,{className:`framework-grid`,children:(d?f.featuresKo:f.featuresEn).map((e,t)=>{let n=[`#1B3A6B`,`#2E86AB`,`#A23B72`,`#F18F01`,`#00855A`];return(0,s.jsxs)(`div`,{className:`framework-item`,style:{borderLeft:`3px solid ${n[t%n.length]}`},children:[(0,s.jsx)(`h4`,{children:d?`기능 ${t+1}`:`Feature ${t+1}`}),(0,s.jsx)(`p`,{children:e})]},t)})}),(0,s.jsx)(`h3`,{children:d?`유용한 팁`:`Useful Tips`}),(0,s.jsxs)(`div`,{className:`info-box tip`,children:[(0,s.jsxs)(`h4`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-lightbulb`,"aria-hidden":`true`}),` `,d?`실습 팁`:`Practice Tips`]}),(0,s.jsx)(`ul`,{children:(d?f.tipsKo:f.tipsEn).map((e,t)=>(0,s.jsx)(`li`,{style:{marginBottom:`8px`,fontSize:`14px`,lineHeight:`1.7`},children:e},t))})]}),(0,s.jsx)(`h3`,{children:d?`활용 사례 및 프롬프트`:`Use Cases & Prompts`}),(d?f.promptsKo:f.promptsEn).map((e,t)=>(0,s.jsxs)(`div`,{className:`example-box`,children:[(0,s.jsx)(`div`,{className:`example-label`,children:e.title}),(0,s.jsx)(`pre`,{children:e.prompt})]},t))]}),n===`environment`&&(0,s.jsxs)(`div`,{className:`content-card`,children:[(0,s.jsx)(`h2`,{children:d?`실습 환경 안내`:`Practice Environment Guide`}),(0,s.jsx)(`p`,{children:d?`교육 참가자는 아래 환경을 사전에 준비해 주시기 바랍니다.`:`Please prepare the following environment before the training.`}),(0,s.jsxs)(`div`,{className:`framework-grid`,children:[(0,s.jsxs)(`div`,{className:`framework-item`,style:{borderLeft:`3px solid #1B3A6B`},children:[(0,s.jsxs)(`h4`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-laptop`,"aria-hidden":`true`}),` `,d?`노트북`:`Laptop`]}),(0,s.jsx)(`p`,{children:d?`인터넷 접속 가능한 노트북 (Windows/Mac 무관)`:`Internet-connected laptop (Windows/Mac)`})]}),(0,s.jsxs)(`div`,{className:`framework-item`,style:{borderLeft:`3px solid #3D6DB5`},children:[(0,s.jsxs)(`h4`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-user-plus`,"aria-hidden":`true`}),` `,d?`계정 준비`:`Account Setup`]}),(0,s.jsx)(`p`,{children:d?`ChatGPT, Claude 무료 계정 (사전 가입 권장)`:`ChatGPT, Claude free accounts (pre-registration recommended)`})]}),(0,s.jsxs)(`div`,{className:`framework-item`,style:{borderLeft:`3px solid #00855A`},children:[(0,s.jsxs)(`h4`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-wifi`,"aria-hidden":`true`}),` `,d?`네트워크`:`Network`]}),(0,s.jsx)(`p`,{children:d?`안정적인 인터넷 접속 환경 (Wi-Fi 제공)`:`Stable internet connection (Wi-Fi provided)`})]}),(0,s.jsxs)(`div`,{className:`framework-item`,style:{borderLeft:`3px solid #C87200`},children:[(0,s.jsxs)(`h4`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-browser`,"aria-hidden":`true`}),` `,d?`브라우저`:`Browser`]}),(0,s.jsx)(`p`,{children:d?`Chrome 또는 Edge 최신 버전 권장`:`Latest Chrome or Edge recommended`})]})]}),(0,s.jsx)(`h3`,{children:d?`도구별 바로가기`:`Quick Links`}),(0,s.jsx)(`div`,{className:`framework-grid`,children:c.map(e=>(0,s.jsxs)(`div`,{className:`framework-item`,children:[(0,s.jsxs)(`h4`,{children:[(0,s.jsx)(`i`,{className:`fa-solid ${e.icon}`,"aria-hidden":`true`,style:{color:e.color}}),` `,d?e.nameKo:e.nameEn]}),(0,s.jsx)(`p`,{children:(0,s.jsxs)(`a`,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,style:{color:`var(--primary-blue)`,textDecoration:`none`},children:[e.url,` `,(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-up-right-from-square`,"aria-hidden":`true`,style:{fontSize:`11px`}})]})})]},e.id))})]})]})]})})]})}export{u as default};