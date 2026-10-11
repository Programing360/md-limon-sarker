import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithub,
  SiDocker,
  SiPrisma,
  SiPython,
  SiRedux,
  SiVercel,
  SiFigma,
  SiGit,
  SiHtml5,
  SiCss,
} from "react-icons/si";

// import IconType from "react-icons";

const technologies = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "CI/CD",
    icon: SiGithub,
    color: "#58A6FF",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#FFFFFF",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
  },
];

const TechnologyCard = ({ technology }) => {
  const Icon = technology.icon;

  return (
    <div
      className="
        group
        flex
        h-[52px]
        shrink-0
        items-center
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-[#10161d]/90
        px-5
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-[#151d26]
        hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
      "
    >
      <Icon
        size={22}
        style={{ color: technology.color }}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span
        className="
          whitespace-nowrap
          text-sm
          font-semibold
          tracking-wide
          text-gray-400
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {technology.name}
      </span>
    </div>
  );
};

const TechnologyIcon = () => {
  return (
    <section className="relative w-full overflow-hidden  py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex items-center gap-5 px-6 md:px-10">
          <div className="relative">
            <h2
              className="
                whitespace-nowrap
                text-[11px]
                font-black
                uppercase
                tracking-[0.35em]
                text-white
              "
            >
              Core Technologies
            </h2>

            {/* Small cyan dot */}
            <span
              className="
                absolute
                -left-4
                top-1/2
                h-1.5
                w-1.5
                -translate-y-1/2
                rounded-full
                bg-cyan-400
                shadow-[0_0_10px_#22d3ee]
              "
            />
          </div>

          {/* Heading line */}
          <div className="relative h-px flex-1 bg-white/10">
            <div className="absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-cyan-400/60 to-transparent" />
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-24
              bg-gradient-to-r
              from-[#050a0f]
              to-transparent
              md:w-40
            "
          />

          {/* Right fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-24
              bg-gradient-to-l
              from-[#050a0f]
              to-transparent
              md:w-40
            "
          />

          <div className="tech-marquee flex w-max gap-4 py-3">
            {/* First set */}
            <div className="flex shrink-0 gap-4">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={`first-${technology.name}`}
                  technology={technology}
                />
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex shrink-0 gap-4">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={`second-${technology.name}`}
                  technology={technology}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyIcon;
