import React from 'react';

interface HeroSectionProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenDemo }) => {

  return (
    <section className="hero-section">
      <div className="container">
        {/* Top Feature Pill */}
        <div className="hero-pill">
          <span>✨</span>
          <span>AI-Powered WhatsApp Marketing Platform</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          <span className="accent">5X Your Revenue</span>
          <br />
          with the Power of WhatsApp
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Broadcast, Automate, Engage, Sell - do everything with the AI-powered WhatsApp Marketing & Engagement Platform. Powered by Official WhatsApp APIs ⚡
        </p>

        {/* Hero Action Buttons */}
        <div className="hero-actions">
          <button
            className="btn-primary-hero"
            onClick={() => onNavigate('signup')}
          >
            Start 14-Day FREE Trial &rarr;
          </button>
          <button
            className="btn-secondary-hero"
            onClick={onOpenDemo}
          >
            Join Live Demo &rarr;
          </button>
        </div>

        {/* Official Interactive Visual Showcase (from video frames 00:30-00:35) */}
        <div className="hero-stage-official">
          <img
            src="/images/Ai1.webp"
            alt="AiSensy WhatsApp Marketing Platform Showcase"
            className="hero-main-illustration"
          />
        </div>
      </div>
    </section>
  );
};
