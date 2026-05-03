"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: "gamehub",
    image: "https://i.ibb.co.com/fYDB3Bh4/Chat-GPT-Image-Apr-30-2026-02-01-29-PM.png",
    title: "Online Book Borrowing Platform",
    desc: "A modern library management platform with authentication, borrowing system, admin dashboard, protected routes, and responsive UI built using Next.js and MongoDB.",
    tags: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/Programing360/online-book-borrowing",
    demo: "#",
    accent: "#3b82f6",
  },

  {
    id: "gdocs",
    image: "https://i.ibb.co/9HnPRG9G/Dashboard.png",
    title: "Keen Keeper Platform",
    desc: "A friendship management platform where users can manage close friends, authentication, profile systems, and modern responsive UI.",
    tags: ["React", "Firebase", "Tailwind", "Better Auth"],
    github: "https://github.com/Programing360/keen-keeper-projects",
    demo: "https://keen-keeper-projects.vercel.app/",
    accent: "#10b981",
  },

  {
    id: "zeroomiro",
    image:
      "https://i.ibb.co.com/7xXd57Fp/Screenshot-2026-05-02-153945.png",
    title: "Zeroomiro E-Commerce",
    desc: "A fully responsive e-commerce platform with cart system, authentication, dynamic products, secure checkout flow, and modern UI.",
    tags: ["React", "Firebase", "Node.js", "Tailwind"],
    github: "https://github.com/Programing360/gadget-e-commerce-project",
    demo: "https://zeroomiro26.web.app/",
    accent: "#8b5cf6",
  },
];

// ─────────────────────────────────────────────────────────────
// ANIMATION
// ─────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ─────────────────────────────────────────────────────────────
// TAG
// ─────────────────────────────────────────────────────────────

const Tag = ({ label }) => (
  <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-white/70 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-300">
    {label}
  </span>
);

// ─────────────────────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -10,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Glow */}
      <div
        className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"
        style={{
          background: `radial-gradient(circle at top, ${project.accent}40, transparent 70%)`,
        }}
      />

      {/* Border Gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `linear-gradient(135deg, ${project.accent}30, transparent 40%)`,
        }}
      />

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />

        {/* Floating Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <a
            href={project.github}
            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
          >
            <FiGithub size={18} />
          </a>

          <a
            href={project.demo}
            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <div
            className="w-14 h-[3px] rounded-full mt-2"
            style={{
              background: project.accent,
            }}
          />
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/60">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <a
            href={project.github}
            target="_blank"
            className="flex-1 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white/80 flex items-center justify-center gap-2 hover:bg-white/10 transition"
          >
            <FiGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            className="flex-1 py-3 rounded-xl text-white flex items-center justify-center gap-2 transition"
            target="_blank"
            style={{
              background: project.accent,
            }}
          >
            <FiExternalLink />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────────────────────

export default function PremiumProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen overflow-hidden bg-[#050816] px-6 py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-blue-400 text-sm font-semibold mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Featured{" "}
            <span className="text-blue-500">
              Projects
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-white/50 text-lg leading-relaxed">
            A collection of modern full-stack applications built
            with performance, scalability, and beautiful user
            experience in mind.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}