import { useCallback, useEffect, useState } from "react";
import { getGameById } from "../Services/Games/GetGameService";
import { useParams } from "react-router-dom";

export function useSetGameShowcase() {
  const { id } = useParams();
  const [game, setGame] = useState();
  const [error, setError] = useState(null);

  const getGame = useCallback(async (movieId) => {
    try {
      const response = await getGameById(movieId);
      setGame(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);

  useEffect(() => {
    getGame(id);

    return () => getGame(id);
  }, [getGame, id]);

  return { game, error };
}
