import React from "react";
import { useLocation } from "react-router";

const Contact = () => {
    
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-10 ">
      <div className="w-full max-w-7xl border border-slate-700 rounded-[28px] bg-[#020b1f] shadow-2xl px-6 md:px-10 py-10 hover:shadow-md hover:shadow-blue-500 hover:-translate-y-2 transition-all duration-300">
        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
          {/* Left Side */}
          <div data-aos="fade-right" className="text-white space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-[#50a2ff] text-4xl">✈</div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Get In <span className="text-[#50a2ff]">Touch</span>
              </h2>
            </div>

            <p className="text-slate-400 text-lg leading-8 max-w-xl">
              I’m currently open to new opportunities, freelance work, and
              collaborative projects. If you have an idea, a question, or just
              want to say hello — feel free to reach out.
            </p>

            <div className="space-y-5 pt-4">
              <div className="flex items-center gap-4 text-slate-300 text-lg">
                <span className="w-3 h-3 rounded-full bg-[#50a2ff]"></span>
                <span>Open to full-time & freelance roles</span>
              </div>

              <div className="flex items-center gap-4 text-slate-300 text-lg">
                <span className="w-3 h-3 rounded-full bg-violet-400"></span>
                <span>Quick response via email</span>
              </div>

              <div className="flex items-center gap-4 text-slate-300 text-lg">
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                <span>Passionate about clean, scalable code</span>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div  data-aos="fade-left" className="inset-0 bg-linear-to-r from-[#1e1b4b] via-[#4338ca] to-[#0f172a] animate-none rounded-[24px] border border-slate-500 p-6 md:p-8 shadow-xl ">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#0b132b] border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-[#50a2ff] transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#0b132b] border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-[#50a2ff] transition"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#0b132b] border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-[#50a2ff] transition"
                />
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full bg-[#0b132b] border border-slate-700 rounded-xl px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-[#50a2ff] transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-black text-lg bg-gradient-to-r from-[#50a2ff] via-blue-400 to-purple-500 hover:scale-[1.02] transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
