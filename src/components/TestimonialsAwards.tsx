import React from 'react';

export const TestimonialsAwards: React.FC = () => {
  const awards = [
    { title: 'Users Love Us', color: '#dc2626' },
    { title: 'High Performer', subtitle: 'Summer 2023', color: '#ea580c' },
    { title: 'High Performer', subtitle: 'Small Business', color: '#ea580c' },
    { title: 'High Performer', subtitle: 'Mid-Market', color: '#ea580c' },
    { title: 'High Performer', subtitle: 'Asia', color: '#ea580c' },
    { title: 'Best Support', subtitle: 'Summer 2023', color: '#ca8a04' },
    { title: 'Easiest To Do Business', subtitle: 'Summer 2023', color: '#16a34a' },
    { title: 'Momentum Leader', subtitle: 'Summer 2023', color: '#0284c7' },
  ];

  const testimonials = [
    {
      name: 'Priyal Ostwal',
      role: 'Marketing Manager,\nPhysicsWallah',
      avatar: '/images/AI10.avif',
      bgColor: '#bbf7d0',
      quote:
        'AiSensy team has shown exceptional professionalism, reliability and a true commitment to customer satisfaction.',
    },
    {
      name: 'Akash Jain',
      role: 'Business Executive, Cosco',
      avatar: '/images/AI12.avif',
      bgColor: '#fed7aa',
      quote:
        "AiSensy helped us increase our customer engagement. Our customer engagement increased from 35% to 90% with AiSensy's Smart Retargeting feature.",
    },
    {
      name: 'Achina Mayya',
      role: 'Founder & CEO, AevyTV',
      avatar: '/images/Ai13.avif',
      bgColor: '#e9d5ff',
      quote:
        'AiSensy has been pivotal for us. The personalised interactions and instant responses greatly improved our engagement rates, and more importantly our sales!',
    },
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-main-title" style={{ maxWidth: 880, margin: '0 auto 40px', fontSize: 32, lineHeight: 1.3 }}>
          #1 WhatsApp Marketing &amp; Engagement Platform for startups &amp; growing businesses
        </h2>

        {/* Official G2 Ribbon Badges (from video frame 00:48) */}
        <div className="awards-ribbon-row">
          {awards.map((award, idx) => (
            <div key={idx} className="g2-ribbon-badge">
              <div className="g2-ribbon-top">
                <span className="g2-badge-icon">G2</span>
                <span className="g2-badge-text">{award.title}</span>
              </div>
              {award.subtitle && <div className="g2-badge-sub">{award.subtitle}</div>}
              <div className="g2-ribbon-tail" style={{ borderColor: award.color }}></div>
            </div>
          ))}
        </div>

        {/* 3 Customer Review Cards (from video frame 00:50) */}
        <div className="testimonials-cards-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card-official">
              <div
                className="testimonial-avatar-wrap"
                style={{ backgroundColor: item.bgColor }}
              >
                <img src={item.avatar} alt={item.name} className="testimonial-avatar-img" />
              </div>

              <h4 className="testimonial-author-name">{item.name}</h4>
              <p className="testimonial-author-role">{item.role}</p>

              <p className="testimonial-body-quote">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
