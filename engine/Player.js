"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.gameWin = 0;
        this.gameLost = 0;
        this.createdAt = new Date();
    }
    Player.prototype.getId = function () {
        return this.id;
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.getEmail = function () {
        return this.email;
    };
    Player.prototype.setEmail = function (email) {
        this.email = email;
    };
    Player.prototype.getGameWin = function () {
        return this.gameWin;
    };
    Player.prototype.setGameWin = function (gameWin) {
        this.gameWin = gameWin;
    };
    Player.prototype.getGameLost = function () {
        return this.gameLost;
    };
    Player.prototype.setGameLost = function (gameLost) {
        this.gameLost = gameLost;
    };
    Player.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    return Player;
}());
exports.Player = Player;
