import { Shield, CheckCircle, FileCheck, Award, ArrowRight, TrendingUp, Users, Building2, Lock, Zap, Globe, Code, BarChart3, Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import Footer from './Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics';
type UserType = 'company' | 'student' | null;

interface LandingPageProps {
  onConnect: (address: string, userType: UserType) => void;
  onNavigate: (page: AppPage) => void;
}

export default function LandingPage({ onConnect, onNavigate }: LandingPageProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [showUserTypeModal, setShowUserTypeModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [credentialId, setCredentialId] = useState('');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const handleConnectWallet = async () => {
    setShowUserTypeModal(true);
  };

  const handleUserTypeSelect = (userType: UserType) => {
    setIsConnecting(true);
    setShowUserTypeModal(false);
    setTimeout(() => {
      const dummyAddress = 'ALGO' + Math.random().toString(36).substring(2, 15).toUpperCase();
      onConnect(dummyAddress, userType);
      setIsConnecting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Collabchain</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('landing')} className="text-gray-600 hover:text-gray-900 font-medium">Home</button>
            <button onClick={() => onNavigate('features')} className="text-gray-600 hover:text-gray-900 font-medium">Features</button>
            <button onClick={() => onNavigate('how-it-works')} className="text-gray-600 hover:text-gray-900 font-medium">How It Works</button>
            <button onClick={() => onNavigate('benefits')} className="text-gray-600 hover:text-gray-900 font-medium">Benefits</button>
            <button onClick={() => onNavigate('statistics')} className="text-gray-600 hover:text-gray-900 font-medium">Statistics</button>
          </div>
          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="px-6 py-2.5 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </button>
        </div>
      </nav>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-semibold">Blockchain-Powered Verification</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Verify Internship Credentials with Blockchain Technology
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              A decentralized platform built on Algorand that enables instant verification of internship credentials, eliminating fraud and ensuring authenticity for students and organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleConnectWallet}
                disabled={isConnecting}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isConnecting ? 'Connecting...' : 'Get Started'}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowVerifyModal(true)}
                className="px-8 py-4 bg-white text-gray-900 font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                Verify Credentials
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">5,000+</p>
              <p className="text-gray-600">Credentials Issued</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">250+</p>
              <p className="text-gray-600">Organizations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">99.9%</p>
              <p className="text-gray-600">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900 mb-2">2.3s</p>
              <p className="text-gray-600">Avg Verification</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for secure, transparent, and efficient credential management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Instant Verification',
                description: 'Verify any credential in seconds using blockchain technology. No manual checks or waiting periods required.'
              },
              {
                icon: Lock,
                title: 'Immutable Records',
                description: 'All credentials are permanently stored on Algorand blockchain, making them tamper-proof and always accessible.'
              },
              {
                icon: FileCheck,
                title: 'Easy Issuance',
                description: 'Organizations can issue credentials directly to students with a simple, streamlined process.'
              },
              {
                icon: Globe,
                title: 'Global Access',
                description: 'Access and verify credentials from anywhere in the world, 24/7, with just an internet connection.'
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Built on Algorand for near-instant transaction finality and low fees for all operations.'
              },
              {
                icon: Users,
                title: 'Multi-Party Trust',
                description: 'Students, organizations, and verifiers all benefit from transparent, trustless verification.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple three-step process for secure credential management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Issue Credential</h3>
              <p className="text-gray-600 leading-relaxed">
                Organizations complete an internship and issue a verified credential directly to the student's wallet address on the blockchain.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Store on Blockchain</h3>
              <p className="text-gray-600 leading-relaxed">
                The credential is permanently recorded on Algorand blockchain with all relevant details, creating an immutable record.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Verification</h3>
              <p className="text-gray-600 leading-relaxed">
                Anyone can verify the credential's authenticity by searching the credential ID, receiving instant confirmation from the blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">For Students</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Own Your Credentials</h3>
                    <p className="text-gray-600">Keep all your internship credentials in one secure wallet that you control.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Share Instantly</h3>
                    <p className="text-gray-600">Share verifiable credentials with potential employers in seconds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Permanent Access</h3>
                    <p className="text-gray-600">Your credentials remain accessible forever on the blockchain.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">For Organizations</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Streamlined Process</h3>
                    <p className="text-gray-600">Issue credentials quickly without paper certificates or manual processes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Fraud Prevention</h3>
                    <p className="text-gray-600">Eliminate fake credentials with blockchain verification.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Build Trust</h3>
                    <p className="text-gray-600">Enhance your reputation with transparent, verifiable credentials.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built on Algorand</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leveraging cutting-edge blockchain technology for maximum security and performance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 border border-gray-200 text-center">
              <Code className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">4.5s</p>
              <p className="text-gray-600">Block Time</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 text-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">$0.001</p>
              <p className="text-gray-600">Transaction Fee</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 text-center">
              <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">6,000+</p>
              <p className="text-gray-600">TPS</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 text-center">
              <Lock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">100%</p>
              <p className="text-gray-600">Secure</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Connect your PeraWallet and start verifying or issuing credentials today.
          </p>
          <button
            onClick={handleConnectWallet}
            disabled={isConnecting}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-blue-600 font-bold text-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isConnecting ? 'Connecting to PeraWallet...' : 'Connect Wallet'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      {/* User Type Selection Modal */}
      {showUserTypeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Choose Your Portal</h3>
            <p className="text-gray-600 text-center mb-8">Select how you want to use Collabchain</p>
            
            <div className="space-y-4">
              <button
                onClick={() => handleUserTypeSelect('company')}
                className="w-full p-6 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Company / Organization</h4>
                    <p className="text-sm text-gray-600">Issue credentials to students</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleUserTypeSelect('student')}
                className="w-full p-6 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Student</h4>
                    <p className="text-sm text-gray-600">View and verify credentials</p>
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => setShowUserTypeModal(false)}
              className="w-full mt-6 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Verify Credentials Modal */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Verify Credentials</h3>
            <p className="text-gray-600 mb-6">Enter the credential ID to verify its authenticity</p>
            <input
              type="text"
              placeholder="Enter credential ID"
              value={credentialId}
              onChange={(e) => setCredentialId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
            />
            {verificationResult && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">{verificationResult}</p>
              </div>
            )}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  if (credentialId.trim()) {
                    setVerificationResult('✓ Credential verified successfully! Issued by TechCorp Inc. on 2025-10-15');
                  } else {
                    setVerificationResult('Please enter a credential ID');
                  }
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Verify
              </button>
              <button
                onClick={() => {
                  setShowVerifyModal(false);
                  setCredentialId('');
                  setVerificationResult(null);
                }}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
