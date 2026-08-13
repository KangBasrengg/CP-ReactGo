import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

const plans = [
  {
    name: 'Reguler',
    price: 'Rp15K',
    period: '/kg',
    desc: 'Pengiriman standar dengan estimasi 3-5 hari kerja ke seluruh Indonesia.',
    features: ['Berat maks. 30kg', 'Tracking otomatis', 'Asuransi dasar', 'Notifikasi WhatsApp'],
    isPopular: false
  },
  {
    name: 'Express',
    price: 'Rp35K',
    period: '/kg',
    desc: 'Pengiriman cepat same-day atau next-day untuk kebutuhan mendesak.',
    features: ['Same-day / next-day', 'Prioritas pengiriman', 'Asuransi penuh', 'Tracking real-time', 'Packaging premium'],
    isPopular: true
  },
  {
    name: 'Bisnis',
    price: 'Custom',
    period: '',
    desc: 'Solusi pengiriman khusus untuk pelaku bisnis dan e-commerce skala besar.',
    features: ['Volume tak terbatas', 'Harga kontrak khusus', 'Dedicated account manager', 'API integrasi toko online', 'Laporan bulanan'],
    isPopular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Tarif Transparan</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Pilih paket pengiriman yang sesuai kebutuhan Anda. Tanpa biaya tersembunyi.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          alignItems: 'center'
        }}>
          {plans.map((plan, idx) => (
            <div key={idx} className="glass-card" style={{ 
              position: 'relative',
              padding: '2rem',
              borderColor: plan.isPopular ? 'var(--color-primary)' : undefined,
              transform: plan.isPopular ? 'scale(1.05)' : 'none',
              zIndex: plan.isPopular ? 10 : 1
            }}>
              {plan.isPopular && (
                <div style={{ 
                  position: 'absolute', 
                  top: '-12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.8), rgba(139,92,246,0.8))', 
                  color: 'white', 
                  padding: '2px 12px', 
                  borderRadius: '12px', 
                  fontSize: '0.75rem', 
                  fontWeight: 600 
                }}>
                  Paling Populer
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ minHeight: '48px' }}>{plan.desc}</p>
              <div style={{ margin: '2rem 0', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>{plan.price}</span>
                <span style={{ color: 'var(--color-text-secondary)' }}>{plan.period}</span>
              </div>
              
              <Button className={plan.isPopular ? 'btn-gradient' : ''} variant={plan.isPopular ? 'primary' : 'secondary'} style={{ width: '100%', marginBottom: '2rem', borderRadius: 'var(--glass-radius-sm)' }}>
                {plan.price === 'Custom' ? 'Hubungi Kami' : 'Pilih Paket'}
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
