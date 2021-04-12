import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import GameEntity from './game.entity';
import PlayerEntity from '../players/player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamePlayerModule } from '../game-player/game-player.module';
import GamePlayerEntity from '../game-player/game-player.entity';
import { GamePlayerService } from '../game-player/game-player.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GameEntity, PlayerEntity, GamePlayerEntity]),
    GamePlayerModule,
  ],
  controllers: [GameController],
  providers: [GameService, GamePlayerService],
})
export class GameModule {}
