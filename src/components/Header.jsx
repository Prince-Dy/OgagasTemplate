import React from "react";
import './component.css'
import { Link } from "react-router-dom";
import { logo } from "../assets/image";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);



  return (
    <div className="header flex justify-between items-center w-full h-auto p-[20px] box-border bg-primary  z-50">
      <div className="logo">
        <img src={logo} alt="" 
        style={{
          width:"60px",
          height:"60px"
        }}/>
      </div>
      {/* Hamburger button for small screens */}
      <button
        className="sm:hidden text-white focus:outline-none z-20"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
  
        <nav
          className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-primary z-20 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 sm:static sm:translate-x-0 sm:bg-transparent sm:w-auto sm:h-auto`}
        >
          <ul className="flex flex-col sm:flex-row gap-10 mt-1.5 sm:gap-3.5 font-monts uppercase text-[16px] sm:text-[12px] text-white p-8 sm:p-0 ">
            {/* For same-page sections, use anchor links with smooth scroll */}
            <li className="sm:border-b-0 border-b-3">
          <a
            href="#home"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById("home");
              if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // Slow down scroll by using setTimeout and scrollBy
            setTimeout(() => {
              window.scrollBy({ top: -1, behavior: "smooth" });
            }, 1000);
              }
              setSidebarOpen(false);
            }}
          >
            Home
          </a>
            </li>
            <li className="sm:border-b-0 border-b-3">
          <a
            href="#intro"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById("intro");
              if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => {
              window.scrollBy({ top: -1, behavior: "smooth" });
            }, 400);
              }
              setSidebarOpen(false);
            }}
          >
            Intro
          </a>
            </li>
            <li className="sm:border-b-0 border-b-3">
          <a
            href="#about"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById("about");
              if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => {
              window.scrollBy({ top: -1, behavior: "smooth" });
            }, 400);
              }
              setSidebarOpen(false);
            }}
          >
            About
          </a>
            </li>
            <li className="sm:border-b-0 border-b-3">
          <a
            href="#testimony"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById("testimony");
              if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setTimeout(() => {
              window.scrollBy({ top: -1, behavior: "smooth" });
            }, 400);
              }
              setSidebarOpen(false);
            }}
          >
            Testimony
          </a>
            </li>
            {/* For different pages, use Link from react-router-dom */}
            <li className="sm:border-b-0 border-b-3">
          <Link to="/course" onClick={() => setSidebarOpen(false)}>Course</Link>
            </li>
          </ul>
        </nav>
        {/* Overlay for sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0   z-0 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
