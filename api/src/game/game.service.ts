import { Injectable, HttpStatus, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, ObjectID, getMongoManager } from 'typeorm';
import { GameMode } from '../enums/GameMode';
import { GameStatus } from '../enums/GameStatus';
import GameEntity from './game.entity';
import GamePlayerEntity from '../game-player/game-player.entity';
import PlayerEntity from '../players/player.entity';
import { GameDTO } from './game.dto';
import { AddUserInGameDTO } from './addUserInGame.dto';
import { GamePlayerService } from '../game-player/game-player.service';
import { CreateGamePlayerDto } from '../game-player/game-player.dto';
import { AddGamePlayerInGameDTO } from '../game/addGamePlayerInGame.dto';
import {getMongoRepository} from "typeorm";
import { Dependencies } from '@nestjs/common';
import GamePlayer from '../game-player/game-player.entity';

var ObjectId = require('mongodb').ObjectID;

@Injectable()
export class GameService {
  private gamePlayerService: GamePlayerService;

  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
    @InjectRepository(PlayerEntity)
    private gamePlayerRepository: Repository<GamePlayerEntity>,
    gamePlayerService: GamePlayerService,
  ) {
    this.gamePlayerService = gamePlayerService;
  }

  async showAll() {
    return await this.gameRepository.find();
  }
  
  async create(gameDto: GameDTO, addUserInGameDTO: AddUserInGameDTO) {
    gameDto.currentPlayerId = null;
    gameDto.status = GameStatus.draft;
    gameDto.createdAt = new Date();

    this.gameRepository.create(gameDto);
    const game = await this.gameRepository.save(gameDto);

    this.addPlayersInGame(addUserInGameDTO, game);

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

  async getGamePlayersInGame(id: string) {
    const repository = getMongoRepository(GamePlayerEntity);
    const gamePlayers = await repository.find({  
      where : { 
        gameId: { $eq: id }
      }
    });
    return gamePlayers;
  }

  async getPlayersInGame(id: string) {
    const playerRepository = getMongoRepository(PlayerEntity);
    const repository = getMongoRepository(GamePlayerEntity);
    let playersId: string[] = [];
    const gamePlayers = await repository.find({  
      where : { 
        gameId: { $eq: id }
      }
    });
    
    gamePlayers.map((gamePlayer) => playersId.push(ObjectId(gamePlayer.playerId)));
    
    const players = await playerRepository.find({ 
      where: {
        _id: {$in: playersId}
      }
    })
    return players;
  }

  async addPlayersInGame(addUserInGameDTO: AddUserInGameDTO, game: GameEntity) {
    let playersId: ObjectID[] = [];
    addUserInGameDTO.players.map(id => {
      playersId.push(ObjectId(id))
    })

    let score: number;

    switch (game.mode) {
      case 'around-the-world' || 'crickets':
        score = 18;
        break;
      case '301':
        score = 301;
        break;
      default:
        score = 0;
        break;
    }
    
    let gamePlayersToAdd = [];
    console.log(playersId);
    
    playersId.map(async (playerId: ObjectID, index) => {
      const gamePlayerDto = new CreateGamePlayerDto();
      gamePlayerDto.playerId = playerId.toString();
      gamePlayerDto.gameId = game.id.toString();
      gamePlayerDto.score = score;
      gamePlayerDto.remainingShot = 3;
      gamePlayerDto.rank = null;
      gamePlayerDto.order = index + 1;
      gamePlayerDto.inGame = true;
      gamePlayerDto.createdAt = new Date();

      const gamePlayer = await this.gamePlayerService.create(
        gamePlayerDto,
      );
      gamePlayersToAdd.push(gamePlayer);
      game.gamePlayers = gamePlayersToAdd;
      this.gameRepository.update(game.id, game);
    });
  }
  
  async updateGamePlayersInGame(id: string, data: Partial<GamePlayer[]>) {
    const _id = ObjectId(id);
    let game = await this.gameRepository.findOne({ where: { _id: _id} });
    
    game.gamePlayers = data;
    
    await this.gameRepository.update(game.id, game);
    // return await this.gamePlayerRepository.findOne({ id });
  }
}
