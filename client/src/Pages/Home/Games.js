import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useSetGames } from "../../Hooks/useSetGames";
import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";

const Games = () => {
  const [slide, setSlide] = useState(0);
  const { gameSlides, error, localLoader } = useSetGames();

  const nextSlide = (slide) => {
    if (slide === gameSlides.length - 1) {
      setSlide(0);
    } else setSlide(slide + 1);
  };

  const prevSlide = (slide) => {
    if (slide === 0) {
      setSlide(gameSlides.length - 1);
    } else setSlide(slide - 1);
  };

  return (
    <div>
      <h1 className=" ml-15">POPULAR GAMES</h1>
      {error && <div className="text-red-700">{error}</div>}
      {localLoader ? (
        <div className="flex justify-center">
          {" "}
          <Loading />
        </div>
      ) : (
        <div>
          {" "}
          <div className="flex justify-between gap-2">
            <button onClick={() => prevSlide(slide)}>
              <AiOutlineArrowLeft />
            </button>
            <ul className="grid grid-cols-3 gap-5">
              {gameSlides[slide]?.map((game) => (
                <Link
                  to={`/game/${game.id}`}
                  key={game.id}
                  className={`mt-5 grid gap-5 grid-flow-row grid-rows-1`}
                >
                  <div className="flex flex-col items-center">
                    {" "}
                    <img
                      className="object-cover w-[487px] lg:h-[720px] md:h-[300px] sm:h-[250px] xs:h-[200px]"
                      src={`${game.background_image}`}
                      alt="Game poster"
                    ></img>
                    <h4 className="text-lg font-semibold">{game.name}</h4>
                    <h4>Average Rating {game.rating}/5</h4>
                  </div>
                </Link>
              ))}
            </ul>
            <button onClick={() => nextSlide(slide)}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Games;
