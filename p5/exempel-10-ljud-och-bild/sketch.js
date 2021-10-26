// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

var bgImage = null; // En variabel för att hålla en bild
var bgSound = null; // En variabel för att hålla et ljud

var x, y;

// Nu ska vi använda funktionen preload för att ladda in saker som bilder och ljud innan programmet startar
function preload() {
  bgImage = loadImage("bgimage.jpg");
  bgSound = loadSound("bgDrone.wav");
}

function setup() {
  // Anpassad storlek baserat på bilden
  createCanvas(640, 426);

  image(bgImage, 0, 0);
  bgSound.loop();

  x = width/2;
  y = height/2;

  stroke(255, 0, 255);
  strokeWeight(8)
}

function draw() {
  background(bgImage);

  point(x, y);
  x += random(-2, 2);
  y += random(-2, 2);
}