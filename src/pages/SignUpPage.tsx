import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BadgeCheck, Megaphone } from 'lucide-react';

import type { PageRoute } from '../App';

interface SignUpPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const isFormValid =
    fullName.trim().length > 0 &&
    email.trim().length > 0 &&
    phone.trim().length > 3 &&
    password.length >= 6 &&
    password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      if (password !== confirmPassword) {
        alert('Passwords do not match. Please verify.');
      }
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage(
        `Welcome to AiSensy, ${fullName}! Your ₹1000 Ad Credits have been activated. Redirecting...`
      );
      setTimeout(() => {
        onNavigate('dashboard');
      }, 1500);
    }, 1000);
  };

  const handleGoogleSSO = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Google Account authenticated! Welcome to AiSensy.');
      setTimeout(() => {
        onNavigate('dashboard');
      }, 1200);
    }, 600);
  };

  return (
    <div className="auth-wrapper">
      {/* Left Column: Plan Benefits & Free Forever Inclusions */}
      <div className="auth-left-panel">
        <a
          href="/"
          className="auth-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          <img
            src="/images/logoAi.png"
            alt="AiSensy Logo"
            style={{ height: 38, objectFit: 'contain' }}
          />
        </a>

        <div className="auth-left-content">
          <h2 className="auth-left-heading">
            Experience the future of <br />
            <span className="heading-highlight-green">WhatsApp Marketing</span>
          </h2>

          {/* ₹1000 Free Ad Credits Banner Card */}
          <div className="signup-ad-credits-card">
            <div className="credit-gift-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <polyline points="20 12 20 22 4 22 4 12" />
                <rect x="2" y="7" width="20" height="5" />
                <line x1="12" y1="22" x2="12" y2="7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
            </div>
            <div>
              <div className="credit-title">₹1000 FREE Ad Credits</div>
              <div className="credit-sub">Run Click to WhatsApp Ads &amp; 5X your leads</div>
            </div>
          </div>

          {/* Plan Includes Box */}
          <div className="plan-includes-section">
            <div className="plan-includes-label">YOUR FREE FOREVER PLAN INCLUDES</div>

            {/* Card 1: Free WhatsApp Business API */}
            <div className="plan-feature-card">
              <div className="plan-feature-icon-box">
                <FaWhatsapp size={20} color="#00C067" />
              </div>
              <div>
                <div className="benefit-title">FREE WhatsApp Business API</div>
                <div className="benefit-desc">Instant verification &amp; setup with Meta</div>
              </div>
            </div>

            {/* Card 2: Advanced AI Ads Manager */}
            <div className="plan-feature-card">
              <div className="plan-feature-icon-box">
                <Megaphone size={20} color="#00C067" />
              </div>
              <div>
                <div className="benefit-title">Advanced AI Ads Manager</div>
                <div className="benefit-desc">AI-powered Ad Campaign optimisation &amp; targetting</div>
              </div>
            </div>

            {/* Card 3: FREE Blue Tick Application */}
            <div className="plan-feature-card">
              <div className="plan-feature-icon-box">
                <BadgeCheck size={20} color="#00C067" />
              </div>
              <div>
                <div className="benefit-title">FREE Blue Tick Application</div>
                <div className="benefit-desc">Apply for BLUE TICK &amp; get a verified WhatsApp Business Account</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof Logos */}
        <div className="auth-trust-footer">
          <div className="trust-divider">
            <span>Trusted by 2,50,000+ businesses</span>
          </div>
          <div className="trust-logos-row-signup">
            <img src="/images/logos/physicswallah.png" alt="PhysicsWallah" style={{ height: 22, objectFit: 'contain' }} />
            
            <div className="logo-rentomojo">
              <span className="rentomojo-badge">m</span>
              <span className="rentomojo-text">rentomojo</span>
            </div>

            <div className="logo-skullcandy">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#000000">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.86 2.19 7.21 5.4 8.89.2.11.45.05.58-.15l.62-.97c.13-.2.08-.47-.11-.6-2.58-1.74-4.14-4.57-4.14-7.67 0-5.17 4.19-9.35 9.35-9.35s9.35 4.18 9.35 9.35c0 3.1-1.56 5.93-4.14 7.67-.19.13-.24.4-.11.6l.62.97c.13.2.38.26.58.15C19.81 19.21 22 15.86 22 12c0-5.52-4.48-10-10-10zm-3 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 5.5v1.5c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5V16h-2zm4 0v1.5c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5V16h-2z" />
              </svg>
              <span className="skullcandy-text">Skullcandy</span>
            </div>

            <img src="/images/logos/vivo.png" alt="Vivo" style={{ height: 20, objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Right Column: Registration Form */}
      <div className="auth-right-panel">
        <div className="auth-top-switch">
          Already a member ?{' '}
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('login');
            }}
          >
            Log in
          </a>
        </div>

        <div className="auth-form-container">
          <h1 className="auth-main-title">Create Your AiSensy Account</h1>
          <p className="auth-instruction">
            Fill in the details below to get started with your FREE FOREVER plan.
          </p>

          {successMessage && (
            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                color: '#15803d',
                padding: '10px 14px',
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                marginBottom: 16,
                textAlign: 'center',
              }}
            >
              {successMessage}
            </div>
          )}

          {/* Signup with Google (Solid Blue Button with White G) */}
          <button
            type="button"
            className="btn-google-sso"
            onClick={handleGoogleSSO}
            disabled={isLoading}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            <span>Signup with Google</span>
          </button>

          <div className="auth-divider">OR</div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* WhatsApp Phone Input with Country Code Picker */}
            <div className="form-group">
              <div className="phone-input-group">
                <div className="country-select-wrap">
                  <span>IN</span>
                  <span>{countryCode}</span>
                  <span className="caret-arrow">▼</span>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    aria-label="Country Code"
                  >
                    <option value="+91">IN +91</option>
                    <option value="+1">US +1</option>
                    <option value="+44">GB +44</option>
                    <option value="+971">AE +971</option>
                    <option value="+65">SG +65</option>
                    <option value="+61">AU +61</option>
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="Personal WhatsApp Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <div
                  className="input-info-icon"
                  title="We will send an OTP to verify your WhatsApp account"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="form-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>
            </div>

            <div className="form-group password-group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>
            </div>

            <button
              type="submit"
              className={`btn-auth-submit ${isFormValid ? 'active' : ''}`}
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Start Your FREE FOREVER Plan'}
            </button>
          </form>

          <div className="auth-legal-footer">
            The Google{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
              Terms of Service
            </a>{' '}
            apply.
          </div>
        </div>

        <div style={{ height: 20 }}></div>
      </div>
    </div>
  );
};
