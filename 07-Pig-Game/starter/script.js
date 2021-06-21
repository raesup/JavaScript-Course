'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const initialScore = 0;
let scores, playing, currentScore, activePlayer;

const initialState = function () {
  scores = [0, 0];
  playing = true;
  currentScore = initialScore;
  activePlayer = 0;
  score0.textContent = initialScore;
  score1.innerText = initialScore;
  current0.textContent = initialScore;
  current1.textContent = initialScore;
  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

initialState();

rollBtn.addEventListener('click', () => {
  if (playing) {
    dice.classList.remove('hidden');
    const roll = Math.floor(Math.random() * 6) + 1;

    dice.src = `dice-${roll}.png`;

    if (roll !== 1) {
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // rollBtn.disabled = true;
      // holdBtn.disabled = true;
    } else {
      switchPlayer();
    }
  }
});

// newBtn.addEventListener('click', () => {
//   initialState();
// });

newBtn.addEventListener('click', initialState);
