import React from "react";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 bg-gray-800 w-64 h-full transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <button className="text-white text-2xl p-4" onClick={onClose}>
        &times;
      </button>
      <ul className="flex flex-col mt-10 space-y-4 text-white px-6">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
