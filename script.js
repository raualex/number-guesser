var clear = document.querySelector('.clearButton');
var guessButton = document.querySelector('.guessButton');
var messageField = document.querySelector('.outputMessage');
var numField = document.querySelector('.guessNumber');
var randomNum = getRandomInt();
var reset = document.querySelector('.resetButton');
var resetField = document.querySelector('.outputMessage').textContent;
var userGuess = document.querySelector('.userGuess');

function getRandomInt() {
  var min = 1
  var max = 100
  return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById("clear").disabled = true;

document.getElementById("reset").disabled = true;

userGuess.addEventListener('keyup', function() {
 if (userGuess.value.length !== 0) {  
   document.getElementById("clear").disabled = false;
 }
 else {
  document.getElementById("clear").disabled = true;
}
});

clear.addEventListener('click', function(event) {
  document.getElementById("clear").disabled = true;
});

guessButton.addEventListener('click', function(event) {
  event.preventDefault();
  var guess = Number(userGuess.value);
  document.getElementById("reset").disabled = false;

  if (isNaN(guess)) {
    numField.innerHTML = "NO";
    messageField.innerHTML = "This game is called: Number Guesser.  That's not a number.  Try again.";
  }

  else if (guess < 1 || guess > 100) {
   numField.innerHTML = userGuess.value;
   messageField.innerHTML = "Please guess a number between 1 and 100.";
 }

 else if (guess > randomNum) {
   numField.innerHTML = userGuess.value;
   messageField.innerHTML = "That is too high";
 }

 else if (guess < randomNum) {
   numField.innerHTML = userGuess.value;
   messageField.innerHTML = "That is too low";
 }

 else if (guess === randomNum) {
   numField.innerHTML = userGuess.value;
   messageField.innerHTML = "That is correct!!!";
 };
});

clear.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById("userGuess").value = "";
});

reset.addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById("userGuess").value = "";
  numField.innerHTML = " ";
  messageField.innerHTML = " ";
  randomNum = getRandomInt();
  document.getElementById("reset").disabled = true;
});
