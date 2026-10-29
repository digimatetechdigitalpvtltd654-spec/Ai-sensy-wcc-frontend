import React, { useState } from 'react';

interface FloatingWhatsAppWidgetProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

export const FloatingWhatsAppWidget: React.FC<FloatingWhatsAppWidgetProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'messages' | 'news'>('home');
  const [inChatMode, setInChatMode] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Hi there! 👋 How can we help you 5X your revenue with WhatsApp Marketing today?',
      time: 'Just now',
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSendMessage = () => {
    if (!inputVal.trim()) return;
    const userText = inputVal.trim();
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: timeNow }]);
    setInputVal('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: 'Thanks for reaching out! AiSensy is an official Meta Business Partner. You can start your 14-day free trial right now with 1,000 free ad credits.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 800);
  };

  return (
    <div className="custom-chat-widget-root">
      {/* Floating Trigger Button (Image 5 & Image 4 toggle) */}
      <div
        className="floating-smile-chat-btn"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? 'Close Chat' : 'Chat with AiSensy Support'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        ) : (
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
            {/* White speech bubble */}
            <path
              d="M10 9C10 6.79086 11.7909 5 14 5H26C28.2091 5 30 6.79086 30 9V23C30 25.2091 28.2091 27 26 27H18L12 32V27H14C11.7909 27 10 25.2091 10 23V9Z"
              fill="#FFFFFF"
            />
            {/* Green smiley curve inside bubble */}
            <path
              d="M15 16C16 19 24 19 25 16"
              stroke="#22c55e"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </div>

      {/* Floating Chat Drawer (Image 4 & Video Frames 00:17 - 00:31) */}
      {isOpen && (
        <div className="crisp-chat-card-drawer">
          {/* Header with Lush Green Gradient & Team Avatars */}
          <div className="crisp-drawer-header">
            <div className="crisp-top-row">
              <div className="crisp-avatars-cluster">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                  alt="Support Member 1"
                  className="crisp-avatar"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                  alt="Support Member 2"
                  className="crisp-avatar overlap"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80"
                  alt="Support Member 3"
                  className="crisp-avatar overlap-2"
                />
              </div>
              <button
                className="crisp-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                &times;
              </button>
            </div>

            <h3 className="crisp-greeting-title">Hi there 👋</h3>
            <p className="crisp-greeting-subtitle">Explore Docs, News or Chat with us</p>

            {/* "Send us a message" Action Card */}
            <div
              className="crisp-send-msg-card"
              onClick={() => {
                setActiveTab('messages');
                setInChatMode(true);
              }}
            >
              <span className="crisp-send-text">Send us a message</span>
              <div className="crisp-send-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Drawer Body Area */}
          <div className="crisp-drawer-body">
            {activeTab === 'home' && (
              <div className="crisp-tab-home-content">
                {/* Feature Article Card (Screenshot 4 & Video Frame 00:19) */}
                <div
                  className="crisp-feature-news-card"
                  onClick={() => {
                    setActiveTab('news');
                  }}
                >
                  <div className="crisp-feature-img-box">
                    <img
                      src="/images/Ai1.webp"
                      alt="AI Assistant Dashboard Feature"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/university_campus.jpg';
                      }}
                    />
                  </div>
                  <div className="crisp-feature-info">
                    <span className="crisp-feature-badge">Feature</span>
                    <h4 className="crisp-feature-title">
                      Introducing AI Assistant: Automate your WhatsApp Marketing through Chat
                    </h4>
                  </div>
                </div>

                {/* Quick Link Cards */}
                <div className="crisp-quick-links-box">
                  <div
                    className="crisp-quick-link-item"
                    onClick={() => onNavigate('signup')}
                  >
                    <span>🚀 Start 14-Day Free Forever Plan</span>
                    <span style={{ color: '#00C067' }}>&rarr;</span>
                  </div>
                  <div
                    className="crisp-quick-link-item"
                    onClick={() => {
                      setActiveTab('messages');
                      setInChatMode(true);
                    }}
                  >
                    <span>💬 Talk to WhatsApp API Expert</span>
                    <span style={{ color: '#00C067' }}>&rarr;</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="crisp-tab-messages-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {inChatMode ? (
                  <>
                    <div className="crisp-chat-history" style={{ flex: 1, overflowY: 'auto' }}>
                      {messages.map((m, idx) => (
                        <div
                          key={idx}
                          className={`crisp-bubble-row ${m.sender === 'user' ? 'user' : 'bot'}`}
                        >
                          <div className="crisp-msg-bubble">{m.text}</div>
                          <span className="crisp-msg-time">{m.time}</span>
                        </div>
                      ))}
                    </div>

                    <div className="crisp-chat-input-bar">
                      <input
                        type="text"
                        placeholder="Write a reply..."
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button onClick={handleSendMessage} aria-label="Send">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#00C067">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  /* Video Frame 00:22: Empty messages state */
                  <div style={{ textAlign: 'center', padding: '40px 16px', margin: 'auto 0' }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>💬</div>
                    <h4 style={{ fontSize: 18, fontWeight: 800, color: '#111827', marginBottom: 6 }}>No messages</h4>
                    <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 20 }}>
                      Messages from the team will be shown here
                    </p>
                    <button
                      className="btn-primary-hero"
                      style={{ padding: '10px 20px', fontSize: 13 }}
                      onClick={() => setInChatMode(true)}
                    >
                      Send us a message &rarr;
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'news' && (
              /* Video Frames 00:24 to 00:29: Full News Feed */
              <div className="crisp-tab-news-content">
                <div className="crisp-news-item">
                  <span className="crisp-feature-badge">Feature</span>
                  <h5>Introducing AI Assistant: Automate your WhatsApp Marketing through Chat</h5>
                  <p>
                    We&apos;re excited to present your brand new AI teammate in AiSensy - the AI Assistant. Launch broadcasts, create flows, and answer queries naturally.
                  </p>
                </div>

                <div className="crisp-news-item">
                  <span className="crisp-feature-badge">Feature</span>
                  <h5>Run multi-step WhatsApp campaigns with AI</h5>
                  <p>You can now create and launch WhatsApp Ads directly through the AiSensy Ads Manager with automated AI targeting.</p>
                </div>

                <div className="crisp-news-item">
                  <span className="crisp-feature-badge" style={{ background: '#fef3c7', color: '#b45309' }}>Update</span>
                  <h5>WhatsApp Service Message Pricing Update: October 1, 2026</h5>
                  <p>We&apos;re sharing an important update regarding WhatsApp service conversation rates from Meta.</p>
                </div>

                <div className="crisp-news-item">
                  <span className="crisp-feature-badge">Shopify Integration</span>
                  <h5>Shopify 1-Click Sync</h5>
                  <p>We&apos;ve launched three new updates to help Abandoned Cart recovery, Order Status notifications &amp; COD verification.</p>
                </div>

                <div className="crisp-news-item">
                  <span className="crisp-feature-badge">Improvement</span>
                  <h5>₹1000 Free Meta Ad Credits with AiSensy</h5>
                  <p>Claim ₹1000 in free ad credits to start driving instant high-converting Click-to-WhatsApp traffic.</p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Tabs Bar (Image 4 & Video: Home, Messages, News) */}
          <div className="crisp-drawer-bottom-nav">
            <button
              className={`crisp-nav-tab ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </button>

            <button
              className={`crisp-nav-tab ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Messages</span>
            </button>

            <button
              className={`crisp-nav-tab ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span>News</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
