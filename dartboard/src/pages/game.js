import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { GameConfig } from "../components/gameConfig";
import { Header, Grid } from "semantic-ui-react";
import Target from "../components/target";
import { PlayerCard } from "../components/playerCard";
import axios from "axios";

export default function Game(props) {
  let { id } = useParams();
  const [gamePlayers, setGamePlayers] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/games/${id}/players`).then((res) => {
      setGamePlayers(res.data.data);
    });

    axios.get(`http://localhost:3000/games/${id}/allplayers`).then((res) => {
      setPlayers(res.data.data);
    });
  }, []);

  return (
    <>
      <Header h1>Titre</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Target />
          </Grid.Column>
          <Grid.Column width={5}>
            {gamePlayers.map((gamePlayer, index) =>
              players.map((player) => {
                return (
                  player.id == gamePlayer.playerId && (
                    <PlayerCard
                      key={index}
                      playerName={player.name}
                      playerTurn="you"
                      score={gamePlayer.score}
                    />
                  )
                );
              })
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
