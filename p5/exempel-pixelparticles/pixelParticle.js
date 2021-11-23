class PixelParticle {

    constructor(x, y, c) 
    {
      // Skapa stjärnan på en slumpmässig position
      // Eftersom vi kommer att börja rita från centrum av ritytan ska
      // positionen vara mellan - halva bredden/höjden och  + halva höjden/bredden
      this.age = 0;

      this.position = createVector(x, y);
      this.originalPosition = createVector(x, y);
      this.c = c;
      //print("PixelParticle created with pos " + this.position + " and color " +  this.color);    
    }

    scramble(w, h) {
      this.position.x = random(-w/2, w/2);
      this.position.y = random(-h/2, h/2);
      
    }
  
    move(target) 
    {
      let currentPosition = this.position;
      
      //age += deltaTime;
      let fromTarget = p5.Vector.sub(currentPosition, target);
      fromTarget.z = 0;
      fromTarget.limit(1);
      //fromTarget = fromTarget.mult(0.1);

      let toOriginal = p5.Vector.sub(this.originalPosition, currentPosition);
      //toOriginal.z = 0;
      toOriginal.limit(20);
      //print(toOriginal);
      
      //this.position = this.position + fromTarget;// * deltaTime * 0.001;
    
      //if(fromTarget.magSq() < 0.45*0.45){      
        this.position.x += fromTarget.x * deltaTime * 0.08;
        this.position.y += fromTarget.y * deltaTime * 0.08;
      //}
      this.position.x += toOriginal.x * deltaTime * 0.01;
      this.position.y += toOriginal.y * deltaTime * 0.01;
    }

    display() {
     
      fill(this.c); // Change the color

      push();
        translate(this.position);
        square(0,0, 1/(1/pixelStep) + 1.1 - (1/pixelStep));
      pop();
    }
  }