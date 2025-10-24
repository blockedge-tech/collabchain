import { useState } from 'react';
import { Shield, LogOut, User, FileCheck, Award, Search } from 'lucide-react';
import VerifyCredentials from './dashboard/VerifyCredentials';
import IssuePortal from './dashboard/IssuePortal';
import MyCredentials from './dashboard/MyCredentials';
import ProfilePage from './dashboard/ProfilePage';

interface DashboardProps {
  walletAddress: string;
  onDisconnect: () => void;
}

type TabType = 'verify' | 'issue' | 'credentials' | 'profile';

export default function Dashboard({ walletAddress, onDisconnect }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('verify');

  const tabs = [
    { id: 'verify' as TabType, label: 'Verify', icon: Search },
    { id: 'issue' as TabType, label: 'Issue Portal', icon: FileCheck },
    { id: 'credentials' as TabType, label: 'My Credentials', icon: Award },
    { id: 'profile' as TabType, label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Collabchain</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gray-100 border border-gray-200">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-700 font-mono">{walletAddress}</span>
              </div>
              <button
                onClick={onDisconnect}
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden md:inline">Disconnect</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 border-b border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="transition-all duration-300 ease-in-out">
          {activeTab === 'verify' && <VerifyCredentials />}
          {activeTab === 'issue' && <IssuePortal />}
          {activeTab === 'credentials' && <MyCredentials />}
          {activeTab === 'profile' && <ProfilePage walletAddress={walletAddress} />}
        </div>
      </div>
    </div>
  );
}
