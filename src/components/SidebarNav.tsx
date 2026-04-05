import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function SidebarNav({ groups, activeId, onSelect, headingKo, headingEn }) {
  const { language } = useLanguage();
  const ko = language === 'ko';

  const findGroupForId = (id) => groups.find(g => g.items.some(item => item.id === id));

  const [openGroup, setOpenGroup] = useState(() => {
    const group = findGroupForId(activeId);
    return group ? group.id : null;
  });

  useEffect(() => {
    const group = findGroupForId(activeId);
    if (group) setOpenGroup(group.id);
  }, [activeId]);

  const toggleGroup = (groupId) => {
    setOpenGroup(prev => prev === groupId ? null : groupId);
  };

  return (
    <aside className="content-sidebar">
      <h3>{ko ? headingKo : headingEn}</h3>
      <nav className="sidebar-nav">
        {groups.map(group => {
          const open = openGroup === group.id;
          return (
            <div key={group.id} className="sidebar-nav-group">
              <button
                className={`sidebar-nav-group-toggle ${open ? 'open' : ''}`}
                onClick={() => toggleGroup(group.id)}
                aria-expanded={open}
              >
                <i className={`fa-solid ${group.icon}`} aria-hidden="true" />
                <span className="sidebar-nav-group-text">{ko ? group.labelKo : group.labelEn}</span>
                <span className="sidebar-nav-group-count">{group.items.length}</span>
                <i className="fa-solid fa-chevron-down sidebar-nav-chevron" aria-hidden="true" />
              </button>
              <div className={`sidebar-nav-group-items ${open ? 'expanded' : ''}`}>
                <div className="sidebar-nav-group-items-inner">
                  {group.items.map(item => (
                    <button
                      key={item.id}
                      className={`sidebar-nav-btn ${activeId === item.id ? 'active' : ''}`}
                      onClick={() => onSelect(item.id)}
                    >
                      {ko ? item.titleKo : item.titleEn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
