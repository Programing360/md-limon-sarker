import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Palette, Monitor, Layers3, 
  BriefcaseBusiness, GraduationCap, 
  ArrowUpRight, Sparkles, Code2, 
  Workflow, Cpu, Terminal
} from "lucide-react";

const services = [
  {
    title: "MERN Development",
    description: "End-to-end fullstack applications with a focus on scalability and clean code architecture.",
    icon: <Layers3 className="w-6 h-6" />,
    color: "from-cyan-400 to-blue-600",
    size: "col-span-2 md:col-span-2"
  },
  {
    title: "UI / UX Design",
    description: "Creating high-fidelity prototypes and intuitive interfaces using Tailwind and Framer Motion.",
    icon: <Palette className="w-6 h-6" />,
    color: "from-purple-500 to-blue-500",
    size: "col-span-2 md:col-span-1"
  },
  {
    title: "Performance Engineering",
    description: "Optimizing Core Web Vitals for blazing fast load times and superior SEO rankings.",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-orange-400 to-red-500",
    size: "col-span-2 md:col-span-1"
  },
  {
    title: "Digital Branding",
    description: "Strategic visual identity and social media presence for tech-focused ventures.",
    icon: <Terminal className="w-6 h-6" />,
    color: "from-emerald-400 to-cyan-400",
    size: "col-span-2 md:col-span-2"
  }
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-10 pb-16 border-l-2 border-white/5 last:pb-0 group"
    >
      {/* Dynamic Connector Line (Active on hover) */}
      <div className="absolute left-[-2px] top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

      {/* Timeline Dot */}
      <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#05070d] border-2 border-slate-700 group-hover:border-cyan-400 transition-all duration-300 z-10 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
      </div>
      
      <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {exp.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
              <BriefcaseBusiness size={14} className="text-cyan-500/50" />
              <span>{exp.company}</span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-cyan-400/80 bg-cyan-400/5 px-4 py-1.5 rounded-full border border-cyan-400/10 uppercase tracking-tighter self-start">
            {exp.duration}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {exp.description}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2">
          {exp.skills?.map((skill, i) => (
            <span key={i} className="text-[9px] font-bold text-slate-500 border border-white/5 px-2 py-1 rounded bg-black/20 uppercase">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Freelance / Personal Projects",
      duration: "2024 - Present",
      description: "Developing scalable fullstack applications. Focused on converting complex requirements into elegant code. Despite a non-CSE background, mastered advanced concepts like asynchronous programming and state management.",
      skills: ["React", "Node.js", "MongoDB", "Next.js", "Tailwind"]
    },
    {
      title: "Web Developer & Designer",
      company: "Amar FH Technology",
      duration: "2023 - 2024",
      description: "Leading technical content creation and web management. Bridging the gap between design aesthetics and technical performance for digital platforms.",
      skills: ["UI/UX", "Content Strategy", "Web Design"]
    },
    {
      title: "Educational Strategist",
      company: "Limon English Care",
      duration: "2022 - 2023",
      description: "Applied systematic logic to English pedagogy. This phase strengthened my analytical thinking and communication skills, which are now core assets in my development workflow.",
      skills: ["Analytical Thinking", "Leadership", "Communication"]
    }
  ];

  return (
    <section id="services" ref={containerRef} className="relative py-24 bg-[#020408] text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-cyan-400 font-mono text-xs mb-6 border border-cyan-400/20 w-fit px-4 py-1.5 rounded-full bg-cyan-400/5"
            >
              <Workflow size={14} className="animate-pulse" />
              <span className="tracking-[0.2em] uppercase">Service Ecosystem</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              SKILLS <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-800">
                MEETS VISION.
              </span>
            </h2>
          </div>
          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-8" />
          <p className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed italic">
            "Your background doesn't define your future, your code does." - Specialized in bridging the gap between non-technical logic and full-stack engineering.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-40">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`${service.size} group relative p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-cyan-500/30 transition-all duration-500`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1.5px] mb-8`}>
                <div className="w-full h-full bg-[#020408] rounded-[14px] flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">{service.description}</p>
              
              <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-white/30 group-hover:text-cyan-400 transition-all">
                EXPLORE CORE <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* TIMELINE SECTION */}
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-4xl font-bold mb-4">The Evolution</h3>
              <div className="h-1 w-20 bg-cyan-500 rounded-full" />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Transitioning from a <span className="text-white font-semibold">Non-CSE background</span> allowed me to approach problems with a unique, user-first perspective. 
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-3xl font-black text-cyan-400 mb-1">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Projects Done</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-3xl font-black text-purple-500 mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Commitment</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;