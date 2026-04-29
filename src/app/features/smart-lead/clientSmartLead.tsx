// app/lead-management/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Filter, 
  Target, 
  Clock, 
  MessageSquare, 
  BarChart3,
  Zap,
  ArrowRight,
  Play,
  CheckCircle2,
  ChevronRight,
  Star,
  Phone,
  Mail,
  MoreHorizontal,
  Search,
  Plus,
  AlertCircle,
  TrendingUp,
  Brain,
  Inbox,
  Bell,
  Settings,
  Menu,
  X
} from 'lucide-react';



// 1. Hero Section
const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[var(--color-primary-50)] via-white to-white">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary-200)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--color-secondary-200)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-100)] border border-[var(--color-primary-200)] mb-8">
            <Users className="w-4 h-4 text-[var(--color-primary-600)]" />
            <span className="text-sm font-semibold text-[var(--color-primary-700)]">Get More Qualified Leads Daily</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-primary-900)] tracking-tight mb-6 leading-tight">
            Generate High-Quality Leads{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[var(--color-primary-600)]">on makemylead</span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-[var(--color-primary-200)] -z-0" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,4 Q100,0 200,4" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            {' '}Management
          </h1>
          
          <p className="text-xl lg:text-2xl text-[var(--color-primary-800)]/70 leading-relaxed max-w-2xl mx-auto mb-10">
           Capture, qualify, and convert high-quality leads 
           automatically from ads, websites, and social media using AI automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group w-full sm:w-auto px-8 py-4 bg-[var(--color-primary-600)] text-white rounded-xl font-semibold shadow-xl shadow-[var(--color-primary-600)]/25 hover:shadow-[var(--color-primary-600)]/40 hover:bg-[var(--color-primary-700)] transition-all duration-300 flex items-center justify-center gap-2 text-lg">
             Get More Leads
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group w-full sm:w-auto px-8 py-4 bg-white text-[var(--color-primary-700)] border-2 border-[var(--color-primary-200)] rounded-xl font-semibold hover:border-[var(--color-primary-400)] hover:bg-[var(--color-primary-50)] transition-all duration-300 flex items-center justify-center gap-2 text-lg">
              <Play className="w-5 h-5 fill-current" />
              See How It Works
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-primary-600)]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Core Features Section
const FeaturesSection: React.FC = () => {
 const features = [
  {
    icon: <Filter className="w-6 h-6" />,
    title: "Smart Lead Qualification",
    description: "Automatically filter and qualify leads based on user behavior, interest, and buying intent.",
    metric: "AI Powered"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Multi-Channel Lead Capture",
    description: "Capture leads from Facebook Ads, Google Ads, landing pages, and your website in one place.",
    metric: "All Channels"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Instant Lead Response",
    description: "Respond to every lead instantly with automated WhatsApp, email, or SMS replies.",
    metric: "< 30 sec"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Automated Follow-Ups",
    description: "Set automated sequences to nurture leads and increase conversion rate.",
    metric: "Auto Follow"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Tracking",
    description: "Track leads, campaigns, and conversion performance in real-time dashboard.",
    metric: "Live Data"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Conversion Optimization",
    description: "Get AI suggestions to improve conversion and close more deals faster.",
    metric: "High ROI"
  }
];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-4">
            Everything You Need to Win More Deals
          </h2>
          <p className="text-lg text-[var(--color-primary-700)]/70">
            Intelligent lead management that works while you focus on closing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-[var(--color-primary-100)] hover:border-[var(--color-primary-300)] hover:shadow-xl hover:shadow-[var(--color-primary-600)]/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary-600)] group-hover:bg-[var(--color-primary-600)] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
                <span className="text-xs font-bold text-[var(--color-primary-600)] bg-[var(--color-primary-50)] px-3 py-1 rounded-full border border-[var(--color-primary-100)]">
                  {feature.metric}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--color-primary-900)] mb-2 group-hover:text-[var(--color-primary-600)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[var(--color-primary-700)]/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. Visual Showcase Section
const ShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 'inbox', label: 'Lead Inbox', icon: <Inbox className="w-4 h-4" /> },
    { id: 'pipeline', label: 'Pipeline View', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <TrendingUp className="w-4 h-4" /> }
  ];

const leads = [
  { id: '1', name: 'Rahul Sharma', email: 'rahul@gmail.com', source: 'Facebook Ads', score: 95, status: 'hot', time: '2m ago', avatar: 'RS', action: 'Call immediately' },
  { id: '2', name: 'Priya Verma', email: 'priya@gmail.com', source: 'Website Form', score: 88, status: 'hot', time: '10m ago', avatar: 'PV', action: 'Send proposal' },
  { id: '3', name: 'Amit Singh', email: 'amit@gmail.com', source: 'Google Ads', score: 72, status: 'warm', time: '1h ago', avatar: 'AS', action: 'Follow-up required' },
  { id: '4', name: 'Neha Gupta', email: 'neha@gmail.com', source: 'Landing Page', score: 48, status: 'cold', time: '3h ago', avatar: 'NG', action: 'Add to nurture campaign' }
];
  return (
    <section id="showcase" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-50)]/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-100)] border border-[var(--color-primary-200)] mb-6">
              <Brain className="w-4 h-4 text-[var(--color-primary-600)]" />
              <span className="text-sm font-semibold text-[var(--color-primary-700)]">AI-Powered Dashboard</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary-900)] mb-6 leading-tight">
              See Every Lead, Know Every Opportunity
            </h2>
            
            <p className="text-lg text-[var(--color-primary-700)]/70 mb-8 leading-relaxed">
              Your command center for lead management. Real-time scoring, automated actions, 
              and predictive insights help you focus on the leads most likely to convert.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Unified inbox for all lead sources",
                "AI-generated lead scores and hot indicators",
                "One-click calling, emailing, and texting",
                "Automated task creation and follow-up reminders",
                "Real-time pipeline velocity tracking"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary-100)] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-600)]" />
                  </div>
                  <span className="text-[var(--color-primary-800)] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="group px-6 py-3 bg-[var(--color-primary-600)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-700)] transition-colors flex items-center gap-2">
              Explore the Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Interactive UI Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary-400)] to-[var(--color-secondary-400)] rounded-3xl opacity-20 blur-2xl" />
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-[var(--color-primary-100)] overflow-hidden">
              {/* Mock Header */}
              <div className="px-6 py-4 border-b border-[var(--color-primary-100)] flex items-center justify-between bg-gradient-to-r from-[var(--color-primary-50)] to-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-600)] flex items-center justify-center text-white text-xs font-bold">EA</div>
                  <span className="font-semibold text-[var(--color-primary-900)]">Lead Command Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[var(--color-primary-100)]">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === index ? 'text-[var(--color-primary-600)] border-b-2 border-[var(--color-primary-600)] bg-[var(--color-primary-50)]' : 'text-[var(--color-primary-500)] hover:text-[var(--color-primary-700)]'}`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Lead List */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-primary-400)]" />
                    <input 
                      type="text" 
                      placeholder="Search leads..." 
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-[var(--color-primary-200)] text-sm focus:outline-none focus:border-[var(--color-primary-400)] bg-[var(--color-primary-50)]/50"
                    />
                  </div>
                  <button className="px-3 py-2 bg-[var(--color-primary-600)] text-white rounded-lg text-sm font-medium flex items-center gap-1">
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>

                <div className="space-y-3">
                  {leads.map((lead, index) => (
                    <div 
                      key={lead.id}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${index === 0 ? 'border-[var(--color-primary-400)] bg-[var(--color-primary-50)] shadow-md' : 'border-[var(--color-primary-100)] hover:border-[var(--color-primary-300)] bg-white'}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary-200)] to-[var(--color-primary-300)] flex items-center justify-center text-[var(--color-primary-800)] font-semibold text-xs flex-shrink-0">
                          {lead.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-[var(--color-primary-900)] text-sm">{lead.name}</span>
                              {lead.score >= 90 && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />}
                            </div>
                            <span className="text-xs text-[var(--color-primary-400)]">{lead.time}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-[var(--color-primary-500)] bg-[var(--color-primary-50)] px-2 py-0.5 rounded-full border border-[var(--color-primary-100)]">
                              {lead.source}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${lead.status === 'hot' ? 'bg-red-100 text-red-700' : lead.status === 'warm' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                              {lead.status}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-baseline gap-1">
                              <span className={`text-lg font-bold ${lead.score >= 80 ? 'text-[var(--color-primary-600)]' : 'text-[var(--color-primary-400)]'}`}>
                                {lead.score}
                              </span>
                              <span className="text-xs text-[var(--color-primary-400)]">AI Score</span>
                            </div>
                            <span className="text-xs text-[var(--color-primary-600)] font-medium bg-[var(--color-primary-100)] px-2 py-1 rounded">
                              {lead.action}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Footer */}
              <div className="px-4 py-3 bg-[var(--color-primary-50)] border-t border-[var(--color-primary-100)] flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-[var(--color-primary-700)]"><strong className="text-[var(--color-primary-900)]">24</strong> New today</span>
                  <span className="text-[var(--color-primary-700)]"><strong className="text-[var(--color-primary-900)]">89%</strong> Response rate</span>
                </div>
                <span className="text-[var(--color-primary-600)] flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  3 need attention
                </span>
              </div>
            </div>

            {/* Floating AI Card */}
            <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-xl border border-[var(--color-primary-100)] max-w-xs animate-pulse">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-600)] flex items-center justify-center text-white flex-shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-primary-900)]">AI Insight</p>
                  <p className="text-xs text-[var(--color-primary-600)] mt-1">Jennifer Walsh has 94% conversion probability based on similar buyer profiles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Benefits Section
const BenefitsSection: React.FC = () => {
 const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Increase Conversion Rate",
    description: "Convert more leads into paying customers using AI automation.",
    stat: "3X",
    statLabel: "conversions"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save Time",
    description: "Automate repetitive tasks and focus only on closing deals.",
    stat: "15+ hrs",
    statLabel: "saved weekly"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Never Miss a Lead",
    description: "Capture and respond to every lead instantly without manual work.",
    stat: "100%",
    statLabel: "lead capture"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Better ROI",
    description: "Optimize campaigns with real-time analytics and insights.",
    stat: "High",
    statLabel: "ROI"
  }
];

  return (
    <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary-900)] mb-4">
            Real Results for Real Estate Professionals
          </h2>
          <p className="text-lg text-[var(--color-primary-700)]/70">
            Measurable business impact that grows your bottom line
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-[var(--color-primary-50)] border border-[var(--color-primary-100)] hover:border-[var(--color-primary-300)] hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary-100)] rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[var(--color-primary-600)] text-white flex items-center justify-center shadow-lg shadow-[var(--color-primary-600)]/20 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-bold text-[var(--color-primary-600)]">{benefit.stat}</span>
                    <span className="text-sm font-bold text-[var(--color-primary-500)] uppercase tracking-wider">{benefit.statLabel}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-primary-900)] mb-3 group-hover:text-[var(--color-primary-600)] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-[var(--color-primary-700)]/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. How It Works Section
const WorkflowSection: React.FC = () => {
 const steps = [
  {
    number: "01",
    title: "Capture Leads",
    description: "Collect leads automatically from ads, landing pages, and websites.",
    icon: <Users className="w-6 h-6" />,
    details: ["Facebook Ads", "Google Ads", "Landing Pages", "Website Forms"]
  },
  {
    number: "02",
    title: "Qualify Leads",
    description: "AI filters high-quality leads based on interest and intent.",
    icon: <Filter className="w-6 h-6" />,
    details: ["AI scoring", "Intent tracking", "Behavior analysis", "Lead ranking"]
  },
  {
    number: "03",
    title: "Engage Leads",
    description: "Automate communication via WhatsApp, email, and SMS.",
    icon: <MessageSquare className="w-6 h-6" />,
    details: ["Auto replies", "Follow-ups", "Reminders", "Notifications"]
  },
  {
    number: "04",
    title: "Convert Leads",
    description: "Close more deals using insights and timely actions.",
    icon: <Zap className="w-6 h-6" />,
    details: ["AI suggestions", "Call reminders", "Deal tracking", "Conversion boost"]
  }
];

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-primary-900)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            From First Contact to Closed Deal
          </h2>
          <p className="text-lg text-[var(--color-primary-200)]">
            Four steps to effortless lead conversion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-primary-400)] to-transparent z-0" />
              )}
              
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[var(--color-primary-400)] transition-all duration-300 h-full z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-[var(--color-primary-400)]/30 group-hover:text-[var(--color-primary-400)]/50 transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-600)] flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--color-primary-200)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[var(--color-primary-200)]/80 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[var(--color-primary-200)]/60">
                      <ChevronRight className="w-3 h-3 text-[var(--color-primary-400)]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Final CTA Section
const CTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-secondary-700)] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Generate More Leads?
        </h2>
        <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-2xl mx-auto">
        Join hundreds of businesses using AI to generate and convert leads automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group w-full sm:w-auto px-10 py-5 bg-white text-[var(--color-primary-700)] rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
          Start Generating Leads
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
            Schedule Demo
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Free 14-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};



// Main Page Component
export default function LeadManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <BenefitsSection />
      <WorkflowSection />
      <CTASection />
  
    </main>
  );
}