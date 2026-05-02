import React from "react";
import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";
import {
  SiBetterauth,
  SiExpress,
  SiFirebase,
  SiHeroui,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";

const SkillsData = () => {
  const skillsData = [
    {
      title: "Frontend",
      icon: <Code2 className="h-7 w-7 text-cyan-400" />,
      skills: [
        { name: "HTML", percent: "95%", value: "95%", icon: <SiHtml5 /> },
        { name: "CSS", percent: "92%", value: "92%", icon: <FaCss3Alt /> },
        { name: "JavaScript", percent: "88%", value: "88%", icon: <SiJavascript /> },
        { name: "React", percent: "85%", value: "85%", icon: <FaReact /> },
        { name: "Next js", percent: "85%", value: "85%", icon: <SiNextdotjs /> },
        { name: "Tailwind", percent: "90%", value: "90%", icon: <SiTailwindcss /> },
        { name: "Hero UI", percent: "90%", value: "90%", icon: <SiHeroui /> },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="h-7 w-7 text-cyan-400" />,
      skills: [
        { name: "Node.js", percent: "82%", value: "82%", icon: <FaNodeJs /> },
        { name: "Express", percent: "80%", value: "80%", icon: <SiExpress /> },
        { name: "MongoDB", percent: "78%", value: "78%", icon: <SiMongodb /> },
        { name: "Firebase", percent: "75%", value: "75%", icon: <SiFirebase /> },
        { name: "Better Auth", percent: "85%", value: "85%", icon: <SiBetterauth /> },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="h-7 w-7 text-cyan-400" />,
      skills: [
        { name: "Git", percent: "85%", value: "85%", icon: <GitBranch /> },
        { name: "GitHub", percent: "88%", value: "88%", icon: <GiThunderBlade /> },
        { name: "AI Tools", percent: "85%", value: "85%", icon: <SiOpenai /> },
        { name: "REST API", percent: "82%", value: "82%", icon: <Braces /> },
        { name: "JWT", percent: "75%", value: "75%", icon: <ShieldCheck /> },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen px-4 py-20 flex items-center">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Interactive 3D-style skill showcase with modern UI animations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: 1000 }}
              className="rounded-3xl border md:w-100 border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 transform-gpu"
            >
              {/* Title */}
              <div className="mb-8 flex items-center gap-3">
                {category.icon}
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="mb-2 flex items-center justify-between text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 text-lg group-hover:scale-110 transition">
                          {skill.icon}
                        </span>
                        <span className="group-hover:text-white transition">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm">{skill.percent}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        transition={{ duration: 1.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsData;
