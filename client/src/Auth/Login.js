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
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const DEFAULT_FORM = {
    username: "",
    password: "",
  };
  const [form, setForm] = useState(DEFAULT_FORM);
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
    e.preventDefault();
    login(form);
    setForm(DEFAULT_FORM);
  };

  const [pwVis, setPwVis] = useState(false);
  return (
    <div>
      <body className="Auth-Login-Container flex flex-col justify-center items-center h-screen">
        <div className="Auth-Login-Box-Border p-1 rounded-md ">
          <div
            className="Auth-Login-Box flex flex-col items-center border p-10 border-black rounded h-full gap-5"
            style={{ backgroundColor: "#fbeaeb" }}
          >
            <h1 className="Auth-Login-Header" style={{ color: "#2f3c7e" }}>
              LOGIN
            </h1>
            <form
              onSubmit={handleSubmit}
              className="Auth-Login-Form flex flex-col gap-5"
            >
              <div className="flex items-center justify-center px-5 py-2 gap-2 border-b border-slate-400">
                <BsPerson />
                <input
                  className="Auth-Login-Input-Uname focus:outline-none bg-[#fbeaeb] "
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                ></input>
              </div>

              <div className="flex items-center justify-center border-b border-slate-400 px-5 py-2 gap-2">
                <RiLockPasswordLine />
                <input
                  className="Auth-Login-Input-Pwrd focus:outline-none bg-[#fbeaeb]  "
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  type={`${pwVis ? "text" : "password"}`}
                ></input>
              </div>
              <button type="button" onClick={() => setPwVis(!pwVis)}>
                {!pwVis ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
              <button className="border border-black rounded-md p-2 text-white hover:bg-[#fbeaeb] bg-[#2f3c7e] hover:text-[#2f3c7e] transition-colors duration-300">
                LOG IN
              </button>
            </form>
            <span>
              Dont Have An Account?{" "}
              <Link
                to="/auth/register"
                className="text-slate-400 hover:underline "
              >
                Register
              </Link>
            </span>
            <div className="flex justify-center items-center gap-2 w-full">
              <div className="h-[1px] border w-1/3 border-black"></div>
              <span>OR</span>
              <div className="h-[1px] border w-1/3 border-black"></div>
            </div>
            <span className="text-slate-400">Log in using</span>
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
