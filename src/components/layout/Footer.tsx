import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';
import { Icon } from '../Icon';

export const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="section-solid" style={{ padding: '3rem 0 2rem', background: '#061832' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '3rem' }}>
          <div style={{ flex: '1', minWidth: '220px' }}>
            <Logo />
            <p style={{ marginTop: '1rem', maxWidth: '280px', fontSize: '0.85rem', lineHeight: 1.7 }}>
              Layanan pengiriman barang, open pre-order, dan penitipan pembelian terpercaya di Indonesia.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {['Twitter', 'Github', 'Linkedin'].map(icon => (
                <a key={icon} href="#" className="footer-social-icon">
                  <Icon name={icon} size={16} />
                </a>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              { title: 'Product', links: [{name: 'Features', path: '/features'}, {name: 'Integrations', path: '/integrations'}, {name: 'Pricing', path: '/pricing'}, {name: 'Changelog', path: '/changelog'}] },
              { title: 'Company', links: [{name: 'About Us', path: '/about'}, {name: 'Profile', path: '/profile'}, {name: 'Careers', path: '/careers'}, {name: 'Contact', path: '/contact'}] },
            ].map(section => (
              <div key={section.title}>
                <h4 style={{ fontSize: '0.85rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>{section.title}</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {section.links.map(link => {
                    const isActive = location.pathname === link.path;
                    return (
                      <li key={link.name}>
                        <Link to={link.path} className={`footer-link ${isActive ? 'active' : ''}`}>
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} placeholder-name Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
