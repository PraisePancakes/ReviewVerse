import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useSetMovies } from "../../Hooks/useSetMovies";
import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";

const Movies = () => {
  const [slide, setSlide] = useState(0);
  const { movieSlides, error, localLoader } = useSetMovies();

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
    <div>
      {" "}
      <h1 className="text-black ml-20">POPULAR MOVIES</h1>
      {localLoader ? (
        <div className="flex justify-center">
          {" "}
          <Loading />
        </div>
      ) : (
        <ul className={`flex gap-10 justify-center`}>
          <button onClick={() => prevSlide(slide)}>
            <AiOutlineArrowLeft />
          </button>
          {movieSlides[slide]?.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className={`mt-5 grid gap-5 grid-flow-row grid-rows-1`}
            >
              <h4>{movie.title}</h4>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              ></img>
              <h4>Average Rating {movie.vote_average}/10</h4>
            </Link>
          ))}
          <button onClick={() => nextSlide(slide)}>
            <AiOutlineArrowRight />
          </button>
        </ul>
      )}
    </div>
  );
};

export default Movies;
