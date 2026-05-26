"use client";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
        padding: "80px 40px 0",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "680px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Available label with pulse dot */}
        <div
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
        </div>

        {/* Heading */}
        <h1
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
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "17px",
            color: "var(--text-secondary)",
            lineHeight: 1.75,
            maxWidth: "460px",
            margin: "0 auto 36px",
          }}
        >
          4+ years shipping production Node.js, TypeScript &amp; AWS at scale —
          plus 3+ years building LLM-powered features, AI agents, and
          voice systems. Currently at Xenett, engineering automation with clean
          architecture and AI at the core.
        </p>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
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
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 24px color-mix(in srgb, var(--accent) 30%, transparent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            View case studies
            <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>

          <a
            href="/Sachin-Sudani-Resume.pdf"
            download
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
              transition: "all 0.25s",
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
          </a>

          <a
            href="#contact"
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
              transition: "all 0.25s",
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
          </a>
        </div>
      </div>
    </section>
  );
}
