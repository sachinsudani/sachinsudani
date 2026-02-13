"use client";

import {
  certifications,
  education,
  experience,
  skills,
} from "@/contents/about";
import {
  scrollFadeInUp,
  scrollSlideInLeft,
  scrollSlideInRight,
} from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  FaCheckCircle,
  FaCode,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const iconMap: Record<string, IconType> = {
  frontend: FaCode,
  backend: FaServer,
  devops: FaTools,
};

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
          {skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.iconName];
            return (
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
                    <Icon className="w-6 h-6 text-white" />
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
            );
          })}
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
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="card p-8"
              {...(index % 2 === 0 ? scrollSlideInLeft : scrollSlideInRight)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl shrink-0 ${
                    exp.isCurrent
                      ? "bg-linear-to-br from-primary to-accent"
                      : "bg-linear-to-br from-slate-600 to-slate-800"
                  }`}
                >
                  {exp.isCurrent ? (
                    <FaLaptopCode className="w-6 h-6 text-white" />
                  ) : (
                    <FaCode className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-semibold">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
                {exp.isCurrent && (
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                    Current
                  </span>
                )}
              </div>
              <div
                className={
                  exp.achievements.length > 5
                    ? "grid md:grid-cols-2 gap-3"
                    : "space-y-3"
                }
              >
                {exp.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <FaCheckCircle
                      className={`w-4 h-4 mt-1 shrink-0 ${
                        exp.isCurrent ? "text-green-500" : "text-primary"
                      }`}
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
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
              <h3 className="text-xl font-bold">{education.degree}</h3>
              <p className="text-primary font-semibold">
                {education.institution} • {education.period}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                {education.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
