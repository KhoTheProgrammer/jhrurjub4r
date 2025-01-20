import React from "react";

const Header = ({ onMenuClick }) => {
  return (
    <header
      id="header"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('../Assets/desktop.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <nav className="flex justify-between items-center py-4">
          <img src="/path-to-your-logo.png" alt="Logo" className="w-36" />
          <div className="hidden sm:flex space-x-6">
            <a href="#about" className="text-lg hover:text-teal-500">
              About
            </a>
            <a href="#services" className="text-lg hover:text-teal-500">
              Services
            </a>
            <a href="#portfolio" className="text-lg hover:text-teal-500">
              Portfolio
            </a>
            <a href="#contact" className="text-lg hover:text-teal-500">
              Contact
            </a>
          </div>
          <button
            className="sm:hidden text-3xl text-white"
            onClick={onMenuClick}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </nav>
        <div className="text-center mt-40">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">
            Check out my skills, experience, and projects.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
