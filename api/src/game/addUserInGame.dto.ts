import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'typeorm';

export class AddUserInGameDTO {
  @ApiProperty({ type: [String] })
  players: string[];
}
