import React from 'react';
import { Icon } from '../Icon';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const team = [
  { name: 'Ahmad Fauzan', role: 'Chief Executive Officer', image: 'https://i.pravatar.cc/150?u=ahmad' },
  { name: 'Siti Nurhaliza', role: 'Head of Operations', image: 'https://i.pravatar.cc/150?u=siti' },
  { name: 'Rizky Pratama', role: 'Head of Logistics', image: 'https://i.pravatar.cc/150?u=rizky' },
  { name: 'Diana Putri', role: 'Head of Customer Experience', image: 'https://i.pravatar.cc/150?u=diana' }
];

const values = [
  { icon: 'Shield', title: 'Amanah', desc: 'Setiap barang dijaga seperti milik sendiri.' },
  { icon: 'Clock', title: 'Tepat Waktu', desc: 'Komitmen pengiriman sesuai estimasi.' },
  { icon: 'Heart', title: 'Pelayanan Tulus', desc: 'CS responsif dan ramah 24/7.' },
];

export const About: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const staggerRef = useStaggerReveal<HTMLDivElement>(100);

  return (
    <section id="about" style={{ padding: '80px 0' }}>
      <div className="container">
        
        {/* About — LEFT ALIGNED with side values */}
        <div ref={headerRef} style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'start', marginBottom: '5rem' }}>
          <div>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem', 
              padding: '0.3rem 0.9rem', 
              background: 'rgba(232, 162, 56, 0.08)', 
              border: '1px solid rgba(232, 162, 56, 0.15)',
              color: 'var(--color-accent-amber)', 
              borderRadius: '9999px',
              fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.5rem',
              letterSpacing: '0.04em'
            }}>
              <Icon name="Info" size={13} /> TENTANG KAMI
            </div>
            <h2 style={{ marginBottom: '1.25rem', maxWidth: '500px' }}>
              Menghubungkan Indonesia Melalui Pengiriman Terpercaya
            </h2>
            <p style={{ fontSize: '0.95rem', maxWidth: '480px', lineHeight: 1.75 }}>
              Didirikan pada tahun 2023, placeholder-name hadir sebagai solusi lengkap untuk pengiriman barang, 
              layanan pre-order, dan penitipan pembelian dari luar negeri. Kami percaya bahwa setiap orang berhak 
              mendapatkan akses mudah ke produk dari mana saja dengan harga yang transparan dan pelayanan yang amanah.
            </p>
          </div>

          {/* Values — right side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '2rem' }}>
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                  background: 'rgba(232, 162, 56, 0.10)', border: '1px solid rgba(232, 162, 56, 0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <Icon name={v.icon} size={18} color="var(--color-accent-amber)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.15rem' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.8rem', marginBottom: 0, lineHeight: 1.5 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team — centered, this one is fine centered */}
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
                <p style={{ color: 'var(--color-accent-amber)', fontSize: '0.8rem', marginBottom: 0, fontWeight: 500 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
