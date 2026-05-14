"use client";

import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    role: "Mid-Senior Full Stack Developer",
    company: "Xenett",
    period: "2024 — Present",
    desc: "Practice management software for accounting workflow automation.",
    highlights: [
      "Built Google & Microsoft OAuth flows — the only team member shipping full features with AI tooling",
      "Delivered 3 critical CRM integrations in a single week under deadline",
      "Architected Inter Company and Clearing Account features end-to-end",
      "Resolved production memory leaks and migrated P&L/BS SDK to REST",
      "Set up test infrastructure and introduced TDD practices team-wide",
    ],
  },
  {
    role: "Junior Full Stack Developer",
    company: "BKSoftech",
    period: "2022 — 2024",
    desc: "IT services & software development company.",
    highlights: [
      "Built production backend services with modular architecture and performance tuning",
      "Shipped features using REST API best practices for live client projects",
      "Led development of dynamic business feeds for enterprise clients",
    ],
  },
];

export default function ExperienceSection() {
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
    <section id="experience" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 40px" }}>
        <div
          ref={ref}
          className="reveal sec-grid-responsive"
          style={{ display: "grid", gridTemplateColumns: "0.38fr 1fr", gap: "72px" }}
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
              Experience
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
              Where I&apos;ve
              <br />
              worked
            </div>
          </div>

          {/* Right — exp list */}
          <div>
            {EXPERIENCE.map((exp, i) => (
              <div
                key={exp.company}
                style={{
                  paddingTop: i === 0 ? 0 : "36px",
                  paddingBottom: "36px",
                  borderBottom: i < EXPERIENCE.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "6px",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "18px",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.role}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--text-muted)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--accent)",
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                  }}
                >
                  {exp.desc}
                </div>
                <div
                  style={{
                    marginTop: "14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {exp.highlights.map((hl) => (
                    <div
                      key={hl}
                      style={{
                        fontSize: "13px",
                        color: "var(--text-secondary)",
                        paddingLeft: "16px",
                        position: "relative",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "8px",
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                          display: "block",
                        }}
                      />
                      {hl}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
