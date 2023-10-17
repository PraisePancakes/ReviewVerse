import React from "react";
import { useAuth } from "../Context/AuthContext";
import { BiCommentAdd } from "react-icons/bi";

const Comments = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-5 mt-5 mb-10">
      <div className="flex items-center gap-5">
        <h1>LEAVE A REVIEW</h1>
        <h4 className="text-slate-500 text-lg font-bold"> 0 reviews</h4>
      </div>

      <div className="flex gap-2 border-b border-slate-400 items-center">
        <h4>{user.username}</h4>
        <input
          placeholder="leave a review..."
          className="focus:outline-none w-[35rem] p-2 bg-inherit border-l border-slate-400 focus:border-black focus:bg-slate-300 hover:border-black transition-colors duration-300"
        ></input>
        <BiCommentAdd size={20} />
      </div>
    </div>
  );
};

export default Comments;
