import React from 'react';

export const WhyWhatsApp: React.FC = () => {
  const metrics = [
    { number: '97%', label: 'Open Rates' },
    { number: '45-60%', label: 'Click Rates' },
    { number: '2.60Bn+', label: 'Active Users' },
    { number: '70%', label: 'Engagement Rate' },
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <h2 className="section-main-title">Why WhatsApp?</h2>
        <p className="section-main-subtitle">
          WhatsApp is the One Platform that brings together Actionable Notifications &amp; Customer Support!
        </p>

        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-number">{metric.number}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
