import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`logo ${className || ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      <div style={{ position: 'relative', width: '28px', height: '28px' }}>
        {/* Top Face */}
        <div style={{ position: 'absolute', top: '0', left: '7px', width: '14px', height: '14px', background: '#a78bfa', transform: 'rotate(45deg) skew(15deg, 15deg)', borderRadius: '2px' }}></div>
        {/* Left Face */}
        <div style={{ position: 'absolute', top: '12px', left: '0px', width: '14px', height: '14px', background: '#7c3aed', transform: 'skewY(45deg)', borderRadius: '2px' }}></div>
        {/* Right Face */}
        <div style={{ position: 'absolute', top: '12px', left: '14px', width: '14px', height: '14px', background: '#6366f1', transform: 'skewY(-45deg)', borderRadius: '2px' }}></div>
      </div>
      <span style={{ color: 'var(--color-text-primary)' }}>Cube</span>
    </div>
  );
};
