import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {

    const menuItems = <>
        <ul className="flex gap-5">
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Skills</NavLink></li>
            <li><NavLink>Projects</NavLink></li>
            <li><NavLink>Contact</NavLink></li>
        </ul>
    </>

  return (
    <div className="w-full sticky top-0 glass z-10">
      <div className="flex h-16 items-center justify-between container mx-auto w-8/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <a className="text-2xl font-bold text-blue-400">Limon</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
