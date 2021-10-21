// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

var circles = []; // En array för att hålla alla skapade cirkelobjekt
var num_circles = 500; // En variabel som håller antalet cirkelobjekt vi vill instansiera

function setup() {
  createCanvas(852, 480);

  // Skapa en massa cirkelobjekt genom att instansiera klassen PulseCircle och spara alla objekt i en array
  for(let i=0 ; i<num_circles ; i++) {
    circles[i] = new PulseCircle();
  }
}

function draw() {
  // Rita om bakgrunden till svart
  background(0);

  // Anropa varje objekts update-, checkBounds- och show-funktioner
  for(let i=0 ; i<circles.length ; i++) {
    circles[i].update();
    circles[i].checkBounds();
    circles[i].show();
  }

}