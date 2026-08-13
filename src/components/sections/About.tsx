import React from 'react';
import { Icon } from '../Icon';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const team = [
  { name: 'Budi Santoso', role: 'Chief Executive Officer', image: 'https://i.pravatar.cc/150?u=budi' },
  { name: 'Siti Aminah', role: 'Chief Technology Officer', image: 'https://i.pravatar.cc/150?u=siti' },
  { name: 'Reza Rahadian', role: 'VP of Engineering', image: 'https://i.pravatar.cc/150?u=reza' },
  { name: 'Nadia Makarim', role: 'Head of Product', image: 'https://i.pravatar.cc/150?u=nadia' }
];

export const About: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const staggerRef = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section id="about" style={{ padding: '80px 0' }}>
      <div className="container">
        
        {/* About section */}
        <div ref={headerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem', 
            padding: '0.3rem 0.9rem', 
            background: 'rgba(99, 102, 241, 0.08)', 
            border: '1px solid rgba(99, 102, 241, 0.12)',
            color: 'var(--color-accent-violet)', 
            borderRadius: '9999px',
            fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.5rem',
            letterSpacing: '0.04em'
          }}>
            <Icon name="Info" size={13} /> TENTANG KAMI
          </div>
          <h2 style={{ marginBottom: '1.25rem', maxWidth: '680px' }}>
            Membangun Ekosistem Digital yang Berkelanjutan
          </h2>
          <p style={{ fontSize: '0.95rem', maxWidth: '620px', lineHeight: 1.75 }}>
            Didirikan pada tahun 2020, perusahaan kami berfokus pada pengembangan produk-produk inovatif yang berpusat pada pengguna. Kami percaya bahwa teknologi harus memudahkan, bukan menyulitkan.
          </p>
        </div>

        {/* Team */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.35rem' }}>Tim Manajemen</h3>
          </div>
          
          <div ref={staggerRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="glass-card"
                style={{ 
                  padding: '2rem 1.5rem', 
                  textAlign: 'center', 
                  width: '240px',
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ 
                    width: '80px', height: '80px', borderRadius: '50%', 
                    objectFit: 'cover', marginBottom: '1.25rem', 
                    border: '2px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }} 
                />
                <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>{member.name}</h4>
                <p style={{ color: 'var(--color-accent-violet)', fontSize: '0.8rem', marginBottom: 0, fontWeight: 500 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
