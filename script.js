'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //there's no number case!
  if (!guess) {
    document.querySelector('.message').textContent =
      '🚀 please input a number!!';
    document.querySelector('body').style.backgroundColor = '#222';
  }
//if the guess number is wrong   refactoring the commented code down there!
else if(guess !== secretNumber){
  document.querySelector('.message').textContent = guess>secretNumber?'📈 too high !! ' : '📉 too low !! ';
  score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
}

  //if the guess number is higher than the secretNumber!
  
  // else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = '📈 too high !! ';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   document.querySelector('body').style.backgroundColor = '#222';
  // }
  // //if the guess number is lower than the secretNumber!
  // else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = '📉 too low !! ';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   document.querySelector('body').style.backgroundColor = '#222';
 // }

  //the correct number case!
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉🎉 Well Done ';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

//reset or try again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = 'clear';
  document.querySelector('.number').textContent = '?';
});
