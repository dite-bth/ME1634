// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

var stars = []; // En array för att hålla stjärnor
var numberOfStars = 100; // En variabel som håller antalet stjärnor
var travelSpeed = 20; // En variabel för hur hur snabbt vi vill åka

function setup() {
  createCanvas(1280, 720);

  // Skapa stjärnor och skicka med hastigheten
  for (let i = 0; i < numberOfStars; i++) {
    stars[i] = new Star(travelSpeed);
  }
}

function draw() {
  // Rita om bakgrunden till svart
  background(0);
  
  //Anropa varje stjärnas update- och showfunktion
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}