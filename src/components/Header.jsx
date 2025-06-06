import React from "react";
import './component.css'
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);



  return (
    <div className="header flex justify-between items-center w-full h-auto p-[20px] box-border bg-primary  z-50">
      <div className="logo">logo</div>
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
      {/* Sidebar nav for small screens */}
      <nav
        className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-primary z-20 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:static sm:translate-x-0 sm:bg-transparent sm:w-auto sm:h-auto`}
      >
        <ul className="flex flex-col sm:flex-row gap-6 sm:gap-3.5 font-monts uppercase text-[16px] sm:text-[12px] text-white p-8 sm:p-0">
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">Intro</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Testimony</Link></li>
          <li><Link to="#">Course</Link></li>
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
