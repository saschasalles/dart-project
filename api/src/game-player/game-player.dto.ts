import { ObjectID } from 'typeorm';

export class CreateGamePlayerDto {
  id: ObjectID;
  playerId: string;
  gameId: string;
  remainingShot: number | null;
  score: number;
  rank: number | null;
  order: number | null;
  inGame: boolean;
  createdAt: Date;
}
