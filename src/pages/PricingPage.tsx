import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    desc: 'Untuk individu dan proyek kecil yang baru memulai.',
    features: ['1 project', '5GB storage', 'Community support', 'Basic analytics'],
    accent: 'rgba(103,232,249,0.15)',
    accentBorder: 'rgba(103,232,249,0.12)',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    desc: 'Untuk tim profesional yang membutuhkan fitur lengkap.',
    features: ['Unlimited projects', '100GB storage', 'Priority support', 'Advanced analytics', 'Team collaboration', 'Custom integrations'],
    accent: 'rgba(99,102,241,0.15)',
    accentBorder: 'rgba(99,102,241,0.2)',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/mo',
    desc: 'Untuk organisasi besar dengan kebutuhan khusus.',
    features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'SLA guarantee', 'SSO & SAML', 'Custom deployment'],
    accent: 'rgba(167,139,250,0.15)',
    accentBorder: 'rgba(167,139,250,0.12)',
    popular: false,
  },
];

export const PricingPage: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Simple, transparent pricing</h1>
          <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Pilih plan yang sesuai dengan kebutuhan bisnis Anda. Upgrade atau downgrade kapan saja.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', alignItems: 'start' }}>
          {plans.map((plan, i) => {
            const ref = useScrollReveal<HTMLDivElement>();
            return (
              <div ref={ref} key={i} className="glass-card" style={{
                padding: '2.5rem 2rem',
                position: 'relative',
                border: plan.popular ? '1px solid rgba(99,102,241,0.3)' : undefined,
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(139,92,246,0.8))',
                    padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600,
                    letterSpacing: '0.04em', color: 'white',
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.15rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{plan.price}</span>
                  {plan.period && <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{plan.period}</span>}
                </div>
                <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{plan.desc}</p>

                <Button
                  className={plan.popular ? 'btn-gradient' : 'btn-secondary'}
                  style={{ width: '100%', borderRadius: 'var(--glass-radius-sm)', marginBottom: '1.5rem', fontSize: '0.85rem' }}
                >
                  Get Started
                </Button>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {plan.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      <Icon name="Check" size={14} color="var(--color-accent-violet)" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
