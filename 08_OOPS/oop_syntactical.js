class mobile{

    // Private Property
    #imei = '#12388346372881';
    fax = true;
    constructor(number,os,brand){
        this.number = number;
        this.os = os;
        this.brand = brand;
    }

    static doCall(){
        console.log('This is phone can call');
        return 123;
    }

    getDoCall(){
        let c   = this.doCall()
        console.log(c);
        
    }

    myNumber(){
        console.log(`Phone Number ${this.number}`);

    }
}

class iPhone extends mobile{
    constructor(number,os,brand){
        super(number,os,brand);
        
        
    }

    doFileTransfer(){
        console.log(`If possible, then transfer.`);
    }

}

mobile.prototype.photo = ()=>{console.log(`Take a Photo`);}

let motorola = new mobile(8910100961,'Stock Android','Moto');

let x = mobile.doCall()
console.log(x);

motorola.photo()

let iPhone16 = new iPhone(8910100962,'iphoneOS','Apple');

console.log(iPhone16);
console.log(motorola.fax);
console.log(motorola.imei); 






