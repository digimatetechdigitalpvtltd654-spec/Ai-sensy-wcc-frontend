import React from 'react';

interface BroadcastSectionProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

export const BroadcastSection: React.FC<BroadcastSectionProps> = ({ onNavigate }) => {
  return (
    <section className="broadcast-section" id="broadcast">
      <div className="container">
        <div className="broadcast-grid">
          {/* Left Text Content */}
          <div className="broadcast-text-col">
            <h2 className="broadcast-heading">
              Broadcast Marketing Messages on WhatsApp (Officially)
            </h2>
            <p className="broadcast-subtext">
              Enjoy a Limitless Broadcasting experience on WhatsApp
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon-circle">
                  <span style={{ fontSize: 20 }}>📣</span>
                </div>
                <div>
                  <h3 className="feature-title">8+ Powerful Messaging Categories</h3>
                  <p className="feature-desc">
                    Send Promotions, Offers, Coupon codes, Carousels and More- Risk-Free!
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-circle">
                  <span style={{ fontSize: 20 }}>💬</span>
                </div>
                <div>
                  <h3 className="feature-title">Add CTAs. Drive 3x Conversions</h3>
                  <p className="feature-desc">
                    Turn conversations into conversions with eye-catching CTA and Quick Reply buttons
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon-circle">
                  <span style={{ fontSize: 20 }}>⏱</span>
                </div>
                <div>
                  <h3 className="feature-title">Schedule your WhatsApp messages</h3>
                  <p className="feature-desc">
                    Streamline your work, Schedule Broadcasts 2 months ahead of time
                  </p>
                </div>
              </div>
            </div>

            <button
              className="btn-primary-hero"
              onClick={() => onNavigate('signup')}
            >
              Start for FREE &rarr;
            </button>
          </div>

          {/* Right Visual Composition (from video frame 00:35) */}
          <div className="broadcast-visual-wrap">
            <img
              src="/images/Ai2.webp"
              alt="Broadcast Marketing Messages on WhatsApp"
              className="broadcast-official-graphic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
