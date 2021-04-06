import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';

export interface GameDTO {
  id: string;
  mode: GameMode;
  name: string;
  currentPlayerId: string | null;
  status: GameStatus;
  createdAt: Date;
}