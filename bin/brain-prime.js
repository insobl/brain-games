#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import {
  checkAnswer, randomizer, congratulation, isItPrime,
} from '../src/index.js';

const name = userName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (let i = 1; i <= 3; i += 1) {
  const number = randomizer(100) + 1;
  const correctAnswer = isItPrime(number);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = checkAnswer(correctAnswer, userAnswer, name);
  if (result === 'stop, wrong answer') {
    break;
  }
  congratulation(name, i);
}
