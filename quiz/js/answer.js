import score from './score.js';
import timer from './timer.js';

const choices = Array.from(document.getElementsByClassName('choice'));

export default function checkanswer(answer) {
  choices.forEach(choice => {
    choice.addEventListener('click', e => {
      const answerChoice = e.target;
      const selectedAnswer = answerChoice.innerText;
      if (selectedAnswer === answer) {
        score();
      } else {
      document.getElementById('question').classList.add('hidden');
      let starttimer = document.getElementById('btndiv')
      starttimer.classList.remove('hidden');
      starttimer.onclick = timer;
      }
    })
  })
}
