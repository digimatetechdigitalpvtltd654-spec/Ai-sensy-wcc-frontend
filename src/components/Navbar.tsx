import React, { useState } from 'react';
import { DropdownItem } from '../types/navigation';

interface NavbarProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
  currentPage: 'home' | 'login' | 'signup';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productItems: DropdownItem[] = [
    { id: 'p1', title: 'AiSensy AI Suite', desc: 'See 4 Agents', iconType: 'bot' },
    { id: 'p2', title: 'WhatsApp Business API', desc: 'Get FREE WhatsApp API', iconType: 'briefcase' },
    { id: 'p3', title: 'WhatsApp Marketing', desc: 'Broadcast, Automate & Grow', iconType: 'broadcast' },
    { id: 'p4', title: 'AI Ads Manager', desc: '5X your Leads right away', iconType: 'target' },
    { id: 'p5', title: 'WhatsApp Chatbots', desc: 'Automate your messaging with AI', iconType: 'bot' },
    { id: 'p6', title: 'AI WhatsApp Chatbot', desc: 'Automate everything with AI', iconType: 'sparkles' },
    { id: 'p7', title: 'WhatsApp Payments', desc: 'Collect Payments within WhatsApp', iconType: 'wallet' },
    { id: 'p8', title: 'WhatsApp Forms', desc: 'Native Forms within WhatsApp', iconType: 'clipboard' },
    { id: 'p9', title: 'WhatsApp Link & QR', desc: 'Free WhatsApp Link & QR generator', iconType: 'qr' },
    { id: 'p10', title: 'WhatsApp Blue Tick', desc: 'Apply for Verified Meta Badge', iconType: 'shield' },
  ];

  const featureItems: DropdownItem[] = [
    { id: 'f1', title: 'Features', desc: 'Explore all Powerful AiSensy features', iconType: 'flame' },
    { id: 'f2', title: 'AI Assistant', desc: 'Your AI Assistant for Dashboard tasks', iconType: 'play' },
    { id: 'f3', title: 'WhatsApp Broadcasting', desc: 'Retargeting, CRM & more', iconType: 'broadcast' },
    { id: 'f4', title: 'WhatsApp AI Agents', desc: 'Build AI Agents on WhatsApp', iconType: 'smile' },
    { id: 'f5', title: 'AI WhatsApp Chatbot', desc: 'Automate anything with AI', iconType: 'bot' },
    { id: 'f6', title: 'Ads Manager', desc: '3X Your Leads', iconType: 'send' },
    { id: 'f7', title: 'WhatsApp Chatbots', desc: 'Drag & Drop Flow Builder', iconType: 'network' },
    { id: 'f8', title: 'WhatsApp Catalog', desc: 'Sell Products on WhatsApp', iconType: 'book' },
    { id: 'f9', title: 'WhatsApp Payments', desc: 'Collect Payments via UPI & Card', iconType: 'wallet' },
    { id: 'f10', title: 'WhatsApp Forms', desc: 'Native Data Collection', iconType: 'clipboard' },
  ];

  const industryItems: DropdownItem[] = [
    { id: 'i1', title: 'All Industries', desc: 'Industry-wise Use Cases', iconType: 'refresh' },
    { id: 'i2', title: 'Education', desc: 'Edtech, Coaches, Institutes', iconType: 'academic' },
    { id: 'i3', title: 'E-commerce', desc: 'Brands & D2C', iconType: 'cart' },
    { id: 'i4', title: 'Finance & Insurance', desc: 'Fintech, Banking & more', iconType: 'currency' },
    { id: 'i5', title: 'Healthcare', desc: 'Appointment Booking, Hospitals', iconType: 'plus' },
    { id: 'i6', title: 'Automobile', desc: 'Book Test Drive, Sell Faster', iconType: 'car' },
    { id: 'i7', title: 'Real Estate', desc: 'Developers, Brokers, Coworking', iconType: 'home' },
    { id: 'i8', title: 'IT Services & Internet', desc: 'Showcase your services', iconType: 'wifi' },
    { id: 'i9', title: 'Events & Webinar', desc: 'Boost Attendance', iconType: 'calendar' },
  ];

  const resourceItems: DropdownItem[] = [
    { id: 'r1', title: 'Help Center', desc: "FAQs, How-to's & more", iconType: 'help' },
    { id: 'r2', title: 'Tutorials', desc: 'Learn how to use the platform', iconType: 'academic' },
    { id: 'r3', title: 'Youtube', desc: 'Tutorials, Podcasts, Events & more', iconType: 'play' },
    { id: 'r4', title: 'Template Library', desc: 'Explore the right templates', iconType: 'template' },
    { id: 'r5', title: 'Blog', desc: 'Latest Updates & Stories', iconType: 'document' },
    { id: 'r6', title: 'Developer APIs', desc: 'Send Templates via API', iconType: 'code' },
    { id: 'r7', title: 'Case Studies', desc: 'Business Growth stories', iconType: 'chart' },
    { id: 'r8', title: 'Android App', desc: 'Download on Mobile', iconType: 'playstore' },
    { id: 'r9', title: 'iOS App', desc: 'Download on Mobile', iconType: 'apple' },
  ];

  const integrationItems: DropdownItem[] = [
    { id: 'in1', title: 'Explore all Integrations', desc: 'Automate Notifications', iconType: 'gear' },
    { id: 'in2', title: 'Shopify', desc: 'Abandoned Cart, Order Status & more', iconType: 'cart' },
    { id: 'in3', title: 'Razorpay', desc: 'Send Payment Notifications', iconType: 'currency' },
    { id: 'in4', title: 'Shopify Checkouts', desc: 'Simple, Magic Checkout & more', iconType: 'bag' },
    { id: 'in5', title: 'WebEngage', desc: 'Automate your Journeys', iconType: 'send' },
    { id: 'in6', title: 'LeadSquared', desc: 'Connect your CRM', iconType: 'users' },
    { id: 'in7', title: 'Integrately', desc: 'Build Automations', iconType: 'chain' },
    { id: 'in8', title: 'Webhook APIs', desc: 'Receive incoming data from AiSensy to your backend', iconType: 'code' },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'bot':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 'broadcast':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
            <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
          </svg>
        );
      case 'cart':
      case 'bag':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        );
      case 'wallet':
      case 'currency':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'clipboard':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          </svg>
        );
      case 'academic':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
          </svg>
        );
      case 'gear':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
    }
  };

  const renderDropdownList = (items: DropdownItem[]) => (
    <div className="dropdown-menu">
      {items.map((item) => (
        <a
          key={item.id}
          href="#features"
          className="dropdown-item"
          onClick={(e) => {
            e.preventDefault();
            setActiveDropdown(null);
          }}
        >
          <div className="dropdown-icon">{renderIcon(item.iconType)}</div>
          <div className="dropdown-text">
            <span className="dropdown-title">{item.title}</span>
            <span className="dropdown-desc">{item.desc}</span>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo (Exact match from logoAi.png) */}
        <a
          href="/"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
        >
          <img
            src="/images/logoAi.png"
            alt="AiSensy Logo"
            style={{ height: 34, width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Navigation Menu (Matching Image 1) */}
        <nav className="nav-menu">
          <div className="nav-item">
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </div>

          {/* Product Dropdown */}
          <div
            className={`nav-item ${activeDropdown === 'product' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('product')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link">
              <span>Product</span>
              <span className="nav-caret">▾</span>
            </button>
            {renderDropdownList(productItems)}
          </div>

          {/* Features Dropdown */}
          <div
            className={`nav-item ${activeDropdown === 'features' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('features')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link">
              <span>Features</span>
              <span className="nav-caret">▾</span>
            </button>
            {renderDropdownList(featureItems)}
          </div>

          {/* Industries Dropdown */}
          <div
            className={`nav-item ${activeDropdown === 'industries' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link">
              <span>Industries</span>
              <span className="nav-caret">▾</span>
            </button>
            {renderDropdownList(industryItems)}
          </div>

          {/* Resources Dropdown */}
          <div
            className={`nav-item ${activeDropdown === 'resources' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('resources')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link">
              <span>Resources</span>
              <span className="nav-caret">▾</span>
            </button>
            {renderDropdownList(resourceItems)}
          </div>

          {/* Integrations Dropdown */}
          <div
            className={`nav-item ${activeDropdown === 'integrations' ? 'active' : ''}`}
            onMouseEnter={() => setActiveDropdown('integrations')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link">
              <span>Integrations</span>
              <span className="nav-caret">▾</span>
            </button>
            {renderDropdownList(integrationItems)}
          </div>

          <div className="nav-item">
            <a href="#partner" className="nav-link">
              Partner
            </a>
          </div>

          {/* Language Switcher (Globe + Eng + caret) */}
          <div className="nav-item">
            <button className="nav-link">
              <svg
                style={{ width: 16, height: 16, color: '#111827', flexShrink: 0 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Eng</span>
              <span className="nav-caret">▾</span>
            </button>
          </div>
        </nav>

        {/* Action Buttons (Strictly single line horizontal buttons matching Image 1) */}
        <div className="header-actions">
          <button
            className="btn-header-cta"
            onClick={() => onNavigate('signup')}
          >
            Start for FREE &rarr;
          </button>
          <button
            className="btn-header-login"
            onClick={() => onNavigate('login')}
          >
            Login &rarr;
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
};
