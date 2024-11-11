// async function userApiFetch() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // console.log(response);
//         // console.log(typeof response);
//         let data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
    

// }

// userApiFetch()

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
    
    
}).then(function(data){
    console.log(data);
    
    
})



.catch((error)=>{
    console.log(error);
    
})