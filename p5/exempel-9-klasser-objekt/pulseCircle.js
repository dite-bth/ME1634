// Detta är en klass för en pulserande cirkel
// Klassen fungerar som en mall för att skapa objekt av samma typ men med lite olika värden

class PulseCircle {
    // En klass har en konstruktor som är den funktion som anropas då ett objekt ska instansieras (skapas) utifrån klassen (mallen)
    constructor(x=width/2, y=height/2, r=random(25, 100)) {
        // Vektorer för position och hastighet
        this.pos = createVector(x, y);
        this.vel = createVector(random(-2, 2), random(-2, 2)); // ge vektorn en slummpmässig riktning och magnitud (storlek)

        // Värden för cirkelns startradie (som är dess största möjliga radie) och för nuvarande radie
        this.max_radius = r;
        this.radius = r;

        // Värden för nuvarande pulsvärde (vinkel) för sinusfunktionen och en förändringshastighet (hur mycket vinkeln ändras varje gång)
        this.pulse = 0;
        this.pulse_speed = random(0.05, 0.2);

        // Färgen på cirkeln
        this.col = color(random(100, 255), random(100, 255), random(100, 255));
    }
    
    // En metod som anropas för att förändra cirkelns position och radie
    update() {
        // Flytta cirkeln genom att addera hastighetsvektorn till positionsvektorn
        this.pos.add(this.vel);

        // Ändra cirkelns radie genom en sinusfunktion baserat på en viss pulshastighet
        this.radius = (sin(this.pulse) * this.max_radius) / 2 + this.max_radius / 2;
        this.pulse += this.pulse_speed;
    }
    
    // En metod för att kontrollera så att cirkeln inte försviner ur ritytan
    checkBounds() {
        // Kontrollera ifall cirkeln är på väg ur ritytan och vänd i så fall på riktningen
        // Vi gör detta både i x-led och y-led
        if(this.pos.x < 0 || this.pos.x > width) {
        this.vel.x = this.vel.x * -1;
        }

        if(this.pos.y < 0 || this.pos.y > height) {
        this.vel.y = this.vel.y * -1;
        }
    }
    
    // En metod för att rita ut cirkeln med nuvarande värden
    show() {
        //Rita ut cirkeln på nuvarande plats och med nuvarande radie
        noStroke();
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
  }
  