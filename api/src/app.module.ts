import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './players/player.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PlayerModule, GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}