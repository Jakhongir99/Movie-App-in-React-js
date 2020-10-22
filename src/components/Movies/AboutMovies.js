import React from "react";
import "../../App.css";
const imgApi = "https://image.tmdb.org/t/p/w300";

export default function AboutMovies({ movieMy, closeHandlerItem }) {
  return (
    <div className="about">
      <img
        src={imgApi + movieMy.poster_path}
        alt="movieImg"
        width="300"
        height="300"
      />
      <div className="text">
        <p>
          <b>Movie Name:</b> {movieMy.title}
        </p>
        <p>
          <b>Overview:</b> {movieMy.overview}
        </p>
      </div>
      <span className="close" onClick={closeHandlerItem}>
        &times;
      </span>
    </div>
  );
}
