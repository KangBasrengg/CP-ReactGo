import React from 'react';
import { Logo } from '../Logo';
import { Icon } from '../Icon';

export const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '3rem 0 2rem', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '3rem' }}>
          <div style={{ flex: '1', minWidth: '220px' }}>
            <Logo />
            <p style={{ marginTop: '1rem', maxWidth: '280px', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Building the future of web applications, one component at a time.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {['Twitter', 'Github', 'Linkedin'].map(icon => (
                <a key={icon} href="#" style={{ 
                  color: 'var(--color-text-muted)', 
                  transition: 'color 0.2s',
                  display: 'flex',
                  padding: '0.4rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}>
                  <Icon name={icon} size={16} />
                </a>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
            ].map(section => (
              <div key={section.title}>
                <h4 style={{ fontSize: '0.85rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>{section.title}</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {section.links.map(link => (
                    <li key={link}><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 400, transition: 'color 0.2s' }}>{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Cube Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
