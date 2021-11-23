/*
PixelParticles by Jonas Svegland 2021

Copying and distribution of this file, with or without modification,
are permitted in any medium without royalty provided the copyright
notice and this notice are preserved.  This file is offered as-is,
without any warranty.*/

var pixelParticles = [];
var numPixels;
var img;
var fr = 30;
var cam;
var pixelStep = 4;


function preload() {
  img = loadImage('Samuel_Atkins_Eliot_by_Gilbert_Stuart.jpg');
}


function setup() { 
  createCanvas(1024, 768 , WEBGL);
  frameRate(fr);
  //pixelDensity(1);

  numPixels = 0;

  cam = createCamera();
  cam.move(0,0, -200);
  
  go();
}

function go() {
  let pixelIndex = 0;
  img.loadPixels();

  const d = pixelDensity();
  print("Img w,h " + img.width + ", " + img.height);

  for (let x = 0; x < img.width; x=x+pixelStep) {
    for (let y = 0; y < img.height; y=y+pixelStep) {
      const i = 4 * d*(y * d*img.width + x);
      const [r, g, b] = [img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]]; // get colors
      pixelParticles[pixelIndex] = new PixelParticle(x, y, color(r,g,b));
      pixelParticles[pixelIndex].scramble(width, height);
      
      pixelIndex++;
      numPixels++;
    }
  }

  print("Num pixels counted: " + numPixels);
  print("Num PixelParticles generated: " + (pixelIndex));
}

function draw() {
  background(0, 0, 0);
  //orbitControl();

  ellipse(mouseX - width/2, mouseY - height/2, 10, 10);
  noStroke();
  push();  
    translate(-img.width/2,-img.height/2);
    for(let i = 0; i < numPixels; i++ ) {
      if(pixelParticles[i] != null) {   
        pixelParticles[i].move(createVector(mouseX - width/2+img.width/2, mouseY - height/2+img.height/2, 0));
        pixelParticles[i].display();
      }
    }
  pop();
}