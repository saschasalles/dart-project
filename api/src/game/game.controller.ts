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

import { GameService } from './game.service'
import { GameDTO } from './game.dto';

@Controller('games')
export class GameController {
  constructor(private GameService: GameService) {}

  @Get()
  async showAllGames() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.GameService.showAll(),
    };
  }

  @Post()
  async createGame(@Body() data: GameDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Game added successfully',
      data: await this.GameService.create(data),
    };
  }

  @Get(':id')
  async readGame(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.GameService.read(id),
    };
  }

  @Patch(':id')
  async updateGame(@Param('id') id: string, @Body() data: Partial<GameDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Game update successfully',
      data: await this.GameService.update(id, data),
    };
  }

  @Delete(':id')
  async deleteGame(@Param('id') id: string) {
    await this.GameService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Game deleted successfully',
    };
  }

  @Get(':id/players')
  async getPlayersInGame(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.GameService.getPlayersInGame(id),
    };
  }
}
