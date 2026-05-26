"use client";

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "36px 0",
        transition: "border-color var(--transition)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          © 2026 Sachin Sudani
        </span>
        <div style={{ display: "flex", gap: "20px" }}>
          {[
            { label: "GitHub", href: "https://github.com/sachinsudani" },
            { label: "LinkedIn", href: "https://linkedin.com/in/sachin-sudani" },
            { label: "X", href: "https://x.com/sachinsudani" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
