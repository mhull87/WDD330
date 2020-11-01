function square(x) {
  return x * x;
}

square.length
//1

// Call and Apply Methods

/* function sayHello() {
  return `Hello, my name is ${this.name}`;
}
 */
const clark = {
  name: 'Clark'
};
const bruce = {
  name: 'Bruce'
};

sayHello.call(clark);
//'Hello, may name is Clark'

sayHello.call(bruce);
//'Hello, my name is Bruce'

function sayHello(greeting = 'Hello') {
  return `${greeting}, my name is ${this.name}`;
}

sayHello.call(clark, 'Howdo you do');
//'How do you do, my name is Clark'

square.call(null, 4)
//16

square.apply(null, [4])
//16

//Custom Properties

square.description = 'Squares a number that is provided as an argument'

//Memoization

function square(x) {
  square.cache = square.cache || {};
  if (!square.cache[x]) {
    square.cache[x] = x * x;
  }
  return square.cache[x]
}

square(3);
//9
square(-11);
//121
square.cache;
//{"3": 9, "-11": 121}

//Immediately Invoked Function Expressions
(function () {
  const temp = 'World';
  console.log(`Hello ${temp}`);
})();
//'Hello World'

//Tempporary Variables
let a = 1;
let b = 2;

(() => {
  const temp = a;
  a = b;
  b = temp;
})();

a;
//2

b;
//1

/*console.log(temp);*/
//Error: "temp is not defined"

//Initialization Code
(function () {
  const name = 'Peter Parker'; //This might be obtained from a cookie in reality
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(),
    today = days[date.getDay()];
  console.log(`Welcome back ${name}. Today is ${today}`);
})();
//'Welcome back Peter Parker. Today is Tuesday'

//or

{
  const name = 'Peter Parker'; //This might be obtained from a cookie in reality
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(),
    today = days[date.getDay()];
  console.log(`Welcome back ${name}. Today is ${today}`);
}
//'Welcome back Peter Parker. Today is Tuesday'

//Creating Self-contained Code Blocks
(function () {
  //block A
  const name = 'Block A';
  console.log(`Hello from ${name}`);
}());

(function () {
  //block B
  const name = 'Block B';
  console.log(`Hello form ${name}`);
}());

//Hello from Block A
//Hello from Block B

//Functions that define and Rewrite Themselves
//#1
function party() {
  console.log('Wow this is amazing!');
  party = function () {
    console.log('Been there, got the T-Shirt');
  }
}

party();
//'Wow this is amazing!'
party();
//'Been there, got the T-Shirt'
party();
//'Been there, got the T-Shirt'

//#2
const beachParty = party; //note that the party function has not been invoked
beachParty(); //the party() function has now been redefined, even though it hasn't been called explicity
//'Wow this is amazing!'

party();
//'Been there, got the T-Shirt'

beachParty(); // but this function hasn't been redefigned
//'Wow this is amazing!'

beachParty(); //no matter how many times this is called it will remain the same
//'Wow this is amazing!'

//Init-Time Branching
//checking for support only the first time
function ride() {
  if (window.unicorn) {
    ride = function () {
      //some code that uses the brand new and sparkly unicorn methods
      return 'Riding on a unicorn is the best!';
    }
  } else {
    ride = function () {
      //some code that uses the older pony methods
      return 'Riding on a pony is still pretty good!';
    }
  }
  return ride(); //invoking the rewritten function
}

ride(); //the function rewrites itself, then calls itself
//'Riding on a pony is still pretty good'
ride
//function ride() {
//return 'Riding on a pony is still pretty good'
//}

//Recursive Functions
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//and

function collatz(n, sequence = [n]) {
  if (n === 1) {
    return `Sequence took ${sequence.length} steps. It was ${sequence}`;
  }

  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  return collatz(n, [...sequence, n]);
}

collatz(18);
//'Sequence took 21 steps. It was 18,9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1'

//Callbacks
//Event-driven Asynchronous Programming
function wait(message, callback, seconds) {
  setTimeout(callback, seconds * 1000);
  console.log(message);
}

function selfDestruct() {
  console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ...', selfDestruct, 5);
console.log('Hmm, should I accept this mission or not ... ?');
//'This tape will self-destruct in five seconds ... '
//'Hmm, should I accept this mission or not ... ?'
//'BOOOOM!'

//Creating A Promise
const promise = new Promise((resolve, reject) => {
  // initialization code goes here
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  }
}

const promise = Promise((resolve, reject) => {
  const n = dice.roll();
  setTimeout(() => {
    (n > 1) ? resolve(n): reject(n);
  }, n * 1000);
});

//Dealing With A Settled Promise
const dice = {
  sides: 6,
  roll() {
    return Math.floor(this.sides * Math.random()) + 1;
  }
}
console.log('Before the roll');

const roll = new Promise((resolve, reject) => {
  const n = dice.roll();
  if (n > 1) {
    setTimeout(() => {
      resolve(n)
    }, n * 200);
  } else {
    setTimeout(() => reject(n), n * 200);
  }
});

roll.then(result => console.log(`I rolled a ${result}`))
  .catch(result => console.log(`Drat! ... I rolled a ${result}`));

console.log('After the roll');

//Async Functions
async function loadGame(userName) {
  try {
    const user = await login(userName);
    const info = await getPlayerInfo(user.id);
    // load the game using the returned info
  } catch (error) {
    throw error;
  }
}

//Functions That Ruturn Functions
function returnHello() {
  console.log('returnHello() called');
  return function() {
    console.log('Hello World!');
  }
}

returnHello()
//returnHello() called

const hello = returnHello();
//returnHello() called

hello()
//Hello World!

//Generic greeter function
function greeter(greeting = 'Hello') {
  return function() {
    console.log(greeting);
  }
}

const englishGreeter = greeter();
englishGreeter();
//Hello

const frenchGreeter = greeter('Bonjour');
frenchGreeter();
//Bonjour

const germanGreeter = greeter('Guten Tag');
germanGreeter();
//Guten Tag

//Closures
function outer() {
  const outside = 'Outside!';
  function inner() {
    const inside = 'Inside!';
    console.log(outside);
    console.log(inside);
  }
  console.log(outside);
  inner();
}

outer()
//Outside!
//Inside!
//Outside!

//Returning functions
function outer() {
  const outside = 'Outside!';
  function inner() {
    const inside = 'Inside!';
    console.log(outside);
    console.log(inside);
  }
  return inner;
}

const closure = outer();

closure();
//Outside!
//Inside!

function closure() {
  const a = 1.8;
  const b = 32;
  return c => c * a + b;
}

const toFahrenheit = closure();

toFahrenheit(30);
//86

function counter(start) {
  let i = start;
  return function() {
    return i++;
  }
}

const count = counter(1);

count();
//1
count();
//2

//Generators
function* exampleGenerator() {
  //code for the generator goes here
}

function* fibonacci(a, b) {
  let [prev, current] = [a, b];
  while(true) {
    [prev, current] = [current, prev + current];
    yield current;
  }
}

const sequence = fibonacci(1, 1);

sequence.next();
//2
sequence.next();
//3
sequence.next();
//5

//use an iterator to invoke it multiple times
for(n of sequence) {
  //stop the sequence after it reaches 100
  if(n > 10) break;
  console.log(n);
}

//8
//13
//21
//34
//55
//89

//The Fetch API
//Basic Usage
fetch('https://example.com/data')
.then( /* code that handles the response */ )
.catch( /* code that runs if the server returns an error */ )

//Response Interface
const url = 'http:example.com/data';

fetch(url)
.then((response) => {
  if(response.ok) {
    return response;
  }
  throw Error(response.statusText);
})
.then(response => /* do someting with response */ )
.catch(error => console.log('There was an error!'))

//Redirects
fetch(url)
.then(response => response.redirect(newURL)); //redirects to another URL
.then(/*do something else*/)
.catch(error => console.log('there was an error: ', error))

//Text Responses
fetch(Url)
.then(response => response.text()); //transforms the text stream into a JavaScript string
.then(text => console.log(text))
.catch(error => console.log('There was an error: ', error))

//File Responses
fetch(url)
.then(response => response.blob()); //transforms the data into a blob object
.then(blob => console.log(blob.type))
.catch(error => console.log('There was an error: ', error))

//JSON Responses
fetch(url)
.then(response => response.json()); //transforms the JSON data into a JavaScript object
.then(data => console.log(Object.entries(data)))
.catch(error => console.log('There was an error: ', error))

//Creating Response Objects
const response = new Response('Hello!', {
  ok: true,
  status: 200,
  statusText: 'OK',
  type: 'cors',
  url: '/api'
});

//Request Interface
const request = new Request('https://example.com/data', {
  method: 'GET',
  mode: 'cors',
  redirect: 'follow',
  cache: 'no-cache'
});

fetch(request)
.then(/*do something with the response*/ )
.catch(/*handle any errors*/)

//or

fetch('https://example.com/data', {
  method: 'GET',
  mode: 'cors',
  redirect: 'follow',
  cache: 'no-cache'
})
.then(/*do something with the response*/)
.catch(/*handle any errors*/)