import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`logo ${className || ''}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, rgba(232,162,56,0.3), rgba(196,120,40,0.3))',
        border: '1px solid rgba(255,255,255,0.12)',
        padding: '3px',
      }}>
        <img 
          src="https://cdn-icons-gif.flaticon.com/6416/6416387.gif" 
          alt="placeholder-name logo" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            borderRadius: '5px',
            mixBlendMode: 'screen',
            filter: 'brightness(1.2) contrast(1.1)',
          }} 
        />
      </div>
      <span style={{ color: 'var(--color-text-primary)' }}>placeholder-name</span>
    </div>
  );
};
