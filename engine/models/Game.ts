export class Game {
  private id: string;
  private mode: string;
  private name: string;
  private currentPlayerId: string;
  private status: string;
  private createdAt: Date;

  constructor(mode: string, name: string) {
    this.mode = mode;
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getMode(): string {
    return this.mode;
  }

  public setMode(mode: string): void {
    this.mode = mode;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCurrentPlayerId(): string {
    return this.currentPlayerId;
  }

  public setCurrentPlayerId(currentPlayerId: string): void {
    this.currentPlayerId = currentPlayerId;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }
}
