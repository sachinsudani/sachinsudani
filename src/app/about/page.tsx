"use client";

import {
  scrollFadeInUp,
  scrollSlideInLeft,
  scrollSlideInRight,
} from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCheckCircle,
  FaCode,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    icon: FaCode,
    items: [
      { name: "React.js & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: FaServer,
    items: [
      { name: "Node.js & Express.js", level: 95 },
      { name: "MongoDB & Mongoose", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs & GraphQL", level: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: FaTools,
    items: [
      { name: "Docker & AWS", level: 85 },
      { name: "Git & GitHub", level: 95 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "AI Tools & RAG", level: 85 },
    ],
  },
];

const certifications = [
  {
    title: "Full Stack Developer",
    issuer: "Udemy",
    image: "/certifications/full-stack.png",
  },
  {
    title: "AWS Summit 2025 Participant",
    issuer: "Amazon Web Services",
    image: "/certifications/aws-summit.png",
  },
  {
    title: "AWS Foundations: Cloud Practitioner Essentials",
    issuer: "Gujarat Technological University",
    image: "/certifications/aws-foundations.png",
  },
];

const xenettAchievements = [
  "Handled Moniflo smoothly in Production and managed full Sprint delivery",
  "Implemented Google and Microsoft OAuth Flow using AI - the only team member capable of building full features with AI",
  "Delivered 3 Critical CRM Integrations within a single week",
  "Designed and implemented Inter Company feature (Model & APIs)",
  "Built Complex Entries Check List and Trend Feature under tight deadline",
  "Implemented Clearing Account feature from scratch (Model & APIs)",
  "Fixed critical Accounting upload issue as a Problem Solver",
  "Updated NPM Packages to latest versions across Xenett, Central, CP without breaking changes",
  "Added nodemon configuration for improved development workflow in Central and CP Service",
  "Solved Production Issue: P&L and BS SDK to REST migration",
  "Resolved Production Memory Leak Issue",
  "Set up Test Case Infrastructure and implemented Test Driven Development",
  "Fixed critical Production Payroll Issue",
];

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      {/* Header */}
      <motion.div className="text-center mb-16" {...scrollFadeInUp}>
        <span className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
          About Me
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Building <span className="gradient-text">Digital Excellence</span>
        </h1>
      </motion.div>

      {/* Bio Section */}
      <motion.section className="mb-20" {...scrollFadeInUp}>
        <div className="card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Mid-Senior Full Stack Developer
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                With{" "}
                <span className="text-primary font-semibold">4+ years</span> of
                hands-on experience, I specialize in building scalable,
                production-ready web applications. Currently at{" "}
                <span className="text-primary font-semibold">Xenett</span>, I
                lead backend development initiatives, architect complex systems,
                and mentor junior developers.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I&apos;m passionate about clean code, type safety, and building
                systems that scale. I&apos;ve successfully delivered critical
                features for enterprise clients including CRM integrations,
                OAuth implementations, and complex accounting workflows.
              </p>
              <motion.a
                href="/Sachin-Sudani-Resume.pdf"
                download
                className="btn btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
            <div className="flex justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-4 bg-linear-to-r from-primary to-accent rounded-2xl blur-xl opacity-30" />
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-dark">
                  <Image
                    src="/profile.avif"
                    alt="Sachin Sudani"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-20" {...scrollFadeInUp}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 dark:bg-accent/20 rounded-full text-accent text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="gradient-text">Proficiency</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="card p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-linear-to-br from-primary to-accent rounded-xl">
                  <skillGroup.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-linear-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-20">
        <motion.div className="text-center mb-12" {...scrollFadeInUp}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Xenett */}
          <motion.div className="card p-8" {...scrollSlideInLeft}>
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="p-3 bg-linear-to-br from-primary to-accent rounded-xl shrink-0">
                <FaLaptopCode className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">
                  Mid Senior Full Stack Developer
                </h3>
                <p className="text-primary font-semibold">
                  Xenett • 2024 - Present
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  Practice management software for accounting workflow
                  automation
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                Current
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {xenettAchievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <FaCheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BKSoftech */}
          <motion.div className="card p-8" {...scrollSlideInRight}>
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
              <div className="p-3 bg-linear-to-br from-slate-600 to-slate-800 rounded-xl shrink-0">
                <FaCode className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">
                  Junior Full Stack Developer
                </h3>
                <p className="text-primary font-semibold">
                  BKSoftech • 2022 - 2024
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  IT Services & Software Development Company
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">
                  Built real-world backend services with focus on modular
                  architecture, database relationships, and performance tuning
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">
                  Contributed to production features in live projects using REST
                  API design and data flow management best practices
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                <span className="text-slate-600 dark:text-slate-400">
                  Led development of features for businesses and reputed
                  individuals, implementing dynamic business feeds
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section className="mb-20" {...scrollFadeInUp}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 dark:bg-accent/20 rounded-full text-accent text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="card overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...scrollFadeInUp}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <motion.div
          className="max-w-2xl mx-auto card p-8"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-linear-to-br from-primary to-accent rounded-xl shrink-0">
              <FaGraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Bachelor of Computer Application
              </h3>
              <p className="text-primary font-semibold">
                Saurashtra University • 2019 - 2022
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Graduated with honors. Focused on software engineering, web
                development, and database management systems.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
