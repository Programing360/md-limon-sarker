"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaUniversity, FaCode } from "react-icons/fa";

const EducationCard = ({ title, status, institution, field, year, icon: Icon, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="ml-8 relative group"
    >
      {/* Timeline Connector Dot */}
      <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-[#030712] border-2 border-slate-700 group-hover:border-cyan-400 transition-all duration-500 z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#22d3ee] transition-all" />
      </div>

      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 group-hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
        {/* Subtle Background Icon */}
        <Icon className="absolute -right-4 -bottom-4 text-white/[0.02] group-hover:text-cyan-500/[0.05] text-8xl transition-colors duration-500" />

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-cyan-500/60 font-mono tracking-wider italic">
                {institution}
              </p>
            </div>
          </div>
          <span className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-white/5 border border-white/10 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all">
            {year || status}
          </span>
        </div>

        <div className="space-y-2 relative z-10">
          {field && (
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
              <b className="text-gray-300">Field:</b> {field}
            </p>
          )}
          {description && (
            <div className="mt-4 p-3 rounded-lg bg-cyan-500/5 border-l-2 border-cyan-500/50">
              <p className="text-xs text-gray-400 leading-relaxed flex items-start gap-2">
                <FaCode className="mt-1 text-cyan-400 shrink-0" />
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Arts (Honours)",
      status: "2nd Year (Ongoing)",
      institution: "Sirajganj Govt. College (National University)",
      field: "Islamic History And Culture",
      icon: FaUniversity,
      description: "Self-transitioning into Software Engineering by mastering the MERN stack alongside academic studies. Applying analytical historical research methods to structured code logic."
    },
    {
      title: "Higher Secondary Certificate",
      year: "2023",
      institution: "Govt. Begum Nurunnahar Tarkobagish College",
      field: "Humanities",
      icon: FaGraduationCap,
    },
    {
      title: "Secondary School Certificate",
      year: "2021",
      institution: "Dhangora High School",
      field: "General",
      icon: FaSchool,
    }
  ];

  return (
    <section id="education" className="relative py-24 bg-[#020617] text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-400/5 border border-cyan-400/20"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-cyan-400">
              Academic Background
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            EDUCATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">JOURNEY</span>
          </h2>
          <div className="h-1.5 w-24 bg-cyan-500 mx-auto mt-6 rounded-full shadow-[0_0_15px_#06b6d4]" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/5 space-y-12">
          {/* Animated Glowing Line Overlay */}
          <div className="absolute left-[-2px] top-0 w-[2px] h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent opacity-30" />

          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;