import { Shield, CheckCircle, Lock, FileCheck, Globe, Zap, Users } from 'lucide-react';
import Footer from '../Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics';

interface FeaturesPageProps {
  onNavigate: (page: AppPage) => void;
}

export default function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const features = [
    {
      icon: CheckCircle,
      title: 'Crazy Fast Verification',
      description: 'Seriously. Type in a credential ID and get an answer in like 2 seconds. No waiting, no phone calls, no "let me check and get back to you."',
      benefits: [
        'Literally instant results',
        'Works while you watch',
        'No paperwork needed',
        'Just type and go'
      ]
    },
    {
      icon: Lock,
      title: 'Can\'t Be Faked',
      description: 'Once it\'s on the blockchain, it\'s there forever. Nobody can edit it, delete it, or pretend it never existed. Not even us.',
      benefits: [
        'Permanent forever',
        'Impossible to fake',
        'Always there when you need it',
        'Math-level secure'
      ]
    },
    {
      icon: FileCheck,
      title: 'Super Easy to Issue',
      description: 'Fill out a form, click submit. That\'s it. No complicated setup, no training videos, no "please contact your admin."',
      benefits: [
        'Actually simple',
        'Issue 1 or 1000 at once',
        'Save templates you use',
        'Everything\'s automatic'
      ]
    },
    {
      icon: Globe,
      title: 'Works Everywhere',
      description: 'Got wifi? You\'re good. Works on your phone in Tokyo, laptop in New York, or tablet in London. Anytime, anywhere.',
      benefits: [
        'Literally anywhere',
        'Never closes',
        'No borders or limits',
        'Speaks your language'
      ]
    },
    {
      icon: Zap,
      title: 'Ridiculously Fast',
      description: 'Algorand blockchain is stupid quick. We\'re talking seconds, not minutes. And it costs basically nothing.',
      benefits: [
        'Done in 4.5 seconds',
        'Costs like a penny',
        'Handles tons at once',
        'Doesn\'t waste energy'
      ]
    },
    {
      icon: Users,
      title: 'Everyone Wins',
      description: 'Students own their stuff, companies stop wasting time on paperwork, employers verify in 2 clicks. Literally everyone benefits.',
      benefits: [
        'No trust needed',
        'Works for everyone',
        'Totally transparent',
        'No middlemen required'
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
            <button onClick={() => onNavigate('features')} className="text-purple-400 font-medium border-b-2 border-purple-400 pb-1">Features</button>
            <button onClick={() => onNavigate('how-it-works')} className="text-gray-400 hover:text-white font-medium transition-colors">How It Works</button>
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
            Everything you need.
            <span className="gradient-text"> Nothing you don't.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We built exactly what we\'d want to use. Fast verification, zero hassle, impossible to fake. That\'s pretty much it.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-6 card hover:scale-[1.02] transition-transform hover:border-purple-500/50">
                  <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-purple-500/20' : 'bg-pink-500/20'} rounded-xl flex items-center justify-center flex-shrink-0 transition-colors`}>
                    <feature.icon className={`w-8 h-8 ${index % 2 === 0 ? 'text-purple-400' : 'text-pink-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">{feature.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 ${index % 2 === 0 ? 'bg-purple-400' : 'bg-pink-400'} rounded-full flex-shrink-0`} />
                          <span className="text-gray-300">{benefit}</span>
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

      {/* Technical Specifications */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">The nerdy stuff <span className="gradient-text">(if you care)</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on Algorand because it's actually fast and doesn't cost a fortune
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="card text-center hover:scale-105 transition-transform hover:border-purple-500/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-2 font-display">4.5s</p>
              <p className="text-gray-400">Block Time</p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform hover:border-pink-500/50">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-pink-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-2 font-display">6,000+</p>
              <p className="text-gray-400">Per Second</p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform hover:border-purple-500/50">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-2 font-display">100%</p>
              <p className="text-gray-400">Secure</p>
            </div>

            <div className="card text-center hover:scale-105 transition-transform hover:border-pink-500/50">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-pink-400" />
              </div>
              <p className="text-3xl font-bold text-white mb-2 font-display">$0.001</p>
              <p className="text-gray-400">Fee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
            Wanna try it out?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Seriously, it's free to test. See if you like it.
          </p>
          <button
            onClick={() => onNavigate('landing')}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-purple-600 font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl rounded-xl"
          >
            Let's Go
            <Zap className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}