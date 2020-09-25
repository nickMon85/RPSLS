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

    runGame(){ //"main" method
    this.displayRules();
}
displayRules(){
    console.log("'Rock' crushes 'Scissors'");
    console.log("'Scissors' cuts 'paper'");
    console.log("'Paper' covers 'Rock'");
    console.log("'Rock' crushes 'Lizard'");
    console.log("'Lizard' poisons 'Spock'");
    console.log("'Spock' smashes 'Scissors'");
    console.log("'Scissors' decapitates 'Lizard'");
    console.log("'Lizard' eats 'Paper'");
    console.log("'Paper' disproves 'Spock'");
    console.log("'Spock' vaporizes 'Rock'");
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