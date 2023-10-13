import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsBookmarkStarFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const MovieShowCase = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getMovieById = useCallback(async (movieId) => {
    const REACT_APP_MOVIES_API_ACCESS_TOKEN =
      process.env.REACT_APP_MOVIES_API_ACCESS_TOKEN;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${REACT_APP_MOVIES_API_ACCESS_TOKEN}`,
      },
      withCredentials: false,
    };
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMovieById(id);

    return () => getMovieById(id);
  }, [getMovieById, id]);
  return (
    <div className="flex flex-wrap gap-5 mx-10 py-10 justify-start items-start">
      <div className="flex flex-col gap-1">
        <h1 className="text-black">{movie?.title}</h1>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          className="h-[40rem] w-[30rem] object-cover"
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
      <div className="w-[30rem] flex flex-col gap-5">
        <h1 className="text-black text-4xl ">SUMMARY</h1>
        <text>{movie?.overview}</text>
        <h1 className="text-black text-4xl">RELEASE DATE</h1>
        <text className="text-xl">{movie?.release_date}</text>
        <h1 className="text-black text-4xl">AVERAGE RATING</h1>
        <text className="text-xl">{movie?.vote_average}/10</text>
      </div>
      <div>
        <div className="flex items-center gap-5">
          <button className="flex gap-2 items-center border border-black p-2 rounded-full hover:text-white hover:bg-black transition-colors duration-500 text-black ">
            <h4>Save Movie</h4> <BsBookmarkStarFill />
          </button>
        </div>
        <div>
          <h1 className="text-4xl text-black">LEAVE A REVIEW</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieShowCase;
