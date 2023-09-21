import React from "react";
import { Link } from "react-router-dom";

const AuthHome = () => {
  return (
    <div className="flex">
      <section
        id="auth-hero"
        className="relative w-1/2 h-screen border-b-black border-b-[1px] xs:hidden md:flex flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl m-5">REVIEW VERSE</h1>
        <main className="flex flex-col justify-center items-center gap-5 w-[21rem] h-full">
          <h2 className="text-6xl  ">Need something to pass time?</h2>
          <div className="flex flex-col gap-5">
            {/* Move the typing animation inside the first section */}
            <h2 id="typing-animation">Find Movies Games and Books!</h2>
          </div>
        </main>
      </section>

      <section className=" md:w-1/2 w-full h-screen border-b-black border-b-[1px] flex flex-col justify-center items-center gap-5">
        {/* Move the "GET STARTED" header here */}
        <h1 className="text-5xl m-5 text-black md:hidden mb-[100px]">
          REVIEW VERSE
        </h1>
        <h1 className="text-black text-4xl ">GET STARTED</h1>
        <div className="flex gap-3 items-center">
          <Link to="/auth/login">
            <button className="bg-blue-900 w-[10rem] p-2 rounded text-white">
              {" "}
              LOG IN
            </button>
          </Link>

          <Link to="/auth/register">
            <button>REGISTER</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AuthHome;
