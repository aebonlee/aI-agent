import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  { id: 'all', titleKo: '전체 자료', titleEn: 'All Materials' },
  { id: 'worksheet', titleKo: '워크시트', titleEn: 'Worksheets' },
  { id: 'canvas', titleKo: '설계 캔버스', titleEn: 'Design Canvas' },
  { id: 'template', titleKo: '템플릿', titleEn: 'Templates' },
  { id: 'checklist', titleKo: '체크리스트', titleEn: 'Checklists' },
];

const MATERIALS = [
  {
    id: 'task-worksheet',
    category: 'worksheet',
    titleKo: '업무분해 워크시트',
    titleEn: 'Task Decomposition Worksheet',
    descKo: '자신의 업무를 세분화하고, 각 단계에서 AI Agent를 적용할 수 있는 영역을 식별하는 워크시트입니다. 업무 프로세스를 입력 → 처리 → 출력 구조로 분해합니다.',
    descEn: 'A worksheet to break down your tasks and identify areas where AI Agents can be applied at each step. Decomposes work processes into input → processing → output structures.',
    icon: 'fa-table-cells',
    format: 'PDF / XLSX',
    pages: '4',
  },
  {
    id: 'agent-canvas',
    category: 'canvas',
    titleKo: 'Agent 설계 캔버스',
    titleEn: 'Agent Design Canvas',
    descKo: 'AI Agent의 역할, 목표, 입력/출력, 사용 도구, 워크플로우, 예외처리 등을 한 장에 정리하는 설계 캔버스입니다. 워크숍에서 팀별로 작성합니다.',
    descEn: 'A design canvas to organize AI Agent roles, goals, inputs/outputs, tools, workflows, and exception handling on a single sheet. Completed by teams during workshops.',
    icon: 'fa-object-group',
    format: 'PDF / PPTX',
    pages: '2',
  },
  {
    id: 'action-plan',
    category: 'template',
    titleKo: '실행계획서 템플릿',
    titleEn: 'Action Plan Template',
    descKo: '아이디어를 실행 가능한 프로젝트로 구체화하기 위한 템플릿입니다. 목표, 절차, 자원, 일정, 리스크, 성과지표를 포함합니다.',
    descEn: 'A template for concretizing ideas into executable projects. Includes goals, procedures, resources, timelines, risks, and performance indicators.',
    icon: 'fa-clipboard-list',
    format: 'DOCX / PDF',
    pages: '6',
  },
  {
    id: 'presentation',
    category: 'template',
    titleKo: '발표자료 템플릿',
    titleEn: 'Presentation Template',
    descKo: '교육 마지막 세션의 팀별 발표를 위한 프레젠테이션 템플릿입니다. 문제 정의, 솔루션 설계, 기대효과, 로드맵 순으로 구성되어 있습니다.',
    descEn: 'A presentation template for team presentations in the final session. Structured as problem definition, solution design, expected outcomes, and roadmap.',
    icon: 'fa-file-powerpoint',
    format: 'PPTX',
    pages: '12 slides',
  },
  {
    id: 'review-checklist',
    category: 'checklist',
    titleKo: '검토 체크리스트',
    titleEn: 'Review Checklist',
    descKo: 'Agent 설계와 실행 계획의 완성도를 점검하기 위한 체크리스트입니다. 기술 타당성, 비용 효율성, 조직 적합성, 리스크 등을 항목별로 검토합니다.',
    descEn: 'A checklist to verify the completeness of Agent designs and action plans. Reviews technical feasibility, cost efficiency, organizational fit, and risks by item.',
    icon: 'fa-list-check',
    format: 'PDF',
    pages: '3',
  },
  {
    id: 'research-template',
    category: 'template',
    titleKo: '리서치 결과 정리 템플릿',
    titleEn: 'Research Result Template',
    descKo: 'AI 도구를 활용한 리서치 결과를 구조화하여 정리하는 템플릿입니다. 조사 목적, 사용 도구, 핵심 발견, 시사점, 출처를 체계적으로 기록합니다.',
    descEn: 'A template for structuring research results using AI tools. Systematically records research purpose, tools used, key findings, implications, and sources.',
    icon: 'fa-file-magnifying-glass',
    format: 'DOCX / PDF',
    pages: '4',
  },
  {
    id: 'automation-canvas',
    category: 'canvas',
    titleKo: '자동화 아이디어 캔버스',
    titleEn: 'Automation Idea Canvas',
    descKo: '업무 자동화 아이디어를 발굴하고 평가하는 캔버스입니다. 현재 프로세스, 자동화 대상, 기대 효과, 필요 기술, 우선순위를 정리합니다.',
    descEn: 'A canvas for discovering and evaluating task automation ideas. Organizes current processes, automation targets, expected benefits, required technologies, and priorities.',
    icon: 'fa-wand-magic-sparkles',
    format: 'PDF / PPTX',
    pages: '2',
  },
];

export default function MaterialsPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const ko = language === 'ko';

  const filteredMaterials = activeCategory === 'all'
    ? MATERIALS
    : MATERIALS.filter(m => m.category === activeCategory);

  return (
    <div className="content-page">
      <SEOHead title={t('materials.title')} description={t('materials.subtitle')} path="/materials" />

      <div className="page-header">
        <div className="container">
          <h1>{t('materials.title')}</h1>
          <p className="page-desc">{t('materials.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="content-page-layout">
          <aside className="content-sidebar">
            <h3>{ko ? '자료 유형' : 'Categories'}</h3>
            <ul className="sidebar-nav">
              {CATEGORIES.map(cat => (
                <li key={cat.id} className="sidebar-nav-item">
                  <button
                    className={`sidebar-nav-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {ko ? cat.titleKo : cat.titleEn}
                    <span style={{ marginLeft: 'auto', fontSize: '12px', opacity: 0.5 }}>
                      {cat.id === 'all'
                        ? MATERIALS.length
                        : MATERIALS.filter(m => m.category === cat.id).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="content-main">
            <div className="materials-grid">
              {filteredMaterials.map(material => (
                <div key={material.id} className="content-card material-card">
                  <div className="material-card-header">
                    <div className="material-icon">
                      <i className={`fa-solid ${material.icon}`} aria-hidden="true" />
                    </div>
                    <div className="material-meta">
                      <span className="material-format">
                        <i className="fa-solid fa-file" aria-hidden="true" /> {material.format}
                      </span>
                      <span className="material-pages">
                        <i className="fa-solid fa-copy" aria-hidden="true" /> {material.pages}{ko ? '페이지' : ' pages'}
                      </span>
                    </div>
                  </div>
                  <h3 className="material-title">{ko ? material.titleKo : material.titleEn}</h3>
                  <p className="material-desc">{ko ? material.descKo : material.descEn}</p>
                  <button className="btn btn-secondary material-download-btn" disabled>
                    <i className="fa-solid fa-download" aria-hidden="true" /> {ko ? '다운로드 (준비 중)' : 'Download (Coming Soon)'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
