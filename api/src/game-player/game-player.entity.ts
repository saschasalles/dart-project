import { Entity, Column, ObjectIdColumn, ObjectID, ManyToOne } from 'typeorm';
import GameEntity from '../game/game.entity';
import Game from '../game/game.entity';

@Entity('gamePlayer')
export default class GamePlayer {
  @ObjectIdColumn() 
  id: ObjectID;
  
  @Column()
  playerId: string;

  @Column()
  gameId: string;

  @Column({
    nullable: true,
  })
  remainingShot: number | null;

  @Column()
  score: number;

  @Column({
    nullable: true,
  })
  rank: number | null;

  @Column({
    nullable: true,
  })
  order: number | null;

  @Column()
  inGame: boolean;

  @Column()
  createdAt: Date;

  @ManyToOne(() => Game, (game: Game) => game.gamePlayers)
  game: Game;
}
