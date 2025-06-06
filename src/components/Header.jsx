import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full h-auto p-[20px] box-border bg-primary">
      <div className="logo">logo</div>
      <nav className="ml-10">
        <ul className="flex gap-3.5 font-monts text-white">
          <li>Home</li>
          <li>Intro</li>
          <li>about</li>
          <li>Testimony</li>
          <li>Course</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
