import React from "react";

export default function Input({ setTitle, title }) {
  return (
    <div>
      <input
        className="border border-purple-400 ml-3 p-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
