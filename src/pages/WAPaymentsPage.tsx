import React, { useState } from 'react';
import {
  IndianRupee,
  Plus,
  CreditCard,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Download,
  X,
  ShieldCheck,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/subpages.css';

interface WAPaymentsPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface PaymentOrder {
  id: string;
  orderId: string;
  customer: string;
  phone: string;
  amount: string;
  method: string;
  status: 'Success' | 'Pending' | 'Failed';
  time: string;
}

export const WAPaymentsPage: React.FC<WAPaymentsPageProps> = ({ onNavigate }) => {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkAmount, setLinkAmount] = useState('');
  const [linkCustomer, setLinkCustomer] = useState('');
  const [linkPhone, setLinkPhone] = useState('');

  const [orders, setOrders] = useState<PaymentOrder[]>([
    {
      id: 'po-1',
      orderId: '#WA-ORD-98241',
      customer: 'Aarav Sharma',
      phone: '+91 98765 43210',
      amount: '₹ 2,499.00',
      method: 'UPI (Google Pay)',
      status: 'Success',
      time: 'Today, 2:15 PM',
    },
    {
      id: 'po-2',
      orderId: '#WA-ORD-98240',
      customer: 'Priyanka Patel',
      phone: '+91 98123 45678',
      amount: '₹ 1,199.00',
      method: 'UPI (PhonePe)',
      status: 'Success',
      time: 'Today, 1:40 PM',
    },
    {
      id: 'po-3',
      orderId: '#WA-ORD-98239',
      customer: 'Vikram Joshi',
      phone: '+91 97654 32109',
      amount: '₹ 4,850.00',
      method: 'Credit Card',
      status: 'Success',
      time: 'Today, 11:20 AM',
    },
    {
      id: 'po-4',
      orderId: '#WA-ORD-98238',
      customer: 'Sneha Kapoor',
      phone: '+91 98321 65498',
      amount: '₹ 899.00',
      method: 'UPI (Paytm)',
      status: 'Pending',
      time: 'Today, 10:05 AM',
    },
    {
      id: 'po-5',
      orderId: '#WA-ORD-98237',
      customer: 'Rohan Mehra',
      phone: '+91 99234 56789',
      amount: '₹ 3,200.00',
      method: 'UPI (Bhim)',
      status: 'Success',
      time: 'Yesterday, 8:45 PM',
    },
  ]);

  const handleCreateLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkAmount || !linkCustomer) return;

    const newOrder: PaymentOrder = {
      id: `po-${Date.now()}`,
      orderId: `#WA-ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      customer: linkCustomer,
      phone: linkPhone || '+91 98000 00000',
      amount: `₹ ${Number(linkAmount).toLocaleString()}`,
      method: 'WhatsApp Native Pay',
      status: 'Pending',
      time: 'Just now',
    };

    setOrders([newOrder, ...orders]);
    setLinkAmount('');
    setLinkCustomer('');
    setLinkPhone('');
    setShowLinkModal(false);
  };

  return (
    <div className="subpage-layout">
      {/* Authentic Pine Green Sidebar with WA Payments Active */}
      <Sidebar activeRoute="waPay" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="subpage-main">
        {/* Top Header */}
        <header className="subpage-header">
          <div className="subpage-header-left">
            <h1 className="subpage-page-title">
              <span>WhatsApp Payments & UPI</span>
              <span className="subpage-project-badge">Native In-Chat Checkout</span>
            </h1>
          </div>

          <div className="subpage-header-right">
            <button
              type="button"
              className="btn-subpage-primary"
              onClick={() => setShowLinkModal(true)}
            >
              <Plus size={15} />
              <span>Create Payment Link</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="subpage-content">
          {/* Summary Metric Cards */}
          <div className="subpage-metrics-grid">
            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Revenue Collected</span>
                <span className="subpage-metric-value">₹ 4,82,650</span>
                <span className="subpage-metric-subtext">Direct in WhatsApp</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#ecfdf5' }}>
                <IndianRupee size={20} color="#059669" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Completed Orders</span>
                <span className="subpage-metric-value">{orders.length * 240 + 40}</span>
                <span className="subpage-metric-subtext">Verified 1-click purchases</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#e6f4f1' }}>
                <CheckCircle2 size={20} color="#064e43" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Success Rate</span>
                <span className="subpage-metric-value">97.4%</span>
                <span className="subpage-metric-subtext">Instant UPI conversion</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#eff6ff' }}>
                <ShieldCheck size={20} color="#2563eb" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Pending Settlements</span>
                <span className="subpage-metric-value">₹ 28,400</span>
                <span className="subpage-metric-subtext" style={{ color: '#d97706' }}>
                  Settling by tomorrow 10 AM
                </span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#fffbeb' }}>
                <Clock size={20} color="#d97706" />
              </div>
            </div>
          </div>

          {/* Payment Gateways Integration Status */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: '#e6f4f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CreditCard size={18} color="#064e43" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>
                  Active Payment Gateways: Razorpay UPI & Meta Pay Enabled
                </div>
                <div style={{ fontSize: 11, color: '#64748b' }}>
                  Customers can pay directly inside WhatsApp without leaving the chat.
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn-subpage-secondary"
              onClick={() => alert('Managing Payment Gateway credentials & API keys...')}
            >
              Configure Gateway
            </button>
          </div>

          {/* Recent Payment Orders Table */}
          <div className="subpage-table-card">
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0', fontWeight: 700, fontSize: 14 }}>
              Recent WhatsApp Payment Transactions
            </div>
            <table className="subpage-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Phone Number</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Timestamp</th>
                  <th style={{ textAlign: 'right' }}>Receipt</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <code style={{ background: '#f1f5f9', padding: '2px 6px', borderRadius: 4, fontWeight: 600 }}>
                        {order.orderId}
                      </code>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{order.customer}</div>
                    </td>
                    <td>
                      <span style={{ fontSize: 12, color: '#64748b' }}>{order.phone}</span>
                    </td>
                    <td>
                      <strong style={{ color: '#064e43', fontSize: 13 }}>{order.amount}</strong>
                    </td>
                    <td>
                      <span className="status-pill neutral">{order.method}</span>
                    </td>
                    <td>
                      {order.status === 'Success' && (
                        <span className="status-pill success">
                          <CheckCircle2 size={12} />
                          <span>Success</span>
                        </span>
                      )}
                      {order.status === 'Pending' && (
                        <span className="status-pill warning">
                          <Clock size={12} />
                          <span>Pending</span>
                        </span>
                      )}
                    </td>
                    <td>
                      <span style={{ fontSize: 12, color: '#64748b' }}>{order.time}</span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        type="button"
                        className="btn-subpage-secondary"
                        style={{ padding: '4px 10px', fontSize: 11 }}
                        onClick={() => alert(`Downloading payment receipt for ${order.orderId}...`)}
                      >
                        <Download size={12} />
                        <span>PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Create Payment Link Modal */}
      {showLinkModal && (
        <div className="subpage-modal-overlay" onClick={() => setShowLinkModal(false)}>
          <div className="subpage-modal" onClick={(e) => e.stopPropagation()}>
            <div className="subpage-modal-header">
              <h3 className="subpage-modal-title">Generate WhatsApp Payment Link</h3>
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateLink}>
              <div className="subpage-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 5 }}>
                    Amount (INR)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 1499"
                    value={linkAmount}
                    onChange={(e) => setLinkAmount(e.target.value)}
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
                    Customer Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={linkCustomer}
                    onChange={(e) => setLinkCustomer(e.target.value)}
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
                    Customer WhatsApp Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    value={linkPhone}
                    onChange={(e) => setLinkPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 8,
                      border: '1px solid #cbd5e1',
                      fontSize: 13,
                    }}
                  />
                </div>
              </div>

              <div className="subpage-modal-footer">
                <button
                  type="button"
                  className="btn-subpage-secondary"
                  onClick={() => setShowLinkModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-subpage-primary">
                  Send Payment Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
