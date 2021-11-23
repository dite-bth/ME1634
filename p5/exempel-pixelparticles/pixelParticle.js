/*
Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.  This file is offered as-is,
without any warranty.*/

// PixelParticle class
class PixelParticle {

    // private class members that controls the significance of the movement from the target
    #fromTargetScale = 0.08;
    // private class members that controls the significance of the movement to the original position
    #toOriginalScale = 0.01;

    // constructor used whe instanciating objects of this class
    constructor(x, y, c) 
    {
      // create a vector object to hold the current x and y coordinates
      this.position = createVector(x, y);
      // create a vector object to hold the original x and y coordinates
      this.originalPosition = createVector(x, y);
      this.particleColor = c;
      // Debug the created PixelParticle object, uncomment the line below if needed
      // print("PixelParticle created with pos " + this.position + " and color " +  this.color);    
    }

    // Scramble method (functions is called methods when part of a class)
    // This function randomizes the position of the pixel particle basedc on 
    // the w and h parameters
    scramble(w, h) {

      this.position.x = random(-w/2, w/2);
      this.position.y = random(-h/2, h/2);
    }
  
    // Move method (functions is called methods when part of a class)
    // This function calculates two vectors; one away from the target parameter
    // and one towards the orginal position of the pixel particle. These vectors are 
    // then used to translate the pixel particle position
    move(target) { 
      
      // calculate a vector from the target towards the pixel particle position
      let fromTarget = p5.Vector.sub(this.position, target);
      // limit the lenght of this vector to 1 (like normalizing without making the length 1)
      fromTarget.limit(1);
      
      // calculate a vector from the particle position towards original pixel particle position
      let toOriginal = p5.Vector.sub(this.originalPosition, this.position);
      // limit the lenght of this vector to 20
      toOriginal.limit(20);

      // add the fromTargets vector and toOriginal vector to the current pixel particle 
      // position, scaling it by delta time to move the same distance in all frame rates
      // and then scaling the translation with the private members fromTargetScale and toOriginalScale
      // that controls the significance of each movement
      this.position.x += fromTarget.x * deltaTime * this.#fromTargetScale;
      this.position.y += fromTarget.y * deltaTime * this.#fromTargetScale;
      this.position.x += toOriginal.x * deltaTime * this.#toOriginalScale;
      this.position.y += toOriginal.y * deltaTime * this.#toOriginalScale;
    }

    // Display method (functions is called methods when part of a class)
    // This function draws a square with a calulated size at the position of this pixel particle
    display() {
      // Change the color of fills to the particle color
      fill(this.particleColor); 

      // push a new transform context to the stack
      push();
        // translate this transform context to the pixel particle current position
        translate(this.position);
        
        // draw a square in the center of this transform context effecivly this call draws 
        // the squarre visibly at the pixel particle position although it's drawn at it's own origo
        // this seems faster than drawing the square at the correct position without translating 
        // the transform.
        // The size of the square is calculated based of the pixelStep used when parsing the image.
        // Pixel step of 1 results in a size of 1 + 1.1 - 1/1 => 1.1
        // Pixel step of 2 results in a size of 2 + 1.1 - 1/2 => 2.6
        // Pixel step of 3 results in a size of 3 + 1.1 - 1/3 => ~3.8
        square(0,0, pixelStep + 1.1 - (1/pixelStep));
      
      // pop the transform context from the stack
      pop();
    }
  }