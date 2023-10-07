import React, { useState } from "react";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSetBooks } from "../../Hooks/useSetBooks";
import Loading from "../../Components/Loading";

export const Books = () => {
  const { bookSlides, error, localLoader } = useSetBooks();
  const [slide, setSlide] = useState(0);

  const nextSlide = (slide) => {
    if (slide === bookSlides.length - 1) {
      setSlide(0);
    } else setSlide(slide + 1);
  };

  const prevSlide = (slide) => {
    if (slide === 0) {
      setSlide(bookSlides.length - 1);
    } else setSlide(slide - 1);
  };

  return (
    <div>
      <h1 className="text-black ml-20">POPULAR BOOKS</h1>
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
          {bookSlides[slide]?.map((book) => (
            <Link
              to={`/book/${book.isbns[0].isbn10}`}
              key={book.isbns[0].isbn10}
              className={`mt-5 grid gap-5 grid-flow-row grid-rows-1`}
            >
              <h4>{book.title}</h4>
              <img src={book.book_image}></img>
              <h4>GLOBAL RANKING {book.rank}</h4>
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

export default Books;
