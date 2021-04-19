import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';

import { CreateGamePlayerDto } from './game-player.dto';
import GamePlayerEntity from './game-player.entity';

@Injectable()
export class GamePlayerService {
  constructor(
    @InjectRepository(GamePlayerEntity)
    private gamePlayerRepository: Repository<GamePlayerEntity>,
  ) {}

  async showAll() {
    return await this.gamePlayerRepository.find();
  }

  async create(createGamePlayerDto: CreateGamePlayerDto) {
    const gamePlayer = this.gamePlayerRepository.create(createGamePlayerDto);
    await this.gamePlayerRepository.save(createGamePlayerDto);
    return gamePlayer;
  }

  async update(id: string, data: Partial<CreateGamePlayerDto>) {
    await this.gamePlayerRepository.update({ id }, data);
    return await this.gamePlayerRepository.findOne({ id });
  }

  findAll() {
    return `This action returns all gamePlayer`;
  }

  findOne(id: ObjectID) {
    return `This action returns a #${id} gamePlayer`;
  }

  remove(id: ObjectID) {
    return `This action removes a #${id} gamePlayer`;
  }


  
}
