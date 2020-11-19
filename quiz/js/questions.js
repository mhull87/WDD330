export default class displayQuestions {

  constructor(response) {
    this.resonse = response;
  }
  
  displayQuestion1(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion2(response)
    })
  }

  displayQuestion2(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion3(response)
    })
  }

  displayQuestion3(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion4(response)
    })
  }

  displayQuestion4(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion5(response)
    })
  }

  displayQuestion5(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion6(response)
    })
  }

  displayQuestion6(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion7(response)
    })
  }

  displayQuestion7(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion8(response)
    })
  }

  displayQuestion8(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion9(response)
    })
  }

  displayQuestion9(response) {
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

    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      displayQuestion10(response)
    })
  }

  displayQuestion10(response) {
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

  }
}