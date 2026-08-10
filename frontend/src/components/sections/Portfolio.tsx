import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const projects = [
  {
    title: 'FinanceFlow',
    category: 'Fintech Dashboard',
    desc: 'Sistem manajemen keuangan enterprise dengan analitik real-time dan prediksi AI.',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(45,212,191,0.15))',
    accent: 'rgba(59,130,246,0.35)',
  },
  {
    title: 'HealthSync',
    category: 'Healthcare App',
    desc: 'Platform telemedicine terintegrasi yang menghubungkan pasien dengan ratusan rumah sakit.',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.25), rgba(139,92,246,0.15))',
    accent: 'rgba(236,72,153,0.35)',
  },
  {
    title: 'EcoLogistics',
    category: 'Supply Chain',
    desc: 'Optimasi rute pengiriman dan pelacakan armada menggunakan teknologi satelit.',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.25), rgba(245,158,11,0.15))',
    accent: 'rgba(16,185,129,0.35)',
  }
];

export const Portfolio: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const staggerRef = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section id="portfolio" style={{ padding: '80px 0' }}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Produk & Portofolio Kami</h2>
          <p style={{ maxWidth: '540px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Kami telah membangun berbagai produk digital yang mentransformasi cara bisnis beroperasi.
          </p>
        </div>
        
        <div ref={staggerRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                height: '180px', 
                background: project.gradient, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: project.accent,
                  filter: 'blur(40px)',
                }}></div>
                <Icon name="Image" size={36} color="rgba(255,255,255,0.3)" />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--color-accent-violet)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ marginBottom: '1.5rem', flex: 1, fontSize: '0.9rem', lineHeight: 1.65 }}>{project.desc}</p>
                <Button variant="secondary" style={{ width: '100%', borderRadius: 'var(--glass-radius-sm)', fontSize: '0.85rem' }}>Lihat Detail</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
