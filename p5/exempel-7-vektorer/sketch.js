// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

// Variabler för att hålla position och hastighet (rörelseriktning och förändringstakt i position) för en "boll"
var boll;
var hastighet;

function setup() {
  createCanvas(852, 480);

  boll = createVector(width/2, height/2);
  hastighet = createVector(random(-5, 5), random(-5, 5));
}

function draw() {
  background(220);
  noStroke();
  fill(255, 0 , 255);

  // Rita ut "bollen" på nuvarande position
  ellipse(boll.x, boll.y, 80, 80);

  // Uppdatera "bollens" position med hastigheten
  boll.add(hastighet);

  // Anropa en funktion för att kolla om bollen är på väg ur bild
  checkBoundaries();
}

// Funktion som kontrollerar om bollen är på väg ur bild och i så fall vänder på hastigheten (rörelseriktningen)
// Funktionen returnerar inget speciellt väde
function checkBoundaries() {
  if(boll.x < 0) {
    hastighet.x = hastighet.x * -1;
  }
  else if(boll.x > width) {
    hastighet.x = hastighet.x * -1;
  }

  if(boll.y < 0) {
    hastighet.y = hastighet.y * -1;
  }
  else if(boll.y > height) {
    hastighet.y = hastighet.y * -1;
  }

  return;
}