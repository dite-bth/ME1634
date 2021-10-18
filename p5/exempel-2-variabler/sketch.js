// Video-dimensioner
// 360p = 480×360
// 480p = 852x480
// 780p = 1280x720
// 1080p = 1920 x 1080

// Skapa 4 variabler för att hålla position med x och y-koordinater samt höjd och bredd för en ellips
// Variabler kan vara globala när de skapas utanför en funktion.
// En global variabel är åtkomlig i hela programmet
var x;
var y;
var b;
var h;

function setup() {  
  
  // Skapa en rityta (canvas) med dimensionen 480p
  createCanvas(852, 480);

  // Tilldela värden till våra variabler.
  // Vissa variabeler finns redan definierade av P5 från början som width och height vilka håller dimensionen för ritytan
  x = width / 2;
  y = height / 2;
  b = 120;
  h = 80;
}

function draw() {
  
  // Färglägg ritytans bakgrund enlit variabeln bgcolor.
  // Variabler kan vara lokala om de skapas innuti en funktion.
  // En lokal variabel är bara tillgänglig inuti funktionen.
  var bgColor = 220;
  background(bgColor);
  
  // Rita ellips med värden enlgt våra variabler 
  ellipse(x,y,b,h);
}