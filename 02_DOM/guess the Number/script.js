const formElement = document.querySelector('.form');
let inputElement = document.querySelector('#guessField');
const output  = document.querySelector('.lowOrHi');
let guessArray = document.querySelector('.guesses');
let remainChaince = document.querySelector('.lastResult');

function generateRandom(){
    return Math.floor(Math.random()*10)+1;
}

let prevGuess = [];
let randomNum;
let guessCount = prevGuess.length;


formElement.addEventListener('submit', function(e){
    e.preventDefault();
    if(prevGuess.length == 0){
        randomNum = generateRandom();
        console.log(randomNum);
        
    }
    let value = inputElement.value;

    if(value == randomNum){
        output.innerHTML = 'Success Win The Game';
        prevGuess = [];
        guessCount  = prevGuess.length;
        guessArray.innerHTML = `${prevGuess}`;
        remainChaince.innerHTML = `${(10-guessCount)}`;

    }else{
        if(guessCount == 10){
            prevGuess = [];
            guessCount  = prevGuess.length;
            guessArray.innerHTML = `${prevGuess}`;
            remainChaince.innerHTML = `${(10-guessCount)}`;

        }else{
            prevGuess.push(value);
            guessCount = prevGuess.length;
            guessArray.innerHTML = `${prevGuess}`;
            remainChaince.innerHTML = `${(10-guessCount)}`;
            if(guessCount == 10){
                output.innerHTML = 'Try Again:)'
                prevGuess = [];
                guessCount  = prevGuess.length;
                guessArray.innerHTML = `${prevGuess}`;
                remainChaince.innerHTML = `${(10-guessCount)}`;



            }

            



        }
        

    }
    
    



});

