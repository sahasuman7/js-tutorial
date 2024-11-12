class axixBank {
    #balance;

    constructor(initialBAlance) {
        this.#balance = initialBAlance;
    }

    balenceCheck(){
        return this.#balance;
    }

    deposit(amount){
        if(!isNaN(amount) & amount>0 & (typeof amount)==='number'){
            this.#balance+= amount;
        } else{
            console.log("Give a Proper Amount");
            
        }
    }

    withdral(amount){
        if(amount<this.#balance){
            this.#balance-= amount;
            console.log("Collect Cash", amount);
            
        } else{
            console.log("Insufficient Balance");
            
        }
    }
}

//Object Creation
let SumanSahaAccount = new axixBank(10000000);
console.log(SumanSahaAccount.balenceCheck())

SumanSahaAccount.deposit(50000000);
console.log(SumanSahaAccount.balenceCheck())

SumanSahaAccount.deposit(100000000)

console.log(SumanSahaAccount.balenceCheck())

SumanSahaAccount.withdral(10000000)

console.log(SumanSahaAccount.balenceCheck());

// console.log(SumanSahaAccount.#balance);



