import { useState } from 'react';
import { Shield, Search, CheckCircle, XCircle, Clock, FileText, User, Building2, Calendar } from 'lucide-react';
import Footer from '../Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics' | 'verify-credentials';

interface VerifyCredentialsPageProps {
  onNavigate: (page: AppPage) => void;
}

interface CredentialData {
  id: string;
  studentName: string;
  studentWallet: string;
  organizationName: string;
  position: string;
  startDate: string;
  endDate: string;
  skills: string[];
  verificationStatus: 'verified' | 'invalid';
  issueDate: string;
  blockchainTxId: string;
}

export default function VerifyCredentialsPage({ onNavigate }: VerifyCredentialsPageProps) {
  const [credentialId, setCredentialId] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<CredentialData | null>(null);
  const [error, setError] = useState('');
  const [searchType, setSearchType] = useState<'id' | 'wallet'>('id');

  // Mock verification function - replace with actual blockchain query
  const handleVerify = async () => {
    setIsVerifying(true);
    setError('');
    setVerificationResult(null);

    // Simulate API call
    setTimeout(() => {
      if (searchType === 'id' && credentialId.length > 0) {
        // Mock successful verification
        setVerificationResult({
          id: credentialId,
          studentName: 'Alex Johnson',
          studentWallet: 'ALGO7X...9KL2',
          organizationName: 'Tech Corp Inc.',
          position: 'Software Engineering Intern',
          startDate: '2024-06-01',
          endDate: '2024-08-31',
          skills: ['React', 'TypeScript', 'Node.js', 'Algorand Smart Contracts'],
          verificationStatus: 'verified',
          issueDate: '2024-09-01',
          blockchainTxId: 'TXN123456789ABCDEF'
        });
      } else if (searchType === 'wallet' && walletAddress.length > 0) {
        // Mock successful verification by wallet
        setVerificationResult({
          id: 'CRED-2024-001',
          studentName: 'Sarah Williams',
          studentWallet: walletAddress,
          organizationName: 'StartupXYZ',
          position: 'Marketing Intern',
          startDate: '2024-05-15',
          endDate: '2024-07-30',
          skills: ['Digital Marketing', 'Content Strategy', 'SEO', 'Analytics'],
          verificationStatus: 'verified',
          issueDate: '2024-08-05',
          blockchainTxId: 'TXN987654321FEDCBA'
        });
      } else {
        setError('Please enter a valid credential ID or wallet address');
      }
      setIsVerifying(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-dark border-b border-cyber-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('landing')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-cyber-500 to-neon-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text font-display">Collabchain</span>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('landing')} className="text-gray-400 hover:text-white font-medium transition-colors">Home</button>
            <button onClick={() => onNavigate('features')} className="text-gray-400 hover:text-white font-medium transition-colors">Features</button>
            <button onClick={() => onNavigate('how-it-works')} className="text-gray-400 hover:text-white font-medium transition-colors">How It Works</button>
            <button onClick={() => onNavigate('benefits')} className="text-gray-400 hover:text-white font-medium transition-colors">Benefits</button>
            <button onClick={() => onNavigate('statistics')} className="text-gray-400 hover:text-white font-medium transition-colors">Statistics</button>
          </div>
          <button
            onClick={() => onNavigate('landing')}
            className="btn-cyber"
          >
            Go Back
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-cyber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
            <Search className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            Verify <span className="gradient-text">Credentials</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Instantly verify any credential on the Algorand blockchain. Enter a credential ID or wallet address to get started.
          </p>
        </div>
      </section>

      {/* Verification Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Search Type Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => {
                setSearchType('id');
                setWalletAddress('');
                setVerificationResult(null);
                setError('');
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                searchType === 'id'
                  ? 'bg-gradient-to-r from-cyber-500 to-neon-500 text-white shadow-lg'
                  : 'bg-dark-800 text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              By Credential ID
            </button>
            <button
              onClick={() => {
                setSearchType('wallet');
                setCredentialId('');
                setVerificationResult(null);
                setError('');
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                searchType === 'wallet'
                  ? 'bg-gradient-to-r from-cyber-500 to-neon-500 text-white shadow-lg'
                  : 'bg-dark-800 text-gray-400 hover:text-white'
              }`}
            >
              <User className="w-5 h-5 inline mr-2" />
              By Wallet Address
            </button>
          </div>

          {/* Verification Card */}
          <div className="card-cyber p-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-display">
              {searchType === 'id' ? 'Enter Credential ID' : 'Enter Student Wallet Address'}
            </h2>

            <div className="space-y-4">
              {searchType === 'id' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Credential ID</label>
                  <input
                    type="text"
                    value={credentialId}
                    onChange={(e) => setCredentialId(e.target.value)}
                    placeholder="e.g., CRED-2024-001"
                    className="w-full px-4 py-3 bg-dark-800 border border-cyber-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyber-400 focus:outline-none transition-colors"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Wallet Address</label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="e.g., ALGO7X...9KL2"
                    className="w-full px-4 py-3 bg-dark-800 border border-cyber-500/30 rounded-lg text-white placeholder-gray-500 focus:border-cyber-400 focus:outline-none transition-colors"
                  />
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">{error}</span>
                </div>
              )}

              <button
                onClick={handleVerify}
                disabled={isVerifying || (searchType === 'id' ? !credentialId : !walletAddress)}
                className="w-full btn-cyber py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isVerifying ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Verify Credential
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Verification Result */}
          {verificationResult && (
            <div className="mt-8 card-neon p-8 animate-fadeIn">
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white font-display">Verification Result</h3>
                {verificationResult.verificationStatus === 'verified' ? (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Verified ✓</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-semibold">Invalid</span>
                  </div>
                )}
              </div>

              {/* Credential Details Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Student Name</p>
                    <p className="text-white font-semibold">{verificationResult.studentName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Wallet Address</p>
                    <p className="text-cyan-400 font-mono text-sm">{verificationResult.studentWallet}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Organization</p>
                    <p className="text-white font-semibold flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-neon-400" />
                      {verificationResult.organizationName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Position</p>
                    <p className="text-white font-semibold">{verificationResult.position}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Internship Duration</p>
                    <p className="text-white font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-cyber-400" />
                      {verificationResult.startDate} → {verificationResult.endDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Credential ID</p>
                    <p className="text-white font-mono text-sm">{verificationResult.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Issue Date</p>
                    <p className="text-white">{verificationResult.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Blockchain Transaction</p>
                    <p className="text-neon-400 font-mono text-sm truncate">{verificationResult.blockchainTxId}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-6 pt-6 border-t border-neon-500/20">
                <p className="text-sm text-gray-400 mb-3">Skills Acquired</p>
                <div className="flex flex-wrap gap-2">
                  {verificationResult.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-500/20 text-cyber-300 rounded-full text-sm border border-cyber-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blockchain Proof */}
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  This credential is permanently recorded on the Algorand blockchain and cannot be tampered with.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-display">How Verification Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-cyber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Search</h3>
              <p className="text-gray-400">Enter a credential ID or student wallet address</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-neon-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Query Blockchain</h3>
              <p className="text-gray-400">System queries the Algorand blockchain instantly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Get Results</h3>
              <p className="text-gray-400">Receive complete credential details and verification status</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
