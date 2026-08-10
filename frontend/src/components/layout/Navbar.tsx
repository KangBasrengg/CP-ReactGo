import React from 'react';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { Icon } from '../Icon';

export const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#login" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-text-secondary)', transition: 'color 0.2s', padding: '0.4rem 0.6rem' }}>Sign in</a>
          <Button className="btn-gradient" icon={<Icon name="ArrowRight" size={14} />} style={{ padding: '0.45rem 1rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.85rem' }}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
