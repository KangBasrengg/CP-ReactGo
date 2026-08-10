import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';

export const ContactPage: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
  };

  const update = (key: string, value: string) => setFormData(prev => ({ ...prev, [key]: value }));

  return (
    <section style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Get in touch</h1>
          <p style={{ maxWidth: '480px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Ada pertanyaan atau ingin berdiskusi? Tim kami siap membantu Anda.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: 'Mail', label: 'Email', value: 'hello@cube.dev' },
              { icon: 'MapPin', label: 'Office', value: 'Jakarta, Indonesia' },
              { icon: 'Clock', label: 'Hours', value: 'Mon - Fri, 09:00 - 18:00 WIB' },
            ].map((item, i) => {
              const ref = useScrollReveal<HTMLDivElement>();
              return (
                <div ref={ref} key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '12px',
                    background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Icon name={item.icon} size={18} color="var(--color-accent-violet)" />
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
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Name</label>
                <div className="glass-input-wrapper">
                  <input type="text" value={formData.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" className="glass-input" required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Email</label>
                <div className="glass-input-wrapper">
                  <input type="email" value={formData.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" className="glass-input" required />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell us about your project..."
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
                Send Message <Icon name="Send" size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
