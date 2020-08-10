import React, { useState } from "react";
import "./tailwind.css";
import axios from "axios";
import Input from "./components/Input";

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
      <div className="ml-3">Nom du film : </div>
      <div className="m-16">{title}</div>
      <img src={poster}></img>
      <div>
        <Input
          title={newTitle}
          setTitle={(title) => setNewTitle(title)}
        ></Input>
        {/* <input
          className="border border-purple-400 ml-3 p-1"
          onChange={(e) => setNewTitle(e.target.value)}
        /> */}
        <button
          className="border border-gray-600 mt-4 p-1 ml-3"
          onClick={() =>
            search(newTitle).then((title) => {
              console.log(title);
              setTitle(title.title);
              setPoster(title.poster);
            })
          }
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}

export default App;
