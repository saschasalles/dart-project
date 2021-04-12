import { Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import GamePlayer from '../game-player/game-player.entity';

@Entity('game')
export default class GameEntity {
  @PrimaryColumn()
  id: string

  @Column()
  mode: string

  @Column('varchar', { length: 500, unique: true})
  name: string

  @Column({
    nullable: true,
  })
  currentPlayerId: string | null

  @Column()
  status: string

  @Column()
  createdAt: Date

  @OneToMany(() => GamePlayer, (gamePlayer: GamePlayer) => gamePlayer.game)
  public gamePlayers: GamePlayer[];
}