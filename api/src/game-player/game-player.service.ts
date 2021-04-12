import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateGamePlayerDto } from './game-player.dto';
import GamePlayerEntity from './game-player.entity';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GamePlayerService {
  constructor(
    @InjectRepository(GamePlayerEntity)
    private gamePlayerRepository: Repository<GamePlayerEntity>,
  ) {}

  async create(createGamePlayerDto: CreateGamePlayerDto) {
    const gamePlayer = this.gamePlayerRepository.create(createGamePlayerDto);
    await this.gamePlayerRepository.save(createGamePlayerDto);
    return gamePlayer;
  }

  findAll() {
    return `This action returns all gamePlayer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gamePlayer`;
  }

  remove(id: number) {
    return `This action removes a #${id} gamePlayer`;
  }
}
