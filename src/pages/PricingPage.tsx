import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';

const plans = [
  {
    name: 'Reguler',
    price: 'Rp15K',
    period: '/kg',
    desc: 'Pengiriman standar dengan estimasi 3-5 hari kerja ke seluruh Indonesia.',
    features: ['Berat maks. 30kg', 'Tracking otomatis', 'Asuransi dasar', 'Notifikasi WhatsApp'],
    accent: 'rgba(18,165,148,0.15)',
    accentBorder: 'rgba(18,165,148,0.12)',
    popular: false,
  },
  {
    name: 'Express',
    price: 'Rp35K',
    period: '/kg',
    desc: 'Pengiriman cepat same-day atau next-day untuk kebutuhan mendesak.',
    features: ['Same-day / next-day', 'Prioritas pengiriman', 'Asuransi penuh', 'Tracking real-time', 'Packaging premium', 'Pickup gratis'],
    accent: 'rgba(232,162,56,0.15)',
    accentBorder: 'rgba(232,162,56,0.2)',
    popular: true,
  },
  {
    name: 'Bisnis',
    price: 'Custom',
    period: '',
    desc: 'Solusi pengiriman khusus untuk pelaku bisnis dan e-commerce skala besar.',
    features: ['Volume tak terbatas', 'Harga kontrak khusus', 'Dedicated account manager', 'API integrasi toko online', 'Laporan bulanan', 'SLA guarantee'],
    accent: 'rgba(32,201,151,0.15)',
    accentBorder: 'rgba(32,201,151,0.12)',
    popular: false,
  },
];

export const PricingPage: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section style={{ padding: '120px 0 80px' }}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Tarif Transparan</h1>
          <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Pilih paket pengiriman yang sesuai dengan kebutuhan Anda. Upgrade kapan saja tanpa biaya tambahan.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', alignItems: 'stretch' }}>
          {plans.map((plan, i) => {
            const ref = useScrollReveal<HTMLDivElement>();
            return (
              <div ref={ref} key={i} className="glass-card" style={{
                padding: '2.5rem 2rem',
                position: 'relative',
                border: plan.popular ? '1px solid rgba(232,162,56,0.3)' : undefined,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, rgba(232,162,56,0.8), rgba(196,120,40,0.8))',
                    padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600,
                    letterSpacing: '0.04em', color: 'white',
                  }}>
                    PALING POPULER
                  </div>
                )}

                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.15rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{plan.price}</span>
                  {plan.period && <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{plan.period}</span>}
                </div>
                <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: 1.6, flex: 1 }}>{plan.desc}</p>

                <Button
                  className={plan.popular ? 'btn-gradient' : 'btn-secondary'}
                  style={{ width: '100%', borderRadius: 'var(--glass-radius-sm)', marginBottom: '1.5rem', fontSize: '0.85rem' }}
                >
                  {plan.price === 'Custom' ? 'Hubungi Kami' : 'Pilih Paket'}
                </Button>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {plan.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      <Icon name="Check" size={14} color="var(--color-accent-violet)" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
