import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('player')
export default class PlayerEntity {
	@ObjectIdColumn() 
    id: ObjectID;

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
}