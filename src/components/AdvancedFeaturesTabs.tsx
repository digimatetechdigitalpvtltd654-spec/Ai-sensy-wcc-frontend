import React from 'react';

export const AdvancedFeaturesTabs: React.FC = () => {
  const features = [
    {
      id: 'livechat',
      title: 'Multiple Human Live Chat',
      descLines: [
        'Have multiple team members to drive Live Chat',
        'Support on the Same WhatsApp Business Number.',
        'Filter Chats according to tags, campaigns and attributes for Smart Agent Chat Routing.',
      ],
      gif: '/images/AI7.gif',
      alt: 'Multiple Human Live Chat Demo',
      bgColor: '#f3efff',
      accentColor: '#7c3aed',
    },
    {
      id: 'analytics',
      title: 'Real-Time Analytics',
      descLines: [
        'Track your campaign results in real-time.',
        'Monitor Read, Replied & Clicked rates for each campaign and retarget smartly for higher conversions!',
      ],
      gif: '/images/Ai9.gif',
      alt: 'Real-Time Analytics Demo',
      bgColor: '#fff0e8',
      accentColor: '#ea580c',
    },
    {
      id: 'chatbot',
      title: 'Build no-code Chatbot in minutes',
      descLines: [
        'Build your Own Chatbot Flows your Way! Easy-to-use Chatbot & Catalog Flow builder to build your conversational journeys',
      ],
      gif: '/images/AI6.gif',
      alt: 'Build no-code Chatbot in minutes Demo',
      bgColor: '#e8f4fd',
      accentColor: '#0284c7',
    },
    {
      id: 'broadcast',
      title: 'Import & Broadcast Instantly',
      descLines: [
        'Simply Import all your Contacts and Broadcast approved messages Instantly.',
        'See real-time analytics on the AiSensy Platform for delivered, read rates and more',
      ],
      gif: '/images/AI8.gif',
      alt: 'Import & Broadcast Instantly Demo',
      bgColor: '#e9f8f0',
      accentColor: '#00C067',
    },
  ];

  return (
    <section className="advanced-features-section" id="advanced-features">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center" style={{ marginBottom: 48 }}>
          <h2 className="section-main-title">Advanced Features that Drive Conversions</h2>
          <p className="section-main-subtitle">
            3X Your revenues using AiSensy Marketing Platform
          </p>
        </div>

        {/* 2x2 Grid Layout (Exact matching video frames 00:45 - 00:47) */}
        <div className="features-2x2-grid">
          {features.map((item) => (
            <div key={item.id} className="feature-card-item">
              <div className="feature-card-header">
                <h3 className="feature-card-title">{item.title}</h3>
                <div className="feature-card-desc">
                  {item.descLines.map((line, idx) => (
                    <p key={idx} style={{ margin: '0 0 8px 0' }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tinted inner container holding the animated GIF */}
              <div
                className="feature-gif-wrapper"
                style={{ backgroundColor: item.bgColor }}
              >
                <img
                  src={item.gif}
                  alt={item.alt}
                  className="feature-animated-gif"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
