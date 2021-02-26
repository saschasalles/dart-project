import { v4 as uuidv4 } from "uuid";

export class GamePlayer {
  private id?: string;
  private playerId: string;
  private gameId: string;
  private remainingShots?: number;
  private score: number;
  private rank: number;
  private order: number;
  private inGame: boolean;
  private createdAt: Date;


  constructor(playerId: string, gameId: string, score: number, order: number) {
    this.id = uuidv4();
    this.playerId = playerId;
    this.gameId = gameId;
    this.remainingShots = 3;
    this.score = score;
    this.rank = null;
    this.order = order;
    this.inGame = true;
    this.createdAt = new Date();
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getPlayerId(): string {
    return this.playerId;
  }

  public setPlayerId(playerId: string): void {
    this.playerId = playerId;
  }

  public getGameId(): string {
    return this.gameId;
  }

  public setGameId(gameId: string): void {
    this.gameId = gameId;
  }

  public getRemainingShots(): number {
    return this.remainingShots;
  }

  public setRemainingShots(remainingShots: number): void {
    this.remainingShots = remainingShots;
  }

  public getScore(): number {
    return this.score;
  }

  public setScore(score: number): void {
    this.score = score;
  }

  public getRank(): number {
    return this.rank;
  }

  public setRank(rank: number): void {
    this.rank = rank;
  }

  public getOrder(): number {
    return this.order;
  }

  public setOrder(order: number): void {
    this.order = order;
  }

  public isInGame(): boolean {
    return this.inGame;
  }

  public setInGame(inGame: boolean): void {
    this.inGame = inGame;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public resetRemainingShots(): void {
    this.remainingShots = 3;
  }



}
