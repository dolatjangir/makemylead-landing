"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

/* ─── FAQ Data ────────────────────────────────────────────────────────────── */
const FAQS: FaqItem[] = [
  {
    category: "Getting Started",
    question: "What exactly does your AI platform do?",
    answer:
      "Our AI platform works like a full-time digital team for your business. It captures leads, replies instantly across channels, qualifies prospects, and manages follow-ups automatically — so you never miss an opportunity and can focus on closing deals instead of chasing them.",
  },
  {
    category: "Getting Started",
    question: "How is this different from a normal chatbot?",
    answer:
      "Unlike basic chatbots that only respond to messages, our AI actively manages your workflow. It understands user intent, follows up automatically, books meetings, and keeps conversations moving — even when you're offline.",
  },
  {
    category: "Getting Started",
    question: "How fast can I get started?",
    answer:
      "You can be up and running in just a few hours. Simply add your listings, connect your channels, and your AI agents will start capturing and responding to leads immediately.",
  },
  {
    category: "AI Agents",
    question: "Do I need to manage multiple AI tools?",
    answer:
      "No. Everything is unified into one system. All AI agents share the same data and work together seamlessly — so you don’t need to switch between tools or manage anything manually.",
  },
  {
    category: "AI Agents",
    question: "Can the AI take actions automatically?",
    answer:
      "Yes — and you stay in control. You can choose how autonomous the system should be. It can fully automate tasks like replying to leads and booking meetings, or simply assist you with suggestions.",
  },
  {
    category: "AI Agents",
    question: "How accurate and reliable is the AI?",
    answer:
      "The AI is trained on real-world workflows and continuously improves over time. It prioritizes accuracy and will flag uncertainties instead of making incorrect decisions — ensuring reliable performance you can trust.",
  },
  {
    category: "Performance",
    question: "Will this actually increase my sales?",
    answer:
      "Yes. Most businesses see immediate improvements in response time, lead engagement, and conversion rates. Since speed is critical in sales, responding instantly gives you a major advantage over competitors.",
  },
  {
    category: "Data & Security",
    question: "Is my data secure?",
    answer:
      "Absolutely. Your data is encrypted and securely stored. Only you and your team have access, and we follow strict security practices to ensure complete protection.",
  },
  {
    category: "Data & Security",
    question: "Does this work for Indian real estate businesses?",
    answer:
      "Yes. The platform is built with Indian workflows in mind — including property listings, buyer behavior, and communication patterns like WhatsApp and calls.",
  },
  {
    category: "Pricing",
    question: "Are there any hidden charges?",
    answer:
      "No hidden fees. Everything is transparent — you pay only for your plan, and all core features are included.",
  },
  {
    category: "Pricing",
    question: "Can I try it before subscribing?",
    answer:
      "Yes. You can start with a free trial to see how the AI works in your real workflow before making any commitment.",
  },
  {
    category: "Integration",
    question: "Can I connect this with my existing tools?",
    answer:
      "Yes. Our platform integrates with popular tools and can also be customized to work with your existing systems — ensuring a smooth transition without disrupting your workflow.",
  },
  {
    category: "Support",
    question: "What kind of support do you provide?",
    answer:
      "We provide dedicated support to help you at every step — from onboarding to scaling. Whether you need setup help, strategy guidance, or troubleshooting, our team is always available.",
  },
];

/* ─── FaqSection Component ────────────────────────────────────────────────── */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-24">

      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-primary-200)" }}
      />
      <div
        className="pointer-events-none absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-primary-300)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{ background: "var(--color-primary-600)" }}
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </div>

          {/* Live agent badge */}
          {/* <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.12em] uppercase mb-4 ml-2"
            style={{
              background: "var(--color-primary-50)",
              border: "1px solid var(--color-primary-200)",
              color: "var(--color-primary-600)",
            }}
          >
            <span className="relative inline-flex w-2 h-2">
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-60"
                style={{ background: "var(--color-primary-600)" }}
              />
              <span
                className="relative rounded-full w-2 h-2"
                style={{ background: "var(--color-primary-600)" }}
              />
            </span>
            AI Agents · Live Support
          </div> */}

          <h2
            className="text-4xl font-bold mb-4 block"
            style={{ color: "var(--text-primary)" }}
          >
            Everything You Need to Know
          </h2>

          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
           Get clear answers about how our AI automates lead management, improves response time, and helps you close more deals — without extra effort.
          </p>
        </div>

        {/* ── FAQ Items ── */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "var(--bg-primary)",
                  border: isOpen
                    ? "1px solid var(--color-primary-300)"
                    : "1px solid var(--border-light)",
                  boxShadow: isOpen
                    ? "0 4px 24px rgba(0,102,204,0.10)"
                    : "0 1px 6px rgba(0,60,120,0.05)",
                }}
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 md:p-6 lg:p-8 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">

                      {/* Number bubble */}
                      <span
                        className="flex items-center justify-center min-w-8 min-h-8 w-8 h-8 rounded-full text-sm font-bold transition-all duration-300 flex-shrink-0"
                        style={{
                          backgroundColor: isOpen
                            ? "var(--color-primary-600)"
                            : "var(--color-primary-100)",
                          color: isOpen
                            ? "#ffffff"
                            : "var(--color-primary-600)",
                        }}
                      >
                        {index + 1}
                      </span>

                      {/* Category tag */}
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: isOpen
                            ? "var(--color-primary-100)"
                            : "var(--color-primary-50)",
                          color: "var(--color-primary-600)",
                        }}
                      >
                        {faq.category}
                      </span>
                    </div>

                    <h3
                      className="text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 mt-2 pl-11"
                      style={{
                        color: isOpen
                          ? "var(--color-primary-600)"
                          : "var(--text-primary)",
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 mt-1"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--color-primary-100)"
                        : "var(--bg-tertiary, #f0f6ff)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown
                      className="w-5 h-5"
                      style={{
                        color: isOpen
                          ? "var(--color-primary-600)"
                          : "var(--text-secondary)",
                      }}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "480px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div
                      className="pl-6 pt-2 border-l-4 ml-11"
                      style={{ borderColor: "var(--color-primary-200)" }}
                    >
                      <p
                        className="leading-relaxed text-base md:text-lg"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <div
          className="mt-12 text-center rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-700), var(--color-primary-600), var(--color-primary-500))",
            boxShadow: "0 8px 40px rgba(0,102,204,0.25)",
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative">
            {/* Pinging badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
              <span className="relative inline-flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-70" />
                <span className="relative rounded-full bg-white w-2 h-2" />
              </span>
              We usually reply within a few hours
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to see it in action?

            </h3>

            <p className="text-white/80 mb-6 text-lg">
              Discover how AI can transform your sales process — from capturing leads to closing deals — all on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                className="bg-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                style={{ color: "var(--color-primary-600)" }}
              >
               Talk to an Expert
              </button>
              <button
                type="button"
                className="bg-white/10 border border-white/25 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 text-sm"
              >
               Start Free Trial
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}