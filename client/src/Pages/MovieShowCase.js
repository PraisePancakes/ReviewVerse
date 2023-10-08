import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div className="flex flex-wrap mx-10 justify-start">
      <div>
        <h1 className="text-black">{movie?.title}</h1>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          className="h-[40rem] w-[30rem] object-cover"
        ></img>
      </div>
      <div className="">Hello</div>
    </div>
  );
};

export default MovieShowCase;
