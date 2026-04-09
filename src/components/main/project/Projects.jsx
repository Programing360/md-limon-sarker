import React, { useState } from "react";

const projectData = [
  {
    id: 1,
    category: "frontend",
    title: "Modern Portfolio Website",
    description:
      "A fully responsive portfolio website built with React and Tailwind CSS featuring smooth animations and clean UI design.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    category: "backend",
    title: "Authentication API System",
    description:
      "A secure backend API system with JWT authentication, role management, and MongoDB database integration.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    category: "mern",
    title: "E-Commerce MERN Platform",
    description:
      "A complete MERN stack e-commerce application with cart, wishlist, payment system, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    category: "frontend",
    title: "Dashboard UI Design",
    description:
      "A modern admin dashboard interface with charts, tables, analytics, and responsive layout design.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectData
      : projectData.filter((project) => project.category === activeTab);

  const tabs = ["all", "frontend", "backend", "mern"];

  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[#50a2ff] font-medium uppercase tracking-[4px]">
            Project
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            My Recent Work
          </h1>
          <p className="text-gray-400 mt-5 text-base md:text-lg leading-8">
            Explore some of my recent frontend, backend, and MERN stack
            projects. Each project reflects my passion for building clean,
            modern, and user-friendly web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full capitalize text-sm font-medium transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-[#50a2ff] border-[#50a2ff] text-white"
                  : "border-gray-700 text-gray-400 hover:border-[#50a2ff] hover:text-[#50a2ff]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14 ">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#50a2ff] hover:shadow-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 p-3"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>

                <p className="text-gray-400 text-sm text-gray-300 leading-7 mt-4">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#50a2ff] hover:bg-[#50a2ff] text-white py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-gray-700 hover:border-[#50a2ff] hover:text-[#50a2ff] text-gray-300 py-3 rounded-xl font-medium transition-all duration-300"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;