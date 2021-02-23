import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';
import { GameEntity } from './game.entity';
import { GameDTO } from './game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
  ) {}

  async showAll() {
    return await this.gameRepository.find();
  }

  async create(data: GameDTO) {
    // @TODO : Implement UI GameMode choice

    data.currentPlayerId = "a747f061-d776-44ee-abd8-b68d41c5436a";
    data.mode = GameMode.mode1;
    data.status = GameStatus.started;
    data.createdAt = new Date();
    const user = this.gameRepository.create(data);
    await this.gameRepository.save(data);
    return user;
  }

  async read(id: string) {
    return await this.gameRepository.findOne({ where: { id: id } });
  }

  async update(id: string, data: Partial<GameDTO>) {
    await this.gameRepository.update({ id }, data);
    return await this.gameRepository.findOne({ id });
  }

  async destroy(id: string) {
    await this.gameRepository.delete({ id });
    return { deleted: true };
  }
}