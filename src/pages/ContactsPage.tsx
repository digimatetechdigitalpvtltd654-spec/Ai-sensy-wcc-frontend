import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Upload,
  Download,
  Search,
  CheckCircle2,
  Tag,
  Phone,
  X,
  MessageCircle,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/subpages.css';

interface ContactsPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface ContactItem {
  id: string;
  name: string;
  phone: string;
  tags: string[];
  optIn: boolean;
  source: string;
  lastActive: string;
}

export const ContactsPage: React.FC<ContactsPageProps> = ({ onNavigate }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newTag, setNewTag] = useState('VIP Customers');

  const [contacts, setContacts] = useState<ContactItem[]>([
    {
      id: 'c-1',
      name: 'Aarav Sharma',
      phone: '+91 98765 43210',
      tags: ['VIP Customers', 'Diwali Shoppers'],
      optIn: true,
      source: 'Website Widget',
      lastActive: '10 mins ago',
    },
    {
      id: 'c-2',
      name: 'Priyanka Patel',
      phone: '+91 98123 45678',
      tags: ['High Value', 'Cart Abandoners'],
      optIn: true,
      source: 'Click-to-WA Ad',
      lastActive: '1 hour ago',
    },
    {
      id: 'c-3',
      name: 'Rohan Mehra',
      phone: '+91 99234 56789',
      tags: ['Diwali Shoppers'],
      optIn: true,
      source: 'CSV Import',
      lastActive: 'Yesterday',
    },
    {
      id: 'c-4',
      name: 'Ananya Roy',
      phone: '+91 91234 56780',
      tags: ['VIP Customers'],
      optIn: true,
      source: 'API Lead',
      lastActive: '2 days ago',
    },
    {
      id: 'c-5',
      name: 'Vikram Joshi',
      phone: '+91 97654 32109',
      tags: ['Website Signups'],
      optIn: true,
      source: 'Landing Page',
      lastActive: '3 days ago',
    },
    {
      id: 'c-6',
      name: 'Sneha Kapoor',
      phone: '+91 98321 65498',
      tags: ['Cart Abandoners'],
      optIn: false,
      source: 'Click-to-WA Ad',
      lastActive: '1 week ago',
    },
  ]);

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newPhone.trim()) return;

    const newContact: ContactItem = {
      id: `c-${Date.now()}`,
      name: newName.trim(),
      phone: newPhone.trim().startsWith('+') ? newPhone.trim() : `+91 ${newPhone.trim()}`,
      tags: [newTag],
      optIn: true,
      source: 'Manual Add',
      lastActive: 'Just now',
    };

    setContacts([newContact, ...contacts]);
    setNewName('');
    setNewPhone('');
    setShowAddModal(false);
  };

  const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || c.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="subpage-layout">
      {/* Authentic Pine Green Sidebar with Contacts Active */}
      <Sidebar activeRoute="contacts" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="subpage-main">
        {/* Top Header */}
        <header className="subpage-header">
          <div className="subpage-header-left">
            <h1 className="subpage-page-title">
              <span>Contacts & Audience</span>
              <span className="subpage-project-badge">Bps Ventures 6690</span>
            </h1>
          </div>

          <div className="subpage-header-right">
            <button
              type="button"
              className="btn-subpage-secondary"
              onClick={() => alert('Importing CSV contacts list...')}
            >
              <Upload size={14} />
              <span>Import CSV</span>
            </button>
            <button
              type="button"
              className="btn-subpage-primary"
              onClick={() => setShowAddModal(true)}
            >
              <UserPlus size={14} />
              <span>Add Contact</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="subpage-content">
          {/* Summary Metric Cards */}
          <div className="subpage-metrics-grid">
            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Total Contacts</span>
                <span className="subpage-metric-value">{contacts.length * 4096 + 234}</span>
                <span className="subpage-metric-subtext">↑ 1,240 new this week</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#e6f4f1' }}>
                <Users size={20} color="#064e43" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">WhatsApp Opted-In</span>
                <span className="subpage-metric-value">96.2%</span>
                <span className="subpage-metric-subtext">Active verified opt-ins</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#ecfdf5' }}>
                <CheckCircle2 size={20} color="#059669" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">VIP & High Intent</span>
                <span className="subpage-metric-value">3,820</span>
                <span className="subpage-metric-subtext">Tagged in high value</span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#fffbeb' }}>
                <Tag size={20} color="#d97706" />
              </div>
            </div>

            <div className="subpage-metric-card">
              <div className="subpage-metric-info">
                <span className="subpage-metric-label">Unsubscribed</span>
                <span className="subpage-metric-value">3.8%</span>
                <span className="subpage-metric-subtext" style={{ color: '#64748b' }}>
                  935 opted out
                </span>
              </div>
              <div className="subpage-metric-icon-wrap" style={{ background: '#f1f5f9' }}>
                <Users size={20} color="#64748b" />
              </div>
            </div>
          </div>

          {/* Filter Toolbar */}
          <div className="subpage-toolbar">
            <div className="subpage-tabs-wrap">
              {['All', 'VIP Customers', 'Diwali Shoppers', 'Cart Abandoners', 'Website Signups'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`subpage-tab-btn ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="subpage-search-wrap">
              <Search size={15} className="subpage-search-icon" />
              <input
                type="text"
                placeholder="Search contact by name or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="subpage-search-input"
              />
            </div>
          </div>

          {/* Contacts Table */}
          <div className="subpage-table-card">
            <table className="subpage-table">
              <thead>
                <tr>
                  <th>Contact</th>
                  <th>Phone Number</th>
                  <th>Tags</th>
                  <th>Opt-In Status</th>
                  <th>Source</th>
                  <th>Last Active</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            background: '#064e43',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          {contact.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{contact.name}</div>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Phone size={13} color="#00c067" />
                        <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>
                          {contact.phone}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {contact.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              background: '#e0f2fe',
                              color: '#0369a1',
                              fontSize: 11,
                              padding: '2px 8px',
                              borderRadius: 4,
                              fontWeight: 600,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>
                      {contact.optIn ? (
                        <span className="status-pill success">
                          <CheckCircle2 size={12} />
                          <span>Opted-In</span>
                        </span>
                      ) : (
                        <span className="status-pill neutral">Opted-Out</span>
                      )}
                    </td>
                    <td>
                      <span style={{ fontSize: 12, color: '#64748b' }}>{contact.source}</span>
                    </td>
                    <td>
                      <span style={{ fontSize: 12, color: '#64748b' }}>{contact.lastActive}</span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        type="button"
                        className="btn-subpage-secondary"
                        style={{ padding: '4px 10px', fontSize: 12 }}
                        onClick={() => alert(`Starting WhatsApp chat with ${contact.name}...`)}
                      >
                        <MessageCircle size={13} color="#00c067" />
                        <span>Chat</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Contact Modal */}
      {showAddModal && (
        <div className="subpage-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="subpage-modal" onClick={(e) => e.stopPropagation()}>
            <div className="subpage-modal-header">
              <h3 className="subpage-modal-title">Add New Contact</h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddContact}>
              <div className="subpage-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 5 }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
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
                    WhatsApp Phone Number (with Country Code)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 43210"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
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
                    Tag / Segment
                  </label>
                  <select
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: 8,
                      border: '1px solid #cbd5e1',
                      fontSize: 13,
                      background: '#ffffff',
                    }}
                  >
                    <option value="VIP Customers">VIP Customers</option>
                    <option value="Diwali Shoppers">Diwali Shoppers</option>
                    <option value="Cart Abandoners">Cart Abandoners</option>
                    <option value="Website Signups">Website Signups</option>
                  </select>
                </div>
              </div>

              <div className="subpage-modal-footer">
                <button
                  type="button"
                  className="btn-subpage-secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-subpage-primary">
                  Save Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
