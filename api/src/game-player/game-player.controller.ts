import { Controller, Get, Patch, Body, Param, HttpStatus, } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { GamePlayerService } from './game-player.service'
import { CreateGamePlayerDto } from './game-player.dto';
const { ObjectId } = require('mongodb');

@Controller('game-player')
export class GamePlayerController {
    constructor(private GamePlayerService: GamePlayerService) {}

    @Get()
    async showAllGames() {
      return {
        statusCode: HttpStatus.OK,
        data: await this.GamePlayerService.showAll(),
      };
    }

    @Patch(':id')
    async updatePlayer(@Param('id') id: ObjectID, @Body() data: Partial<CreateGamePlayerDto>) {
        const _id = ObjectId(id);
        return {
            statusCode: HttpStatus.OK,
            message: 'Player update successfully',
            data: await this.GamePlayerService.update(_id, data),
        };
    }    
}
