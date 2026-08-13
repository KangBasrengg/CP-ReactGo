import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const integrations = [
  { name: 'Slack', icon: 'MessageSquare', desc: 'Kirim notifikasi langsung ke channel Slack tim Anda.' },
  { name: 'GitHub', icon: 'Github', desc: 'Sinkronisasi repositori dan deploy otomatis.' },
  { name: 'Google Analytics', icon: 'BarChart3', desc: 'Pantau traffic dan konversi secara real-time.' },
  { name: 'Stripe', icon: 'CreditCard', desc: 'Terima pembayaran online dari seluruh dunia.' },
  { name: 'AWS', icon: 'Cloud', desc: 'Deploy dan scale infrastruktur dengan mudah.' },
  { name: 'Zapier', icon: 'Zap', desc: 'Otomatisasi workflow dengan 5000+ aplikasi.' },
];

export const IntegrationsPage: React.FC = () => {
  return (
    <ContentPage badge="INTEGRATIONS" badgeIcon="Puzzle" title="Connect your favorite tools" subtitle="Integrasikan platform kami dengan tools yang sudah Anda gunakan sehari-hari.">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {integrations.map((item, i) => {
          const ref = useScrollReveal<HTMLDivElement>();
          return (
            <div ref={ref} key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Icon name={item.icon} size={18} color="var(--color-accent-violet)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{item.name}</h3>
                <p style={{ fontSize: '0.85rem', marginBottom: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};
