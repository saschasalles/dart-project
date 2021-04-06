import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';
import GameEntity from './game.entity';
import PlayerEntity from '../players/player.entity';
import { GameDTO } from './game.dto';
import { AddUserInGameDTO } from './addUserInGame.dto';
import { v4 as uuidv4 } from "uuid";


@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
  ) {}

  async showAll() {
    return await this.gameRepository.find();
  }

  async create(data: GameDTO) {
    data.currentPlayerId = null;
    data.mode = GameMode.mode1;
    data.status = GameStatus.draft;
    data.createdAt = new Date();
    data.id = uuidv4();
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

  async getPlayersInGame(id: string) {
    return await this.gameRepository.findOne(id, { relations: ['players'] });
  }

  async addPlayersInGame(id: string, dto: AddUserInGameDTO) {
    const playersId = dto.players;

    const game = await this.gameRepository.findOne({ where: { id: id } });
    
    const playersToAdd = await this.playerRepository.find({
      where: { id: In(playersId) }
    });

    console.log('playerstoadd :', playersToAdd);
    
    game.players = playersToAdd;
    this.gameRepository.save(game);
  }
}