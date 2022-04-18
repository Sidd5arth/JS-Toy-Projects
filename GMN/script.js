'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.guess').value = '';
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess);
  //   console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#165e11';
    document.querySelector('.message').textContent = 'Correct Number';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    if (highscore === 20) {
      document.querySelector('h1').textContent =
        'Legends Score 20/20 in first attempt';
    }
  } else if (guess > number) {
    document.querySelector('body').style.backgroundColor = '#871e1e';
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    document.querySelector('body').style.backgroundColor = '#223b7a';
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').value = '';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  Number((document.querySelector('.number').textContent = '?'));

  document.querySelector('body').style.backgroundColor = 'rgb(78, 78, 78)';
});
