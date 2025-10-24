import { Shield, ArrowRight, FileCheck, Lock, Search } from 'lucide-react';
import Footer from '../Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics';

interface HowItWorksPageProps {
  onNavigate: (page: AppPage) => void;
}

export default function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const steps = [
    {
      number: 1,
      icon: FileCheck,
      title: 'Company Issues It',
      description: 'Company finishes checking your work, fills out a quick form, hits submit. Credential goes straight to your wallet. Done.',
      details: [
        'Complete internship assessment',
        'Fill credential details form',
        'Submit to blockchain network',
        'Automatic wallet notification'
      ],
      actor: 'Organization'
    },
    {
      number: 2,
      icon: Lock,
      title: 'Gets Saved Forever',
      description: 'Everything gets locked into the blockchain. Like, permanently. Nobody can change it, delete it, or mess with it. Ever.',
      details: [
        'Cryptographic hash generation',
        'Permanent blockchain storage',
        'Immutable record creation',
        'Tamper-proof verification'
      ],
      actor: 'Blockchain Network'
    },
    {
      number: 3,
      icon: Search,
      title: 'Anyone Can Check It',
      description: 'Need to verify it? Just type in the ID. Takes 2 seconds and tells you if it\'s legit or fake. Simple as that.',
      details: [
        'Enter credential ID',
        'Query blockchain network',
        'Receive verification result',
        'View credential details'
      ],
      actor: 'Verifier/Employer'
    }
  ];

  const detailedFlow = [
    {
      phase: 'Credential Creation',
      steps: [
        'Organization completes internship program with student',
        'HR/Manager accesses Collabchain company portal',
        'Fills out comprehensive credential form with internship details',
        'Reviews and submits credential to Algorand blockchain',
        'Student receives notification of new credential'
      ]
    },
    {
      phase: 'Blockchain Processing',
      steps: [
        'Smart contract validates credential data',
        'Cryptographic hash generated for credential',
        'Transaction broadcast to Algorand network',
        'Network consensus validates transaction',
        'Credential permanently stored on blockchain'
      ]
    },
    {
      phase: 'Verification Process',
      steps: [
        'Verifier accesses Collabchain platform',
        'Enters credential ID or student wallet address',
        'System queries Algorand blockchain',
        'Credential data retrieved and validated',
        'Verification result displayed instantly'
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center glow-purple">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text font-display">CollabChain</span>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('landing')} className="text-gray-400 hover:text-white font-medium transition-colors">Home</button>
            <button onClick={() => onNavigate('features')} className="text-gray-400 hover:text-white font-medium transition-colors">Features</button>
            <button onClick={() => onNavigate('how-it-works')} className="text-purple-400 font-medium border-b-2 border-purple-400 pb-1">How It Works</button>
            <button onClick={() => onNavigate('benefits')} className="text-gray-400 hover:text-white font-medium transition-colors">Benefits</button>
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
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
            How this
            <span className="gradient-text"> actually</span>
            <br />works
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            It's actually pretty simple. Three steps. That's it. Here's how we do it.
          </p>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Three Simple Steps</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Issue it. Save it. Verify it. Done.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-purple-500/30 z-10">
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-purple-400" />
                  </div>
                )}

                <div className="card group-hover:scale-105 transition-all hover:border-purple-500/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-display">{step.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{step.description}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-purple-400 mb-3">Key Actions:</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full inline-block border border-purple-500/30">
                    {step.actor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Flow */}
      <section className="py-24 px-6 bg-dark-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Detailed Process Flow</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive look at every step in the credential lifecycle
            </p>
          </div>

          <div className="space-y-12">
            {detailedFlow.map((phase, index) => (
              <div key={index} className="card-neon">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-display">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyber-500 to-neon-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {phase.phase}
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {phase.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start gap-3 p-4 bg-dark-900/50 rounded-lg border border-neon-500/20 hover:border-neon-500/40 transition-colors">
                      <div className="w-6 h-6 bg-neon-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-neon-400">{stepIndex + 1}</span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Why This Process Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The advantages of our blockchain-based approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center card-cyber hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Verification</h3>
              <p className="text-gray-400 text-sm">Verify credentials in seconds, not days</p>
            </div>

            <div className="text-center card-neon hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-cyber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-cyber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tamper-Proof</h3>
              <p className="text-gray-400 text-sm">Immutable records prevent fraud</p>
            </div>

            <div className="text-center card-cyber hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-neon-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-neon-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Easy Integration</h3>
              <p className="text-gray-400 text-sm">Simple process for all stakeholders</p>
            </div>

            <div className="text-center card-neon hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-cyber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-cyber-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
              <p className="text-gray-400 text-sm">Low fees and automated processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Wanna give it a shot?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Seriously, just try it. See if you like it.
          </p>
          <button
            onClick={() => onNavigate('landing')}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-purple-600 font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl rounded-xl"
          >
            Let's Go
            <Search className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}