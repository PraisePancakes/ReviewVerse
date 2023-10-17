import React from "react";
import { useSetBookShowcase } from "../Hooks/useSetBookShowcase";

const BookShowCase = () => {
  const { book, error } = useSetBookShowcase();
  console.log(book);
  return <div>BookShowCase</div>;
};

export default BookShowCase;
