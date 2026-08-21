import React from 'react';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const integrations = [
  { name: 'Shopee', icon: 'ShoppingCart', desc: 'Sinkronisasi otomatis pesanan dari toko Shopee Anda.' },
  { name: 'Tokopedia', icon: 'Store', desc: 'Integrasi langsung dengan dashboard Tokopedia seller.' },
  { name: 'WhatsApp API', icon: 'MessageSquare', desc: 'Notifikasi status pengiriman otomatis ke pelanggan via WhatsApp.' },
  { name: 'Midtrans', icon: 'CreditCard', desc: 'Terima pembayaran online dengan berbagai metode: transfer, e-wallet, QRIS.' },
  { name: 'Google Maps', icon: 'MapPin', desc: 'Tracking lokasi paket real-time dan estimasi waktu tiba.' },
  { name: 'Excel / CSV', icon: 'FileSpreadsheet', desc: 'Import dan export data pesanan massal untuk kebutuhan bisnis.' },
];

export const IntegrationsPage: React.FC = () => {
  const containerRef = useStaggerReveal<HTMLDivElement>();
  return (
    <ContentPage badge="INTEGRASI" badgeIcon="Puzzle" title="Terhubung dengan tools Anda" subtitle="Integrasikan platform kami dengan marketplace dan tools yang sudah Anda gunakan sehari-hari.">
      <div ref={containerRef} className="grid-cards">
        {integrations.map((item, i) => {
          return (
            <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div className="icon-box">
                <Icon name={item.icon} size={18} color="var(--color-accent-amber)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.3rem' }}>{item.name}</h3>
                <p style={{ fontSize: '0.85rem', marginBottom: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};
