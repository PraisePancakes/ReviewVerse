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

  return (
    <div className="mx-10">
      <h1 className="text-black">MOVIES</h1>
      <ul className="flex gap-10 justify-center">
        <button onClick={() => prevSlide(slide)}>{"<"}</button>
        {movieSlides[slide]?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
        <button onClick={() => nextSlide(slide)}>{">"}</button>
      </ul>
    </div>
  );
};

export default Home;
