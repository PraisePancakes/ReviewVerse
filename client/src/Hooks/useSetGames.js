import { useCallback, useEffect, useState } from "react";
import { getGameList } from "../Services/Games/GetGameListService";

export function useSetGames() {
  const [gameSlides, setGameSlides] = useState([]);
  const [error, setError] = useState(null);
  const [localLoader, setLocalLoader] = useState(true);

  const chunkifyGames = (movies) => {
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
    setGameSlides(result);
  };

  const setGames = useCallback(async () => {
    try {
      const response = await getGameList();
      chunkifyGames(response.data.results);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLocalLoader(false);
    }
  }, []);

  useEffect(() => {
    setGames();

    return () => setGames();
  }, [setGames]);

  return { gameSlides, error, localLoader };
}
