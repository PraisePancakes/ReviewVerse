import React from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../Hooks/useScroll";

const Navbar = () => {
  const scrollPosition = useScroll();

  return (
    <div>
      <div
        className={`${
          scrollPosition > 0
            ? "h-[80px] w-full fixed"
            : "h-[80px] border-b w-full bg-[#2f3c7e] fixed"
        }`}
      >
        {" "}
        <nav className="text-white mx-5 flex">
          <Link to="/" className="cursor-pointer">
            <h1 className={`${scrollPosition > 0 ? "text-black" : ""}`}>
              REVIEW VERSE
            </h1>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
