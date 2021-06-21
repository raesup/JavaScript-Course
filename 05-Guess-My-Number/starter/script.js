'use strict';

/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = 'test';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number!');
  } else if (secretNumber !== guess) {
    if (score > 0) {
      displayMessage(guess < secretNumber ? 'Too low!' : 'Too high!');
      // document.querySelector('.message').textContent =
      //   guess < secretNumber ? 'Too low!' : 'Too high!';
      score--;
    } else {
      // document.querySelector('.message').textContent = 'You lost!';
      displayMessage('You lost!');
    }
    // } else if (secretNumber > guess) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'Too low!';
    //     score--;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost!';
    //   }
    // } else if (secretNumber < guess) {
    //   if (score > 0) {
    //     document.querySelector('.message').textContent = 'Too high!';
    //     score--;
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost!';
    //   }
  } else {
    // document.querySelector('.message').textContent = 'Correct!';
    displayMessage('Correct!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
