import React, { useState } from 'react';
import { FaWhatsapp, FaTwitter, FaFacebookF, FaGooglePlay, FaApple } from 'react-icons/fa';
import {
  LayoutGrid,
  MessagesSquare,
  History,
  Sparkles,
  Contact,
  PlaneTakeoff,
  Megaphone,
  Workflow,
  IndianRupee,
  Code,
  CircleDashed,
  ArrowDown,
  RotateCw,
  Gift,
  User,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Copy,
  Pencil,
  BookOpen,
  Info,
  Diamond,
  Play,
  CheckCircle2,
  AlertCircle,
  Crown,
  LogOut,
  FolderKanban,
  Coins,
  UserCheck,
  QrCode,
  FileClock,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';

interface ProjectWorkspacePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProjectWorkspacePage: React.FC<ProjectWorkspacePageProps> = ({ onNavigate }) => {
  const [offerCode, setOfferCode] = useState('');
  const [offerMessage, setOfferMessage] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPhoneLink, setCopiedPhoneLink] = useState(false);
  const [showTutorials, setShowTutorials] = useState(true);
  const [userDropdown, setUserDropdown] = useState(false);

  const handleActivateOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!offerCode.trim()) return;
    setOfferMessage(`Offer "${offerCode}" applied! 🎉 Discount active on your next billing.`);
    setOfferCode('');
    setTimeout(() => setOfferMessage(null), 4000);
  };

  const handleCopy = (text: string, type: 'ref' | 'phone') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    if (type === 'ref') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } else {
      setCopiedPhoneLink(true);
      setTimeout(() => setCopiedPhoneLink(false), 2000);
    }
  };

  return (
    <div className="workspace-layout">
      {/* ========================================================
          LEFT SIDEBAR (EXACT MATCH TO AISENSY DASHBOARD IMAGE)
      ======================================================== */}
      {/* Shared Authentic Pine Green Sidebar with exact 9 items */}
      <Sidebar activeRoute="workspace" onNavigate={onNavigate} />

      {/* ========================================================
          MAIN WORKSPACE CONTENT AREA
      ======================================================== */}
      <div className="ws-main">
        {/* TOP HEADER BAR */}
        <header className="ws-topbar">
          <div className="ws-topbar-left">
            <h1 className="ws-project-title">Bps Ventures 6690</h1>
          </div>

          <div className="ws-topbar-right">
            <div className="ws-api-status-top">
              <span>WhatsApp Business API Status :</span>
              <span className="ws-status-live-text">LIVE</span>
            </div>

            <div className="ws-plan-top">
              <span>Current Plan :</span>
              <span className="ws-plan-bold">FREE FOREVER</span>
            </div>

            <button
              type="button"
              className="btn-explore-plans"
              onClick={() => alert('Explore Plans: Growth, Pro, and Enterprise options available.')}
            >
              <Diamond size={14} />
              <span>Explore Plans</span>
            </button>

            <button
              type="button"
              className="ws-icon-btn"
              title="Refresh Status"
              onClick={() => window.location.reload()}
            >
              <RotateCw size={16} />
            </button>

            <button
              type="button"
              className="ws-icon-btn"
              title="AI Assistant"
              onClick={() => alert('AiSensy Copilot is ready to assist your campaigns.')}
            >
              <Sparkles size={17} color="#00C067" />
            </button>
          </div>
        </header>

        {/* WORKSPACE BODY GRID: LEFT CONTENT & RIGHT WIDGETS */}
        <div className="ws-body-grid">
          {/* ========================================================
              LEFT COLUMN: MAIN SECTIONS & PROGRESS
          ======================================================== */}
          <div className="ws-col-left">
            {/* CARD 1: 3-METRIC STATUS ROW */}
            <div className="ws-metric-row-card">
              <div className="ws-metric-item">
                <div className="ws-metric-label">
                  <span>WhatsApp Business API Status</span>
                  <Info size={13} color="#6b7280" />
                </div>
                <div className="ws-metric-badge-live">LIVE</div>
              </div>

              <div className="ws-metric-item">
                <div className="ws-metric-label">
                  <span>Quality Rating</span>
                  <Info size={13} color="#6b7280" />
                </div>
                <div className="ws-metric-badge-high">High</div>
              </div>

              <div className="ws-metric-item">
                <div className="ws-metric-label">
                  <span>Remaining Quota</span>
                  <Info size={13} color="#6b7280" />
                </div>
                <div className="ws-metric-val-number">2000</div>
              </div>
            </div>

            {/* CARD 2: OFFER ACCESS CODE BANNER */}
            <div className="ws-offer-banner-card">
              <div className="ws-offer-left">
                <div className="ws-gift-box-icon">
                  <Gift size={22} />
                </div>
                <div>
                  <div className="ws-offer-heading">Got any offer access code?</div>
                  <div className="ws-offer-sub">Activate your special discounted offer now!</div>
                </div>
              </div>

              <form onSubmit={handleActivateOffer} className="ws-offer-right">
                <input
                  type="text"
                  className="ws-offer-input"
                  placeholder="Enter access code"
                  value={offerCode}
                  onChange={(e) => setOfferCode(e.target.value)}
                />
                <button type="submit" className="btn-offer-activate">
                  <span>Activate</span>
                  <ArrowRight size={13} style={{ display: 'inline', marginLeft: 4 }} />
                </button>
              </form>
            </div>

            {offerMessage && (
              <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', padding: '8px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600 }}>
                {offerMessage}
              </div>
            )}

            {/* CARD 3: WCC REWARD PROGRESS STEPPER */}
            <div className="ws-wcc-reward-card">
              <div className="ws-wcc-header-row">
                <div className="ws-wcc-header-icon-box" title="WhatsApp Conversation Credits">
                  <Coins size={28} color="#fbbf24" />
                </div>
                <h3 className="ws-wcc-header-title">
                  Complete the steps &amp; win 200 WhatsApp Conversation Credits
                </h3>
              </div>

              <div className="ws-stepper-track">
                {/* Connecting Line */}
                <div className="ws-stepper-line">
                  <div className="ws-stepper-line-progress" style={{ width: '30%' }}></div>
                </div>

                {/* Milestone 1: Get Your API Live */}
                <div className="ws-step-node">
                  <div className="ws-step-icon-wrap">
                    <CheckCircle2 size={24} color="#28c152" />
                  </div>
                  <span className="ws-step-label">Step 1</span>
                  <span className="ws-step-title">Get Your API Live</span>
                </div>

                {/* Milestone 2: Get Business Verified */}
                <div className="ws-step-node">
                  <div className="ws-step-icon-wrap">
                    <CheckCircle2 size={24} color="#28c152" />
                  </div>
                  <span className="ws-step-label">Step 2</span>
                  <span className="ws-step-title">Get Business Verified (FBM/KYC)</span>
                </div>

                {/* Milestone 3: Recharge WCC */}
                <div className="ws-step-node">
                  <div className="ws-step-icon-wrap">
                    <AlertCircle size={24} color="#f59e0b" />
                  </div>
                  <span className="ws-step-label">
                    Step 3 <span className="ws-step-pending-tag">PENDING</span>
                  </span>
                  <span className="ws-step-title">Recharge WCC</span>
                </div>

                {/* Milestone 4: Spend 500 WCC */}
                <div className="ws-step-node">
                  <div className="ws-step-icon-wrap">
                    <AlertCircle size={24} color="#f59e0b" />
                  </div>
                  <span className="ws-step-label">
                    Step 4 <span className="ws-step-pending-tag">PENDING</span>
                  </span>
                  <span className="ws-step-title">Spend 500 WCC</span>
                </div>

                {/* Milestone 5: WCC Won */}
                <div className="ws-step-node">
                  <div className="ws-step-icon-wrap">
                    <Crown size={24} color="#fbbf24" />
                  </div>
                  <span className="ws-step-label" style={{ opacity: 0 }}>Step 5</span>
                  <span className="ws-step-title" style={{ color: '#fbbf24', fontWeight: 700 }}>
                    WCC Won
                  </span>
                </div>
              </div>
            </div>

            {/* CARD 4: SETUP FREE WHATSAPP BUSINESS ACCOUNT */}
            <div className="ws-setup-wa-card">
              <div className="ws-setup-header">
                <div className="ws-setup-title-left">
                  <FaWhatsapp size={20} color="#25D366" />
                  <span>Setup FREE WhatsApp Business Account</span>
                </div>
                <span className="ws-steps-left-tag">2 steps left</span>
              </div>

              <div className="ws-setup-step-box">
                <div className="ws-step-box-left">
                  <span className="ws-next-chip">NEXT</span>
                  <div className="ws-step-icon-avatar">
                    <User size={16} />
                  </div>
                  <span className="ws-step-title-text">Setup Your Profile</span>
                </div>

                <ChevronDown size={16} color="#9ca3af" />
              </div>

              <button type="button" className="ws-all-steps-toggle">
                <span>All Steps</span>
                <ChevronDown size={14} />
              </button>
            </div>

            {/* CARD 5: SETUP ACCOUNT TO RUN ADS */}
            <div className="ws-setup-ads-card">
              <div className="ws-ads-header">
                <div className="ws-ads-title-left">
                  <TrendingUp size={18} color="#111827" />
                  <span>Setup account to run Ads</span>
                </div>
                <button
                  type="button"
                  className="btn-setup-ads"
                  onClick={() => alert('Opening Meta Ad Manager configuration...')}
                >
                  Setup
                </button>
              </div>

              <div className="ws-ads-banner-msg">
                Setup your Meta ad account to run ads and reach customer
              </div>
            </div>

            {/* CARD 6: 4 ACTION CARDS 2x2 GRID */}
            <div className="ws-action-cards-grid">
              {/* Card 1: AiSensy Training Call */}
              <div className="ws-action-card card-training">
                <div>
                  <h4 className="ws-action-title">AiSensy Training Call</h4>
                  <p className="ws-action-sub">
                    Schedule your platform onboarding call with our team
                  </p>
                  <div className="ws-action-bullets">
                    <div>* Understand how to use the platform</div>
                    <div>* Submitting templates, importing contacts &amp; broadcasting</div>
                  </div>
                </div>

                <img
                  src="/dashboard/onlineCall.png"
                  alt="Training Call"
                  className="ws-card-corner-img"
                />

                <button
                  type="button"
                  className="ws-action-link-btn"
                  onClick={() => alert('Redirecting to AiSensy Training Call Scheduler...')}
                >
                  <span>Schedule Call Now!</span>
                  <span className="ws-arrow-circle">
                    <ArrowRight size={12} />
                  </span>
                </button>
              </div>

              {/* Card 2: Refer & Earn */}
              <div className="ws-action-card card-refer">
                <div>
                  <h4 className="ws-action-title" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span>Refer &amp; Earn</span>
                    <Info size={13} color="#475569" />
                  </h4>
                  <p className="ws-action-sub">
                    Share your referral with your friends &amp; earn ₹2000
                  </p>

                  <div className="ws-refer-stats-row">
                    <div className="ws-refer-stat-pill">
                      <Coins size={14} color="#00C067" />
                      <span>Total Earned : <strong>₹0</strong></span>
                    </div>
                    <div className="ws-refer-stat-pill">
                      <UserCheck size={14} color="#00C067" />
                      <span>Signed Up : <strong>0</strong></span>
                    </div>
                  </div>

                  <div className="ws-refer-copy-box">
                    <span className="ws-refer-link-text">wa.aisensy.com/ref/aedfkm</span>
                    <button
                      type="button"
                      className="btn-refer-copy"
                      onClick={() => handleCopy('https://wa.aisensy.com/ref/aedfkm', 'ref')}
                    >
                      <Copy size={12} />
                      <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="ws-social-share-row">
                  <span>Share via Social Media</span>
                  <a
                    href="https://api.whatsapp.com/send?text=Join%20AiSensy%20https://wa.aisensy.com/ref/aedfkm"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#25D366' }}
                    title="Share on WhatsApp"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                  <a
                    href="https://twitter.com/intent/tweet?text=Join%20AiSensy%20https://wa.aisensy.com/ref/aedfkm"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#1d9bf0' }}
                    title="Share on Twitter"
                  >
                    <FaTwitter size={15} />
                  </a>
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://wa.aisensy.com/ref/aedfkm"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#1877f2' }}
                    title="Share on Facebook"
                  >
                    <FaFacebookF size={14} />
                  </a>
                </div>
              </div>

              {/* Card 3: Share Feedback & Earn WhatsApp Credits */}
              <div className="ws-action-card card-feedback">
                <div>
                  <h4 className="ws-action-title">Share Feedback &amp; Earn WhatsApp Credits</h4>
                  <p className="ws-action-sub">
                    Share your feedback about AiSensy Platform &amp; earn WCC instantly. Get upto 5000 messages for FREE!
                  </p>
                  <div className="ws-feedback-list">
                    <div>Video Feedback &rarr; <strong>₹2750 WCC</strong></div>
                    <div>Text Feedback &rarr; <strong>₹550 WCC</strong></div>
                    <div>G2 Review &rarr; <strong>₹275 WCC</strong></div>
                    <div>Google Review &rarr; <strong>₹110 WCC</strong></div>
                  </div>
                </div>

                <img
                  src="/dashboard/feedback_icon.png"
                  alt="Feedback"
                  className="ws-card-corner-img"
                  style={{ width: 56, height: 56 }}
                />

                <button
                  type="button"
                  className="ws-action-link-btn"
                  onClick={() => alert('Feedback Portal: Earn up to 5000 free credits.')}
                >
                  <span>Share Now!</span>
                  <span className="ws-arrow-circle">
                    <ArrowRight size={12} />
                  </span>
                </button>
              </div>

              {/* Card 4: Join Our Affiliate Program */}
              <div className="ws-action-card card-affiliate">
                <div>
                  <h4 className="ws-action-title">Join Our Affiliate Program</h4>
                  <p className="ws-action-sub">
                    Preferred by Agencies and Freelancers. Earn 20% Recurring Commission on all Unlimited Plans. Lifetime!
                  </p>
                </div>

                <img
                  src="/dashboard/affiliate_icon.png"
                  alt="Affiliate"
                  className="ws-card-corner-img"
                  style={{ width: 62, height: 62 }}
                />

                <button
                  type="button"
                  className="ws-action-link-btn"
                  onClick={() => alert('Welcome to AiSensy Affiliate Program: 20% recurring commission.')}
                >
                  <span>Become an Affiliate!</span>
                  <span className="ws-arrow-circle">
                    <ArrowRight size={12} />
                  </span>
                </button>
              </div>
            </div>

            {/* CARD 7: PLATFORM WALKTHROUGH & TUTORIALS */}
            <div className="ws-tutorials-card">
              <h3 className="ws-tutorials-title">Platform Walkthrough &amp; Tutorials</h3>
              <a
                href="#guide"
                className="ws-read-guide-link"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Opening AiSensy Platform Documentation...');
                }}
              >
                <BookOpen size={14} />
                <span>Read Platform Guide</span>
              </a>

              {/* 2 Video Cards */}
              <div className="ws-videos-grid">
                <div
                  className="ws-video-card"
                  onClick={() => alert('Playing Platform Walkthrough Video 1...')}
                  title="Watch Video Walkthrough"
                >
                  <img
                    src="/dashboard/video1_thumb.webp"
                    alt="Platform Walkthrough Video 1"
                    className="ws-video-thumb"
                  />
                  <div className="ws-video-play-btn">
                    <Play size={16} fill="currentColor" />
                  </div>
                  <span className="ws-video-duration">34:32</span>
                  <div className="ws-video-speaker-avatar">
                    <img src="/dashboard/video1_thumb.webp" alt="Instructor" />
                  </div>
                </div>

                <div
                  className="ws-video-card"
                  onClick={() => alert('Playing Platform Walkthrough Video 2...')}
                  title="Watch Video Walkthrough"
                >
                  <img
                    src="/dashboard/video2_thumb.webp"
                    alt="Platform Walkthrough Video 2"
                    className="ws-video-thumb"
                  />
                  <div className="ws-video-play-btn">
                    <Play size={16} fill="currentColor" />
                  </div>
                  <div className="ws-video-speaker-avatar">
                    <img src="/dashboard/video2_thumb.webp" alt="Instructor" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="ws-show-less-btn"
                onClick={() => setShowTutorials(!showTutorials)}
              >
                <span>{showTutorials ? 'Show less' : 'Show more'}</span>
                {showTutorials ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>

              {showTutorials && (
                <div className="ws-kb-links-grid">
                  {/* Column 1: Template */}
                  <div>
                    <h5 className="ws-kb-col-title">Template</h5>
                    <div className="ws-kb-links-list">
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>How to Create WhatsApp Template Message?</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Use chatbot parameters for leads</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Add Quick Reply to WhatsApp Template Message</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Message formatting guideline (Bold, Italic &amp; more)</span></div>
                    </div>
                  </div>

                  {/* Column 2: Campaign */}
                  <div>
                    <h5 className="ws-kb-col-title">Campaign</h5>
                    <div className="ws-kb-links-list">
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Audience segregation for WhatsApp Broadcast</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Upgrade WhatsApp Tier Limit</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Import upto 2 lakh contacts in one go</span></div>
                    </div>
                  </div>

                  {/* Column 3: Live Chat & Attribute */}
                  <div>
                    <h5 className="ws-kb-col-title">Live Chat &amp; Attribute</h5>
                    <div className="ws-kb-links-list">
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Add user attributes manually</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Add/Remove Tag &amp; update attribute</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Send &amp; Generate media link</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Chat Profile &amp; First Message Tag</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>How to create &amp; add tags to contacts</span></div>
                    </div>
                  </div>

                  {/* Column 4: Chatbot & Integration */}
                  <div>
                    <h5 className="ws-kb-col-title">Chatbot &amp; Integration</h5>
                    <div className="ws-kb-links-list">
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Setup Welcome WhatsApp Chatbot</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Create WhatsApp Button for Free</span></div>
                      <div className="ws-kb-link-item"><BookOpen size={13} color="#0d9488" /><span>Create WhatsApp Link for Free</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: SIDEBAR WIDGETS & CREDITS
          ======================================================== */}
          <div className="ws-col-right">
            {/* WIDGET 1: SCAN TO DOWNLOAD THE MOBILE APP */}
            <div className="ws-widget-card">
              <h4 className="ws-app-download-title">Scan to download the Mobile app</h4>

              <div className="ws-app-qr-row">
                <img
                  src="/dashboard/qr-with-logo.svg"
                  alt="AiSensy Mobile App QR Code"
                  className="ws-app-qr-img"
                />
                <img
                  src="/dashboard/app_stores.svg"
                  alt="Google Play and App Store"
                  className="ws-app-stores-img"
                />
              </div>

              <div className="ws-key-features-divider">
                <span>Key Features</span>
              </div>

              <div className="ws-features-2x2">
                <div><span className="ws-feature-dot">•</span> Real-time notifications</div>
                <div><span className="ws-feature-dot">•</span> Live Chat</div>
                <div><span className="ws-feature-dot">•</span> Ads Management</div>
                <div><span className="ws-feature-dot">•</span> Analytics Dashboard</div>
              </div>
            </div>

            {/* WIDGET 2: ACCOUNT PROFILE CARD */}
            <div className="ws-widget-card">
              <div className="ws-profile-top-row">
                <div>
                  <h4 className="ws-profile-name">Bps Ventures</h4>
                  <div className="ws-profile-tag">EDU</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button
                    type="button"
                    style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    title="Edit Details"
                  >
                    <Pencil size={13} />
                  </button>
                  <img
                    src="/dashboard/bps_profile.png"
                    alt="Bps Ventures Logo"
                    className="ws-profile-avatar-img"
                  />
                </div>
              </div>

              <div className="ws-profile-phone">+919530462857</div>

              <div
                className="ws-profile-link-row"
                onClick={() => handleCopy('https://wa.aisensy.com/+919530462857', 'phone')}
                title="Click to copy link"
              >
                <span>wa.aisensy.com/+919530462857</span>
                <span style={{ fontSize: 11, color: copiedPhoneLink ? '#0d4838' : '#6b7280', display: 'inline-flex', alignItems: 'center' }}>
                  <Copy size={13} />
                </span>
              </div>

              <button
                type="button"
                className="ws-view-profile-btn"
                onClick={() => alert('Profile Details:\nBusiness Name: Bps Ventures\nCategory: Education\nAPI Status: LIVE\nTier: 2,000 Messages/Day')}
              >
                <span>View Profile</span>
                <ChevronDown size={14} />
              </button>
            </div>

            {/* WIDGET 3: ADVERTISEMENT CREDITS */}
            <div className="ws-widget-card">
              <div className="ws-credit-header-row">
                <span>Advertisement Credits</span>
              </div>
              <div className="ws-credit-amount-row">
                <span className="ws-credit-val">₹ 0.00</span>
                <button
                  type="button"
                  className="btn-buy-ad-credits"
                  onClick={() => alert('Buy Advertisement Credits Portal')}
                >
                  Buy Advertisement Credits
                </button>
              </div>
            </div>

            {/* WIDGET 4: FREE SERVICE MESSAGES */}
            <div className="ws-widget-card">
              <div className="ws-credit-header-row">
                <span>Free Service Messages</span>
              </div>

              <div className="ws-fsm-range">
                <span>0</span>
                <span>1,000</span>
              </div>

              <div className="ws-fsm-bar-bg">
                <div className="ws-fsm-bar-fill" style={{ width: '0%' }}></div>
              </div>
            </div>

            {/* WIDGET 5: WHATSAPP CONVERSATION CREDITS (WCC) */}
            <div className="ws-widget-card">
              <div className="ws-credit-header-row">
                <span>WhatsApp Conversation Credits (WCC)</span>
              </div>
              <div className="ws-credit-amount-row">
                <span className="ws-credit-val">₹ 50.00</span>
                <button
                  type="button"
                  className="btn-buy-wcc"
                  onClick={() => alert('Recharge WCC Credits: Instant UPI / Card recharge.')}
                >
                  Buy more WCC
                </button>
              </div>
            </div>

            {/* WIDGET 6: CURRENT PLAN */}
            <div className="ws-widget-card">
              <div className="ws-plan-label">Current Plan</div>
              <div className="ws-plan-title-bold">FREE FOREVER</div>
              <p className="ws-plan-no-active">You don't have any active plan</p>
              <button
                type="button"
                className="btn-get-plan"
                onClick={() => alert('Upgrade to AiSensy Pro Unlimited Plan.')}
              >
                Get a Plan
              </button>
            </div>

            {/* WIDGET 7: CUSTOMIZE WHATSAPP LINK */}
            <div
              className="ws-widget-card ws-share-tool-card"
              onClick={() => alert('WhatsApp Link Generator Tool')}
            >
              <div>
                <h4 className="ws-share-tool-title">Customize WhatsApp Link</h4>
                <p className="ws-share-tool-sub">Create shareable links &amp; QR for your WA business number</p>
              </div>
              <img
                src="/dashboard/whatsappLinkGenerator.png"
                alt="Link Generator"
                className="ws-share-tool-img"
              />
            </div>

            {/* WIDGET 8: WHATSAPP WEBSITE BUTTON */}
            <div
              className="ws-widget-card ws-share-tool-card"
              onClick={() => alert('WhatsApp Website Widget Tool')}
            >
              <div>
                <h4 className="ws-share-tool-title">WhatsApp Website Button</h4>
                <p className="ws-share-tool-sub">Drive WhatsApp sales with personalised CTAs</p>
              </div>
              <img
                src="/dashboard/whatsappWebsiteWidget.png"
                alt="Website Widget"
                className="ws-share-tool-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP CHAT BUTTON */}
      <button
        type="button"
        className="ws-floating-chat-bubble"
        title="Chat with Support on WhatsApp"
        onClick={() => window.open('https://api.whatsapp.com/send?phone=919530462857', '_blank')}
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
};
