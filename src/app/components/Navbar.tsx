"use client";

import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-lg z-50 border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            Sachin Sudani
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-slate-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-slate-600" />
              )}
            </motion.button>
            <motion.button
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 transition-colors"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
