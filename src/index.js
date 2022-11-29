export function NOD(x,y){
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
    }
export function checkAnswer(correctAnswer, userAnswer, name){
    if (correctAnswer === Number(userAnswer)){
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        return 'stop, wrong answer';
}
}