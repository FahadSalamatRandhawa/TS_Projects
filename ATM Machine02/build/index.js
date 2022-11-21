#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = __importDefault(require("../node_modules/prompt"));
const colors_1 = __importDefault(require("../node_modules/colors"));
var schema = {
    properties: {
        _userid: {
            pattern: /^[a-zA-Z\s\-]+$/,
            description: 'User ID',
            message: 'Name must be only letters, spaces, or dashes',
            required: true
        },
        _pin: {
            description: 'Pin (hidden)',
            hidden: true
        }
    }
};
prompt_1.default.message = colors_1.default.yellow("Question!");
prompt_1.default.start();
//let ATMFunctionality:[string,string];
async function getUserinfo() {
    let balance = (Math.random() * 250) + 1;
    let lastTransactionDays = Math.floor((Math.random() * 250) + 1);
    let randomAddress = [];
    for (let i = 0; i < 20; i++) {
        let randomString = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        randomAddress[i] = randomString;
        if (i % 5 === 0 && i > 1) {
            randomAddress[i] = " ";
        }
    }
    const newresult = await prompt_1.default.get(schema, function (err, result) {
        console.log('Details entered successfully\nATM Functionality Unlocked');
        console.log("Balance : " + balance);
        console.log("Days since last transaction : " + lastTransactionDays);
        console.log("Address : " + randomAddress);
        return result;
    });
    return newresult;
}
getUserinfo();
