"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Handler (Sends direct to Email via Web3Forms)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Web3Forms এ ডাটা পাঠানোর ফরম্যাট
    const submissionData = {
      ...formData,
      access_key: "8a863de8-3b7c-42fd-9105-1c8e96f259c0", // এখানে আপনার Web3Forms এর Access Key টি বসান
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: "Your message has been sent directly to my email!", error: null });
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset Form
      } else {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    
    gsap.fromTo(cardRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative w-full py-24 overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h3 className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-2">Get in Touch</h3>
        <h2 className="text-4xl md:text-5xl font-black text-white">Let's Connect</h2>
      </div>

      <div className="mx-auto w-11/12 max-w-6xl">
        <div ref={cardRef} className="relative group">
          
          {/* BEHIND THE CARD DECORATION */}
          <div className="absolute -inset-2 rounded-[40px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000" />

          {/* MAIN GLASS CONTAINER */}
          <div className="relative rounded-[32px] border border-white/10 bg-[#050b1d]/40 backdrop-blur-3xl overflow-hidden p-1 md:p-1.5 shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* LEFT SIDE: INFO */}
              <div className="lg:col-span-5 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                    <p className="text-slate-400 mb-10 leading-relaxed">
                      Have a specific inquiry or just want to say hi? Fill out the form and I'll get back to you within 24 hours.
                    </p>

                    <div className="space-y-8">
                      <div className="flex items-center gap-5 group/item">
                        <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                          <a href="mailto:fardhanhasanlimon95@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                            fardhanhasanlimon95@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-5 group/item">
                        <div className="h-12 w-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-black transition-all">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Location</p>
                          <p className="text-white font-medium">Dhaka, Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SOCIAL LINKS */}
                  <div className="mt-12 pt-8 border-t border-white/5">
                    <p className="text-sm text-slate-500 mb-4 font-mono">SOCIAL CONNECT</p>
                    <div className="flex gap-4">
                      
                      {/* GitHub Link */}
                      <a 
                        href="https://github.com/Programing360" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer"
                      >
                        <FaGithub size={20} />
                      </a>

                      {/* LinkedIn Link */}
                      <a 
                        href="https://www.linkedin.com/in/fardhan-hasan-limon" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all cursor-pointer"
                      >
                        <FaLinkedin size={20} />
                      </a>

                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: FORM */}
              <div className="lg:col-span-7 p-8 md:p-12 bg-black/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/10 transition-all placeholder:text-slate-600" 
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/10 transition-all placeholder:text-slate-600" 
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/10 transition-all placeholder:text-slate-600" 
                    />
                  </div>

                  <div className="relative">
                    <textarea 
                      rows="4" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can I help you?" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-400/50 focus:ring-4 focus:ring-cyan-400/10 transition-all placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Status Notification */}
                  {status.success && <p className="text-green-400 text-sm font-medium">{status.success}</p>}
                  {status.error && <p className="text-red-400 text-sm font-medium">{status.error}</p>}

                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative w-full h-16 overflow-hidden rounded-2xl bg-white font-bold text-black transition-all ${status.loading ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                      {status.loading ? "Sending..." : "Send Message"} <Send size={18} />
                    </span>
                  </motion.button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;