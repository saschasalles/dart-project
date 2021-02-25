import { GameMode } from "../GameMode";
import { GamePlayer } from "../models/GamePlayer";
import { GameShot } from "../models/GameShot";

//9!

class Mode1 extends GameMode {
  public dummyGameShot = [12, 2];

  initGame() {
    this.gamePlayers.forEach((gamePlayer) => {
      this.currentGame.setCurrentPlayerId(gamePlayer.getPlayerId());
      while (gamePlayer.getRemainingShots() > 0) {
        this.play(gamePlayer);
        gamePlayer.setRemainingShots(gamePlayer.getRemainingShots() - 1);
      }
      gamePlayer.resetRemainingShots();
    });
  }

  play(gamePlayer: GamePlayer) {
    //Init gameShot
    //fetch gameshot
    const gameShot = new GameShot(
      gamePlayer.getGameId(),
      gamePlayer.getPlayerId(),
      this.dummyGameShot[0],
      this.dummyGameShot[1]
    );
    const score = this.dummyGameShot[0] * this.dummyGameShot[1];
    gamePlayer.setScore(gamePlayer.getScore() + score);
  }
}
