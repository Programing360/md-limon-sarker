"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiLayers,
  FiCode,
  FiArrowUpRight,
  FiX,
  FiCheckCircle,
  FiAlertTriangle,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";
import { AiFillRocket } from "react-icons/ai";
import { Link } from "react-router";

const projects = [
  {
    id: 1,
    title: "Career Prep",
    subtitle: "AI-powered career preparation and learning platform.",
    desc: "A full-stack career preparation platform featuring AI-powered learning assistance, exam support, and user management.",
    fullDesc:
      "A full-stack career preparation platform designed to help students with learning and exam preparation. Features include authentication, MCQ interfaces, admin dashboard functionality, and AI tutor integration using Google Gemini, Groq, and OpenRouter APIs. Built with React.js, TypeScript, Node.js, Express.js, and MongoDB.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AI Integration",
    ],
    image:
      "https://i.ibb.co.com/BH8cgr6n/Gemini-Generated-Image-24ficl24ficl24fi.jpg",
    githubClient: "https://github.com/Programing360/career-prep-frontend",
    demo: "https://career-prep-frontend-rho.vercel.app/",
    size: "sm",
    accent: "from-blue-600/20 to-violet-500/20",
    status: "Completed",
    mainTechStack: [
      { name: "Frontend", tech: "React.js, TypeScript" },
      { name: "Backend & API", tech: "Node.js, Express.js, REST APIs" },
      { name: "Database", tech: "MongoDB" },
      { name: "Authentication", tech: "JWT, Access & Refresh Tokens" },
      { name: "AI Integration", tech: "Google Gemini, Groq, OpenRouter" },
      { name: "Deployment", tech: "Vercel" },
    ],
    challenges: [
      {
        problem: "AI Provider Failures and API Availability",
        solution:
          "Worked on integrating multiple AI providers, including Gemini, Groq, and OpenRouter, and explored fallback handling to improve AI response reliability.",
      },
      {
        problem: "Secure User Authentication and Protected APIs",
        solution:
          "Worked on JWT-based authentication, access and refresh token handling, and protecting user-specific resources.",
      },
      {
        problem: "Frontend and Backend Integration Issues",
        solution:
          "Debugged API integration issues, updated UI components, and troubleshot environment configuration problems.",
      },
    ],
    futurePlans: [
      "Improve AI provider fallback handling and error management.",
      "Optimize API response times and overall application performance.",
      "Enhance the AI tutor experience for career preparation and learning.",
      "Expand exam management and student progress tracking features.",
    ],
  },
  {
    id: 2,
    title: "Digital Life Lessons",
    subtitle: "Library Management System & E-Learning Portal",
    desc: "Library management system with Next.js & MongoDB.",
    fullDesc:
      "Digital Life Lessons is a comprehensive digital library platform where users can explore, borrow, and manage academic resources and books seamlessly with automated tracking.",
    tags: ["Next.js", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    image:
      "https://i.ibb.co.com/B5yFGyhw/Gemini-Generated-Image-h4trc5h4trc5h4tr.png",
    githubClient: "https://github.com/Programing360/digital-live-client",
    demo: "https://digital-live-client.vercel.app",
    size: "lg",
    accent: "from-blue-600/20 to-cyan-500/20",
    status: "Production",
    mainTechStack: [
      { name: "Frontend", tech: "Next.js, React, Tailwind CSS" },
      { name: "Backend", tech: "Node.js, Express.js" },
      { name: "Database", tech: "MongoDB (Mongoose)" },
    ],
    challenges: [
      {
        problem: "Next.js App Router Serverless Connection Overhead",
        solution:
          "Implemented global Mongoose connection caching logic to prevent connection pool exhaustion during serverless function invocations.",
      },
    ],
    futurePlans: [
      "Add Audio-book Streaming Integration.",
      "Implement Student Progress Analytics Dashboard.",
    ],
  },
  {
    id: 3,
    title: "SmartWallet AI",
    subtitle: "AI-driven Personal Finance Manager & Smart Expense Tracker",
    desc: "AI-driven personal finance manager & smart expense tracker.",
    fullDesc:
      "SmartWallet AI is an advanced financial tracking application designed to simplify budget management. By leveraging AI capabilities, it automatically categorizes transactions, detects spending patterns, and provides actionable insights to help users achieve their financial goals effortlessly.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "MongoDB",
      "Redis",
    ],
    image: "https://i.ibb.co.com/LXCyQWnG/design-professional.avif",
    githubClient: "https://github.com/Programing360/smartwallet-frontend",
    demo: "https://smartwallet-frontend.vercel.app",
    size: "sm",
    accent: "from-purple-600/20 to-indigo-500/20",
    status: "Live Active",
    mainTechStack: [
      {
        name: "Frontend Framework",
        tech: "Next.js 14 (App Router), TypeScript",
      },
      { name: "UI & Animations", tech: "Tailwind CSS, HeroUI, Framer Motion" },
      { name: "Backend Services", tech: "Node.js, Express.js" },
      { name: "Database & Cache", tech: "MongoDB, Redis & BullMQ" },
      { name: "AI Integration", tech: "Google Gemini API" },
    ],
    challenges: [
      {
        problem: "AI Response Latency & UI Freezing on Large Statements",
        solution:
          "Decoupled pipeline using an async queue with Redis & BullMQ. Implemented Real-time updates via Server-Sent Events (SSE).",
      },
      {
        problem: "Race Conditions in JWT Refresh Token Rotation",
        solution:
          "Implemented an Axios Interceptor Queue with 'isRefreshing' flag to pause and retry failed requests seamlessly.",
      },
      {
        problem: "MongoDB Aggregation Latency on Analytics Charts",
        solution:
          "Applied Compound Indexing on userId/date fields and restricted early $match stages to optimize memory usage.",
      },
    ],
    futurePlans: [
      "Integrate Multi-currency Support with real-time conversion rates.",
      "Add Automated Recurring Subscription Tracking and alert notifications.",
      "Develop a Mobile Application using React Native to sync seamlessly.",
    ],
  },
  {
    id: 4,
    title: "Fresh Root",
    subtitle: "Modern E-Commerce Platform for Natural & Organic Food Products",
    desc: "E-commerce platform for natural & organic food products.",
    fullDesc:
      "Fresh Root provides health-conscious consumers with pure organic food products such as natural honey, jaggery, ghee, and fresh groceries. Built with speed and responsiveness in mind, it features real-time inventory synchronization, intuitive product filters, and secure checkout integration.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    image:
      "https://i.ibb.co.com/zW2B6GjT/design-professional-website-layout-company-specializing-gold-cryptocurrency-trading-1269188-5041.avif",
    githubClient: "https://github.com/Programing360/fresh-root",
    demo: "https://fresh-root-gilt.vercel.app",
    size: "sm",
    accent: "from-emerald-600/20 to-teal-500/20",
    status: "Live Active",
    mainTechStack: [
      { name: "Frontend Framework", tech: "Next.js (App Router), React" },
      {
        name: "Styling & UI",
        tech: "Tailwind CSS, Framer Motion, Lucide React",
      },
      { name: "Backend API", tech: "Node.js, Express.js" },
      { name: "Database", tech: "MongoDB" },
      { name: "Payment Gateway", tech: "SSLCommerz Integration" },
    ],
    challenges: [
      {
        problem: "Invalid HTML Nesting & Event Bubbling Error",
        solution:
          "Separated Link wrappers from Action buttons and applied e.stopPropagation() to prevent unintended click events.",
      },
      {
        problem: "Handling Out-of-Stock Products & Cart Sync",
        solution:
          "Added conditional UI logic to dynamically disable 'Add to Cart' buttons and display 'OUT OF STOCK' labels.",
      },
      {
        problem: "Next.js Image Optimization Engine Crashes",
        solution:
          "Built a resilient fallback image pipeline using logical OR operators to handle missing database image entries safely.",
      },
    ],
    futurePlans: [
      "Implement AI-based Personalized Product Recommendations.",
      "Add Subscriptions for Monthly Organic Basket Delivery.",
      "Integrate Real-time Order Tracking Map via Socket.io.",
    ],
  },
  {
    id: 5,
    title: "Zeroomiro E-Com",
    subtitle: "Full-stack immersive electronics shopping experience.",
    desc: "Full-stack immersive electronics shopping experience.",
    fullDesc:
      "An immersive e-commerce platform dedicated to gadget enthusiasts, featuring seamless product filtering, secure Firebase authentication, and responsive shopping cart functionalities.",
    tags: ["React", "Node.js", "Express", "Firebase"],
    image: "https://i.ibb.co.com/sv4fZDt4/banner-Mck-Up.png",
    githubClient: "https://github.com/Programing360/gadget-e-commerce-project",
    demo: "https://zeroomiro26.web.app/",
    size: "sm",
    accent: "from-pink-600/20 to-rose-500/20",
    status: "Completed",
    mainTechStack: [
      { name: "Frontend", tech: "React.js, Tailwind CSS" },
      { name: "Authentication", tech: "Firebase Auth" },
      { name: "Backend & DB", tech: "Node.js, Express.js, MongoDB" },
    ],
    challenges: [
      {
        problem: "Heavy Image Assets Slowing Initial Render Speed",
        solution:
          "Integrated Cloudinary CDN with automatic webp conversion and lazy-loading wrappers.",
      },
    ],
    futurePlans: [
      "Implement Multi-vendor Support.",
      "Add User Review and Rating Systems with Image Uploads.",
    ],
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
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

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

          <div className="flex gap-2 shrink-0">
            {project.githubClient && (
              <a
                href={project.githubClient}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 text-white/70 hover:bg-white hover:text-black transition-all"
                title="Client Repository"
              >
                <FiGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-cyan-500 text-black hover:scale-110 transition-all"
                title="Live Demo"
              >
                <FiArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/5 border border-white/10 text-slate-300 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Modal Trigger Button */}
        <div className="mb-6">
          <button
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 hover:bg-cyan-500 hover:text-black text-xs font-semibold tracking-wide transition-all duration-300"
          >
            <span>View More / Details</span>
            <FiArrowRight />
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
    <section
      id="projects"
      className="relative bg-[#020617] py-24 px-6 overflow-hidden min-h-screen"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex items-center md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-cyan-400 font-mono text-sm tracking-widest uppercase">
                <FiLayers />
                <span>Selected Works</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                FEATURED <span className="text-slate-600">PROJECTS</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-full pt-3 text-sm md:text-base">
              Showcase of engineering resilience, problem-solving, and clean
              UI/UX implementations.
            </p>
          </div>
          <div>
            <Link to="/projects">
              <button className="group relative inline-block px-6 py-2.5 rounded-full border border-white/20 text-white transition-all text-sm font-bold uppercase tracking-wider">
                <span className="absolute inset-0 bg-white/20 group-hover:bg-white rounded-full transition-all duration-150 "></span>
                <span className="relative z-10 group-hover:text-black font-mono ">
                  View All Projects
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
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
            <h4 className="text-xl font-bold text-white mb-2">
              Have a project in mind?
            </h4>
            <p className="text-slate-500 text-sm mb-6">
              Open for freelance opportunities and full-stack positions.
            </p>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-wider"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>

      {/* POPUP MODAL FOR PROJECT DETAILS */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
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
              className="relative w-full max-w-4xl bg-[#0b1329] border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-500/20 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono">
                      {selectedProject.status}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1">
                    {selectedProject.subtitle || selectedProject.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all shrink-0 ml-4"
                >
                  <FiX size={20} />
                </button>
              </div>

              {/* Quick Link Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <span>Live Project</span>
                    <FiExternalLink size={14} />
                  </a>
                )}

                {selectedProject.githubClient && (
                  <a
                    href={selectedProject.githubClient}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white font-semibold text-xs hover:bg-white/20 transition-all"
                  >
                    <FiGithub size={14} />
                    <span>Client Repository</span>
                  </a>
                )}
              </div>

              {/* Project Image Banner */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left 2-Cols: Overview, Challenges & Future Plans */}
                <div className="md:col-span-2 space-y-8">
                  {/* Overview */}
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <FiLayers className="text-cyan-400" /> Project Overview
                    </h4>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      {selectedProject.fullDesc || selectedProject.desc}
                    </p>
                  </div>

                  {/* Challenges List */}
                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <FiAlertTriangle className="text-rose-400" /> Technical
                      Challenges & Solutions
                    </h4>

                    <div className="space-y-4">
                      {selectedProject.challenges &&
                      selectedProject.challenges.length > 0 ? (
                        selectedProject.challenges.map((item, index) => (
                          <div
                            key={index}
                            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3"
                          >
                            {/* Problem */}
                            <div className="flex items-start gap-2.5">
                              <div className="p-1 bg-rose-500/10 text-rose-400 rounded mt-0.5 shrink-0">
                                <FiAlertTriangle size={14} />
                              </div>
                              <div>
                                <h5 className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-0.5">
                                  Challenge #{index + 1}
                                </h5>
                                <p className="text-slate-200 text-xs font-medium">
                                  {item.problem}
                                </p>
                              </div>
                            </div>

                            {/* Solution */}
                            <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800/80">
                              <div className="p-1 bg-emerald-500/10 text-emerald-400 rounded mt-0.5 shrink-0">
                                <FiCheckCircle size={14} />
                              </div>
                              <div>
                                <h5 className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-0.5">
                                  Solution Implemented
                                </h5>
                                <p className="text-slate-300 text-xs leading-relaxed">
                                  {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-slate-400 text-xs">
                          No specific challenges recorded for this project.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Future Plans */}
                  {selectedProject.futurePlans && (
                    <div className="space-y-3">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <AiFillRocket className="text-purple-400" /> Future
                        Improvements
                      </h4>
                      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
                        <ul className="space-y-2">
                          {selectedProject.futurePlans.map((plan, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-slate-300 text-xs"
                            >
                              <FiCheckCircle className="text-purple-400 shrink-0 mt-0.5" />
                              <span>{plan}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right 1-Col: Main Tech Stack Sidebar */}
                <div className="space-y-6">
                  {selectedProject.mainTechStack && (
                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                        <FiCpu className="text-cyan-400" /> Main Technology
                        Stack
                      </h4>

                      <div className="space-y-3">
                        {selectedProject.mainTechStack.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                              {item.name}
                            </span>
                            <p className="text-xs text-slate-200 bg-white/5 border border-white/5 rounded-lg p-2 font-medium">
                              {item.tech}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-cyan-400 transition-all"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
