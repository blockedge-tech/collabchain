import { Shield, TrendingUp, Users, Building2, Award, BarChart3, Globe, Zap } from 'lucide-react';
import Footer from '../Footer';

type AppPage = 'landing' | 'company' | 'student' | 'features' | 'how-it-works' | 'benefits' | 'statistics';

interface StatisticsPageProps {
  onNavigate: (page: AppPage) => void;
}

export default function StatisticsPage({ onNavigate }: StatisticsPageProps) {
  const platformStats = [
    {
      icon: Award,
      value: '15,847',
      label: 'Credentials Issued',
      change: '+23%',
      period: 'Last month'
    },
    {
      icon: Users,
      value: '8,932',
      label: 'Active Students',
      change: '+18%',
      period: 'Last month'
    },
    {
      icon: Building2,
      value: '342',
      label: 'Partner Organizations',
      change: '+15%',
      period: 'Last month'
    },
    {
      icon: BarChart3,
      value: '45,283',
      label: 'Verifications Made',
      change: '+31%',
      period: 'Last month'
    }
  ];

  const industryBreakdown = [
    { name: 'Technology', count: 8940, percentage: 56.4 },
    { name: 'Finance', count: 2847, percentage: 18.0 },
    { name: 'Healthcare', count: 1926, percentage: 12.1 },
    { name: 'Education', count: 1203, percentage: 7.6 },
    { name: 'Manufacturing', count: 634, percentage: 4.0 },
    { name: 'Other', count: 297, percentage: 1.9 }
  ];

  const geographicData = [
    { region: 'North America', credentials: 6841, organizations: 156 },
    { region: 'Europe', credentials: 4293, organizations: 98 },
    { region: 'Asia Pacific', credentials: 2967, organizations: 67 },
    { region: 'Latin America', credentials: 1204, organizations: 15 },
    { region: 'Middle East & Africa', credentials: 542, organizations: 6 }
  ];

  const performanceMetrics = [
    {
      metric: 'Average Verification Time',
      value: '2.3',
      unit: 'seconds',
      benchmark: 'Industry: 2-3 days'
    },
    {
      metric: 'System Uptime',
      value: '99.97',
      unit: '%',
      benchmark: 'Target: 99.9%'
    },
    {
      metric: 'Transaction Cost',
      value: '$0.001',
      unit: 'per credential',
      benchmark: 'Traditional: $15-25'
    },
    {
      metric: 'Fraud Prevention',
      value: '100',
      unit: '%',
      benchmark: 'Paper-based: 12% fraud rate'
    }
  ];

  const monthlyGrowth = [
    { month: 'Jan', credentials: 892, verifications: 2341 },
    { month: 'Feb', credentials: 1205, verifications: 3127 },
    { month: 'Mar', credentials: 1543, verifications: 4032 },
    { month: 'Apr', credentials: 1821, verifications: 4875 },
    { month: 'May', credentials: 2134, verifications: 5692 },
    { month: 'Jun', credentials: 2456, verifications: 6483 },
    { month: 'Jul', credentials: 2789, verifications: 7291 },
    { month: 'Aug', credentials: 3102, verifications: 8154 }
  ];

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
            <button onClick={() => onNavigate('statistics')} className="text-neon-400 font-medium border-b-2 border-neon-400 pb-1">Statistics</button>
          </div>
          <button
            onClick={() => onNavigate('landing')}
            className="btn-neon"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto text-center relative z-10" style={{perspective: '1000px'}}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display transform hover:scale-105 transition-transform duration-500">
            Platform
            <span className="gradient-text"> Statistics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Real-time insights into Collabchain's growth, performance, and global impact 
            on credential verification and educational technology.
          </p>
        </div>
      </section>

      {/* Key Platform Statistics */}
      <section className="py-24 px-6" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Platform Overview</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Key metrics showing Collabchain's growth and adoption
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformStats.map((stat, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'card-cyber' : 'card-neon'} p-8 group transform hover:scale-110 hover:-translate-y-4 transition-all duration-500`} style={{transformStyle: 'preserve-3d'}}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 ${index % 2 === 0 ? 'bg-cyber-500/20' : 'bg-neon-500/20'} rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg ${index % 2 === 0 ? 'shadow-cyber-500/30' : 'shadow-neon-500/30'}`}>
                    <stat.icon className={`w-7 h-7 ${index % 2 === 0 ? 'text-cyber-400' : 'text-neon-400'}`} />
                  </div>
                  <div className="text-right">
                    <span className="text-green-400 text-sm font-semibold animate-pulse">{stat.change}</span>
                  </div>
                </div>
                <p className="text-5xl font-bold text-white mb-2 font-display">{stat.value}</p>
                <p className="text-gray-300 font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-24 px-6 bg-dark-900/50" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Industry Distribution</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Breakdown of credentials by industry sector
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {industryBreakdown.map((industry, index) => (
                <div key={index} className="card-cyber transform hover:scale-105 hover:-translate-y-1 transition-all duration-300" style={{transformStyle: 'preserve-3d'}}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white">{industry.name}</h3>
                    <span className="text-2xl font-bold text-cyber-400">{industry.count.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-dark-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-cyber-500 to-neon-500 h-3 rounded-full transition-all duration-1000 shadow-lg shadow-cyber-500/50"
                        style={{ width: `${industry.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-300">{industry.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-neon transform hover:scale-105 transition-all duration-300" style={{transformStyle: 'preserve-3d'}}>
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Key Insights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="font-semibold text-white">Technology Dominance</p>
                    <p className="text-gray-400 text-sm">Technology sector leads with 56.4% of all credentials</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="font-semibold text-white">Growing Finance Sector</p>
                    <p className="text-gray-400 text-sm">Finance internships show 25% growth month-over-month</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-neon-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="font-semibold text-white">Healthcare Expansion</p>
                    <p className="text-gray-400 text-sm">Healthcare credentials increasing with digital transformation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="py-24 px-6" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Global Reach</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Collabchain's worldwide presence and impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {geographicData.map((region, index) => (
              <div key={index} className="card-neon transform hover:scale-110 hover:-translate-y-4 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-neon-500/20 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-neon-500/30">
                    <Globe className="w-6 h-6 text-neon-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{region.region}</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Credentials Issued</p>
                    <p className="text-4xl font-bold text-neon-400 font-display">{region.credentials.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Partner Organizations</p>
                    <p className="text-2xl font-semibold text-white">{region.organizations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 px-6 bg-dark-900/50" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Performance Excellence</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              How Collabchain outperforms traditional credential systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="card-cyber text-center transform hover:scale-110 hover:-translate-y-4 transition-all duration-500" style={{transformStyle: 'preserve-3d'}}>
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-all duration-300 shadow-lg shadow-green-500/30">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white font-display">{metric.value}</span>
                  <span className="text-lg text-gray-300 ml-1">{metric.unit}</span>
                </div>
                <p className="font-semibold text-white mb-2">{metric.metric}</p>
                <p className="text-sm text-gray-400">{metric.benchmark}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Trends */}
      <section className="py-24 px-6" style={{perspective: '1500px'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-display">Growth Trajectory</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Monthly growth in credentials issued and verifications made
            </p>
          </div>

          <div className="card-neon transform hover:scale-105 transition-all duration-300" style={{transformStyle: 'preserve-3d'}}>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyber-400" />
                  Monthly Credential Issuance
                </h3>
                <div className="space-y-3">
                  {monthlyGrowth.slice(-4).map((month, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{month.month}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-dark-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-cyber-500 to-neon-500 h-3 rounded-full shadow-lg shadow-cyber-500/50"
                            style={{ width: `${(month.credentials / 3500) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-white w-16 text-right">
                          {month.credentials.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  Monthly Verifications
                </h3>
                <div className="space-y-3">
                  {monthlyGrowth.slice(-4).map((month, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{month.month}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-dark-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-cyan-500 h-3 rounded-full shadow-lg shadow-green-500/50"
                            style={{ width: `${(month.verifications / 9000) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-white w-16 text-right">
                          {month.verifications.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neon-500/20">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-400 mb-2 font-display">127%</p>
                <p className="text-gray-400">Growth Rate (YTD)</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-cyber-400 mb-2 font-display">15,847</p>
                <p className="text-gray-400">Total Credentials</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-neon-400 mb-2 font-display">45,283</p>
                <p className="text-gray-400">Total Verifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gradient-to-r from-cyber-600 via-neon-600 to-cyber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10" style={{perspective: '1000px'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display transform hover:scale-105 transition-transform duration-300">
            Be Part of Our Growth Story
          </h2>
          <p className="text-xl text-cyan-100 mb-10">
            Join thousands of organizations and students already transforming credential verification
          </p>
          <button
            onClick={() => onNavigate('landing')}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-cyber-600 font-bold text-lg hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-2xl rounded-xl"
          >
            Get Started Today
            <TrendingUp className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}