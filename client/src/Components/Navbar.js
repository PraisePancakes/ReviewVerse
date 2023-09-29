import React from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../Hooks/useScroll";

const Navbar = () => {
  const scrollPosition = useScroll();

  const navLinks = [
    {
      title: "Find",
      id: 1,
      path: "/reviews/find",
    },
    {
      title: "Saved",
      id: 2,
      path: "/reviews/saved",
    },
    {
      title: "Trending",
      id: 3,
      path: "/reviews/trending",
    },
    {
      title: "About Us",
      id: 4,
      path: "/about",
    },
  ];

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
        <nav className="text-white mx-5 flex gap-5 items-center">
          <Link to="/" className="cursor-pointer">
            <h1 className={`${scrollPosition > 0 ? "text-black" : ""}`}>
              REVIEW VERSE
            </h1>
          </Link>
          <ul className="lg:flex gap-5 hidden">
            {navLinks.map((navItem) => {
              return (
                <Link key={navItem.id} path={`${navItem.path}`}>
                  <li className="font-bold text-lg">{navItem.title}</li>
                </Link>
              );
            })}
          </ul>
          <div className="flex flex-1 font-bold text-lg justify-end">
            Profile
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
