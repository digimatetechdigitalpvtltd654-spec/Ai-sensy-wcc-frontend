import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import type { PageRoute } from '../App';

interface LoginPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const AUTHORIZED_EMAIL = 'cmdsachbedhadak@gmail.com';

  const [loginStep, setLoginStep] = useState<'credentials' | 'two-step'>('credentials');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Two-Step Verification States
  const [showToast, setShowToast] = useState(true);
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpTimer, setOtpTimer] = useState<number>(60);
  const [qrTimer, setQrTimer] = useState<number>(299); // 4:59 in seconds
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  const isFormFilled = username.trim().length > 0 && password.trim().length > 0;
  const isOtpComplete = otp.every((digit) => digit.trim().length === 1);

  // Countdown timers for QR code (4:59) and OTP (01:00)
  useEffect(() => {
    if (loginStep !== 'two-step') return;

    setShowToast(true);
    const interval = setInterval(() => {
      setQrTimer((prev) => (prev > 0 ? prev - 1 : 299));
      setOtpTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [loginStep]);

  const isAuthorized = (input: string) => {
    const clean = input.trim().toLowerCase();
    return clean === AUTHORIZED_EMAIL.toLowerCase() || clean === 'cmdsachbedhadak';
  };

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoginMessage(null);

    if (!isFormFilled) return;

    if (!isAuthorized(username)) {
      setErrorMessage(`Invalid username or password`);
      return;
    }

    setIsLoading(true);
    // Direct redirect to WCC dashboard upon entering authorized email and password
    setTimeout(() => {
      setIsLoading(false);
      try {
        localStorage.setItem(
          'aisensy_user',
          JSON.stringify({ email: AUTHORIZED_EMAIL, name: 'Shri Vinayakam Dham' })
        );
      } catch {
        // ignore localStorage errors in restricted environments
      }
      onNavigate('dashboard');
    }, 400);
  };

  const handleGoogleSSO = () => {
    setErrorMessage(null);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUsername(AUTHORIZED_EMAIL);
      try {
        localStorage.setItem(
          'aisensy_user',
          JSON.stringify({ email: AUTHORIZED_EMAIL, name: 'Shri Vinayakam Dham' })
        );
      } catch {
        // ignore
      }
      onNavigate('dashboard');
    }, 600);
  };

  const maskEmail = (emailStr: string) => {
    const target = emailStr && emailStr.includes('@') ? emailStr : AUTHORIZED_EMAIL;
    const [local, domain] = target.split('@');
    if (local.length <= 2) return `${local}***@${domain}`;
    return `${local.slice(0, 2)}***@${domain}`;
  };

  // OTP Box inputs handler with auto-advance and backspace
  const handleOtpChange = (val: string, index: number) => {
    if (val.length > 1) {
      val = val.slice(-1);
    }

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Auto advance to next box
    if (val && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').trim().slice(0, 6);
    if (!pasteData) return;

    const digits = pasteData.split('');
    const newOtp = [...otp];
    digits.forEach((d, i) => {
      if (i < 6) newOtp[i] = d;
    });
    setOtp(newOtp);

    const nextIndex = Math.min(digits.length, 5);
    otpRefs.current[nextIndex]?.focus();
  };

  const handleResendOtp = () => {
    setOtp(['', '', '', '', '', '']);
    setOtpTimer(60);
    setLoginMessage('A new verification code has been dispatched.');
    setTimeout(() => setLoginMessage(null), 3000);
    otpRefs.current[0]?.focus();
  };

  const handleCompleteVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      try {
        localStorage.setItem(
          'aisensy_user',
          JSON.stringify({ email: AUTHORIZED_EMAIL, name: 'Shri Vinayakam Dham' })
        );
      } catch {
        // ignore
      }
      onNavigate('dashboard');
    }, 500);
  };

  const formatQrTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const formatOtpTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="auth-wrapper">
      {/* Top Floating Toast Notification Banner */}
      {loginStep === 'two-step' && showToast && (
        <div className="two-step-toast-bar">
          <div className="toast-content">
            <span className="toast-check-circle">✓</span>
            <span>Please send the message on WhatsApp to verify.</span>
          </div>
          <button
            className="toast-close-btn"
            onClick={() => setShowToast(false)}
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      )}

      {/* Left Column: Brand Marketing & Visual Social Proof */}
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
            Send personalized campaigns on WhatsApp
          </h2>

          <div className="auth-visual-stage">
            {/* Dashed concentric contour rings */}
            <svg className="auth-concentric-circles" viewBox="0 0 380 380" fill="none">
              <circle cx="190" cy="190" r="75" stroke="#cde3d6" strokeWidth="1.2" strokeDasharray="4 4" />
              <circle cx="190" cy="190" r="125" stroke="#cde3d6" strokeWidth="1.2" strokeDasharray="4 4" />
              <circle cx="190" cy="190" r="175" stroke="#cde3d6" strokeWidth="1.2" strokeDasharray="4 4" />
            </svg>

            {/* Top-left promo ad card */}
            <div className="auth-float-ad">
              <div className="auth-float-ad-bar">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="auth-float-ad-img-wrap">
                <img src="/images/flora_luxe.jpg" alt="Promo" />
                <div className="auth-float-ad-tag">20% OFF</div>
              </div>
            </div>

            {/* Top-right WhatsApp chat bubble */}
            <div className="auth-float-chat">
              <div className="chat-avatar-wa">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </div>
              <div className="chat-bubble-content">
                <span>I want to buy</span>
              </div>
            </div>

            {/* Center Woman Image */}
            <div className="auth-woman-wrap">
              <img
                src="/images/login_woman.jpg"
                alt="AiSensy Marketing Campaign Specialist"
                className="auth-woman-photo"
              />
            </div>

            {/* Floating metric pills */}
            <div className="auth-float-pill pill-3x">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00c067" strokeWidth="2.5">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <span>3.2x</span>
            </div>

            <div className="auth-float-pill pill-150k">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span>150k</span>
            </div>

            <div className="auth-float-pill pill-order">
              <div className="order-check-icon">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Order Placed</span>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof 4x2 Logos */}
        <div className="auth-trust-footer">
          <div className="trust-divider">
            <span>Trusted by 2,50,000+ businesses</span>
          </div>
          <div className="trust-logos-grid-login">
            <img src="/images/logos/adani.png" alt="Adani" style={{ height: 22, objectFit: 'contain' }} />
            <img src="/images/logos/tata.png" alt="TATA" style={{ height: 22, objectFit: 'contain' }} />
            <img src="/images/logos/godrej.png" alt="Godrej" style={{ height: 22, objectFit: 'contain' }} />
            <img src="/images/logos/asianpaints.png" alt="Asian Paints" style={{ height: 22, objectFit: 'contain' }} />
            <img src="/images/logos/ceat.png" alt="CEAT" style={{ height: 18, objectFit: 'contain' }} />
            <img src="/images/logos/sobha.png" alt="SOBHA" style={{ height: 18, objectFit: 'contain' }} />
            <img src="/images/logos/physicswallah.png" alt="PhysicsWallah" style={{ height: 22, objectFit: 'contain' }} />
            <img src="/images/logos/vivo.png" alt="Vivo" style={{ height: 18, objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Right Column: Dynamic Step Switching */}
      <div className="auth-right-panel">
        <div className="auth-top-switch">
          Not a member yet?{' '}
          <a
            href="/signup"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('signup');
            }}
          >
            Sign up
          </a>
        </div>

        {/* STEP 1: CREDENTIALS FORM (EMAIL & PASSWORD) */}
        {loginStep === 'credentials' && (
          <div className="auth-form-container">
            <div className="auth-subhead">WELCOME BACK</div>
            <h1 className="auth-main-title">Log in to AiSensy</h1>

            {errorMessage && (
              <div
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#b91c1c',
                  padding: '11px 14px',
                  borderRadius: 8,
                  fontSize: 13.5,
                  fontWeight: 600,
                  marginBottom: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  lineHeight: 1.4,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.2"
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            {loginMessage && (
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
                {loginMessage}
              </div>
            )}

            {/* Continue with Google */}
            <button
              type="button"
              className="btn-google-sso"
              onClick={handleGoogleSSO}
              disabled={isLoading}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <div className="auth-divider">OR</div>

            {/* Login Form: Restricted to cmdsachbedhadak@gmail.com */}
            <form onSubmit={handleCredentialsSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Username / Email"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  style={
                    errorMessage
                      ? { borderColor: '#ef4444', backgroundColor: '#fff5f5' }
                      : {}
                  }
                  required
                />
              </div>

              {/* Authorized account hint & auto-fill quick helper */}
              {/* <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: -6,
                  marginBottom: 14,
                  fontSize: 12,
                  color: '#64748b',
                }}
              >
                <span>
                  Authorized:{' '}
                  <span style={{ color: '#0f172a', fontWeight: 600 }}>
                    {AUTHORIZED_EMAIL}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setUsername(AUTHORIZED_EMAIL);
                    setErrorMessage(null);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#008362',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: 12,
                    padding: 0,
                    textDecoration: 'underline',
                  }}
                >
                  Use this email
                </button>
              </div> */}

              <div className="form-group password-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="Password"
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

              <button
                type="submit"
                className={`btn-auth-submit ${isFormFilled ? 'active' : ''}`}
                disabled={!isFormFilled || isLoading}
              >
                {isLoading ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite' }}>
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  'Continue'
                )}
              </button>
            </form>

            <a
              href="#forgot-password"
              className="forgot-password-link"
              onClick={(e) => {
                e.preventDefault();
                alert('Password reset link has been dispatched to your email.');
              }}
            >
              Forgot Password?
            </a>
          </div>
        )}

        {/* STEP 2: EXACT TWO-STEP VERIFICATION UI (MATCHES VIDEO & IMAGE) */}
        {loginStep === 'two-step' && (
          <div className="auth-form-container two-step-mode">
            <div className="auth-subhead">WELCOME BACK</div>
            <h1 className="auth-main-title">Log in to AiSensy</h1>
            <p className="auth-instruction">
              Choose a method to complete two-step verification.
            </p>

            {loginMessage && (
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
                {loginMessage}
              </div>
            )}

            {/* Two-Step Verification Main Card */}
            <div className="two-step-card">
              <div className="two-step-header">
                <h3 className="two-step-title">Two-Step Verification</h3>
                <button
                  type="button"
                  className="btn-diff-account"
                  onClick={() => setLoginStep('credentials')}
                >
                  Use a different account
                </button>
              </div>

              <div className="two-step-grid">
                {/* METHOD 1: SCAN & SEND */}
                <div className="two-step-col method-1-box">
                  <div className="method-label">METHOD 1: SCAN &amp; SEND</div>
                  <p className="method-desc">
                    Scan this QR code with your phone camera, then tap Send in WhatsApp.
                  </p>

                  {/* QR Code with WhatsApp Icon at Center */}
                  <div
                    className="qr-code-box"
                    onClick={handleCompleteVerification}
                    title="Click or scan to verify with WhatsApp"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src="/images/whatsapp_qr.png"
                      alt="WhatsApp Verification QR Code"
                      className="qr-code-img"
                    />
                  </div>

                  <div className="qr-expires-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Expires in {formatQrTimer(qrTimer)}</span>
                  </div>

                  {/* Dotted separator */}
                  <div className="qr-cant-scan-divider"></div>
                  <p className="qr-cant-scan-label">
                    Can't scan the QR code? Use one of these options:
                  </p>

                  <button
                    type="button"
                    className="btn-open-wa"
                    onClick={handleCompleteVerification}
                  >
                    <FaWhatsapp size={16} color="#ffffff" />
                    <span>Open WhatsApp &amp; Verify</span>
                  </button>

                  <button
                    type="button"
                    className="btn-copy-link"
                    onClick={() => {
                      navigator.clipboard?.writeText?.('https://aisensy.com/verify?token=ai_987394');
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{isCopied ? 'Link copied!' : 'Copy verification link instead'}</span>
                  </button>

                  {/* Warning Note Box Matching Video & Screenshot */}
                  <div className="verification-warning-note">
                    <span className="warning-note-label">Note:</span> Do not edit the pre-filled text. Any changes will cause verification to fail.
                  </div>
                </div>

                {/* Vertical Divider with OR Circle */}
                <div className="two-step-divider">
                  <span className="or-circle-badge">OR</span>
                </div>

                {/* METHOD 2: OTP CODE */}
                <div className="two-step-col method-2-box">
                  <div className="method-label">METHOD 2: OTP CODE</div>
                  <p className="method-desc">
                    Enter the 6-digit code we sent to your email <strong>{maskEmail(username)}</strong> and Phone <strong>44*****58</strong>.
                  </p>

                  {/* 6 OTP Boxes with paste, auto-advance, and keyboard support */}
                  <div className="otp-boxes-row">
                    {otp.map((val, idx) => (
                      <input
                        key={idx}
                        ref={(el) => {
                          otpRefs.current[idx] = el;
                        }}
                        type="text"
                        maxLength={1}
                        className="otp-digit-input"
                        value={val}
                        onChange={(e) => handleOtpChange(e.target.value, idx)}
                        onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                        onPaste={handleOtpPaste}
                      />
                    ))}
                  </div>

                  <div className="otp-meta-row">
                    <button
                      type="button"
                      className={`btn-resend-text ${otpTimer === 0 ? 'active' : ''}`}
                      onClick={handleResendOtp}
                    >
                      Resend OTP
                    </button>
                    <span className="otp-countdown">
                      {formatOtpTimer(otpTimer)}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`btn-verify-submit ${isOtpComplete ? 'active' : ''}`}
                    disabled={!isOtpComplete || isVerifying}
                    onClick={handleCompleteVerification}
                  >
                    {isVerifying ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{ height: 20 }}></div>
      </div>
    </div>
  );
};
