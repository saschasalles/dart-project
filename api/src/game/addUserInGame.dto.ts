import { ApiProperty } from '@nestjs/swagger';

export class AddUserInGameDTO {
  @ApiProperty({ type: [String] })
  players: string[];
}