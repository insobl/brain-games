#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {userName} from '../src/cli.js';
import {checkAnswer, randomizer, congratulation, progression} from '../src/index.js';
var name =  userName();
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
for (var i = 1; i<=3; i++){
    var length = 10,
        firstElement = randomizer(20),
        missingPlace = randomizer(10)+1,
        d = randomizer(10)+1,
        correctAnswer = progression(length, firstElement, missingPlace, d);   
        const userAnswer = readlineSync.question('Your answer: ');
        const result = checkAnswer(correctAnswer, userAnswer, name)
        if (result === 'stop, wrong answer') {
        break;
    }
    congratulation(name,i);
    }