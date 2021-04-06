import { GameMode } from "../GameMode";
import { GamePlayer } from "../models/GamePlayer";
import { GameShot } from "../models/GameShot";


class Mode1 extends GameMode {
  public dummyGameShot = [12, 2];
  private shot: number = NaN;

  initGame() {
    while (this.currentGame.getStatus() == "started") {
      this.gamePlayers.forEach((gamePlayer) => {
        this.currentGame.setCurrentPlayerId(gamePlayer.getPlayerId());
        // while bon secteur et bon nb de try
        while (gamePlayer.getScore() + 1 == this.shot && gamePlayer.getRemainingShots() > 0) {
          this.play(gamePlayer);
          gamePlayer.setRemainingShots(gamePlayer.getRemainingShots() - 1);
        }
        gamePlayer.resetRemainingShots();
        this.shot = 0;
      });

    }
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

    this.shot = gameShot.getSector();

    if (this.shot == gamePlayer.getScore() + 1) {
      gamePlayer.setScore(gameShot.getSector());

      if (gamePlayer.getScore() == 25) {
        this.currentGame.setStatus("ended")
      }
    }

    

  }
}
