import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const positions = [
  { title: 'Kurir & Driver Pengiriman', team: 'Operasional', location: 'Jakarta, Bandung, Surabaya', type: 'Full-time' },
  { title: 'Customer Service Representative', team: 'Customer Experience', location: 'Jakarta / Remote', type: 'Full-time' },
  { title: 'Warehouse Coordinator', team: 'Logistik', location: 'Jakarta', type: 'Full-time' },
  { title: 'Social Media & Content Creator', team: 'Marketing', location: 'Remote', type: 'Part-time' },
];

export const CareersPage: React.FC = () => {
  return (
    <ContentPage badge="KARIR" badgeIcon="Briefcase" title="Bergabung bersama kami" subtitle="Kami mencari orang-orang yang bersemangat untuk membangun layanan pengiriman terbaik di Indonesia.">
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
                Lamar <Icon name="ArrowRight" size={13} />
              </button>
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};
