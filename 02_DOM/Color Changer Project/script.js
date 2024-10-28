const container = document.querySelector('body');

function makeGrey() {
  container.style.backgroundColor = 'grey';
}
function makeWhite() {
  container.style.backgroundColor = 'white';
}
function makeBlue() {
  container.style.backgroundColor = 'blue';
}
function makeYellow() {
  container.style.backgroundColor = 'yellow';
}


// Alternative Solution With eventListner

// const body = document.querySelector('body');
// const buttons = document.querySelectorAll('.button')


// buttons.forEach(function(button){
//   console.log(button)
//   button.addEventListener("click", function(e){
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey'){
//       body.style.backgroundColor = e.target.id;

//     }
//     if (e.target.id === 'white'){
//       body.style.backgroundColor = e.target.id;

//     }
//     if (e.target.id === 'blue'){
//       body.style.backgroundColor = e.target.id;

//     }
//     if (e.target.id === 'yellow'){
//       body.style.backgroundColor = e.target.id;

//     }

//   });

// })