import React, { useState } from "react";
import "./tailwind.css";
import axios from "axios";
import Input from "./components/Input";
import Movie from "./components/Movie";
import Button from "./components/Button.js";

function App() {
  function search(movie) {
    return axios({
      method: "get",
      url: "http://www.omdbapi.com",
      params: {
        apikey: "190cab4b",
        t: movie,
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
  const [movie, setMovie] = useState({});
  return (
    <div>
      <Movie movie={movie}></Movie>
      <div>
        <Input
          title={newTitle}
          setTitle={(title) => setNewTitle(title)}
        ></Input>
        <Button
          onclick={() => {
            search(newTitle).then((movie) => {
              console.log(movie);
              setMovie(movie);
            });
            setNewTitle("");
          }}
        ></Button>
      </div>
    </div>
  );
}

export default App;
