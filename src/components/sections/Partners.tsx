import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const partners = [
  "JNE Express", "SiCepat", "J&T Cargo", "AnterAja", "Pos Indonesia", "Ninja Xpress", "Grab Express", "GoSend"
];

export const Partners: React.FC = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="partners" style={{ padding: '2.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container" ref={ref}>
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500 }}>
          Bekerja sama dengan ekspedisi terpercaya di seluruh Indonesia
        </p>
        <div className="marquee-container">
          <div className="marquee-content" style={{ gap: '4rem', paddingRight: '4rem' }}>
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-secondary)', opacity: 0.4, whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
