"use client"
import React, { useState, useEffect,useRef} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Building2, 
  Calendar, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Zap, 
  Check, 
  ChevronRight, 
  Star,
  Menu,
  X,
  ArrowRight,
  Shield,
  Clock,
  BarChart3,
  Globe,
  HeadphonesIcon,
  Sparkles,
  Play,
  Image,
  ChevronDown,
  HelpCircle,
  HelpCircleIcon,
  MessageSquareCode,
  GraduationCapIcon,
  PlayCircle,
  BookA,
  Cloud,
  Database,
  PieChart,
  Target,
  Layers,
  Workflow,
  LineChart,
  Lock,
  Brain,
  Bot,
  BotIcon
} from 'lucide-react';
import Footer from '@/components/footer/footer'
import Analytics from '@/components/analytics/analytics'
import Hero from '@/components/hero/hero'
import Header from '@/components/header/header'
import Trusted from '@/components/trusted/trusted';
import Features from '@/components/features/features';
import ChartSection from '@/components/agentchart/agentchart';
import AgentShowcase from '@/components/estateai-benefits/benefits';
import TestimonialsSection from '@/components/testimonial/testimonial';
import FaqSection from '@/components/faq/faq';
import FinalCTA from '@/components/finalcta/finalcta';


interface NavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  dropdownContent?: {
    title: string;
    description: string;
    sections: {
      title: string;
      items: {
        icon: React.ReactNode;
        title: string;
        description: string;
        href: string;
        badge?: string;
      }[];
    }[];
    footer?: {
      text: string;
      link: string;
      href: string;
    };
  };
}
const navItems: NavItem[] = [
  {
    label: "Features",
    href: "#features",
    hasDropdown: true,
    dropdownContent: {
      title: "Platform Features",
      description: "Everything you need to manage customer relationships at scale",
      sections: [
        {
          title: "Core CRM",
          items: [
            {
              icon: <Users className="w-5 h-5" />,
              title: "Contact Management",
              description: "Organize and segment your customer data",
              href: "#contacts"
            },
            {
              icon: <Target className="w-5 h-5" />,
              title: "Lead Scoring",
              description: "AI-powered lead qualification",
              href: "#leads",
              badge: "AI"
            },
            {
              icon: <LineChart className="w-5 h-5" />,
              title: "Sales Pipeline",
              description: "Visual deal tracking and forecasting",
              href: "#pipeline"
            }
          ]
        },
        {
          title: "Automation",
          items: [
            {
              icon: <Workflow className="w-5 h-5" />,
              title: "Workflow Automation",
              description: "Automate repetitive tasks",
              href: "#workflows"
            },
            {
              icon: <Clock className="w-5 h-5" />,
              title: "Smart Scheduling",
              description: "AI meeting scheduler",
              href: "#scheduling"
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: "Instant Actions",
              description: "Trigger-based automation",
              href: "#actions"
            }
          ]
        }
      ],
      footer: {
        text: "See all features",
        link: "Explore →",
        href: "/features"
      }
    }
  },
  {
    label: "Solutions",
    href: "#solutions",
    hasDropdown: true,
    dropdownContent: {
      title: "Solutions by Industry",
      description: "Tailored CRM solutions for every business type",
      sections: [
        {
          title: "By Industry",
          items: [
            {
              icon: <Layers className="w-5 h-5" />,
              title: "Enterprise",
              description: "Scale with confidence",
              href: "/enterprise"
            },
            {
              icon: <Sparkles className="w-5 h-5" />,
              title: "Startups",
              description: "Grow from day one",
              href: "/startups"
            },
            {
              icon: <BarChart3 className="w-5 h-5" />,
              title: "Agencies",
              description: "Manage multiple clients",
              href: "/agencies"
            }
          ]
        },
        {
          title: "By Team",
          items: [
            {
              icon: <Users className="w-5 h-5" />,
              title: "Sales Teams",
              description: "Close more deals faster",
              href: "/sales"
            },
            {
              icon: <Target className="w-5 h-5" />,
              title: "Marketing",
              description: "Align sales and marketing",
              href: "/marketing"
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Customer Success",
              description: "Reduce churn, increase LTV",
              href: "/success"
            }
          ]
        }
      ],
      footer: {
        text: "Not sure where to start?",
        link: "Talk to Sales →",
        href: "/contact"
      }
    }
  },
  {
    label: "Pricing",
    href: "#pricing",
    hasDropdown: true,
    dropdownContent: {
      title: "Simple Pricing",
      description: "Choose the plan that fits your business",
      sections: [
        {
          title: "Plans",
          items: [
            {
              icon: <Star className="w-5 h-5" />,
              title: "Starter",
              description: "Free for up to 3 users",
              href: "/pricing#starter",
              badge: "Free"
            },
            {
              icon: <Zap className="w-5 h-5" />,
              title: "Professional",
              description: "$49/user per month",
              href: "/pricing#pro"
            },
            {
              icon: <Sparkles className="w-5 h-5" />,
              title: "Enterprise",
              description: "Custom pricing",
              href: "/pricing#enterprise"
            }
          ]
        },
        {
          title: "Compare",
          items: [
            {
              icon: <PieChart className="w-5 h-5" />,
              title: "Plan Comparison",
              description: "See all features side by side",
              href: "/compare"
            },
            {
              icon: <Database className="w-5 h-5" />,
              title: "ROI Calculator",
              description: "Calculate your return",
              href: "/roi"
            },
            {
              icon: <Cloud className="w-5 h-5" />,
              title: "Cloud vs On-prem",
              description: "Deployment options",
              href: "/deployment"
            }
          ]
        }
      ],
      footer: {
        text: "All plans include 14-day free trial",
        link: "Start Free →",
        href: "/signup"
      }
    }
  },
  {
    label: "Resources",
    href: "#resources",
    hasDropdown: true,
    dropdownContent: {
      title: "Learn & Grow",
      description: "Resources to help you succeed",
      sections: [
        {
          title: "Learn",
          items: [
            {
              icon: <BookA className="w-5 h-5" />,
              title: "Documentation",
              description: "Guides and API references",
              href: "/docs"
            },
            {
              icon: <PlayCircle className="w-5 h-5" />,
              title: "Video Tutorials",
              description: "Step-by-step walkthroughs",
              href: "/tutorials"
            },
            {
              icon: <GraduationCapIcon className="w-5 h-5" />,
              title: "CRM Academy",
              description: "Free certification courses",
              href: "/academy"
            }
          ]
        },
        {
          title: "Support",
          items: [
            {
              icon: <HelpCircleIcon className="w-5 h-5" />,
              title: "Help Center",
              description: "FAQs and troubleshooting",
              href: "/help"
            },
            {
              icon: <MessageSquareCode className="w-5 h-5" />,
              title: "Community",
              description: "Join the conversation",
              href: "/community"
            },
            {
              icon: <HeadphonesIcon className="w-5 h-5" />,
              title: "Contact Support",
              description: "24/7 expert assistance",
              href: "/support"
            }
          ]
        }
      ],
      footer: {
        text: "Need personalized help?",
        link: "Book a Demo →",
        href: "/demo"
      }
    }
  }
];

const aiBenefits = [
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: "Autonomous Learning",
    description: "AI agents that adapt to your property patterns and improve decisions without manual input.",
    gradient: "from-blue-500 to-blue-600",
    aiFeature: "Self-Improving"
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Instant Response",
    description: "Guest inquiries handled in under 30 seconds, 24/7, with human-like contextual understanding.",
    gradient: "from-amber-500 to-orange-600",
    aiFeature: "Real-time NLP"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    title: "Predictive Revenue",
    description: "Machine learning forecasts demand and auto-adjusts pricing for maximum occupancy.",
    gradient: "from-emerald-500 to-teal-600",
    aiFeature: "95% Accuracy"
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Risk Intelligence",
    description: "AI-powered fraud detection and guest screening protects your properties automatically.",
    gradient: "from-purple-500 to-indigo-600",
    aiFeature: "Proactive Defense"
  }
];


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
   const [email, setEmail] = useState("");
   const [openIndex, setOpenIndex] = useState(null);
     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
     const [isVisible, setIsVisible] = useState(false);
     const timeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 
  return (
    <div className="min-h-screen  bg-[var(--bg-secondary)] font-sans text-[var(--text-primary)] overflow-hidden">
   

      {/* Navigation */}
    <Header/>

      {/* Hero Section */}
     <Hero/>

      {/* Trusted By Section */}
      <Trusted/>
    <div className="relative w-full h-3/4">
 
      {/* analytics */}
       <div className=" z-10">
    <Analytics/>
    </div>
    </div>
    
      {/* Features Section */}
      {/* <Features/> */}
      {/* hand image section */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* right - Image */}
      <div className="flex justify-center relative after:absolute after:-bottom-10 sm:after:-bottom-14 after:left-0 after:w-1/2 after:h-1/2 after:bg-linear-to-t after:from-white after:via-white/100 after:to-transparent after:rotate-35 sm:after:rotate-35">
        <img 
          src="/assets/hand-phone-img.png" 
          alt="AI Lead Generation Mobile Dashboard" 
          width={400} 
          height={500}
          className="drop-shadow-xl"
        />
      </div>

      {/* left - Content */}
      <div className="max-w-xl">
        <h2 
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ color: 'var(--color-primary-900)' }}
        >
          Your AI Lead Engine, Always Active
        </h2>

        <p 
          className="text-lg leading-relaxed mb-6"
          style={{ color: 'var(--color-primary-800)' }}
        >
          Your business doesn’t stop — and neither does your AI. Capture leads, respond instantly, and nurture every prospect automatically, even when you're offline. Turn every opportunity into a conversation and every conversation into a conversion.
        </p>

        <p 
          className="text-lg leading-relaxed"
          style={{ color: 'var(--color-primary-700)' }}
        >
          From WhatsApp to landing pages, your AI works 24/7 to engage leads, qualify them, and move them closer to closing — all from your mobile.
        </p>
      </div>

    </div>
  </div>
</section>
 {/* this is chart section */}
 <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* left - Content */}
      <div className="max-w-xl">
        
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-6 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-medium text-blue-700">Real-Time AI Response</span>
        </div>

        <h2 
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          style={{ color: 'var(--color-primary-900)' }}
        >
          Every Second Matters — Capture Leads Instantly
        </h2>

        <p 
          className="text-lg leading-relaxed mb-6"
          style={{ color: 'var(--color-primary-800)' }}
        >
          In lead generation, speed is everything. The first response often wins the deal. Our AI engages every inquiry instantly — answering questions, qualifying prospects, and guiding them forward before your competitors even notice.
        </p>

        <p 
          className="text-lg leading-relaxed mb-6"
          style={{ color: 'var(--color-primary-700)' }}
        >
          Whether it’s from ads, WhatsApp, or your website, every lead is captured, nurtured, and moved closer to conversion — automatically, 24/7.
        </p>

        <Link href="/resources/howitworks">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0066cc] to-[#3399ff] text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
            <span className="relative z-10">See How It Works</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0057ad] to-[#0066cc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </Link>

      </div>

      {/* right - Image */}
      <div className="flex justify-center">
        <img 
          src="/assets/chart.png" 
          alt="AI Lead Response Analytics Dashboard" 
          width={400} 
          height={500}
          className="drop-shadow-xl"
        />
      </div>

    </div>
  </div>
</section>
    {/* AI Benefits Section - EstateAi */}
<AgentShowcase/>
      {/* Testimonials */}
    <TestimonialsSection/>

      {/* Pricing Section */}
     
      {/* FAQ Section */}
 <FaqSection/>


      {/* Final CTA */}
<FinalCTA/>

 
    </div>
  );
};



export default Home;