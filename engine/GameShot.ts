class GameShot {
  private id :number;
  private gameId: number | string;
  private playerId: number | string;
  private multiplicator: number; 
  private sector: number;
  private createdAt: Date;

  constructor(gameId: number, playerId: number, multiplicator: number, sector: number) {
    this.gameId = gameId;
    this.playerId = playerId;
    this.multiplicator = multiplicator;
    this.sector = sector;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }
    
  public getGameId() {
    return this.gameId
  }
  
  public setGameId(val: number | string) {
    this.gameId = val
  }
  
  public getPlayerId() {
    return this.playerId
  }
  
  public setPlayerId(val: number | string) {
    this.playerId = val
  }
  
  public getMultiplicator() {
    return this.multiplicator
  }
  
  public setMultiplicator(val: number) {
    this.multiplicator = val
  }
  
  public getSector() {
    return this.sector
  }
  
  public setSector(val: number) {
    this.sector = val
  }
  
  public getCreatedAt() {
    return this.createdAt
  }
  
  public setCreatedAt(val: Date) {
    this.createdAt = val
  }
}