import { Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import Player from '../players/player.entity';

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

  @OneToMany(() => Player, (player: Player) => player.game)
  public players: Player[];
}