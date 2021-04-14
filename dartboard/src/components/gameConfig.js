import { useState, useEffect, React } from "react";
import { useLocation, Link, Router, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  List,
  Dimmer,
  Loader,
  Segment,
  Message,
  Confirm,
  Header,
} from "semantic-ui-react";
import { AddPlayerForm } from "./addPlayerForm";
import Game from "../pages/game";

import axios from "axios";

export function GameConfig(props) {
  const [players, setPlayers] = useState([]);
  const [dbPlayers, setDbPlayers] = useState([]);
  const [gamePlayers, setGamePlayers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const location = useLocation();
  const pathName = location.pathname.replace("/", "");
  const gameLink = "/game/" + pathName;
  let history = useHistory();

  const handleDelete = (evt, index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const fetchData = async () => {
    const result = await axios("http://localhost:3000/players");
    let playersObj = [];
    result.data.data.map((player) => {
      playersObj.push(player);
    });
    setDbPlayers(playersObj);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddPlayer = (player) => {
    setPlayers((previousPlayers) => [...previousPlayers, player]);
  };

  const handleDeletePlayer = (player) => {
    const newPlayers = dbPlayers.filter((play) => play.id !== player.id);
    axios
      .delete(`http://localhost:3000/players/${player.id}`)
      .then((res) => {
        setDbPlayers(newPlayers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCreateGame = () => {
    const game = {
      name: Math.random() * 3,
      mode: pathName,
    };

    const playersId = getAllPlayersId();

    axios.post("http://localhost:3000/games", game)
    .then((res) => {
      return axios.post(
        `http://localhost:3000/games/${res.data.data.id}/players`,
        { players: playersId }
      )
      .then(res => {
        history.push(`/game/${res.data.data}`)
      })
    }) 
  };

  const checkId = (playerId) => {
    let res = false;
    players.map((player) => {
      if (player.id == playerId) {
        res = true;
      }
    });
    return res;
  };

  const checkNumberPlayers = () => {
    let res = true;
    if (players.length >= 2) {
      res = false;
    }
    return res;
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.location.reload();
  };

  const deletePlayer = (player) => {
    handleDeletePlayer(player);
    setConfirmOpen(false);
  };

  const getAllPlayersId = () => {
    let playersId = [];
    players.map((player) => {
      playersId.push(player.id);
    });
    return playersId;
  };

  const UserList = () => {
    return (
      <List divided>
        {dbPlayers.map((player, index) => (
          <List.Item key={index}>
            <List.Content floated="right">
              <Button
                color="red"
                icon="trash alternate"
                circular
                onClick={() => handleDeletePlayer(player)}
              >
                {/* <Confirm
                open={confirmOpen}
                cancelButton='Never mind'
                confirmButton="Let's do it"
                onCancel={setConfirmOpen(false)}
                onConfirm={() => deletePlayer(player)}
              /> */}
              </Button>
              <Button
                disabled={checkId(player.id)}
                color="green"
                icon="add"
                circular
                onClick={() => handleAddPlayer(player)}
              ></Button>
            </List.Content>
            <List.Content>{player.name}</List.Content>
          </List.Item>
        ))}
      </List>
    );
  };

  if (dbPlayers.length > 0) {
    return (
      <div>
        <Header h1> {props.title} </Header>
        <Segment>
          <List selection>
            {players.length == 0 && (
              <Message>
                <p>Veuillez ajouter au moins 2 joueurs </p>
              </Message>
            )}

            {players.map((player, index) => (
              <List.Item key={index}>
                <List.Content key={player.id} floated="right">
                  <Button
                    key={player.id}
                    color="red"
                    circular
                    icon="trash alternate"
                    onClick={(e, index) => handleDelete()}
                  ></Button>
                </List.Content>
                <List.Content>
                  Joueur {index + 1} : {player.name}
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>

        <Segment>{UserList()}</Segment>

        <AddPlayerForm
          open={modalIsOpen}
          onClose={() => closeModal()}
          onOpen={() => setModalIsOpen(true)}
        />

        <Button
          disabled={checkNumberPlayers()}
          color="purple"
          icon="game"
          content="Jouer"
          onClick={() => handleCreateGame()}
        />
      </div>
    );
  } else {
    return (
      <>
        <Header h1> {props.title} </Header>
        <Message>
          <p>Veuillez ajouter au moins 2 joueurs </p>
        </Message>
        <AddPlayerForm
          open={modalIsOpen}
          onClose={() => closeModal()}
          onOpen={() => setModalIsOpen(true)}
        />
      </>
    );
  }
}

