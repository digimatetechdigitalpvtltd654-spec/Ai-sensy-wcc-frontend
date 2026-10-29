import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Company Info, Meta Partner Badge & Social Icons */}
          <div className="footer-col-company">
            <p className="footer-copyright">
              &copy; 2026 AiSensy Communications Private
              <br />
              Limited
            </p>

            <p className="footer-madewith">
              Made with <span className="heart-emoji">💖</span> in India
            </p>

            {/* Meta Business Partner Badge */}
            <div className="meta-partner-card">
              <div className="meta-brand-row">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="meta-infinity-icon"
                >
                  <title>Meta</title>
                  <path
                    fill="#0467DF"
                    d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.229 1.141 2.378 1.6 3.864 1.6 1.775 0 2.897-.768 3.593-1.927a5.297 5.297 0 0 0 .371-.761 6.624 6.624 0 0 0 .265-.86c.14-.604.21-1.267.21-1.973 0-2.566-.704-5.241-2.044-7.306-1.188-1.833-2.903-3.113-4.871-3.113-1.815 0-3.193 1.077-4.712 3.297C10.108 5.107 8.73 4.03 6.915 4.03zm0 2.053c1.192 0 2.115.82 3.42 2.766l.542.808-.553.805c-1.464 2.13-2.33 3.33-2.973 4.186-1.002 1.334-1.67 1.782-2.518 1.782-.99 0-1.642-.61-2.083-1.345a4.34 4.34 0 0 1-.365-.774c-.114-.408-.174-.897-.174-1.458 0-2.128.583-4.407 1.722-6.166 1.005-1.55 2.404-2.597 4.024-2.597zm10.17 0c1.62 0 3.019 1.047 4.024 2.597 1.139 1.759 1.722 4.038 1.722 6.166 0 .561-.06 1.05-.174 1.458a4.34 4.34 0 0 1-.365.774c-.441.735-1.093 1.345-2.083 1.345-.848 0-1.516-.448-2.518-1.782-.643-.856-1.509-2.056-2.973-4.186l-.553-.805.542-.808c1.305-1.946 2.228-2.766 3.42-2.766z"
                  />
                </svg>
                <span className="meta-text">Meta</span>
              </div>
              <div className="meta-partner-text">Business Partner</div>
            </div>

            {/* Social Media Links */}
            <div className="footer-social-icons">
              {/* Instagram */}
              <a href="#instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#twitter" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#youtube" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#linkedin" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.37 9.74v-8.37H5.09v8.37h2.74z" />
                </svg>
              </a>

              {/* Google Play */}
              <a href="#playstore" aria-label="Google Play Store">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.012 2.012 0 0 1-.61-1.464V3.278c0-.568.225-1.096.609-1.464zm11.242 11.244l2.42 2.42-11.83 6.845 9.41-9.265zm2.42-2.116l-2.42 2.42-9.41-9.265 11.83 6.845zm1.191 1.058l3.197 1.85a1.135 1.135 0 0 1 0 1.968l-3.197 1.85-2.032-2.032 2.032-2.636z" />
                </svg>
              </a>

              {/* Apple App Store */}
              <a href="#appstore" aria-label="Apple App Store">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.06-1.82.94-2.87-.91.04-2.03.61-2.68 1.37-.58.67-1.09 1.74-.95 2.77 1.02.08 2.06-.51 2.69-1.27z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform + Contact Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#demo">Book a Demo</a></li>
              <li><a href="#partner">Become a Partner</a></li>
              <li><a href="#whatsapp-marketing">WhatsApp Marketing</a></li>
              <li><a href="#whatsapp-business-api">WhatsApp Business API</a></li>
            </ul>

            <div className="footer-contact-block">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-links">
                <li><a href="#contact-our-team">Contact Our Team</a></li>
                <li><a href="tel:+919873940683">Sales +919873940683</a></li>
                <li><a href="tel:+918069158234">Support +918069158234</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#help-center">Help Center</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#about-aisensy">About AiSensy</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: FREE Tools */}
          <div className="footer-col">
            <h4 className="footer-col-title">FREE Tools</h4>
            <ul className="footer-links">
              <li><a href="#whatsapp-button">WhatsApp Button</a></li>
              <li><a href="#generate-whatsapp-link">Generate WhatsApp Link</a></li>
              <li><a href="#download-android-app">Download Android app</a></li>
              <li><a href="#download-ios-app">Download iOS app</a></li>
              <li><a href="#pricing-calculator">Pricing Calculator</a></li>
              <li><a href="#ai-ad-generator">AI Ad Generator</a></li>
              <li><a href="#ai-template-generator">AI Template Generator</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="footer-col">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#refund-policy">Refund Policy</a></li>
              <li><a href="#terms-conditions">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
