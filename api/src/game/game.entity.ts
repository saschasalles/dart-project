import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('game')
export class GameEntity {
	@PrimaryGeneratedColumn('uuid') id: string

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
}