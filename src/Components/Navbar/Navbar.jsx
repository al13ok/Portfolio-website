import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-6xl bg-white/60 backdrop-blur-md border border-gray-300 text-black rounded-full px-4 py-2.5 shadow-md flex justify-between items-center z-50">

      {/* Logo */}
      <span className="text-lg md:text-xl font-bold tracking-wide text-blue-600">
        Portfolio
      </span>

      {/* Links */}
      <ul
        className={`${
          menu
            ? "block absolute top-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-xl px-6 py-4 shadow-md md:static md:flex"
            : "hidden md:flex"
        } font-medium space-y-4 md:space-y-0 md:space-x-6 text-center text-sm transition-all duration-300`}
      >
        <a href="#About">
          <li className="text-gray-600 hover:text-blue-500 transition">About</li>
        </a>
        <a href="#Experience">
          <li className="text-gray-600 hover:text-blue-500 transition">Experience</li>
        </a>
        <a href="#Projects">
          <li className="text-gray-600 hover:text-blue-500 transition">Projects</li>
        </a>
      </ul>

      {/* Contact Me Button */}
      <a href="#Footer">
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-full transition">
          Contact Me
        </button>
      </a>

      {/* Hamburger Menu */}
      {showMenu ? (
        <RiMenu2Line
          size={26}
          className="md:hidden text-blue-500"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={26}
          className="md:hidden text-blue-500"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
