import reset from './reset.js';

export default function endphrase() {

  const endingscore = document.getElementById('score').innerText;
  const score = parseInt(endingscore);
  const ending = document.getElementById('endphrase');

  if (score <= 3) {
    ending.innerText = `Maybe quizes aren't your thing.`;
  } else if (score > 3 && score <= 6) {
    ending.innerText = `Good try quiz novice.`;
  } else if (score > 6 && score <= 9) {
    ending.innerText = `You are a quiz ninja!`;
  } else if (score == 10) {
    ending.innerText = `Perfect Score! You are a quiz master!`;
  } else {
    ending.innerText = ``;
  }

  document.getElementById('scorediv').classList.remove('hidden');
  document.querySelector('#playagain').onclick = reset;
}