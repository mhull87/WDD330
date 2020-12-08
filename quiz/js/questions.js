import progressbar from './progressbar.js';
import endphrase from './ending.js';
import checkanswer from './answer.js';


export default function displayQuestions(response) {
  displayQuestion1(response);
  console.log(response);
}

function displayQuestion1(response) {
  let question = response.results[0].question;
  let answer = response.results[0].correct_answer;
  let wrong1 = response.results[0].incorrect_answers[0];
  let wrong2 = response.results[0].incorrect_answers[1];
  let wrong3 = response.results[0].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = answer;
  document.getElementById('choice2').innerHTML = wrong1;
  document.getElementById('choice3').innerHTML = wrong2;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion2(response);
  }
}

function displayQuestion2(response) {
  let question = response.results[1].question;
  let answer = response.results[1].correct_answer;
  let wrong1 = response.results[1].incorrect_answers[0];
  let wrong2 = response.results[1].incorrect_answers[1];
  let wrong3 = response.results[1].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = wrong1;
  document.getElementById('choice2').innerHTML = wrong2;
  document.getElementById('choice3').innerHTML = answer;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion3(response);
  }
}

function displayQuestion3(response) {
  let question = response.results[2].question;
  let answer = response.results[2].correct_answer;
  let wrong1 = response.results[2].incorrect_answers[0];
  let wrong2 = response.results[2].incorrect_answers[1];
  let wrong3 = response.results[2].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = wrong1;
  document.getElementById('choice2').innerHTML = answer;
  document.getElementById('choice3').innerHTML = wrong2;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion4(response);
  }
}

function displayQuestion4(response) {
  let question = response.results[3].question;
  let answer = response.results[3].correct_answer;
  let wrong1 = response.results[3].incorrect_answers[0];
  let wrong2 = response.results[3].incorrect_answers[1];
  let wrong3 = response.results[3].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = answer;
  document.getElementById('choice2').innerHTML = wrong1;
  document.getElementById('choice3').innerHTML = wrong2;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion5(response);
  }
}

function displayQuestion5(response) {
  let question = response.results[4].question;
  let answer = response.results[4].correct_answer;
  let wrong1 = response.results[4].incorrect_answers[0];
  let wrong2 = response.results[4].incorrect_answers[1];
  let wrong3 = response.results[4].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = wrong3;
  document.getElementById('choice2').innerHTML = wrong1;
  document.getElementById('choice3').innerHTML = wrong2;
  document.getElementById('choice4').innerHTML = answer;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion6(response);
  }
}

function displayQuestion6(response) {
  let question = response.results[5].question;
  let answer = response.results[5].correct_answer;
  let wrong1 = response.results[5].incorrect_answers[0];
  let wrong2 = response.results[5].incorrect_answers[1];
  let wrong3 = response.results[5].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = wrong2;
  document.getElementById('choice2').innerHTML = wrong1;
  document.getElementById('choice3').innerHTML = answer;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion7(response);
  }
}

function displayQuestion7(response) {
  let question = response.results[6].question;
  let answer = response.results[6].correct_answer;
  let wrong1 = response.results[6].incorrect_answers[0];
  let wrong2 = response.results[6].incorrect_answers[1];
  let wrong3 = response.results[6].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = answer;
  document.getElementById('choice2').innerHTML = wrong1;
  document.getElementById('choice3').innerHTML = wrong2;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion8(response);
  }
}

function displayQuestion8(response) {
  let question = response.results[7].question;
  let answer = response.results[7].correct_answer;
  let wrong1 = response.results[7].incorrect_answers[0];
  let wrong2 = response.results[7].incorrect_answers[1];
  let wrong3 = response.results[7].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = wrong2;
  document.getElementById('choice2').innerHTML = wrong1;
  document.getElementById('choice3').innerHTML = answer;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion9(response);
  }
}

function displayQuestion9(response) {
  let question = response.results[8].question;
  let answer = response.results[8].correct_answer;
  let wrong1 = response.results[8].incorrect_answers[0];
  let wrong2 = response.results[8].incorrect_answers[1];
  let wrong3 = response.results[8].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = wrong1;
  document.getElementById('choice2').innerHTML = answer;
  document.getElementById('choice3').innerHTML = wrong2;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  document.getElementById('next').onclick = next_question;

  function next_question() {
    displayQuestion10(response);
  }
}

function displayQuestion10(response) {
  let question = response.results[9].question;
  let answer = response.results[9].correct_answer;
  let wrong1 = response.results[9].incorrect_answers[0];
  let wrong2 = response.results[9].incorrect_answers[1];
  let wrong3 = response.results[9].incorrect_answers[2];

  document.getElementById('questionDiv').innerHTML = question;
  document.getElementById('choice1').innerHTML = wrong2;
  document.getElementById('choice2').innerHTML = wrong1;
  document.getElementById('choice3').innerHTML = answer;
  document.getElementById('choice4').innerHTML = wrong3;

  progressbar();

  checkanswer(answer);

  let next = document.getElementById('next');
  next.innerText = 'Finish';

  next.onclick = end;

  function end() {
    document.getElementById('maincontainer').classList.add('hidden');
    document.getElementById('score').classList.remove('hidden');
    document.getElementById('curtain').classList.remove('hidden');

    endphrase();
  }
}