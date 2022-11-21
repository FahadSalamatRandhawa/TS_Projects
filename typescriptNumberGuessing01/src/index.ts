#! /usr/bin/env node
import { exit } from 'process';
import * as readline from 'readline';
let playerName:string="not assigned yet";
let remainingGuesses:number=3;
let previousGuesses:number[]=[0];
let currentGuesses:number=0;
let computerNumber:number;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let makeAGuess=(remainingGuesses:number)=>{
    computerNumber=Math.floor(Math.random()*30);
    rl.question("What is your guess number?  ",(user_Number)=>{
        verifyGuess(parseInt(user_Number),computerNumber);

        console.log("Correct number : "+computerNumber);
        console.log("Your guess :     "+user_Number);
        previousGuesses[currentGuesses]=(parseInt(user_Number));
        currentGuesses++;
        console.log(`Previous Guess `);console.log(previousGuesses);
        remainingGuesses--;
        console.log("Remaining Guesses : "+remainingGuesses);
        checkGuesses(remainingGuesses);
    }
)}

let checkGuesses=(remainingGuesses:number)=>{
    if(remainingGuesses>0){
        makeAGuess(remainingGuesses);
    }else{
        console.log("You have run out of guess limit.\n");
        askForMoreGuesses(remainingGuesses);
    }
}

let askForMoreGuesses=(remainingGuesses:number)=>{
    rl.question("Do you want to add more guesses?  y/n : ",(user_response)=>{
        if(user_response.toLocaleLowerCase()==='y'){
            addMoreGuesses(remainingGuesses);
        }else{
            console.log("Game Ending\n");
            rl.close();
        }
    })
}

let verifyGuess=(user_Number:number,computerNumber:number)=>{
    if(user_Number===computerNumber){
        console.log("You guessed correct\n");
        console.log("Game ending, see ya");
        console.log("Your score was "+currentGuesses);
        rl.close();
        exit(0);
    }
}

let addMoreGuesses=(remainingGuesses:number)=>{
    rl.question("Enter number of guesses : ",(user_guesses)=>{
        remainingGuesses+=parseInt(user_guesses);
        console.log("Remaingin guess tries updated to : "+remainingGuesses);
        makeAGuess(remainingGuesses);
    })  
}

function main(playerName:string,currentGuesses:number){
    rl.question("What is your name?  ", function(answer:string){
        rl.prompt();
        playerName=answer;
        makeAGuess(remainingGuesses);
    });
    
}

main(playerName,currentGuesses);








