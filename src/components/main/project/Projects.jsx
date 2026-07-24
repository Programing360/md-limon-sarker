"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiCode,
  FiArrowUpRight,
  FiTool,
  FiX,
  FiCheckCircle,
  FiAlertTriangle,
  FiCpu
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Digital Life Lessons",
    desc: "Library management system with Next.js & MongoDB.",
    tags: ["Next.js", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    image: "https://i.ibb.co.com/B5yFGyhw/Gemini-Generated-Image-h4trc5h4trc5h4tr.png",
    github: "https://github.com/Programing360/digital-live-client",
    demo: "https://digital-live-client.vercel.app",
    size: "lg",
    accent: "from-blue-600/20 to-cyan-500/20",
    status: "Production",
    challenges: [
      {
        problem: "Next.js App Router Serverless Connection Overhead",
        solution: "Implemented global Mongoose connection caching logic to prevent connection pool exhaustion during serverless function invocations."
      }
    ]
  },
  {
    id: 2,
    title: "SmartWallet AI",
    desc: "AI-driven personal finance manager & smart expense tracker.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "MongoDB", "Redis"],
    image: "https://i.ibb.co.com/LXCyQWnG/design-professional.avif",
    github: "https://github.com/Programing360/smart-wallet-ai",
    demo: "https://smart-wallet-ai.vercel.app",
    size: "sm",
    accent: "from-purple-600/20 to-indigo-500/20",
    status: "Live Active",
    challenges: [
      {
        problem: "AI Response Latency & UI Freezing on Large Statements",
        solution: "Decoupled pipeline using an async queue with Redis & BullMQ. Implemented Real-time updates via Server-Sent Events (SSE)."
      },
      {
        problem: "Race Conditions in JWT Refresh Token Rotation",
        solution: "Implemented an Axios Interceptor Queue with 'isRefreshing' flag to pause and retry failed requests seamlessly."
      },
      {
        problem: "MongoDB Aggregation Latency on Analytics Charts",
        solution: "Applied Compound Indexing on userId/date fields and restricted early $match stages to optimize memory usage."
      }
    ]
  },
  {
    id: 3,
    title: "Fresh Root",
    desc: "E-commerce platform for natural & organic food products.",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "https://i.ibb.co.com/zW2B6GjT/design-professional-website-layout-company-specializing-gold-cryptocurrency-trading-1269188-5041.avif",
    github: "https://github.com/Programing360/fresh-root",
    demo: "https://fresh-root.vercel.app",
    size: "sm",
    accent: "from-emerald-600/20 to-teal-500/20",
    status: "Live Active",
    challenges: [
      {
        problem: "Invalid HTML Nesting & Event Bubbling Error",
        solution: "Separated Link wrappers from Action buttons and applied e.stopPropagation() to prevent unintended click events."
      },
      {
        problem: "Handling Out-of-Stock Products & Cart Sync",
        solution: "Added conditional UI logic to dynamically disable 'Add to Cart' buttons and display 'OUT OF STOCK' labels."
      },
      {
        problem: "Next.js Image Optimization Engine Crashes",
        solution: "Built a resilient fallback image pipeline using logical OR operators to handle missing database image entries safely."
      }
    ]
  },
  {
    id: 4,
    title: "Zeroomiro E-Com",
    desc: "Full-stack immersive electronics shopping experience.",
    tags: ["React", "Node.js", "Express", "Firebase"],
    image: "https://i.ibb.co.com/sv4fZDt4/banner-Mck-Up.png",
    github: "https://github.com/Programing360/gadget-e-commerce-project",
    demo: "https://zeroomiro26.web.app/",
    size: "sm",
    accent: "from-pink-600/20 to-rose-500/20",
    status: "Completed",
    challenges: [
      {
        problem: "Heavy Image Assets Slowing Initial Render Speed",
        solution: "Integrated Cloudinary CDN with automatic webp conversion and lazy-loading wrappers."
      }
    ]
  },
];

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0f1d] transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 ${
        project.size === "lg" ? "md:col-span-2 lg:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Background Accent Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="flex flex-col h-full p-6 md:p-8 relative z-10">
        
        {/* Top Bar: Title & Action Links */}
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono">
                {project.status}
              </span>
            </div>
            <p className="text-slate-400 text-sm md:text-base line-clamp-1">
              {project.desc}
            </p>
          </div>
          <div className="flex gap-2">
            <a href={project.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 text-white/70 hover:bg-white hover:text-black transition-all">
              <FiGithub size={18} />
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-cyan-500 text-black hover:scale-110 transition-all">
              <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/5 border border-white/10 text-slate-300 rounded-lg">
              {tag}
            </span>
          ))}
        </div>

        {/* Challenges Modal Trigger Button */}
        <div className="mb-6">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 hover:bg-cyan-500 hover:text-black text-xs font-semibold tracking-wide transition-all duration-300"
          >
            <FiTool className="shrink-0" />
            <span>Tech Challenges & Solutions</span>
          </button>
        </div>

        {/* Bento Image Box */}
        <div className="mt-auto relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-60 border border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </motion.div>
  );
};

export default function BentoProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative bg-[#020617] py-24 px-6 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-widest uppercase">
              <FiLayers />
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              FEATURED <span className="text-slate-600">PROJECTS</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm text-sm md:text-base">
            Showcase of engineering resilience, problem-solving, and clean UI/UX implementations.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={setSelectedProject} />
          ))}

          {/* Hire Me CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-white/10 bg-transparent text-center hover:border-cyan-500/40 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500 group-hover:text-black transition-all">
              <FiCode size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Have a project in mind?</h4>
            <p className="text-slate-500 text-sm mb-6">Open for freelance opportunities and full-stack positions.</p>
            <a href="#contact" className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-wider">
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>

      {/* POPUP MODAL FOR TECH CHALLENGES */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            
            {/* Modal Overlay Dismiss */}
            <div 
              className="absolute inset-0" 
              onClick={() => setSelectedProject(null)} 
            />

            {/* Modal Window Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#0b1329] border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-500/20 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase mb-1">
                    <FiCpu />
                    <span>Technical Retrospective</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Modal Content: Challenges List */}
              <div className="space-y-6">
                {selectedProject.challenges && selectedProject.challenges.length > 0 ? (
                  selectedProject.challenges.map((item, index) => (
                    <div key={index} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                      
                      {/* The Bug / Challenge */}
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 bg-rose-500/10 text-rose-400 rounded-lg mt-0.5 shrink-0">
                          <FiAlertTriangle size={16} />
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
                            Challenge / Problem #{index + 1}
                          </h5>
                          <p className="text-slate-200 text-sm font-medium">
                            {item.problem}
                          </p>
                        </div>
                      </div>

                      {/* The Solution */}
                      <div className="flex items-start gap-3 pt-2 border-t border-slate-800/80">
                        <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg mt-0.5 shrink-0">
                          <FiCheckCircle size={16} />
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                            How I Solved It
                          </h5>
                          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                            {item.solution}
                          </p>
                        </div>
                      </div>

                    </div>
                  ))
                ) : (
                  <p className="text-slate-400 text-sm">No detailed technical challenges recorded for this project.</p>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all"
                >
                  Close Retrospective
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}