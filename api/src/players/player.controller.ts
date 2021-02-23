import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
  } from '@nestjs/common';

import { PlayerService } from './player.service'
import { PlayerDTO } from './player.dto';

@Controller('players')
export class PlayerController {
    constructor(private playerService: PlayerService) {}

  @Get()
  async showAllPlayers() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.playerService.showAll(),
    };
  }

  @Post()
  async createPlayer(@Body() data: PlayerDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Player added successfully',
      data: await this.playerService.create(data),
    };
  }

  @Get(':id')
  async readPlayer(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.playerService.read(id),
    };
  }

  @Patch(':id')
  async updatePlayer(@Param('id') id: string, @Body() data: Partial<PlayerDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Player update successfully',
      data: await this.playerService.update(id, data),
    };
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: string) {
    await this.playerService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Player deleted successfully',
    };
  }
}
