import React, { useState } from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { useLocation } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const containerRef = useStaggerReveal<HTMLDivElement>();
  const location = useLocation();
  const isStandalone = location.pathname !== '/';
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
  };

  const update = (key: string, value: string) => setFormData(prev => ({ ...prev, [key]: value }));

  return (
    <section className={`page-section ${isStandalone ? "section-photo fade-to-footer" : ""}`} style={{ minHeight: isStandalone ? '100vh' : undefined }}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Hubungi Kami</h1>
          <p style={{ maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Punya pertanyaan tentang pengiriman, pre-order, atau jastip? Tim kami siap membantu Anda.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Contact info */}
          <div ref={containerRef} className="flex-col">
            {[
              { icon: 'Mail', label: 'Email', value: 'hello@placeholder-name.dev' },
              { icon: 'Phone', label: 'WhatsApp', value: '+62 812-3456-7890' },
              { icon: 'MapPin', label: 'Kantor', value: 'Jakarta Selatan, Indonesia' },
              { icon: 'Clock', label: 'Jam Operasional', value: 'Senin - Sabtu, 08:00 - 20:00 WIB' },
            ].map((item, i) => {
              return (
                <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="icon-box">
                    <Icon name={item.icon} size={18} color="var(--color-accent-amber)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 500, marginBottom: '0.15rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact form */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Nama</label>
                <div className="input-box">
                  <input type="text" value={formData.name} onChange={(e) => update('name', e.target.value)} placeholder="Nama lengkap" className="glass-input" required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Email</label>
                <div className="input-box">
                  <input type="email" value={formData.email} onChange={(e) => update('email', e.target.value)} placeholder="email@contoh.com" className="glass-input" required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Pesan</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Ceritakan kebutuhan pengiriman Anda..."
                  className="glass-input"
                  rows={4}
                  required
                  style={{
                    width: '100%', resize: 'vertical',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--glass-radius-sm)', padding: '0.75rem',
                    color: 'var(--color-text-primary)', fontFamily: 'inherit', fontSize: '0.85rem',
                    outline: 'none', transition: 'border-color 0.3s',
                  }}
                />
              </div>
              <button type="submit" className="btn btn-gradient" style={{ width: '100%', borderRadius: 'var(--glass-radius-sm)', padding: '0.75rem', fontSize: '0.9rem' }}>
                Kirim Pesan <Icon name="Send" size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
