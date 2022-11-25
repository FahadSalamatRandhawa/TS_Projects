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
const Person_1 = require("./Person");
const Student_1 = require("./Student");
const prompt_1 = __importDefault(require("prompt"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const input = Number((yield prompt_1.default.get([{ name: "input", description: "What is your personality, 1 to talk to others, 2 to talk to yourself\n", type: "number", conform: (value) => { if (isNaN(value)) {
                    return false;
                } return true; } }])).input);
        console.log(input, typeof (input));
        let newPerson = new Person_1.Person;
        let newStudent = new Student_1.Student;
        //console.log(newPerson.getPeronality());
        newPerson.setPersonality(input);
        console.log(newPerson.getPeronality());
        let name = String((yield prompt_1.default.get([{ name: "Name", description: "Your name?" }])).Name);
        newStudent.setName = name;
        console.log(`Your name is : ${newStudent.getName}, your personality is ${newStudent.getPeronality()}`);
    });
}
main();
