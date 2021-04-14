import { Entity, Column, ObjectIdColumn, ObjectID, ManyToOne } from 'typeorm';
import Game from '../game/game.entity';

@Entity('gamePlayer')
export default class GamePlayer {
  @ObjectIdColumn() id: ObjectID
  
  @ObjectIdColumn()
  playerId: ObjectID;

  @ObjectIdColumn()
  gameId: ObjectID;

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
  public game: Game;
}
