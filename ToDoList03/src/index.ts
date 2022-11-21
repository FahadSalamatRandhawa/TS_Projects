#! /usr/bin/env node

import inquirer from "inquirer";

interface tasks{
    Task:String,Status:String
}
let toDoList:tasks[]=[];
let response:string;
const entry:[{}]=[{
    type:'input',
    name:'entry',
    message:'Task : '
}];
const indexQuestion:[{}]=[{
    type:'number',
    name:'entry',
    message:'Enter value<number> : ',
    validate:(number:number)=>{if(number>toDoList.length){return "enter a smaller number"}else if(number<0){return "enter a greater number"};if(isNaN(number)){return "Must enter a number";}return true;}
}];
const menue:[{}]=[
    {
        type:'rawlist',
        name:'choice',
        message:'Please choose',
        choices:["Add","Remove","Update","View","Complete","Exit"],
        default:'+'
    }
];

let askQuestion=(question:[{}])=>{
    const temp=inquirer.prompt(question).then((answers)=>{return answers})
    return temp;
}
async function main(){
    do{
        const mainMenue=await askQuestion(menue);
        response=mainMenue.choice;
        switch(response){
            case"Add":{
                //console.log("Inside switch")
                const added=await askQuestion(entry);
                toDoList.push({Task:added.entry,Status:"InProgress"});
                break;}
            case "Remove":{
                console.log("Before removing\n",toDoList);
                const removeIndex=(await askQuestion(indexQuestion)).entry;
                if(removeIndex>0){toDoList.splice(removeIndex-1,1);}else{console.log(removeIndex," removed")};
                console.log("After removing\n",toDoList);
                break;
            }
            case "Update":{
                console.log("Before updating\n",toDoList);
                const updateIndex=(await askQuestion(indexQuestion)).entry;
                const updatedEntry=(await askQuestion(entry)).entry;
                if(updateIndex>0){toDoList.splice(updateIndex-1,1,{Task:updatedEntry,Status:"InProgress"});}else{console.log(updateIndex," removed")};
                console.log("After updating\n",toDoList);
                break;
            }
            case"View":{
                for(let i of toDoList){
                    console.log(i);
                }
                break;
            }
            case"Complete":{
                //console.log("Enter number");
                const completeIndex=(await askQuestion(indexQuestion)).entry;
                if(completeIndex>0){
                (toDoList[completeIndex-1]).Status="Completed";}
                else{
                    console.log("no task completed");
                }
                break;
            }
        }
    }while(response!=='Exit');
    console.log("Ending program")
}
main();