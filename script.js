'use strict';

//For secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//For Score
let score = 20;
let highscore = 0;

// For Click Event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If No Input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔NO number';
  }
  // If Correct Number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // To Write Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // If Number is Too High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the Game...';
      document.querySelector('.score').textContent = 0;
    }
  }
  // If Number is Too Low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose the Game...';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// To call at Action button
document.querySelector('.again').addEventListener('click', function () {
  // To Reset Score
  score = 20;
  document.querySelector('.score').textContent = score;
  // To Change Secret Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // To Empty the Guess input
  document.querySelector('.guess').value = '';
  // To Reset Message
  document.querySelector('.message').textContent = 'Start guessing...';
  // To Hide the Number
  document.querySelector('.number').textContent = '?';
  // To Reset Style Properties
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
