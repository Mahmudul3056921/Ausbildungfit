import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisaOpen, setIsVisaOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Moving Text Announcement */}
      <div className="w-full bg-red-600 text-yellow-500 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-lg font-semibold">
          Limited Seats Available! Our Next Batch Begins on April 15th. Complete
          Your Registration by March 25th. Contact us on WhatsApp: +49
          15151823782 || Limited Seats Available! Our Next Batch Begins on April
          15th. Complete Your Registration by March 25th. Contact us on
          WhatsApp: +49 15151823782.
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-4">
        <div className="navbar-start flex items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Logo (Shrinks on Mobile) */}
          <img
            src="/Ausbildungfit.png"
            alt="Logo"
            className="w-36 sm:w-28 md:w-36 lg:w-40 transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>ABOUT US</Link>
            </li>

            {/* VISA SERVICES Hover Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setIsVisaOpen(true)}
              onMouseLeave={() => setIsVisaOpen(false)}
            >
              <a className="cursor-pointer">VISA SERVICES</a>
              {isVisaOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
                  <li className="hover:bg-gray-200 rounded-md">
                    <Link to={"/jobseeker"} className="block px-4 py-2">
                      Job Seeking
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to={"/ausbildung"}>AUSBILDUNG</Link>
            </li>
            <li>
              <Link to={"/recruiter"}>RECRUITERS</Link>
            </li>
            <li>
              <Link to={"/contact"}>CONTACT US</Link>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="navbar-end">
          <Link to={"/login"}>
            <button className="btn btn-warning text-black opacity-75">
              LOGIN
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-base-100 shadow-lg z-50">
          <ul className="menu menu-vertical p-4 space-y-2 text-lg">
            <li>
              <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={() => setIsMenuOpen(false)}>
                ABOUT US
              </Link>
            </li>

            {/* Mobile VISA SERVICES Dropdown */}
            <li>
              <details open>
                <summary>VISA SERVICES</summary>
                <ul className="p-2">
                  <li>
                    <Link
                      to={"/jobseeker"}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Job Seeking
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link to={"/ausbildung"} onClick={() => setIsMenuOpen(false)}>
                AUSBILDUNG
              </Link>
            </li>
            <li>
              <Link to={"/recruiter"} onClick={() => setIsMenuOpen(false)}>
                RECRUITERS
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={() => setIsMenuOpen(false)}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
