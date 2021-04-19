import { ApiProperty } from '@nestjs/swagger';
import GamePlayer from 'src/game-player/game-player.entity';

export class AddGamePlayerInGameDTO {
    @ApiProperty({ type: [GamePlayer] })
    gamePlayers: GamePlayer[];
  }