import { Building2, Shield, X, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface CompanyVerificationProps {
  onVerify: (verificationId: string) => void;
  onCancel: () => void;
  walletAddress: string;
}

export default function CompanyVerification({ onVerify, onCancel, walletAddress }: CompanyVerificationProps) {
  const [verificationId, setVerificationId] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!verificationId.trim()) {
      setError('Please enter a verification ID');
      return;
    }

    // Validate verification ID format (example: must be at least 8 characters)
    if (verificationId.length < 8) {
      setError('Verification ID must be at least 8 characters');
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification (in real app, this would call your backend)
    setTimeout(() => {
      // For demo purposes, accept any ID with length >= 8
      // In production, verify against your database
      onVerify(verificationId);
      setIsVerifying(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
      >
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-10 h-10 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Company Verification
          </h2>
          <p className="text-gray-600">
            Please enter your company verification ID to access the company portal
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-6">
          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-purple-900">Connected Wallet</p>
              <p className="text-xs text-purple-700 font-mono break-all">
                {walletAddress}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Verification ID *
            </label>
            <input
              type="text"
              value={verificationId}
              onChange={(e) => {
                setVerificationId(e.target.value);
                setError('');
              }}
              placeholder="Enter your verification ID"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              disabled={isVerifying}
            />
            <p className="text-xs text-gray-500 mt-1">
              Minimum 8 characters required
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2"
            >
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </motion.div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isVerifying}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isVerifying}
            >
              {isVerifying ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                'Verify & Continue'
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Don't have a verification ID?{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
              Contact Support
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
