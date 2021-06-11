var number;
var guess;

//Function for getting random Int
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = (Math.floor(Math.random() * (max - min + 1)) + min);
  }

//Getting Random Int <1, 12>  
getRandomIntInclusive(1, 12);

//Logic behind choosing number  
document.addEventListener('click', e => {

  if (e.target.matches('button')) {
    guess = e.target.id;
    console.log(guess);

    if(guess == number) {
      document.getElementById("result").innerHTML = "Congratulations!"
      getRandomIntInclusive(1, 12);
      console.log(number);

    } else if (guess != number) {
      if (guess > number) {
        document.getElementById("result").innerHTML = guess + " is too high"
      } else {
        document.getElementById("result").innerHTML = guess + " is too low"
      }
    } 
  }

});



