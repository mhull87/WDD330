let scoreDiv = document.getElementById('score');
let score_total = 0;

export default function score() {
  scoreDiv.inner_Text = `${score_total} / 10`;
  return score_total++;
}