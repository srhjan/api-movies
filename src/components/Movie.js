import React from "react";

export default function Movie({ title, poster }) {
  return (
    <div>
      <div className="ml-3">Nom du film : </div>
      <div className="m-6">{title}</div>
      <img className="mb-6" src={poster}></img>
    </div>
  );
}
