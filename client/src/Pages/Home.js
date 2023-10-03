import React, { useState } from "react";

import { useSetMovies } from "../Hooks/useSetMovies";

const Home = () => {
  const [slide, setSlide] = useState(0);
  const { movieSlides, error } = useSetMovies();

  const nextSlide = (slide) => {
    if (slide === movieSlides.length - 1) {
      setSlide(0);
    } else setSlide(slide + 1);
  };

  const prevSlide = (slide) => {
    if (slide === 0) {
      setSlide(movieSlides.length - 1);
    } else setSlide(slide - 1);
  };
  console.log(movieSlides);
  return (
    <div className="mx-10 h-[150rem]">
      <h1 className="text-black">MOVIES</h1>
      <ul className="flex gap-10 justify-center ">
        <button onClick={() => prevSlide(slide)}>{"<"}</button>
        {movieSlides[slide]?.map((movie) => (
          <li
            key={movie.id}
            className="mt-5 grid gap-5 grid-flow-row grid-rows-1"
          >
            <h4>{movie.title}</h4>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            ></img>
          </li>
        ))}
        <button onClick={() => nextSlide(slide)}>{">"}</button>
      </ul>
    </div>
  );
};

export default Home;
