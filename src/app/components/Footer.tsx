import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-slate-800">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold gradient-text">
              Sachin Sudani
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social & Resume */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              <a
                href="https://github.com/sachinsudani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sachinsudani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all hover:scale-110"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/sachinsudani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all hover:scale-110"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
            <a
              href="/Sachin-Sudani-Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <FaDownload className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Sachin Sudani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
