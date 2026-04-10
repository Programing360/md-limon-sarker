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
      
    </section>
  );
};

export default Services;
