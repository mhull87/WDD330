import questions from './questions.js';
import score from './score.js';

document.querySelector('#easy').onclick = easyAPI;
document.querySelector('#medium').onclick = medAPI;
document.querySelector('#hard').onclick = hardAPI;


function easyAPI() {
  hideDifficulty();
  showQuestion();

  const apiURL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

  fetch(apiURL)
    .then(response => {
      return response.json();
    })
    .then(response => {
      questions(response);
    })
}

function medAPI() {
  hideDifficulty();
  showQuestion();

  const apiURL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';

  fetch(apiURL)
    .then(response => {
      return response.json();
    })
    .then(response => {
      questions(response);
    })
}

function hardAPI() {
  hideDifficulty();
  showQuestion();

  const apiURL = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple';

  fetch(apiURL)
    .then(response => {
      return response.json();
    })
    .then(response => {
      questions(response);
    })
}

function hideDifficulty() {
  document.getElementById('difficulty').classList.add('hidden');
}

function showQuestion() {
  document.getElementById('question').classList.remove('hidden');
  document.getElementById('progress_question').classList.remove('hidden');
  document.getElementById('progress_bar').classList.remove('hidden');
}

score();
