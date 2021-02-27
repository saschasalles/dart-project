import React from "react";
import PlayerForm from "../components/form";
import { Header } from "semantic-ui-react";


export const Game = props => (
    <div>
      <Header h1> {props.title} </Header>
      <PlayerForm />
    </div>
)
