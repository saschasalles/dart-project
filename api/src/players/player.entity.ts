import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Game from '../game/game.entity';

@Entity('player')
export default class PlayerEntity {
	@PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 500, unique: true})
    name: string

    @Column('varchar', { length: 500, unique: true})
    email: string

    @Column()
    gameWin: number

    @Column()
    gameLost: number

    @Column()
    createdAt: Date

    @ManyToOne(() => Game, (game: Game) => game.players)
    public game: Game;
}