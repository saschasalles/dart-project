import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';

export interface GameDTO {
  mode: GameMode;
  name: string;
  currentPlayerId: string | null;
  status: GameStatus;
  createdAt: Date;
}