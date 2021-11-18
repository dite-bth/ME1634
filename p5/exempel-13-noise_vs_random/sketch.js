// Detta exempel visar skillnaderna mellan två olika typer av slumpmässighet
// Random ger en slump i den vanliga betydelsen, som att singla slant ungefär
// Noise ger en "mjukare" slump då den påverkas av tidigare resultat och inte ändras lika mycket

// För att illustrera detta skapar vi två kvadrater som är uppbyggda av pixlar
// Den ena använder random, den andra använder funktionen noise
// Det finns också en ljudvåg som ändrar tonhöjd baserat på färgintensiteten på den pixel som är under muspekaren
// Håll ner musknappen för att starta ljudet, det hörs tydligt hur mycket mjukare noise är...
var soundPlaying = false;

function setup() {
  createCanvas(950, 500);
  pixelDensity(1);
  osc = new p5.Oscillator('sine');

  background(0);
  noStroke();
  randomSquare();
  noiseSquare();

  loadPixels();
}

function draw() {
  let off = (mouseY * width + mouseX) * 4;
  let pix = pixels[off];
  let freq = map(pix, 0, 255, 100, 500);
  let amp = 1;

  if (soundPlaying) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

function mouseReleased() {
  osc.amp(0, 0.5);
  soundPlaying = false;
}

function mousePressed() {
  osc.start();
  soundPlaying = true;
}

function randomSquare() {
    for( let y=50 ; y<=450 ; y++ ){
      for( let x=50 ; x<=450 ; x++ ){
        stroke(random(0, 255));
        point(x, y);
      }
    }
}

function noiseSquare() {
    for( let y=50 ; y<=450 ; y++ ){
      for( let x=500 ; x<=900 ; x++ ){
        stroke(map(noise(x*0.01, y*0.01), 0, 1, 0, 255));
        point(x, y);
      }
    }
}