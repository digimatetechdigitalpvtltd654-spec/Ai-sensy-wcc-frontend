import React, { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { WCCDashboardPage } from './pages/WCCDashboardPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProjectWorkspacePage } from './pages/ProjectWorkspacePage';
import { HistoryPage } from './pages/HistoryPage';
import { ContactsPage } from './pages/ContactsPage';
import { CampaignsPage } from './pages/CampaignsPage';
import { AdsManagerPage } from './pages/AdsManagerPage';
import { FlowsPage } from './pages/FlowsPage';
import { WAPaymentsPage } from './pages/WAPaymentsPage';
import { DeveloperPage } from './pages/DeveloperPage';

export type PageRoute =
  | 'home'
  | 'login'
  | 'signup'
  | 'dashboard'
  | 'workspace'
  | 'projects'
  | 'history'
  | 'contacts'
  | 'campaigns'
  | 'adsManager'
  | 'flows'
  | 'waPay'
  | 'developer';

export const App: React.FC = () => {
  const getInitialPage = (): PageRoute => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('history') || hash.includes('history')) return 'history';
    if (path.includes('contact') || hash.includes('contact')) return 'contacts';
    if (path.includes('campaign') || hash.includes('campaign')) return 'campaigns';
    if (path.includes('ad') || hash.includes('ad')) return 'adsManager';
    if (path.includes('flow') || hash.includes('flow')) return 'flows';
    if (path.includes('pay') || hash.includes('pay')) return 'waPay';
    if (path.includes('dev') || hash.includes('dev')) return 'developer';
    if (path.includes('workspace') || hash.includes('workspace')) return 'workspace';
    if (path.includes('projects') || hash.includes('projects')) return 'projects';
    if (path.includes('dashboard') || hash.includes('dashboard')) return 'dashboard';
    if (path.includes('login') || hash.includes('login')) return 'login';
    if (path.includes('signup') || hash.includes('signup')) return 'signup';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialPage);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let newUrl = '/';
    if (page === 'login') newUrl = '/login';
    if (page === 'signup') newUrl = '/signup';
    if (page === 'dashboard') newUrl = '/dashboard';
    if (page === 'history') newUrl = '/history';
    if (page === 'contacts') newUrl = '/contacts';
    if (page === 'campaigns') newUrl = '/campaigns';
    if (page === 'adsManager') newUrl = '/ads-manager';
    if (page === 'flows') newUrl = '/flows';
    if (page === 'waPay') newUrl = '/wa-payments';
    if (page === 'developer') newUrl = '/developer';
    if (page === 'workspace') newUrl = '/workspace';
    if (page === 'projects') newUrl = '/projects';

    try {
      window.history.pushState({ page }, '', newUrl);
    } catch {
      window.location.hash = page;
    }
  };

  return (
    <div className="app-root">
      {/* Dynamic Route Switching */}
      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
      {currentPage === 'signup' && <SignUpPage onNavigate={handleNavigate} />}
      {currentPage === 'dashboard' && <WCCDashboardPage onNavigate={handleNavigate} />}
      {currentPage === 'workspace' && <ProjectWorkspacePage onNavigate={handleNavigate} />}
      {currentPage === 'projects' && <DashboardPage onNavigate={handleNavigate} />}
      {currentPage === 'history' && <HistoryPage onNavigate={handleNavigate} />}
      {currentPage === 'contacts' && <ContactsPage onNavigate={handleNavigate} />}
      {currentPage === 'campaigns' && <CampaignsPage onNavigate={handleNavigate} />}
      {currentPage === 'adsManager' && <AdsManagerPage onNavigate={handleNavigate} />}
      {currentPage === 'flows' && <FlowsPage onNavigate={handleNavigate} />}
      {currentPage === 'waPay' && <WAPaymentsPage onNavigate={handleNavigate} />}
      {currentPage === 'developer' && <DeveloperPage onNavigate={handleNavigate} />}
    </div>
  );
};


