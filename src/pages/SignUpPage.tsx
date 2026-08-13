import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';

export const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      alert('Password minimal 8 karakter');
      return;
    }
    console.log('Sign up:', { name, email, password });
  };

  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let s = 0;
    if (pass.length >= 8) s += 1;
    if (pass.match(/[A-Z]/) && pass.match(/[a-z]/)) s += 1;
    if (pass.match(/\d/)) s += 1;
    if (pass.match(/[^a-zA-Z\d]/)) s += 1;
    return s;
  };
  const strength = getPasswordStrength(password);
  const strengthColors = ['#4b5563', '#ef4444', '#f59e0b', '#22c55e', '#10b981'];
  const strengthLabels = ['Sangat Lemah', 'Lemah', 'Sedang', 'Kuat', 'Sangat Kuat'];

  return (
    <div className="section-photo" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: '10%', right: '20%', width: '400px', height: '300px', background: 'rgba(32,201,151,0.1)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '20%', width: '350px', height: '250px', background: 'rgba(232,162,56,0.1)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ width: '100%', maxWidth: '420px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
        </div>

        <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Create your account</h2>
            <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Start building with us today</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                Full Name
              </label>
              <div className="glass-input-wrapper">
                <Icon name="User" size={16} color="var(--color-text-muted)" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="glass-input"
                  required
                />
              </div>
            </div>

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

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                Password
              </label>
              <div className="glass-input-wrapper">
                <Icon name="Lock" size={16} color="var(--color-text-muted)" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="glass-input"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex' }}
                >
                  <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={16} color="var(--color-text-muted)" />
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {password.length > 0 && (
                <div style={{ marginTop: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '0.4rem' }}>
                    {[1, 2, 3, 4].map((level) => (
                      <div key={level} style={{
                        height: '4px',
                        flex: 1,
                        borderRadius: '2px',
                        background: strength >= level ? strengthColors[strength] : 'rgba(255,255,255,0.1)',
                        transition: 'background 0.3s'
                      }} />
                    ))}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: strength >= 3 ? 'var(--color-accent-teal)' : 'var(--color-text-muted)' }}>
                    Tingkat keamanan: {strengthLabels[strength]}
                  </div>
                </div>
              )}
            </div>

            {/* Password strength bar */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{
                  flex: 1, height: '3px', borderRadius: '2px',
                  background: password.length > (i + 1) * 2
                    ? i < 2 ? 'rgba(245,158,11,0.6)' : 'rgba(16,185,129,0.6)'
                    : 'rgba(255,255,255,0.06)',
                  transition: 'background 0.3s ease'
                }} />
              ))}
            </div>

            <button type="submit" className="btn btn-gradient" style={{ width: '100%', borderRadius: 'var(--glass-radius-sm)', padding: '0.75rem', fontSize: '0.9rem', marginTop: '0.25rem' }}>
              Create Account <Icon name="ArrowRight" size={15} />
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {['Github', 'Twitter'].map(provider => (
              <button key={provider} className="btn btn-secondary" style={{ flex: 1, borderRadius: 'var(--glass-radius-sm)', fontSize: '0.85rem', gap: '0.5rem' }}>
                <Icon name={provider} size={16} /> {provider}
              </button>
            ))}
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          Already have an account? <Link to="/signin" style={{ color: 'var(--color-accent-violet)', fontWeight: 600 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};
