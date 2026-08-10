import React from 'react';

const stats = [
  { label: 'Total Pelanggan Aktif', value: '2M+' },
  { label: 'Total Pendapatan (USD)', value: '$500M' },
  { label: 'Transaksi Berhasil', value: '99.9%' },
  { label: 'Negara Terjangkau', value: '120+' }
];

export const Stats: React.FC = () => {
  return (
    <section id="stats" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '1rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="glass-card"
              style={{ padding: '2rem 1.5rem' }}
            >
              <div style={{ 
                fontSize: '2.25rem', 
                fontWeight: 700, 
                marginBottom: '0.25rem', 
                lineHeight: 1.2,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
              }}>
                {stat.value}
              </div>
              <div style={{ 
                fontSize: '0.875rem', 
                color: 'var(--color-text-secondary)', 
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
