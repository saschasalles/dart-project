import { React, useEffect } from "react";
import { GameConfig } from "../components/gameConfig";
import { Header } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export function Game(props) {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  useEffect(() => {
    const game = {
      name: Math.random() * 3,
      mode: pathName,
    };

    axios
      .post("http://localhost:3000/games", game)
      .then(function (response) {
  
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <div>
      <Header h1> {props.title} </Header>
      <GameConfig  />
    </div>
  );
}
