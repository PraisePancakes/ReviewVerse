import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[80px] border-b w-full bg-[#2f3c7e] ">
      <nav className="text-white mx-5 flex">
        <Link to="/" className="cursor-pointer">
          <h1>REVIEW VERSE</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
