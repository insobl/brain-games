#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import {
  NOD, checkAnswer, randomizer, congratulation,
} from '../src/index.js';

const name = userName();
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
for (let i = 1; i <= 3; i += 1) {
  const number1 = randomizer(100) + 1;
  const number2 = randomizer(100) + 1;
  const NoD = NOD(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = checkAnswer(NoD, userAnswer, name);
  if (result === 'stop, wrong answer') {
    break;
  }
  congratulation(name, i);
}
