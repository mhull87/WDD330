import timer from './timer.js';

let scoreDiv = document.getElementById('score');
let hideQuestion = document.getElementById('question');
let score_total = 0;

export default function score() {
  score_total++;
  scoreDiv.innerText = `${score_total}`;
  hideQuestion.classList.add('hidden');
  let starttimer = document.getElementById('btndiv');
  starttimer.classList.remove('hidden')
  starttimer.onclick = timer;
  return score_total;
}