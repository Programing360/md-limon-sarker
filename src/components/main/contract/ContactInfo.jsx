"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactInfo = () => {
  // GSAP ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".contact-card",
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  // COPY FUNCTION (no alert, smooth UX)
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);

    const toast = document.createElement("div");
    toast.innerText = "Copied ✔";
    toast.className =
      "fixed bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 rounded-full text-sm shadow-lg z-[9999]";
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 1500);
  };

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "fardhanhasanlimon95@gmail.com",
      link: "mailto:fardhanhasanlimon95@gmail.com",
      color: "text-cyan-400",
      bg: "hover:bg-cyan-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1754318654",
      link: "tel:+8801754318654",
      color: "text-green-400",
      bg: "hover:bg-green-500/10",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+880 1754318654",
      link: "https://wa.me/8801754318654",
      color: "text-emerald-400",
      bg: "hover:bg-emerald-500/10",
    },
  ];

  return (
    <section className="contact-section w-full bg-[#020b1f] py-24 px-4 overflow-hidden">
      <div className="mx-auto w-11/12 max-w-6xl text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`contact-card relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl cursor-pointer transition-all duration-300 ${item.bg}`}
              >
                {/* GLOW */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">

                  {/* ICON */}
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full border border-white/10 bg-white/5">
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                  </div>

                  {/* LABEL */}
                  <h3 className="text-lg font-semibold text-white">
                    {item.label}
                  </h3>

                  {/* VALUE */}
                  <p className="mt-2 text-slate-400 text-sm break-all">
                    {item.value}
                  </p>

                  {/* ACTION BUTTONS */}
                  <div className="mt-6 flex flex-col gap-2">

                    {/* OPEN LINK */}
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-sm text-cyan-400 hover:text-white transition"
                    >
                      Open →
                    </a>

                    {/* COPY */}
                    <button
                      onClick={() => copyToClipboard(item.value)}
                      className="text-xs text-slate-400 hover:text-white transition"
                    >
                      Copy Info
                    </button>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;