// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

var numCircles;

function setup() {

  createCanvas(852, 480);
  numCircles = 10;
}

function draw() {

  background(220);
  
  // En iteration kör samma kod ett visst antal gånger i rad.
  // Låt oss skapa numCircles st cirklar med en for-loop.
  // Här ser du också ett annat sätt att skapa en variabel med "let" istället för "var".
  // let skapar en lokal variabel som endast är tillgänglig inuti det kodblock den skapas i. I detta fallet for-loopen.
  // Alltså:
  //  1. var skapar en variabel som är global om den anges utanför en funktion
  //  2. var skapar en variabel som är lokal i hela funktionen som den anges i
  //  3. let skapar en variabel som är lokal i det omslutande kodblocket
  for( let i=0 ; i < numCircles ; i ++ ) {
    let xPos = 50 + i*65;
    ellipse(xPos, 50 , 60, 60);
  }
}