class GamePlayer {
    private id?: number;
    private name: string;
    private email: string;
    private playerId: number;
    private gameId: number;
    private remainingShots: number;
    private score: number;
    private rank: number;
    private order: number;
    private inGame: boolean;
    private createdAt: Date;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getPlayerId(): number {
        return this.playerId;
    }

    public setPlayerId(playerId: number): void {
        this.playerId = playerId;
    }

    public getGameId(): number {
        return this.gameId;
    }

    public setGameId(gameId: number): void {
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

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    
    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }
}