import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const menuItems = ["home", "about", "skills","services", "projects", "contact"];

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
   <div className="w-full sticky top-0 z-50 backdrop-blur-md bg-[#0b132b]/70 border-b border-slate-700">
      <div className="flex h-16 items-center justify-between container mx-auto w-8/12">
        
        {/* Logo */}
        <a className="text-2xl font-bold text-blue-400">
          Limon
        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-8">
          {menuItems.map((item) => (
            <li key={item} className="relative">
              <button
                onClick={() => handleScrollTo(item)}
                className={`capitalize text-[16px] transition duration-300 ${
                  active === item
                    ? "text-blue-400"
                    : "text-white"
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
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <select
            onChange={(e) => handleScrollTo(e.target.value)}
            className="bg-[#0b132b] text-white p-2 rounded border border-slate-700"
          >
            {menuItems.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
