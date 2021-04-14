import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';
import { ObjectID } from 'typeorm';

export interface GameDTO {
  mode: GameMode;
  name: string;
  currentPlayerId: ObjectID | null;
  status: GameStatus;
  createdAt: Date;
}