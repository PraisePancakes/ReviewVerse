import axios from "axios";

const REACT_APP_GAMES_API_SECRET_KEY =
  process.env.REACT_APP_GAMES_API_SECRET_KEY;

export const getGameList = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?key=${REACT_APP_GAMES_API_SECRET_KEY}&page_size=12`,
    { withCredentials: false }
  );

  return response;
};
