import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const positions = [
  { title: 'Senior Frontend Engineer', team: 'Engineering', location: 'Jakarta / Remote', type: 'Full-time' },
  { title: 'Backend Engineer (Go)', team: 'Engineering', location: 'Jakarta / Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Jakarta', type: 'Full-time' },
  { title: 'DevOps Engineer', team: 'Infrastructure', location: 'Remote', type: 'Full-time' },
];

export const CareersPage: React.FC = () => {
  return (
    <ContentPage badge="CAREERS" badgeIcon="Briefcase" title="Join our team" subtitle="Kami mencari orang-orang berbakat untuk membangun masa depan teknologi bersama.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {positions.map((pos, i) => {
          const ref = useScrollReveal<HTMLDivElement>();
          return (
            <div ref={ref} key={i} className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{pos.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {[
                    { icon: 'Users', text: pos.team },
                    { icon: 'MapPin', text: pos.location },
                    { icon: 'Clock', text: pos.type },
                  ].map((tag, j) => (
                    <span key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      <Icon name={tag.icon} size={13} /> {tag.text}
                    </span>
                  ))}
                </div>
              </div>
              <button className="btn btn-secondary" style={{ borderRadius: '9999px', fontSize: '0.8rem', padding: '0.5rem 1.25rem' }}>
                Apply <Icon name="ArrowRight" size={13} />
              </button>
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};
