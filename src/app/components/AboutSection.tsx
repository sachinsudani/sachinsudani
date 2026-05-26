"use client";

import { useEffect, useRef } from "react";

const TECH = [
  "Node.js", "Express", "TypeScript", "React", "Next.js",
  "MongoDB", "PostgreSQL", "Docker", "AWS", "GraphQL", "REST APIs", "CI/CD",
  "LLM / RAG", "Embeddings", "AI Agents", "Voice AI", "Prompt Engineering",
];

const CREDS = ["AWS Summit 2025", "AWS Cloud Practitioner"];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      style={{ padding: "120px 0" }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <div
          ref={ref}
          className="reveal sec-grid-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "0.38fr 1fr",
            gap: "72px",
          }}
        >
          {/* Left */}
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
              About
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
              Background
            </div>
          </div>

          {/* Right */}
          <div>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "580px",
                marginBottom: "14px",
              }}
            >
              I&apos;m a full stack developer and{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                AI engineer
              </strong>{" "}
              who builds production systems that scale. At{" "}
              <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                Xenett
              </strong>
              , I lead backend development — architecting microservices, building
              complex integrations, and shipping AI-powered features that
              solve real accounting problems.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "580px",
              }}
            >
              Beyond the backend, I build with LLMs — RAG pipelines, AI agents,
              voice systems, and prompt engineering. I use AI aggressively in
              my own workflow too: I&apos;m the only engineer on my team shipping
              full features end-to-end with AI tooling.
            </p>

            {/* Tech chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
                marginTop: "28px",
              }}
            >
              {TECH.map((t) => (
                <Chip key={t} label={t} />
              ))}
            </div>

            {/* Credentials */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              {CREDS.map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "7px 14px",
                    background: "var(--accent-light)",
                    borderRadius: "8px",
                    fontSize: "12px",
                    color: "var(--accent)",
                    fontWeight: 600,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Education */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "baseline",
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: 600 }}>BCA</span>
              <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                Saurashtra University
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  marginLeft: "auto",
                }}
              >
                2019–2022
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .sec-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        padding: "5px 13px",
        background: "var(--bg-subtle)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        fontSize: "12px",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-mono)",
        transition: "all 0.2s",
        letterSpacing: "-0.01em",
        cursor: "default",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--accent)";
        el.style.color = "var(--accent)";
        el.style.background = "var(--accent-light)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.color = "var(--text-secondary)";
        el.style.background = "var(--bg-subtle)";
      }}
    >
      {label}
    </span>
  );
}
