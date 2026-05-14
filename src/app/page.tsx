import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import WhatIDo from "./components/WhatIDo";

function Divider() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 40px" }}>
      <div
        style={{
          height: "1px",
          background: "var(--border)",
          transition: "background var(--transition)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <WhatIDo />
        <Divider />
        <ExperienceSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
