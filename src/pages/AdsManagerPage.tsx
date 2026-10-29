import React, { useState } from 'react';
import {
  Megaphone,
  Plus,
  ExternalLink,
  DollarSign,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  BarChart2,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/subpages.css';

interface AdsManagerPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface AdCampaign {
  id: string;
  name: string;
  platform: string;
  budget: string;
  leads: number;
  cpl: string;
  roas: string;
  active: boolean;
}

export const AdsManagerPage: React.FC<AdsManagerPageProps> = ({ onNavigate }) => {
  const [ads, setAds] = useState<AdCampaign[]>([
    {
      id: 'ad-1',
      name: 'Diwali Mega Sale - IG Reels Video Ad',
      platform: 'Instagram Reels & Stories',
      budget: '₹ 2,500 / day',
      leads: 1420,
      cpl: '₹ 15.20',
      roas: '4.8x',
      active: true,
    },
    {
      id: 'ad-2',
      name: 'Free Consultation Booking - FB Carousel',
      platform: 'Facebook Feed & Marketplace',
      budget: '₹ 1,500 / day',
      leads: 890,
      cpl: '₹ 18.50',
      roas: '3.9x',
      active: true,
    },
    {
      id: 'ad-3',
      name: 'High Intent Retargeting - Click to WA',
      platform: 'FB & IG Dual Placement',
      budget: '₹ 2,000 / day',
      leads: 740,
      cpl: '₹ 16.40',
      roas: '5.2x',
      active: true,
    },
    {
      id: 'ad-4',
      name: 'Exclusive Festive Cashback Blast',
      platform: 'Instagram Feed Post',
      budget: '₹ 1,000 / day',
      leads: 370,
      cpl: '₹ 21.10',
      roas: '3.1x',
      active: false,
    },
  ]);

  const toggleAdActive = (id: string) => {
    setAds(
      ads.map((a) => (a.id === id ? { ...a, active: !a.active } : a))
    );
  };

  return (
    <div className="subpage-layout">
      {/* Authentic Pine Green Sidebar with Ads Manager Active */}
      <Sidebar activeRoute="adsManager" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="subpage-main">
        {/* Top Header */}
        <header className="subpage-header">
          <div className="subpage-header-left">
            <h1 className="subpage-page-title">
              <span>Click to WhatsApp Ads Manager</span>
              <span className="subpage-project-badge">Meta Verified Partner</span>
            </h1>
          </div>

          <div className="subpage-header-right">
            <button
              type="button"
              className="btn-subpage-primary"
              onClick={() => alert('Launching Meta Ad Campaign Builder for WhatsApp...')}
            >
              <Plus size={15} />
              <span>Create Ad Campaign</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="subpage-content">
          {/* Meta Account Connection Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, #064e43 0%, #0c7a68 100%)',
              color: '#ffffff',
              borderRadius: 14,
              padding: '18px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 14px rgba(6, 78, 67, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'rgba(255, 255, 255, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Megaphone size={22} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>
                  Connected Meta Ad Account: Bps Ventures Official (#982401)
                </div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>
                  Directly route high-intent leads into AiSensy WhatsApp chats with 5x higher conversion.
                </div>
              </div>
            </div>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: '#ffffff',
                color: '#064e43',
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              <CheckCircle2 size={14} color="#00c067" />
              <span>Sync Active</span>
            </span>
          </div>

          {/* Summary Metric Cards */}
          <div className="subpage-metrics-grid">
            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Total Ad Spend</span>
                <span className="subpage-metric-value">₹ 58,400</span>
                <span className="subpage-metric-subtext">Across FB & IG campaigns</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#ecfdf5' }}>
                <DollarSign size={20} color="#059669" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">WA Leads Started</span>
                <span className="subpage-metric-value">3,420</span>
                <span className="subpage-metric-subtext">Incoming chats generated</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#e6f4f1' }}>
                <Users size={20} color="#064e43" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Cost per Lead (CPL)</span>
                <span className="subpage-metric-value">₹ 17.07</span>
                <span className="subpage-metric-subtext">34% lower than standard</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#eff6ff' }}>
                <TrendingUp size={20} color="#2563eb" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Avg. ROAS</span>
                <span className="subpage-metric-value">4.2x</span>
                <span className="subpage-metric-subtext">Return on ad spend</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#fffbeb' }}>
                <Sparkles size={20} color="#d97706" />
              </div>
            </div>
          </div>

          {/* Ad Campaigns Table */}
          <div className="subpage-table-card">
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0', fontWeight: 700, fontSize: 14 }}>
              Active Click to WhatsApp Campaigns
            </div>
            <table className="subpage-table">
              <thead>
                <tr>
                  <th>Campaign Name</th>
                  <th>Placements</th>
                  <th>Daily Budget</th>
                  <th>WA Leads</th>
                  <th>Avg CPL</th>
                  <th>ROAS</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ads.map((ad) => (
                  <tr key={ad.id}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{ad.name}</div>
                    </td>
                    <td>
                      <span className="status-pill neutral">{ad.platform}</span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 600, color: '#0f172a' }}>{ad.budget}</span>
                    </td>
                    <td>
                      <strong style={{ color: '#00c067' }}>{ad.leads.toLocaleString()}</strong>
                    </td>
                    <td>
                      <span>{ad.cpl}</span>
                    </td>
                    <td>
                      <span style={{ fontWeight: 700, color: '#2563eb' }}>{ad.roas}</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => toggleAdActive(ad.id)}
                        style={{
                          background: ad.active ? '#ecfdf5' : '#f1f5f9',
                          color: ad.active ? '#059669' : '#64748b',
                          border: 'none',
                          padding: '4px 12px',
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        {ad.active ? '● Active' : '○ Paused'}
                      </button>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        type="button"
                        className="btn-subpage-secondary"
                        style={{ padding: '4px 10px', fontSize: 12 }}
                        onClick={() => alert(`Opening Meta Ads Manager for ${ad.name}...`)}
                      >
                        <ExternalLink size={12} />
                        <span>Manage</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
