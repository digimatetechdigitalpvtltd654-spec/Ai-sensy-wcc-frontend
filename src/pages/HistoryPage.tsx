import React, { useState } from 'react';
import {
  Search,
  Download,
  CheckCircle2,
  CheckCheck,
  AlertCircle,
  Eye,
  X,
  Send,
  MessageSquare,
  Wallet,
  Calendar,
  CreditCard,
  RotateCw,
  FileText,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/subpages.css';

interface HistoryPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface RechargeHistoryItem {
  id: string;
  txnId: string;
  date: string;
  title: string;
  amount: number;
  method: string;
  status: 'Successful' | 'Failed' | 'Maintained';
  closingBalance: number;
}

interface MessageLog {
  id: string;
  phone: string;
  template: string;
  type: 'Broadcast' | 'API Trigger' | 'Flow Bot';
  cost: string;
  status: 'Read' | 'Delivered' | 'Failed';
  time: string;
  body: string;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'recharges' | 'all' | 'broadcast' | 'api' | 'flow'>('recharges');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Read' | 'Delivered' | 'Failed'>('all');
  const [previewMsg, setPreviewMsg] = useState<MessageLog | null>(null);

  // Exact Detailed Ledger: 29 Sep (3540 balance, 3000 credit), 6 Oct (3540 balance, nothing),
  // 7 Oct (1500 recharge, 1500 credit), 15 Oct (3540 balance, 3000 credit), 19 Oct (3540 balance, 1500 credit, 1500 recharge),
  // 23 Oct (4720 balance, 4000 credit), 25 Oct (4720 balance, 1500 recharge, 2500 failed then received)
  // Exact Detailed Ledger:
  // 29 Sep: balance 3540, credit 3000 received from random
  // 6 Oct: balance 3540, nothing happen
  // 7 Oct: 1500 recharge & 1500 credit received from random, balance 3540
  // 15 Oct: balance 3540, credit 3000 received from random
  // 19 Oct: balance 3540, credit 1500 received & 1500 recharge
  // 23 Oct: balance 4720, credit 4000 received from random
  // 25 Oct: balance 4720, 1500 recharge, 2500 received failed and after again received
  const rechargeHistory: RechargeHistoryItem[] = [
    {
      id: 'rc-2',
      txnId: 'TXN-WCC-982428',
      date: '25 Oct 2026',
      title: 'Credit Received',
      amount: 2322.24,
      method: 'Razorpay',
      status: 'Successful',
      closingBalance: 4720,
    },
    {
      id: 'rc-3',
      txnId: 'TXN-WCC-982427',
      date: '25 Oct 2026',
      title: 'Credit Received',
      amount: 2500,
      method: 'From Sanjay enterprises',
      status: 'Failed',
      closingBalance: 4720,
    },
    {
      id: 'rc-1',
      txnId: 'TXN-WCC-982429',
      date: '25 Oct 2026',
      title: 'WCC Wallet Recharge',
      amount: 1500,
      method: 'Razorpay',
      status: 'Successful',
      closingBalance: 4720,
    },
    {
      id: 'rc-4',
      txnId: 'TXN-WCC-982423',
      date: '23 Oct 2026',
      title: 'Credit Received',
      amount: 4000,
      method: 'From For Play',
      status: 'Successful',
      closingBalance: 4720,
    },
    {
      id: 'rc-5',
      txnId: 'TXN-WCC-982420',
      date: '19 Oct 2026',
      title: 'WCC Wallet Recharge',
      amount: 1500,
      method: 'Razorpay',
      status: 'Successful',
      closingBalance: 3540,
    },
    {
      id: 'rc-6',
      txnId: 'TXN-WCC-982419',
      date: '19 Oct 2026',
      title: 'Credit Received',
      amount: 1500,
      method: 'From Dezoryn tech',
      status: 'Successful',
      closingBalance: 3540,
    },
    {
      id: 'rc-7',
      txnId: 'TXN-WCC-982415',
      date: '15 Oct 2026',
      title: 'Credit Received',
      amount: 3000,
      method: 'From Sanjay enterprises',
      status: 'Successful',
      closingBalance: 3540,
    },
    {
      id: 'rc-8',
      txnId: 'TXN-WCC-982409',
      date: '07 Oct 2026',
      title: 'WCC Wallet Recharge',
      amount: 1500,
      method: 'Razorpay',
      status: 'Successful',
      closingBalance: 3540,
    },
    {
      id: 'rc-9',
      txnId: 'TXN-WCC-982408',
      date: '07 Oct 2026',
      title: 'Credit Received',
      amount: 1500,
      method: 'From Digi Mate tech digital',
      status: 'Successful',
      closingBalance: 3540,
    },
    {
      id: 'rc-10',
      txnId: 'TXN-WCC-982406',
      date: '06 Oct 2026',
      title: 'Balance Maintained (Nothing happen)',
      amount: 0,
      method: 'System Ledger',
      status: 'Maintained',
      closingBalance: 3540,
    },
    {
      id: 'rc-11',
      txnId: 'TXN-WCC-982329',
      date: '29 Sep 2026',
      title: 'Credit Received',
      amount: 3000,
      method: 'From Rupesh tech.',
      status: 'Successful',
      closingBalance: 3540,
    },
  ];

  const logs: MessageLog[] = [
    {
      id: 'msg-01',
      phone: '+91 98234 56789',
      template: 'diwali_mega_discount_v2',
      type: 'Broadcast',
      cost: '₹ 0.72',
      status: 'Read',
      time: '25 Oct 2026, 06:15 PM',
      body: '🎆 Diwali Exclusive: Flat 50% OFF on all premium collections! Use coupon DIWALI50. Tap below to shop now.',
    },
    {
      id: 'msg-02',
      phone: '+91 97112 34567',
      template: 'order_dispatched_tracking',
      type: 'API Trigger',
      cost: '₹ 0.85',
      status: 'Delivered',
      time: '23 Oct 2026, 01:30 PM',
      body: '📦 Order #ORD-84912 has been dispatched via BlueDart! Tracking ID: BD982401. Expected arrival: Tomorrow.',
    },
    {
      id: 'msg-03',
      phone: '+91 95443 89012',
      template: 'abandoned_cart_recovery',
      type: 'Flow Bot',
      cost: '₹ 0.68',
      status: 'Read',
      time: '19 Oct 2026, 03:20 PM',
      body: '🛒 Hey Rahul, you left something in your bag! Complete your checkout in 15 mins for free express shipping.',
    },
    {
      id: 'msg-04',
      phone: '+91 91234 56780',
      template: 'otp_verification_secure',
      type: 'API Trigger',
      cost: '₹ 0.40',
      status: 'Read',
      time: '15 Oct 2026, 02:05 PM',
      body: '🔐 Your AiSensy verification OTP is 482910. Valid for 10 minutes. Do not share this OTP with anyone.',
    },
    {
      id: 'msg-05',
      phone: '+91 98333 44556',
      template: 'lead_followup_brochure',
      type: 'Broadcast',
      cost: '₹ 0.72',
      status: 'Delivered',
      time: '06 Oct 2026, 11:50 AM',
      body: 'Hi Priyanshi, thank you for checking out our catalog. Would you like to schedule a quick 10-min demo?',
    },
    {
      id: 'msg-06',
      phone: '+91 93456 78901',
      template: 'festive_cashback_alert',
      type: 'Broadcast',
      cost: '₹ 0.72',
      status: 'Read',
      time: '29 Sep 2026, 04:45 PM',
      body: '🎉 ₹200 Cashback credited to your Bps wallet! Valid on orders above ₹999 till this Sunday.',
    },
  ];

  const filteredLogs = logs.filter((l) => {
    const matchesSearch =
      l.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.template.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || l.status === statusFilter;
    const matchesTab =
      activeTab === 'all'
        ? true
        : activeTab === 'broadcast'
          ? l.type === 'Broadcast'
          : activeTab === 'api'
            ? l.type === 'API Trigger'
            : l.type === 'Flow Bot';
    return matchesSearch && matchesStatus && matchesTab;
  });

  const filteredRecharges = rechargeHistory.filter((r) => {
    const q = searchQuery.toLowerCase();
    return (
      r.txnId.toLowerCase().includes(q) ||
      r.date.toLowerCase().includes(q) ||
      r.method.toLowerCase().includes(q) ||
      r.title.toLowerCase().includes(q) ||
      r.closingBalance.toString().includes(q) ||
      r.amount.toString().includes(q)
    );
  });

  return (
    <div className="subpage-layout">
      {/* Authentic Pine Green Sidebar with History Active */}
      <Sidebar activeRoute="history" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="subpage-main">
        {/* Top Header */}
        <header className="subpage-header">
          <div className="subpage-header-left">
            <h1 className="subpage-page-title">
              <span>History &amp; Ledger</span>
              <span className="subpage-project-badge">Digi mate vendor panel</span>
            </h1>
          </div>

          <div className="subpage-header-right">
            {/* <button
              type="button"
              className="btn-subpage-secondary"
              onClick={() => alert('Exporting full transaction & message ledger (CSV)...')}
            >
              <Download size={14} />
              <span>Export CSV</span>
            </button> */}
            <button
              type="button"
              className="btn-subpage-primary"
              onClick={() => onNavigate('dashboard')}
            >
              <Wallet size={14} />
              <span>WCC Dashboard</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="subpage-content">
          {/* Summary Metric Cards */}
          <div className="subpage-metrics-grid">
            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">TOTAL WCC RECHARGES</span>
                <span className="subpage-metric-value">₹ 20,000</span>
                <span className="subpage-metric-subtext">10 Successful Transactions</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#e6f4f1' }}>
                <Wallet size={20} color="#064e43" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">LAST RECHARGE</span>
                <span className="subpage-metric-value">₹  2,322.24</span>
                <span className="subpage-metric-subtext">Credited on 25 Oct 2026</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#ecfdf5' }}>
                <CheckCircle2 size={20} color="#059669" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">DELIVERED RATE</span>
                <span className="subpage-metric-value">98.4%</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#eff6ff' }}>
                <CheckCheck size={20} color="#2563eb" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">READ RATE</span>
                <span className="subpage-metric-value">74.2%</span>

              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#fffbeb' }}>
                <MessageSquare size={20} color="#d97706" />
              </div>
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="subpage-toolbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="subpage-search-wrap">
                <Search size={15} className="subpage-search-icon" />
                <input
                  type="text"
                  placeholder="Search txn ID or date..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="subpage-search-input"
                />
              </div>

              {activeTab !== 'recharges' && (
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: '1px solid #cbd5e1',
                    fontSize: 13,
                    outline: 'none',
                    background: '#ffffff',
                  }}
                >
                  <option value="all">All Statuses</option>
                  <option value="Read">Read (Blue)</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Failed">Failed</option>
                </select>
              )}
            </div>
          </div>

          {/* VIEW 1: RECHARGE HISTORY TABLE */}
          {activeTab === 'recharges' && (
            <div className="subpage-table-card">
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#0f172a' }}>
                  WCC Recharge History
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 13, color: '#059669', fontWeight: 700 }}>
                    Total Credited: ₹ 20,000.00
                  </span>
                  <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>
                    Current Balance: <strong style={{ color: '#0f172a' }}>₹ 4,720.00</strong>
                  </span>
                </div>
              </div>

              <table className="subpage-table">
                <thead>
                  <tr>
                    <th>Date &amp; Time</th>
                    <th>Transaction ID</th>
                    <th>Recharge Amount</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                    {/* <th>Wallet Balance</th> */}
                  </tr>
                </thead>
                <tbody>
                  {filteredRecharges.map((rc) => (
                    <tr key={rc.id} style={{ background: rc.status === 'Failed' ? '#fff5f5' : 'transparent' }}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Calendar size={14} color={rc.status === 'Failed' ? '#dc2626' : '#064e43'} />
                          <span style={{ fontWeight: 600, color: '#0f172a' }}>{rc.date}</span>
                        </div>
                      </td>
                      <td>
                        <code style={{ background: '#f1f5f9', padding: '2px 7px', borderRadius: 4, fontSize: 12, fontWeight: 600, color: '#334155' }}>
                          {rc.txnId}
                        </code>
                      </td>
                      <td>
                        {rc.status === 'Failed' ? (
                          <div>
                            <span style={{ color: '#dc2626', fontWeight: 700, fontSize: 13.5 }}>
                              ₹ {rc.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </span>
                            <div style={{ fontSize: 11, color: '#dc2626', fontWeight: 500 }}>
                              Credit Received Failed
                            </div>
                          </div>
                        ) : rc.amount === 0 ? (
                          <div>
                            <span style={{ color: '#64748b', fontWeight: 600, fontSize: 13.5 }}>
                              ₹ 0.00
                            </span>
                            <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>
                              Nothing happen (Maintained)
                            </div>
                          </div>
                        ) : (
                          <div>
                            <strong style={{ color: '#059669', fontSize: 13.5 }}>
                              + ₹ {rc.amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </strong>
                            <div style={{ fontSize: 11, color: rc.title.includes('Recharge') ? '#64748b' : '#0284c7', fontWeight: 500 }}>
                              {rc.title}
                            </div>
                          </div>
                        )}
                      </td>
                      <td>
                        <span className="status-pill neutral">{rc.method}</span>
                      </td>
                      <td>
                        {rc.status === 'Successful' && (
                          <span className="status-pill success">
                            <CheckCircle2 size={12} />
                            <span>Successful</span>
                          </span>
                        )}
                        {rc.status === 'Failed' && (
                          <span className="status-pill danger" style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }}>
                            <AlertCircle size={12} />
                            <span>Failed</span>
                          </span>
                        )}
                        {rc.status === 'Maintained' && (
                          <span className="status-pill neutral">
                            <CheckCircle2 size={12} />
                            <span>Maintained</span>
                          </span>
                        )}
                      </td>
                      {/* <td>
                        <span style={{ fontWeight: 700, color: '#0f172a', fontSize: 13.5 }}>
                          ₹ {rc.closingBalance.toLocaleString('en-IN')}
                        </span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* VIEW 2: MESSAGE LOGS TABLE */}
          {activeTab !== 'recharges' && (
            <div className="subpage-table-card">
              <table className="subpage-table">
                <thead>
                  <tr>
                    <th>Recipient Phone</th>
                    <th>Template Name</th>
                    <th>Type</th>
                    <th>Cost (WCC)</th>
                    <th>Status</th>
                    <th>Timestamp</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLogs.map((log) => (
                    <tr key={log.id}>
                      <td>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{log.phone}</div>
                      </td>
                      <td>
                        <code
                          style={{
                            background: '#f1f5f9',
                            padding: '2px 6px',
                            borderRadius: 4,
                            fontSize: 12,
                            color: '#0f172a',
                          }}
                        >
                          {log.template}
                        </code>
                      </td>
                      <td>
                        <span className="status-pill neutral">{log.type}</span>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: '#064e43' }}>{log.cost}</span>
                      </td>
                      <td>
                        {log.status === 'Read' && (
                          <span className="status-pill info">
                            <CheckCheck size={12} />
                            <span>Read</span>
                          </span>
                        )}
                        {log.status === 'Delivered' && (
                          <span className="status-pill success">
                            <CheckCircle2 size={12} />
                            <span>Delivered</span>
                          </span>
                        )}
                        {log.status === 'Failed' && (
                          <span className="status-pill danger">
                            <AlertCircle size={12} />
                            <span>Failed</span>
                          </span>
                        )}
                      </td>
                      <td>
                        <span style={{ fontSize: 12, color: '#64748b' }}>{log.time}</span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          type="button"
                          className="btn-subpage-secondary"
                          style={{ padding: '4px 10px', fontSize: 12 }}
                          onClick={() => setPreviewMsg(log)}
                        >
                          <Eye size={13} />
                          <span>Preview</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* WhatsApp Message Preview Modal */}
      {previewMsg && (
        <div className="subpage-modal-overlay" onClick={() => setPreviewMsg(null)}>
          <div className="subpage-modal" onClick={(e) => e.stopPropagation()}>
            <div className="subpage-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <MessageSquare size={18} color="#00c067" />
                <h3 className="subpage-modal-title">WhatsApp Message Preview</h3>
              </div>
              <button
                type="button"
                onClick={() => setPreviewMsg(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="subpage-modal-body">
              <div
                style={{
                  background: '#e5ddd5',
                  borderRadius: 12,
                  padding: 16,
                  backgroundImage:
                    'radial-gradient(#d4ccc3 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              >
                <div
                  style={{
                    background: '#ffffff',
                    borderRadius: '8px 8px 8px 0',
                    padding: '12px 14px',
                    maxWidth: 340,
                    boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                    position: 'relative',
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#00a884', marginBottom: 4 }}>
                    AiSensy Notification
                  </div>
                  <div style={{ fontSize: 13, color: '#111827', lineHeight: 1.5 }}>
                    {previewMsg.body}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: 4,
                      marginTop: 6,
                      fontSize: 10,
                      color: '#667781',
                    }}
                  >
                    <span>{previewMsg.time.split(',')[1] || 'Just now'}</span>
                    <CheckCheck size={14} color="#53bdeb" />
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 12,
                  fontSize: 12,
                }}
              >
                <div>
                  <span style={{ color: '#64748b' }}>Recipient:</span>
                  <div style={{ fontWeight: 600 }}>{previewMsg.phone}</div>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Template:</span>
                  <div style={{ fontWeight: 600 }}>{previewMsg.template}</div>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Debit (WCC):</span>
                  <div style={{ fontWeight: 600, color: '#064e43' }}>{previewMsg.cost}</div>
                </div>
                <div>
                  <span style={{ color: '#64748b' }}>Delivery Status:</span>
                  <div style={{ fontWeight: 600, color: '#059669' }}>{previewMsg.status}</div>
                </div>
              </div>
            </div>

            <div className="subpage-modal-footer">
              <button
                type="button"
                className="btn-subpage-secondary"
                onClick={() => setPreviewMsg(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
