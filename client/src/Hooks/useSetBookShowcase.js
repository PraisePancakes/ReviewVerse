import { useCallback, useEffect, useState } from "react";
import { getBookByTitle } from "../Services/Books/GetBookService";
import { useParams } from "react-router-dom";

export function useSetBookShowcase() {
  const { title } = useParams();
  const [book, setBook] = useState();
  const [error, setError] = useState(null);
  console.log(title);
  const getBook = useCallback(async (title) => {
    try {
      const response = await getBookByTitle(title);
      setBook(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    getBook(title);

    return () => getBook(title);
  }, [getBook, title]);

  return { book, error };
}
