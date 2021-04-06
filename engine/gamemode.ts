import axios from "axios";

import { Player } from "./models/Player";
import { GamePlayer } from "./models/GamePlayer";
import { Game } from "./models/Game";

//1 get les players ( get/players)
//2 get le mode  (get/game)
//3 shuffle les players
//4 on créer le game
//5 on créer les gamePlayers
//6 on créer le mode


export abstract class GameMode {

  public currentGame: Game;
  public req = ["Mon jeu", "around-the-world"]
  public players: Array<Player> = [
    new Player("az1dfdf", "Théo", 0, 0, new Date()),
    new Player("zer2dff", "Sascha", 0, 0, new Date()),
    new Player("zdfg3df", "Salomé", 0, 0, new Date()),
    new Player("poqdfn4", "Anaïs", 0, 0, new Date()),
  ]

  public gamePlayers: GamePlayer[] = []

  constructor() {
    // this.players = this.fetchPlayers()

  }

  shuffle() {
    var currentIndex = this.players.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.players[currentIndex];
      this.players[currentIndex] = this.players[randomIndex];
      this.players[randomIndex] = temporaryValue;
    }
  }

  
  createGame() {
    // fetch request qui récupère game et mode 
    this.currentGame = new Game(this.req[1], this.req[0])
  }

  createGamePlayer() {
    this.shuffle()
    this.players.forEach((player, index) => {
      this.gamePlayers.push(new GamePlayer(player.getId(), this.currentGame.getId(), 0, index))
    })
  }




  // fetchPlayers(): Player[] {
  //   const req = axios.get<Player[]>('http://localhost:3000/players')
  //   req.then((response) => {
  //     let players: Player[]
  //     const res = response.data["data"]
  //     res.map(player => {
  //       const convertedDate: Date = new Date(player.createdAt);
  //       const newPlayer: Player = new Player(player.id, player.name, player.gameWin, player.gameLost, convertedDate);
  //       players.push(newPlayer)
  //     })
  //   })



}



