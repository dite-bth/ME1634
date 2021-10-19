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
    let xPos = 50 + i*65;

    // Vi använder ett villkor för att rita ut en ellips eller en rektangel baserat på om det är en udda eller jämn position
    // if och else betyder att om villkoret "position % 2 == 0" är uppfyllt så ska en ellips ritas, annars en rektangel.
    // Eftersom i börjar från 0 lägger vi till 1 för att det är position 1
    let position = i;
    if( position % 2 == 0 ) {
      ellipse(xPos, 50, 60, 60);
    }
    else {
      rect(xPos, 50, 60, 60);
    }
    // I resultatet kan vi notera att det är en skillnad på ellipser och rektanglar och inte bara i formen...
    // En cirkels position utgår från dess mittpunkt medan en rektangels position utgår från sitt övre vänstra hörn
    // Detta gör att de ritas ut lite överlapande
  }
}