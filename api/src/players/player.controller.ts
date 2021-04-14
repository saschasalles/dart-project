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
  import { ObjectID } from 'typeorm';
import { PlayerService } from './player.service'
import { PlayerDTO } from './player.dto';
const { ObjectId } = require('mongodb');

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
  async readPlayer(@Param('id') id: ObjectID) {
    const _id = ObjectId(id);
    return {
      statusCode: HttpStatus.OK,
      data: await this.playerService.read(_id),
    };
  }

  @Patch(':id')
  async updatePlayer(@Param('id') id: ObjectID, @Body() data: Partial<PlayerDTO>) {
    const _id = ObjectId(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Player update successfully',
      data: await this.playerService.update(_id, data),
    };
  }

  @Delete(':id')
  async deletePlayer(@Param('id') id: ObjectID) {
    const _id = ObjectId(id);
    await this.playerService.destroy(_id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Player deleted successfully',
    };
  }
}
