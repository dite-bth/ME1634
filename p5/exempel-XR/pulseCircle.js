// Detta är en klass för en pulserande cirkel
// Klassen fungerar som en mall för att skapa objekt av samma typ men med lite olika värden

class PulseBall {
    // En klass har en konstruktor som är den funktion som anropas då ett objekt ska instansieras (skapas) utifrån klassen (mallen)
    constructor(x=0, y=0, z=0, r=random(5, 50)) {
        // Vektorer för position och hastighet
        this.pos = createVector(x, y, z);
        this.vel = p5.Vector.random3D();
        this.speed = random(-5, 5);
        this.vel.setMag(this.speed);
        //createVector(random(-2, 2), random(-2, 2), random(-2, 2)); // ge vektorn en slummpmässig riktning och magnitud (storlek)

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
        this.radius = 10 + (sin(this.pulse) * this.max_radius) / 2 + this.max_radius / 2;
        this.pulse += this.pulse_speed;
        translate(this.pos.x, this.pos.y, this.pos.z);
    }
    
    // En metod för att kontrollera så att cirkeln inte försviner ur ritytan
    checkBounds() {
        // Kontrollera ifall cirkeln är på väg ur ritytan och vänd i så fall på riktningen
        // Vi gör detta både i x-led och y-led
        if(this.pos.x < 0 - width/2 || this.pos.x > width/2) {
            this.vel.x = this.vel.x * -1;
        }

        if(this.pos.y < 0 - height/2 || this.pos.y > height/2) {
            this.vel.y = this.vel.y * -1;
        }

        if(this.pos.z < -500 || this.pos.z > 500) {
            this.vel.z *= -1
        }
    }

    checkCollision() {
        for( let i=0 ; i<num_spheres ; i++) {
        }
    }
    
    // En metod för att rita ut cirkeln med nuvarande värden
    show() {
        //Rita ut cirkeln på nuvarande plats och med nuvarande radie
        noStroke();
        emissiveMaterial(this.col);
        sphere(this.radius);
    }
  }
  