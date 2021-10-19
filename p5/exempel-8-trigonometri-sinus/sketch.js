// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

// Skapa variabler för att hålla reda på en vinkel, en cirkels diameter samt X-positionen för en punkt
let vinkel = 0;
let diameter;
let pointX = 50;

function setup() {
  createCanvas(852, 480);

  // Ange startdiamater för cirkeln
  diameter = height/2;
}

function draw() {
  background(220);

  //Rita ut en punkt som förflyttar sig med fast hastighet i X-led och enligt en sinuskurva i Y-led
  strokeWeight(10);
  stroke(0);
  point(pointX, 100 + 50*sin(vinkel));

  // Rita cirkeln med en anpassad diameter enligt en sinuskurva
  let d1 = 10 + (sin(vinkel) * diameter) / 2 + diameter / 2;
  strokeWeight(4);
  stroke(0);
  fill(255, 0, 255);
  ellipse(width/2, 100 + height / 2, d1, d1);
  
  // Öka punktens x-position och återställ till 0 ifall den går utanför ritytan
  pointX += 2
  if(pointX > width) {
    pointX = 0;
  }

  // Öka på vinkeln för att få ett nytt värde i sinuskurvan till nästa omritning
  vinkel += 0.1;
}