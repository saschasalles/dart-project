import axios from "axios";



export class GameMode {
  
  public players: Array<Players>


  constructor() {
    this.players = this.fetchPlayers()
  }


  fetchPlayers(): Players[] {
    const players: Players[]
    
    const req = axios.get('http://localhost:3000/players')
    req.then((response) => {
      response.data.map( player => {
        players.push(new Player(player.id, player.name, player.gameWin, player.gameLost, player.createdAt))
      })

      console.log(response.status);
    });

    return players
  }
}

