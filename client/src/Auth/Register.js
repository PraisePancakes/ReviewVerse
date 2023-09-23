import React, { useState } from "react";
import { BsPerson, BsFacebook } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const DEFAULT_FORM = {
    username: "",
    password: "",
  };
  const [form, setForm] = useState(DEFAULT_FORM);

  const [pwVis, setPwVis] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    console.log("submitted");
    console.log(form);
  };

  return (
    <div>
      <body className="Auth-Register-Container flex flex-col justify-center items-center h-screen">
        <div className="Auth-Register-Box-Border p-1 rounded-md ">
          <div
            className="Auth-Register-Box flex flex-col items-center border p-10 border-black rounded h-full gap-5"
            style={{ backgroundColor: "#fbeaeb" }}
          >
            <h1 className="Auth-Register-Header" style={{ color: "#2f3c7e" }}>
              REGISTER
            </h1>
            <form
              onSubmit={handleSubmit}
              className="Auth-Register-Form flex flex-col gap-5"
            >
              <div className="flex items-center justify-center px-5 py-2 gap-2 border-b border-slate-400">
                <BsPerson />
                <input
                  className="Auth-Register-Input-Uname focus:outline-none bg-[#fbeaeb] "
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="flex items-center justify-center border-b border-slate-400 px-5 py-2 gap-2">
                <RiLockPasswordLine />
                <input
                  className="Auth-Register-Input-Pwrd focus:outline-none bg-[#fbeaeb]  "
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  type={`${pwVis ? "text" : "password"}`}
                ></input>
              </div>
              <button type="button" onClick={() => setPwVis(!pwVis)}>
                {!pwVis ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
              <button className="border border-black rounded-md p-2 text-white hover:bg-[#fbeaeb] bg-[#2f3c7e] hover:text-[#2f3c7e] transition-colors duration-300">
                REGISTER
              </button>
            </form>
            <span>
              Already Have An Account?{" "}
              <Link
                to="/auth/login"
                className="text-slate-400 hover:underline "
              >
                Log-in
              </Link>
            </span>
            <div className="flex justify-center items-center gap-2 w-full">
              <div className="h-[1px] border w-1/3 border-black"></div>
              <span>OR</span>
              <div className="h-[1px] border w-1/3 border-black"></div>
            </div>
            <span className="text-slate-400">Register using</span>
            <div className="flex items-center gap-3">
              <FcGoogle size={30} />
              <BsFacebook size={25} />
              <AiFillTwitterCircle size={30} />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
