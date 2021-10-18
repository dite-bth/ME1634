// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

function setup() {
  // Kod som körs vid uppstart
  createCanvas(852, 480); //Skapa en rityta (canvas) med dimensionen 480p
}

function draw() {
  // Kod som körs vid varje bilduppdatering
  background(220); //Färglägg ritytans bakgrund grå - rgb(220, 220, 220)
  ellipse(50,50,80,80); //Rita en 80 bred och 80 hög ellips (cirkel) på positionen x=50, y=50 
}