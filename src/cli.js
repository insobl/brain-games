import readlineSync from 'readline-sync';
export function userName(){
var name = readlineSync.question('May I Have your name?: ');
return(`Hello, ${name}!`);
}
