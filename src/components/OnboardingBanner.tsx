import React from 'react';

interface OnboardingBannerProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

export const OnboardingBanner: React.FC<OnboardingBannerProps> = ({ onNavigate }) => {
  return (
    <section className="onboarding-section" id="onboarding">
      <div className="container">
        <div className="onboarding-banner-card">
          {/* Left Text & Checklist */}
          <div className="onboarding-left-content">
            <h2 className="onboarding-heading">
              Start WhatsApp Marketing in 10 Minutes.
            </h2>
            <p className="onboarding-subheading">
              Get fully verified WhatsApp Business API account with AiSensy in just 10 minutes.
            </p>

            <div className="onboarding-checklist">
              <div className="onboarding-check-item">
                <div className="onboarding-check-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C067" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Free WhatsApp Green Tick verification support</span>
              </div>

              <div className="onboarding-check-item">
                <div className="onboarding-check-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C067" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>1-on-1 Dedicated Onboarding Support &amp; Live Chat</span>
              </div>

              <div className="onboarding-check-item">
                <div className="onboarding-check-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C067" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Access to 100+ Pre-built templates &amp; Automations</span>
              </div>
            </div>

            <button
              className="btn-primary-hero"
              style={{ marginTop: 28, padding: '14px 32px' }}
              onClick={() => onNavigate('signup')}
            >
              Start for FREE &rarr;
            </button>
          </div>

          {/* Right Visual Image (Ai14.avif) */}
          <div className="onboarding-right-graphic">
            <img
              src="/images/Ai14.avif"
              alt="Start WhatsApp Marketing in 10 Minutes with AiSensy"
              className="onboarding-official-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
