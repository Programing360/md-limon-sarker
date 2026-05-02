import { motion } from "framer-motion";
import limonImage from "../../../assets/limon.jpg";

export function Banner() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 lg:px-0"
    >
      <div className="container mx-auto flex w-11/12 flex-col items-center justify-between gap-14 lg:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md"
          >
            ✨ Welcome To My Portfolio
          </motion.p>

          <h4 className="text-lg font-medium text-slate-400">Hey, I'm</h4>

          <h1 className="mt-4 flex flex-wrap items-center justify-center gap-3 text-4xl font-black leading-tight text-white md:text-6xl lg:justify-start lg:text-5xl">
            Fardhan Hasan Limon
            <motion.span
              animate={{
                rotate: [0, 20, -10, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
          </h1>
          <div className="">
            <div className="flex items-center gap-3 text-center justify-center md:justify-start">
              {" "}
              <h1>I am a</h1>{" "}
              <span className="text-rotate text-2xl">
                {" "}
                <span className="rotate-wrapper">
                  {" "}
                  <span>UI/UX Designer</span> <span>Frontend Developer</span>{" "}
                  <span>Backend Developer</span>{" "}
                  <span>MERN Stack Developer</span>{" "}
                </span>{" "}
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
              Frontend Developer
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
              MERN Stack Developer
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
              UI/UX Enthusiast
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
          >
            I design and develop modern, scalable, and high-performance web
            applications with clean UI, smooth user experience, and secure
            backend architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <button className="rounded-2xl border border-cyan-400/40 px-8 py-3 font-semibold text-white hover:outline-0 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_10px_30px_rgba(34,211,238,0.25)]">
              Hire Me
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-3 font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white">
              Download Resume
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          {/* Animated Circle */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[320px] w-[320px] rounded-full border border-cyan-400/20 border-dashed lg:h-[450px] lg:w-[450px]"
          />

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src={limonImage}
              alt="Fardhan Hasan Limon"
              className="relative z-10 h-[420px] w-[300px] rounded-[40px] object-cover grayscale transition-all duration-700 hover:grayscale-0 lg:h-[540px] lg:w-[380px]"
            />

            {/* Glass Border */}
            <div className="absolute inset-0 rounded-[40px] border border-white/10" />

            {/* Shadow Glow */}
            <div className="absolute inset-0 -z-10 rounded-[40px] bg-cyan-500/10 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
