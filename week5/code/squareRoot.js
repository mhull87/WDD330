'use strict';

//unicorn();

//pi = 3.142;

 

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

  