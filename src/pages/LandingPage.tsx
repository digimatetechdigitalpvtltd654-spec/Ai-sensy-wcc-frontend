import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { StickyOfferBanner } from '../components/StickyOfferBanner';
import { HeroSection } from '../components/HeroSection';
import { SocialProof } from '../components/SocialProof';
import { BroadcastSection } from '../components/BroadcastSection';
import { ClickToWhatsAppAds } from '../components/ClickToWhatsAppAds';
import { WhyWhatsApp } from '../components/WhyWhatsApp';
import { AdvancedFeaturesTabs } from '../components/AdvancedFeaturesTabs';
import { TestimonialsAwards } from '../components/TestimonialsAwards';
import { OnboardingBanner } from '../components/OnboardingBanner';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { FloatingWhatsAppWidget } from '../components/FloatingWhatsAppWidget';

interface LandingPageProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="landing-page-wrapper">
      {/* Sticky Bottom Offer Banner */}
      <StickyOfferBanner
        onClaimOffer={() => {
          alert('🎉 Exclusive Launch Offer Applied! Get ₹3050 worth for just ₹1425.');
          onNavigate('signup');
        }}
      />

      {/* Top Navbar */}
      <Navbar onNavigate={onNavigate} currentPage="home" />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onNavigate={onNavigate}
          onOpenDemo={() => setShowDemoModal(true)}
        />
        <SocialProof />
        <BroadcastSection onNavigate={onNavigate} />
        <ClickToWhatsAppAds />
        <WhyWhatsApp />
        <AdvancedFeaturesTabs />
        <TestimonialsAwards />
        <OnboardingBanner onNavigate={onNavigate} />
        <FAQSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating WhatsApp trigger */}
      <FloatingWhatsAppWidget onNavigate={onNavigate} />

      {/* Interactive Live Demo Modal */}
      {showDemoModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(5px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setShowDemoModal(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: 36,
              maxWidth: 500,
              width: '90%',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              textAlign: 'center',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDemoModal(false)}
              style={{ position: 'absolute', top: 16, right: 16, fontSize: 24, cursor: 'pointer', color: '#6b7280' }}
            >
              &times;
            </button>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: '#e6f9f0',
                color: '#00C067',
                fontSize: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              ⚡
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 6 }}>
              AiSensy Platform Walkthrough
            </h3>
            <p style={{ color: '#4b5563', fontSize: 13.5, lineHeight: 1.5, marginBottom: 16 }}>
              Watch how AiSensy automates broadcasts, integrates Click-to-WhatsApp ads, and scales conversions with official Meta WhatsApp APIs.
            </p>

            {/* Official Screen Recording Video from public/Assets */}
            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid #e2e8f0', marginBottom: 20, background: '#000' }}>
              <video
                src="/Assets/Screen%20Recording%202026-10-26%20111012.mp4"
                controls
                autoPlay
                playsInline
                style={{ width: '100%', maxHeight: '320px', display: 'block' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                className="btn-primary-hero"
                style={{ padding: '12px 24px', fontSize: 14 }}
                onClick={() => {
                  setShowDemoModal(false);
                  onNavigate('signup');
                }}
              >
                Start 14-Day Free Trial &rarr;
              </button>
              <button
                style={{ border: '1px solid #d1d5db', padding: '12px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
                onClick={() => setShowDemoModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
