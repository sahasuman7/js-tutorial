//  Primitive Data Types

let x = Symbol("Suman")
console.log(x);

 let y= Symbol("Saha")
console.log(y);

let z = Symbol.keyFor(Symbol.for("Debolina"));
console.log(typeof(z));

// Reference or Non-Primitive Data Types

let arr = ["Debolina", "Suman", "Diya"]
console.log(arr);


// Objects
let data = {
    name : "Suman Saha",
    age: 23,
    isMarriage: true
}

console.log(typeof(data));


// Function 

function wish(s,n) {
    console.log("Hey,",s,"age is",n);
}

console.log(typeof(arr));


