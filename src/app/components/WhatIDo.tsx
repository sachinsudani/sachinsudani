"use client";

import { forwardRef, useEffect, useRef } from "react";

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
    delay: "reveal-delay-1",
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
    delay: "reveal-delay-2",
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
    delay: "reveal-delay-3",
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
    delay: "reveal-delay-3",
  },
];

export default function WhatIDo() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = [headerRef.current, ...cardRefs.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal sec-grid-responsive"
          style={{ display: "grid", gridTemplateColumns: "0.38fr 1fr", gap: "72px" }}
        >
          <div>
            <div
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
              Specializations
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "32px",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
              }}
            >
              What I do
            </div>
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
            <WIDCard
              key={card.title}
              card={card}
              ref={(el) => { cardRefs.current[i] = el; }}
            />
          ))}
        </div>
      </div>

    </section>
  );
}

const WIDCard = forwardRef<
  HTMLDivElement,
  { card: (typeof CARDS)[0] }
>(function WIDCard({ card }, ref) {
  return (
    <div
      ref={ref}
      className={`reveal ${card.delay}`}
      style={{
        padding: "32px 28px",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        transition: "all 0.3s",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "var(--shadow-md)";
        el.style.borderColor = "var(--border-hover)";
        el.style.transform = "translateY(-2px)";
        const line = el.querySelector(".top-accent") as HTMLElement;
        if (line) line.style.transform = "scaleX(1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
        const line = el.querySelector(".top-accent") as HTMLElement;
        if (line) line.style.transform = "scaleX(0)";
      }}
    >
      {/* Top accent line */}
      <div
        className="top-accent"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "var(--accent)",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "var(--accent-light)",
          color: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
        }}
      >
        {card.icon}
      </div>

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
      <p
        style={{
          fontSize: "14px",
          color: "var(--text-secondary)",
          lineHeight: 1.65,
        }}
      >
        {card.desc}
      </p>
    </div>
  );
});
