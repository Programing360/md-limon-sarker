import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Zap, 
  CheckCircle2, 
  ExternalLink,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

// নতুন ডেটা: টেকনিক্যাল স্কিলস (পারসেন্টেজ সহ)
const skillStats = [
  { name: "Frontend (React/Next.js)", level: 90 },
  { name: "Backend (Node/Express)", level: 85 },
  { name: "Database (MongoDB/SQL)", level: 80 },
  { name: "UI/UX (Figma)", level: 75 },
];

// নতুন ডেটা: ছোট অ্যাচিভমেন্টস/কাউন্টার
const stats = [
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "15+" },
  { label: "Years Experience", value: "2+" },
  { label: "Code Commits", value: "1.2k" },
];

const UniqueServices = () => {
  return (
    <section id="services" className="bg-[#02040a] text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- STATS GRID (NEW) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">{stat.value}</h2>
              <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* --- SKILLS & PROGRESS (LEFT) --- */}
          <div>
            <h3 className="text-cyan-400 font-mono mb-4 text-sm tracking-tighter uppercase">Technical Proficiency</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Solving complex problems with <span className="text-gray-500">modern stacks.</span>
            </h2>
            
            <div className="space-y-6">
              {skillStats.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold">{skill.name}</span>
                    <span className="text-cyan-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-[6px] w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- WHY WORK WITH ME (RIGHT) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Zap />, title: "Fast Delivery", desc: "Optimized workflow for rapid deployment." },
              { icon: <CheckCircle2 />, title: "Quality Code", desc: "Clean, maintainable, and scalable architecture." },
              { icon: <MessageSquare />, title: "Support", desc: "24/7 communication and post-launch help." },
              { icon: <Globe />, title: "SEO Ready", desc: "Structure built for search engine dominance." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 transition-colors">
                <div className="text-cyan-400 mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- CONTACT CTA (NEW) --- */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative rounded-[40px] bg-gradient-to-br from-cyan-900/40 to-blue-900/20 border border-cyan-500/20 p-12 overflow-hidden text-center"
        >
          {/* Abstract background shapes */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            I'm currently available for freelance work and full-time positions. 
            Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-cyan-400 text-black font-bold rounded-full hover:bg-white transition-colors flex items-center gap-2">
              Start a Conversation <MessageSquare size={18} />
            </button>
            <div className="flex gap-2">
               <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                 <BsGithub size={20} />
               </a>
               <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10">
                 <FaLinkedin size={20} />
               </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default UniqueServices;