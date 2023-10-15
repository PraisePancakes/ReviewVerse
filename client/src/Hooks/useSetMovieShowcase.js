import { useCallback, useEffect, useState } from "react";
import { getMovieById } from "../Services/Movies/GetMovieService";
import { useParams } from "react-router-dom";

export function useSetMovieShowcase() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);

  const getMovie = useCallback(async (movieId) => {
    try {
      const response = await getMovieById(movieId);
      setMovie(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    getMovie(id);

    return () => getMovieById(id);
  }, [getMovieById, id]);

  return { movie, error };
}
