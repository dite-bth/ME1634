// Bakgrundsbilder från Unsplash: https://unsplash.com/photos/LUPXhXj2ip0 och https://unsplash.com/photos/CvFARq2qu8Y
// Snöflingorna hämtade från Unity Assetstore: https://assetstore.unity.com/packages/2d/textures-materials/snowflakes-sprites-75874
// Bakgrundsmusik hämtad från Soundcloud: https://soundcloud.com/beepcode/free-downloadjingle-bells-full-royalty-free-music-background-music-christmas-music

var bgImage = null; // En variabel för att hålla bakgrundsbilden
var bgSound = null; // En variabel för att hålla ett bakgrundsljud

var snowflakeImages = []; // En array för att hålla alla bilder på snöflingor

var snowflakes = []; // En array för att hålla alla snöflingeobjekt
var numberOfSnowflakes = 150; // En variabel för att hålla antalet snöflingor vi vill skapa

var musicIsPlaying = false; // en variabel som håller reda på om musiken spelas eller inte

// Nu ska vi använda funktionen preload för att ladda in saker som bilder och ljud innan programmet startar
function preload() {

  // Ladda in en mp3 som bakgrundsljud
  bgSound = loadSound("jinglebells.mp3");

  // Ladda in en av två bakgrundsbilder smumpmässigt men en chans på ca 50 % per bild
  if( random(0, 100) > 50 ) {
    bgImage = loadImage("background1_small.jpg");
  }
  else {
    bgImage = loadImage("background2_small.jpg");
  }
  
  // Ladda in alla snöflingebilder och spara i en array
  for(let i=0 ; i<=15 ; i++) {
    let filename = "snowflakes/" + eval(i+1) + ".png";
    snowflakeImages[i] = loadImage(filename);
  }
}

function setup() {
  
  // För att ta bort varningar i Chrome
  getAudioContext().suspend();

  // Anpassad storlek baserat på bilden
  createCanvas(bgImage.width, bgImage.height);

  //Skapa snöflingeobjekt och spara i en array
  for( let i=0 ; i<numberOfSnowflakes ; i++) {
    snowflakes.push(new Snowflake());
  }

}

function draw() {
  //Rita om bakgrunden med bakgrunsbilden
  background(bgImage);

  // Rita ut en text
  drawGlowText("God jul!", 250, 300);

  //Rita ut alla snäflingor
  for( snowflake of snowflakes ) {
    snowflake.update();
    snowflake.show();
  }
}

// Funktion för att rita ut en text med "glow" och skugga
function drawGlowText(txt, x, y) {
  for( let xPos=-1 ; xPos<=1 ; xPos++) {
    for( let yPos=-1 ; yPos<=1 ; yPos++) {
      push();
      translate(x + xPos, y + yPos);
      rotate(-PI/5);

      //Rita ut skugga med mycket transparens
      textSize(96);
      stroke(0, 0, 0, 3);
      fill(0,3);
      for( let i=2 ; i<=5 ; i++) {
        strokeWeight(i*i);
        text(txt, 20, 50);
      }

      //Rita ut "glow" med mycket transparens
      textSize(72);
      stroke(255, 255, 0, 10);
      for( let i=2 ; i<=5 ; i++) {
        strokeWeight(i*i);
        text(txt, 0, 0);  
      }

      //Rita ut texten med m indre transparens
      noStroke();
      fill(255, 255, 200, 60);
      text(txt, 0, 0);

      pop();
    }
  }
}

// Fördefinierad funktion som anropas om musknappen trycks ned
function mousePressed() {
  // Flera webbläsare kräver idag att användaren aktivt interagerar
  // med en webbsida för att ljud ska kunna spelas
  if( getAudioContext().state !== 'running') {
    userStartAudio();
  }

  //Om musiken inte spelas så startar vi den annars stoppar vi den
  if( !musicIsPlaying ) {
    bgSound.loop();
    musicIsPlaying = true;
  }
  else {
    bgSound.stop();
    musicIsPlaying = false;
  }
}