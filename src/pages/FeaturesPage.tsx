import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';

const features = [
  { icon: 'Zap', title: 'Pengiriman Cepat', desc: 'Layanan same-day dan next-day delivery ke seluruh kota besar di Indonesia dengan armada terpercaya.' },
  { icon: 'Shield', title: 'Asuransi Paket', desc: 'Setiap paket diasuransikan dan dikemas dengan standar keamanan tinggi untuk melindungi barang Anda.' },
  { icon: 'BarChart3', title: 'Tracking Real-Time', desc: 'Pantau posisi paket Anda secara real-time melalui dashboard atau notifikasi WhatsApp otomatis.' },
  { icon: 'ShoppingCart', title: 'Open Pre-Order', desc: 'Layanan pre-order barang dari luar negeri maupun dalam negeri dengan sistem pembayaran yang fleksibel.' },
  { icon: 'Package', title: 'Jastip Terpercaya', desc: 'Penitipan pembelian dari marketplace luar negeri, oleh-oleh, atau barang limited edition dengan harga transparan.' },
  { icon: 'Globe', title: 'Jangkauan Luas', desc: 'Melayani pengiriman ke 350+ kota di Indonesia dan pre-order dari 15+ negara di seluruh dunia.' },
];

export const FeaturesPage: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="section-photo fade-to-footer" style={{ padding: '120px 0 80px', minHeight: '100vh' }}>
      <div className="container">
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.3rem 0.9rem', background: 'rgba(232, 162, 56, 0.08)',
            border: '1px solid rgba(232, 162, 56, 0.15)', color: 'var(--color-accent-amber)',
            borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1.25rem',
            letterSpacing: '0.04em'
          }}>
            <Icon name="Sparkles" size={13} /> LAYANAN
          </div>
          <h1 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Semua yang Anda butuhkan</h1>
          <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Platform kami dirancang untuk memberikan pengalaman terbaik dalam pengiriman, pre-order, dan penitipan pembelian.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: string; title: string; desc: string; index: number }> = ({ icon, title, desc }) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
        background: 'rgba(232,162,56,0.1)', border: '1px solid rgba(232,162,56,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Icon name={icon} size={18} color="var(--color-accent-amber)" />
      </div>
      <div>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', marginBottom: 0, lineHeight: 1.65 }}>{desc}</p>
      </div>
    </div>
  );
};
