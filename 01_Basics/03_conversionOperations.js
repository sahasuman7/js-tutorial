let  score = "33"

console.log(typeof score);
console.log(typeof(score));


// Typecasting
let scoreInNumber = Number(score)

console.log(typeof scoreInNumber);

console.log();
// Some Case 

let id = "22100127AD"

let idToNumber = Number(id)

// It shows the type is number but this is a aplhanumeric string
console.log(typeof idToNumber);

// printing 
console.log(idToNumber); // NaN = Not a Number
// Not a Number is also a 
let a = NaN


// if we try to convert null into number
let b = null

let B = Number(b)
console.log(B); // It return 0


// if we try to convert undefined into number
let c = undefined
let C = Number(c)
console.log(C) // Return NaN

// For Boolean value

let boolt = true
let boolf = false

console.log(typeof(boolt),"and", typeof(boolf));

boolf = Number(boolf)
boolt = Number(boolt)

console.log(typeof(boolt),"and", typeof(boolf));

let isLoggedin = undefined
let boolLoggedin = Boolean(isLoggedin)

// console.log(boolLoggedin);
console.log();
let someNum = true
let someString = String(someNum)
someString = someString+"aum"
console.log(someString,typeof(someString))