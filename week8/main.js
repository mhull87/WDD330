var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

context.strokeStyle = 'red';
context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");

context.strokeStyle = 'red';
context.fillStyle = 'rgba(0, 0, 255, 0.5)';
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
  var canvas = document.getElementById('demo2');
  var context = canvas.getContext('2d');
  context.strokeStyle = 'red';

  var img = new Image();
  img.src = 'gator.jpg';
  img.onload = function () {
    var pattern = context.createPattern(img, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(10, 10, 500, 500);
    context.strokeRect(10, 10, 500, 500);
  };
}

drawPattern();

function drawGradient() {
  var canvas = document.getElementById('demo3');
  var context = canvas.getContext('2d');
  context.strokeStyle = 'red';
  var gradient = context.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'blue');
  gradient.addColorStop(1, 'white');
  context.fillStyle = gradient;
  context.fillRect(10, 10, 300, 300);
  context.strokeRect(10, 10, 300, 300);
}

drawGradient();

function drawCircle(canvas) {
  var context = canvas.getContext('2d');
  context.beginPath();
  context.arc(50, 50, 30, 0, Math.PI * 2, true);
  context.closePath();
  context.strokeStyle = 'red';
  context.fillStyle = 'blue';
  context.lineWidth = 3;
  context.fill();
  context.stroke();
}

var demo4 = document.getElementById('demo4');
drawCircle(demo4);
var canvas5 = document.getElementById('demo5');
drawCircle(canvas5);


function saveDrawing() {
  window.open(canvas5.toDataURL('image/png'));
}

var button = document.getElementById('saveButton');
button.addEventListener('click', saveDrawing, false);

window.addEventListener('load', drawImageToCanvas, false);

function drawImageToCanvas() {
  var canvas = document.getElementById('demo6');
  var context = canvas.getContext('2d');
  var image = document.getElementById('myImageElem');
  context.drawImage(image, 125, 170);
  var imageData = context.getImageData(0, 0, 1, 1);
  var pixelData = imageData.data;
  console.log(pixelData.length);
}

window.addEventListener('load', manipulateImage, false);

function manipulateImage() {
  var canvas = document.getElementById('demo7');
  var context = canvas.getContext('2d');
  var image = document.getElementById('myImageElem');
  context.drawImage(image, 125, 170);
  var imageData = context.getImageData(0, 0, 500, 500);
  for (var i = 0; i < imageData.data.length; i += 4) {
    var red = imageData.data[i];
    var green = imageData.data[i + 1];
    var blue = imageData.data[i + 2];
    var grayscale = red * .3 + green * .59 + blue * .11;
    imageData.data[i] = grayscale;
    imageData.data[i + 1] = grayscale;
    imageData.data[i + 2] = grayscale;
  }
  context.putImageData(imageData, 0, 0);
}

var myVideo = document.getElementById("video"); 

function playPause() { 
if (myVideo.paused) 
myVideo.play(); 
else 
myVideo.pause(); 
}
window.addEventListener('load', makeVideo, false);

function makeVideo() {
var video = document.getElementById('video');
var canvas = document.getElementById('demo8');
var context = canvas.getContext('2d');
video.addEventListener('play', function() {
draw(video, context, canvas);
}, false);
}

function draw(video, context, canvas) {
if(video.paused || video.ended) return false;

drawOneFrame(video, context, canvas);
}

function drawOneFrame(video, context, canvas) {
context.drawImage(video, 0, 0, canvas.width, canvas.height);
var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
var pixelData = imageData.data;
var red, green, blue, grayscale;
for(var i = 0; i < pixelData.length; i += 4) {
red = pixelData[i];
green = pixelData[i + 1];
blue = pixelData[i + 2];
grayscale = red * .3 + green * .59 + blue * .11;
pixelData[i] = grayscale;
pixelData[i + 1] = grayscale;
pixelData[i + 2] = grayscale;
}
context.putImageData(imageData, 0, 0);
}