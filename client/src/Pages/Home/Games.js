import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useSetGames } from "../../Hooks/useSetGames";

const Games = () => {
  const [slide, setSlide] = useState(0);
  const { gameSlides, error } = useSetGames();

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
      <h1 className="text-black ml-20">POPULAR GAMES</h1>
      <ul className={`flex gap-10 justify-center`}>
        <button onClick={() => prevSlide(slide)}>
          <AiOutlineArrowLeft />
        </button>
        {gameSlides[slide]?.map((game) => (
          <li
            key={game.id}
            className={`mt-5 grid gap-5 grid-flow-row grid-rows-1`}
          >
            <h4>{game.name}</h4>

            <img
              className="object-cover w-[300px] lg:h-[450px] md:h-[300px] sm:h-[250px] xs:h-[200px]"
              src={`${game.background_image}`}
            ></img>
            <h4>Average Rating {game.rating}/5</h4>
          </li>
        ))}
        <button onClick={() => nextSlide(slide)}>
          <AiOutlineArrowRight />
        </button>
      </ul>
    </div>
  );
};

export default Games;
