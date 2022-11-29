#!/usr/bin/env node
import {userName} from '../src/cli.js';
import readlineSync from 'readline-sync';
import {NOD} from '../src/index.js';
import {checkAnswer} from '../src/index.js';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
for (var i=1; i <= 3; i++ ){
    var number1 = Math.floor(Math.random()*100+1),
        number2 = Math.floor(Math.random()*100+1),
        NoD = NOD(number1, number2);
    console.log(`Question: ${number1} ${number2}`)
    const answer = readlineSync.question('Your answer: ');
    const result = checkAnswer(NoD, answer, name)
    if (result === 'stop, wrong answer') {
    break;
}
    if (i === 3){
        console.log(`Congratulations, ${name}!`);
    }
    }