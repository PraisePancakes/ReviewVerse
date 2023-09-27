import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const AuthHome = () => {
  return (
    <div className="flex">
      <section
        id="auth-hero"
        className="relative w-1/2 h-screen xs:hidden md:flex flex flex-col justify-center items-center border-r-2"
      >
        <div
          id="jagged-bottom-border"
          className="flex flex-col items-center w-full bg-[#f7f7f7]"
        >
          <h1 className="text-4xl p-5 text-black ">REVIEW VERSE</h1>
          <Logo />
        </div>

        <main className="flex flex-col justify-center mt-5 items-center gap-10 w-full h-full">
          <h2 className="text-7xl w-[15rem]">
            Discover... Discuss... Decide...
          </h2>

          <blockquote className="lg:mx-[10rem] md:mx-[5rem] sm:mx-[2rem] mt-5">
            <q
              style={{
                color: "#fbeaeb",
                fontSize: "2rem",
                fontWeight: 300,
                fontFamily: "Oswald",
              }}
            >
              You can discover more about a person in an hour of play than in a
              year of conversation.
            </q>
            <cite>
              <h2>―Plato</h2>
            </cite>
          </blockquote>
        </main>
        <div
          id="jagged-top-border"
          className=" w-full bg-[#f7f7f7] h-[160px]"
        ></div>
      </section>

      <section className=" md:w-1/2 w-full h-screen  flex flex-col justify-center items-center gap-5 ">
        <div className="flex flex-col items-center mb-[20px] md:hidden">
          <h1 className="text-4xl m-5 text-black  ">REVIEW VERSE</h1>
          <Logo />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl text-black" id="typing-animation">
            Find Movies Games and Books That Fit You! &nbsp;
          </h2>
        </div>
        <h1 className="text-black text-3xl ">GET STARTED</h1>
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
        <div className="flex gap-5">
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms of Use</Link>
        </div>
      </section>
    </div>
  );
};

export default AuthHome;
