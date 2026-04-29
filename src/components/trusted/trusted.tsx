'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Card {
  title: string
  desc: string
  img: string
}

const cards: Card[] = [
  {
    title: "AI Lead Qualification",
    desc: "Automatically identifies high-intent leads so you spend time only on people ready to convert.",
    img: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775477233/lead-generation-active-robo_mu4ybt.png",
  },
  {
    title: "Smart Lead Matching",
    desc: "Connects each lead with the right offer or service based on their behavior and needs.",
    img: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775479263/property-robo_vtrnqk.png",
  },
  {
    title: "Multi-Channel Lead Capture",
    desc: "Capture leads from your website, ads, WhatsApp, and landing pages — all in one place.",
    img: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775558338/lead_generation_active_kk7zvz.png",
  },
  {
    title: "AI Content Generator",
    desc: "Create high-converting ads, landing pages, and messages in seconds — no copywriting needed.",
    img: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775477196/AI-Content-creations-robo_radj9b.png",
  },
  {
    title: "Automated Follow-Ups",
    desc: "Never miss a lead again. AI follows up instantly at the right time to boost conversions.",
    img: "/assets/brockerdashai.png",
  },
  {
    title: "AI Calling Assistant",
    desc: "Engage leads instantly with automated calls that collect information and qualify prospects.",
    img: "/assets/img-5.png",
  },
  {
    title: "Campaign Automation",
    desc: "Run WhatsApp, email, and SMS campaigns automatically — no manual work required.",
    img: "/assets/leadai.png",
  },
  {
    title: "Lead Data Management",
    desc: "Keep all your lead data organized, updated, and ready to act on in one smart dashboard.",
    img: "/assets/brockerdashai.png",
  },
  {
    title: "Social Media Automation",
    desc: "Schedule and publish content that attracts leads and grows your online presence.",
    img: "https://res.cloudinary.com/djipgt6vc/image/upload/v1775477177/marketing-automation-robo_rhqsqs.png",
  },
  {
    title: "SEO Growth Assistant",
    desc: "Rank higher on search engines and bring in organic leads without extra effort.",
    img: "/assets/leadai.png",
  },
]

const duplicatedCards = [...cards, ...cards, ...cards, ...cards]

export default function Trusted(): React.JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isInteracting, setIsInteracting] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoScrollInterval = useRef<ReturnType<typeof setInterval> | null>(null)
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile: Auto-scroll using interval (works alongside native scroll)
  useEffect(() => {
    if (!isMobile) return

    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    if (!isPaused && !isInteracting) {
      autoScrollInterval.current = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1
          
          const maxScroll = scrollContainer.scrollWidth / 2
          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 0
          }
        }
      }, 16)
    }

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current)
      }
    }
  }, [isMobile, isPaused, isInteracting])

  const handleTouchStart = useCallback((): void => {
    setIsInteracting(true)
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current)
      autoScrollInterval.current = null
    }
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current)
    }
  }, [])

  const handleTouchEnd = useCallback((): void => {
    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current)
    }
    resumeTimeout.current = setTimeout(() => {
      setIsInteracting(false)
    }, 1500)
  }, [])

  const handleScroll = useCallback((): void => {
    if (isInteracting) return

    setIsInteracting(true)
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current)
      autoScrollInterval.current = null
    }

    if (resumeTimeout.current) {
      clearTimeout(resumeTimeout.current)
    }
    resumeTimeout.current = setTimeout(() => {
      setIsInteracting(false)
    }, 2000)
  }, [isInteracting])

  const handleMouseEnter = useCallback((): void => setIsPaused(true), [])
  const handleMouseLeave = useCallback((): void => setIsPaused(false), [])

  return (
    <>
   

    <section className="py-12 sm:py-16 lg:py-20 border-y border-[var(--border-light)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary-600)] uppercase tracking-wider mb-3">
          Your AI-Powered Lead Generation Engine
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-tertiary)] max-w-2xl mx-auto">
           Everything you need to capture, nurture, and convert leads — fully automated with AI, so you can focus on closing deals.
          </p>
        </motion.div>

                 {/* ── Desktop Marquee ── */}
      <div
  className="hidden md:block relative pt-4 overflow-hidden"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  {/* Fades */}
  <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

  {/* Track */}
  <div className={`flex gap-5 w-max ${isPaused ? '' : 'animate-marquee'}`}>
    {duplicatedCards.map((card, i) => (
      <div
        key={i}
        className="w-[300px] flex-shrink-0 bg-white border border-gray-200 rounded-[20px] overflow-hidden relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(37,99,235,0.12)] hover:border-blue-300"
      >
        {/* IMAGE */}
        <div className="relative h-[190px] flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-sky-100 overflow-hidden">

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(#bfdbfe33_1px,transparent_1px),linear-gradient(90deg,#bfdbfe33_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Corner */}
          <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-blue-300 rounded-tr-md opacity-60" />

          {/* Number */}
          <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-[11px] font-bold w-6 h-6 rounded-md flex items-center justify-center">
            {((i % cards.length) + 1).toString().padStart(2, '0')}
          </div>

          <img
            src={card.img}
            alt={card.title}
            className="relative z-10 w-[85%] h-[85%] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_8px_24px_rgba(37,99,235,0.2)]"
          />
        </div>

        {/* BODY */}
        <div className="px-5 pb-5 pt-4 relative">
          <div className="absolute top-0 left-5 right-5 h-[1px] bg-gradient-to-r from-blue-600 via-sky-300 to-transparent opacity-40" />

          <h3 className="text-[18px] font-bold text-gray-900 mb-2">
            {card.title}
          </h3>

          <p className="text-[13px] text-gray-500 leading-relaxed">
            {card.desc}
          </p>

          <div className="mt-3 flex items-center gap-1 text-blue-600 text-xs font-semibold opacity-0 translate-x-[-6px] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            Learn more →
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
 
          {/* ── Mobile Scroll ── */}
          <div className="md:hidden relative">
            <div className="absolute left-0 top-0 bottom-4 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
 
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide pb-3"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onScroll={handleScroll}
            >
              {duplicatedCards.map((card, i) => (
              <div
  key={i}
  className="flex-shrink-0 w-[252px] bg-white border border-gray-200 rounded-[18px] overflow-hidden snap-center active:scale-[0.98] transition"
>
  <div className="h-[150px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">

    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(#bfdbfe40_1px,transparent_1px),linear-gradient(90deg,#bfdbfe40_1px,transparent_1px)] bg-[size:18px_18px]" />

    <img
      src={card.img}
      alt={card.title}
      className="relative z-10 w-[80%] h-[80%] object-contain"
    />
  </div>

  <div className="px-4 pt-3 pb-4 border-t border-blue-50">
    <h3 className="text-[13.5px] font-bold text-gray-900 mb-1 truncate">
      {card.title}
    </h3>

    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
      {card.desc}
    </p>
  </div>
</div>
              ))}
            </div>
 
            <div className="dot-indicators">
              {cards.slice(0, 5).map((_, i) => (
                <div key={i} className="dot" />
              ))}
            </div>
          </div>
 


      </div>
    </section>
    </>
  )
}