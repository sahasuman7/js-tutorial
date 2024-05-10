
// Primitive Datatype Pass bt Value
let score = 100

let marks = score

marks = 95
console.log(`Score is ${score} and Marks is ${marks}`);
console.log();

//Non - Primitive Datatype Pass By Reference

let userOne = {
    email : "userOne@gmail.com",
    ph_num : 9084323245
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne);
console.log(userTwo);