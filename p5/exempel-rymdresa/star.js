// Klass för en stjärna

class Star {
    constructor(speed) {
      // Skapa stjärnan på en slumpmässig position
      // Eftersom vi kommer att börja rita från centrum av ritytan ska
      // positionen vara mellan - halva bredden/höjden och  + halva höjden/bredden
      this.x = random(-width/2, width/2);
      this.y = random(-height/2, height/2);

      // Vi skapar ett fiktivt avständ till stjärnan
      this.distance = random(0, 1000);

      // Hastigheten med vilken stjärnan kommer mot en
      this.speed = speed;
    }
  
    update() {
      // Vid varje uppdatering minskar vi avståndet till stjärnan med hastigheten
      this.distance -= this.speed;

      // Om avståndet till stjärnan blir mindre än 1 återställer vi stjärnan
      // Dvs den har nu åkt ur bild och vi "återanvänder" den som en ny stjärna
      // som startar på en ny slumpmässig position på max-avståndet
      if( this.distance < 1) {
        this.x = random(-width/2, width/2);
        this.y = random(-height/2, height/2);  
        this.distance = 1000;
      }      
    }

    show() {
      fill(255);
      noStroke();

      // Vi gör stjärnan större och störra baserat på avständet
      // Funktionen map väljer ett värde i ett intervall baserat på värden i ett annat intervall
      // Nedan väljs en storlek mellan 12 och 0 baserat på nuvarande avstånd i intervallet 0 - 1000
      let size = map(this.distance, 1000, 0, 1, 15);

      // Vi använder push och pop för att ge stjärnan en egen tranform-kontext att förflytta och rita ut sig i
      push();
        // FLytta nollpunkten till muspekarens position om msknappen är intryckt
        // annars flytta nollpunkten till mitten av ritytan
        // mouseIsPressed är en variabel som P5 skapar som är true eller false baserat på om musknappen är intryckt eller ej
        // mouseX och mouseY är variabler som P5 skapar och som håller muspekarens nuvarande position i x- och y-led
        if(mouseIsPressed) {
          translate(mouseX, mouseY);
        }
        else {
          translate(width/2, height/2);
        }

        // Räkna ut en ny position för stjärnan baserat på förhållandet mellan dess startposition och nuvarande avständ
        // Genom att dividera startpositionen med avständet får vi ett förhållande mellan 0 och 1
        let xPos = map( this.x / this.distance, 0, 1, 0, width);
        let yPos = map( this.y / this.distance, 0, 1, 0, height);
        
        ellipse(xPos, yPos, size, size);
      pop();
    }
  }