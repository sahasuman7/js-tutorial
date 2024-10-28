function calculateBmi() {
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    let resultElement = document.querySelector('#results');
  
    height = height / 100;
  
    let ans = weight / (height * height);
  
    resultElement.innerHTML = ans;
  }
  