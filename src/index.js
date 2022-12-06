export function NOD(x,y){
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
    }
export function checkAnswer(correctAnswer, userAnswer, name){
    if (Number(userAnswer) === Number(userAnswer)){
    if (Number(correctAnswer) === Number(userAnswer)){
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        return 'stop, wrong answer';

    }
    } else{
        if (correctAnswer === userAnswer){
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            return 'stop, wrong answer';
        }    
    }

}
export function randomizer(number){
    return Math.floor(Math.random()*number)
}
export function congratulation(name, i){
    if (i === 3){
        console.log(`Congratulations, ${name}!`);
    }
} 
export function progression (length, firstElement, missingPlace, d){
    var progres = [], answer;
    if (missingPlace === 0){
      progres.push('..');
      progres.push(firstElement);
      answer = firstElement - d;
      for (var i =2; i < length; i++){ 
            progres.push(progres[i-1] + d) 
        }
    } else {
        progres.push(firstElement);
        for (var i =1; i < length; i++){ 
            if (i === missingPlace){
                answer = progres[i-1]+d
                progres.push('..') 
            } else {
            if (progres[i-1] !== '..'){
                progres.push(progres[i-1]+d)
            } else {
                progres.push(progres[i-2]+2*d) 
            }
        }
        }   
    }
    console.log(`Question: ${progres.join(' ')}`)
    return answer
}
export function isItPrime(number){
console.log(`Question ${number}`)
    for(var i= 2; i<number; i++){
    if (number % i === 0){
        return 'no'
    }
}
return 'yes'
}