import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const posts = [
  { title: 'Tips Packing Aman untuk Pengiriman Barang Pecah Belah', date: '10 Aug 2026', readTime: '5 min', category: 'Tips' },
  { title: 'Panduan Lengkap Pre-Order Barang dari Korea & Jepang', date: '2 Aug 2026', readTime: '8 min', category: 'Guide' },
  { title: 'Cara Menghitung Estimasi Ongkir yang Tepat', date: '25 Jul 2026', readTime: '4 min', category: 'Tutorial' },
  { title: 'Jastip vs Beli Langsung: Mana yang Lebih Hemat?', date: '18 Jul 2026', readTime: '6 min', category: 'Insight' },
];

export const BlogPage: React.FC = () => {
  return (
    <ContentPage badge="BLOG" badgeIcon="BookOpen" title="Tips & Artikel" subtitle="Panduan, tips pengiriman, dan insight seputar pre-order dan jastip dari tim kami.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {posts.map((post, i) => {
          const ref = useScrollReveal<HTMLDivElement>();
          return (
            <div ref={ref} key={i} className="glass-card" style={{ padding: '2rem', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600,
                  background: 'rgba(32,201,151,0.12)', color: 'var(--color-accent-teal)',
                  border: '1px solid rgba(32,201,151,0.15)',
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{post.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  <Icon name="Clock" size={12} /> {post.readTime}
                </span>
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0' }}>{post.title}</h3>
            </div>
          );
        })}
      </div>
    </ContentPage>
  );
};
