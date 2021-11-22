// Variabler för att flytta efter musen med x/y-koordinater
let x = 0;
let y = 0;

//Variabler för slumpmässig förflyttning
let randomMoverX = 0;
let randomMoverY = 0;
let ramdomTargetX;
let ramdomTargetY;

//Variabler för att flytta efter ett fördefinierat mönster
let patternMoverX = 0;
let patternMoverY = 0;
let targets = [{x: 750, y: 550}, {x: 750, y: 50}, {x: 50, y: 550}, {x: 50, y: 50}];
let currentTarget = 0;

// Variabler för att flytta efter musen med vektor
let pos;

function setup() {
  createCanvas(800, 600);
  randomTargetX = random(0, width);
  randomTargetY = random(0, height);
  pos = createVector(0,0);
}

function draw() {
  background(0);

  // "Lerpa" x oxh y mout muspekarens position
  // Riktningen mot positionen får vi fram med atan2
  x = lerp(x, mouseX, 0.05);
  y = lerp(y, mouseY, 0.05);
  let angle = Math.atan2(mouseY - y, mouseX - x);

  // "Lerpa" randomMover mor en slupmässig position och slumpa fram en ny när den kommer nära (inom 1 pixel)
  randomMoverX = lerp(randomMoverX, randomTargetX, 0.05);
  randomMoverY = lerp(randomMoverY, randomTargetY, 0.05);
  if( dist(randomMoverX, randomMoverY, randomTargetX, randomTargetY) < 1 ) {
    randomTargetX = random(0, width);
    randomTargetY = random(0, height);
  }

  // "Lerpa" patternMover mot en position  i arrayen och stega fram när den kommer nära (inom 1 pixel)
  patternMoverX = lerp(patternMoverX, targets[currentTarget].x, 0.05);
  patternMoverY = lerp(patternMoverY, targets[currentTarget].y, 0.05);
  if( dist(patternMoverX, patternMoverY, targets[currentTarget].x, targets[currentTarget].y) < 1 ) {
    currentTarget += 1;
    if(currentTarget >= targets.length) {
      currentTarget = 0;
    }
  }

  //Lerpa verktorn mot muspekarvektorn och ta fram riktningen för hur vi ska vrida objektet
  let mousePos = createVector(mouseX, mouseY);
  let towardsMouse = p5.Vector.sub(mousePos, pos);
  pos.lerp(mousePos, 0.02);

  //Rita ut de fyra olika varianterna
  push();
    translate(x + 30, y + 30);
    rotate(angle);
    translate(-30, -30);
    rect(0, 0, 60, 60);
  pop();

  push();
    translate(randomMoverX, randomMoverY);
    fill(255, 0, 0);
    ellipse(0, 0, 50, 50);
  pop();

  push();
    translate(patternMoverX, patternMoverY);
    fill(0, 255, 0);
    ellipse(0, 0, 50, 50);
  pop();

  push();
    translate(pos.x, pos.y);
    rotate(towardsMouse.heading());
    triangle(0, -10, 0, 10 , 40, 0);
  pop();
}
