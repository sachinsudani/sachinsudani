"use client";

import { projects } from "@/contents/projects";
import { scrollFadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="container max-w-7xl mx-auto py-12 px-4">
      {/* Header */}
      <motion.div className="text-center mb-16" {...scrollFadeInUp}>
        <span className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A collection of projects showcasing my expertise in full-stack development,
          from enterprise applications to personal experiments.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div
              className="aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                width={500}
                height={500}
              />
            </motion.div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.slice(0, 5).map((tech, techIndex) => (
                  <span key={techIndex} className="skill-badge text-xs">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="skill-badge text-xs">
                    +{project.technologies.length - 5}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
