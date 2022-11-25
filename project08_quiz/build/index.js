#! /usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from 'inquirer';
const quizInput = [{ name: 'question', type: "input" }, { name: 'a', type: "input" }, { name: 'b', type: "input" }, { name: 'c', type: "input" }, { name: 'd', type: "input" }, { name: 'correct', type: "checkbox", choices: ['a', 'b', 'c', 'd'], default: 'c' }];
let questionList = [];
function Quiz() {
    return __awaiter(this, void 0, void 0, function* () {
        let studentMarks = 0;
        let totalQuestions = Number((yield inquirer.prompt({ name: "TotalQuestions", type: "number" })).TotalQuestions);
        for (let i = 0; i < totalQuestions; i++) {
            let tempQuestion = (yield inquirer.prompt(quizInput).then((answer) => { return answer; }));
            /*console.log(tempQuestion);
            questionList[i].question=tempQuestion.question;
            questionList[i].a=tempQuestion.a;
            questionList[i].b=tempQuestion.b;
            questionList[i].c=tempQuestion.c;
            questionList[i].d=tempQuestion.d;
            questionList[i].correct=tempQuestion.correct;*/
            questionList.push(tempQuestion);
            console.clear();
        }
        console.clear();
        for (let i = 0; i < questionList.length; i++) {
            console.log(`Question : ${questionList[i].question}\n`);
            console.log(`${questionList[i].a}\n${questionList[i].b}\n${questionList[i].c}\n${questionList[i].d}\n`);
            let studentResponse = (yield inquirer.prompt({ name: "answers", type: "checkbox", choices: ['a', 'b', 'c', 'd'] })).answers;
            studentResponse.sort();
            questionList[i].correct.sort();
            if (JSON.stringify(studentResponse) === JSON.stringify(questionList[i].correct)) {
                studentMarks++;
            }
            console.clear();
        }
        console.log(`You gained ${studentMarks}/${questionList.length}, ${(studentMarks / questionList.length) * 100}%\n`);
    });
}
Quiz();
