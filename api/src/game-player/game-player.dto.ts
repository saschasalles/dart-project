import { ObjectID } from 'typeorm';

export class CreateGamePlayerDto {
  id: ObjectID;
  playerId: ObjectID;
  gameId: ObjectID;
  remainingShots: number | null;
  score: number;
  rank: number | null;
  order: number | null;
  inGame: boolean;
  createdAt: Date;
}
