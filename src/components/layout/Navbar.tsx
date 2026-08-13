import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { Icon } from '../Icon';

export const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link to="/signin" className="btn btn-secondary" style={{ padding: '0.45rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Masuk</Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button className="btn-gradient" icon={<Icon name="ArrowRight" size={14} />} style={{ padding: '0.45rem 1rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.85rem' }}>
              Pesan Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
