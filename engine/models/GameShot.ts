export class GameShot {
    private id: string;
    private gameId: string;
    private playerId: string;
    private multiplicator: number; 
    private sector: number;
    private createdAt: Date;
  
  constructor(gameId: string, playerId: string, sector: number, multiplicator: number) {
      this.gameId = gameId;
      this.playerId = playerId;
      this.multiplicator = multiplicator;
      this.sector = sector;
    }
  
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getGameId(): string {
        return this.gameId;
    }

    public setGameId(gameId: string): void {
        this.gameId = gameId;
    }

    public getPlayerId(): string {
        return this.playerId;
    }

    public setPlayerId(playerId: string): void {
        this.playerId = playerId;
    }

    public getMultiplicator(): number {
        return this.multiplicator;
    }

    public setMultiplicator(multiplicator: number): void {
        this.multiplicator = multiplicator;
    }

    public getSector(): number {
        return this.sector;
    }

    public setSector(sector: number): void {
        this.sector = sector;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }

}