import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import "../../App.css";
const imgApi = "https://image.tmdb.org/t/p/w300";
const moviesApi =
  "https://api.themoviedb.org/3/movie/popular?api_key=e9ec4a6942fb3cc77d088572be881f3a&language=en-US&page=1";

export default function Movies({ handleTakeItem }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(moviesApi).then((data) => {
      setMovies(data.data.results);
    });
  }, []);
  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <div
            onClick={() => handleTakeItem(movie, movie.title)}
            key={movie.id}
            className="card"
          >
            <div>
              <img
                src={imgApi + movie.poster_path}
                alt="movieImg"
                width="280"
                height="300"
              />
            </div>
            <div className="text">
              <h5>{movie.title}</h5>
              <h5>{movie.vote_average}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
