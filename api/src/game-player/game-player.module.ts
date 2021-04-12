import { Module } from '@nestjs/common';
import { GamePlayerController } from './game-player.controller';
import GamePlayerEntity from './game-player.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamePlayerService } from './game-player.service';

@Module({
  imports: [TypeOrmModule.forFeature([GamePlayerEntity])],
  providers: [GamePlayerService],
  controllers: [GamePlayerController],
  exports: [GamePlayerService]
})
export class GamePlayerModule {}
