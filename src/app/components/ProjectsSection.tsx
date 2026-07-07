"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { forwardRef, useRef } from "react";

const ease = [0.4, 0, 0.2, 1] as const;

const PROJECTS = [
  {
    num: "01 — Enterprise SaaS",
    title: "Xenett",
    desc: "Practice management platform automating accounting workflows. I lead backend — real-time email sync for Outlook & Gmail, CRM integrations, and inter-company accounting features.",
    metrics: [
      { val: "10+", label: "Features Architected" },
      { val: "Real-time", label: "Email Sync (2 Providers)" },
      { val: "AI-First", label: "Only AI Developer" },
    ],
    tech: ["Node.js", "TypeScript", "MongoDB", "AWS Lambda", "SQS", "GCP Pub/Sub", "Microservices"],
    link: { href: "https://www.xenett.com", label: "Visit Xenett" },
    image: "/projects/xenett.png",
  },
  {
    num: "02 — Cloud Accounting",
    title: "Moniflo",
    desc: "Cloud-based accounting for small businesses. I managed production deployment, full sprint delivery, and implemented Stripe payment integrations on Docker-based infrastructure.",
    metrics: [
      { val: "100%", label: "Sprint Delivery" },
      { val: "Stripe", label: "Payments" },
      { val: "Docker", label: "Infrastructure" },
    ],
    tech: ["Docker", "MongoDB", "Stripe", "ECS", "AppRunner", "Lambda"],
    link: { href: "https://en.moniflo.com", label: "Visit Moniflo" },
    image: "/projects/moniflo.png",
  },
  {
    num: "03 — Community Platform",
    title: "The Patidars",
    desc: "The world's first and largest online platform for the Patidar community — featuring real-time messaging, graph-based relationships, and push notifications at scale.",
    metrics: [
      { val: "Neo4j", label: "Graph Database" },
      { val: "Real-time", label: "With Pusher" },
    ],
    tech: ["Neo4j", "Slack API", "Pusher", "OneSignal", "SmartWave"],
    link: { href: "https://thepatidars.org", label: "Visit Platform" },
    image: "/projects/the-patidars.png",
  },
  {
    num: "04 — Client Project",
    title: "JDPR & Co. LLP",
    desc: "End-to-end website for a chartered accountancy firm — built solo from design to deployment. Optimized for SEO, performance, and conversion with a clean editorial aesthetic.",
    metrics: [
      { val: "Solo", label: "End-to-End" },
      { val: "Live", label: "In Production" },
      { val: "SEO", label: "Optimized" },
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
    link: { href: "https://jdprllp.com", label: "Visit JDPR" },
    image: "/projects/jdpr.png",
  },
  {
    num: "05 — Full Stack",
    title: "E-commerce Platform",
    desc: "A responsive e-commerce application with product browsing, cart management, and Stripe-powered checkout — built end-to-end with Node.js and MongoDB.",
    metrics: [
      { val: "Stripe", label: "Checkout" },
      { val: "Full Stack", label: "MERN Build" },
    ],
    tech: ["Node.js", "Express", "MongoDB", "JavaScript", "Stripe"],
    link: null,
    image: "/projects/e-commerce.png",
  },
];

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
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
              Selected Work
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
              Case Studies
              <div className="sec-underline" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "480px",
              alignSelf: "center",
            }}
          >
            Production projects I&apos;ve built or led — with real impact metrics and technical depth.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "64px" }}>
          {PROJECTS.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} index={i} even={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  proj,
  index,
  even,
}: {
  proj: (typeof PROJECTS)[0];
  index: number;
  even: boolean;
}) {
  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: even ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease, delay: index * 0.04 }}
      className="proj-card-responsive"
      style={{
        display: "grid",
        gridTemplateColumns: even ? "1fr 1.1fr" : "1.1fr 1fr",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "box-shadow 0.35s, border-color 0.35s, transform 0.35s",
      }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 260, damping: 22 } }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "var(--shadow-lg)";
        el.style.borderColor = "var(--border-hover)";
        const img = imgRef.current?.querySelector("img") as HTMLImageElement;
        if (img) img.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "var(--border)";
        const img = imgRef.current?.querySelector("img") as HTMLImageElement;
        if (img) img.style.transform = "scale(1)";
      }}
    >
      {even ? (
        <>
          <ProjectBody proj={proj} />
          <ProjectImage ref={imgRef} proj={proj} />
        </>
      ) : (
        <>
          <ProjectImage ref={imgRef} proj={proj} />
          <ProjectBody proj={proj} />
        </>
      )}
    </motion.div>
  );
}

const ProjectImage = forwardRef<HTMLDivElement, { proj: (typeof PROJECTS)[0] }>(
  function ProjectImage({ proj }, ref) {
    return (
      <div
        ref={ref}
        style={{
          aspectRatio: "16/10",
          overflow: "hidden",
          background: "var(--bg-subtle)",
          position: "relative",
        }}
      >
        <Image
          src={proj.image}
          alt={proj.title}
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
        />
      </div>
    );
  }
);

function ProjectBody({ proj }: { proj: (typeof PROJECTS)[0] }) {
  return (
    <div
      style={{
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--text-muted)",
          marginBottom: "10px",
          letterSpacing: "0.05em",
        }}
      >
        {proj.num}
      </div>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "24px",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: "10px",
        }}
      >
        {proj.title}
      </div>
      <p
        style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "18px" }}
      >
        {proj.desc}
      </p>

      {/* Metrics */}
      <div
        className="proj-metrics-responsive"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${proj.metrics.length}, 1fr)`,
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {proj.metrics.map((m) => (
          <div
            key={m.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              padding: "10px 14px",
              background: "var(--bg-subtle)",
              borderRadius: "10px",
              border: "1px solid var(--border)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "-0.02em",
              }}
            >
              {m.val}
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tech chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "18px" }}>
        {proj.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: "3px 9px",
              border: "1px solid var(--border)",
              borderRadius: "5px",
              fontSize: "11px",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      {proj.link && (
        <div>
          <a
            href={proj.link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "13px",
              color: "var(--text)",
              textDecoration: "none",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text)")
            }
          >
            <ExternalLinkIcon />
            {proj.link.label}
          </a>
        </div>
      )}
    </div>
  );
}
