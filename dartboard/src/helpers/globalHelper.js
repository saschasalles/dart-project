import axios from "axios";

export const updateGamePlayer = (gamePlayer) => {
    let newData = {
        score: gamePlayer.score,
        remainingShot: gamePlayer.remainingShot,
        rank: gamePlayer.rank,
        inGame: gamePlayer.inGame
    }
    axios
        .patch(`http://localhost:3000/game-player/${gamePlayer.id}`, newData)
        .catch(e => console.log('Impossible de modifier ce gamePlayer : ', e))
} 

export const updateCurrentPlayerGame = (gameId, currentPlayerId) => {
    let newData = {
        currentPlayerId: currentPlayerId
    }
    axios
        .patch(`http://localhost:3000/games/${gameId}`, newData)
        .catch(e => console.log('Impossible de modifier cette game : ', e))
}

export const updateGamePlayers = (gameId, gamePlayers) => {
    axios
        .patch(`http://localhost:3000/games/${gameId}/gameplayers`, gamePlayers)
        .catch(e => console.log('Impossible de modifier cette game : ', e))
}