// let promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Billionaire Suman Saha');
//         resolve()
        
        
//     },2000)
// })

// promiseOne.then(function(){
//     console.log("Promise Resolved");
    
// }).catch(function(){
//     console.log("Promise Rejected");
    
// })


// const promiseTwo = new Promise((resolve,reject)=>{
//     let flag=true
//     if(flag){
//         resolve({'username':'DeboliaaPatiSuman', 'email':'sahasuman@gmail.com'});
//     } else{
//         reject('ERROR!!!, Data not Fetched!');
//     }
// })

// promiseTwo
// .then((user)=>{
//     console.log(user);
//     return user.email
// })
// .then((email)=>{
//     console.log(email);
// })
// .catch((result)=>{
//     console.log(result);
// })
// .finally(()=>{
//     console.log("This Promise is Finally Resolved");
    
// })


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let flag= false
        if(flag){
            resolve({'username':'Suman Saha','password':'1234'});
        } else{
        reject('ERROR!!!')
        }
    },2000)
});


async  function resolvePromiseThree(){
    try{
        let response = await promiseThree;
        console.log(response);
        console.log(new Date().getSeconds());
    }
    catch(error){
        console.log(error);
    }


}
// Checking the Waiting Time
console.log(new Date().getSeconds());
resolvePromiseThree()

