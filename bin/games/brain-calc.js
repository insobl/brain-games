#!/usr/bin/env node
import {userName} from '../../src/cli.js';
import readlineSync from 'readline-sync';
import {checkAnswer, randomizer, congratulation} from '../../src/index.js';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
for (var i=1; i <= 3; i++ ){
var number1 = randomizer(30)+1,
    number2 = randomizer(30)+1,
    operation = randomizer(3)+1,
    sum = 0;
    switch(operation){
    case 1:
        console.log(`Question: ${number1} + ${number2}`)
        sum = number1 + number2;
        break;
    case 2:
        console.log(`Question: ${number1} - ${number2}`)
        sum = number1 - number2;
        break; 
    case 3:
        console.log(`Question: ${number1} * ${number2}`)
        sum = number1 * number2;
        break;
    }
var answer = readlineSync.question('Your answer: '),
    result = checkAnswer(sum, answer, name);
if (result === 'stop, wrong answer') {
    break;
}
congratulation(name,i);
}