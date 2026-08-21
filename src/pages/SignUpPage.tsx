import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Icon } from '../components/Icon';

export const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

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
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

  return (
    <div className="section-photo auth-page">
      {/* Ambient glows */}
      <div className="ambient-glow-amber" style={{ top: '15%', left: '25%', width: '400px', height: '300px' }} />
      <div className="ambient-glow-teal" style={{ bottom: '20%', right: '25%', width: '350px', height: '250px' }} />

      <div className="auth-container" style={{ maxWidth: '460px' }}>


        <div className="glass-card auth-card">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Create your account</h2>
            <p style={{ fontSize: '0.875rem', marginBottom: 0 }}>Start building with us today</p>
          </div>

          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                Full Name
              </label>
              <div className="input-box">
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

            <div style={{ position: 'relative' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                Email
              </label>
              <div className="input-box" style={{ borderColor: emailError ? 'rgba(239, 68, 68, 0.5)' : undefined }}>
                <Icon name="Mail" size={16} color="var(--color-text-muted)" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const val = e.target.value;
                    setEmail(val);
                    if (val.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
                      setEmailError('Please enter a valid email address.');
                    } else {
                      setEmailError('');
                    }
                  }}
                  placeholder="you@example.com"
                  className="glass-input"
                  required
                />
              </div>
              {emailError && (
                <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: '0.2rem', fontSize: '0.75rem', color: '#ef4444' }}>
                  {emailError}
                </div>
              )}
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.4rem', fontWeight: 500 }}>
                Password
              </label>
              <div className="input-box" style={{ borderColor: password.length > 0 && password.length < 8 ? 'rgba(239, 68, 68, 0.5)' : undefined }}>
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

              <div style={{ minHeight: '18px', marginTop: '0.5rem' }}>
                {password.length > 0 && password.length < 8 && (
                  <div style={{ fontSize: '0.75rem', color: '#ef4444', transition: 'color 0.3s' }}>
                    Password must be at least 8 characters.
                  </div>
                )}
              </div>
              
              {/* Password Strength Indicator */}
              <div style={{ marginTop: '0.75rem', opacity: password.length > 0 ? 1 : 0, transition: 'opacity 0.3s' }}>
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
                <div style={{ fontSize: '0.75rem', color: strengthColors[strength], transition: 'color 0.3s' }}>
                  Security Level: {strengthLabels[strength]}
                </div>
              </div>
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
