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

  //Sätt pixeldensiteten till 1 för att göra det enklare att läsa av pixlarna i bilden
  pixelDensity(1);

  //Skapa en oscilator för ljudet
  osc = new p5.Oscillator('sine');

  background(0);
  noStroke();

  //Skapa en fyrkan med slumpmässiga pixlar (Random)
  randomSquare();

  //Skapa en fyrkan med slumpmässiga pixlar (Noise)
  noiseSquare();

  //Läs in alla pixlar (P5 funktion som skapar en array pixels med alla pixlar)
  loadPixels();
}

function draw() {
  // Den pixelarray som skapas via loadPixels() håller alla pixlar i canvasenp5.BandPass()
  // Arrayen blir 4 ggr så lång som antalet pixlar eftersom R, G, B och Alpha-värdena lagras var för sig efter varandra för varje pixel
  // För att välja rätt position i arrayen baserat på muspekaren måste vi alltså multiplicera bredden med muspekarens y-potition
  // och sedan lägga till x-positionen. Detta multipliceras sedan med 4 på grund av ovanstående, (varje pixel representeras med fyra värden)
  let off = (mouseY * width + mouseX) * 4;

  // Läs ut första värder (Röd) för pixeln i fråga (eftersom det är gråskala kommer grän och blå ha samma värde)
  let pix = pixels[off];

  // Välj en frekvens för ljudet baserat på pixelns färgintensitet
  let freq = map(pix, 0, 255, 100, 500);

  //Sätt ljudstyrkan till 1
  let amp = 1;

  // Om ljudet är igång (dvs någon håller ner musknappen)
  // Då ska vi spela upp ljudet på vald frekvens
  if (soundPlaying) {
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
}

// Funkmtion som anropas när någon trycker ner musknappen
function mouseReleased() {
  osc.amp(0, 0.5);
  soundPlaying = false;
}

// Funktio som anropas när någon släpper musknappen
function mousePressed() {
  osc.start();
  soundPlaying = true;
}

// Funktion som ritar ut en kvadrat med slumpmässiga pixlar (Random)
function randomSquare() {
    for( let y=50 ; y<=450 ; y++ ){
      for( let x=50 ; x<=450 ; x++ ){
        stroke(random(0, 255));
        point(x, y);
      }
    }
}

// Funktion som ritar ut en kvadrat med slumpmässiga pixlar (Noise)
function noiseSquare() {
    for( let y=50 ; y<=450 ; y++ ){
      for( let x=500 ; x<=900 ; x++ ){
        stroke(map(noise(x*0.01, y*0.01), 0, 1, 0, 255));
        point(x, y);
      }
    }
}