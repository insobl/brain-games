import readlineSync from 'readline-sync';
export function userName(){
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I Have your name? ');
return name;
}
