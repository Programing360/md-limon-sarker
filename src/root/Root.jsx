import React from "react";
import Navbar from "../components/shared/Navbar";
import About from "../components/main/about/About";
import SkillsData from "../components/main/skilledData/SkillsData";
import Services from "../components/main/Services/Services";
import Projects from "../components/main/project/Projects";
import Contact from "../components/main/contract/Contact";
import Footer from "../components/main/footer/Footer";
import { Banner } from "../components/main/banner/Banner";
import Education from "../components/main/Education/Education";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop ";
import ContactInfo from "../components/main/contract/ContactInfo";
import UniqueServices from "../components/main/Services/UniqueService";

const Root = () => {
  return (
    // MAIN WRAPPER WITH DARK THEME
    <div className="relative min-h-screen w-full bg-[#020617] selection:bg-cyan-500/30 selection:text-cyan-400">
      
      {/* --------------------------------------------------------- */}
      {/* GLOBAL BACKGROUND ELEMENTS (Banner er style er sathe match kore) */}
      {/* --------------------------------------------------------- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 1. Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15]" />

        {/* 2. Floating Animated Orbs (Soft Glows) */}
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] h-[400px] w-[400px] rounded-full bg-indigo-600/5 blur-[120px]" />
      </div>

      {/* --------------------------------------------------------- */}
      {/* CONTENT LAYER */}
      {/* --------------------------------------------------------- */}
      <div className="relative z-10">
        <ScrollToTop />
        <Navbar />
        
        {/* Banner full width thake */}
        <Banner />

        {/* Baaki section gulo container er bhetore */}
        <div className="container mx-auto px-4 md:w-10/12 lg:w-9/12 xl:w-8/12 space-y-24 md:space-y-32 py-20">
          
          {/* Section Divider Style - Optional */}
          <section className="relative overflow-visible">
             <About />
          </section>

          <section className="relative">
             <SkillsData />
          </section>

          <section className="relative">
             <Education />
          </section>

          <section className="relative">
             <Services />
          </section>

          <section className="relative">
             <UniqueServices />
          </section>

          <section className="relative">
             <Projects />
          </section>

          <div className="">
             <ContactInfo />
          </div>
             <Contact />

        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Root;