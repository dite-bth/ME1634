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
  
  for( let i=0 ; i < numCircles ; i ++ ) {
    
    // Ställ in en färg för ellipserna baserat på om det är en udda eller jämn position för en ellips
    // Som inparameter skickar vi med i + 1 eftersom i börjar från 0 (som är position 1)
    // Vi tar emot returvärdet och lagrar det i en variabel
    let color = colorOddEven(i + 1);
    fill(color);
    
    // Rita ut en ellips via en funktion
    let xPos = 50 + i*65;
    drawEllipse(xPos, 50, 60, 60);
  }
}

// Vi kan skapa egna funktioner för att strukturera vår kod.
// En funktion har inparametrar och ett returvärde
// Denna funktion tar via sina parametrar in x- och y-koordinater samt bredd och höjd för en ellips.
// Eftersom funktionen bara har till uppgift att rita ut en ellips returnerar den inget specifikt värde.
function drawEllipse( x, y, b, h) {
  ellipse(x, y , b, h);
  return;
}

function colorOddEven( pos ) {
  // Ta reda på om pos är udda eller jämt...
  // Returnera sedan ett färgvärde i gråskala mellan 0 och 255
  if(pos % 2 == 0) {
    return 0;
  }
  else {
    return 255;
  }
}