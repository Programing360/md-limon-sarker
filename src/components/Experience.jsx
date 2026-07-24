import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Briefcase, Calendar, Code2, Sparkles, Building2 } from 'lucide-react';

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "CodeOnix",
      duration: "PRESENT / ONGOING",
      type: "Internship",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "MERN Stack"],
      description:
        "Actively working on modern front-end application design, building scalable web UI components, and collaborating with senior developers on real-world web applications.",
      highlight:
        "Building responsive user interfaces, integrating APIs, and enhancing full-stack development skills using MERN stack technologies."
    }
  ];

  return (
    <section className="bg-[#030712] text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center font-sans">
      
      {/* Top Badge & Header Section */}
      <div className="text-center mb-16" data-aos="fade-down">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Professional Experience</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
          WORK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EXPERIENCE</span>
        </h2>
        
        <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl w-full mx-auto relative">
        
        {/* Left Timeline Line */}
        <div className="absolute left-4 md:left-6 top-3 bottom-3 w-0.5 bg-cyan-900/40"></div>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="relative pl-12 md:pl-16 group"
              data-aos="fade-up"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute left-1.5 md:left-3.5 top-5 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-cyan-400 bg-[#030712] flex items-center justify-center group-hover:border-cyan-300 group-hover:scale-110 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-cyan-300"></div>
              </div>

              {/* Main Content Card */}
              <div className="relative bg-[#090d16]/80 backdrop-blur-md border border-cyan-900/30 rounded-2xl p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]">
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-950/50 rounded-xl border border-cyan-800/40 text-cyan-400">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400/90 font-medium text-sm sm:text-base italic">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-medium tracking-wide">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </span>
                </div>

                {/* Subtitle / Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Inner Highlight Box */}
                <div className="bg-cyan-950/20 border border-cyan-800/30 rounded-xl p-4 mb-5 text-xs sm:text-sm text-cyan-200/90 flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{exp.highlight}</span>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-cyan-900/30">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50 font-mono"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;