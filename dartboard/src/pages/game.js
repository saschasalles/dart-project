import { React, useEffect, useState } from "react";
import {
  useParams,
} from "react-router-dom";
import { Header, Grid, Card, Container, Button } from "semantic-ui-react";
import Target from "../components/target";
import { PlayerCard } from "../components/playerCard";
import axios from "axios";
import { handleScore } from "../helpers/around-the-world";
import { updateGamePlayer, updateCurrentPlayerGame, updateGamePlayers } from "../helpers/globalHelper";

export default function Game() {
  let { id } = useParams();
  const [gamePlayers, setGamePlayers] = useState([])
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({})
  const [endedGamePlayers, setEndedGamePlayers] = useState([])
  const [rank, setRank] = useState(0)

  useEffect(() => {
    axios.all([
      axios.get(`http://localhost:3000/games/${id}/players`),
      axios.get(`http://localhost:3000/games/${id}/gameplayers`)
    ])
    .then(axios.spread((firstResponse, secondResponse) => {
      setPlayers(firstResponse.data.data);
      initGame(secondResponse.data.data);
    }))
    .catch(error => console.log(error));
  }, []);

  const getGamePlayers = () => {
    return axios.get(`http://localhost:3000/games/${id}/gameplayers`)
  }

  const getPlayers = () => {
    return axios.get(`http://localhost:3000/games/${id}/players`)
  }

  const getGame = () => {
    return axios.get(`http://localhost:3000/games/${id}`)
  }

  const handleCellClicked = (value) => {
    // récup la valeur de la flechette
    // tant que remainingShot > 0
      // si score +1 = valeur flechette => incrémente score

    let currentPlayerInfos = {...currentPlayer};
    currentPlayerInfos.score = handleScore(value.cellValue.value, currentPlayerInfos.score)
    currentPlayerInfos.remainingShot = currentPlayer.remainingShot - 1
    setCurrentPlayer(currentPlayerInfos);
    updateGamePlayer(currentPlayerInfos);
    
    let newGamePlayers = [];
    
    gamePlayers.map(gamePlayer => {
      if (gamePlayer.playerId === currentPlayerInfos.playerId) {
        if (currentPlayerInfos.score === 20) {
          alert('tu as fini la partie')
          currentPlayerInfos.inGame = false
          currentPlayerInfos.rank = rank + 1
          setRank(rank + 1)
          updateGameCurrentPlayerId(gamePlayers)
          updateGamePlayer(currentPlayerInfos)
          setEndedGamePlayers((previousPlayers) => [...previousPlayers, currentPlayerInfos])
        } else {
          if (currentPlayerInfos.remainingShot == 0) {
            currentPlayerInfos.remainingShot = 3
            updateGameCurrentPlayerId(gamePlayers)
            updateGamePlayer(currentPlayerInfos)
          } 
        }
        newGamePlayers.push(currentPlayerInfos)
      } else {
        newGamePlayers.push(gamePlayer)
      }
    })
    
    updateGamePlayers(id, newGamePlayers);
    setGamePlayers(newGamePlayers);
  }

  const initGame = (array) => {
    let orderGamePlayers = []
    let endedOrderGamePlayer = []
    
    array.map(gamePlayer => {
      if (gamePlayer.inGame) {
        orderGamePlayers.splice(gamePlayer.order - 1, 0, gamePlayer)
      } else {
        endedOrderGamePlayer.push(gamePlayer)
      }
    })
    updateGameStatus('started');

    setGamePlayers(orderGamePlayers)
    setEndedGamePlayers(endedOrderGamePlayer)
    
    getGame()
    .then(res => {
      if (res.data.data.currentPlayerId) {        
        endedOrderGamePlayer.map(gamePlayer => {
          console.log(rank);
          
          if (gamePlayer.rank > rank) {
            console.log(gamePlayer);
            setRank(gamePlayer.rank)
          }
        })
        orderGamePlayers.map(gamePlayer => {
          if (res.data.data.currentPlayerId === gamePlayer.id) {
            setCurrentPlayer(gamePlayer)
            updateCurrentPlayerGame(id, gamePlayer.id)
          }
        })
      } else {
        setCurrentPlayer(array[0])
        updateCurrentPlayerGame(id, array[0].id)
      }
    })
  }

  const updateGameStatus = (status) => {
    const newStatus = {
      status : status
    }
    axios.patch(`http://localhost:3000/games/${id}`, newStatus)
    .catch(e => { console.log('ERROR patch update game status : ', e)
    });
  }
  
  const updateGameCurrentPlayerId = async (gamePlayersArray) => {
    let index = 0
    if (gamePlayers.indexOf(currentPlayer) !== gamePlayers.length - 1) {
      index = gamePlayers.indexOf(currentPlayer) + 1
    }

    setCurrentPlayer(gamePlayersArray[index])
    updateCurrentPlayerGame(id, gamePlayersArray[index].id)
  }

  return (
    <Container>
      <Header h1>Titre</Header>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Target onCellClick={(value) => handleCellClicked(value)} />
          </Grid.Column>
          <Grid.Column>
            <Card.Group itemsPerRow={3}>
            {gamePlayers.map((gamePlayer, index) =>
              players.map((player) => {
                return (
                  player.id == gamePlayer.playerId && gamePlayer.inGame && (
                    <PlayerCard
                      inGame={true}
                      color={gamePlayer.playerId == currentPlayer.playerId ? 'green' : 'red'}
                      key={index}
                      playerName={player.name}
                      score={gamePlayer.score}
                      remainingShot={gamePlayer.remainingShot}
                    />
                  )
                );
              })
            )}
            </Card.Group>
            <hr/>
            <Card.Group itemsPerRow={3}>
            {endedGamePlayers.map((gamePlayer, index) =>
              players.map((player) => {
                return (
                  player.id == gamePlayer.playerId && (
                    <PlayerCard
                      inGame={false}
                      color={'yellow'}
                      key={index}
                      playerName={player.name}
                      rank={gamePlayer.rank}
                    />
                  )
                );
              })
            )}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
