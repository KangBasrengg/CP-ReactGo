import React from 'react';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

const featuresList: { title: string; desc: string; icon: IconName }[] = [
  { title: 'Pengiriman Cepat', desc: 'Layanan same-day dan next-day delivery ke seluruh kota besar di Indonesia dengan armada terpercaya.', icon: 'Zap' },
  { title: 'Paket Aman & Terjamin', desc: 'Setiap paket diasuransikan dan dikemas dengan standar keamanan tinggi untuk melindungi barang Anda.', icon: 'Shield' },
  { title: 'Lacak Real-Time', desc: 'Pantau posisi paket Anda secara real-time melalui dashboard atau notifikasi WhatsApp otomatis.', icon: 'MapPin' },
  { title: 'Open Pre-Order', desc: 'Layanan pre-order barang dari luar negeri maupun dalam negeri dengan sistem pembayaran yang fleksibel.', icon: 'ShoppingCart' },
  { title: 'Jastip Terpercaya', desc: 'Penitipan pembelian dari marketplace luar negeri, oleh-oleh, atau barang limited edition dengan harga transparan.', icon: 'Package' },
  { title: 'Dukungan 24/7', desc: 'Tim customer service kami siap membantu Anda kapan saja melalui chat, telepon, atau email.', icon: 'LifeBuoy' }
];

export const Features: React.FC = () => {
  return (
    <section id="features" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Layanan Unggulan Kami</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Semua yang Anda butuhkan untuk mengirim, memesan, dan menitipkan barang — dalam satu platform terpercaya.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {featuresList.map((feature, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                background: 'rgba(232, 162, 56, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--color-primary)'
              }}>
                <Icon name={feature.icon} size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{feature.title}</h3>
              <p style={{ marginBottom: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
