

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let flag= true
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
        // console.log(new Date().getSeconds());
    }
    catch(error){
        console.log(error);
    }


}
// Checking the Waiting Time
// console.log(new Date().getSeconds());
resolvePromiseThree()

async function userApiFetch() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
        // console.log(typeof response);
        let data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
    

}

userApiFetch()