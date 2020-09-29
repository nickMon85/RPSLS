"use strict"

class Game{
    constructor(){
        this.playerOne = new Player();
        this.playerTwo = new Player();
        

    }
    runGame(){ //"main" method
         this.displayRules();
         this.selectPlayer(); 
         while(this.playerOne.score < 3 && this.playerTwo.score < 3){
            this.playerOne.chooseGesture();
            this.playerTwo.chooseGesture();   
            this.mainGame();//rename to compare
        if(this.playerOne.score > 3 ||this.playerTwo.score>3){
            this.displayResults();
        }    
        }    
       //after loop ends,  alert winner
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

    displayResults(){
        let i = this.score
        for(let i = 0; i =3;++i){
            console.log(i++)
            
           if(this.playerOne.score> 3 || this.playerTwo.score >3){
            alert("playerOne game winner!" || "playerTwo game winner");
            console.log("");
           }
        
            else{
            this.score = this.mainGame[-i];
            }
        }
    }
    
    selectPlayer(){//select player option i.e. cpu vs cpu; user vs user; etc.
       let select = prompt("Will this match be \n'user vs user' press '1' \n 'cpu vs user' press '2', or \n 'cpu vs cpu' press '3'");
       switch(select){
              case"1":
              this.playerOne = new HumanPlayer();
              this.playerTwo = new HumanPlayer();
              
              break;
     
              
              case"2":
              this.playerOne = new HumanPlayer();
              this.playerTwo = new CompPlayer();

              break;
              case"3":
              this.playerOne = new CompPlayer();
              this.playerTwo = new CompPlayer();

              break;
              
              default:
                  
              break;


       }


    }
    mainMenu(){
        let main = prompt("Would you like to play a game? If yes pres 'yes', if not click 'cancel'!");
        switch(main){
            case"yes":
            this.runGame();
            break;

        }
    }
    
    

    mainGame(){//Begins game session
        
        
         
        // return (this.playerOne.score||this.playerTwo.score)+=1;
        //consider alert round winner and increment score, then return to end execution,
        //rather than returning a value to the rungame method where this is called.

        
        if(this.playerOne.fist === this.playerTwo.fist){
            console.log(this.score);
            prompt('We have a tie!');
            
        }
        else if(this.playerOne.fist==='rock' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerTwo won!');
            
             // 'playerTwo won!';
        }
        else if(this.playerOne.fist ==='rock' && this.playerTwo.fist ==='scissors'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist === 'rock' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist === 'spock' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('PlayerOne win!');
        }    
        else if(this.playerOne.fist === 'rock' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerOne win!');
           
        }
        else if(this.playerOne.fist === 'lizard' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('PlayerTwo won!');
            
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='scissors'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist === 'spock' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerTwo won!');
           
        }
        else if(this.playerOne.fist === 'paper' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist === 'lizard' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerOne win!');
            
        }
        else if(this.playerOne.fist === 'scissors' && this.playerTwo.fist ==='rock'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist ==='scissors' && this.playerTwo.fist ==='paper'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist ==='scissors' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('PlayerTwo won!');
            
        }
        else if(this.playerOne.fist ==='spock' && this.playerTwo.fist ==='scissors'){
            console.log(this.score);
            prompt('PlayerOne won!');
            
        }
        else if(this.playerOne.fist ==='scissors' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerOne won!');
            
        }
        else if(this.playerOne.fist ==='spock' && this.playerTwo.fist ==='lizard'){
            console.log(this.score);
            prompt('playerTwo won!');
            
        }
        else if(this.playerOne.fist ==='lizard' && this.playerTwo.fist ==='spock'){
            console.log(this.score);
            prompt('playerTwo won!');
           
        }
        
        
    }
    
}

class Player{
    constructor(){
        this.score = 0;
        this.name = null;
        this.gestures = ["rock","paper","scissors","lizard","spock"];
        this.fist = null
    }
    
    choosePlayerName(){
        console.log("error override this method!");
    }
    chooseGesture(){
        console.log("error override this method!"); 
    }
}

class HumanPlayer extends Player{
        constructor(){
            super();
            this.choosePlayerName();
        }
        choosePlayerName(){
            this.name = prompt("Users name?");
        }
        chooseGesture(){
            let userinput = prompt("Which gesture would you like?\n rock press '1',\n paper press '2',\n scissor press '3, \n' lizard press'4',\n spock press '5'!");
            userinput = parseInt(userinput);
            if(userinput > 5 || userinput < 1){
                this.chooseGesture();
            }
            else{
                this.fist = this.gestures[userinput -1];
            }
        }
}
class CompPlayer extends Player{
    constructor(){
        super();
    }
    choosePlayerName(){
        let names = ["Tom", "Sally", "Gerry","Spencer", "Erik"]
        let compChoice = this.generateRandomNumber(this.gestures.length);
        this.fist = names[compChoice];
    }
    chooseGesture(){
        let compChoice = this.generateRandomNumber(this.gestures.length);
        this.fist = this.gestures[compChoice];
    }
    generateRandomNumber(maxnumber){
        let generateComputerChoice = Math.floor(Math.random()*maxnumber);
        return generateComputerChoice;
    }
}
let game = new Game();
game.runGame();

// 

// rollAllDice(diceArray){
//     let runningTotal = 0;

//     for(let i = 0 ;  i< diceArray.length; i++){
//         let result =this.rollDie(diceArray[i]);return (this.playerOne.score||this.playerTwo.score)+=1;
//         runningTotal += result;
//     }
//     return runningTotal;
// }