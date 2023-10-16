import React from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { useSetMovieShowcase } from "../Hooks/useSetMovieShowcase";
import { useAuth } from "../Context/AuthContext";
import { BiCommentAdd } from "react-icons/bi";

const MovieShowCase = () => {
  const { movie, error } = useSetMovieShowcase();
  const { user } = useAuth();

  return (
    <div className="flex flex-wrap gap-5 mx-10 py-10 justify-start items-start">
      {error && <div className="text-red-700">{error}</div>}
      <div className="flex flex-col gap-1">
        <h1 className="text-black w-[35rem]">{movie?.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          className="h-[40rem] w-[30rem] object-cover"
          alt="movie poster"
        ></img>
        <div className="flex gap-5">
          {" "}
          <h4>0 Likes</h4>
          <h4>0 Reviews</h4>
          <button className="text-slate-600 hover:text-black transition-colors duration-500">
            <AiOutlineLike size={25} />
          </button>
        </div>
      </div>
      <div className="w-[30rem] flex flex-col gap-5 text-4xl">
        <h1>SUMMARY</h1>
        <text className="text-base">{movie?.overview}</text>
        <h1>RELEASE DATE</h1>
        <text className="text-xl">{movie?.release_date}</text>
        <h1>AVERAGE RATING</h1>
        <text className="text-xl">{movie?.vote_average}/10</text>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <button className="flex gap-2 items-center border border-black p-2 rounded-full hover:text-white hover:bg-black transition-colors duration-500 text-black ">
            <h4>Save Movie</h4> <BsBookmarkStarFill />
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default MovieShowCase;
