#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { checkAnswer, randomizer, congratulation } from '../src/index.js';

const name = userName();
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
for (let i = 1; i <= 3; i += 1) {
  const number1 = randomizer(30) + 1;
  const number2 = randomizer(30) + 1;
  const operation = randomizer(3) + 1;
  let resultCalc = 0;
  switch (operation) {
    case 1:
      console.log(`Question: ${number1} + ${number2}`);
      resultCalc = number1 + number2;
      break;
    case 2:
      console.log(`Question: ${number1} - ${number2}`);
      resultCalc = number1 - number2;
      break;
    case 3:
      console.log(`Question: ${number1} * ${number2}`);
      resultCalc = number1 * number2;
      break;
    default:
  }
  const answer = readlineSync.question('Your answer: ');
  const result = checkAnswer(resultCalc, answer, name);
  if (result === 'stop, wrong answer') {
    break;
  }
  congratulation(name, i);
}
