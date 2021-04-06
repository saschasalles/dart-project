import { React, useEffect } from "react";
import { GameConfig } from "../components/gameConfig";
import { Header, Grid } from "semantic-ui-react";
import { useLocation } from "react-router-dom";
import Target from "../components/target";
import { PlayerCard } from "../components/playerCard";
import axios from "axios";

export default function Game(props) {
  return (
    <>
      <Header h1> {props.title} </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Target />
          </Grid.Column>
          <Grid.Column width={5}>
            <PlayerCard playerName="toto" playerTurn="you" score="301" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
