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
import { AddUserInGameDTO } from './addUserInGame.dto';
import GamePlayer from '../game-player/game-player.entity';
import { AddGamePlayerInGameDTO } from './addGamePlayerInGame.dto';
import { ObjectID } from 'typeorm';
const { ObjectId } = require('mongodb');



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
  async createGame(@Body('game') data: GameDTO, @Body() addUserInGameDTO: AddUserInGameDTO) {
    const game = await this.GameService.create(data, addUserInGameDTO);
    return {
      statusCode: HttpStatus.OK,
      message: 'Game added successfully',
      data: game,
    };
  }

  @Get(':id')
  async readGame(@Param('id') id: ObjectID) {
    const _id = ObjectId(id);
    return {
      statusCode: HttpStatus.OK,
      data: await this.GameService.read(_id),
    };
  }

  @Patch(':id')
  async updateGame(@Param('id') id: ObjectID, @Body() data: Partial<GameDTO>) {
    const _id = ObjectId(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Game update successfully',
      data: await this.GameService.update(_id, data),
    };
  }

  @Delete(':id')
  async deleteGame(@Param('id') id: ObjectID) {
    const _id = ObjectId(id);
    await this.GameService.destroy(_id);
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
  
  @Get(':id/gameplayers')
  async getGamePlayersInGame(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.GameService.getGamePlayersInGame(id),
    };
  }
  
  @Patch(':id/gameplayers')
  async updateGamePlayersInGame(@Param('id') id: string, @Body() addGamePlayerInGameDTO: GamePlayer[]) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Game added successfully',
      data: await this.GameService.updateGamePlayersInGame(id, addGamePlayerInGameDTO)
    };
  }
}
