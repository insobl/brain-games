#!/usr/bin/env node
import {userName} from '../src/cli.js';
import readlineSync from 'readline-sync';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for(var i = 1; i <= 3; i ++){
const number = Math.floor(Math.random()*21);
    console.log(`Question: ${number}`)
const answer = readlineSync.question('Your answer: ');
if (number % 2 === 0 && answer === 'yes' || number % 2 !== 0 && answer === 'no'){
    console.log('Correct!');
} else {
    if (answer === 'yes'){
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`)
    } else console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`)
    break
}
if (i === 3){
    console.log(`Congratulations, ${name}!`);
}
}
