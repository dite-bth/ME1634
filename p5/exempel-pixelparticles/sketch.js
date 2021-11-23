/*Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.  This file is offered as-is,
without any warranty.*/

/*
PixelParticles sketch using p5js by Jonas Svegland 2021

This sketch loads an image and converts it's pixels to particles 
that avoid a point in space (currently mouse cursor) and tries to 
get back to it's original position.*/

// Array holding instanciated pixel particle objects
var pixelParticles = [];

// Object holding the loaded image
var img;

// The frame rate we want to aim for
var frameRate = 30;

// Object holding the created 3D camera
var camera;

// Number of steps taken whe looping through pixels in the image 
// to create particles. Increase to create less pixel particles 
// 1 = create a particle for each pixel, 
// 2 = create a particle every other pixel etc.
const pixelStep = 2;

// variable to count the number of pixels 
var numPixels;

// Preload function
// Preloads an image so that it's alread done loading before running setup
function preload() {
  // Load an image from an URL
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Samuel_Atkins_Eliot%2C_by_Gilbert_Stuart.jpg/389px-Samuel_Atkins_Eliot%2C_by_Gilbert_Stuart.jpg');
}

// Setup function
// Setup up everything before calling draw
function setup() {
  // create a canvas
  createCanvas(1024, 768 , WEBGL);

  // set the frame rate we aim for
  frameRate(frameRate);

  // resize the loaded image by a third, custom for this exact image
  img.resize(img.width/3, img.height/3);

  // create and position the camera closer to the image
  camera = createCamera();
  camera.move(0,0, -400);
  
  // reset the numPixels counter
  numPixels = 0;

  // start creating the pixel particles
  go();
}

// Go function
// This function instanciates objects to represent pixels from an image
function go() {

  // variable to hold the index of the next available slot in the pixel particle array
  let pixelIndex = 0;

  // load pixles from the image into an array that we can parse through
  img.loadPixels();

  // get the current pixel density (most surely 1 in most cases)
  const d = pixelDensity();
  
  // Debug width and height of the image, uncomment the line below if needed
  // print("Img w,h " + img.width + ", " + img.height);

  // Iterate through the image pixel array based on image width and height
  // using the pixelStep variable as an increment
  for (let x = 0; x < img.width; x=x+pixelStep) {
    for (let y = 0; y < img.height; y=y+pixelStep) {
      // calculate an index in the image pixel array taking in account the pixel density (if any)
      let i = 4 * d*(y * d*img.width + x);
      
      // get the red, green and blue color of the pixel (ignoring any alpha)
      let red = img.pixels[i];
      let green = img.pixels[i+1];
      let blue = img.pixels[i+2];

      // instanciate a PixelParticle object with this pixels position and color
      pixelParticles[pixelIndex] = new PixelParticle(x, y, color(red,green,blue));
      
      // randomize the pixleParticles position by calling the scramble function
      pixelParticles[pixelIndex].scramble(width, height);
      
      // increment the index
      pixelIndex++;
      // increment the pixel counter
      numPixels++;
    }
  }

  // Debug the number of pixels counted, uncomment the line below if needed
  // print("Num pixels counted: " + numPixels);
  // Debug the number of pixels particles created, uncomment the line below if needed
  //print("Num PixelParticles generated: " + (pixelIndex));
}

// Draw function
// This function iterates throgh all pixel particles and calls the method move and display on each one
function draw() {
  // set the background to black
  background(0, 0, 0);
  
  //Uncomment the line below if you want orbit control using the mouse
  //orbitControl();

  // turn off stroke
  noStroke();
  
  // set fill color to white
  fill(color(255, 255, 255)); 

  // draw an ellipse at the mouse coordinates. The mouse coordinates has to be compensated
  // because we're using WEBGL thats puts the center in the middle of the canvas, instead of the 
  // upper left corner
  ellipse(mouseX - width/2, mouseY - height/2, 5, 5);
  
   // push a new transform context to the stack
  push();
    // translate this transform context so that the the center of all pixel particles becomes 0,0,0
    translate(-img.width/2,-img.height/2);

    // Iterate through each pixel particle in the array and call the method move and display on each one
    // The mouse coordinates has to be compensated for this transform context. Maybe theres a more accurate solution
    // but this kinda works :)
    for(let i = 0; i < numPixels; i++ ) {
      if(pixelParticles[i] != null) {   
        pixelParticles[i].move(createVector(mouseX - width/2+img.width/2, mouseY - height/2+img.height/2, 0));
        pixelParticles[i].display();
      }
    }
   // pop the transform context from the stack
  pop();
}