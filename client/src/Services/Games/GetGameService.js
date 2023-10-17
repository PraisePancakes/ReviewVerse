import axios from "axios";

const REACT_APP_GAMES_API_SECRET_KEY =
  process.env.REACT_APP_GAMES_API_SECRET_KEY;

export const getGameById = async (gameId) => {
  const response = await axios.get(
    `https://api.rawg.io/api/games/${gameId}?key=${REACT_APP_GAMES_API_SECRET_KEY}`,
    {
      withCredentials: false,
    }
  );
  return response;
};
