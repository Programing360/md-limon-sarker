"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  FolderKanban,
  Mail,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function FHLimonLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="group relative flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
    >
      {/* Glow */}
      <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:opacity-100" />

      {/* Logo */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "300% 300%",
        }}
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg"
      >
        <span className="text-lg font-black text-white">FH</span>
      </motion.div>

      {/* Text */}
      <div className="hidden sm:flex flex-col">
        <h1 className="flex items-center gap-2 text-lg font-extrabold text-slate-900 dark:text-white">
          Limon
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>
        </h1>

        <p className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-[10px] font-semibold uppercase tracking-[0.3em] text-transparent">
          Next.js Developer
        </p>
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);

  const menuItems = [
    { id: "home", icon: Home },
    { id: "about", icon: User },
    { id: "skills", icon: Code2 },
    { id: "services", icon: Briefcase },
    { id: "projects", icon: FolderKanban },
    { id: "contact", icon: Mail },
  ];

  // =========================
  // DARK MODE
  // =========================

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // =========================
  // LENIS SMOOTH SCROLL
  // =========================

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // =========================
  // GSAP NAVBAR ANIMATION
  // =========================

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  // =========================
  // ACTIVE SECTION
  // =========================

  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.getElementById(item.id)
    );

    sections.forEach((section) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",

        onEnter: () => setActive(section.id),
        onEnterBack: () => setActive(section.id),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // =========================
  // SCROLL TO SECTION
  // =========================

  const handleScrollTo = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="sticky top-0 z-50 border-b border-slate-200/70  backdrop-blur-2xl bg-[#020817]/70"
      >
        <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">

          {/* LEFT */}
          <FHLimonLogo />

          {/* DESKTOP MENU */}
          <ul className="hidden items-center gap-2 rounded-full border  px-3 py-2 backdrop-blur-xl border-white/10 bg-white/5 lg:flex">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                      active === item.id
                        ? "text-white"
                        : "hover:text-black text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {active === item.id && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="absolute inset-0 -z-10 rounded-full border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_25px_rgba(34,211,238,0.25)]"
                      />
                    )}

                    <Icon className="h-4 w-4" />
                    {item.id}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* THEME TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setDarkMode(!darkMode)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={darkMode ? "moon" : "sun"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {darkMode ? (
                    <Moon className="h-5 w-5 text-cyan-400" />
                  ) : (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg dark:border-white/10 dark:bg-white/5 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-black dark:text-white" />
              ) : (
                <Menu className="h-5 w-5 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-20 z-40 w-[92%] max-w-md -translate-x-1/2 rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#0f172a]/90 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium capitalize transition-all duration-300 ${
                      active === item.id
                        ? "border border-cyan-400/40 bg-cyan-400/10 text-cyan-500"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.id}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}