"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  Layers3,
  Target,
  Brain,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 flex items-center overflow-hidden bg-[#020419] rounded-2xl"
    >
      {/* --------------------------------------------------------- */}
      {/* PROFESSIONAL BACKGROUND (Matching Banner & Root) */}
      {/* --------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.08]" />
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest uppercase">
                <Sparkles size={16} />
                <span>Identity</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                ENGINEERING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  WITH PURPOSE.
                </span>
              </h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-slate-500 max-w-xs text-left md:text-right font-medium">
              Turning complex logic into elegant digital experiences since 2023.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT: MAIN STORY CARD (GLASSMORPHISM) */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl relative group shadow-2xl"
            >
              {/* Subtle Decorative Icon Backdrop */}
              <div className="absolute top-6 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors pointer-events-none">
                <User size={140} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-[2px] bg-cyan-500"></span>
                The Story of Limon
              </h3>

              <div className="space-y-6 text-slate-400 text-lg leading-relaxed relative z-10">
                <p>
                  I am a professional <span className="text-white font-semibold">Web Developer</span> dedicated to 
                  architecting scalable, high-performance applications. My philosophy centers on the intersection of 
                  <span className="text-cyan-400 italic"> clean logic</span> and <span className="text-blue-400 italic"> human-centric design</span>.
                </p>
                <p>
                  What started as a curiosity for Frontend has evolved into a comprehensive mastery of the 
                  <span className="text-white"> MERN stack</span>. I don't just write code; I build digital ecosystems 
                  that solve real-world problems.
                </p>
              </div>

              {/* SKILLS CHIPS */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "JavaScript & React Specialist",
                  "MERN Stack Architecture",
                  "Performance Optimization",
                  "UI/UX Implementation",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors group/skill">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 group-hover/skill:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: FEATURE GRID */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: <Code2 />, 
                  title: "Tech Stack", 
                  desc: "Next.js, Tailwind, Node, MongoDB, Supabase.",
                },
                { 
                  icon: <Target />, 
                  title: "Vision", 
                  desc: "Building impactful products that scale seamlessly.",
                },
                { 
                  icon: <Brain />, 
                  title: "Mindset", 
                  desc: "Deep problem solving with a detail-oriented approach.",
                },
                { 
                  icon: <Layers3 />, 
                  title: "Experience", 
                  desc: "From startup prototypes to enterprise components.",
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-3xl bg-[#ffffff05] border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="mb-4 w-12 h-12 rounded-2xl flex items-center justify-center bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{card.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* CALL TO ACTION CARD */}
              <motion.div
                variants={itemVariants}
                className="col-span-1 sm:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-blue-500/20"
              >
                <div className="text-center md:text-left">
                  <h4 className="text-white font-black text-xl leading-tight">Ready to build <br/> something epic?</h4>
                </div>
                <button className="bg-white text-[#020617] px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-black hover:text-white transition-all group active:scale-95">
                  Contact Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;