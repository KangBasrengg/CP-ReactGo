import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';

const features = [
  { icon: 'Zap', title: 'Lightning Fast', desc: 'Performa optimal dengan arsitektur modern yang dioptimasi untuk kecepatan loading di bawah 1 detik.' },
  { icon: 'Shield', title: 'Enterprise Security', desc: 'Keamanan berlapis dengan enkripsi end-to-end, SOC 2 compliance, dan audit trail lengkap.' },
  { icon: 'BarChart3', title: 'Real-time Analytics', desc: 'Dashboard analitik real-time untuk memantau performa bisnis Anda kapan saja dan di mana saja.' },
  { icon: 'Puzzle', title: 'Easy Integration', desc: 'Integrasi mudah dengan 100+ layanan pihak ketiga melalui REST API dan webhook.' },
  { icon: 'Users', title: 'Team Collaboration', desc: 'Fitur kolaborasi tim dengan role management, komentar, dan notifikasi real-time.' },
  { icon: 'Globe', title: 'Global CDN', desc: 'Jaringan distribusi global memastikan akses cepat dari lebih dari 120 negara di seluruh dunia.' },
];

export const FeaturesPage: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.3rem 0.9rem', background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.12)', color: 'var(--color-accent-violet)',
            borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.25rem',
            letterSpacing: '0.04em'
          }}>
            <Icon name="Sparkles" size={13} /> FEATURES
          </div>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Everything you need to scale</h1>
          <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Platform kami dirancang untuk memberikan pengalaman terbaik bagi tim Anda dengan fitur-fitur unggulan.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: string; title: string; desc: string; index: number }> = ({ icon, title, desc }) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
        background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Icon name={icon} size={18} color="var(--color-accent-violet)" />
      </div>
      <div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', marginBottom: 0, lineHeight: 1.65 }}>{desc}</p>
      </div>
    </div>
  );
};
