import React from "react";
import limonImage from "../../../assets/limon.jpg";

const Banner = () => {
  return (
    <section className="my-24 px-4 lg:px-0 min-h-screen">
      <div className="hero rounded-2xl border border-slate-800 bg-linear-to-br from-[#0b1120] via-[#09101f] to-[#111827] px-6 py-12 shadow-lg shadow-blue-900/20 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(59,130,246,0.35)] hover:shadow-blue-500/20 lg:px-12">
        <div className="hero-content flex-col-reverse items-center justify-between gap-10 lg:flex-row">
          
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <p className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium tracking-wide text-blue-400">
              Welcome To My Portfolio
            </p>

            <h4 className="text-lg font-medium text-slate-300">
              Hello, I'm
            </h4>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Fardhan Hasan Limon
            </h1>

            <div className="mt-5">
              <h2 className="text-2xl font-semibold text-blue-400 md:text-3xl">
                MERN Stack Developer
              </h2>

              <p className="mt-2 text-base text-slate-400 md:text-lg">
                Frontend Developer • Backend Developer • UI/UX Enthusiast
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              I design and develop modern, scalable, and high-performance web
              applications with clean UI, smooth user experience, and secure
              backend architecture. My goal is to build products that are both
              visually appealing and highly functional.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500">
                Hire Me
              </button>

              <button className="rounded-xl border border-slate-600 px-7 py-3 font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-[30px] bg-blue-500/20 blur-2xl"></div>

            <img
              src={limonImage}
              alt="Fardhan Hasan Limon"
              className="relative w-70 rounded-2xl border border-slate-700 object-cover shadow-2xl shadow-blue-900/30 sm:w-[340px] lg:w-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;