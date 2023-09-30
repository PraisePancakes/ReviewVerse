import React from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../Hooks/useScroll";
import { FiUser } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { useAuth } from "../Context/AuthContext";
import { MdOutlineLogout } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import useComponentVisible from "../Hooks/useComponentVisible";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const scrollPosition = useScroll();

  const { user } = useAuth();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const navLinks = [
    {
      title: "Explore",
      id: 1,
      path: "/reviews/explore",
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
        } top-0`}
      >
        {" "}
        <nav className="text-white mx-5 flex gap-5 h-full items-center">
          <Link
            to="/"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <h3 className={`${scrollPosition > 0 ? "text-black" : ""}`}>
              REVIEW VERSE
            </h3>
            <NavLogo />
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
          <div className="relative flex flex-1 font-bold text-lg justify-end ">
            <button
              ref={ref}
              onClick={() => setIsComponentVisible(!isComponentVisible)}
              className=" flex w-[8rem] justify-start rounded items-center gap-1 p-2 hover:bg-gray-800 transition-colors duration-500 "
            >
              <FiUser size={30} className="border rounded" />
              <span>{user?.username}</span>
              <CiMenuKebab className="flex flex-1" />
            </button>
            <div
              className={`${
                isComponentVisible
                  ? "absolute opacity-100 top-[3rem] w-[10rem] bg-[#242b52] rounded py-3 flex gap-1 flex-col transition-opacity duration-500"
                  : "absolute w-[0] "
              } transition-opacity duration-500`}
            >
              <button
                className={`${
                  isComponentVisible
                    ? "hover:bg-slate-400 h-10  flex items-center justify-center gap-4 transition-colors duration-300"
                    : "opacity-0 text-transparent"
                }`}
              >
                View Profile
              </button>
              <button
                className={`${
                  isComponentVisible
                    ? "hover:bg-slate-400 h-10  flex items-center justify-center gap-4 transition-colors duration-300"
                    : "opacity-0 text-transparent"
                }`}
              >
                <LuSettings />
                Settings
              </button>
              <button
                className={`${
                  isComponentVisible
                    ? "hover:bg-slate-400 h-10  flex items-center justify-center gap-4 transition-colors duration-300"
                    : "opacity-0 text-transparent"
                }`}
              >
                <MdOutlineLogout />
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
