// const formElement = document.querySelector('.form');
// let inputElement = document.querySelector('#guessField');
// const output  = document.querySelector('.lowOrHi');
// let guessArray = document.querySelector('.guesses');
// let remainChaince = document.querySelector('.lastResult');

// function generateRandom(){
//     return Math.floor(Math.random()*10)+1;
// }

// let prevGuess = [];
// let randomNum;
// let guessCount = prevGuess.length;


// formElement.addEventListener('submit', function(e){
//     e.preventDefault();
//     if(prevGuess.length == 0){
//         randomNum = generateRandom();
//         console.log(randomNum);
        
//     }
//     let value = inputElement.value;

//     if(value == randomNum){
//         output.innerHTML = 'Success Win The Game';
//         prevGuess = [];
//         guessCount  = prevGuess.length;
//         guessArray.innerHTML = `${prevGuess}`;
//         remainChaince.innerHTML = `${(10-guessCount)}`;

//     }else{
//         if(guessCount == 10){
//             prevGuess = [];
//             guessCount  = prevGuess.length;
//             guessArray.innerHTML = `${prevGuess}`;
//             remainChaince.innerHTML = `${(10-guessCount)}`;

//         }else{
//             prevGuess.push(value);
//             guessCount = prevGuess.length;
//             guessArray.innerHTML = `${prevGuess}`;
//             remainChaince.innerHTML = `${(10-guessCount)}`;
//             if(guessCount == 10){
//                 output.innerHTML = 'Try Again:)'
//                 prevGuess = [];
//                 guessCount  = prevGuess.length;
//                 guessArray.innerHTML = `${prevGuess}`;
//                 remainChaince.innerHTML = `${(10-guessCount)}`;
//             }
//         }
//     }
// });

// Another Solution

let randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const showResult = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');
console.log(p);

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        

    })

}

function validateGuess(guess){
    if(guess === '' || isNaN(guess) || guess<1 || guess>10){
        alert("Please Enter a Valid Number")
    } else{
        prevGuess.push(guess);
        if(numGuess === 9){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number Was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Success!!!`);
        endGame();
    }else if(guess< randomNumber){
        displayMessage(`Number is Lower than Random`);
    } else{
        displayMessage(`Number is Higher than Random`);

    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`
    
}

function displayMessage(message){
    showResult.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
    let startGame = document.querySelector('#newGame');
    startGame.addEventListener('click', function(e){
        randomNumber = Math.floor(Math.random()*10)+1;
        console.log(randomNumber);
        
        prevGuess = []
        numGuess =0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10-numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame =true;

        

    });
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML= `<h2 id='newGame'>Start New Game</h2>`
    p.style.backgroundColor = 'green';
    startOver.appendChild(p);
    playGame = false;
    newGame();

}


