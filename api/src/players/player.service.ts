import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import PlayerEntity from './player.entity';
import { PlayerDTO } from './player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
  ) {}

  async showAll() {
    return await this.playerRepository.find();
  }

  async create(data: PlayerDTO) {
    data.createdAt = new Date();
    data.gameWin = 0;
    data.gameLost = 0;
    const user = this.playerRepository.create(data);
    await this.playerRepository.save(data);
    return user;
  }

  async read(id: string) {
    return await this.playerRepository.findOne({ where: { id: id } });
  }

  async update(id: string, data: Partial<PlayerDTO>) {
    await this.playerRepository.update({ id }, data);
    return await this.playerRepository.findOne({ id });
  }

  async destroy(id: string) {
    await this.playerRepository.delete({ id });
    return { deleted: true };
  }
}