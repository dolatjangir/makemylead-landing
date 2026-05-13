"use client"

import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion, useInView, useScroll, useTransform, Variants } from 'framer-motion'
import { 
  Building2, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Zap, 
  Layers, 
  Globe, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  LayoutDashboard,
  FileText,
  Settings,
  PieChart,
  CreditCard,
  Eye,
  Server,
  Clock,
  Award,
  Briefcase,
  Plus,
  Minus,
  Sparkles,
  Target,
  Maximize2,
  Bell,
  Mail,
  Phone,
  Calendar,
  PlayCircle,
  X,
  Check,
  TrendingDown,
  AlertCircle,
  MessageSquare,
  Database,
  Home,
  MapPin,
  Crown,
  Calculator,
  Bot,
  Cpu,
  Workflow,
  Rocket,
  Star,
  ArrowUpRight,
  Grid3X3,
  RefreshCw,
  ScanEye,
  Fingerprint
} from 'lucide-react'

// ─── Animation Variants ─────────────────────────────────────────────
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
}

const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

// ─── Reusable Components ────────────────────────────────────────────
const GlassCard = ({ children, className = "", hover = true, dark = false }: { 
  children: React.ReactNode
  className?: string
  hover?: boolean
  dark?: boolean
}) => (
  <motion.div 
    whileHover={hover ? { 
      y: -6, 
      boxShadow: dark 
        ? "0 25px 50px -12px rgba(0, 102, 204, 0.3)"
        : "0 20px 40px -15px rgba(0, 102, 204, 0.12)",
      transition: { duration: 0.3 } 
    } : {}}
    className={`relative overflow-hidden rounded-2xl backdrop-blur-md border transition-all duration-300 ${
      dark 
        ? 'bg-[#0b2540]/80 border-[#1d5aa6]/30 text-white' 
        : 'bg-white shadow-lg shadow-[#0066cc]/5 border-[#e6f2ff]'
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
  variant?: "primary" | "secondary" | "dark" | "success" | "outline"
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
    outline: "bg-transparent text-[#0066cc] border-[#0066cc]/30"
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

// ─── Section Components ───────────────────────────────────────────────

const AgentCard = ({ icon, title, description, badge, delay }: {
  icon: React.ReactNode
  title: string
  description: string
  badge?: string | Boolean
  delay: number
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
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white text-[10px] font-bold flex items-center justify-center shadow-md">
              AI
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-[#0b2540] text-sm mb-1 group-hover:text-[#0066cc] transition-colors">
            {title}
          </h4>
          <p className="text-xs text-[#143f73]/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </GlassCard>
  </motion.div>
)

const ProblemCard = ({ icon: Icon, title, description, index }: { 
  icon: any; title: string; description: string; index: number 
}) => (
  <GlassCard className="p-6 group relative overflow-hidden" hover={true}>
    <div className="absolute top-0 right-0 w-28 h-28 bg-[#e6f2ff] rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#e6f2ff] to-[#cce5ff] flex items-center justify-center border border-[#99ccff]/20 group-hover:from-[#0066cc] group-hover:to-[#1a7ae6] transition-all duration-300">
          <Icon className="w-5 h-5 text-[#0066cc] group-hover:text-white transition-colors" />
        </div>
        <span className="text-xs font-bold text-[#99ccff] bg-[#e6f2ff] px-2.5 py-1 rounded-full">
          0{index + 1}
        </span>
      </div>
      <h3 className="text-lg font-bold text-[#0b2540] mb-2 group-hover:text-[#0066cc] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[#143f73]/70 leading-relaxed">
        {description}
      </p>
    </div>
  </GlassCard>
)

const FeatureCard = ({ icon: Icon, title, description, stat }: { 
  icon: any; title: string; description: string; stat?: string 
}) => (
  <GlassCard className="p-6 h-full group" hover={true}>
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e6f2ff] to-[#cce5ff] flex items-center justify-center mb-4 border border-[#99ccff]/20 group-hover:from-[#0066cc] group-hover:to-[#1a7ae6] transition-all duration-300">
      <Icon className="w-6 h-6 text-[#0066cc] group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-lg font-bold mb-2 text-[#0b2540] group-hover:text-[#0066cc] transition-colors">
      {title}
    </h3>
    <p className="text-sm text-[#143f73]/70 leading-relaxed mb-4">
      {description}
    </p>
    {stat && (
      <div className="pt-3 border-t border-[#e6f2ff]">
        <span className="text-xs font-bold text-[#0066cc] bg-[#e6f2ff] px-3 py-1 rounded-full">
          {stat}
        </span>
      </div>
    )}
  </GlassCard>
)

const ComparisonRow = ({ feature, basic, pro, highlight = false }: { 
  feature: string; basic: string; pro: string; highlight?: boolean 
}) => (
  <div className={`grid grid-cols-[1.5fr,1fr,1.2fr] gap-4 p-5 items-center ${highlight ? 'bg-[#e6f2ff]/50 border-l-4 border-[#0066cc]' : 'hover:bg-[#eef6ff]/30'} transition-colors rounded-r-xl`}>
    <div className="font-semibold text-[#0b2540] text-sm flex items-center gap-2">
      <CheckCircle2 className="w-4 h-4 text-[#0066cc] shrink-0" />
      {feature}
    </div>
    <div className="text-center text-[#143f73]/50 text-sm flex items-center justify-center gap-1.5">
      <X className="w-4 h-4 text-[#ef4444]" />
      {basic}
    </div>
    <div className="text-center">
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#e6f2ff] text-[#0066cc] text-sm font-semibold border border-[#99ccff]/30">
        <Check className="w-4 h-4" />
        {pro}
      </span>
    </div>
  </div>
)

// ─── MAIN PAGE ──────────────────────────────────────────────────────
export default function AgencyPage() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60])

  // ─── Data ─────────────────────────────────────────────────────────
  const agents = [
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png" className="max-w-10 max-h-10" />,
      title: "AI Lead Qualification Agent",
      description: "Organize and segment your customer qualification automatically",
      badge: false
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png" className="max-w-10 max-h-10" />,
      title: "AI Property Matching Agent",
      description: "AI-powered property matching for perfect client fit",
      badge: true
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png" className="max-w-10 max-h-10" />,
      title: "Lead Capture Agent",
      description: "AI lead capture tracking and intelligent forecasting",
      badge: false
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png" className="max-w-10 max-h-10" />,
      title: "AI Content Creation Agent",
      description: "Automated content creation for listings and marketing",
      badge: false
    },
    {
      icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-555_kabvyd.png" className="max-w-10 max-h-10" />,
      title: "AI Follow-Up Agent",
      description: "Smart follow-up sequences that never let leads go cold",
      badge: true
    }
  ]

  const problems = [
    {
      icon: TrendingDown,
      title: "Revenue Leaking Away",
      description: "Without dynamic pricing, agencies silently lose 15–25% of potential revenue. Static rates miss demand spikes, local events, and competitor moves entirely."
    },
    {
      icon: AlertCircle,
      title: "Operational Chaos",
      description: "Managing 50+ properties across spreadsheets breeds double-bookings, missed cleanings, and guest complaints that erode your hard-earned reputation."
    },
    {
      icon: MessageSquare,
      title: "Communication Gaps",
      description: "Delayed guest responses crush conversion rates. Manual messaging across platforms eats 30+ hours weekly that should fuel growth, not admin."
    },
    {
      icon: Database,
      title: "Data Silos Everywhere",
      description: "Client reporting means cobbling data from 5+ platforms. By the time reports are ready, insights are stale and opportunities have vanished."
    }
  ]

  const features = [
    {
      icon: BarChart3,
      title: "Multi-Client Command Center",
      description: "One unified dashboard managing every client portfolio. Real-time occupancy, revenue, and performance metrics across all properties at a glance.",
      stat: "250+ Agencies Active"
    },
    {
      icon: CreditCard,
      title: "Automated Revenue Optimization",
      description: "AI-driven dynamic pricing that adjusts 4× daily. Capture demand spikes and maximize RevPAR without lifting a finger.",
      stat: "40% Avg Revenue Lift"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II certified with role-based access. Client data isolation, audit logs, and compliance reporting built right in.",
      stat: "SOC 2 Certified"
    },
    {
      icon: FileText,
      title: "White-Label Reporting",
      description: "Branded client portals and automated reports. Your logo, your domain, professional PDF exports delivered on schedule.",
      stat: "Full Brand Control"
    },
    {
      icon: PieChart,
      title: "Portfolio Analytics",
      description: "Compare client performance, identify top markets, and spot underperforming properties with predictive AI insights.",
      stat: "Real-Time Insights"
    },
    {
      icon: Award,
      title: "Agency Growth Tools",
      description: "Commission tracking, automated invoicing, and client acquisition dashboards designed specifically for scaling agencies.",
      stat: "Scale Without Limits"
    }
  ]

  const workflowSteps = [
    { step: "01", icon: Plus, title: "Agency Onboarding", desc: "Single-day setup with dedicated migration support. We handle the heavy lifting." },
    { step: "02", icon: Building2, title: "Portfolio Import", desc: "Bulk import from Airbnb, Booking.com, or spreadsheets. Zero downtime, zero headaches." },
    { step: "03", icon: Users, title: "Team & Clients", desc: "Configure roles, permissions, and isolated client workspaces with your custom branding." },
    { step: "04", icon: Zap, title: "Automation Live", desc: "Activate dynamic pricing, automated messaging, and reporting. See measurable results in 48 hours." },
    { step: "05", icon: Maximize2, title: "Scale Infinitely", desc: "Add unlimited properties and clients without operational overhead or performance drops." }
  ]

  const metrics = [
    { value: 250, suffix: "+", label: "Active Agencies", sub: "Across India & UAE" },
    { value: 12000, suffix: "+", label: "Listings Managed", sub: "Daily operations" },
    { value: 40, suffix: "%", label: "Avg Revenue Lift", sub: "Within 90 days" },
    { value: 98, suffix: "%", label: "Client Retention", sub: "Annual renewal rate" }
  ]

  const comparisonData = [
    { feature: "Portfolio Overview", basic: "Multiple logins", pro: "Unified dashboard", highlight: true },
    { feature: "Pricing Strategy", basic: "Manual updates", pro: "AI dynamic pricing", highlight: false },
    { feature: "Guest Messaging", basic: "Manual replies", pro: "100% automated", highlight: true },
    { feature: "Client Reporting", basic: "Excel exports", pro: "Real-time portals", highlight: false },
    { feature: "Revenue Tracking", basic: "Monthly reconciliation", pro: "Live P&L by property", highlight: true },
    { feature: "Scale Limit", basic: "~30 properties", pro: "Unlimited", highlight: false },
    { feature: "Branding", basic: "Platform logos", pro: "Full white-label", highlight: true }
  ]

  const securityFeatures = [
    { icon: Server, title: "Cloud Infrastructure", desc: "AWS & Azure with 99.99% uptime SLA and automatic failover across regions." },
    { icon: Shield, title: "Access Control", desc: "Granular RBAC with SSO, 2FA, and intelligent session management." },
    { icon: Lock, title: "Data Encryption", desc: "AES-256 at rest, TLS 1.3 in transit, and encrypted backups with key rotation." },
    { icon: Clock, title: "24/7 Security Ops", desc: "Real-time threat monitoring, DDoS protection, and rapid incident response." }
  ]

  return (
    <div className="min-h-screen bg-white text-[#0b2540] font-sans overflow-x-hidden">
      <Head>
        <title>Agency Solutions | Scale Your Property Management Business</title>
        <meta name="description" content="Property management software built for agencies. Multi-client dashboards, automated pricing, white-label solutions, and enterprise security." />
      </Head>

      {/* ═══════════════════════════════════════════════════════════════
          1️⃣ HERO SECTION — Centered, No Right Side
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f2ff] via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#cce5ff] to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#eef6ff] to-transparent rounded-full blur-3xl opacity-60" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6f2ff_1px,transparent_1px),linear-gradient(to_bottom,#e6f2ff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.04]" />

        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Top Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Badge variant="primary" size="md" glow={true}>
                <Bot className="w-4 h-4" />
                Powered by 10 AI Agents
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#0b2540]">
                Scale Your Agency
                <span className="block mt-2">
                  With <GradientText>Intelligent</GradientText> Automation
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#143f73]/70 max-w-3xl mx-auto leading-relaxed font-light">
                Managing multiple client portfolios shouldn't mean drowning in spreadsheets. 
                Our AI-powered platform gives you <strong className="text-[#0066cc] font-semibold">command center control</strong> over unlimited properties.
              </p>
            </motion.div>

            {/* AI Agents Grid — Compact */}
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold text-[#99ccff] uppercase tracking-widest mb-4">
                Your AI Agent Fleet
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {agents.slice(0, 5).map((agent, i) => (
                  <AgentCard key={i} {...agent} delay={i * 0.08} />
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <GlassCard className="p-5 h-full flex items-center justify-center group cursor-pointer" hover={true}>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066cc] to-[#1a7ae6] flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <Grid3X3 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-[#0066cc]">+5 More Agents</span>
                      <p className="text-xs text-[#143f73]/50 mt-1">View all AI tools</p>
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
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white text-[#0b2540] font-bold rounded-xl border-2 border-[#cce5ff] hover:border-[#0066cc] hover:bg-[#e6f2ff] transition-all flex items-center justify-center gap-2 text-lg"
              >
                <PlayCircle className="w-5 h-5 text-[#0066cc]" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div variants={fadeInUp} className="pt-6 border-t border-[#e6f2ff] max-w-2xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#143f73]/60">
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
              Why Agencies <span className="text-[#ef4444]">Struggle</span> to Scale
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/70 max-w-2xl mx-auto">
              Growth creates complexity. Without the right system, you're trading revenue for burnout.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          >
            {problems.map((problem, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <ProblemCard {...problem} index={idx} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-[#0066cc]/20 shadow-lg shadow-[#0066cc]/5">
              <Sparkles className="w-5 h-5 text-[#0066cc]" />
              <span className="text-base font-semibold text-[#0b2540]">
                Scaling isn't about working harder. It's about building <GradientText>smarter systems</GradientText>.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3️⃣ FEATURES GRID
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
                <Layers className="w-4 h-4" />
                Unified Platform
              </Badge>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mt-6 mb-6 text-[#0b2540]">
              Everything You Need to <br />
              <GradientText>Scale Confidently</GradientText>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/70">
              Replace your fragmented tool stack with one integrated platform designed specifically for property management agencies.
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
          4️⃣ METRICS STRIP
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
                <div className="text-5xl lg:text-6xl font-bold mb-2">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-lg font-semibold text-[#cce5ff] mb-1">{metric.label}</div>
                <div className="text-sm text-[#99ccff]/80">{metric.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5️⃣ WORKFLOW TIMELINE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#eef6ff]/30 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mb-6 text-[#0b2540]">
              From Setup to <GradientText>Scale</GradientText> in 5 Steps
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/70">
              A streamlined onboarding process designed to get your agency operational in days, not months.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#cce5ff] hidden lg:block rounded-full" />
            <div className="absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] hidden lg:block rounded-full opacity-20" />

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
                    <p className="text-sm text-[#143f73]/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6️⃣ WHITE-LABEL SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e6f2ff] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex justify-start">
                <Badge variant="secondary" size="lg" glow={true}>
                  <Award className="w-4 h-4" />
                  White-Label Ready
                </Badge>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-bold mt-6 mb-6 text-[#0b2540]">
                Your Brand. <br />
                <GradientText>Our Technology.</GradientText>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-[#143f73]/70 mb-8 leading-relaxed">
                Present a seamless, professional experience to your clients. They see your name, your logo, your domain—powered by our enterprise-grade infrastructure.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-3">
                {[
                  { icon: Globe, text: "Custom domain (portal.youragency.com)" },
                  { icon: Award, text: "Your logo on all client-facing materials" },
                  { icon: LayoutDashboard, text: "Branded dashboards in your colors" },
                  { icon: FileText, text: "White-label PDF reports and exports" }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-center gap-4 p-4 rounded-xl bg-[#eef6ff]/50 border border-[#cce5ff] hover:border-[#0066cc]/30 hover:bg-[#e6f2ff] transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#e6f2ff] to-[#cce5ff] flex items-center justify-center group-hover:from-[#0066cc] group-hover:to-[#1a7ae6] transition-all">
                      <item.icon className="w-5 h-5 text-[#0066cc] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[#0b2540] font-medium text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative h-[480px]">
                <motion.div 
                  animate={{ y: [0, -12, 0], rotate: [-1, 0, -1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-72 bg-white rounded-2xl shadow-2xl shadow-[#0066cc]/10 border border-[#e6f2ff] p-5 z-20"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#e6f2ff]">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066cc] to-[#1a7ae6] flex items-center justify-center text-white font-bold text-sm">
                      Y
                    </div>
                    <div>
                      <div className="font-bold text-[#0b2540] text-sm">Your Agency</div>
                      <div className="text-xs text-[#143f73]/50">Client Portal</div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-2 bg-[#e6f2ff] rounded w-3/4" />
                    <div className="h-2 bg-[#e6f2ff] rounded w-1/2" />
                    <div className="h-2 bg-[#e6f2ff] rounded w-5/6" />
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[#e6f2ff] to-[#eef6ff] border border-[#cce5ff]">
                    <div className="text-2xl font-bold text-[#0066cc]">₹4.2L</div>
                    <div className="text-xs text-[#143f73]/50">This Month Revenue</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 12, 0], rotate: [1, 0, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-0 right-0 w-72 bg-white rounded-2xl shadow-2xl shadow-[#0066cc]/10 border border-[#e6f2ff] p-5 z-10"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#e6f2ff]">
                    <div className="w-10 h-10 rounded-lg bg-[#0066cc] flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0b2540] text-sm">Monthly Report</div>
                      <div className="text-xs text-[#143f73]/50">Generated PDF</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#143f73]/50">Occupancy</span>
                      <span className="font-bold text-[#0b2540]">94%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#143f73]/50">Revenue Growth</span>
                      <span className="font-bold text-[#0066cc]">+28%</span>
                    </div>
                    <div className="h-20 bg-[#eef6ff] rounded-lg flex items-end p-2 gap-1">
                      {[30, 50, 40, 70, 60, 80, 75].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-[#0066cc] to-[#66b2ff] rounded-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#0066cc] to-[#1a7ae6] flex items-center justify-center z-30 shadow-2xl shadow-[#0066cc]/30">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
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
              Basic Tools vs <br />
              <GradientText>Agency Platform</GradientText>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-[#143f73]/70">
              The difference between managing properties and scaling a real business.
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
              <div className="text-[#0b2540]">Feature</div>
              <div className="text-[#143f73]/50 text-center">Basic Tools</div>
              <div className="text-[#0066cc] text-center bg-[#e6f2ff] rounded-lg py-2 -my-2 border border-[#99ccff]/30 text-sm">Our Platform</div>
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
              Trusted by 250+ agencies managing ₹100Cr+ in annual bookings
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8️⃣ SECURITY SECTION
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

            <motion.p variants={fadeInUp} className="text-xl text-[#99ccff]/80">
              Your client data deserves military-grade protection. We deliver exactly that.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {securityFeatures.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12 hover:border-[#0066cc]/40 transition-all text-center h-full group">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#0066cc]/20 flex items-center justify-center group-hover:bg-[#0066cc]/30 transition-colors">
                    <item.icon className="w-7 h-7 text-[#66b2ff]" />
                  </div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-[#99ccff]/70">{item.desc}</p>
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
          9️⃣ FINAL CTA
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
                Start Scaling Today
              </Badge>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2540]">
              Ready to <span className="text-[#0066cc]">Scale</span> <br />
              Your Agency?
            </h2>

            <p className="text-xl text-[#143f73]/70 max-w-2xl mx-auto">
              Join 250+ agencies who've transformed their operations. Stop juggling tools. Start scaling smart with AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(0, 102, 204, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="group px-10 py-5 bg-gradient-to-r from-[#0066cc] to-[#1a7ae6] text-white font-bold rounded-xl shadow-2xl shadow-[#0066cc]/25 hover:shadow-[#0066cc]/40 transition-all text-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Agency Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 bg-white text-[#0b2540] font-bold rounded-xl border-2 border-[#cce5ff] hover:border-[#0066cc] hover:bg-[#e6f2ff] transition-all text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#0066cc]" />
                Talk to Sales
              </motion.button>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#143f73]/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
                Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}