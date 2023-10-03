import { useCallback, useEffect, useState } from "react";
import { getMovieList } from "../Services/Movies/GetMovieListService";

export function useSetMovies() {
  const [movieSlides, setMovieSlides] = useState([]);
  const [error, setError] = useState(null);

  const chunkifyMovies = (movies) => {
    let chunkSize = 3;
    let temp = [];
    let result = [];

    for (let i = 0; i < movies?.length; i++) {
      temp.push(movies[i]);
      if (i % 3 === chunkSize - 1) {
        result.push(temp);
        temp = [];
      }
    }
    setMovieSlides(result);
  };

  const setMovies = useCallback(async () => {
    try {
      const response = await getMovieList();
      chunkifyMovies(response.data.results);
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    setMovies();
  }, [setMovies]);

  return { movieSlides, error };
}