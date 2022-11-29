#!/usr/bin/env node
import {userName} from '../src/cli.js';
import readlineSync from 'readline-sync';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
for (var i=1; i <= 3; i++ ){
var number1 = Math.floor(Math.random()*30+1),
    number2 = Math.floor(Math.random()*30+1),
    operation = Math.floor(Math.random()*3),
    sum = 0;
    switch(operation){
    case 0:
        console.log(`Question: ${number1} + ${number2}`)
        sum = number1 + number2;
        break;
    case 1:
        console.log(`Question: ${number1} - ${number2}`)
        sum = number1 - number2;
        break; 
    case 2:
        console.log(`Question: ${number1} * ${number2}`)
        sum = number1 * number2;
        break;
    }
const answer = readlineSync.question('Your answer: ');
if (sum === Number(answer)){
    console.log('Correct!');
} else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sum}'.\nLet's try again, ${name}!`)
    break;
}
if (i === 3){
    console.log(`Congratulations, ${name}!`);
}
}