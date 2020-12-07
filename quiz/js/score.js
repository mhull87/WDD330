let scoreDiv = document.getElementById('score');
let hideQuestion = document.getElementById('question');
let score_total = 0;

export default function score() {
  score_total++;
  scoreDiv.innerText = `Score: ${score_total} / 10`;
  hideQuestion.classList.add('hidden');
  document.getElementById('btndiv').classList.remove('hidden');

  return score_total;
}