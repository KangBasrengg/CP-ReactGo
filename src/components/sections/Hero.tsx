import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

const steps = [
  {
    icon: 'ClipboardList',
    step: '01',
    title: 'Pilih Layanan',
    desc: 'Pilih jenis layanan: pengiriman, pre-order, atau jastip sesuai kebutuhan Anda.',
  },
  {
    icon: 'CreditCard',
    step: '02',
    title: 'Konfirmasi & Bayar',
    desc: 'Isi detail pesanan, konfirmasi alamat, dan lakukan pembayaran dengan mudah.',
  },
  {
    icon: 'Truck',
    step: '03',
    title: 'Terima Barang',
    desc: 'Pantau pengiriman real-time dan terima barang Anda dengan aman di depan pintu.',
  },
];

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-glow">
        <div className="bg-glow-cyan"></div>
        <div className="bg-glow-purple"></div>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <h1 className="fade-in">
            Kirim Barang, Pre-Order <br/> & Jastip Tanpa Ribet
          </h1>
          <p className="fade-in delay-100" style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Layanan jasa pengiriman barang, open pre-order, dan penitipan pembelian terpercaya. Cepat, aman, dan transparan dari mana saja ke seluruh Indonesia.
          </p>
          <div className="hero-actions">
            <Button className="btn-gradient fade-in delay-200" icon={<Icon name="ArrowRight" size={15} />} style={{ padding: '0.65rem 1.35rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.9rem' }}>
              Pesan Sekarang
            </Button>
            <Button variant="secondary" className="fade-in delay-200" style={{ borderRadius: '9999px', fontSize: '0.9rem', padding: '0.65rem 1.35rem' }}>
              Cek Tarif Ongkir
            </Button>
          </div>
        </div>
        
        {/* Cara Pemesanan — 3 Steps */}
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', maxWidth: '920px', marginLeft: 'auto', marginRight: 'auto' }}>
          {steps.map((s, i) => (
            <div key={i} className={`glass-card animate-fade-in delay-${(i + 3) * 100}`} style={{ 
              padding: '2rem 1.5rem', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: 'rgba(232, 162, 56, 0.12)',
                border: '1px solid rgba(232, 162, 56, 0.18)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={s.icon} size={22} color="var(--color-accent-amber)" />
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-accent-amber)', letterSpacing: '0.1em' }}>
                STEP {s.step}
              </span>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.15rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.85rem', marginBottom: 0, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
