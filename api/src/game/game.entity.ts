import { Entity, Column, PrimaryColumn , ObjectIdColumn, ObjectID, OneToMany} from 'typeorm';
import GamePlayer from '../game-player/game-player.entity';

@Entity('game')
export default class GameEntity {
  @ObjectIdColumn() id: ObjectID
  
  @Column()
  mode: string

  @Column('varchar', { length: 500, unique: true})
  name: string

  @ObjectIdColumn()
  currentPlayerId: ObjectID | null

  @Column()
  status: string

  @Column()
  createdAt: Date

  @Column(type => GamePlayer)
  gamePlayers: GamePlayer[]

  // @OneToMany(() => GamePlayer, (gamePlayer: GamePlayer) => gamePlayer.game)
  // public gamePlayers: GamePlayer[];
}