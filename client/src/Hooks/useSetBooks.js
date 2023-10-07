import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { getBookList } from "../Services/Books/GetBookListService";

export function useSetBooks() {
  const [bookSlides, setBookSlides] = useState([]);
  const [error, setError] = useState(null);
  const [localLoader, setLocalLoader] = useState(true);

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
      const response = await getBookList();
      chunkifyBooks(response.data.results.books);
      console.log(response);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLocalLoader(false);
    }
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return { bookSlides, error, localLoader };
}
