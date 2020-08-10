import React from "react";

export default function Button({ setSearchTitle, searchTitle }) {
  return (
    <div>
      <button
        className="border border-black"
        onClick={() => setSearchTitle(searchTitle)}
      >
        Rechercher
      </button>
    </div>
  );
}
