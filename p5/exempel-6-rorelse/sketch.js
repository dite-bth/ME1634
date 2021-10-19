// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

// Variabler för att hålla position och hastighet (förändringstakt i position) för en ellips
var x;
var y;
var dx;
var dy;

function setup() {
  createCanvas(852, 480);

  x = width / 2;
  y = height / 2;
  dx = 0;
  dy = 0;
}

function draw() {
  background(220);
  noStroke();
  fill(255, 0 , 255);

  // Rita ut ellipsen på nuvarande position
  ellipse(x, y, 80, 80);

  // Sätt hastigheten i x- och y-led till ett slumpmässigt tal mellan -5 och 5
  dx = random(-5, 5);
  dy = random(-5, 5);

  // Uppdatera ellipsens position med hastigheterna
  x = x + dx;
  y = y + dy;
}