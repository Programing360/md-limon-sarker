import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ExternalLink, Calendar, Award } from "lucide-react";

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Vertical Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-slate-800 group-last:h-1/2">
        <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-blue-500 to-cyan-400 group-hover:h-full transition-all duration-1000" />
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-[-6px] top-0 h-3 w-3 rounded-full bg-slate-800 border-2 border-slate-700 group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300 z-10" />

      <div className="bg-[#0a1428]/50 border border-white/5 p-6 rounded-2xl hover:border-blue-500/30 hover:bg-[#0a1428] transition-all duration-300 shadow-xl relative overflow-hidden">
        {/* Decorative Background Icon */}
        <div className="absolute -right-4 -bottom-4 text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors">
          {exp.type === "work" ? <Briefcase size={120} /> : <GraduationCap size={120} />}
        </div>

        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-1">
              <Calendar size={12} />
              {exp.duration}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {exp.title}
            </h3>
            <p className="text-slate-400 font-medium flex items-center gap-2">
              {exp.company}
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span className="text-xs text-slate-500">{exp.location || "Remote"}</span>
            </p>
          </div>
          
          {/* Tag for Non-CSE background strength */}
          <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-tighter">
            {exp.type === "work" ? "Professional" : "Academic"}
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed text-sm relative z-10">
          {exp.description}
        </p>

        {exp.skills && (
          <div className="mt-4 flex flex-wrap gap-2">
            {exp.skills.map((skill, sIndex) => (
              <span key={sIndex} className="text-[10px] font-medium px-2 py-1 bg-slate-800/50 text-slate-300 rounded-md border border-white/5">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Full-Stack Web Developer",
      company: "Your Current/Recent Role",
      duration: "2024 - Present",
      location: "Dhaka, BD",
      description: "Developing modern web applications using MERN stack. Focused on creating seamless user experiences and scalable backend architectures. Implementing high-performance UI components with Next.js.",
      skills: ["React", "Next.js", "Node.js", "Tailwind CSS"]
    },
    {
      type: "work",
      title: "Web Developer & Educator",
      company: "Limon English Care",
      duration: "2023 - 2024",
      location: "Hybrid",
      description: "Managed digital branding and technical infrastructure. Simultaneously led English language training programs, demonstrating strong communication and leadership skills—essential for collaborative dev environments.",
      skills: ["Digital Branding", "Leadership", "Web Management"]
    },
    {
      type: "edu",
      title: "Bachelor of Arts / Science", // Apnar real degree ekhane din
      company: "Your University Name",
      duration: "2020 - 2024",
      location: "Bangladesh",
      description: "Transitioned from a non-technical background to full-stack development through intensive self-study and professional bootcamps. Focused on logic building and problem-solving.",
      skills: ["Problem Solving", "Critical Thinking"]
    }
  ];

  return (
    <div className="lg:col-span-8">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Award className="text-blue-500" />
          Professional <span className="text-blue-500">Timeline</span>
        </h2>
        <p className="text-slate-500 mt-2">A record of my professional growth and academic journey.</p>
      </div>

      <div className="relative">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;