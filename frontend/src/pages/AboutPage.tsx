import React from 'react';
import { ContentPage } from './ContentPage';

export const AboutPage: React.FC = () => {
  return (
    <ContentPage badge="ABOUT US" badgeIcon="Info" title="Our Story" subtitle="Mengenal lebih dekat siapa kami dan apa yang kami lakukan.">
      <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 0 }}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 0 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
      </div>
    </ContentPage>
  );
};
