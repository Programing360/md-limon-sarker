"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
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
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Scroll logic: change active state based on section visibility
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);

    const sections = [
      "home",
      "about",
      "skills",
      "services",
      "projects",
      "contact",
    ];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Section center point logic for more accuracy
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section);
        }
      }
    }
  });

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleScrollTo = (id) => {
    setActive(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center">
        {/* Main Navbar Capsule */}
        <nav
          className={`relative flex items-center justify-between w-full max-w-5xl px-5 py-2 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "bg-slate-900/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "bg-white/5"
          }`}
        >
          {/* Logo Section */}
          <div
            className="group flex items-center gap-3 cursor-pointer select-none"
            onClick={() => handleScrollTo("home")}
          >
            {/* LOGO BOX WITH NEON GLOW */}
            <div className="relative">
              {/* Animated Ring around the logo box */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-30 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200"></div>

              <div className="relative h-10 w-10 bg-[#0f172a] border border-white/10 rounded-xl flex items-center justify-center overflow-hidden">
                {/* Background Hover Slide Effect */}
                <div className="absolute inset-0 translate-y-10 bg-gradient-to-br from-cyan-500 to-blue-600 transition-transform duration-500 ease-out group-hover:translate-y-0"></div>

                <span className="relative z-10 font-black text-white text-base tracking-tighter transition-colors duration-300 group-hover:text-white">
                  FH
                </span>
              </div>
            </div>

            {/* TEXT WITH CHARACTER SPACING & GRADIENT */}
            <div className="flex flex-col justify-start leading-none">
              <span className="hidden sm:block text-[10px] font-bold text-cyan-400 tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Portfolio
              </span>
              <span className="hidden sm:block font-black text-white text-xl tracking-tighter">
                LIM
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:from-white group-hover:to-white">
                  ON
                </span>
              </span>
            </div>

            {/* ACTIVE INDICATOR DOT */}
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse hidden md:block shadow-[0_0_10px_#06b6d4]"></div>
          </div>

          {/* DESKTOP NAV (Magnetic Active Bar) */}
          <ul className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                    active === item.id
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* SMOOTH ACTIVE BAR (The Magic) */}
                  {active === item.id && (
                    <motion.div
                      layoutId="nav-active-bar"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#22d3ee]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* HOVER GLOW EFFECT */}
                  {active === item.id && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute inset-0 bg-cyan-500/10 rounded-lg -z-0"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex px-5 py-2 bg-white text-black text-[10px] font-black uppercase rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center">
              Hire Me <ArrowRight></ArrowRight>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white bg-white/10 rounded-full"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-6 right-6 mt-4 p-4 bg-slate-900/95 border border-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${
                    active === item.id
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-400 hover:bg-white/5"
                  }`}
                >
                  <span className="font-bold uppercase text-xs tracking-widest">
                    {item.label}
                  </span>
                  <item.icon size={16} />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
