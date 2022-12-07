#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { checkAnswer, randomizer, congratulation } from '../src/index.js';

const name = userName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 1; i <= 3; i += 1) {
  const number = randomizer(21);
  let correctAnswer = '';
  console.log(`Question: ${number}`);
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else if (number % 2 !== 0) {
    correctAnswer = 'no';
  }
  const answer = readlineSync.question('Your answer: ');
  const result = checkAnswer(correctAnswer, answer, name);
  if (result === 'stop, wrong answer') {
    break;
  }
  congratulation(name, i);
}
