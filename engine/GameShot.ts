class GameShot {
  private _id :number;
  private _gameId: number | string;
  private _playerId: number | string;
  private _multiplicator: number; 
  private _sector: number;
  private _createdAt: Date;

  constructor(gameId: number, playerId: number, ) {

  }

  get id() {
    return this._id
  }
  
  set id(val: number) {
    this._id = val
  }
  
  get gameId() {
    return this._gameId
  }
  
  set gameId(val: number | string) {
    this._gameId = val
  }
  
  get playerId() {
    return this._playerId
  }
  
  set playerId(val: number | string) {
    this._playerId = val
  }
  
  get multiplicator() {
    return this._multiplicator
  }
  
  set multiplicator(val: number) {
    this._multiplicator = val
  }
  
  get sector() {
    return this._sector
  }
  
  set sector(val: number) {
    this._sector = val
  }
  
  get createdAt() {
    return this._createdAt
  }
  
  set createdAt(val: Date) {
    this._createdAt = val
  }


}