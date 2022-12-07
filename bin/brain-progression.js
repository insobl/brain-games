#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import {
  checkAnswer, randomizer, congratulation, progression,
} from '../src/index.js';

const name = userName();
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
for (let i = 1; i <= 3; i += 1) {
  const length = 10;
  const firstElement = randomizer(20);
  const missingPlace = randomizer(9) + 1;
  const d = randomizer(10) + 1;
  const correctAnswer = progression(length, firstElement, missingPlace, d);
  const userAnswer = readlineSync.question('Your answer: ');
  const result = checkAnswer(correctAnswer, userAnswer, name);
  if (result === 'stop, wrong answer') {
    break;
  }
  congratulation(name, i);
}
