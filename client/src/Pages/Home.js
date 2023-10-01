import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  //to-do refactor this code up, possible back-end request, examine cors options
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzEzNmQ3ZDQwZGExYjA5NmFjOTA1YWQwN2I4YjY5ZCIsInN1YiI6IjY1MTkwMWRhMDcyMTY2MDBmZjM1ZGQ4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r9bxDYaMp-tUVp_BHyfw-RlQzRJRvlgDS-ILs-u0_bg",
    },
  };

  const getMovies = async () => {
    try {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      )
        .then((response) => response.json())
        .then((response) => setMovies(response.results))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
    return () => getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
