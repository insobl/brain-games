#!/usr/bin/env node
import {userName} from '../src/cli.js';
import {checkAnswer, randomizer, congratulation} from '../src/index.js';
import readlineSync from 'readline-sync';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for(var i = 1; i <= 3; i ++){
var number = randomizer(21),
    correctAnswer = '';
    console.log(`Question: ${number}`)
if (number % 2 === 0 ){
    correctAnswer = 'yes';
}  else if (number % 2 !== 0){
    correctAnswer = 'no';
} 
var answer = readlineSync.question('Your answer: '),
    result = checkAnswer(correctAnswer, answer, name);
    if (result === 'stop, wrong answer') {
    break;
    }
congratulation(name,i);
}