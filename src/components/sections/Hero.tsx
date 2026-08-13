import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-glow-container">
        <div className="bg-glow-cyan"></div>
        <div className="bg-glow-purple"></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content animate-fade-in">
          <h1>
            A powerful suite of <br/> user-centric products
          </h1>
          <p className="delay-100" style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
          </p>
          <div className="hero-actions delay-200">
            <Button className="btn-gradient" icon={<Icon name="ArrowRight" size={15} />} style={{ padding: '0.65rem 1.35rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.9rem' }}>
              Get Started Free
            </Button>
            <Button variant="secondary" style={{ borderRadius: '9999px', fontSize: '0.9rem', padding: '0.65rem 1.35rem' }}>
              Read Docs
            </Button>
          </div>
        </div>
        
        {/* Dashboard Mockup — Liquid Glass Panel */}
        <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }} className="animate-fade-in delay-300">
          <div className="glass-card" style={{ 
            width: '100%', 
            maxWidth: '920px', 
            height: '440px', 
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--glass-radius-lg)',
          }}>
            {/* Window Header */}
            <div style={{ 
              height: '36px', 
              borderBottom: '1px solid rgba(255,255,255,0.06)', 
              display: 'flex',
              alignItems: 'center',
              padding: '0 1rem',
              gap: '6px'
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(239,68,68,0.7)' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(245,158,11,0.7)' }}></div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(16,185,129,0.7)' }}></div>
            </div>
            
            {/* Window Body */}
            <div style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', height: 'calc(100% - 36px)' }}>
              
              {/* Sidebar */}
              <div style={{ 
                width: '180px', 
                flexShrink: 0,
                background: 'rgba(255,255,255,0.02)', 
                borderRadius: 'var(--glass-radius-sm)', 
                border: '1px solid rgba(255,255,255,0.04)',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, rgba(99,102,241,0.4), rgba(167,139,250,0.4))' }}></div>
                  <div style={{ width: '50px', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}></div>
                </div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{ 
                    width: '100%', height: '28px', 
                    background: i === 0 ? 'rgba(99,102,241,0.12)' : 'transparent', 
                    borderRadius: '8px', 
                    border: i === 0 ? '1px solid rgba(99,102,241,0.15)' : 'none',
                    display: 'flex', alignItems: 'center', paddingLeft: '0.6rem', gap: '0.5rem'
                  }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: `rgba(255,255,255,${i === 0 ? 0.15 : 0.05})` }}></div>
                    <div style={{ width: `${40 + i * 8}px`, height: '6px', background: `rgba(255,255,255,${i === 0 ? 0.12 : 0.04})`, borderRadius: '3px' }}></div>
                  </div>
                ))}
              </div>

              {/* Main content area */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Top row: mini stat cards */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {[
                    { color: 'rgba(103, 232, 249, 0.15)', border: 'rgba(103, 232, 249, 0.12)' },
                    { color: 'rgba(167, 139, 250, 0.15)', border: 'rgba(167, 139, 250, 0.12)' },
                    { color: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.12)' },
                  ].map((s, i) => (
                    <div key={i} style={{ 
                      flex: 1, height: '72px', 
                      background: s.color, 
                      borderRadius: 'var(--glass-radius-sm)', 
                      border: `1px solid ${s.border}`,
                      padding: '0.75rem',
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                      <div style={{ width: '40px', height: '5px', background: 'rgba(255,255,255,0.15)', borderRadius: '3px' }}></div>
                      <div style={{ width: '55px', height: '10px', background: 'rgba(255,255,255,0.12)', borderRadius: '5px' }}></div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div style={{ 
                  flex: 1, 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: 'var(--glass-radius-sm)', 
                  border: '1px solid rgba(255,255,255,0.04)',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '6px',
                  overflow: 'hidden'
                }}>
                  {[40, 65, 45, 80, 55, 90, 70, 50, 85, 60, 75, 95, 50, 65, 80].map((h, i) => (
                    <div key={i} style={{ 
                      flex: 1, 
                      height: `${h}%`, 
                      background: `linear-gradient(to top, rgba(99,102,241,0.3), rgba(167,139,250,0.1))`,
                      borderRadius: '4px 4px 0 0',
                      minWidth: '0',
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
