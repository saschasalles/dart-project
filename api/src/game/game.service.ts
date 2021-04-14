import { Injectable, HttpStatus, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, ObjectID } from 'typeorm';
import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';
import GameEntity from './game.entity';
import GamePlayerEntity from '../game-player/game-player.entity';
import PlayerEntity from '../players/player.entity';
import { GameDTO } from './game.dto';
import { AddUserInGameDTO } from './addUserInGame.dto';
import { GamePlayerService } from '../game-player/game-player.service';
import { CreateGamePlayerDto } from '../game-player/game-player.dto';
import { Dependencies } from '@nestjs/common';

var ObjectId = require('mongodb').ObjectID;

@Injectable()
export class GameService {
  private gamePlayerService: GamePlayerService;

  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
    gamePlayerService: GamePlayerService,
  ) {
    this.gamePlayerService = gamePlayerService;
  }

  async showAll() {
    return await this.gameRepository.find();
  }

  async create(data: GameDTO) {
    data.currentPlayerId = null;
    data.status = GameStatus.draft;
    data.createdAt = new Date();
    const game = this.gameRepository.create(data);
    await this.gameRepository.save(data);
    return game;
  }

  async read(id: ObjectID) {
    return await this.gameRepository.findOne({ where: { _id: id } });
  }

  async update(id: ObjectID, data: Partial<GameDTO>) {
    await this.gameRepository.update({ id }, data);
    return await this.gameRepository.findOne({ id });
  }

  async destroy(id: ObjectID) {
    await this.gameRepository.delete({ id });
    return { deleted: true };
  }

  async getPlayersInGame(id: ObjectID) {
    const game = await this.gameRepository.findOne({
      where: { _id: id },
      relations: ['gamePlayers'],
    });
    return game;
  }

  async getAllPlayersInGame(id: ObjectID) {
    const game = await this.gameRepository.findOne({
      where: { _id: id },
      relations: ['gamePlayers'],
    });
    const gamePlayers = game.gamePlayers;
    let playersId: ObjectID[] = [];

    gamePlayers.map((gamePlayer) => playersId.push(gamePlayer.playerId));
    const players = await this.playerRepository.find({ id: In(playersId) });

    return players;
  }

  async addPlayersInGame(name: string, dto: AddUserInGameDTO) {
    const playersId: ObjectID[] = []; // tableau ID des players
    dto.players.map(player => {
      playersId.push(ObjectId(player))
    })

    const game = await this.gameRepository.findOne({ where: { name: name } }); // Recup game

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
    playersId.map(async (playerId: ObjectID) => {
      const gamePlayerDto = new CreateGamePlayerDto();
      gamePlayerDto.playerId = playerId;
      gamePlayerDto.gameId = game.id;
      gamePlayerDto.score = score;
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
