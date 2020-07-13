import React from "react";
import { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    (async () => {
      await axios.get(request.fetchNetflixOriginals).then(res => {
        setMovie(res.data.results[Math.floor(Math.random() * 15)]);
        console.log(res.data.results[Math.floor(Math.random() * 15)]);
      });
    })();
  }, []);
  return (
    <header
      className="bann"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
      <div className="ban">
        <h1 className="ban_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="ban_description">{movie?.overview}</h1>
      </div>
      <div className="ban--fadeBottom"></div>
    </header>
  );
};

export default Banner;
