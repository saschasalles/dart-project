class Game {
    private id: number;
    private mode: 'around-the-world' | '301' | 'cricket';
    private name: string;
    private currentPlayerId: null | string | number;
    private status: 'draft' | 'started' | 'ended';
    private createdAt: Date;

    constructor(parameters) {
        
    }
}