// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

var spheres = []; // En array för att hålla alla skapade cirkelobjekt
var num_spheres = 100; // En variabel som håller antalet cirkelobjekt vi vill instansiera
var height = 1000;
var width = 1000;

function preload() {
  createVRCanvas();
}

function calculate() {
  // Things you want to happen once per frame
}

function setup() {
  setVRBackgroundColor(200, 0, 150);
  fill(0, 255, 0);

  // Skapa en massa cirkelobjekt genom att instansiera klassen PulseCircle och spara alla objekt i en array
  for(let i=0 ; i<num_spheres ; i++) {
    spheres[i] = new PulseBall();
  }
}

function draw() {
  // Rita om bakgrunden till svart
  background(0);
  ambientLight(255);

  // Anropa varje objekts update-, checkBounds- och show-funktioner
 for(let i=0 ; i<spheres.length ; i++) {
    push();
    spheres[i].update();
    spheres[i].checkBounds();
    spheres[i].show();
    pop();
  }
}