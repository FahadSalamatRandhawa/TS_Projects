#! /usr/bin/env node

import prompt from '../node_modules/prompt';
import colors from '../node_modules/colors';
var schema = {
    properties: {
      _userid: {
        pattern: /^[a-zA-Z\s\-]+$/,
        description:'User ID',
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      _pin: {
        description:'Pin (hidden)',
        hidden: true
      }
    }
  };

prompt.message=colors.yellow("Question!");
prompt.start();

//let ATMFunctionality:[string,string];
async function getUserinfo (){
    let balance:number=(Math.random()*250)+1;
    let lastTransactionDays:number=Math.floor((Math.random()*250)+1);
    let randomAddress:string[]=[];
    for(let i=0;i<20;i++){
        let randomString:string=String.fromCharCode(Math.floor((Math.random()*25)+65));
        randomAddress[i]=randomString;
        if(i%5===0 && i>1){
            randomAddress[i]=" ";
        }
    }
    const newresult= await prompt.get(schema, function (err, result):(err,result)=>{} {
        console.log('Details entered successfully\nATM Functionality Unlocked');
        console.log("Balance : "+balance);
        console.log("Days since last transaction : "+lastTransactionDays);
        console.log("Address : "+randomAddress);
        
        return result;
      });
      return newresult;
}

getUserinfo()
