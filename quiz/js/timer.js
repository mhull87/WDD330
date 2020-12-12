export default function timer() {
  console.log('timer started');

  var timer = document.getElementById("timer").textContent = 10;
  var countdown = setInterval(function () {
    document.getElementById('timer').classList.remove('hidden');

    timer--;
    document.getElementById("timer").textContent = timer;

    if (timer <= 0) {
      clearInterval(countdown);
      document.getElementById('question').classList.add('hidden');
      document.getElementById('btndiv').classList.remove('hidden');
    } else {

    document.getElementById('choice1').onclick = stop;
    document.getElementById('choice2').onclick = stop;
    document.getElementById('choice3').onclick = stop;
    document.getElementById('choice4').onclick = stop;

    function stop() {
      document.getElementById('timer').classList.add('hidden');
      clearInterval(countdown);
    }}
  }, 1000);
}