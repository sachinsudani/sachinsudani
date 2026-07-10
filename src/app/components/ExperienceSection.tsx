"use client";

import { motion } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const EXPERIENCE = [
  {
    role: "Mid-Senior Full Stack Developer",
    company: "Xenett",
    period: "2024 — Present",
    desc: "Practice management software for accounting workflow automation.",
    highlights: [
      "Architected real-time email sync for Outlook & Gmail — 6-Lambda serverless pipeline (SQS, Pub/Sub) with hand-built HMAC/OIDC security, zero mail lost in production",
      "Stabilized an unrunnable E2E test suite — from OOM crashes and hundreds of flaky failures to 100% green, with zero production code changes",
      "Gated every deploy on unit + E2E tests in CI/CD and cut the test stage ~57% (10.5 → 4.5 min) with parallel steps and Jest sharding",
      "Built Google & Microsoft OAuth using AI — only team member shipping full features with AI",
      "Delivered 3 critical CRM integrations within a single week",
      "Designed Inter Company, Entries Checklist & Trend, and Clearing Account features end-to-end",
      "Diagnosed and fixed production memory leak, payroll, and P&L/BS SDK→REST migration issues",
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
  return (
    <section id="experience" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 40px" }}>
        <div
          className="sec-grid-responsive"
          style={{ display: "grid", gridTemplateColumns: "0.38fr 1fr", gap: "72px" }}
        >
          {/* Left */}
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
              01 — Experience
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
              Where I&apos;ve
              <br />
              worked
              <div className="sec-underline" />
            </motion.div>
          </div>

          {/* Right — timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical gradient line */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: "5px",
                top: "10px",
                bottom: "10px",
                width: "2px",
                borderRadius: "2px",
                background:
                  "linear-gradient(180deg, var(--accent) 0%, var(--accent-2) 55%, transparent 100%)",
              }}
            />
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.12 }}
                style={{
                  position: "relative",
                  paddingLeft: "36px",
                  paddingBottom: i < EXPERIENCE.length - 1 ? "48px" : 0,
                }}
              >
                {/* Timeline dot */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "5px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--gradient)",
                    boxShadow: "0 0 0 4px var(--accent-light)",
                  }}
                />
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
                  style={{ fontSize: "14px", color: "var(--accent)", fontWeight: 600, marginBottom: "10px" }}
                >
                  {exp.company}
                </div>
                <div style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {exp.desc}
                </div>

                {/* Highlights — staggered */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
                  style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "6px" }}
                >
                  {exp.highlights.map((hl) => (
                    <motion.div
                      key={hl}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
                      }}
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
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
