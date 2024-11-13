let car = {
    model:"BMW",
    isFourWheel: true,
}

let electricCar = {
    isElectric: true,
    __proto__:car,// Inheritance
}

let pertolCar={
    visitPetrolPump : true,
}
// Another Way of Writing
pertolCar.__proto__ = car;

// Can Inherit the Property
console.log(electricCar.model);
console.log(electricCar.isFourWheel);
console.log(electricCar.isElectric);

console.log(pertolCar.model);
console.log(pertolCar.isFourWheel);



