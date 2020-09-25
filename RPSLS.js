"use strict"

class Game{
    constructor(){
        this.playerOne = new this.playerOne("");
        this.playerTwo = new Player("");

        this.chance = [];

        
        this.chance.push(new Chance("rock"));
        this.chance.push(new Chance("paper"));
        this.chance.push(new Chance("scissors"));
        this.chance.push(new Chance("lizard"));
        this.chance.push(new Chance("spock"));
    }
}

class Player{
    constructor(name){
        this.score = 0;
        this.name = name;
    }
}

class Chance{
    constructor(chanceRules){
        this.chanceRules = chanceRules
    }
}

generateRandomNumber{
    let generateRandomNumber = Math.floor(Math.random()*this.chanceRules) + 1;
    return generateRandomNumber;
}