"use client";

import Image from "next/image";
import { forwardRef, useEffect, useRef } from "react";

const PROJECTS = [
  {
    num: "01 — Enterprise SaaS",
    title: "Xenett",
    desc: "Practice management platform automating accounting workflows. I lead backend — building CRM integrations, complex entry systems, and inter-company features for firms.",
    metrics: [
      { val: "3", label: "CRM Integrations / Week" },
      { val: "5+", label: "Features Shipped" },
      { val: "0", label: "Prod Memory Leaks" },
    ],
    tech: ["Node.js", "Express", "MongoDB", "TypeScript", "Microservices", "S3"],
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
    num: "04 — Full Stack",
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

export default function ProjectsSection() {
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" style={{ padding: "120px 0" }}>
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
              Selected Work
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
              Case Studies
            </div>
          </div>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "480px",
              alignSelf: "center",
            }}
          >
            Production projects I&apos;ve built or led — with real impact metrics and
            technical depth.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "64px" }}
        >
          {PROJECTS.map((proj, i) => (
            <ProjectCard
              key={proj.title}
              proj={proj}
              even={i % 2 === 1}
              ref={(el) => { cardRefs.current[i] = el; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectCard = forwardRef<
  HTMLDivElement,
  { proj: (typeof PROJECTS)[0]; even: boolean }
>(function ProjectCard({ proj, even }, ref) {
  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="reveal proj-card-responsive"
      style={{
        display: "grid",
        gridTemplateColumns: even ? "1fr 1.1fr" : "1.1fr 1fr",
        background: "var(--bg-elevated)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.35s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "var(--shadow-lg)";
        el.style.transform = "translateY(-3px)";
        el.style.borderColor = "var(--border-hover)";
        const img = imgRef.current?.querySelector("img") as HTMLImageElement;
        if (img) img.style.transform = "scale(1.04)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
        el.style.borderColor = "var(--border)";
        const img = imgRef.current?.querySelector("img") as HTMLImageElement;
        if (img) img.style.transform = "scale(1)";
      }}
    >
      {/* Image (order based on even) */}
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
    </div>
  );
});

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
        style={{
          fontSize: "14px",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          marginBottom: "18px",
        }}
      >
        {proj.desc}
      </p>

      {/* Metrics */}
      <div
        style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}
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
              minWidth: "100px",
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
