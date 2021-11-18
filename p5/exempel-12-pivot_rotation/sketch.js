/* Detta exemel viser hur det går att rotera kring en specifik punkt i en bild eller form
   En sådan punkt kallas ofta för en pivot och kan vara viken punkt som helst i en bild.
*/

var myImage;
var angle;
var width;

function preload() {
  myImage = loadImage("text.png");
}

function setup() {
  createCanvas(350, 350);
  angle = 0;
}

function draw() {
  background(0);

  // Här roterar bilden kring sin centerpunkt genom P5s imageMode(CENTER)
  // Observera att vi måste lägga till halva bredden och höjden i Translate()
  // för att bilden ska ritas ut på rätt plats (den utgår ju nu från mitten).
  push();
  imageMode(CENTER);
  translate(100, 100);
  rotate(angle);
  image(myImage, 0, 0, 100, 100);
  fill(255,0,0);
  ellipse(0,0, 10)
  pop();

  // Här roterar bilden kring sit övre vänstra hörn vilket är standard
  push();
  translate(200, 50);
  fill(255,0,0);
  ellipse(0,0, 10)
  rotate(angle);
  image(myImage, 0, 0, 100, 100);
  pop();

  // Här roterar bilden i en vald pivot-punkt som är längst ner i mitten på bilden.
  // Först gör vi Translate till vår pivot-punkt, sen roterar vi och sen flyttar vi oss tillbaka
  // lika mycket som vår pivot-punkt med Translate och ritar sedan ut bilden
  push();
  let pivotX = 50;
  let pivotY = 100;
  translate(50 + pivotX, 200 + pivotY);
  fill(255,0,0);
  ellipse(0,0, 10)
  rotate(angle);
  translate(-pivotX, -pivotY);
  image(myImage, 0, 0, 100, 100);
  pop();

  // Samma som föregående fast med an annan vald pivot-punkt (nedre högra hörnet)
  push();
  pivotX = 100;
  pivotY = 100;
  translate(200 + pivotX, 200 + pivotY);
  fill(255,0,0);
  ellipse(0,0, 10)
  rotate(angle);
  translate(-pivotX, -pivotY);
  image(myImage, 0, 0, 100, 100);
  pop();

  angle += 0.02;
}