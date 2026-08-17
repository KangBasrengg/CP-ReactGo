import React from 'react';
import { ContentPage } from './ContentPage';

export const AboutPage: React.FC = () => {
  return (
    <ContentPage badge="TENTANG KAMI" badgeIcon="Info" title="Cerita Kami" subtitle="Mengenal lebih dekat placeholder-name dan layanan yang kami tawarkan.">
      <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 0 }}>
          placeholder-name didirikan pada tahun 2023 dengan misi sederhana: mempermudah masyarakat Indonesia 
          dalam mengirim barang, memesan produk dari luar negeri, dan melakukan penitipan pembelian dengan aman dan transparan.
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 0 }}>
          Berawal dari layanan jastip kecil-kecilan antar teman, kini kami telah berkembang menjadi platform 
          pengiriman dan pre-order yang melayani ribuan pelanggan di seluruh Indonesia. Kami bekerja sama dengan 
          ekspedisi-ekspedisi terpercaya seperti JNE, SiCepat, J&T, dan lainnya untuk memastikan setiap paket 
          sampai dengan selamat.
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 0 }}>
          Visi kami adalah menjadi platform one-stop solution untuk kebutuhan pengiriman dan pembelian lintas negara, 
          dengan mengutamakan kepercayaan, kecepatan, dan harga yang fair. Setiap transaksi dilindungi asuransi 
          dan pelanggan dapat melacak status pengiriman secara real-time kapan saja.
        </p>
      </div>
    </ContentPage>
  );
};