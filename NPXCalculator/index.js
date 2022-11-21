import inquirer from 'inquirer';

let calculate=[
    {
        type:'number',
        name:'firstNumber',
        message:'Enter a number',
        default:'NaN',
        validate:(number)=>{if(isNaN(number)){return "Enter a valid number";}return true}
    },
    {
        type:'list',
        name:'operator',
        message:'Enter a operator',
        choices:['/','*','+','-','%'],
        default:'+'
    },
    {
        type:'number',
        name:'secondNumber',
        message:'Enter a number',
        default:'NaN',
        validate:(number)=>{if(isNaN(number)){return "Enter a valid number";}return true}
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

