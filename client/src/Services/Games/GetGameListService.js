import axios from "axios";

export const getGameList = async () => {
  const response = await axios.get(
    "https://api.rawg.io/api/games?key=3925433d47bd4726a55bac2b3102c68e&page_size=12",
    { withCredentials: false }
  );

  return response;
};
