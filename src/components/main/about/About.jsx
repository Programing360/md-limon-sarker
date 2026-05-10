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
    <section id="about" className="relative min-h-screen py-24 flex items-center overflow-hidden bg-[#02040a]">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm tracking-widest uppercase">
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
            <motion.p variants={itemVariants} className="text-slate-500 max-w-xs text-right font-medium">
              Turning complex logic into elegant digital experiences since 2021.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left: Content Card */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl relative group"
            >
              <div className="absolute top-6 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                <User size={120} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-500"></span>
                The Story of Limon
              </h3>

              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  I am a professional <span className="text-white font-semibold">Web Developer</span> dedicated to 
                  architecting scalable, high-performance applications. My philosophy centers on the intersection of 
                  <span className="text-blue-400 italic"> clean logic</span> and <span className="text-cyan-400 italic"> human-centric design</span>.
                </p>
                <p>
                  What started as a curiosity for Frontend has evolved into a comprehensive mastery of the 
                  <span className="text-white"> MERN stack</span>. I don't just write code; I build digital ecosystems 
                  that solve real-world problems.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "JavaScript & React Specialist",
                  "MERN Stack Architecture",
                  "Performance Optimization",
                  "UI/UX Implementation",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Feature Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { 
                  icon: <Code2 />, 
                  title: "Tech Stack", 
                  desc: "Next.js, Tailwind, Node, MongoDB, Supabase.",
                  color: "blue" 
                },
                { 
                  icon: <Target />, 
                  title: "Vision", 
                  desc: "Building impactful products that scale seamlessly.",
                  color: "cyan" 
                },
                { 
                  icon: <Brain />, 
                  title: "Mindset", 
                  desc: "Deep problem solving with a detail-oriented approach.",
                  color: "indigo" 
                },
                { 
                  icon: <Layers3 />, 
                  title: "Experience", 
                  desc: "From startup prototypes to enterprise components.",
                  color: "emerald" 
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between"
                >
                  <div className={`mb-4 w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/10 text-blue-400`}>
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">{card.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Call to action card */}
              <motion.div
                variants={itemVariants}
                className="col-span-1 sm:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div className="text-center md:text-left">
                  <h4 className="text-white font-black text-xl leading-tight">Ready to build <br/> something epic?</h4>
                </div>
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-black hover:text-white transition-all group">
                  Contact Me <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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