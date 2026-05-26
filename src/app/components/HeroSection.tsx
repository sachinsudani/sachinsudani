"use client";

import { motion } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const btnStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
};

const btnItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "var(--accent)",
          opacity: 0.07,
          filter: "blur(140px)",
          top: "-200px",
          left: "-180px",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "var(--accent)",
          opacity: 0.05,
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-100px",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "100px 40px 60px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}
        >
          {/* Label */}
          <motion.div
            variants={fadeDown}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 500,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent)",
                position: "relative",
                display: "inline-block",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: "-3px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  opacity: 0.4,
                  animation: "pulse-ring 2s ease-out infinite",
                }}
              />
            </span>
            Full Stack Developer · AI Engineer
          </motion.div>

          {/* Heading — each line staggered */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 4.8vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            I build systems that
            <br />
            scale —{" "}
            <span style={{ color: "var(--accent)" }}>with AI.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: "17px",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "460px",
              margin: "0 auto 36px",
            }}
          >
            4+ years shipping production Node.js, TypeScript &amp; AWS at scale —
            plus 3+ years building LLM-powered features, AI agents, and voice
            systems. Currently at Xenett, engineering automation with clean
            architecture and AI at the core.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={btnStagger}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              variants={btnItem}
              href="#projects"
              whileHover={{ y: -2, boxShadow: "0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 26px",
                background: "var(--accent)",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              View case studies
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>

            <motion.a
              variants={btnItem}
              href="/Sachin-Sudani-Resume.pdf"
              download
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 26px",
                background: "transparent",
                color: "var(--text)",
                border: "1.5px solid var(--border)",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                textDecoration: "none",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text)";
              }}
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </motion.a>

            <motion.a
              variants={btnItem}
              href="#contact"
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 26px",
                background: "transparent",
                color: "var(--text)",
                border: "1.5px solid var(--border)",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                textDecoration: "none",
                transition: "border-color 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text)";
              }}
            >
              Let&apos;s talk
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
