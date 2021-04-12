import { Injectable, HttpStatus, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';
import GameEntity from './game.entity';
import GamePlayerEntity from '../game-player/game-player.entity';
import { GameDTO } from './game.dto';
import { AddUserInGameDTO } from './addUserInGame.dto';
import { GamePlayerService } from '../game-player/game-player.service';
import { CreateGamePlayerDto } from '../game-player/game-player.dto';
import { v4 as uuidv4 } from 'uuid';
import { Dependencies } from '@nestjs/common';

@Injectable()
export class GameService {
  private gamePlayerService: GamePlayerService;

  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
    gamePlayerService: GamePlayerService,
  ) {
    this.gamePlayerService = gamePlayerService;
  }

  async showAll() {
    return await this.gameRepository.find();
  }

  async create(data: GameDTO) {
    data.currentPlayerId = null;
    data.mode = GameMode.mode1;
    data.status = GameStatus.draft;
    data.createdAt = new Date();
    data.id = uuidv4();
    const game = this.gameRepository.create(data);
    await this.gameRepository.save(data);
    return game;
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
    return await this.gameRepository.findOne(id, { relations: ['gamePlayers'] });
  }

  async addPlayersInGame(id: string, dto: AddUserInGameDTO) {
    const playersId = dto.players; // tableau ID des players

    const game = await this.gameRepository.findOne({ where: { id: id } }); // Recup game

    let score: number;

    switch (game.mode) {
      case 'around-the-world' || 'crickets':
        score = 0;
        break;
      case '301':
        score = 301;
        break;
      default:
        score = 0;
        break;
    }

    // TODO: Create game player
    let gamePlayersToAdd: GamePlayerEntity[] = [];
    playersId.map(async (playerId) => {
      const gamePlayerDto = new CreateGamePlayerDto();
      gamePlayerDto.playerId = playerId;
      gamePlayerDto.gameId = game.id;
      gamePlayerDto.score = score;
      gamePlayerDto.id = uuidv4();
      gamePlayerDto.remainingShots = 3;
      gamePlayerDto.rank = null;
      gamePlayerDto.inGame = false;
      gamePlayerDto.createdAt = new Date();

      const gamePlayer: GamePlayerEntity = await this.gamePlayerService.create(
        gamePlayerDto,
      );
      gamePlayersToAdd.push(gamePlayer);
    });

    game.gamePlayers = gamePlayersToAdd;

    this.gameRepository.save(game);
  }
}
