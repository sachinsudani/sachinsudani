"use client";

import { projects } from "@/contents/projects";
import { scrollFadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-dark/30">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div className="text-center mb-16" {...scrollFadeInUp}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects I&apos;ve worked on, showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="skill-badge text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/projects" className="btn btn-primary inline-flex items-center gap-2">
            View All Projects
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
