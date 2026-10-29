import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="social-proof-section">
      <div className="container">
        <h2 className="section-tagline">Founders &amp; Marketers Love us</h2>
        <p className="section-subtagline">Trusted by 210,000+ Businesses across 68+ Countries</p>

        <div className="logo-marquee">
          <div className="client-logo-item">
            <span style={{ fontWeight: 900, fontSize: 22, color: '#374151', letterSpacing: 1 }}>CEAT</span>
          </div>

          <div className="client-logo-item">
            <span style={{ color: '#ea580c', fontSize: 18 }}>☀️</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#ea580c' }}>THE ART OF LIVING</span>
          </div>

          <div className="client-logo-item">
            <span style={{ fontWeight: 800, fontSize: 20, color: '#0284c7' }}>Ebix</span>
          </div>

          <div className="client-logo-item">
            <span style={{ fontWeight: 700, fontSize: 15, color: '#b91c1c' }}>ISKCON</span>
          </div>

          <div className="client-logo-item">
            <span style={{ fontWeight: 800, fontSize: 18, color: '#dc2626' }}>Berger</span>
          </div>

          <div className="client-logo-item">
            <img src="/images/logos/adani.png" alt="Adani" style={{ height: 26, objectFit: 'contain' }} />
          </div>

          <div className="client-logo-item">
            <span style={{ fontWeight: 700, fontSize: 14, color: '#854d0e', fontStyle: 'italic' }}>ROYAL CAFE</span>
          </div>

          <div className="client-logo-item">
            <span style={{ fontWeight: 800, fontSize: 18, color: '#2563eb' }}>wipro</span>
          </div>

          <div className="client-logo-item">
            <img src="/images/logos/tata.png" alt="TATA" style={{ height: 24, objectFit: 'contain' }} />
          </div>

          <div className="client-logo-item">
            <img src="/images/logos/physicswallah.png" alt="PhysicsWallah" style={{ height: 24, objectFit: 'contain' }} />
          </div>

          <div className="client-logo-item">
            <img src="/images/logos/vivo.png" alt="Vivo" style={{ height: 20, objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
