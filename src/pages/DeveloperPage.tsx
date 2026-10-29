import React, { useState } from 'react';
import {
  Code,
  Key,
  Copy,
  Check,
  Eye,
  EyeOff,
  Send,
  Webhook,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/subpages.css';

interface DeveloperPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const DeveloperPage: React.FC<DeveloperPageProps> = ({ onNavigate }) => {
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeLang, setActiveLang] = useState<'curl' | 'node' | 'python'>('curl');
  const [webhookUrl, setWebhookUrl] = useState('https://api.yourdomain.com/v1/webhooks/aisensy');
  const [savedWebhook, setSavedWebhook] = useState(false);
  const [testStatus, setTestStatus] = useState<string | null>(null);

  const rawApiKey = 'aisensy_live_sk_948201bca728d193fa01824cb';

  const handleCopyKey = () => {
    navigator.clipboard.writeText(rawApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedWebhook(true);
    setTimeout(() => setSavedWebhook(false), 3000);
  };

  const handleTestWebhook = () => {
    setTestStatus('Sending test ping...');
    setTimeout(() => {
      setTestStatus('Webhook delivered! HTTP 200 OK (38ms)');
      setTimeout(() => setTestStatus(null), 4000);
    }, 600);
  };

  const snippets = {
    curl: `curl -X POST https://backend.aisensy.com/campaign/t1/api/v2 \\
  -H "Content-Type: application/json" \\
  -H "X-Api-Key: ${rawApiKey}" \\
  -d '{
    "apiKey": "${rawApiKey}",
    "campaignName": "diwali_mega_discount_v2",
    "destination": "+919876543210",
    "userName": "Aarav Sharma",
    "templateParams": ["Aarav", "50% OFF", "DIWALI50"]
  }'`,
    node: `import axios from 'axios';

const response = await axios.post(
  'https://backend.aisensy.com/campaign/t1/api/v2',
  {
    apiKey: '${rawApiKey}',
    campaignName: 'diwali_mega_discount_v2',
    destination: '+919876543210',
    userName: 'Aarav Sharma',
    templateParams: ['Aarav', '50% OFF', 'DIWALI50']
  },
  {
    headers: { 'Content-Type': 'application/json' }
  }
);
console.log(response.data);`,
    python: `import requests

url = "https://backend.aisensy.com/campaign/t1/api/v2"
payload = {
    "apiKey": "${rawApiKey}",
    "campaignName": "diwali_mega_discount_v2",
    "destination": "+919876543210",
    "userName": "Aarav Sharma",
    "templateParams": ["Aarav", "50% OFF", "DIWALI50"]
}
headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="subpage-layout">
      {/* Authentic Pine Green Sidebar with Developer Active */}
      <Sidebar activeRoute="developer" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="subpage-main">
        {/* Top Header */}
        <header className="subpage-header">
          <div className="subpage-header-left">
            <h1 className="subpage-page-title">
              <span>Developer Settings & API</span>
              <span className="subpage-project-badge">REST API v2</span>
            </h1>
          </div>

          <div className="subpage-header-right">
            <button
              type="button"
              className="btn-subpage-secondary"
              onClick={() => window.open('https://docs.aisensy.com', '_blank')}
            >
              <ExternalLink size={14} />
              <span>API Documentation ↗</span>
            </button>
            <button
              type="button"
              className="btn-subpage-primary"
              onClick={handleTestWebhook}
            >
              <Send size={14} />
              <span>Send Test Webhook</span>
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="subpage-content">
          {testStatus && (
            <div
              style={{
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                color: '#065f46',
                padding: '12px 16px',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <CheckCircle2 size={16} color="#059669" />
              <span>{testStatus}</span>
            </div>
          )}

          {/* API Keys Card */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f172a' }}>
                Live API Credentials
              </h2>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                Use this secret key to authenticate your server-side requests to the AiSensy WhatsApp API.
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {/* API Key */}
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>
                  Live API Secret Key
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input
                    type={apiKeyVisible ? 'text' : 'password'}
                    readOnly
                    value={rawApiKey}
                    style={{
                      flex: 1,
                      padding: '9px 12px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: 8,
                      fontFamily: 'monospace',
                      fontSize: 13,
                    }}
                  />
                  <button
                    type="button"
                    className="btn-subpage-secondary"
                    onClick={() => setApiKeyVisible(!apiKeyVisible)}
                    title={apiKeyVisible ? 'Hide Key' : 'Reveal Key'}
                  >
                    {apiKeyVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  <button
                    type="button"
                    className="btn-subpage-secondary"
                    onClick={handleCopyKey}
                    title="Copy API Key"
                  >
                    {copiedKey ? <Check size={14} color="#00c067" /> : <Copy size={14} />}
                    <span>{copiedKey ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Project ID */}
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>
                  Project ID
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input
                    type="text"
                    readOnly
                    value="6aa3f69486634147725873cb"
                    style={{
                      flex: 1,
                      padding: '9px 12px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      borderRadius: 8,
                      fontFamily: 'monospace',
                      fontSize: 13,
                    }}
                  />
                  <button
                    type="button"
                    className="btn-subpage-secondary"
                    onClick={() => {
                      navigator.clipboard.writeText('6aa3f69486634147725873cb');
                      alert('Project ID copied to clipboard!');
                    }}
                  >
                    <Copy size={14} />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Webhook Endpoint Config */}
            <form onSubmit={handleSaveWebhook} style={{ borderTop: '1px solid #f1f5f9', paddingTop: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#334155', display: 'block', marginBottom: 6 }}>
                Inbound Webhook Delivery URL
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <input
                  type="url"
                  required
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://yourdomain.com/api/aisensy/webhook"
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    borderRadius: 8,
                    border: '1px solid #cbd5e1',
                    fontSize: 13,
                  }}
                />
                <button type="submit" className="btn-subpage-primary">
                  {savedWebhook ? 'Saved ✓' : 'Save Endpoint'}
                </button>
              </div>
            </form>
          </div>

          {/* Quick Start Code Snippets */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#0f172a' }}>
                  Send WhatsApp Message via API
                </h2>
                <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
                  Copy-paste this production ready snippet directly into your backend service.
                </div>
              </div>

              {/* Language switcher */}
              <div style={{ display: 'flex', gap: 6 }}>
                {(['curl', 'node', 'python'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    className={`subpage-tab-btn ${activeLang === lang ? 'active' : ''}`}
                    onClick={() => setActiveLang(lang)}
                  >
                    {lang === 'curl' ? 'cURL' : lang === 'node' ? 'Node.js' : 'Python'}
                  </button>
                ))}
              </div>
            </div>

            <div className="subpage-code-card">
              <button
                type="button"
                className="btn-code-copy"
                onClick={handleCopyCode}
              >
                {copiedCode ? <Check size={12} color="#00c067" /> : <Copy size={12} />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
              <pre style={{ margin: 0 }}>
                <code>{snippets[activeLang]}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
