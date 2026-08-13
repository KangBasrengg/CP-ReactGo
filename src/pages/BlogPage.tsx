import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Icon } from '../components/Icon';
import { ContentPage } from './ContentPage';

const posts = [
  { title: 'Membangun UI Modern dengan Liquid Glass Design', date: '5 Aug 2026', readTime: '5 min', category: 'Design' },
  { title: 'Best Practices untuk React + Go Architecture', date: '28 Jul 2026', readTime: '8 min', category: 'Engineering' },
  { title: 'Mengoptimalkan Performance Web App di 2026', date: '15 Jul 2026', readTime: '6 min', category: 'Performance' },
  { title: 'Panduan Lengkap: Deployment dengan Go Backend', date: '1 Jul 2026', readTime: '10 min', category: 'DevOps' },
];

export const BlogPage: React.FC = () => {
  return (
    <ContentPage badge="BLOG" badgeIcon="BookOpen" title="Insights & articles" subtitle="Tips, tutorial, dan insight dari tim engineering kami.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {posts.map((post, i) => {
          const ref = useScrollReveal<HTMLDivElement>();
          return (
            <div ref={ref} key={i} className="glass-card" style={{ padding: '2rem', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '0.15rem 0.6rem', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: 600,
                  background: 'rgba(99,102,241,0.12)', color: 'var(--color-accent-violet)',
                  border: '1px solid rgba(99,102,241,0.15)',
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
