import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    "home",
    "about",
    "skills",
    "services",
    "projects",
    "contact",
  ];

  // Smooth scroll function
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Scroll spy (auto active update)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      menuItems.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-[#020b1f] md:pb-30 md:pt-20 rounded-t-2xl shadow-2xl md:px-10 py-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_-10px_30px_rgba(59,130,246,0.5)]">
      <div className="flex flex-col md:flex-row items-center justify-between md:container mx-auto md:w-8/12">
        <div className="leading-8">
          <h1 className="text-2xl font-bold text-blue-400">Limon</h1>
          <p className=" text-[16px]">
            MERN Stack Developer crafting modern, <br />
            scalable web applications.
          </p>
        </div>
        <div>
          <ul className="flex md:gap-8 gap-3 py-6 md:p-0">
            {menuItems.map((item) => (
              <li key={item} className="relative">
                <button
                  onClick={() => handleScrollTo(item)}
                  className={`capitalize text-[14px] transition duration-300 ${
                    active === item ? "text-blue-400" : "text-white"
                  }`}
                >
                  {item}

                  {/* underline animation */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                      active === item ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {/* Right Icons */}
          <div className="flex gap-4">
            {/* Icon */}
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0b132b] hover:bg-blue-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0b132b] hover:bg-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0b132b] hover:bg-blue-500 transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0b132b] hover:bg-blue-500 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      <hr className="container mx-auto md:w-8/12 mt-8 text-gray-600" />
      <p className="text-center pt-10">© 2026 Limon. All rights reserved.</p>
    </div>
  );
};

export default Footer;
