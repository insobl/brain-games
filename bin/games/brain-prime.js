#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js';
import {checkAnswer, randomizer, congratulation, isItPrime} from '../../src/index.js';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for(var i = 1; i<=3; i++){
var number = randomizer(100)+1,
    correctAnswer= isItPrime(number),
    userAnswer = readlineSync.question('Your answer: '),
    result = checkAnswer(correctAnswer, userAnswer, name);
    if (result === 'stop, wrong answer') {
    break;
}
congratulation(name,i);
}