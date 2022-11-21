#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline = __importStar(require("readline"));
let playerName = "not assigned yet";
let remainingGuesses = 3;
let previousGuesses = [0];
let currentGuesses = 0;
let computerNumber;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let makeAGuess = (remainingGuesses) => {
    computerNumber = Math.floor(Math.random() * 30);
    rl.question("What is your guess number?  ", (user_Number) => {
        verifyGuess(parseInt(user_Number), computerNumber);
        console.log("Correct number : " + computerNumber);
        console.log("Your guess :     " + user_Number);
        previousGuesses[currentGuesses] = (parseInt(user_Number));
        currentGuesses++;
        console.log(`Previous Guess `);
        console.log(previousGuesses);
        remainingGuesses--;
        console.log("Remaining Guesses : " + remainingGuesses);
        checkGuesses(remainingGuesses);
    });
};
let checkGuesses = (remainingGuesses) => {
    if (remainingGuesses > 0) {
        makeAGuess(remainingGuesses);
    }
    else {
        console.log("You have run out of guess limit.\n");
        askForMoreGuesses(remainingGuesses);
    }
};
let askForMoreGuesses = (remainingGuesses) => {
    rl.question("Do you want to add more guesses?  y/n : ", (user_response) => {
        if (user_response.toLocaleLowerCase() === 'y') {
            addMoreGuesses(remainingGuesses);
        }
        else {
            console.log("Game Ending\n");
            rl.close();
        }
    });
};
let verifyGuess = (user_Number, computerNumber) => {
    if (user_Number === computerNumber) {
        console.log("You guessed correct\n");
        console.log("Game ending, see ya");
        console.log("Your score was " + currentGuesses);
        rl.close();
        (0, process_1.exit)(0);
    }
};
let addMoreGuesses = (remainingGuesses) => {
    rl.question("Enter number of guesses : ", (user_guesses) => {
        remainingGuesses += parseInt(user_guesses);
        console.log("Remaingin guess tries updated to : " + remainingGuesses);
        makeAGuess(remainingGuesses);
    });
};
function main(playerName, currentGuesses) {
    rl.question("What is your name?  ", function (answer) {
        rl.prompt();
        playerName = answer;
        makeAGuess(remainingGuesses);
    });
}
main(playerName, currentGuesses);
