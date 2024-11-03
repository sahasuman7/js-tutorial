# js-tutorial
Learning Javascript 


```javascript
const formElement = document.querySelector('form');

formElement.addEventListener('submit', function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Enter a Valid Height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Enter a Valid Weight`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `<span>${bmi}</span> <br /><span>Under Weight</span>`;
    } else if ((bmi > 18.6) & (bmi < 24.9)) {
      result.innerHTML = `<span>${bmi}</span> <br /><span>Normal Weight</span>`;
    } else {
      result.innerHTML = `<span>${bmi}</span> <br /><span>Over Weight</span>`;
    }
  }
});
```
