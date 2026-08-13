import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';

export const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: '30%', left: '30%', width: '350px', height: '250px', background: 'rgba(99,102,241,0.1)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}><Logo /></Link>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
          {!sent ? (
            <>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <Icon name="KeyRound" size={22} color="var(--color-accent-violet)" />
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Reset password</h2>
                <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Enter your email and we'll send you a reset link</p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>Email</label>
                  <div className="glass-input-wrapper">
                    <Icon name="Mail" size={16} color="var(--color-text-muted)" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="glass-input" required />
                  </div>
                </div>
                <button type="submit" className="btn btn-gradient" style={{ width: '100%', borderRadius: 'var(--glass-radius-sm)', padding: '0.75rem', fontSize: '0.9rem' }}>
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                <Icon name="Check" size={22} color="#10b981" />
              </div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Check your email</h2>
              <p style={{ fontSize: '0.875rem' }}>We've sent a reset link to <strong style={{ color: 'var(--color-text-primary)' }}>{email}</strong></p>
            </div>
          )}
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <Link to="/signin" style={{ color: 'var(--color-accent-violet)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <Icon name="ArrowLeft" size={14} /> Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
