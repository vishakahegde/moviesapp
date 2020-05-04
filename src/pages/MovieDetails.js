import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const routeParameters = useParams();
  console.log(routeParameters);

  useEffect(() => {
    async function fetchMovieById(imdbID) {
      console.log("ID :", imdbID);
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=6d636986`
      );
    }
    fetchMovieById(routeParameters.imdbID);
  }, []);

  return (
    <div>
      <Link to="/movies">See all movies</Link>
      <div>
        <img src={movie.Poster} />
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
}
