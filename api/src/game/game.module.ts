import { Module } from '@nestjs/common';
import { GameService } from './game.service'
import { GameController } from './game.controller'
import GameEntity from './game.entity'
import PlayerEntity from '../players/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({
  imports: [ TypeOrmModule.forFeature([ GameEntity, PlayerEntity ]) ],
  controllers: [ GameController ],
  providers: [ GameService ]
})
export class GameModule {}
