import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="fixed z-30 top-0 left-0 right-0 py-2 px-5 md:px-20 text-white transition-all duration-300 ease-in-out font-RobotoRegular bg-gradient-to-r from-blue-900 via-gray-700 to-purple-900"
      data-aos="fade-down"
    >
      <div className="flex items-center justify-between">
        <div className="w-28 h-12 flex items-center">
          <h1 className="text-xl text-teal-200 font-bold">TheCricketZone</h1>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <FaBars className="text-gray-200" size={24} />
        </div>
        <div className="hidden md:flex text-lg text-teal-200 md:space-x-8 items-center">
          <Link to="/" className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            Home
          </Link>
          <Link to="/news" className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            News
          </Link>
          <Link  to="/videos" className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            Videos
          </Link>
          <Link to="/series" className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            Series
          </Link>
          <button className="bg-teal-800 border-white border text-white font-semibold px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-200"
            onClick={() => window.open("https://wa.link/ggnow", "_blank")}>
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`flex flex-col items-center bg-gray-800 rounded-xl pb-10 md:hidden mt-4 space-y-4 transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-6 opacity-0"
          }`}
        >
          <Link
           to="/"
            onClick={toggleMenu}
            className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer"
          >
            Home
          </Link>
          <Link
           to="/news"
            onClick={toggleMenu}
            className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer"
          >
            News
          </Link>
          <Link to="/videos"
            onClick={toggleMenu}
            className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer"
          >
            Videos
          </Link>
          <Link
           to="/series"
            onClick={toggleMenu}
            className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer"
          >
            Series
          </Link>
          <button className="bg-teal-800 text-white font-semibold px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-200"
          onClick={() => window.open("https://wa.link/ggnow", "_blank")}>
            Contact us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
