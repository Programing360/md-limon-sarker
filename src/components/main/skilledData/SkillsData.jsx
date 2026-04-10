import { Braces, Code2, CodeXml, Database, GitBranch, ShieldCheck, Wrench } from "lucide-react";
import React from "react";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";
import { SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiOpenai, SiTailwindcss } from "react-icons/si";

const SkillsData = () => {
  const skillsData = [
    {
      title: "Frontend",
      icon: <Code2 className="h-7 w-7 text-blue-400" />,
      skills: [
        {
          name: "HTML",
          percent: "95%",
          value: "w-[95%]",
          icon: <SiHtml5 className="text-orange-500" />,
        },
        {
          name: "CSS",
          percent: "92%",
          value: "w-[92%]",
          icon: <FaCss3Alt className="text-blue-500" />,
        },
        {
          name: "JavaScript",
          percent: "88%",
          value: "w-[88%]",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "React",
          percent: "85%",
          value: "w-[85%]",
          icon: <FaReact className="text-blue-400" />,
        },
        {
          name: "Tailwind CSS",
          percent: "90%",
          value: "w-[90%]",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
      ],
    },
    {
      title: "Backend",
      icon: <Database className="h-7 w-7 text-blue-400" />,
      skills: [
        {
          name: "Node.js",
          percent: "82%",
          value: "w-[82%]",
          icon: <FaNodeJs className="text-green-500" />,
        },
        {
          name: "Express.js",
          percent: "80%",
          value: "w-[80%]",
          icon: <SiExpress className="text-gray-300" />,
        },
        {
          name: "MongoDB",
          percent: "78%",
          value: "w-[78%]",
          icon: <SiMongodb className="text-green-400" />,
        },
        {
          name: "Firebase",
          percent: "75%",
          value: "w-[75%]",
          icon: <SiFirebase className="text-yellow-500" />,
        },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-7 w-7 text-blue-400" />,
      skills: [
        {
          name: "Git",
          percent: "85%",
          value: "w-[85%]",
          icon: <GitBranch className="text-orange-500" />,
        },
        {
          name: "GitHub",
          percent: "88%",
          value: "w-[88%]",
          icon: <GiThunderBlade className="text-gray-300" />,
        },
        {
          name: "AI",
          percent: "85%",
          value: "w-[85%]",
          icon: <SiOpenai className="text-green-400" />,
        },
        {
          name: "REST API",
          percent: "82%",
          value: "w-[82%]",
          icon: <Braces className="text-blue-400" />,
        },
        {
          name: "JWT",
          percent: "75%",
          value: "w-[75%]",
          icon: <ShieldCheck className="text-pink-400" />,
        },
      ],
    },
  ];
  return (
    <section id="skills" className="mt-24 px-4 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Tools, technologies, and frameworks I use to build scalable and
            modern web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-indigo-400/30 bg-[#353985] p-7 shadow-blue-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
            >
              <div className="mb-8 flex items-center gap-3">
                {category.icon}
                <h3 className="text-3xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-7">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-lg font-medium text-slate-200">
                        <span className="text-xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>

                      <span className="text-base font-semibold text-slate-300">
                        {skill.percent}
                      </span>
                    </div>

                    <div className="h-3 w-full overflow-hidden rounded-full bg-[#474c8f]">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-blue-400 via-blue-400 to-fuchsia-500 ${skill.value}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsData;
