#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bank_1 = require("./Bank");
const prompt_1 = __importDefault(require("prompt"));
function Banking() {
    return __awaiter(this, void 0, void 0, function* () {
        let myAccount = new Bank_1.Bank;
        let input;
        console.log(`Starting Balance,${myAccount.getBalance}\n`);
        console.log('Make a Debit Transaction');
        input = Number((yield prompt_1.default.get([{ name: "Input", description: "Enter Amount : ", type: "number", conform: (value) => { if (isNaN(value)) {
                    return false;
                } return true; } }])).Input);
        console.log(myAccount.Debit(input));
        console.log('\nMake a Credit Transaction');
        input = Number((yield prompt_1.default.get([{ name: "Input", description: "Enter Amount : ", type: "number", conform: (value) => { if (isNaN(value)) {
                    return false;
                } return true; } }])).Input);
        console.log(myAccount.Credit(input));
        console.log(`Your final balance : ${myAccount.getBalance}`);
    });
}
Banking();
