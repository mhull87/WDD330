import score from './score.js';

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
      document.getElementById('btndiv').classList.remove('hidden');
      }
    })
  })
}
