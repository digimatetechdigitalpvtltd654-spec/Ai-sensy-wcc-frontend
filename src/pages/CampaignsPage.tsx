import React, { useState } from 'react';
import {
  PlaneTakeoff,
  Plus,
  Play,
  Pause,
  Copy,
  BarChart2,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  X,
  Sparkles,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/subpages.css';

interface CampaignsPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface Campaign {
  id: string;
  name: string;
  template: string;
  status: 'Live' | 'Scheduled' | 'Completed' | 'Draft';
  audienceSize: number;
  sent: number;
  delivered: number;
  readRate: number;
  spent: string;
  date: string;
}

export const CampaignsPage: React.FC<CampaignsPageProps> = ({ onNavigate }) => {
  const [filterTab, setFilterTab] = useState<'all' | 'Live' | 'Scheduled' | 'Completed'>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTemplate, setNewTemplate] = useState('diwali_festive_offer_v1');
  const [newAudience, setNewAudience] = useState('All Opted-in Contacts (23.6k)');

  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 'cmp-1',
      name: 'Diwali Flash Sale 50% OFF Blast',
      template: 'diwali_mega_discount_v2',
      status: 'Live',
      audienceSize: 18500,
      sent: 16200,
      delivered: 15950,
      readRate: 78.4,
      spent: '₹ 11,484',
      date: 'Launched 2 hrs ago',
    },
    {
      id: 'cmp-2',
      name: 'VIP Early Access Product Drop',
      template: 'vip_exclusive_preview_drop',
      status: 'Live',
      audienceSize: 3820,
      sent: 3820,
      delivered: 3790,
      readRate: 88.6,
      spent: '₹ 2,728',
      date: 'Launched Today 10:00 AM',
    },
    {
      id: 'cmp-3',
      name: 'Weekend Cart Recovery Booster',
      template: 'cart_abandoned_urgency_10',
      status: 'Scheduled',
      audienceSize: 1240,
      sent: 0,
      delivered: 0,
      readRate: 0,
      spent: '₹ 0',
      date: 'Scheduled for Tomorrow 11:30 AM',
    },
    {
      id: 'cmp-4',
      name: 'Festive Cashback Re-engagement',
      template: 'festive_cashback_alert',
      status: 'Completed',
      audienceSize: 45000,
      sent: 45000,
      delivered: 44210,
      readRate: 72.1,
      spent: '₹ 31,831',
      date: 'Completed Yesterday',
    },
    {
      id: 'cmp-5',
      name: 'New Product Catalog Launch 2026',
      template: 'new_collection_brochure_pdf',
      status: 'Completed',
      audienceSize: 22000,
      sent: 22000,
      delivered: 21650,
      readRate: 81.3,
      spent: '₹ 15,588',
      date: 'Completed 3 days ago',
    },
  ]);

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newCmp: Campaign = {
      id: `cmp-${Date.now()}`,
      name: newTitle.trim(),
      template: newTemplate,
      status: 'Live',
      audienceSize: 5200,
      sent: 5200,
      delivered: 5120,
      readRate: 74.0,
      spent: '₹ 3,686',
      date: 'Just now',
    };

    setCampaigns([newCmp, ...campaigns]);
    setNewTitle('');
    setShowCreateModal(false);
  };

  const filteredCampaigns = campaigns.filter((c) =>
    filterTab === 'all' ? true : c.status === filterTab
  );

  return (
    <div className="subpage-layout">
      {/* Authentic Pine Green Sidebar with Campaigns Active */}
      <Sidebar activeRoute="campaigns" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="subpage-main">
        {/* Top Header */}
        <header className="subpage-header">
          <div className="subpage-header-left">
            <h1 className="subpage-page-title">
              <span>Broadcast Campaigns</span>
              <span className="subpage-project-badge">Bps Ventures 6690</span>
            </h1>
          </div>

          <div className="subpage-header-right">
            <button
              type="button"
              className="btn-subpage-primary"
              onClick={() => setShowCreateModal(true)}
            >
              <Plus size={15} />
              <span>Create Campaign</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="subpage-content">
          {/* Summary Metric Cards */}
          <div className="subpage-metrics-grid">
            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Active Campaigns</span>
                <span className="subpage-metric-value">6 Live</span>
                <span className="subpage-metric-subtext">Delivering right now</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#ecfdf5' }}>
                <PlaneTakeoff size={20} color="#059669" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Total Reached</span>
                <span className="subpage-metric-value">185,420</span>
                <span className="subpage-metric-subtext">Verified WhatsApp users</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#e6f4f1' }}>
                <Users size={20} color="#064e43" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Avg. Open Rate</span>
                <span className="subpage-metric-value">81.4%</span>
                <span className="subpage-metric-subtext">Industry benchmark: 60%</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#eff6ff' }}>
                <CheckCircle2 size={20} color="#2563eb" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Click Rate (CTR)</span>
                <span className="subpage-metric-value">19.2%</span>
                <span className="subpage-metric-subtext">High conversion link clicks</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#fffbeb' }}>
                <BarChart2 size={20} color="#d97706" />
              </div>
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="subpage-toolbar">
            <div className="subpage-tabs-wrap">
              {(['all', 'Live', 'Scheduled', 'Completed'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`subpage-tab-btn ${filterTab === tab ? 'active' : ''}`}
                  onClick={() => setFilterTab(tab)}
                >
                  {tab === 'all' ? 'All Campaigns' : tab}
                </button>
              ))}
            </div>

            <span style={{ fontSize: 13, color: '#64748b' }}>
              Showing <strong>{filteredCampaigns.length}</strong> campaigns
            </span>
          </div>

          {/* Campaigns Card Grid */}
          <div className="subpage-cards-grid">
            {filteredCampaigns.map((cmp) => (
              <div key={cmp.id} className="subpage-item-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#0f172a' }}>
                      {cmp.name}
                    </h3>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 3 }}>
                      Template: <code style={{ background: '#f1f5f9', padding: '1px 5px', borderRadius: 4 }}>{cmp.template}</code>
                    </div>
                  </div>

                  {cmp.status === 'Live' && (
                    <span className="status-pill success">
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: '#059669',
                          animation: 'pulse 1.5s infinite',
                        }}
                      />
                      <span>Live</span>
                    </span>
                  )}
                  {cmp.status === 'Scheduled' && (
                    <span className="status-pill warning">
                      <Clock size={12} />
                      <span>Scheduled</span>
                    </span>
                  )}
                  {cmp.status === 'Completed' && (
                    <span className="status-pill info">
                      <CheckCircle2 size={12} />
                      <span>Completed</span>
                    </span>
                  )}
                </div>

                {/* Progress Stats */}
                <div style={{ background: '#f8fafc', borderRadius: 8, padding: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                    <span style={{ color: '#64748b' }}>Audience Size:</span>
                    <strong style={{ color: '#0f172a' }}>{cmp.audienceSize.toLocaleString()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                    <span style={{ color: '#64748b' }}>Delivered / Sent:</span>
                    <strong style={{ color: '#059669' }}>
                      {cmp.delivered.toLocaleString()} / {cmp.sent.toLocaleString()}
                    </strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <span style={{ color: '#64748b' }}>Read Rate:</span>
                    <strong style={{ color: '#2563eb' }}>{cmp.readRate}%</strong>
                  </div>

                  {/* Progress bar */}
                  <div
                    style={{
                      height: 5,
                      background: '#e2e8f0',
                      borderRadius: 999,
                      marginTop: 10,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: cmp.audienceSize > 0 ? `${(cmp.delivered / cmp.audienceSize) * 100}%` : '0%',
                        background: '#00c067',
                        borderRadius: 999,
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                    borderTop: '1px solid #f1f5f9',
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: '#64748b' }}>{cmp.date}</span>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button
                      type="button"
                      className="btn-subpage-secondary"
                      style={{ padding: '4px 10px', fontSize: 11 }}
                      onClick={() => alert(`Analytics for ${cmp.name}: Spent ${cmp.spent}`)}
                    >
                      <BarChart2 size={12} />
                      <span>Analytics</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Campaign Modal */}
      {showCreateModal && (
        <div className="subpage-modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="subpage-modal" onClick={(e) => e.stopPropagation()}>
            <div className="subpage-modal-header">
              <h3 className="subpage-modal-title">Create WhatsApp Campaign</h3>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateCampaign}>
              <div className="subpage-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 5 }}>
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Diwali Weekend Exclusive Flash Sale"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 8,
                      border: '1px solid #cbd5e1',
                      fontSize: 13,
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 5 }}>
                    Pre-Approved WhatsApp Template
                  </label>
                  <select
                    value={newTemplate}
                    onChange={(e) => setNewTemplate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 8,
                      border: '1px solid #cbd5e1',
                      fontSize: 13,
                      background: '#ffffff',
                    }}
                  >
                    <option value="diwali_mega_discount_v2">diwali_mega_discount_v2 (Marketing)</option>
                    <option value="vip_exclusive_preview_drop">vip_exclusive_preview_drop (Utility)</option>
                    <option value="cart_abandoned_urgency_10">cart_abandoned_urgency_10 (Marketing)</option>
                    <option value="festive_cashback_alert">festive_cashback_alert (Marketing)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 5 }}>
                    Target Audience Segment
                  </label>
                  <select
                    value={newAudience}
                    onChange={(e) => setNewAudience(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 8,
                      border: '1px solid #cbd5e1',
                      fontSize: 13,
                      background: '#ffffff',
                    }}
                  >
                    <option value="All Opted-in Contacts (23.6k)">All Opted-in Contacts (23,645 users)</option>
                    <option value="VIP Customers (3.8k)">VIP Customers (3,820 users)</option>
                    <option value="Diwali Shoppers (4.8k)">Diwali Shoppers (4,812 users)</option>
                  </select>
                </div>
              </div>

              <div className="subpage-modal-footer">
                <button
                  type="button"
                  className="btn-subpage-secondary"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-subpage-primary">
                  Launch Broadcast
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
