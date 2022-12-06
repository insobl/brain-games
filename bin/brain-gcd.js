#!/usr/bin/env node
import {userName} from '../src/cli.js';
import readlineSync from 'readline-sync';
import {NOD,checkAnswer, randomizer, congratulation} from '../src/index.js';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
for (var i=1; i <= 3; i++ ){
    var number1 = randomizer(100)+1,
        number2 = randomizer(100)+1,
        NoD = NOD(number1, number2);
    console.log(`Question: ${number1} ${number2}`)
    var userAnswer = readlineSync.question('Your answer: '),
        result = checkAnswer(NoD, userAnswer, name);
    if (result === 'stop, wrong answer') {
    break;
}
congratulation(name,i);
}