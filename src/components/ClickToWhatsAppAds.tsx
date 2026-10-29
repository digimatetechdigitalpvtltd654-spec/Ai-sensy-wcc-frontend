import React, { useState } from 'react';

export const ClickToWhatsAppAds: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenExplore = (title: string) => {
    setModalTitle(title);
    setShowModal(true);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1800);
  };

  return (
    <section className="features-section" id="features">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <h2 className="section-main-title">Packed with Powerful WhatsApp Marketing Features</h2>
          <p className="section-main-subtitle">
            AiSensy launches latest WhatsApp API and AI Features at Blazing fast speed ⚡
          </p>
        </div>

        {/* Feature 1: Run AI powered Ads that Click to WhatsApp (from video frames 00:40-00:41) */}
        <div className="ad-flow-grid feature-row-1" style={{ marginBottom: 100 }}>
          <div className="ad-flow-content">
            <h3 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 16, lineHeight: 1.25 }}>
              Run AI powered Ads that Click to WhatsApp
            </h3>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
              Run Ads on Facebook &amp; Instagram that land on WhatsApp. 5X Your lead generations &amp; 2-3X Conversions Instantly!
            </p>
            <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, marginBottom: 28 }}>
              Run Ads from AiSensy, get quality leads with AI &amp; conversions API, smartly segregate your leads and build Chatbot Flows to automate everything!
            </p>
            <button
              className="btn-primary-hero"
              style={{ padding: '12px 28px', fontSize: 15 }}
              onClick={() => handleOpenExplore('Run AI Powered Ads that Click to WhatsApp')}
            >
              Explore &rarr;
            </button>
          </div>

          <div className="feature-official-graphic-wrap">
            <img
              src="/images/AI3.webp"
              alt="Run AI powered Ads that Click to WhatsApp"
              className="feature-official-graphic"
            />
          </div>
        </div>

        {/* Feature 2: Build WhatsApp Forms (from video frames 00:41-00:42) */}
        <div className="ad-flow-grid feature-row-2" style={{ marginBottom: 100 }}>
          <div className="feature-official-graphic-wrap">
            <img
              src="/images/AI4.avif"
              alt="Build WhatsApp Forms"
              className="feature-official-graphic"
            />
          </div>

          <div className="ad-flow-content">
            <h3 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 16, lineHeight: 1.25 }}>
              Build WhatsApp Forms
            </h3>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
              Capture Leads &amp; collect useful information <strong>Directly in WhatsApp Chats</strong> with WhatsApp Forms.
            </p>
            <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, marginBottom: 28 }}>
              From feedback to gathering user insights, collect it all on WhatsApp.
            </p>
            <button
              className="btn-primary-hero"
              style={{ padding: '12px 28px', fontSize: 15 }}
              onClick={() => handleOpenExplore('Build Native WhatsApp Forms')}
            >
              Explore &rarr;
            </button>
          </div>
        </div>

        {/* Feature 3: Collect Payments on WhatsApp (from video frames 00:43-00:44) */}
        <div className="ad-flow-grid feature-row-3">
          <div className="ad-flow-content">
            <h3 style={{ fontSize: 32, fontWeight: 800, color: '#111827', marginBottom: 16, lineHeight: 1.25 }}>
              Collect Payments on WhatsApp
            </h3>
            <p style={{ fontSize: 16, color: '#4b5563', lineHeight: 1.6, marginBottom: 28 }}>
              Collect Payments now on WhatsApp seamlessly with WhatsApp Pay and other modes of payment (Razorpay, Payu etc) and grow your revenue.
            </p>
            <button
              className="btn-primary-hero"
              style={{ padding: '12px 28px', fontSize: 15 }}
              onClick={() => handleOpenExplore('Collect Payments on WhatsApp')}
            >
              Explore &rarr;
            </button>
          </div>

          <div className="feature-official-graphic-wrap">
            <img
              src="/images/AI5.avif"
              alt="Collect Payments on WhatsApp"
              className="feature-official-graphic"
            />
          </div>
        </div>
      </div>

      {/* Interactive Explore Feature Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            padding: 20,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: 16,
              maxWidth: 440,
              width: '100%',
              padding: 28,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                background: 'none',
                border: 'none',
                fontSize: 22,
                cursor: 'pointer',
                color: '#6b7280',
              }}
            >
              &times;
            </button>

            <h3 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 8 }}>
              Explore {modalTitle}
            </h3>
            <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 20 }}>
              Get a live walkthrough from an AiSensy WhatsApp marketing specialist.
            </p>

            {submitted ? (
              <div
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: 8,
                  padding: 16,
                  textAlign: 'center',
                  color: '#15803d',
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                🎉 Request Received! Our specialist will reach out on WhatsApp shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: '1px solid #d1d5db',
                      fontSize: 14,
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>
                    WhatsApp Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 8,
                      border: '1px solid #d1d5db',
                      fontSize: 14,
                      outline: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-hero"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  Request Walkthrough &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
