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
import { ObjectID } from 'typeorm';
const { ObjectId } = require('mongodb');
import { ParseArrayPipe } from '@nestjs/common';



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
  async getPlayersInGame(@Param('id') id: ObjectID) {
    const _id = ObjectId(id);
    return {
      statusCode: HttpStatus.OK,
      data: await this.GameService.getPlayersInGame(_id),
    };
  }

  // Create Game Player
  
  @Post(':name/players')
    async create(@Param('name') name: string, @Body() addUserInGameDTO: AddUserInGameDTO) {
      this.GameService.addPlayersInGame(name, addUserInGameDTO);

      return {
        statusCode: HttpStatus.OK,
        message: 'Users added in game succesfully',
        data: name
      };
  }
  
  @Get(':id/allplayers')
  async getAllPlayersInGame(@Param('id') id: ObjectID) {
    const _id = ObjectId(id);
    return {
      statusCode: HttpStatus.OK,
      data: await this.GameService.getAllPlayersInGame(_id),
    };
  }
}
