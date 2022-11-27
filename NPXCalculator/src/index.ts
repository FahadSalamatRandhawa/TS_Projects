#! /usr/bin/env node
import inquirer from 'inquirer';

let calculate=[
    {
        name:'firstNumber',
        type:'input',
        message:'Enter a number',
        default:0,
        validate:(value:number)=>{if(isNaN(value)){return "Enter a valid number";}return true}
    },
    {
        type:'list',
        name:'operator',
        message:'Enter a operator',
        choices:['/','*','+','-','%'],
        default:'+'
    },
    {
        name:'secondNumber',
        type:'input',
        message:'Enter a number',
        default:0,
        validate:(value:number)=>{if(isNaN(value)){return "Enter a valid number";}return true}
    }
]


inquirer
.prompt(calculate)
.then((answer)=>{
        switch(answer.operator){
            case '*':
                console.log(answer.firstNumber*answer.secondNumber);
                break;
            case '+':
                console.log(answer.firstNumber+answer.secondNumber);
                break;
            case '-':
                console.log(answer.firstNumber-answer.secondNumber);
                break;
            case '/':
                console.log(answer.firstNumber/answer.secondNumber);
                break;
            case '%':
                console.log(answer.firstNumber%answer.secondNumber);
                break;
        }
})
.catch(error=>{
    console.log(error);
})

