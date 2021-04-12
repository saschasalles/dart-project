export class CreateGamePlayerDto {
  id: string;
  playerId: string;
  gameId: string;
  remainingShots: number | null;
  score: number;
  rank: number | null;
  order: number | null;
  inGame: boolean;
  createdAt: Date;
}
