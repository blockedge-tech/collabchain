import { Building2, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoleSelectionProps {
  onSelectRole: (role: 'student' | 'company') => void;
  walletAddress: string;
}

export default function RoleSelection({ onSelectRole, walletAddress }: RoleSelectionProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-8 md:p-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Choose Your Portal
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Select how you'd like to use CollabChain
          </p>
          <div className="inline-block bg-green-50 text-green-800 px-4 py-2 rounded-full text-sm font-medium mt-3">
            Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Portal Card */}
          <motion.button
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectRole('student')}
            className="group relative bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-blue-400 rounded-2xl p-8 text-left transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap className="w-24 h-24 text-blue-600" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Student Portal
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access your credentials, view your career passport, and verify your achievements.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>View My Credentials</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Verify Credentials</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Manage Profile</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                <span>Enter Student Portal</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.button>

          {/* Company Portal Card */}
          <motion.button
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectRole('company')}
            className="group relative bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 hover:border-purple-400 rounded-2xl p-8 text-left transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Building2 className="w-24 h-24 text-purple-600" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Company Portal
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Issue credentials to students, verify existing credentials, and manage your organization.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Issue Credentials</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Analytics Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Organization Settings</span>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-6">
                <p className="text-xs text-yellow-800 flex items-center gap-2">
                  <span className="text-sm">🔒</span>
                  <span>Verification ID required</span>
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                <span>Enter Company Portal</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </motion.button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your selection will determine which features and dashboard you can access
          </p>
        </div>
      </motion.div>
    </div>
  );
}
