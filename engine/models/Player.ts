export class Player {
    private id: string;
    private name: string;
    private gameWin: number;
    private gameLost: number;
    private createdAt: Date;

    constructor(id: string, name: string, gameWin: number, gameLost: number, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.gameWin = gameWin;
        this.gameLost = gameLost;
        this.createdAt = createdAt;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getGameWin(): number {
        return this.gameWin;
    }

    public setGameWin(gameWin: number): void {
        this.gameWin = gameWin;
    }

    public getGameLost(): number {
        return this.gameLost;
    }

    public setGameLost(gameLost: number): void {
        this.gameLost = gameLost;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt;
    }
}