import React from 'react';
import { ContentPage } from './ContentPage';
import { Icon } from '../components/Icon';

const orgData = {
  name: 'Budi Santoso',
  role: 'Chief Executive Officer',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
  socials: ['Linkedin', 'Twitter'],
  children: [
    {
      name: 'Sarah Wijaya',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
      socials: ['Linkedin', 'Github'],
    },
    {
      name: 'Ahmad Hidayat',
      role: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
      socials: ['Linkedin'],
      children: [
        {
          name: 'Dimas Pratama',
          role: 'Head of Logistics',
          image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200',
          socials: ['Linkedin'],
        },
        {
          name: 'Maya Nabila',
          role: 'Head of Customer Success',
          image: 'https://images.unsplash.com/photo-1598550874175-4d0ef4fbc240?auto=format&fit=crop&q=80&w=200&h=200',
          socials: ['Linkedin'],
        }
      ]
    },
    {
      name: 'Jessica Lin',
      role: 'Chief Marketing Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
      socials: ['Linkedin', 'Twitter'],
    }
  ]
};

const OrgNodeComponent = ({ node }: { node: any }) => (
  <li>
    <div className="org-node">
      <div style={{
        width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden',
        margin: '0 auto 1rem', border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}>
        <img src={node.image} alt={node.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>{node.name}</h3>
      <p style={{ fontSize: '0.75rem', color: 'var(--color-accent-teal)', fontWeight: 600, marginBottom: '0.75rem', minHeight: '36px' }}>{node.role}</p>
      
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        {node.socials?.map((social: string) => (
          <a key={social} href="#" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-cyan)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
            <Icon name={social} size={16} />
          </a>
        ))}
      </div>
    </div>
    {node.children && node.children.length > 0 && (
      <ul>
        {node.children.map((child: any, index: number) => (
          <OrgNodeComponent key={index} node={child} />
        ))}
      </ul>
    )}
  </li>
);

export const ProfilePage: React.FC = () => {
  return (
    <ContentPage badge="TIM KAMI" badgeIcon="Users" title="Struktur Organisasi" subtitle="Orang-orang di balik layar yang bekerja keras untuk memberikan layanan terbaik bagi Anda.">
      <style>{`
        .org-tree { display: flex; justify-content: center; padding-bottom: 2rem; }
        .org-tree ul { padding-top: 20px; position: relative; display: flex; justify-content: center; margin: 0; padding-left: 0; }
        .org-tree li { float: left; text-align: center; list-style-type: none; position: relative; padding: 20px 10px 0 10px; }
        
        .org-tree li::before, .org-tree li::after { content: ''; position: absolute; top: 0; right: 50%; border-top: 2px solid rgba(255,255,255,0.15); width: 50%; height: 20px; }
        .org-tree li::after { right: auto; left: 50%; border-left: 2px solid rgba(255,255,255,0.15); }
        
        .org-tree li:only-child::after, .org-tree li:only-child::before { display: none; }
        .org-tree li:only-child { padding-top: 0; }
        
        .org-tree li:first-child::before, .org-tree li:last-child::after { border: 0 none; }
        .org-tree li:last-child::before { border-right: 2px solid rgba(255,255,255,0.15); border-radius: 0 5px 0 0; }
        .org-tree li:first-child::after { border-radius: 5px 0 0 0; }
        
        .org-tree ul ul::before { content: ''; position: absolute; top: 0; left: 50%; border-left: 2px solid rgba(255,255,255,0.15); width: 0; height: 20px; transform: translateX(-1px); }
        
        .org-node {
          display: inline-block;
          padding: 1rem 0.5rem;
          width: 140px;
          background: rgba(11, 42, 58, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .org-node:hover {
          transform: translateY(-5px);
          border-color: rgba(232, 162, 56, 0.4);
        }
      `}</style>

      <div className="org-tree">
        <ul>
          <OrgNodeComponent node={orgData} />
        </ul>
      </div>
    </ContentPage>
  );
};
