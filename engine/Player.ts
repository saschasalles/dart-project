export class Player {
    private id: number;
    private name: string;
    private email: string;
    private gameWin: number;
    private gameLost: number;
    private createdAt: Date;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.gameWin = 0;
        this.gameLost = 0;
        this.createdAt = new Date();
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
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
}






