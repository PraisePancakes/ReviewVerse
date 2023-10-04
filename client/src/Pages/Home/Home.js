import React from "react";
import Movies from "./Movies";
import Games from "./Games";
import Books from "./Books";

const Home = () => {
  return (
    <div className="mx-10 my-10">
      <Movies />
      <Games />
      <Books />
    </div>
  );
};

export default Home;
