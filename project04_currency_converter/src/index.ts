#! /usr/bin/env node

import prompt from 'prompt';
import colors from 'colors'

interface currencies{
    [x:number]:{name:String,
    value:number,
    usdValue:number}
}
const currencyChart:currencies={
'1':{name:'Euro',	value:0.969675,	usdValue:1.031274},
'2':{name:'British Pound',	value:0.841106,	usdValue:1.188910},
'3':{name:'Indian Rupee',	value:81.549155,	usdValue:0.012263},
'4':{name:'Australian Dollar',	value:1.496299,	usdValue:0.668316},
'5':{name:'Canadian Dollar',	value:1.338464,	usdValue:0.747125},
'6':{name:'Singapore Dollar',	value:1.376042,	usdValue:0.726722},
'7':{name:'Swiss Franc',	value:0.954782,	usdValue:1.047359},
'8':{name:'Malaysian Ringgit',	value:4.552072,	usdValue:0.219680},
'9':{name:'Japanese Yen',	value:140.356052,	usdValue:0.007125},
'10':{name:'Chinese Yuan Renminbi',	value:7.115541,	usdValue:0.140537}
}

const scheema:{}=[
{
    name:"Your_Currency",
        pattern:/^\d/,
        message:"must be number",
        type:'number',
        description:'Your Currency<id>',
        required:true,
        conform: function (value:number) {
            if(isNaN(value)){
                return false;
            }
            return true;
          }
    },
{
    name:"Amount",
        pattern:/^\d/,
        message:"must be number",
        type:'number',
        description:'Amount',
        required:true,
        conform: function (value:number) {
            if(isNaN(value)){
                return false;
            }
            return true;
          }
    },
{
    name:"Convert_To",
        pattern:/^\d+$/,
        message:"must be number",
        type:'number',
        description:'Convert To<id>',
        required:true,
        conform: function (value:number) {
            if(isNaN(value)){
                return false;
            }
            return true;
          }
    }
];

async function currencyCovert() {
    prompt.message=colors.yellow('Question!');
    prompt.delimiter=colors.white('<-->');
    console.log(currencyChart);
    prompt.get(scheema,function(err,res){
        let myCurrencyID=Number(res.Your_Currency);
        let amount:number=Number(res.Amount);
        let convertedAmount:number;
        console.log(`Your Currency : ${currencyChart[myCurrencyID].name}
        \n1USD Value :${currencyChart[myCurrencyID].value}
        \nAmount :${amount}`);
    });
}
currencyCovert()

