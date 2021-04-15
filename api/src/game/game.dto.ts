import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';
import { ObjectID } from 'typeorm';
import GamePlayer from 'src/game-player/game-player.entity';

export interface GameDTO {
  mode: GameMode;
  name: string;
  currentPlayerId: ObjectID | null;
  status: GameStatus;
  createdAt: Date;
  gamePlayers: GamePlayer[] | null;
}