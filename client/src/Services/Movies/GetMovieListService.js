import axios from "axios";

export const getMovieList = async () => {
  const REACT_APP_MOVIES_API_CONNECTION =
    process.env.REACT_APP_MOVIES_API_CONNECTION;
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
    `${REACT_APP_MOVIES_API_CONNECTION}`,
    options
  );

  return response;
};
