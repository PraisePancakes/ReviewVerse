import axios from "axios";

const REACT_APP_BOOKS_API_SECRET_KEY =
  process.env.REACT_APP_BOOKS_API_SECRET_KEY;
export const getBookByTitle = async (title) => {
  console.log(title);
  const response = await axios.get(
    `https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=${REACT_APP_BOOKS_API_SECRET_KEY}`,
    {
      withCredentials: false,
    }
  );
  console.log(response);
  return response;
};
