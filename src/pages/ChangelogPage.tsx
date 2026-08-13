import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const logs = [
  { version: 'v2.4.0', date: '10 Aug 2026', type: 'Fitur', items: ['Layanan Jastip Premium dari 5 negara baru', 'Tracking real-time via Google Maps', 'Notifikasi WhatsApp otomatis'] },
  { version: 'v2.3.0', date: '28 Jul 2026', type: 'Peningkatan', items: ['Estimasi ongkir lebih akurat', 'Dashboard seller yang lebih cepat', 'Integrasi Shopee & Tokopedia'] },
  { version: 'v2.2.0', date: '15 Jul 2026', type: 'Fitur', items: ['Sistem pre-order dengan countdown timer', 'Multi-payment via Midtrans', 'Export laporan pengiriman ke CSV'] },
  { version: 'v2.1.0', date: '1 Jul 2026', type: 'Perbaikan', items: ['Perbaikan kalkulasi berat volumetrik', 'Fix notifikasi pengiriman gagal', 'Optimasi performa halaman tracking'] },
];

export const ChangelogPage: React.FC = () => {
  return (
    <ContentPage badge="CHANGELOG" badgeIcon="Clock" title="Yang Terbaru" subtitle="Semua update dan perubahan yang kami buat untuk meningkatkan layanan pengiriman.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {logs.map((log, i) => {
          const ref = useScrollReveal<HTMLDivElement>();
          return (
            <div ref={ref} key={i} className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{log.version}</span>
                <span style={{
                  padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600,
                  background: log.type === 'Fitur' ? 'rgba(32,201,151,0.15)' : log.type === 'Perbaikan' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)',
                  color: log.type === 'Fitur' ? '#20C997' : log.type === 'Perbaikan' ? '#34d399' : '#fbbf24',
                  border: `1px solid ${log.type === 'Fitur' ? 'rgba(32,201,151,0.2)' : log.type === 'Perbaikan' ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'}`,
                }}>
                  {log.type}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginLeft: 'auto' }}>{log.date}</span>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {log.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    <Icon name="ChevronRight" size={14} color="var(--color-text-muted)" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};
