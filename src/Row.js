import React from "react";
import axios from "./axios";
import "./Row.css";
import { useState, useEffect } from "react";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const base_img_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row_poster ${isLargeRow && "row_pstLarge"}`}
              key={movie.id}
              alt="movie"
              src={`${base_img_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
