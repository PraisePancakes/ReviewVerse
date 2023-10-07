import axios from "axios";
const REACT_APP_BOOKS_API_SECRET_KEY =
  process.env.REACT_APP_BOOKS_API_SECRET_KEY;
export const getBookList = async () => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${REACT_APP_BOOKS_API_SECRET_KEY}`,
    { withCredentials: false }
  );

  return response;
};
