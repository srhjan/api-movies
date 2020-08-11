import React from "react";

export default function Button({ onclick }) {
  return (
    <div>
      <button
        className="border border-gray-600 mt-4 p-1 ml-3"
        onClick={onclick}
      >
        Rechercher
      </button>
    </div>
  );
}
