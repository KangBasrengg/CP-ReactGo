import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';

/**
 * Reusable simple page layout for content pages (Blog, Careers, Legal, etc.)
 */
export const ContentPage: React.FC<{
  badge?: string;
  badgeIcon?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}> = ({ badge, badgeIcon, title, subtitle, children }) => {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ padding: '120px 0 80px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          {badge && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.3rem 0.9rem', background: 'rgba(32,201,151,0.08)',
              border: '1px solid rgba(32,201,151,0.12)', color: 'var(--color-accent-teal)',
              borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.25rem',
              letterSpacing: '0.04em'
            }}>
              {badgeIcon && <Icon name={badgeIcon} size={13} />} {badge}
            </div>
          )}
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>{title}</h1>
          {subtitle && <p style={{ maxWidth: '540px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};
