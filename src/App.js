import React, { useState } from "react";
import "./tailwind.css";
import axios from "axios";
import Input from "./components/Input";
import Movie from "./components/Movie";

function App() {
  function search(title) {
    return axios({
      method: "get",
      url: "http://www.omdbapi.com",
      params: {
        apikey: "190cab4b",
        t: title,
      },
    }).then((res) => {
      console.log(res);
      return {
        title: res.data.Title,
        poster: res.data.Poster,
      };
    });
  }
  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState();
  return (
    <div>
      {/* <div className="ml-3">Nom du film : </div>
      <div className="m-6">{title}</div>
      <img className="mb-6" src={poster}></img> */}
      <Movie title={title} poster={poster}></Movie>
      <div>
        <Input
          title={newTitle}
          setTitle={(title) => setNewTitle(title)}
        ></Input>
        <button
          className="border border-gray-600 mt-4 p-1 ml-3"
          onClick={() => {
            search(newTitle).then((title) => {
              console.log(title);
              setTitle(title.title);
              setPoster(title.poster);
            });
            setNewTitle("");
          }}
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}

export default App;
