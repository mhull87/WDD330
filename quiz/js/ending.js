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
  document.getElementById('highscore').classList.remove('hidden');
  document.querySelector('#playagain').onclick = reset;

  const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
  console.log(highscores);

  const scorearray = {
    score: endingscore
  };

  highscores.push(scorearray);
  highscores.sort((a,b) => b.score - a.score)
  highscores.splice(5);

  localStorage.setItem('highscores', JSON.stringify(highscores));
  const hsdiv = document.getElementById('highscorelist');

  hsdiv.innerHTML = highscores.map(score => { 
    return `<li class='hslist'>${score.score}</li>`;
  })

  document.querySelector('#highscore').onclick = showHS;
}

function showHS() {
  document.getElementById('curtain').classList.add('hidden');
  document.getElementById('highscorediv').classList.remove('hidden');
  document.getElementById('playagain2').onclick = reset;
}