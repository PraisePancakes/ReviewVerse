import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Books = () => {
  const [bookSlides, setBookSlides] = useState([]);
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

  const chunkifyBooks = (books) => {
    let chunkSize = 3;
    let temp = [];
    let result = [];

    for (let i = 0; i < books?.length; i++) {
      temp.push(books[i]);
      if (i % 3 === chunkSize - 1) {
        result.push(temp);
        temp = [];
      }
    }
    setBookSlides(result);
  };

  const getBooks = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LfVQiz89NxoeaeNctRigkATIe9TdXIv6",
        { withCredentials: false }
      );
      chunkifyBooks(response.data.results.books);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);
  console.log(bookSlides);
  return (
    <div>
      <h1 className="text-black ml-20">POPULAR BOOKS</h1>
      <ul className={`flex gap-10 justify-center`}>
        <button onClick={() => prevSlide(slide)}>
          <AiOutlineArrowLeft />
        </button>
        {bookSlides[slide]?.map((book) => (
          <li
            key={book.isbns[0].isbn10}
            className={`mt-5 grid gap-5 grid-flow-row grid-rows-1`}
          >
            <h4>{book.title}</h4>
            <img src={book.book_image}></img>
            <h4>GLOBAL RANKING {book.rank}</h4>
          </li>
        ))}
        <button onClick={() => nextSlide(slide)}>
          <AiOutlineArrowRight />
        </button>
      </ul>
    </div>
  );
};

export default Books;
