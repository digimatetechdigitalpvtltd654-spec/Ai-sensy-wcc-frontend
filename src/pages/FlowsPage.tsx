import React, { useState } from 'react';
import {
  Workflow,
  Plus,
  Play,
  Pause,
  Bot,
  Zap,
  CheckCircle2,
  GitBranch,
  Settings,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/subpages.css';

interface FlowsPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface ChatbotFlow {
  id: string;
  name: string;
  trigger: string;
  runs: number;
  steps: number;
  resolved: string;
  status: 'Active' | 'Paused';
}

export const FlowsPage: React.FC<FlowsPageProps> = ({ onNavigate }) => {
  const [flows, setFlows] = useState<ChatbotFlow[]>([
    {
      id: 'fl-1',
      name: 'AI Lead Qualification & Meeting Booking',
      trigger: 'When lead clicks Click-to-WA Ad',
      runs: 14200,
      steps: 6,
      resolved: '94.2%',
      status: 'Active',
    },
    {
      id: 'fl-2',
      name: 'Shopify Cart Abandonment Recovery (10% OFF)',
      trigger: 'Shopify webhook: Checkouts/create',
      runs: 8940,
      steps: 4,
      resolved: '88.5%',
      status: 'Active',
    },
    {
      id: 'fl-3',
      name: '24/7 AI FAQ & Customer Support Resolver',
      trigger: 'Any incoming message matching FAQs',
      runs: 12180,
      steps: 8,
      resolved: '96.1%',
      status: 'Active',
    },
    {
      id: 'fl-4',
      name: 'Order Tracking & Delivery Live Status',
      trigger: 'Customer sends keyword "TRACK" or "ORDER"',
      runs: 9810,
      steps: 5,
      resolved: '98.0%',
      status: 'Active',
    },
    {
      id: 'fl-5',
      name: 'Diwali Festive Discount Spin-the-Wheel',
      trigger: 'Keyword "DIWALI" or QR Code Scan',
      runs: 3500,
      steps: 5,
      resolved: '91.0%',
      status: 'Paused',
    },
  ]);

  const toggleFlowStatus = (id: string) => {
    setFlows(
      flows.map((f) =>
        f.id === id ? { ...f, status: f.status === 'Active' ? 'Paused' : 'Active' } : f
      )
    );
  };

  return (
    <div className="subpage-layout">
      {/* Authentic Pine Green Sidebar with Flows Active */}
      <Sidebar activeRoute="flows" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="subpage-main">
        {/* Top Header */}
        <header className="subpage-header">
          <div className="subpage-header-left">
            <h1 className="subpage-page-title">
              <span>Chatbot & Automation Flows</span>
              <span className="subpage-project-badge">AiSensy Flow Builder</span>
            </h1>
          </div>

          <div className="subpage-header-right">
            <button
              type="button"
              className="btn-subpage-primary"
              onClick={() => alert('Opening visual Drag-and-Drop Flow Builder canvas...')}
            >
              <Plus size={15} />
              <span>Create New Flow</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="subpage-content">
          {/* Summary Metric Cards */}
          <div className="subpage-metrics-grid">
            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Active Bots</span>
                <span className="subpage-metric-value">4 Running</span>
                <span className="subpage-metric-subtext">Automating customer queries</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#ecfdf5' }}>
                <Bot size={20} color="#059669" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Automated Chats</span>
                <span className="subpage-metric-value">38,920</span>
                <span className="subpage-metric-subtext">Handled without human agent</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#e6f4f1' }}>
                <Zap size={20} color="#064e43" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Bot Resolution Rate</span>
                <span className="subpage-metric-value">91.6%</span>
                <span className="subpage-metric-subtext">Issues resolved by AI flow</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#eff6ff' }}>
                <CheckCircle2 size={20} color="#2563eb" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Human Agent Handoff</span>
                <span className="subpage-metric-value">8.4%</span>
                <span className="subpage-metric-subtext">Escalated to live chat</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#fffbeb' }}>
                <GitBranch size={20} color="#d97706" />
              </div>
            </div>
          </div>

          {/* Flows Grid */}
          <div className="subpage-cards-grid">
            {flows.map((flow) => (
              <div key={flow.id} className="subpage-item-card">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: flow.status === 'Active' ? '#e6f4f1' : '#f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Workflow
                        size={18}
                        color={flow.status === 'Active' ? '#064e43' : '#64748b'}
                      />
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#0f172a' }}>
                        {flow.name}
                      </h3>
                      <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
                        Trigger: {flow.trigger}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleFlowStatus(flow.id)}
                    style={{
                      background: flow.status === 'Active' ? '#ecfdf5' : '#f1f5f9',
                      color: flow.status === 'Active' ? '#059669' : '#64748b',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {flow.status === 'Active' ? '● Active' : '○ Paused'}
                  </button>
                </div>

                <div
                  style={{
                    background: '#f8fafc',
                    borderRadius: 8,
                    padding: '10px 14px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 8,
                    fontSize: 12,
                    textAlign: 'center',
                  }}
                >
                  <div>
                    <div style={{ color: '#64748b', fontSize: 11 }}>Total Runs</div>
                    <strong style={{ color: '#0f172a' }}>{flow.runs.toLocaleString()}</strong>
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: 11 }}>Nodes</div>
                    <strong style={{ color: '#064e43' }}>{flow.steps} steps</strong>
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: 11 }}>Resolved</div>
                    <strong style={{ color: '#2563eb' }}>{flow.resolved}</strong>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                    borderTop: '1px solid #f1f5f9',
                  }}
                >
                  <span style={{ fontSize: 12, color: '#64748b' }}>AI Flow Builder</span>
                  <button
                    type="button"
                    className="btn-subpage-primary"
                    style={{ padding: '5px 12px', fontSize: 12 }}
                    onClick={() => alert(`Launching visual Flow Builder canvas for ${flow.name}...`)}
                  >
                    <span>Edit Flow</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
