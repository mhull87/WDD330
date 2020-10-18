'use strict';

//unicorn();

//pi = 3.142;

/* function amIOldEnough(age) {
  if(age < 12) {
    alert('No, sorry.');
    
  } else if (age < 18) {
    alert('Only if you are accompanied by an adult.');
  }
  else {
    alert('Yep, come on in!');
  }
}

amIOldEnough(3);

function amIOldEnough(age) {
  console.log(age);
  if(age < 12) {
    console.log(`In the if with ${age}`);
    return 'No, sorry.';
  } else if (age < 18) {
    console.log(`In the else-if with ${age}`);
    return 'Only if you are accompanied by an adult.';
  } else {
    console.log(`In the else with ${age}`);
  }
} */

/* function amIOldEnough(age) {
  debugger;
  if (age < 12) {
    debugger;
    return 'No, sorry.';
  } else if (age < 18) {
    debugger;
    return 'Only if you are accompanied by an adult.';
  } else {
    debugger;
    return 'Yep, come on in!';
  }
  }

  amIOldEnough(5); */

  const error = new Error('Something went terribly wrong!');

  function squareRoot(number) {
    if (number< 0) {
      throw new RangeError('You cannot find the square root of negative numbers')
    }
    return Math.sqrt(number);
  }

  //console.log(squareRoot(121));

  //console.log(squareRoot(-1))

/*   function imaginarySquareRoot(number) {
    try {
      return String(squareRoot(number));
    } catch(error) {
      return squareRoot(-number)+'i';
    }
  } */

  //console.log(imaginarySquareRoot(-49));
  //console.log(imaginarySquareRoot(49));

  function imaginarySquareRoot(number) {
    let answer;
    try {
      answer = String(squareRoot(number));
    } catch(error) {
      answer = squareRoot(-number)+'i';
    } finally {
      return `+ or - ${answer}`;
    }
  }

  function itSquareRoots4() {
    return squareRoot(4) === 2;
  }

  //console.log(itSquareRoots4());

  