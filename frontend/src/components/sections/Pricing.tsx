import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    desc: 'Perfect for small projects and solo developers.',
    features: ['Up to 5 projects', 'Basic analytics', '24-hour support response time', 'Community access'],
    isPopular: false
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    desc: 'Ideal for growing teams and serious businesses.',
    features: ['Unlimited projects', 'Advanced analytics', '1-hour support response time', 'Custom domains', 'Team collaboration'],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large scale organizations with specific needs.',
    features: ['Dedicated infrastructure', 'Custom integrations', '24/7 phone support', 'SLA guaranteed', 'Dedicated account manager'],
    isPopular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Simple, transparent pricing</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Choose the plan that fits your needs. No hidden fees, ever.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          {plans.map((plan, idx) => (
            <div key={idx} className="card" style={{ 
              position: 'relative',
              borderColor: plan.isPopular ? 'var(--color-primary)' : 'var(--color-border)',
              transform: plan.isPopular ? 'scale(1.05)' : 'none',
              zIndex: plan.isPopular ? 10 : 1
            }}>
              {plan.isPopular && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  background: 'var(--color-primary)', 
                  color: 'white', 
                  padding: '2px 12px', 
                  borderRadius: '12px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600 
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ minHeight: '48px' }}>{plan.desc}</p>
              <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>{plan.price}</span>
                <span style={{ color: 'var(--color-text-secondary)' }}>{plan.period}</span>
              </div>
              
              <Button variant={plan.isPopular ? 'primary' : 'secondary'} style={{ width: '100%', marginBottom: '2rem' }}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </Button>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                    <Icon name="CheckCircle2" size={18} color="var(--color-primary)" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
