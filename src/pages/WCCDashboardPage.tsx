import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Wallet,
  Zap,
  Coins,
  Clock,
  TrendingUp,
  Calendar,
  ChevronDown,
  Bell,
  Gift,
  ArrowRight,
  RotateCw,
  History,
  BarChart3,
  Headphones,
  Megaphone,
  X,
  CheckCircle2,
  AlertCircle,
  FolderKanban,
  LogOut,
  Sparkles,
  LayoutGrid,
  MessagesSquare,
  Contact,
  PlaneTakeoff,
  Workflow,
  CircleDashed,
  ArrowDown,
  FileClock,
  IndianRupee,
  Code,
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import type { PageRoute } from '../App';
import '../styles/workspace.css';
import '../styles/wcc_dashboard.css';

interface WCCDashboardPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface TransactionItem {
  id: string;
  txnId?: string;
  title: string;
  type: 'recharge' | 'credit' | 'failed' | 'maintained' | 'campaign' | 'ad_credits';
  date: string;
  amount: number;
  status: 'Successful' | 'Failed' | 'Maintained';
  isCredit: boolean;
  method: string;
}

export const WCCDashboardPage: React.FC<WCCDashboardPageProps> = ({ onNavigate }) => {
  const [balance, setBalance] = useState<number>(4720);
  const [usedThisMonth, setUsedThisMonth] = useState<number>(15280);
  const [totalRecharge, setTotalRecharge] = useState<number>(20000);
  const [remainingQuota, setRemainingQuota] = useState<number>(4720);

  const [dateFilter, setDateFilter] = useState('28');
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [trendFilter, setTrendFilter] = useState('28');
  const [trendDropdownOpen, setTrendDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Modals & Interactive States
  const [isRechargeModalOpen, setIsRechargeModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState<number>(4720);
  const [customAmountInput, setCustomAmountInput] = useState<string>('4720');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hoveredTrendPoint, setHoveredTrendPoint] = useState<{ day: string; date: string; val: number; note: string; x: number; y: number } | null>(null);

  // Exact Detailed Ledger aligned with History & Ledger:
  // 29 Sep: balance 3540, credit 3000 received from Rupesh tech.
  // 6 Oct: balance 3540, nothing happen (Balance Maintained)
  // 7 Oct: 1500 recharge (Razorpay) & 1500 credit received (From Digi Mate tech digital), balance 3540
  // 15 Oct: balance 3540, credit 3000 received (From Sanjay enterprises)
  // 19 Oct: balance 3540, credit 1500 received (From Dezoryn tech) & 1500 recharge (Razorpay)
  // 23 Oct: balance 4720, credit 4000 received (From For Play)
  // 25 Oct: balance 4720, 1500 recharge (Razorpay), 2500 received failed (From Sanjay enterprises), 2322.24 credit received (Razorpay)
  const [transactions, setTransactions] = useState<TransactionItem[]>([
    {
      id: 'tx-1',
      txnId: 'TXN-WCC-982428',
      title: 'Credit Received',
      type: 'credit',
      date: '25 Oct 2026 | 06:10 PM',
      amount: 2322.24,
      status: 'Successful',
      isCredit: true,
      method: 'Razorpay',
    },
    {
      id: 'tx-2',
      txnId: 'TXN-WCC-982427',
      title: 'Credit Received',
      type: 'failed',
      date: '25 Oct 2026 | 05:42 PM',
      amount: 2500,
      status: 'Failed',
      isCredit: false,
      method: 'From Sanjay enterprises',
    },
    {
      id: 'tx-3',
      txnId: 'TXN-WCC-982429',
      title: 'WCC Wallet Recharge',
      type: 'recharge',
      date: '25 Oct 2026 | 04:30 PM',
      amount: 1500,
      status: 'Successful',
      isCredit: true,
      method: 'Razorpay',
    },
    {
      id: 'tx-4',
      txnId: 'TXN-WCC-982423',
      title: 'Credit Received',
      type: 'credit',
      date: '23 Oct 2026 | 11:15 AM',
      amount: 4000,
      status: 'Successful',
      isCredit: true,
      method: 'From For Play',
    },
    {
      id: 'tx-5',
      txnId: 'TXN-WCC-982420',
      title: 'WCC Wallet Recharge',
      type: 'recharge',
      date: '19 Oct 2026 | 03:15 PM',
      amount: 1500,
      status: 'Successful',
      isCredit: true,
      method: 'Razorpay',
    },
    {
      id: 'tx-6',
      txnId: 'TXN-WCC-982419',
      title: 'Credit Received',
      type: 'credit',
      date: '19 Oct 2026 | 02:30 PM',
      amount: 1500,
      status: 'Successful',
      isCredit: true,
      method: 'From Dezoryn tech',
    },
    {
      id: 'tx-7',
      txnId: 'TXN-WCC-982415',
      title: 'Credit Received',
      type: 'credit',
      date: '15 Oct 2026 | 01:20 PM',
      amount: 3000,
      status: 'Successful',
      isCredit: true,
      method: 'From Sanjay enterprises',
    },
    {
      id: 'tx-8',
      txnId: 'TXN-WCC-982409',
      title: 'WCC Wallet Recharge',
      type: 'recharge',
      date: '07 Oct 2026 | 04:40 PM',
      amount: 1500,
      status: 'Successful',
      isCredit: true,
      method: 'Razorpay',
    },
    {
      id: 'tx-9',
      txnId: 'TXN-WCC-982408',
      title: 'Credit Received',
      type: 'credit',
      date: '07 Oct 2026 | 04:15 PM',
      amount: 1500,
      status: 'Successful',
      isCredit: true,
      method: 'From Digi Mate tech digital',
    },
    {
      id: 'tx-10',
      txnId: 'TXN-WCC-982406',
      title: 'Balance Maintained',
      type: 'maintained',
      date: '06 Oct 2026 | 10:45 AM',
      amount: 0,
      status: 'Maintained',
      isCredit: false,
      method: 'System Ledger',
    },
    {
      id: 'tx-11',
      txnId: 'TXN-WCC-982329',
      title: 'Credit Received',
      type: 'credit',
      date: '29 Sep 2026 | 04:12 PM',
      amount: 3000,
      status: 'Successful',
      isCredit: true,
      method: 'From Rupesh tech.',
    },
  ]);

  // Balance Trend Data for Milestone Dates (29 Sep 2026 to 25 Oct 2026)
  // Sep 29 to Oct 19 maintains ₹ 3,540 balance, then steps up to ₹ 4,720 on Oct 23 & 25
  const trendData = [
    { day: '29 Sep', date: '29 Sep 2026', val: 3540, note: '+₹3,000 Credit Received', x: 45, y: 79 },
    { day: '06 Oct', date: '6 Oct 2026', val: 3540, note: 'Balance Maintained (No Activity)', x: 95, y: 79 },
    { day: '07 Oct', date: '7 Oct 2026', val: 3540, note: '+₹1,500 Recharge & +₹1,500 Credit', x: 145, y: 79 },
    { day: '15 Oct', date: '15 Oct 2026', val: 3540, note: '+₹3,000 Credit Received', x: 200, y: 79 },
    { day: '19 Oct', date: '19 Oct 2026', val: 3540, note: '+₹1,500 Recharge & +₹1,500 Credit', x: 255, y: 79 },
    { day: '23 Oct', date: '23 Oct 2026', val: 4720, note: '+₹4,000 Credit Received', x: 310, y: 47 },
    { day: '25 Oct', date: '25 Oct 2026', val: 4720, note: '+₹1,500 Recharge & +₹2,322.24 Credit', x: 365, y: 47 },
  ];

  const handleSelectPreset = (amount: number) => {
    setRechargeAmount(amount);
    setCustomAmountInput(amount.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmountInput(val);
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      setRechargeAmount(num);
    }
  };

  const handleConfirmRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    if (rechargeAmount <= 0) return;

    const bonus = Math.round(rechargeAmount * 0.1);
    const totalAdded = rechargeAmount + bonus;

    setBalance((prev) => prev + totalAdded);
    setTotalRecharge((prev) => prev + rechargeAmount);

    const now = new Date();
    const dateStr = `${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} | ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;

    const newTx: TransactionItem = {
      id: `tx-${Date.now()}`,
      title: 'WCC Recharge',
      type: 'recharge',
      date: dateStr,
      amount: rechargeAmount,
      status: 'Successful',
      isCredit: true,
      method: 'Razorpay UPI',
    };

    setTransactions([newTx, ...transactions]);
    setIsRechargeModalOpen(false);
    setToastMessage(`Recharge of ₹${rechargeAmount.toLocaleString('en-IN')} successful! (+₹${bonus.toLocaleString('en-IN')} Bonus Added) 🎉`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="wcc-page-layout">
      {/* ========================================================
          LEFT SIDEBAR (MATCHES BRAND VISUAL PROOF EXACTLY)
      ======================================================== */}
      {/* Shared Authentic Pine Green Sidebar with WCC Dashboard Active */}
      <Sidebar activeRoute="dashboard" onNavigate={onNavigate} />

      {/* ========================================================
          MAIN SCROLLABLE CONTENT AREA
      ======================================================== */}
      <div className="wcc-main-scroll-wrap">
        {/* ========================================================
            TOP HEADER
        ======================================================== */}
        <header className="wcc-header">
          <div className="wcc-header-inner">
            <div className="wcc-header-left">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0f172a' }}>Digi mate vendor panel</span>
                <span style={{ color: '#cbd5e1' }}>/</span>
                <span style={{ fontSize: 13, color: '#16a34a', fontWeight: 600 }}>WCC Dashboard</span>
              </div>
            </div>

            <div className="wcc-header-right">
              {/* Quick Link to Project Workspace */}


              {/* Notification Bell */}


              {/* User Profile Menu with Avatar AK */}
              <div className="wcc-user-profile-menu">
                <button
                  type="button"
                  className="wcc-user-profile-btn"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  title="Account Menu"
                >
                  <div className="wcc-user-avatar">VD</div>
                  <span className="wcc-user-name">Shri Vinayakam Dham</span>
                  <ChevronDown size={14} color="#6b7280" />
                </button>

                {userDropdownOpen && (
                  <div className="wcc-user-dropdown">
                    <div style={{ padding: '8px 16px', borderBottom: '1px solid #f1f5f9' }}>
                      <strong style={{ fontSize: 13, color: '#0f172a', display: 'block' }}>Shri Vinayakam Dham</strong>
                      <span style={{ fontSize: 11.5, color: '#64748b' }}>cmdsachbedhadak@gmail.com</span>
                    </div>





                    <div className="wcc-dropdown-divider" />

                    <button
                      type="button"
                      className="wcc-dropdown-item logout"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        onNavigate('login');
                      }}
                    >
                      <LogOut size={15} />
                      <span>Log out</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ========================================================
          MAIN CONTAINER
      ======================================================== */}
        <main className="wcc-container">
          {/* Title & Actions Row */}
          <section className="wcc-title-row">
            <div>
              <h1 className="wcc-heading">WCC Reseller Dashboard</h1>
              <p className="wcc-subheading">Track your wallet balance, usage and recharge details</p>
            </div>

            <div className="wcc-title-actions">
              <div className="wcc-status-active-badge">
                <span className="wcc-status-dot" />
                <span>WCC Active</span>
              </div>

              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  className="wcc-filter-btn"

                >
                  {/* <Calendar size={15} color="#475569" /> */}
                  <span>
                    Last 28 Days
                  </span>
                  {/* <ChevronDown size={13} color="#64748b" /> */}
                </button>

                {dateDropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      right: 0,
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: 8,
                      boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                      zIndex: 50,
                      width: 140,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{ padding: '8px 12px', fontSize: 12.5, cursor: 'pointer', background: dateFilter === '7' ? '#f0fdf4' : 'transparent' }}
                      onClick={() => {
                        setDateFilter('7');
                        setDateDropdownOpen(false);
                      }}
                    >
                      Last 7 Days
                    </div>
                    <div
                      style={{ padding: '8px 12px', fontSize: 12.5, cursor: 'pointer', background: dateFilter === '30' ? '#f0fdf4' : 'transparent' }}
                      onClick={() => {
                        setDateFilter('30');
                        setDateDropdownOpen(false);
                      }}
                    >
                      Last 30 Days
                    </div>
                    <div
                      style={{ padding: '8px 12px', fontSize: 12.5, cursor: 'pointer', background: dateFilter === '15' ? '#f0fdf4' : 'transparent' }}
                      onClick={() => {
                        setDateFilter('15');
                        setDateDropdownOpen(false);
                      }}
                    >
                      Last 15 Days
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ========================================================
            4 TOP METRIC CARDS
        ======================================================== */}
          <section className="wcc-metrics-grid">
            {/* Card 1: Total WCC Balance */}
            <div className="wcc-metric-card">
              <div className="wcc-metric-icon-box green">
                <Wallet size={22} />
              </div>
              <div className="wcc-metric-content">
                <span className="wcc-metric-label">Total WCC Balance</span>
                <span className="wcc-metric-val">₹ {balance.toLocaleString('en-IN')}</span>
                <div className="wcc-metric-trend">
                  <span className="wcc-trend-up">↑ 12%</span>
                  <span>vs last 07 days</span>
                </div>
              </div>
            </div>



            {/* Card 3: Total Recharge */}
            <div className="wcc-metric-card">
              <div className="wcc-metric-icon-box purple">
                <Coins size={22} />
              </div>
              <div className="wcc-metric-content">
                <span className="wcc-metric-label">Total Recharge</span>
                <span className="wcc-metric-val">₹ {totalRecharge.toLocaleString('en-IN')}</span>
                <div className="wcc-metric-trend">
                  <span className="wcc-trend-up">↑ 25%</span>
                  <span>vs last 30 days</span>
                </div>
              </div>
            </div>


          </section>

          {/* ========================================================
            MAIN TWO-COLUMN GRID: LEFT CHARTS & RIGHT WIDGETS
        ======================================================== */}
          <div className="wcc-main-grid">
            {/* ========================================================
              LEFT COLUMN
          ======================================================== */}
            <div className="wcc-col-left">
              {/* Row of 2 Cards: Trend & Breakdown */}
              <div className="wcc-charts-row">
                {/* Card 1: WCC Balance Trend */}
                <div className="wcc-card">
                  <div className="wcc-card-header">
                    <div className="wcc-card-title-left">
                      <TrendingUp size={18} color="#16a34a" />
                      <span>WCC Balance Trend</span>
                    </div>

                    <div style={{ position: 'relative' }}>
                      <button
                        type="button"
                        className="wcc-card-dropdown-btn"
                        onClick={() => setTrendDropdownOpen(!trendDropdownOpen)}
                      >
                        <span>Last {trendFilter} Days</span>
                        <ChevronDown size={13} />
                      </button>

                      {trendDropdownOpen && (
                        <div
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 4px)',
                            right: 0,
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            borderRadius: 6,
                            boxShadow: '0 6px 16px rgba(0,0,0,0.08)',
                            zIndex: 50,
                            width: 110,
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{ padding: '6px 10px', fontSize: 11.5, cursor: 'pointer' }}
                            onClick={() => {
                              setTrendFilter('7');
                              setTrendDropdownOpen(false);
                            }}
                          >
                            Last 7 Days
                          </div>
                          <div
                            style={{ padding: '6px 10px', fontSize: 11.5, cursor: 'pointer' }}
                            onClick={() => {
                              setTrendFilter('14');
                              setTrendDropdownOpen(false);
                            }}
                          >
                            Last 14 Days
                          </div>
                          <div
                            style={{ padding: '6px 10px', fontSize: 11.5, cursor: 'pointer' }}
                            onClick={() => {
                              setTrendFilter('30');
                              setTrendDropdownOpen(false);
                            }}
                          >
                            Last 30 Days
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SVG Area Chart */}
                  <div className="wcc-trend-chart-box">
                    <svg className="wcc-svg-chart" viewBox="0 0 400 180">
                      <defs>
                        <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.32" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines & Y-Labels */}
                      <g className="wcc-chart-grid" stroke="#f1f5f9" strokeWidth="1">
                        <line x1="30" y1="40" x2="390" y2="40" />
                        <line x1="30" y1="65" x2="390" y2="65" />
                        <line x1="30" y1="95" x2="390" y2="95" />
                        <line x1="30" y1="125" x2="390" y2="125" />
                        <line x1="30" y1="145" x2="390" y2="145" />
                        <line x1="30" y1="165" x2="390" y2="165" />
                      </g>

                      <g fill="#94a3b8" fontSize="8.5" fontFamily="sans-serif">
                        <text x="2" y="43">₹ 5K</text>
                        <text x="2" y="68">₹ 4K</text>
                        <text x="2" y="98">₹ 3K</text>
                        <text x="2" y="128">₹ 2K</text>
                        <text x="7" y="148">₹ 1K</text>
                        <text x="14" y="168">₹ 0</text>
                      </g>

                      {/* Gradient Area: Flat at 3,540 (y=79) from 29 Sep to 19 Oct, then steps up to 4,720 (y=47) on 23 & 25 Oct */}
                      <path
                        d="M 45 79 L 95 79 L 145 79 L 200 79 L 255 79 C 275 79, 290 47, 310 47 L 365 47 L 365 165 L 45 165 Z"
                        fill="url(#trendGradient)"
                      />

                      {/* Main Curved Line */}
                      <path
                        d="M 45 79 L 95 79 L 145 79 L 200 79 L 255 79 C 275 79, 290 47, 310 47 L 365 47"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />

                      {/* Interactive Points on Line */}
                      {trendData.map((pt, i) => (
                        <g key={i}>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r={i >= trendData.length - 2 ? 5.2 : 3.8}
                            fill="#10b981"
                            stroke="#ffffff"
                            strokeWidth="2"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => setHoveredTrendPoint(pt)}
                            onMouseLeave={() => setHoveredTrendPoint(null)}
                          />
                          <text
                            x={pt.x}
                            y="180"
                            textAnchor="middle"
                            fill="#64748b"
                            fontSize="9"
                            fontWeight="600"
                            fontFamily="sans-serif"
                          >
                            {pt.day}
                          </text>
                        </g>
                      ))}
                    </svg>

                    {/* Tooltip on Hover */}
                    {hoveredTrendPoint && (
                      <div
                        style={{
                          position: 'absolute',
                          left: `${(hoveredTrendPoint.x / 400) * 100}%`,
                          top: `${hoveredTrendPoint.y - 12}px`,
                          transform: 'translate(-50%, -100%)',
                          background: '#0f172a',
                          color: '#ffffff',
                          padding: '6px 12px',
                          borderRadius: 6,
                          fontSize: 11,
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          pointerEvents: 'none',
                          zIndex: 20,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                        }}
                      >
                        <div>{hoveredTrendPoint.date}: <strong>₹ {hoveredTrendPoint.val.toLocaleString('en-IN')}</strong></div>
                        <div style={{ fontSize: 10, color: '#34d399', fontWeight: 500, marginTop: 2 }}>{hoveredTrendPoint.note}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card 2: WCC Usage Breakdown */}
                <div className="wcc-card">
                  <div className="wcc-card-header">
                    <div className="wcc-card-title-left">
                      <Clock size={18} color="#16a34a" />
                      <span>WCC Usage Breakdown</span>
                    </div>
                  </div>

                  <div className="wcc-donut-container">
                    {/* Donut Chart with Center Amount */}
                    <div className="wcc-donut-wrap">
                      <svg viewBox="0 0 160 160" width="160" height="160">
                        {/* Segment 1: WhatsApp Messages 52% (Green #10b981) */}
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          fill="transparent"
                          stroke="#10b981"
                          strokeWidth="24"
                          strokeDasharray="196 377"
                          strokeDashoffset="94"
                        />
                        {/* Segment 2: Ad Credits 22% (Blue #3b82f6) */}
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          fill="transparent"
                          stroke="#3b82f6"
                          strokeWidth="24"
                          strokeDasharray="83 377"
                          strokeDashoffset="-102"
                        />
                        {/* Segment 3: AI Tools 15% (Purple #a855f7) */}
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          fill="transparent"
                          stroke="#a855f7"
                          strokeWidth="24"
                          strokeDasharray="57 377"
                          strokeDashoffset="-185"
                        />
                        {/* Segment 4: Others 11% (Orange #f97316) */}
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          fill="transparent"
                          stroke="#f97316"
                          strokeWidth="24"
                          strokeDasharray="41 377"
                          strokeDashoffset="-242"
                        />
                      </svg>

                      <div className="wcc-donut-center">
                        <div className="wcc-donut-center-val">₹ 8,320</div>
                        <div className="wcc-donut-center-sub">Total Used</div>
                      </div>
                    </div>

                    {/* Legend Breakdown List */}
                    <div className="wcc-legend-list">
                      <div className="wcc-legend-item">
                        <div className="wcc-legend-item-top">
                          <div className="wcc-legend-dot-label">
                            <span className="wcc-legend-dot" style={{ backgroundColor: '#10b981' }} />
                            <span>WhatsApp Messages</span>
                          </div>
                          <span>52%</span>
                        </div>
                        <div className="wcc-legend-subval">₹ 4,326</div>
                      </div>

                      <div className="wcc-legend-item">
                        <div className="wcc-legend-item-top">
                          <div className="wcc-legend-dot-label">
                            <span className="wcc-legend-dot" style={{ backgroundColor: '#3b82f6' }} />
                            <span>Ad Credits</span>
                          </div>
                          <span>22%</span>
                        </div>
                        <div className="wcc-legend-subval">₹ 1,831</div>
                      </div>

                      <div className="wcc-legend-item">
                        <div className="wcc-legend-item-top">
                          <div className="wcc-legend-dot-label">
                            <span className="wcc-legend-dot" style={{ backgroundColor: '#a855f7' }} />
                            <span>AI Tools</span>
                          </div>
                          <span>15%</span>
                        </div>
                        <div className="wcc-legend-subval">₹ 1,248</div>
                      </div>

                      <div className="wcc-legend-item">
                        <div className="wcc-legend-item-top">
                          <div className="wcc-legend-dot-label">
                            <span className="wcc-legend-dot" style={{ backgroundColor: '#f97316' }} />
                            <span>Others</span>
                          </div>
                          <span>11%</span>
                        </div>
                        <div className="wcc-legend-subval">₹ 915</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Special Offer! Banner Card */}
              <div className="wcc-offer-banner-card">
                <div className="wcc-offer-left">
                  <div className="wcc-offer-gift-circle">
                    <Gift size={26} />
                  </div>
                  <div>
                    <div className="wcc-offer-title">Special Offer!</div>
                    <p className="wcc-offer-desc">
                      Get extra 10% WCC on recharge this week. Boost your marketing &amp; communication.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-offer-recharge-now"
                  onClick={() => setIsRechargeModalOpen(true)}
                >
                  <span>Recharge Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* ========================================================
              RIGHT COLUMN
          ======================================================== */}
            <div className="wcc-col-right">
              {/* Recent Transactions Card - Clean & Prominent */}
              <div className="wcc-transactions-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="wcc-transactions-header">
                  <div>
                    <span className="wcc-transactions-title">Recent Transactions</span>
                    {/* <span style={{ fontSize: 11, color: '#16a34a', fontWeight: 600, marginLeft: 8 }}>
                      (Sep 29 – Oct 25)
                    </span> */}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <button
                      type="button"
                      className="wcc-view-all-link"
                      onClick={() => onNavigate('history')}
                    >
                      <span>View All</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>

                <div className="wcc-tx-list" style={{ flex: 1, gap: 10 }}>
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="wcc-tx-item"
                      style={{
                        padding: '10px 12px',
                        borderRadius: 10,
                        background: tx.status === 'Failed' ? '#fff5f5' : '#f8fafc',
                        border: tx.status === 'Failed' ? '1px solid #fecaca' : '1px solid #f1f5f9',
                      }}
                    >
                      <div className="wcc-tx-left">
                        <div
                          className={`wcc-tx-icon-circle ${tx.status === 'Failed' ? 'red' : tx.status === 'Maintained' ? 'gray' : 'green'}`}
                          style={{
                            background: tx.status === 'Failed' ? '#fee2e2' : tx.status === 'Maintained' ? '#f1f5f9' : '#ecfdf5',
                            color: tx.status === 'Failed' ? '#dc2626' : tx.status === 'Maintained' ? '#64748b' : '#059669',
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {tx.status === 'Failed' ? <AlertCircle size={15} /> : tx.status === 'Maintained' ? <RotateCw size={14} /> : <Wallet size={15} />}
                        </div>
                        <div>
                          <div className="wcc-tx-name" style={{ fontWeight: 700, color: tx.status === 'Failed' ? '#dc2626' : '#0f172a' }}>{tx.title}</div>
                          <div className="wcc-tx-date" style={{ fontSize: 11, color: '#64748b' }}>{tx.date}</div>
                        </div>
                      </div>

                      <div className="wcc-tx-amount" style={{ textAlign: 'right' }}>
                        {tx.status === 'Failed' ? (
                          <div style={{ fontSize: 13, fontWeight: 800, color: '#dc2626' }}>
                            ₹ {tx.amount.toLocaleString('en-IN', { minimumFractionDigits: tx.amount % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 })}
                            <span style={{ display: 'block', fontSize: 10.5, fontWeight: 600 }}>Failed</span>
                          </div>
                        ) : tx.amount === 0 ? (
                          <div style={{ fontSize: 13, fontWeight: 700, color: '#64748b' }}>
                            ₹ 0.00
                            <span style={{ display: 'block', fontSize: 10.5, fontWeight: 500, color: '#94a3b8' }}>Maintained</span>
                          </div>
                        ) : (
                          <div style={{ fontSize: 13.5, fontWeight: 800, color: '#059669' }}>
                            + ₹ {tx.amount.toLocaleString('en-IN', { minimumFractionDigits: tx.amount % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 })}
                            <span style={{ display: 'block', fontSize: 10.5, fontWeight: 500, color: '#64748b' }}>{tx.method}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ========================================================
          RECHARGE WCC MODAL
      ======================================================== */}
        {isRechargeModalOpen && (
          <div className="wcc-modal-backdrop" onClick={() => setIsRechargeModalOpen(false)}>
            <div className="wcc-modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="wcc-modal-close"
                onClick={() => setIsRechargeModalOpen(false)}
              >
                <X size={18} />
              </button>

              <h3 className="wcc-modal-title">Recharge WCC Credits</h3>
              <p className="wcc-modal-subtitle">
                Instant recharge for WhatsApp messaging, campaigns &amp; AI tools
              </p>

              <form onSubmit={handleConfirmRecharge}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#475569', display: 'block', marginBottom: 8 }}>
                  Select Preset Amount
                </label>

                <div className="wcc-preset-recharge-grid">
                  {[2000, 5000, 10000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`wcc-preset-btn ${rechargeAmount === amt ? 'active' : ''}`}
                      onClick={() => handleSelectPreset(amt)}
                    >
                      ₹ {amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                <label style={{ fontSize: 12, fontWeight: 700, color: '#475569', display: 'block', marginBottom: 8 }}>
                  Or Enter Custom Amount (₹)
                </label>
                <input
                  type="text"
                  className="wcc-custom-amount-input"
                  placeholder="Enter amount"
                  value={customAmountInput}
                  onChange={handleCustomAmountChange}
                  required
                />

                <div className="wcc-bonus-credit-pill">
                  <Sparkles size={16} />
                  <span>
                    Special Offer Applied: <strong>+₹{Math.round(rechargeAmount * 0.1).toLocaleString('en-IN')} (10% Bonus WCC)</strong> will be credited!
                  </span>
                </div>

                <button type="submit" className="btn-confirm-recharge">
                  Pay ₹{rechargeAmount.toLocaleString('en-IN')} &amp; Recharge
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================
          TRANSACTION HISTORY MODAL
      ======================================================== */}
        {isHistoryModalOpen && (
          <div className="wcc-modal-backdrop" onClick={() => setIsHistoryModalOpen(false)}>
            <div className="wcc-modal-card" style={{ maxWidth: 560 }} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="wcc-modal-close"
                onClick={() => setIsHistoryModalOpen(false)}
              >
                <X size={18} />
              </button>

              <h3 className="wcc-modal-title">All WCC Transactions</h3>
              <p className="wcc-modal-subtitle">Complete ledger of your WCC recharges and expenditures</p>

              <div style={{ maxHeight: 360, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14, paddingRight: 6 }}>
                {transactions.map((tx) => (
                  <div key={tx.id} className="wcc-tx-item" style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: 10 }}>
                    <div className="wcc-tx-left">
                      <div
                        className={`wcc-tx-icon-circle ${tx.status === 'Failed' ? 'red' : tx.status === 'Maintained' ? 'gray' : 'green'
                          }`}
                        style={{
                          background: tx.status === 'Failed' ? '#fee2e2' : tx.status === 'Maintained' ? '#f1f5f9' : '#ecfdf5',
                          color: tx.status === 'Failed' ? '#dc2626' : tx.status === 'Maintained' ? '#64748b' : '#059669',
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {tx.status === 'Failed' ? (
                          <AlertCircle size={15} />
                        ) : tx.status === 'Maintained' ? (
                          <RotateCw size={14} />
                        ) : (
                          <Wallet size={15} />
                        )}
                      </div>
                      <div>
                        <div className="wcc-tx-name" style={{ fontWeight: 700, color: tx.status === 'Failed' ? '#dc2626' : '#0f172a' }}>{tx.title}</div>
                        <div className="wcc-tx-date" style={{ fontSize: 11, color: '#64748b' }}>{tx.date}</div>
                      </div>
                    </div>

                    <div className="wcc-tx-amount" style={{ textAlign: 'right' }}>
                      {tx.status === 'Failed' ? (
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#dc2626' }}>
                          ₹ {tx.amount.toLocaleString('en-IN', { minimumFractionDigits: tx.amount % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 })}
                          <span style={{ display: 'block', fontSize: 10.5, fontWeight: 600 }}>Failed</span>
                        </div>
                      ) : tx.amount === 0 ? (
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#64748b' }}>
                          ₹ 0.00
                          <span style={{ display: 'block', fontSize: 10.5, fontWeight: 500, color: '#94a3b8' }}>Maintained</span>
                        </div>
                      ) : (
                        <div style={{ fontSize: 13.5, fontWeight: 800, color: '#059669' }}>
                          + ₹ {tx.amount.toLocaleString('en-IN', { minimumFractionDigits: tx.amount % 1 !== 0 ? 2 : 0, maximumFractionDigits: 2 })}
                          <span style={{ display: 'block', fontSize: 10.5, fontWeight: 500, color: '#64748b' }}>{tx.method}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
          TOAST ALERT
      ======================================================== */}
        {toastMessage && (
          <div className="wcc-toast-alert">
            <CheckCircle2 size={18} color="#22c55e" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};
