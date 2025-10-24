import { useState } from 'react';
import { Shield, LogOut, User, FileCheck, BarChart3, Building2, Users, TrendingUp, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IssuePortal from './dashboard/IssuePortal';
import Footer from './Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics';
type TabType = 'issue' | 'analytics' | 'organization' | 'profile';

interface CompanyPortalProps {
  walletAddress: string;
  onDisconnect: () => void;
  onNavigate: (page: AppPage) => void;
}

export default function CompanyPortal({ walletAddress, onDisconnect, onNavigate }: CompanyPortalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('issue');

  const tabs = [
    { id: 'issue' as TabType, label: 'Issue Credentials', icon: FileCheck },
    { id: 'analytics' as TabType, label: 'Analytics', icon: BarChart3 },
    { id: 'organization' as TabType, label: 'Organization', icon: Building2 },
    { id: 'profile' as TabType, label: 'Profile', icon: User },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'issue':
        return <IssuePortal />;
      case 'analytics':
        return <AnalyticsTab />;
      case 'organization':
        return <OrganizationTab />;
      case 'profile':
        return <ProfileTab walletAddress={walletAddress} />;
      default:
        return <IssuePortal />;
    }
  };

  return (
    <div className="min-h-screen bg-animated-gradient flex flex-col">
      <header className="glass-dark border-b border-purple-500/20 px-6 py-4 sticky top-0 z-40 shadow-xl shadow-purple-500/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-bold gradient-text font-display">CollabChain</span>
            </Link>
            <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full shadow-lg shadow-purple-500/30">
              Company Portal
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              to="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-neon-400 hover:bg-dark-800/50 rounded-lg transition-all"
            >
              <Home className="w-4 h-4" />
              <span className="hidden md:inline">Home</span>
            </Link>
            <span className="text-sm text-purple-300 font-mono bg-slate-800/50 px-3 py-2 rounded-lg border border-purple-500/30">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </span>
            <button
              onClick={onDisconnect}
              className="flex items-center gap-2 px-4 py-2 bg-dark-800/50 hover:bg-red-500/10 border border-red-500/30 hover:border-red-500 text-red-400 hover:text-red-300 rounded-lg transition-all shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Disconnect</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Welcome Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 text-white p-8 rounded-2xl mb-8 shadow-2xl shadow-purple-500/30 border border-purple-500/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg glow-purple">
                <Building2 className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1 font-display">Company Dashboard</h1>
                <p className="text-purple-100">Issue credentials, track analytics, and manage your organization</p>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-custom">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all whitespace-nowrap rounded-xl ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 border border-purple-400/50'
                      : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-purple-500/20 hover:border-purple-500/40'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="transition-all duration-300 ease-in-out"
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Analytics Tab Component
function AnalyticsTab() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 font-display">Analytics Dashboard</h1>
        <p className="text-gray-400">Track your credential issuance and organization performance</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="card group cursor-pointer hover:scale-105 hover:border-purple-500/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-300">Total Credentials Issued</h3>
            <FileCheck className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-4xl font-bold text-white font-display">23</p>
          <p className="text-sm text-green-400 mt-2">+15% from last month</p>
        </div>

        <div className="card group cursor-pointer hover:scale-105 hover:border-pink-500/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-300">Active Students</h3>
            <Users className="w-5 h-5 text-pink-400" />
          </div>
          <p className="text-4xl font-bold text-white font-display">18</p>
          <p className="text-sm text-green-400 mt-2">+8% from last month</p>
        </div>

        <div className="card group cursor-pointer hover:scale-105 hover:border-purple-500/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-300">Verification Requests</h3>
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-4xl font-bold text-white font-display">45</p>
          <p className="text-sm text-green-400 mt-2">+22% from last month</p>
        </div>

        <div className="card group cursor-pointer hover:scale-105 hover:border-pink-500/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-300">Success Rate</h3>
            <BarChart3 className="w-5 h-5 text-pink-400" />
          </div>
          <p className="text-4xl font-bold text-white font-display">98.5%</p>
          <p className="text-sm text-green-400 mt-2">+0.5% from last month</p>
        </div>
      </div>

      <div className="card hover:border-purple-500/50">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-purple-500/20">
            <div>
              <p className="font-medium text-white">Credential issued to John Smith</p>
              <p className="text-sm text-gray-400">Software Engineering Intern - 6 months</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-neon-500/20">
            <div>
              <p className="font-medium text-white">Credential verified for Sarah Johnson</p>
              <p className="text-sm text-gray-400">Data Science Intern - 3 months</p>
            </div>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-white">Credential issued to Mike Chen</p>
              <p className="text-sm text-gray-400">Marketing Intern - 4 months</p>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Organization Tab Component
function OrganizationTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 font-display">Organization Settings</h1>
        <p className="text-gray-400">Manage your organization profile and credential templates</p>
      </div>

      <div className="card hover:border-purple-500/50 mb-6">
        <h3 className="text-lg font-semibold text-white mb-6">Organization Profile</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Organization Name</label>
            <input
              type="text"
              defaultValue="TechCorp Solutions"
              className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
            <select className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white transition-all">
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
            <input
              type="url"
              defaultValue="https://techcorp.com"
              className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Contact Email</label>
            <input
              type="email"
              defaultValue="hr@techcorp.com"
              className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white transition-all"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
          <textarea
            rows={4}
            defaultValue="Leading technology company specializing in software development and digital solutions."
            className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white transition-all"
          />
        </div>
        <div className="mt-6">
          <button className="btn-primary">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// Profile Tab Component
function ProfileTab({ walletAddress }: { walletAddress: string }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 font-display">Profile Settings</h1>
        <p className="text-gray-400">Manage your personal account settings and preferences</p>
      </div>

      <div className="bg-white p-8 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Information</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Wallet Address</label>
            <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg font-mono text-sm">
              {walletAddress}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <input
                type="text"
                defaultValue="HR Manager"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              defaultValue="john.doe@techcorp.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}