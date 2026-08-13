import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';

export const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    console.log('Sign in:', { email, password });
  };

  return (
    <div className="section-photo" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
    }}>
      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: '15%', left: '25%', width: '400px', height: '300px', background: 'rgba(232,162,56,0.12)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '25%', width: '350px', height: '250px', background: 'rgba(32,201,151,0.08)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
        </div>

        {/* Glass card */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Welcome back</h2>
            <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Sign in to your account to continue</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                Email
              </label>
              <div className="glass-input-wrapper">
                <Icon name="Mail" size={16} color="var(--color-text-muted)" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="glass-input"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Password</label>
                <Link to="/reset-password" style={{ fontSize: '0.75rem', color: 'var(--color-accent-violet)', fontWeight: 500 }}>Forgot?</Link>
              </div>
              <div className="glass-input-wrapper">
                <Icon name="Lock" size={16} color="var(--color-text-muted)" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="glass-input"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex' }}
                >
                  <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={16} color="var(--color-text-muted)" />
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-gradient" style={{ width: '100%', borderRadius: 'var(--glass-radius-sm)', padding: '0.75rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Sign In <Icon name="ArrowRight" size={15} />
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          {/* Social logins */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {['Github', 'Twitter'].map(provider => (
              <button key={provider} className="btn btn-secondary" style={{ flex: 1, borderRadius: 'var(--glass-radius-sm)', fontSize: '0.85rem', gap: '0.5rem' }}>
                <Icon name={provider} size={16} /> {provider}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom link */}
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--color-accent-violet)', fontWeight: 600 }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
