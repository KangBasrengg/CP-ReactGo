import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const logs = [
  { version: 'v2.4.0', date: '5 Aug 2026', type: 'Feature', items: ['Liquid Glass UI theme', 'Scroll reveal animations', 'Multi-page routing'] },
  { version: 'v2.3.0', date: '28 Jul 2026', type: 'Improvement', items: ['Performance optimization', 'Reduced bundle size by 20%', 'Better mobile responsiveness'] },
  { version: 'v2.2.0', date: '15 Jul 2026', type: 'Feature', items: ['Dashboard analytics', 'Team collaboration tools', 'Export to CSV/PDF'] },
  { version: 'v2.1.0', date: '1 Jul 2026', type: 'Fix', items: ['Fixed auth token refresh', 'Resolved dark mode flickering', 'Improved form validation'] },
];

export const ChangelogPage: React.FC = () => {
  return (
    <ContentPage badge="CHANGELOG" badgeIcon="Clock" title="What's new" subtitle="Semua update dan perubahan yang kami buat untuk platform ini.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {logs.map((log, i) => {
          const ref = useScrollReveal<HTMLDivElement>();
          return (
            <div ref={ref} key={i} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{log.version}</span>
                <span style={{
                  padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600,
                  background: log.type === 'Feature' ? 'rgba(99,102,241,0.15)' : log.type === 'Fix' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)',
                  color: log.type === 'Feature' ? '#a78bfa' : log.type === 'Fix' ? '#34d399' : '#fbbf24',
                  border: `1px solid ${log.type === 'Feature' ? 'rgba(99,102,241,0.2)' : log.type === 'Fix' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'}`,
                }}>
                  {log.type}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>{log.date}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {log.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    <Icon name="ChevronRight" size={14} color="var(--color-text-muted)" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};
