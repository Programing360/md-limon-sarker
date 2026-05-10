import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  ArrowRight,
  Download,
} from "lucide-react";

import limonImage from "../../../assets/limon.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Banner() {
  const bannerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);

  // =========================
  // LENIS
  // =========================

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // =========================
  // AOS
  // =========================

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  // =========================
  // GSAP
  // =========================

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotate: 8,
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.4,
        ease: "expo.out",
      }
    );

    gsap.to(imageRef.current, {
      yPercent: -10,
      ease: "none",

      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  // =========================
  // SCROLL
  // =========================

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={bannerRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#020817] px-4 lg:px-0"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">

        {/* TOP LIGHT */}
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-full rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* RIGHT LIGHT */}
        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[120px]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      </div>

      <div className="container relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center justify-between gap-16 py-20 lg:flex-row">

        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}

        <div
          ref={titleRef}
          className="max-w-3xl text-center lg:text-left"
        >

          {/* BADGE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2 text-sm font-medium text-cyan-400 backdrop-blur-xl"
          >
            ✨ Welcome To My Portfolio
          </motion.div>

          {/* SMALL TEXT */}

          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-medium text-slate-400"
          >
            Hey, I'm
          </motion.h4>

          {/* TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-3 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:justify-start lg:text-7xl"
          >
            Fardhan Hasan Limon

            <motion.span
              animate={{
                rotate: [0, 20, -10, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="inline-block origin-[70%_70%]"
            >
              👋
            </motion.span>
          </motion.h1>

          {/* ROTATING TEXT */}

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-5 flex flex-wrap items-center justify-center gap-3 text-lg lg:justify-start"
          >
            <span className="font-medium text-slate-300">
              I am a
            </span>

            <div className="relative h-10 overflow-hidden">
              <motion.div
                animate={{
                  y: [0, -40, -80, -120, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col text-left text-2xl font-bold text-cyan-400"
              >
                <span className="h-10">
                  UI/UX Designer
                </span>

                <span className="h-10">
                  Frontend Developer
                </span>

                <span className="h-10">
                  Backend Developer
                </span>

                <span className="h-10">
                  MERN Stack Developer
                </span>
              </motion.div>
            </div>
          </div>

          {/* SKILLS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {[
              "Frontend Developer",
              "MERN Stack Developer",
              "UI/UX Enthusiast",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-300/20 bg-white/5 px-5 py-2 text-sm font-medium text-slate-300 backdrop-blur-xl transition-all duration-500 hover:text-cyan-400"
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-2xl text-base leading-8 text-slate-400 md:text-lg"
          >
            I design and develop modern, scalable,
            high-performance web applications with
            clean UI, smooth user experience,
            advanced animations, and secure backend
            architecture.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >

            {/* HIRE BUTTON */}

            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
            >
              Hire Me

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* RESUME */}

            <button className="group flex items-center justify-center gap-2 rounded-2xl border border-slate-300/20 bg-white/5 px-8 py-4 font-semibold text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400">
              Download Resume

              <Download className="h-5 w-5" />
            </button>

          </motion.div>

          {/* SOCIAL */}

          <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
            {[FaGithub, FaLinkedin, FaFacebook].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300/20 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <Icon className="h-5 w-5" />
              </motion.button>
            ))}
          </div>

        </div>

        {/* ========================= */}
        {/* RIGHT IMAGE */}
        {/* ========================= */}

        {/* ========================= */}
{/* RIGHT IMAGE (Updated Design) */}
{/* ========================= */}

<motion.div
  ref={imageRef}
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "expo.out" }}
  className="relative flex items-center justify-center lg:flex-1"
>
  {/* RADIANT BACKGROUND GLOW */}
  <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" />
  <div className="absolute h-[300px] w-[300px] rounded-full bg-indigo-600/20 blur-[80px] delay-700" />

  {/* DYNAMIC TECH ORBIT */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="absolute h-[500px] w-[500px] rounded-[60px] border border-cyan-400/10 border-dashed"
  />

  <div className="relative group">
    
    {/* FLOATING DECO: CODE SNIPPET CARD */}
    <motion.div
      animate={{ y: [0, -20, 0], rotate: [-5, -2, -5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-16 top-10 z-30 hidden xl:block"
    >
      <div className="rounded-2xl border border-white/10 bg-[#020817]/80 p-4 backdrop-blur-2xl shadow-2xl">
        <div className="flex gap-1.5 mb-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
        <code className="text-[10px] text-cyan-400 font-mono">
          const dev = "MD Limon"; <br/>
          status: "Coding...";
        </code>
      </div>
    </motion.div>

    {/* MAIN IMAGE CONTAINER WITH GLASSMORPHISM FRAME */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative z-20 overflow-hidden"
      style={{
        clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)", // Unique Slanted Shape
      }}
    >
      {/* GLOSSY OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <img
        src={limonImage}
        alt="MD Limon"
        className="h-[450px] w-[320px] object-cover sm:h-[550px] sm:w-[380px] lg:h-[600px] lg:w-[420px] transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      />

      {/* INNER BORDER GRADIENT */}
      <div className="absolute inset-0 border-[8px] border-white/5 pointer-events-none" />
    </motion.div>

    {/* ACCENT SHAPE BEHIND IMAGE */}
    <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 rounded-[40px] blur-2xl group-hover:opacity-40 transition-opacity" />

    {/* FLOATING STATUS BADGE */}
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-8 bottom-20 z-30 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-3xl shadow-xl"
    >
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </div>
      <span className="text-xs font-bold tracking-widest text-white uppercase">Open to Work</span>
    </motion.div>

  </div>

  {/* TECH STACK ICONS CIRCLE */}
  <div className="absolute -bottom-10 flex gap-4">
    {["mongodb", "express", "react", "nodejs"].map((tech, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ delay: 1 + (idx * 0.1) }}
        className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-lg hover:border-cyan-400/50 transition-colors"
      >
        <img src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} />
      </motion.div>
    ))}
  </div>
</motion.div>
      </div>
    </section>
  );
}