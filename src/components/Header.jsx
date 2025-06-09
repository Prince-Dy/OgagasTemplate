import React from "react";
import "./component.css";
import { Link } from "react-router-dom";
import { logo } from "../assets/image";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="header flex justify-between items-center w-full h-auto p-[5px] box-border  z-50 backdrop-blur-md bg-primary/80">
      <div className="logo">
        <img
          src={logo}
          alt=""
          style={{
            width: "20px",
            height: "20px",
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />
      </div>
      {/* Hamburger button for small screens */}
      <button
        className="sm:hidden text-white focus:outline-none z-20"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <nav
        className={`fixed top-0 left-0 h-full w-[200px] max-w-xs bg-[#e6e6e6] z-20 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:static sm:translate-x-0 sm:bg-transparent sm:w-auto sm:h-auto`}
      >
        <ul className="flex flex-col sm:flex-row gap-10 mt-1.5 sm:gap-3.5 font-monts uppercase text-[16px] sm:text-[12px] text-secondary p-8 sm:p-0 ">
          {/* For same-page sections, use anchor links with smooth scroll */}
          <li>
            <Link
              to="/"
              onClick={(e) => {
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
           </Link>
          </li>
          <li>
            <Link
              to="/#intro"
              onClick={(e) => {
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
            </Link>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
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
          <li>
            <a
              href="#testimony"
              onClick={(e) => {
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

          <li>
            <Link to="/course" onClick={() => setSidebarOpen(false)}>
              Course
            </Link>
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
