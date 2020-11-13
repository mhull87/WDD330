/* ANIMATION EXAMPLE
const squareElement = document.getElementById('square');

let angle = 0;

setInterval(() => {
  angle = (angle + 2) % 360;
  squareElement.style.transform = `rotate(${angle} deg)`
}, 1000 / 60); 
*/


const squareElement = document.getElementById('square');

let angle = 0;

function rotate() {
  angle = (angle + 2) % 360;
  squareElement.style.transform = `rotate(${angle}deg)`
  window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

//cancelAnimationFrame(id);

//FACTORIZOR WEB WORKERS
const btn = document.getElementById('rainbow');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
  document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}
btn.addEventListener('click', change);

const form = document.forms[0];
form.addEventListener('submit', factorize, false);

function factorize(event) {
  //prevent the form from being submitted
  event.preventDefault();
document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
const number = Number(form.number.value);

if(window.Worker) {
  const worker = new Worker('factors.js');
  worker.postMessage(number);
  worker.addEventListener('message', (event) => {
    document.getElementById('output').innerHTML = event.data;
  }, false);
}
}

//WEBSOCKET
const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('output2');
const form2 = document.forms[1];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
  output('CONNECTED');
}, false);

function output(message) {
  const para = document.createElement('p');
  para.innerHTML = message;
  outputDiv.appendChild(para);
}

form2.addEventListener('submit', message, false);

function message(event) {
  event.preventDefault();
  const text = form2.message.value;
  output(`SENT: ${text}`);
  connection.send(text);
}

connection.addEventListener('message', (event) => {
  output(`RESPONSE: ${event.data}`);
}, false);

connection.addEventListener('close', () => {
  output('DISCONNECTED');
}, false);

connection.addEventListener('error', (event) => {
  output(`<span style='color: red;'>ERROR: ${event.data}</span>`);
}, false);

//NOTIFICATIONS
if(window.Notification) {
  Notification.requestPermission();
}

if(window.Notification) {
  Notification.requestPermission()
  .then((permission) => {
    if(Notification.permission === 'granted') {
      new Notification('Hello JavaScript!');
    }
  });
}

const notification = new Notification('JavaScript: Novice to Ninja', {
  body: 'The new book from SitePoint',
  icon: 'sitepointlogo.png'
});

notification.close();

notification.addEventListener('click', () => {
  window.open('https://sitepoint.com')
}, false);



