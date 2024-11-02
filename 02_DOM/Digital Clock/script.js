console.log("Conected...")

let clock = document.getElementById('clock');




setInterval(function(){ 
    let date = new Date();
    // console.log(date.getHours());
    if (date.getHours<12){
        clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} AM`;

    } else{
        clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM`;

    }
    
}, 1000);