import { Shield, GraduationCap, Building2, CheckCircle, Users, Globe, TrendingUp } from 'lucide-react';
import Footer from '../Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics';

interface BenefitsPageProps {
  onNavigate: (page: AppPage) => void;
}

export default function BenefitsPage({ onNavigate }: BenefitsPageProps) {
  const studentBenefits = [
    {
      icon: CheckCircle,
      title: 'Actually Own Your Stuff',
      description: 'Your credentials live in your wallet. You control them. Nobody can "accidentally delete" them or lose your file.',
      details: [
        'Complete ownership and control',
        'No dependency on third parties',
        'Portable across platforms',
        'Access anytime, anywhere'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Share in 2 Clicks',
      description: 'Send credentials to employers instantly. No more "I\'ll email it to you later" or digging through old files.',
      details: [
        'Instant sharing capabilities',
        'QR code generation',
        'Direct link sharing',
        'Social media integration'
      ]
    },
    {
      icon: Globe,
      title: 'Never Lose Them',
      description: 'They\'re on the blockchain forever. Company goes bankrupt? Doesn\'t matter. You still have your credentials.',
      details: [
        'Permanent blockchain storage',
        'No risk of data loss',
        'Always accessible',
        'Disaster-proof records'
      ]
    },
    {
      icon: Users,
      title: 'Global Recognition',
      description: 'Build a verifiable professional profile recognized worldwide by employers.',
      details: [
        'International recognition',
        'Cross-border validity',
        'Universal verification',
        'Professional credibility'
      ]
    }
  ];

  const organizationBenefits = [
    {
      icon: Building2,
      title: 'Stop Wasting Time',
      description: 'No more printing, signing, scanning, or mailing certificates. Just fill out a form and hit submit.',
      details: [
        'Digital-first approach',
        'Automated workflows',
        'Bulk processing capabilities',
        'Template management'
      ]
    },
    {
      icon: Shield,
      title: 'Catch Fake Ones',
      description: 'Nobody\'s lying on their resume anymore. One search tells you if it\'s real or fake.',
      details: [
        'Tamper-proof credentials',
        'Cryptographic security',
        'Immutable audit trail',
        'Zero forgery risk'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Look Professional',
      description: 'Blockchain credentials are way cooler than PDFs. Shows you actually care about doing things right.',
      details: [
        'Enhanced brand reputation',
        'Transparent processes',
        'Verifiable quality',
        'Industry leadership'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Cost Reduction',
      description: 'Reduce administrative costs and eliminate manual verification processes.',
      details: [
        'Lower operational costs',
        'Reduced paperwork',
        'Automated verification',
        'Efficient resource use'
      ]
    }
  ];

  const verifierBenefits = [
    {
      icon: CheckCircle,
      title: 'Instant Verification',
      description: 'Verify any credential authenticity in seconds with complete confidence.',
      details: [
        'Real-time verification',
        'Immediate results',
        'No waiting periods',
        '100% accuracy'
      ]
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access and verify credentials from anywhere in the world, 24/7.',
      details: [
        'Worldwide accessibility',
        'Always available',
        'No geographic restrictions',
        'Multi-language support'
      ]
    },
    {
      icon: Shield,
      title: 'Guaranteed Authenticity',
      description: 'Blockchain-backed verification ensures complete authenticity and trust.',
      details: [
        'Cryptographic proof',
        'Immutable records',
        'Zero false positives',
        'Complete trust'
      ]
    },
    {
      icon: Users,
      title: 'Comprehensive Data',
      description: 'Access detailed credential information including skills, duration, and more.',
      details: [
        'Complete credential details',
        'Skill verification',
        'Duration information',
        'Rich metadata'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-dark border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('landing')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 glow-purple">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text font-display">CollabChain</span>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('landing')} className="text-gray-400 hover:text-white font-medium transition-colors">Home</button>
            <button onClick={() => onNavigate('features')} className="text-gray-400 hover:text-white font-medium transition-colors">Features</button>
            <button onClick={() => onNavigate('how-it-works')} className="text-gray-400 hover:text-white font-medium transition-colors">How It Works</button>
            <button onClick={() => onNavigate('benefits')} className="text-purple-400 font-medium border-b-2 border-purple-400 pb-1">Benefits</button>
          </div>
          <button
            onClick={() => onNavigate('landing')}
            className="btn-primary"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto text-center relative z-10" style={{perspective: '1000px'}}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display transform hover:scale-105 transition-transform duration-500">
            Why people
            <span className="gradient-text"> actually like this</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Students, companies, employers—everyone wins. No BS, just real benefits that actually matter.
          </p>
        </div>
      </section>

      {/* Students Benefits */}
      <section className="py-24 px-6" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-cyber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotateY-12 transition-all duration-500 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 animate-float">
              <GraduationCap className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-display">For Students</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Take control of your professional credentials and accelerate your career
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {studentBenefits.map((benefit, index) => (
              <div key={index} className="group card-cyber p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-cyber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/30">
                    <benefit.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 animate-pulse" />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Benefits */}
      <section className="py-24 px-6 bg-dark-900/50" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-cyber-500/20 to-neon-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotateY-12 transition-all duration-500 shadow-lg shadow-cyber-500/20 hover:shadow-cyber-500/40 animate-float">
              <Building2 className="w-10 h-10 text-cyber-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-display">For Organizations</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Streamline credential issuance and enhance your organization's reputation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {organizationBenefits.map((benefit, index) => (
              <div key={index} className="group card-neon p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyber-500/20 to-neon-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyber-500/30">
                    <benefit.icon className="w-7 h-7 text-cyber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyber-400 rounded-full flex-shrink-0 animate-pulse" />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verifiers Benefits */}
      <section className="py-24 px-6" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-neon-500/20 to-cyber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotateY-12 transition-all duration-500 shadow-lg shadow-neon-500/20 hover:shadow-neon-500/40 animate-float">
              <CheckCircle className="w-10 h-10 text-neon-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-display">For Verifiers & Employers</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Make informed hiring decisions with instant, reliable credential verification
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {verifierBenefits.map((benefit, index) => (
              <div key={index} className="group card-cyber p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-neon-500/20 to-cyber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-neon-500/30">
                    <benefit.icon className="w-7 h-7 text-neon-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 font-display">{benefit.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-neon-400 rounded-full flex-shrink-0 animate-pulse" />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Impact */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyber-600 via-neon-600 to-cyber-600 relative overflow-hidden" style={{perspective: '1500px'}}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Ecosystem Impact</h2>
            <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
              Together, we're building a more transparent and trustworthy credential ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white group transform hover:scale-110 hover:-translate-y-4 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-white/20 group-hover:shadow-white/40 border border-white/20">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">Trust Network</h3>
              <p className="text-cyan-100">Building a global network of trusted credentials</p>
            </div>

            <div className="text-center text-white group transform hover:scale-110 hover:-translate-y-4 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-white/20 group-hover:shadow-white/40 border border-white/20">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">Economic Growth</h3>
              <p className="text-cyan-100">Reducing hiring costs and time-to-employment</p>
            </div>

            <div className="text-center text-white group transform hover:scale-110 hover:-translate-y-4 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-white/20 group-hover:shadow-white/40 border border-white/20">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display">Global Access</h3>
              <p className="text-cyan-100">Democratizing access to verified credentials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-dark-900/50">
        <div className="max-w-4xl mx-auto text-center" style={{perspective: '1000px'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display transform hover:scale-105 transition-transform duration-300">
            Ready to Experience These Benefits?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the credential revolution and unlock the benefits for your stakeholder group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('landing')}
              className="inline-flex items-center gap-2 px-8 py-4 btn-cyber transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-2xl"
            >
              <GraduationCap className="w-5 h-5" />
              For Students
            </button>
            <button
              onClick={() => onNavigate('landing')}
              className="inline-flex items-center gap-2 px-8 py-4 btn-neon transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-2xl"
            >
              <Building2 className="w-5 h-5" />
              For Organizations
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}