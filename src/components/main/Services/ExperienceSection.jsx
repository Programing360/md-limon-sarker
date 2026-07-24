import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Briefcase, Calendar, Building2, Code, Server, Database, Globe } from 'lucide-react';

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#030712] text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-down">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
          <span>Professional Journey</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          WORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EXPERIENCE</span>
        </h2>
        
        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-3xl mx-auto relative">
        
        {/* Left Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-cyan-900/40"></div>

        {/* Experience Card Item */}
        <div className="relative pl-12 sm:pl-16 group" data-aos="fade-up">
          
          {/* Timeline Dot Node */}
          <div className="absolute left-4 sm:left-6 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-cyan-400 bg-[#030712] flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.6)]">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
          </div>

          {/* Main Card Content */}
          <div className="bg-[#090d16]/90 backdrop-blur-md border border-cyan-900/40 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]">
            
            {/* Top Row: Title & Status Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-cyan-950/60 rounded-xl border border-cyan-800/40 text-cyan-400 shadow-inner">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    MERN Stack Developer <span className="text-cyan-400 font-normal text-base">(Intern)</span>
                  </h3>
                  <p className="text-cyan-400/90 font-medium text-sm sm:text-base">
                    CodeOnix <span className="text-slate-400 text-xs font-normal ml-2">| Software Company</span>
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-medium tracking-wide shadow-sm">
                <Calendar className="w-3 h-3 text-cyan-400" />
                PRESENT / ONGOING
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
              Working as a MERN Stack Developer Intern at CodeOnix, focusing on developing full-stack web applications, writing clean and scalable JavaScript/React code, and implementing modern UI/UX components.
            </p>

            {/* Core Responsibilities Box */}
            <div className="bg-cyan-950/20 border border-cyan-800/30 rounded-xl p-4 mb-6 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Key Focus Areas & Responsibilities
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>React.js & Modern UI Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Node.js & Express.js API Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>MongoDB Database Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Cross-functional Team Collaboration</span>
                </li>
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-cyan-900/30">
              {["React.js", "JavaScript (ES6+)", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"].map((tech, idx) => (
                <span 
                  key={idx}
                  className="text-xs px-3 py-1 rounded-md bg-slate-900/80 text-cyan-300/90 border border-cyan-900/40 font-mono tracking-tight"
                >
                  #{tech}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;