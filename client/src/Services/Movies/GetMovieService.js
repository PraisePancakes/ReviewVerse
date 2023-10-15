import axios from "axios";

export const getMovieById = async (movieId) => {
  const REACT_APP_MOVIES_API_ACCESS_TOKEN =
    process.env.REACT_APP_MOVIES_API_ACCESS_TOKEN;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `${REACT_APP_MOVIES_API_ACCESS_TOKEN}`,
    },
    withCredentials: false,
  };

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return response;
};
