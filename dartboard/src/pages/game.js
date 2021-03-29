import { React, useEffect } from "react";
import { GameConfig } from "../components/gameConfig";
import { Header } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import Target from "../components/target";

import axios from "axios";

export default function Game(props) {
  return (
    <div>
      <Header h1> {props.title} </Header>
      <Target />
    </div>
  );
}
