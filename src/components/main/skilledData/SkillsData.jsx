import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Database, Wrench, ShieldCheck, 
  Cpu, Rocket, Globe, Zap 
} from "lucide-react";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { 
  SiBetterauth, SiExpress, SiFirebase, 
  SiHeroui, SiHtml5, SiJavascript, 
  SiMongodb, SiNextdotjs, SiOpenai, SiSupabase, SiTailwindcss 
} from "react-icons/si";

const skillsData = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Code2 />,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 92 },
      { name: "JavaScript", icon: <SiJavascript />, level: 88 },
      { name: "React", icon: <FaReact />, level: 85 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 90 },
      { name: "Hero UI", icon: <SiHeroui />, level: 90 },
    ],
  },
  // ... অন্য কোড ঠিক থাকবে, শুধু Backend এরিয়ার এই অবজেক্টটি আপডেট হবে ...
{
  id: "backend",
  title: "Backend",
  icon: <Database />,
  color: "from-emerald-500 to-teal-500", // Supabase এর ব্র্যান্ড কালার থিম
  skills: [
    { name: "Node.js", icon: <FaNodeJs />, level: 82 },
    { name: "Express", icon: <SiExpress />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 78 },
    { name: "Supabase", icon: <SiSupabase />, level: 88 }, // নতুন যুক্ত করা হলো
    { name: "Firebase", icon: <SiFirebase />, level: 75 },
    { name: "Better Auth", icon: <SiBetterauth />, level: 85 },
  ],
},
  {
    id: "tools",
    title: "Eco-System",
    icon: <Wrench />,
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "AI Integration", icon: <SiOpenai />, level: 85 },
      { name: "Security (JWT)", icon: <ShieldCheck />, level: 75 },
      { name: "System Arch", icon: <Cpu />, level: 80 },
      { name: "Performance", icon: <Zap />, level: 92 },
    ],
  },
];

const SkillBadge = ({ skill, index }) => (
  <motion.div
  
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all group"
  >
    <div className="text-3xl mb-3 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
      {skill.icon}
    </div>
    <span className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold group-hover:text-white">
      {skill.name}
    </span>
    <div className="mt-2 w-8 h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            className="h-full bg-cyan-500"
        />
    </div>
  </motion.div>
);

const SkillsData = () => {
  const [activeTab, setActiveTab] = useState(skillsData[0].id);

  return (
    <section id="skills" className="relative min-h-screen bg-[#030508] py-24 px-6 overflow-hidden flex items-center">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Navigation & Header */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-10"
            >
              <h2 className="text-5xl font-black text-white tracking-tighter mb-4 leading-none">
                TECH <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ARSENAL.</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                My professional toolkit for building scalable, high-performance digital products.
              </p>
            </motion.div>

            <div className="flex flex-col gap-3">
              {skillsData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border ${
                    activeTab === cat.id 
                    ? "bg-white/10 border-white/20 text-white shadow-[0_0_20px_rgba(34,211,238,0.1)]" 
                    : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === cat.id ? "bg-cyan-500 text-black" : "bg-white/5"}`}>
                    {cat.icon}
                  </div>
                  <span className="font-bold uppercase tracking-widest text-xs">{cat.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Content Grid */}
          <div className="lg:col-span-8 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {skillsData.map((cat) => cat.id === activeTab && (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                >
                  {cat.skills.map((skill, idx) => (
                    <SkillBadge key={idx} skill={skill} index={idx} />
                  ))}
                  
                  {/* Featured Card */}
                  <div className={`col-span-2 p-8 rounded-3xl bg-gradient-to-br ${cat.color} flex flex-col justify-end relative overflow-hidden group shadow-2xl shadow-cyan-500/10`}>
                    <Rocket className="absolute -top-4 -right-4 w-32 h-32 opacity-20 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-black font-black text-2xl mb-1 uppercase tracking-tighter">Mastery Level</h4>
                    <p className="text-black/70 text-xs font-bold uppercase tracking-widest">Industry Standard Experience</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsData;