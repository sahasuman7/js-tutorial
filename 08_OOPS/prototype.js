let arr = ['Suman','Babai','Rudraditya']


let arrObj = {
    Suman:"Goodname",
    Babai:"Nickname",
    Rudraditya:"Wishname",

    testFunc: ()=>{
        console.log('This is testFunc Method');
    }
}

Object.prototype.newTest = function(){
    console.log("New Test Method");
}


// Due to we apply the method to the object and untimately onject, array and function those three are objects 
//thatswhy we apply the method to onject so it will be accessable for array and function also
arrObj.newTest()
arr.newTest()

//But if we apply some exter function in the array then it will not accessable from object 

Array.prototype.arrayTest = ()=>{
    console.log("This is Array Test Function");
    
}
arr.arrayTest();
// arrObj.arrayTest(); // This is Will give an error


