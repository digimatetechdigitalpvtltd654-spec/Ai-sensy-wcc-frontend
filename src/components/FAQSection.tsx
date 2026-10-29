import React, { useState } from 'react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What does AiSensy do?',
      a: 'AiSensy provides businesses with a WhatsApp marketing software they can use to Broadcast & automate messages, run Click to WhatsApp Ads, build Chatbots, showcase catalogues, provide multi-agent Live chat support, collect payments within WhatsApp and much more.',
    },
    {
      q: 'Is AiSensy an Official WhatsApp Marketing Software?',
      a: 'Yes, AiSensy is an Official WhatsApp Business Solution Partner (BSP) built on Official WhatsApp Business APIs.',
    },
    {
      q: 'Does AiSensy offer a FREE account?',
      a: 'Yes! AiSensy provides a 14-day FREE trial with access to all features, official WhatsApp Business API verification, and ₹1000 Free Ad credits.',
    },
    {
      q: 'Is there any WhatsApp Business API procurement fee for a brand/business?',
      a: "No. There is no Setup fee, just a subscription fee. AiSensy doesn't charge a single penny to procure the WhatsApp Business API for a Brand/Business. Businesses can procure the API completely free through AiSensy.",
    },
    {
      q: 'How do you handle Customer Support?',
      a: 'We have a dedicated customer support team available via Live Chat, Email, Phone, and Zoom, ready to assist our customers with any questions or support they may need.',
    },
    {
      q: 'What is the Cost of Broadcasting messages?',
      a: 'WhatsApp charges are ₹1.09/message for marketing messages & ₹0.145 for utility and authentication messages. You can recharge this from the AiSensy Dashboard itself. Each message is charged separately by Meta. Service conversations(replies to user messages) are free of cost.',
    },
    {
      q: 'How many messages can I Broadcast in a day to my customers?',
      a: 'You will start with 2000 Messages/day. As you send 500+ Messages, your tier will be upgraded to 10,000 messages/day and as you send 5000 messages within 7 days, your limit will be increased to 100,000 messages/day. Last limit is infinite messages/day which can be enabled by sending 50,000 messages within 7 days. The limit upgrades happen in 24 hours.',
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-container">
          <div className="section-head-center" style={{ marginBottom: 30 }}>
            <h2 className="section-main-title" style={{ fontSize: 36, fontWeight: 800 }}>FAQ</h2>
            <p className="section-main-subtitle">
              Common questions answered about AiSensy and WhatsApp Marketing
            </p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <div
                    className="faq-header"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  </div>
                  {isOpen && <div className="faq-body">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
