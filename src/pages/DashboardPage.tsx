import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Settings,
  Home,
  LogOut,
  Sparkles,
  Rocket,
  ArrowRight,
  X,
  Plus,
  FolderKanban,
  CheckCircle2,
  Clock,
  Crown,
  Calendar,
} from 'lucide-react';
import type { PageRoute } from '../App';
import '../styles/dashboard.css';

interface DashboardPageProps {
  onNavigate: (page: PageRoute) => void;
}

interface ProjectItem {
  id: string;
  name: string;
  status: 'Verified' | 'Created' | 'Pending';
  plan: string;
  number: string;
  createdAt: string;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const [projectNameInput, setProjectNameInput] = useState('');
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      id: 'p-1',
      name: 'Bps Ventures 6690',
      status: 'Verified',
      plan: 'FREE FOREVER',
      number: '919530462857',
      createdAt: 'Sep 11, 2026',
    },
    {
      id: 'p-2',
      name: 'Bps Ventures 2',
      status: 'Created',
      plan: 'FREE FOREVER',
      number: 'N/A',
      createdAt: 'Oct 8, 2026',
    },
  ]);

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectNameInput.trim()) return;

    const newProj: ProjectItem = {
      id: `p-${Date.now()}`,
      name: projectNameInput.trim(),
      status: 'Created',
      plan: 'FREE FOREVER',
      number: 'N/A',
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setProjects([newProj, ...projects]);
    setProjectNameInput('');
    setNotification(`Project "${newProj.name}" created successfully!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="dashboard-root">
      {/* Top Navbar */}
      <header className="dashboard-header">
        <div className="dashboard-header-inner">
          <a
            href="/"
            className="dashboard-logo"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
            }}
          >
            <img
              src="/images/logoAi.png"
              alt="AiSensy"
              style={{ height: 36, objectFit: 'contain' }}
            />
          </a>

          {/* User Profile Avatar with dropdown */}
          <div className="user-profile-menu-wrap">
            <button
              className="user-avatar-btn"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              title="User Account"
            >
              <span>B</span>
            </button>

            {userDropdownOpen && (
              <div className="user-dropdown-card">
                <div className="user-dropdown-header">
                  <strong>Bps Ventures</strong>
                  <span>bp***@gmail.com</span>
                </div>
                <div className="user-dropdown-divider"></div>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setUserDropdownOpen(false);
                    alert('Organization Settings: Active Plan is FREE FOREVER.');
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <Settings size={15} />
                  <span>Account Settings</span>
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setUserDropdownOpen(false);
                    onNavigate('home');
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <Home size={15} />
                  <span>AiSensy Home</span>
                </button>
                <div className="user-dropdown-divider"></div>
                <button
                  className="dropdown-item logout"
                  onClick={() => {
                    setUserDropdownOpen(false);
                    onNavigate('login');
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                >
                  <LogOut size={15} />
                  <span>Log out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="dashboard-container">
        {notification && (
          <div className="dashboard-toast">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Sparkles size={16} />
              {notification}
            </span>
          </div>
        )}

        <h1 className="dashboard-greeting">Welcome, Bps</h1>

        {/* Hero Create Project Card */}
        <section className="create-project-hero-card">
          <div className="create-project-content">
            <h2 className="create-project-title">Create New Project</h2>
            <p className="create-project-subtitle">
              One Business Project is associated with one WhatsApp Business API Number
            </p>

            <form onSubmit={handleCreateProject} className="create-project-form">
              <input
                type="text"
                className="create-project-input"
                placeholder="Enter your project name"
                value={projectNameInput}
                onChange={(e) => setProjectNameInput(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn-create-project"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
              >
                <Plus size={16} />
                <span>Create</span>
              </button>
            </form>
          </div>

          <div className="create-project-illustration">
            <img
              src="/images/rocket_launch.jpg"
              alt="Rocket Launch Project"
              className="rocket-illustration-img"
            />
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="recent-projects-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <FolderKanban size={20} color="#0c4a44" />
            <h2 className="recent-projects-title" style={{ margin: 0 }}>Recent Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="project-card">
                <h3 className="project-card-title">{proj.name}</h3>

                <div className="project-meta-row">
                  <div className="meta-col">
                    <span className="meta-label">Status</span>
                    <span
                      className={`meta-status ${proj.status.toLowerCase()}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                      {proj.status === 'Verified' ? (
                        <CheckCircle2 size={12} color="#00C067" />
                      ) : (
                        <Clock size={12} color="#6b7280" />
                      )}
                      <span>{proj.status}</span>
                    </span>
                  </div>

                  <div className="meta-col">
                    <span className="meta-label">Active plan</span>
                    <span
                      className="meta-plan"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
                    >
                      <Crown size={12} color="#f59e0b" />
                      <span>{proj.plan}</span>
                    </span>
                  </div>
                </div>

                <div className="project-number-section">
                  <span className="meta-label">Number</span>
                  <div className="meta-number-val">
                    <span>{proj.number}</span>
                    {proj.number !== 'N/A' && (
                      <FaWhatsapp size={16} color="#00C067" />
                    )}
                  </div>
                </div>

                <div
                  className="project-created-date"
                  style={{ display: 'flex', alignItems: 'center', gap: 5 }}
                >
                  <Calendar size={13} color="#9ca3af" />
                  <span>Created at {proj.createdAt}</span>
                </div>

                <button
                  type="button"
                  className="btn-project-view"
                  onClick={() => onNavigate('dashboard')}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                >
                  <span>View</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={18} />
            </button>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              {selectedProject.name}
            </h3>
            <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.8 }}>
              <div><strong>Status:</strong> <span style={{ color: selectedProject.status === 'Verified' ? '#00C067' : '#6b7280' }}>{selectedProject.status}</span></div>
              <div><strong>Plan:</strong> {selectedProject.plan}</div>
              <div><strong>WhatsApp Number:</strong> {selectedProject.number}</div>
              <div><strong>Created:</strong> {selectedProject.createdAt}</div>
              <div style={{ marginTop: 14, padding: '10px 14px', background: '#eef8f2', borderRadius: 8, color: '#0c4a44', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Rocket size={16} />
                <span>1,000 Free Ad Credits are available for this business workspace.</span>
              </div>
            </div>
            <button
              style={{
                marginTop: 20,
                width: '100%',
                padding: '10px',
                background: '#0d4838',
                color: '#ffffff',
                border: 'none',
                borderRadius: 6,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
              onClick={() => {
                onNavigate('workspace');
                setSelectedProject(null);
              }}
            >
              <span>Open Project Workspace</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
