import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const projects = [
  {
    title: 'Express Delivery',
    category: 'Jasa Pengiriman',
    desc: 'Layanan pengiriman same-day dan next-day ke 350+ kota. Dilengkapi asuransi paket dan tracking real-time.',
    gradient: 'linear-gradient(135deg, rgba(232,162,56,0.20), rgba(18,165,148,0.12))',
    accent: 'rgba(232,162,56,0.30)',
  },
  {
    title: 'Open Pre-Order Hub',
    category: 'Pre-Order Service',
    desc: 'Layanan PO barang dari Korea, Jepang, USA, dan Eropa. Mulai dari skincare, gadget, hingga fashion brand ternama.',
    gradient: 'linear-gradient(135deg, rgba(77,184,164,0.20), rgba(91,168,154,0.12))',
    accent: 'rgba(77,184,164,0.30)',
  },
  {
    title: 'Jastip Premium',
    category: 'Penitipan Pembelian',
    desc: 'Titip beli oleh-oleh, barang limited edition, atau produk eksklusif dari luar negeri. Harga transparan, tanpa biaya tersembunyi.',
    gradient: 'linear-gradient(135deg, rgba(32,201,151,0.20), rgba(232,162,56,0.12))',
    accent: 'rgba(32,201,151,0.30)',
  }
];

export const Portfolio: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const staggerRef = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section id="portfolio" style={{ padding: '80px 0' }}>
      <div className="container">
        {/* LEFT-ALIGNED header */}
        <div ref={headerRef} style={{ marginBottom: '3rem', maxWidth: '520px' }}>
          <h2>Layanan & Portofolio Kami</h2>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
            Tiga layanan utama yang telah dipercaya ribuan pelanggan di seluruh Indonesia.
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
                <Icon name="Package" size={36} color="rgba(255,255,255,0.3)" />
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--color-accent-amber)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
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
