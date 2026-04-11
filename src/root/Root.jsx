import React from "react";
import Navbar from "../components/shared/Navbar";
import Banner from "../components/main/banner/Banner";
import About from "../components/main/about/About";
import Skills from "../components/main/skilledData/SkillsData";
import SkillsData from "../components/main/skilledData/SkillsData";
import Services from "../components/main/Services/Services";
import Projects from "../components/main/project/Projects";
import Contact from "../components/main/contract/Contact";
import Footer from "../components/main/footer/Footer";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="container mx-auto w-8/12">
        <Banner></Banner>
        <About></About>
        <SkillsData></SkillsData>
        <Services></Services>
        <Projects></Projects>
        <Contact></Contact>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
