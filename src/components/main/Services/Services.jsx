import React from "react";
import {
  Palette,
  Monitor,
  Database,
  Layers3,
  BriefcaseBusiness,
  Server,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "UI / UX Design",
    description:
      "Creating clean, modern, and user-focused designs that improve usability and deliver a seamless user experience.",
    icon: <Palette size={40} />,
  },
  {
    title: "Frontend Development",
    description:
      "Building responsive, fast, and interactive web interfaces using React, Tailwind CSS, and modern frontend technologies.",
    icon: <Monitor size={40} />,
  },
  {
    title: "Backend Development",
    description:
      "Developing secure and scalable server-side applications, APIs, and database systems using Node.js and MongoDB.",
    icon: <Database size={40} />,
  },
  {
    title: "MERN Stack Development",
    description:
      "Delivering complete full-stack web solutions with MongoDB, Express.js, React, and Node.js for modern businesses.",
    icon: <Layers3 size={40} />,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Demo Company",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Worked on responsive UI development, API integration, and performance optimization using React and Tailwind CSS.",
    icon: <BriefcaseBusiness size={40} />,
  },
  {
    title: "Backend Developer Intern",
    company: "Demo Company",
    duration: "Jan 2024 - Apr 2024",
    description:
      "Built REST APIs, implemented authentication systems, and managed database operations with Node.js and MongoDB.",
    icon: <Server size={40} />,
  },
  {
    title: "BSc in Computer Science",
    company: "Demo University",
    duration: "2021 - Present",
    description:
      "Studying software engineering, database systems, algorithms, data structures, and modern web development technologies.",
    icon: <GraduationCap size={40} />,
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="min-h-screen py-20 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Services Section */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#50a2ff] font-medium uppercase tracking-[4px]">
              My Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              Professional Solutions For Your Business
            </h1>
            <p className="text-gray-400 mt-5 text-base md:text-lg">
              I provide modern web development services focused on creating
              visually appealing, responsive, and high-performing digital
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-400"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-[#50a2ff] flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>

                <p className="text-gray-400 leading-7 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="mt-28">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-[#50a2ff] font-medium uppercase tracking-[4px]">
                Experience & Education
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                My Professional Journey
              </h1>
              <p className="text-gray-400 mt-5 text-base md:text-lg">
                A brief overview of my work experience, internships, and
                academic background in web development and computer science.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-400"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-[#50a2ff] flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-[#50a2ff] mt-2">{item.company}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.duration}</p>

                  <p className="text-gray-400 leading-7 text-sm mt-5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
