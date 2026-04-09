import React from "react";
import {
  User,
  Code2,
  Layers3,
  Target,
  Brain,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  return (
    <section className="my-24 px-4">
      <div className="mx-auto max-w-7xl rounded-2xl border border-blue-500/20 bg-[#050d1f] p-8 shadow-[0_0_40px_rgba(0,191,255,0.25)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,191,255,0.4)] md:p-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <User className="h-8 w-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-white">
                About <span className="text-blue-400">Me</span>
              </h2>
            </div>

            <p className="text-md leading-9 text-slate-400">
              I’m Limon, a passionate web developer who enjoys building modern,
              scalable, and user-focused applications with clean UI and strong
              performance.
            </p>

            <p className="mt-8 text-md leading-9 text-slate-400">
              My journey started with frontend development and gradually
              expanded into backend technologies and full-stack MERN
              applications. I love solving problems and continuously improving
              my skills.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>Strong foundation in JavaScript & React</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>Experience with REST APIs & authentication</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>Focus on clean UI, UX & performance</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                <span>Passion for continuous learning</span>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-[#0a1428] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.25)]">
              <Code2 className="mb-4 h-8 w-8 text-blue-400" />
              <h3 className="mb-3 text-2xl font-bold text-white">
                Experience
              </h3>
              <p className="leading-8 text-slate-400">
                Building personal and real-world projects using modern web
                technologies and best practices.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-[#0a1428] p-7 shadow-[0_0_35px_rgba(0,191,255,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(0,191,255,0.4)]">
              <Layers3 className="mb-4 h-8 w-8 text-blue-400" />
              <h3 className="mb-3 text-2xl font-bold text-white">
                Tech Stack
              </h3>
              <p className="leading-8 text-slate-400">
                React, Tailwind CSS, Node.js, Express, MongoDB, Firebase, Git &
                GitHub.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-[#0a1428] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.25)]">
              <Target className="mb-4 h-8 w-8 text-blue-400" />
              <h3 className="mb-3 text-2xl font-bold text-white">Goals</h3>
              <p className="leading-8 text-slate-400">
                To grow as a full-stack developer and contribute to impactful,
                high-quality products.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-[#0a1428] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(0,191,255,0.25)]">
              <Brain className="mb-4 h-8 w-8 text-blue-400" />
              <h3 className="mb-3 text-2xl font-bold text-white">Mindset</h3>
              <p className="leading-8 text-slate-400">
                Problem-solver, detail-oriented, and always eager to learn new
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;