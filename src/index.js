export function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}
export function checkAnswer(correctAnswer, userAnswer, name) {
  if (Number(userAnswer) === Number(correctAnswer)) {
    if (correctAnswer === Number(userAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return 'stop, wrong answer';
    }
  } else if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return 'stop, wrong answer';
  }
  return '';
}
export function randomizer(number) {
  return Math.floor(Math.random() * number);
}
export function congratulation(name, i) {
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
export function progression(length, firstElement, missingPlace, d) {
  const progres = []; let
    answer;
  if (missingPlace === 0) {
    progres.push('..');
    progres.push(firstElement);
    answer = firstElement - d;
    for (let i = 2; i < length; i += 1) {
      progres.push(progres[i - 1] + d);
    }
  } else {
    progres.push(firstElement);
    for (let i = 1; i < length; i += 1) {
      if (i === missingPlace) {
        answer = progres[i - 1] + d;
        progres.push('..');
      } else if (progres[i - 1] !== '..') {
        progres.push(progres[i - 1] + d);
      } else {
        progres.push(progres[i - 2] + 2 * d);
      }
    }
  }
  console.log(`Question: ${progres.join(' ')}`);
  return answer;
}
export function isItPrime(number) {
  console.log(`Question: ${number}`);
  if (number === 1 || number === 0) {
    return 'no';
  } if (number === 2) {
    return 'yes';
  }
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      return 'no';
    }
  }
  return 'yes';
}
