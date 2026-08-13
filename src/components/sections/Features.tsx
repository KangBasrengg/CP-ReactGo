import React from 'react';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

const featuresList: { title: string; desc: string; icon: IconName }[] = [
  { title: 'Lightning Fast', desc: 'Built on top of cutting edge tech, resulting in blazing fast performance.', icon: 'Zap' },
  { title: 'Secure by Default', desc: 'Security is a top priority, we provide you with all the necessary tools.', icon: 'Shield' },
  { title: 'Easy Integrations', desc: 'Connect your favorite tools easily without writing a single line of code.', icon: 'Puzzle' },
  { title: 'Customizable', desc: 'Change everything you want with our powerful configuration options.', icon: 'Settings' },
  { title: 'Analytics', desc: 'Understand your audience with our built-in analytics dashboard.', icon: 'BarChart' },
  { title: '24/7 Support', desc: 'Our team is here to help you 24/7. Never feel alone again.', icon: 'LifeBuoy' }
];

export const Features: React.FC = () => {
  return (
    <section id="features" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Packed with incredible features</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to build a powerful web application, right out of the box.
            No more hunting for third-party libraries.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {featuresList.map((feature, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                background: 'rgba(99, 102, 241, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{feature.title}</h3>
              <p style={{ marginBottom: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
