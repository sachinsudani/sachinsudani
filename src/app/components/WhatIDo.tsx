"use client";

import { motion } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Backend Architecture",
    desc: "Designing scalable Node.js microservices, REST & GraphQL APIs, and database schemas that handle complex business logic in production.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "System Integration",
    desc: "Building OAuth flows, CRM connectors, payment gateways (Stripe), and third-party API integrations that work reliably at scale.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "DevOps & Cloud",
    desc: "Docker containerization, AWS infrastructure (ECS, AppRunner, Lambda, S3), CI/CD pipelines, and production incident response.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "AI & LLM Engineering",
    desc: "Building RAG pipelines, AI agents, voice systems, and LLM-powered features. Prompt engineering and token-efficient development with GPT, Claude, and open-source models.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease, delay: i * 0.09 },
  }),
};

export default function WhatIDo() {
  return (
    <section id="work" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 40px" }}>

        {/* Section header */}
        <div
          className="sec-grid-responsive"
          style={{ display: "grid", gridTemplateColumns: "0.38fr 1fr", gap: "72px" }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontWeight: 500,
                marginBottom: "12px",
              }}
            >
              03 — Specializations
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "32px",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
              }}
            >
              What I do
              <div className="sec-underline" />
            </motion.div>
          </div>
          <div />
        </div>

        {/* Cards */}
        <div
          className="wid-cards-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "48px",
          }}
        >
          {CARDS.map((card, i) => (
            <WIDCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WIDCard({ card, index }: { card: (typeof CARDS)[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -3, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      style={{
        padding: "32px 28px",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "var(--shadow-md)";
        el.style.borderColor = "var(--border-hover)";
        const line = el.querySelector(".top-accent") as HTMLElement;
        if (line) line.style.transform = "scaleX(1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--border)";
        const line = el.querySelector(".top-accent") as HTMLElement;
        if (line) line.style.transform = "scaleX(0)";
      }}
    >
      {/* Top accent bar */}
      <div
        className="top-accent"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--gradient)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />

      {/* Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.09 + 0.2, ease }}
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "11px",
          background: "var(--gradient)",
          color: "var(--on-accent)",
          boxShadow: "0 4px 14px color-mix(in srgb, var(--accent) 25%, transparent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
        }}
      >
        {card.icon}
      </motion.div>

      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "17px",
          fontWeight: 600,
          marginBottom: "8px",
          letterSpacing: "-0.01em",
        }}
      >
        {card.title}
      </h3>
      <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
        {card.desc}
      </p>
    </motion.div>
  );
}
