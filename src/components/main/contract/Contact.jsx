"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // ================= LENIS =================
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
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

    return () => lenis.destroy();
  }, []);

  // ================= AOS =================
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);

  // ================= GSAP =================
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen w-full bg-[#020b1f] px-4 py-24 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto w-11/12 max-w-7xl">

        {/* MAIN CARD */}
        <div
          ref={cardRef}
          className="relative group rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 shadow-2xl transition-all duration-500"
        >
          {/* HOVER GLOW */}
          <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div data-aos="fade-right" className="space-y-6 text-white">
              <h2 className="text-4xl md:text-5xl font-bold">
                Let’s Build Something <span className="text-cyan-400">Amazing</span>
              </h2>

              <p className="text-slate-400 leading-8">
                I’m open for freelance, full-time roles and collaborations.
                Let’s create something impactful together 🚀
              </p>

              <div className="space-y-3 text-slate-300">
                <p>✔ Clean & scalable code</p>
                <p>✔ Fast response</p>
                <p>✔ Modern UI/UX design</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              data-aos="fade-left"
              className="rounded-2xl border border-white/10 bg-[#0b132b]/60 p-6 md:p-8 backdrop-blur-xl"
            >
              <form className="space-y-4">

                <input
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400"
                />

                <input
                  placeholder="Your Email"
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full rounded-xl bg-black/30 border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400 resize-none"
                />

                {/* MAGNETIC BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full overflow-hidden rounded-xl py-4 font-bold text-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-lg"
                >
                  Send Message
                </motion.button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;