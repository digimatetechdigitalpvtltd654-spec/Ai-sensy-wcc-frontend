import React, { useState } from 'react';
import {
  LayoutGrid,
  History,
  Contact,
  PlaneTakeoff,
  Megaphone,
  Workflow,
  IndianRupee,
  Code,
  CircleDashed,
  FolderKanban,
  LogOut,
  type LucideIcon,
} from 'lucide-react';
import type { PageRoute } from '../App';

export type SidebarRoute =
  | 'dashboard'
  | 'history'
  | 'contacts'
  | 'campaigns'
  | 'adsManager'
  | 'flows'
  | 'waPay'
  | 'developer'
  | 'projects'
  | 'workspace';

interface SidebarProps {
  activeRoute: SidebarRoute;
  onNavigate: (page: PageRoute) => void;
}

export interface NavItem {
  id: SidebarRoute;
  label: string;
  icon: LucideIcon;
  route: PageRoute;
  isRupee?: boolean;
}


export const Sidebar: React.FC<SidebarProps> = ({ activeRoute, onNavigate }) => {
  const [userDropdown, setUserDropdown] = useState(false);

  const navItems: NavItem[] = [
    {
      id: 'dashboard' as SidebarRoute,
      label: 'WCC Dashboard',
      icon: LayoutGrid,
      route: 'dashboard' as PageRoute,
    },
    {
      id: 'history' as SidebarRoute,
      label: 'WCC History',
      icon: History,
      route: 'history' as PageRoute,
    },




  ];

  return (
    <aside className="ws-sidebar">
      {/* Brand Logo at top */}
      <div
        className="ws-sidebar-logo"
        onClick={() => onNavigate('dashboard')}
        title="AiSensy Dashboard"
      >
        <img
          src="/dashboard/aisensy_sidebar_logo.png"
          alt="AiSensy"
          className="ws-brand-logo-img"
        />
      </div>

      {/* Main Nav Items */}
      <nav className="ws-sidebar-nav" id="wsSidebarNav">
        {navItems.map((item) => {
          const isActive = activeRoute === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              className={`ws-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onNavigate(item.route)}
              title={item.label}
            >
              {isActive && <span className="ws-active-indicator" />}

              {item.isRupee ? (
                <div className={isActive ? 'ws-nav-circle-active' : 'ws-rupee-ring'}>
                  <IndianRupee
                    size={isActive ? 18 : 12}
                    color={isActive ? '#064e43' : '#ffffff'}
                    strokeWidth={isActive ? 2.4 : 2.4}
                  />
                </div>
              ) : (
                <div className={isActive ? 'ws-nav-circle-active' : 'ws-nav-icon-wrap'}>
                  <Icon
                    size={isActive ? 18 : 20}
                    color={isActive ? '#064e43' : '#ffffff'}
                    strokeWidth={isActive ? 2.2 : 1.9}
                  />
                </div>
              )}

              <span className="ws-nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Sidebar Bottom: User Avatar B */}
      <div className="ws-sidebar-bottom">
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className="ws-user-avatar-btn"
            onClick={() => setUserDropdown(!userDropdown)}
            title="User Account: Shri Vinayakam Dham"
          >
            <span>VD</span>
          </button>

          {userDropdown && (
            <div
              style={{
                position: 'absolute',
                left: 60,
                bottom: 0,
                background: '#ffffff',
                borderRadius: 10,
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                padding: 12,
                width: 210,
                zIndex: 200,
                border: '1px solid #e5e7eb',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>
                Shri Vinayakam Dham
              </div>
              <div style={{ fontSize: 11, color: '#6b7280', marginBottom: 8, wordBreak: 'break-all' }}>
                cmdsachbedhadak@gmail.com
              </div>
              <hr style={{ margin: '6px 0', borderColor: '#f1f5f9' }} />
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  width: '100%',
                  padding: '6px 0',
                  fontSize: 12,
                  cursor: 'pointer',
                  color: '#374151',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onClick={() => {
                  setUserDropdown(false);
                  onNavigate('projects');
                }}
              >
                <FolderKanban size={14} />
                <span>All Projects</span>
              </button>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  width: '100%',
                  padding: '6px 0',
                  fontSize: 12,
                  cursor: 'pointer',
                  color: '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
                onClick={() => {
                  setUserDropdown(false);
                  onNavigate('login');
                }}
              >
                <LogOut size={14} />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
