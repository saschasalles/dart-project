import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('player')
export class PlayerEntity {
	@PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 500, unique: true})
    name: string

    @Column()
    gameWin: number

    @Column()
    gameLost: number

    @Column()
    createdAt: Date
}