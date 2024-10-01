const form = document.querySelector('form');
//this use case will give you emplty values
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  const weight_guide = document.querySelectorAll('.weightG');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      weight_guide[0].style.backgroundColor = 'red';
    }
    else if(18.6 < bmi <= 24.9){
      weight_guide[1].style.backgroundColor = 'green';
    }
    else if( bmi > 24.9){
      weight_guide[2].style.backgroundColor = 'red'
    }
  }

  console.log(weight_guide);
});
