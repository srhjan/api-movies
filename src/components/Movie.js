import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <div className="ml-3">Nom du film : </div>
      <div className="m-6">{movie.title}</div>
      <img className="mb-6" src={movie.poster} alt="movie poster"></img>
    </div>
  );
}
