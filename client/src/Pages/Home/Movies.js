import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useSetMovies } from "../../Hooks/useSetMovies";
import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";

const Movies = () => {
  const [slide, setSlide] = useState(0);
  const { movieSlides, error, localLoader } = useSetMovies();

  const nextSlide = () => {
    setSlide((slide + 1) % movieSlides.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + movieSlides.length) % movieSlides.length);
  };

  return (
    <div>
      <h1 className="ml-15">POPULAR MOVIES</h1>
      {error && <div className="text-red-700">{error}</div>}
      {localLoader ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : (
        <div>
          <div className="flex justify-between gap-2">
            <button onClick={prevSlide}>
              <AiOutlineArrowLeft />
            </button>
            <ul className="grid grid-cols-3 gap-5">
              {movieSlides[slide]?.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <div className="flex flex-col items-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt="movies poster"
                      className=" object-contain w-[487px] lg:h-[720px] md:h-[300px] sm:h-[250px] xs:h-[200px]"
                    />
                    <h4 className="text-lg font-semibold">{movie.title}</h4>
                    <p>Average Rating: {movie.vote_average}/10</p>
                  </div>
                </Link>
              ))}
            </ul>
            <button onClick={nextSlide}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
