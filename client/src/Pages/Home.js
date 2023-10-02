import React, { useCallback, useEffect, useState } from "react";

const Home = () => {
  const [movieSlides, setMovieSlides] = useState([]);
  const [error, setError] = useState(null);
  const [slide, setSlide] = useState(0);

  const REACT_APP_MOVIES_API_CONNECTION =
    process.env.REACT_APP_MOVIES_API_CONNECTION;
  const REACT_APP_MOVIES_API_ACCESS_TOKEN =
    process.env.REACT_APP_MOVIES_API_ACCESS_TOKEN;

  const chunkifyMovies = (movies) => {
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
    setMovieSlides(result);
  };

  const nextSlide = (slide) => {
    if (slide === movieSlides.length - 1) {
      setSlide(0);
    } else setSlide(slide + 1);
  };

  const prevSlide = (slide) => {
    if (slide === 0) {
      setSlide(movieSlides.length - 1);
    } else setSlide(slide - 1);
  };

  const getMovies = useCallback(async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${REACT_APP_MOVIES_API_ACCESS_TOKEN}`,
      },
    };

    try {
      fetch(`${REACT_APP_MOVIES_API_CONNECTION}`, options)
        .then((response) => response.json())
        .then((response) => chunkifyMovies(response.results))
        .catch((error) => setError(error.response.data.message));
    } catch (error) {
      setError(error.response.data.message);
    }
  }, [REACT_APP_MOVIES_API_CONNECTION, REACT_APP_MOVIES_API_ACCESS_TOKEN]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  console.log(movieSlides);
  return (
    <div className="mx-10">
      <h1 className="text-black">MOVIES</h1>
      <ul className="flex gap-10 justify-center">
        <button onClick={() => prevSlide(slide)}>{"<"}</button>
        {movieSlides[slide]?.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
        <button onClick={() => nextSlide(slide)}>{">"}</button>
      </ul>
    </div>
  );
};

export default Home;
