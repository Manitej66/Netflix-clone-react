import React from "react";
import { useState } from "react";
import { useEffect, useMemo } from "react";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, url, poster }) => {
  const [movies, setMovies] = useState([]);
  const [link, setLink] = useState();
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };

  useMemo(async () => {
    await axios
      .get(url)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(err => console.log(err));
  }, [url]);

  return (
    <div>
      <h1 style={{ marginLeft: 10, color: "white" }}>{title}</h1>
      <div className="row">
        {movies.map(movie => (
          <img
            className={`${poster ? "row_large" : "row_item"}`}
            key={movie.id}
            onClick={() => {
              if (link) {
                setLink();
              } else {
                movieTrailer(movie?.name || movie?.title)
                  .then(ur => {
                    const urlParams = new URLSearchParams(new URL(ur).search);
                    setLink(urlParams.get("v"));
                  })
                  .catch(err => console.log(err));
              }
            }}
            src={`${base}${poster ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      {link ? <YouTube videoId={link} opts={opts} /> : null}
    </div>
  );
};

export default Row;
