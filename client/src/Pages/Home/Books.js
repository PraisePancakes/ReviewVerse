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
      <h1 className="ml-15">POPULAR BOOKS</h1>
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
            <ul className={`grid grid-cols-3 gap-5`}>
              {bookSlides[slide]?.map((book) => (
                <Link
                  to={`/book/${book.title}`}
                  key={book.isbns[0].isbn10}
                  className={`mt-5 grid gap-5 grid-flow-row grid-rows-1`}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={book.book_image}
                      alt="Book poster"
                      className="w-[487px] lg:h-[720px] md:h-[300px] sm:h-[250px] xs:h-[200px]"
                    ></img>
                    <h4 className="text-lg font-semibold">{book.title}</h4>
                    <h4>GLOBAL RANKING {book.rank}</h4>
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

export default Books;
