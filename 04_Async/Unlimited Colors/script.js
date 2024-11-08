function generateColor(){
    const letter = '0123456789ABCDEF';
    let hexcode = '#';
    let i = 0
    while(i<=5){
        let randomDigit = Math.round(Math.random()*15);
        hexcode+=letter[randomDigit]
        i++;
    }
    return hexcode
}

let startElement = document.querySelector('#start')
let stopElement = document.querySelector('#stop')
let body = document.querySelector('body');
let h2 = document.querySelector('h2');
let intervalID;



startElement.addEventListener('click',function(e){
    
    intervalID = setInterval(function(){
            let colorCode = generateColor();
            body.style.backgroundColor = colorCode;
            h2.innerHTML = colorCode;
    
        },2000)


});

stopElement.addEventListener('click',function(e){
    clearInterval(intervalID);
    intervalID = null
    console.log("Color Changing Stopped");
    
})



