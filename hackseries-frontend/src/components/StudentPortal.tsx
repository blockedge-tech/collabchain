import { useState } from 'react';
import { Shield, LogOut, User, Award, Search, GraduationCap, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MyCredentials from './dashboard/MyCredentials';
import VerifyCredentials from './dashboard/VerifyCredentials';
import Footer from './Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics';
type TabType = 'credentials' | 'verify' | 'profile';

interface StudentPortalProps {
  walletAddress: string;
  onDisconnect: () => void;
  onNavigate: (page: AppPage) => void;
}

export default function StudentPortal({ walletAddress, onDisconnect, onNavigate }: StudentPortalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('credentials');

  const tabs = [
    { id: 'credentials' as TabType, label: 'My Credentials', icon: Award },
    { id: 'verify' as TabType, label: 'Verify Credentials', icon: Search },
    { id: 'profile' as TabType, label: 'Profile', icon: User },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'credentials':
        return <MyCredentials />;
      case 'verify':
        return <VerifyCredentials />;
      case 'profile':
        return <StudentProfileTab walletAddress={walletAddress} />;
      default:
        return <MyCredentials />;
    }
  };

  return (
    <div className="min-h-screen bg-animated-gradient flex flex-col">
      <header className="glass-dark border-b border-cyber-500/20 px-6 py-4 sticky top-0 z-40 shadow-xl shadow-cyber-500/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Shield className="w-6 h-6 text-cyber-400" />
              <span className="text-xl font-bold gradient-text font-display">CollabChain</span>
            </Link>
            <div className="px-3 py-1 bg-gradient-to-r from-cyber-500 to-cyber-600 text-white text-sm font-medium rounded-full shadow-lg shadow-cyber-500/30">
              Student Portal
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              to="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-cyber-400 hover:bg-dark-800/50 rounded-lg transition-all"
            >
              <Home className="w-4 h-4" />
              <span className="hidden md:inline">Home</span>
            </Link>
            <span className="text-sm text-cyber-300 font-mono bg-dark-800/50 px-3 py-2 rounded-lg border border-cyber-500/30">
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
          {/* Welcome Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-cyber-600 via-cyber-700 to-neon-600 text-white p-8 rounded-2xl mb-8 shadow-2xl shadow-cyber-500/30 border border-cyber-500/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg glow-cyan">
                <GraduationCap className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1 font-display">Welcome back, Student!</h1>
                <p className="text-cyan-100">Manage your internship credentials and verify others</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <p className="text-4xl font-bold mb-1 font-display">2</p>
                <p className="text-cyan-100 text-sm">Credentials Earned</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <p className="text-4xl font-bold mb-1 font-display">1</p>
                <p className="text-cyan-100 text-sm">Active Internship</p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <p className="text-4xl font-bold mb-1 font-display">100%</p>
                <p className="text-cyan-100 text-sm">Verification Rate</p>
              </motion.div>
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
                      ? 'bg-gradient-to-r from-cyber-500 to-cyber-600 text-white shadow-lg shadow-cyber-500/50 border border-cyber-400/50'
                      : 'bg-dark-800/50 text-gray-300 hover:text-white hover:bg-dark-700/50 border border-cyber-500/20 hover:border-cyber-500/40'
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

// Student Profile Tab Component
function StudentProfileTab({ walletAddress }: { walletAddress: string }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 font-display">Student Profile</h1>
        <p className="text-gray-400">Manage your personal information and preferences</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="md:col-span-2">
          <div className="card-cyber">
            <h3 className="text-lg font-semibold text-white mb-6">Personal Information</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Sarah Johnson"
                    className="w-full px-4 py-2 bg-dark-900/50 border border-cyber-500/30 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-cyber-500 text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="sarah.johnson@university.edu"
                    className="w-full px-4 py-2 bg-dark-900/50 border border-cyber-500/30 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-cyber-500 text-white transition-all"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">University</label>
                  <input
                    type="text"
                    defaultValue="Tech University"
                    className="w-full px-4 py-2 bg-dark-900/50 border border-cyber-500/30 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-cyber-500 text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Major</label>
                  <input
                    type="text"
                    defaultValue="Computer Science"
                    className="w-full px-4 py-2 bg-dark-900/50 border border-cyber-500/30 rounded-lg focus:ring-2 focus:ring-cyber-500 focus:border-cyber-500 text-white transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Wallet Address</label>
                <div className="px-4 py-2 bg-dark-900/50 border border-cyber-500/30 rounded-lg font-mono text-sm text-cyber-300">
                  {walletAddress}
                </div>
              </div>
              <div className="mt-6">
                <button className="btn-cyber">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          <div className="card-cyber">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total Credentials</span>
                <span className="font-semibold text-cyber-400 text-xl">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Completed Internships</span>
                <span className="font-semibold text-cyber-400 text-xl">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Current Status</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Active</span>
              </div>
            </div>
          </div>

          <div className="card-cyber">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyber-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">New credential received</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Profile updated</p>
                  <p className="text-xs text-gray-400">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-neon-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Credential verified</p>
                  <p className="text-xs text-gray-400">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}