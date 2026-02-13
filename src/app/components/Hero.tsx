"use client";

import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="flex justify-center items-center mb-6"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-2 bg-linear-to-r from-primary to-accent rounded-full blur-md opacity-75"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/profile.avif"
                alt="Sachin Sudani - Full Stack Developer"
                width={140}
                height={140}
                className="relative rounded-full w-36 h-36 object-cover ring-4 ring-white dark:ring-dark"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            {...fadeInUp}
            transition={{ delay: 0.25 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="gradient-text"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Sachin Sudani
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <span className="font-semibold text-slate-800 dark:text-white">Mid-Senior Full Stack Developer</span> with 4+ years of experience
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.45 }}
          >
            Specializing in building scalable web applications with{" "}
            <span className="text-primary font-medium">Node.js</span>,{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-primary font-medium">TypeScript</span> &{" "}
            <span className="text-primary font-medium">AWS</span>
          </motion.p>

          <motion.div
            className="flex justify-center space-x-5 mb-10"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/sachinsudani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-all hover:shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sachinsudani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-all hover:shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://x.com/sachinsudani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-all hover:shadow-lg"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaXTwitter className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/projects" className="btn btn-primary inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="/Sachin-Sudani-Resume.pdf"
                download
                className="btn btn-secondary inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn btn-outline inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
