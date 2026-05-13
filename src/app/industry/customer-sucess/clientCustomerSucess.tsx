"use client"

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion'
import { 
  Heart,
  Users,
  TrendingUp,
  ArrowUpRight,
  Shield,
  Zap,
  MessageCircle,
  BarChart3,
  PieChart,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  Sparkles,
  Target,
  Clock,
  Award,
  Briefcase,
  Phone,
  Mail,
  Calendar,
  ChevronRight,
  Plus,
  Minus,
  RefreshCw,
  LifeBuoy,
  Headphones,
  Smile,
  ThumbsUp,
  Star,
  Gift,
  Crown,
  TrendingDown,
  AlertTriangle,
  Check,
  X,
  HelpCircle,
  Rocket,
  Lightbulb,
  Megaphone,
  Handshake,
  Lock,
  Globe,
  Layers,
  Bot,
  BrainCircuit,
  Fingerprint,
  ScanEye,
  Workflow,
  Search,
  FileText,
  MessageSquare,
  Home,
  MapPin,
  Database,
  Cpu,
  Radio,
  Wand2
} from 'lucide-react'

// ─── Animation Variants ─────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
}

// ─── Reusable Components ────────────────────────────────────────────
const GlassCard = ({ children, className = "", hover = true, dark = false, elevated = false }: { 
  children: React.ReactNode
  className?: string
  hover?: boolean
  dark?: boolean
  elevated?: boolean
}) => (
  <motion.div 
    whileHover={hover ? { 
      y: -6, 
      boxShadow: dark 
        ? "0 25px 50px -12px rgba(0, 102, 204, 0.3)"
        : elevated
          ? "0 25px 50px -12px rgba(0, 102, 204, 0.15)"
          : "0 20px 40px -15px rgba(0, 102, 204, 0.08)",
      transition: { duration: 0.3 } 
    } : {}}
    className={`relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-300 ${
      dark 
        ? 'bg-[#0b2540]/90 border-[#1d5aa6]/30 text-white' 
        : elevated
          ? 'bg-white shadow-xl shadow-[#0066cc]/8 border-[#e6f2ff]'
          : 'bg-white/80 shadow-lg shadow-[#0066cc]/5 border-[#e6f2ff]/80'
    } ${className}`}
  >
    {children}
  </motion.div>
)

const GradientText = ({ children, className = "" }: { 
  children: React.ReactNode
  className?: string
}) => (
  <span className={`bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
)

const Badge = ({ children, variant = "primary", size = "md", glow = false }: { 
  children: React.ReactNode
  variant?: "primary" | "secondary" | "dark" | "success" | "outline" | "accent"
  size?: "sm" | "md" | "lg"
  glow?: boolean
}) => {
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-5 py-2 text-base"
  }

  const variants = {
    primary: "bg-[#e6f2ff] text-[#0057ad] border-[#99ccff]",
    secondary: "bg-[#eef6ff] text-[#1d5aa6] border-[#b3d5ff]",
    dark: "bg-[#0b2540] text-white border-[#1d5aa6]",
    success: "bg-[#ecfdf5] text-[#059669] border-[#a7f3d0]",
    outline: "bg-transparent text-[#0066cc] border-[#0066cc]/30",
    accent: "bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white border-transparent"
  }

  return (
    <span className={`inline-flex items-center gap-2 rounded-full font-semibold border ${sizes[size]} ${variants[variant]} ${glow ? 'shadow-lg shadow-[#0066cc]/15' : ''}`}>
      {children}
    </span>
  )
}

// Animated counter hook
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return { count, ref }
}

const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const { count, ref } = useAnimatedCounter(value)
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

// ─── AI Agent Card ──────────────────────────────────────────────────
const AgentCard = ({ 
  icon, 
  title, 
  description, 
  badge,
  delay = 0 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <GlassCard className="p-5 h-full group" hover={true}>
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#e6f2ff] to-[#cce5ff] flex items-center justify-center border border-[#99ccff]/30 group-hover:from-[#0066cc] group-hover:to-[#1a7ae6] transition-all duration-300">
            {icon}
          </div>
          {badge && (
            <span className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white text-[10px] font-bold shadow-md">
              {badge}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-[#0b2540] text-sm mb-1 group-hover:text-[#0066cc] transition-colors">
            {title}
          </h4>
          <p className="text-xs text-[#143f73]/60 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  </motion.div>
)

// ─── Feature Card ───────────────────────────────────────────────────
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  stat,
  color = "primary" 
}: { 
  icon: React.ElementType
  title: string
  description: string
  stat?: string
  color?: "primary" | "secondary" | "accent" | "success"
}) => {
  const colorMap = {
    primary: { bg: "from-[#0066cc] to-[#1a7ae6]", light: "bg-[#e6f2ff]", text: "text-[#0066cc]" },
    secondary: { bg: "from-[#1a7ae6] to-[#3399ff]", light: "bg-[#eef6ff]", text: "text-[#1a7ae6]" },
    accent: { bg: "from-[#3399ff] to-[#66b2ff]", light: "bg-[#e6f2ff]", text: "text-[#3399ff]" },
    success: { bg: "from-[#059669] to-[#10b981]", light: "bg-[#ecfdf5]", text: "text-[#059669]" }
  }
  const c = colorMap[color]

  return (
    <GlassCard className="p-6 h-full group" hover={true}>
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.bg} flex items-center justify-center mb-4 shadow-lg shadow-[#0066cc]/10 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-[#0b2540] group-hover:text-[#0066cc] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#143f73]/60 leading-relaxed mb-4">
        {description}
      </p>
      {stat && (
        <div className={`pt-3 border-t border-[#e6f2ff]`}>
          <span className={`text-xs font-bold ${c.text} ${c.light} px-3 py-1 rounded-full`}>
            {stat}
          </span>
        </div>
      )}
    </GlassCard>
  )
}

// ─── Testimonial Card ───────────────────────────────────────────────
const TestimonialCard = ({ quote, author, role, company, metric }: { 
  quote: string
  author: string
  role: string
  company: string
  metric: string
}) => (
  <GlassCard className="p-8 h-full flex flex-col relative overflow-hidden" hover={true}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e6f2ff] to-[#cce5ff] rounded-full blur-3xl opacity-40" />

    <div className="relative z-10 flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
      ))}
    </div>

    <div className="mb-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ecfdf5] text-[#059669] text-xs font-bold w-fit">
      <TrendingUp className="w-3 h-3" />
      {metric}
    </div>

    <p className="text-[#143f73]/70 mb-6 flex-1 leading-relaxed text-base italic">&ldquo;{quote}&rdquo;</p>

    <div className="pt-6 border-t border-[#e6f2ff] flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066cc] to-[#1a7ae6] flex items-center justify-center text-white font-bold text-lg">
        {author.charAt(0)}
      </div>
      <div>
        <div className="font-bold text-[#0b2540]">{author}</div>
        <div className="text-sm text-[#143f73]/50">{role}, {company}</div>
      </div>
    </div>
  </GlassCard>
)

// ─── Comparison Row ─────────────────────────────────────────────────
const ComparisonRow = ({ feature, before, after, highlight = false }: { 
  feature: string
  before: string
  after: string
  highlight?: boolean
}) => (
  <div className={`grid grid-cols-[1.5fr,1fr,1.2fr] gap-4 p-5 items-center ${highlight ? 'bg-[#e6f2ff]/60 border-l-4 border-[#0066cc]' : 'hover:bg-[#eef6ff]/40'} transition-colors rounded-r-xl`}>
    <div className="font-semibold text-[#0b2540] text-sm flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4 text-[#0066cc] shrink-0" />
      {feature}
    </div>
    <div className="text-center text-[#143f73]/50 text-sm flex items-center justify-center gap-1.5">
      <X className="w-4 h-4 text-[#ef4444]" />
      {before}
    </div>
    <div className="text-center">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e6f2ff] text-[#0066cc] text-sm font-semibold border border-[#99ccff]/30">
        <Check className="w-4 h-4" />
        {after}
      </span>
    </div>
  </div>
)

// ─── MAIN PAGE ──────────────────────────────────────────────────────
export default function CustomerSuccessPage() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4])

  // ─── 10 AI Agents Data ────────────────────────────────────────────
  const agents = [
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png" className="max-w-10 max-h-10" alt="Lead Qualification" />,
      title: "AI Lead Qualification Agent",
      description: "Automatically scores and segments leads by intent, budget, and timeline",
      badge: "Popular"
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png" className="max-w-10 max-h-10" alt="Property Matching" />,
      title: "AI Property Matching Agent",
      description: "Matches buyers with perfect properties using behavioral AI",
      badge: "AI"
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png" className="max-w-10 max-h-10" alt="Lead Capture" />,
      title: "Lead Capture Agent",
      description: "Captures leads from every channel 24/7 with zero manual entry",
      badge: "New"
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png" className="max-w-10 max-h-10" alt="Content Creation" />,
      title: "AI Content Creation Agent",
      description: "Generates property descriptions, emails, and social posts instantly",
      badge: "AI"
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-555_kabvyd.png" className="max-w-10 max-h-10" alt="Follow-Up" />,
      title: "AI Follow-Up Agent",
      description: "Never lets a lead go cold with smart, timed follow-up sequences",
      badge: "AI"
    },
    {
      icon: <Bot className="w-7 h-7 text-[#0066cc]" />,
      title: "AI Calling Agent",
      description: "Makes outbound calls, qualifies leads, and books appointments autonomously",
      badge: "Voice"
    },
    {
      icon: <Workflow className="w-7 h-7 text-[#0066cc]" />,
      title: "Campaign Automation Agent",
      description: "Runs multi-channel campaigns that adapt based on lead behavior",
      badge: "Auto"
    },
    {
      icon: <Database className="w-7 h-7 text-[#0066cc]" />,
      title: "Data Mining Agent",
      description: "Extracts market insights, competitor data, and pricing intelligence",
      badge: "Data"
    },
    {
      icon: <Search className="w-7 h-7 text-[#0066cc]" />,
      title: "SEO Agent",
      description: "Optimizes listings and content to rank higher in local search",
      badge: "Growth"
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-[#0066cc]" />,
      title: "Analytics Agent",
      description: "Predicts trends, forecasts revenue, and surfaces growth opportunities",
      badge: "Pro"
    }
  ]

  // ─── Features Data ────────────────────────────────────────────────
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Lead Qualification",
      description: "Our AI Lead Qualification Agent scores every incoming lead by intent, budget, and timeline—so your team only talks to ready buyers.",
      stat: "94% Accuracy",
      color: "primary" as const
    },
    {
      icon: Home,
      title: "Smart Property Matching",
      description: "The Property Matching Agent analyzes buyer behavior and preferences to suggest perfect listings before they even ask.",
      stat: "3x Faster Matches",
      color: "secondary" as const
    },
    {
      icon: Zap,
      title: "Instant Lead Capture",
      description: "Lead Capture Agent works across your website, social, and ads—capturing and enriching leads 24/7 without a single form field missed.",
      stat: "Zero Leads Lost",
      color: "accent" as const
    },
    {
      icon: FileText,
      title: "AI Content Creation",
      description: "Content Creation Agent writes compelling property descriptions, email sequences, and social posts tailored to each listing and audience.",
      stat: "10x Content Output",
      color: "primary" as const
    },
    {
      icon: MessageSquare,
      title: "Automated Follow-Ups",
      description: "Follow-Up Agent sends perfectly timed, personalized messages via email, SMS, and WhatsApp—converting silent leads into appointments.",
      stat: "68% Reply Rate",
      color: "secondary" as const
    },
    {
      icon: Phone,
      title: "AI Voice Calling",
      description: "Calling Agent makes outbound calls, qualifies prospects, answers questions, and books viewings—while your team focuses on closings.",
      stat: "24/7 Availability",
      color: "success" as const
    }
  ]

  // ─── Metrics Data ─────────────────────────────────────────────────
  const metrics = [
    { value: 10, suffix: "", label: "AI Agents", subtext: "Working as one team", icon: Bot },
    { value: 40, suffix: "%", label: "Churn Reduction", subtext: "Within 90 days", icon: TrendingDown },
    { value: 32, suffix: "%", label: "Revenue Lift", subtext: "Through AI automation", icon: TrendingUp },
    { value: 98, suffix: "%", label: "Client Retention", subtext: "Annual renewal rate", icon: Heart }
  ]

  // ─── Comparison Data ──────────────────────────────────────────────
  const comparisonData = [
    { feature: "Lead Qualification", before: "Manual scoring", after: "AI auto-qualification", highlight: true },
    { feature: "Property Matching", before: "Manual search", after: "AI behavioral matching", highlight: false },
    { feature: "Lead Capture", before: "Form fills only", after: "Omnichannel AI capture", highlight: true },
    { feature: "Content Creation", before: "Hours per listing", after: "AI-generated in seconds", highlight: false },
    { feature: "Follow-Up", before: "Manual reminders", after: "AI multi-channel sequences", highlight: true },
    { feature: "Voice Calling", before: "Human only", after: "AI calling + human handoff", highlight: false },
    { feature: "Campaigns", before: "Batch & blast", after: "Behavioral automation", highlight: true },
    { feature: "Analytics", before: "Monthly reports", after: "Real-time AI insights", highlight: false }
  ]

  // ─── Testimonials Data ────────────────────────────────────────────
  const testimonials = [
    {
      quote: "The AI Lead Qualification Agent alone saved us 20 hours a week. We now close 3x more deals with the same team size. The 10-agent system is a game-changer.",
      author: "Priya Sharma",
      role: "Managing Director",
      company: "Urban Estates",
      metric: "3x More Closings"
    },
    {
      quote: "Our Follow-Up Agent never sleeps. It recovered 40% of our cold leads in the first month. Combined with the Calling Agent, our appointment bookings doubled.",
      author: "Rahul Mehta",
      role: "Sales Head",
      company: "Metro Properties",
      metric: "2x Appointments"
    },
    {
      quote: "The Content Creation Agent writes better property descriptions than our copywriters. And the Data Mining Agent found us a completely untapped market segment.",
      author: "Ananya Reddy",
      role: "Marketing Director",
      company: "Skyline Realty",
      metric: "+₹2Cr New Revenue"
    }
  ]

  // ─── Workflow Steps ───────────────────────────────────────────────
  const workflowSteps = [
    { step: "01", icon: Search, title: "Capture Every Lead", desc: "Lead Capture Agent + Calling Agent capture from all channels 24/7" },
    { step: "02", icon: BrainCircuit, title: "Qualify Instantly", desc: "AI Lead Qualification Agent scores intent, budget, and readiness" },
    { step: "03", icon: Home, title: "Match Properties", desc: "Property Matching Agent suggests perfect listings using buyer behavior" },
    { step: "04", icon: MessageSquare, title: "Nurture Automatically", desc: "Follow-Up Agent + Content Agent engage leads across all channels" },
    { step: "05", icon: TrendingUp, title: "Scale & Optimize", desc: "Analytics Agent + Data Mining Agent surface growth opportunities" }
  ]

  return (
    <div className="min-h-screen bg-white text-[#0b2540] font-sans overflow-x-hidden">
      <Head>
        <title>MakeMyLead AI | 10 Agents. One Platform. Infinite Growth.</title>
        <meta name="description" content="MakeMyLead's 10 AI agents automate lead capture, qualification, property matching, follow-ups, content creation, calling, campaigns, data mining, SEO, and analytics." />
      </Head>

      {/* ═══════════════════════════════════════════════════════════════
          1️⃣ HERO SECTION — Centered, No Right Side
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f2ff] via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#cce5ff] to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#eef6ff] to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6f2ff_1px,transparent_1px),linear-gradient(to_bottom,#e6f2ff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Top Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge variant="accent" size="md" glow={true}>
                <Sparkles className="w-4 h-4" />
                10 AI Agents Working For You
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp} className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#0b2540]">
                Your Real Estate
                <span className="block mt-2">
                  <GradientText>AI Dream Team</GradientText>
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#143f73]/60 max-w-3xl mx-auto leading-relaxed font-light">
                Meet the <strong className="text-[#0066cc] font-semibold">10 AI agents</strong> that capture, qualify, match, and convert leads 
                while you focus on closing deals.
              </p>
            </motion.div>

            {/* AI Agents Grid */}
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <p className="text-xs font-semibold text-[#99ccff] uppercase tracking-widest mb-4">
                Your Complete AI Agent Fleet
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {agents.slice(0, 9).map((agent, i) => (
                  <AgentCard key={i} {...agent} delay={i * 0.06} />
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <GlassCard className="p-5 h-full flex items-center justify-center group cursor-pointer" hover={true}>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#1a7ae6] flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-bold text-[#0066cc]">+ Analytics Agent</span>
                      <p className="text-xs text-[#143f73]/50 mt-1">View all 10 agents</p>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0, 102, 204, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white font-bold rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-[#0066cc]/20"
              >
                <Rocket className="w-5 h-5" />
                Activate All 10 Agents
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white text-[#0b2540] font-bold rounded-xl border-2 border-[#cce5ff] hover:border-[#0066cc] hover:bg-[#e6f2ff] transition-all flex items-center justify-center gap-2 text-lg"
              >
                <PlayCircle className="w-5 h-5 text-[#0066cc]" />
                See Agents in Action
              </motion.button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div variants={fadeInUp} className="pt-6 border-t border-[#e6f2ff] max-w-2xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#143f73]/50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#99ccff] flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-[#0066cc]" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2️⃣ THE PROBLEM SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#eef6ff]/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cce5ff] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge variant="secondary" size="md">
                <Target className="w-4 h-4" />
                The Real Challenge
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-6 mb-4 text-[#0b2540]">
              Why Agencies <span className="text-[#ef4444]">Lose</span> Deals Daily
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/60 max-w-2xl mx-auto">
              Without AI, your team is drowning in manual work while leads slip through the cracks.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          >
            {[
              {
                icon: TrendingDown,
                title: "Leads Go Cold",
                desc: "78% of leads never get a follow-up after 24 hours. Manual processes can't keep pace."
              },
              {
                icon: AlertTriangle,
                title: "Poor Qualification",
                desc: "Sales teams waste 60% of time on unqualified leads with no scoring system."
              },
              {
                icon: Clock,
                title: "Slow Response",
                desc: "Average response time is 42 minutes. By then, your competitor already called."
              },
              {
                icon: Database,
                title: "No Insights",
                desc: "Decisions based on gut feeling instead of real-time data and AI predictions."
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <GlassCard className="p-6 h-full group" hover={true}>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fee2e2] to-[#fecaca] flex items-center justify-center mb-4 group-hover:from-[#ef4444] group-hover:to-[#dc2626] transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#ef4444] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b2540] mb-2 group-hover:text-[#ef4444] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#143f73]/60 leading-relaxed">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-[#0066cc]/15 shadow-lg shadow-[#0066cc]/5">
              <Sparkles className="w-5 h-5 text-[#0066cc]" />
              <span className="text-base font-semibold text-[#0b2540]">
                Our <GradientText>10 AI Agents</GradientText> solve every single one of these problems—automatically.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3️⃣ AI AGENTS SHOWCASE — Full Grid of All 10
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6f2ff_1px,transparent_1px),linear-gradient(to_bottom,#e6f2ff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.02]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge variant="primary" size="lg" glow={true}>
                <Bot className="w-4 h-4" />
                Complete AI Workforce
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mt-6 mb-6 text-[#0b2540]">
              10 Specialized Agents. <br />
              <GradientText>One Unstoppable Team.</GradientText>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/60">
              Each agent handles a specific part of your sales funnel. Together, they create a seamless, automated revenue machine.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {agents.map((agent, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <GlassCard className="p-5 h-full group text-center" hover={true}>
                  <div className="relative mx-auto mb-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#e6f2ff] to-[#cce5ff] flex items-center justify-center border border-[#99ccff]/30 group-hover:from-[#0066cc] group-hover:to-[#1a7ae6] transition-all duration-300">
                      {agent.icon}
                    </div>
                    {agent.badge && (
                      <span className="absolute -top-1 -right-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white text-[9px] font-bold shadow-md">
                        {agent.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-[#0b2540] text-sm mb-2 group-hover:text-[#0066cc] transition-colors leading-tight">
                    {agent.title}
                  </h4>
                  <p className="text-xs text-[#143f73]/50 leading-relaxed">
                    {agent.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4️⃣ FEATURES GRID — Agent-Powered Features
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#eef6ff]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge variant="primary" size="lg" glow={true}>
                <Zap className="w-4 h-4" />
                Agent-Powered Capabilities
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mt-6 mb-6 text-[#0b2540]">
              What Our <GradientText>AI Agents</GradientText> Do For You
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/60">
              Every feature is powered by one or more AI agents working in perfect sync.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5️⃣ METRICS STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3399ff] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#66b2ff] rounded-full blur-3xl opacity-15" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {metrics.map((metric, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                  <metric.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-lg font-semibold text-[#cce5ff] mb-1">{metric.label}</div>
                <div className="text-sm text-[#99ccff]/80">{metric.subtext}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6️⃣ WORKFLOW TIMELINE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6 text-[#0b2540]">
              How the <GradientText>10 Agents</GradientText> Work Together
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/60">
              A seamless pipeline where each agent hands off to the next—fully automated.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#cce5ff] hidden lg:block rounded-full" />
            <div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] hidden lg:block rounded-full opacity-30" />

            <div className="grid md:grid-cols-5 gap-8 lg:gap-4">
              {workflowSteps.map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="relative">
                  <div className="hidden lg:flex absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#0066cc] z-10 items-center justify-center shadow-lg shadow-[#0066cc]/20">
                    <div className="w-2 h-2 rounded-full bg-[#0066cc]" />
                  </div>

                  <div className="pt-0 lg:pt-16 text-center lg:text-left">
                    <div className="text-4xl font-bold text-[#cce5ff] mb-3">{item.step}</div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#e6f2ff] to-[#cce5ff] flex items-center justify-center mb-3 mx-auto lg:mx-0 border border-[#99ccff]/20">
                      <item.icon className="w-5 h-5 text-[#0066cc]" />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-[#0b2540]">{item.title}</h3>
                    <p className="text-sm text-[#143f73]/50 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7️⃣ COMPARISON SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#eef6ff]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6 text-[#0b2540]">
              Manual vs <GradientText>AI Agent-Powered</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/60">
              See the difference our 10 AI agents make across every part of your business.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl shadow-[#0066cc]/5 border border-[#e6f2ff] overflow-hidden"
          >
            <div className="grid grid-cols-[1.5fr,1fr,1.2fr] gap-4 p-5 bg-[#eef6ff]/50 border-b border-[#e6f2ff] font-bold text-sm rounded-t-2xl">
              <div className="text-[#0b2540]">Capability</div>
              <div className="text-[#143f73]/50 text-center">Manual Process</div>
              <div className="text-[#0066cc] text-center bg-[#e6f2ff] rounded-lg py-2 -my-2 border border-[#99ccff]/30 text-sm">MakeMyLead AI</div>
            </div>

            <div className="divide-y divide-[#e6f2ff] p-2">
              {comparisonData.map((row, idx) => (
                <ComparisonRow key={idx} {...row} />
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#e6f2ff] text-[#0066cc] font-bold border border-[#99ccff]/30 text-sm">
              <CheckCircle2 className="w-4 h-4" />
              All 10 agents included in every plan. No add-ons, no hidden fees.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8️⃣ TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge variant="secondary" size="lg" glow={true}>
                <Award className="w-4 h-4" />
                Customer Success Stories
              </Badge>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mt-6 mb-6 text-[#0b2540]">
              Teams That <GradientText>Transformed</GradientText> With AI
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9️⃣ SECURITY SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-[#0b2540] to-[#00478f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066cc] rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a7ae6] rounded-full blur-3xl opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge variant="dark" size="lg">
                <Shield className="w-4 h-4" />
                Enterprise Security
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mt-6 mb-6">
              Bank-Grade <span className="text-[#66b2ff]">Security</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[#99ccff]/70">
              Your data and your clients' data are protected by the same standards used by banks.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { icon: Lock, title: "End-to-End Encryption", desc: "AES-256 encryption for all data at rest and in transit" },
              { icon: Shield, title: "Role-Based Access", desc: "Granular permissions so agents only see what they need" },
              { icon: Fingerprint, title: "SSO & 2FA", desc: "Single sign-on and two-factor authentication built-in" },
              { icon: ScanEye, title: "Audit Logging", desc: "Complete activity logs for compliance and security reviews" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12 hover:border-[#0066cc]/40 transition-all text-center h-full group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#0066cc]/20 flex items-center justify-center group-hover:bg-[#0066cc]/30 transition-colors">
                    <item.icon className="w-7 h-7 text-[#66b2ff]" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#99ccff]/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-wrap justify-center gap-3"
          >
            {['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'PCI DSS', 'AES-256'].map((cert, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 hover:bg-white/12 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#66b2ff]" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          🔟 FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#e6f2ff] to-transparent rounded-full blur-3xl opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <Badge variant="primary" size="lg" glow={true}>
                <Rocket className="w-4 h-4" />
                Start Your AI Transformation
              </Badge>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2540]">
              Ready to Meet Your <br />
              <span className="text-[#0066cc]">10 AI Agents?</span>
            </h2>

            <p className="text-xl text-[#143f73]/60 max-w-2xl mx-auto">
              Join hundreds of real estate agencies already using MakeMyLead's AI workforce to close more deals with less effort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0, 102, 204, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="group px-10 py-5 bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white font-bold rounded-xl shadow-2xl shadow-[#0066cc]/25 hover:shadow-[#0066cc]/40 transition-all text-lg flex items-center justify-center gap-2"
              >
                <Bot className="w-5 h-5" />
                Activate All 10 Agents
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 bg-white text-[#0b2540] font-bold rounded-xl border-2 border-[#cce5ff] hover:border-[#0066cc] hover:bg-[#e6f2ff] transition-all text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#0066cc]" />
                Talk to Our Team
              </motion.button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#143f73]/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                All 10 agents included
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                No credit card required
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}