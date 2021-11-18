let size = 10;
let speed = 4;
let sizeTrigger = 30;
let sizeMax = 1400;
let t = [];

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  for (let i = 0; i < 80; i++) {
    t.push(new TunnelPiece());
  }
  t[0].active = true;
}

function draw() {
  background(207,82,48);
 // stroke(241,141,158);
  strokeWeight(4);
  noFill();
  //fill(152,209,198);
  for (let i = 0; i < t.length; i++) {
    if (t[i].active) {
      t[i].update();
      t[i].display();
      if (t[i].size > sizeTrigger) {
        if (i < t.length - 1) {
          t[i + 1].active = true;
        } else {
          t[0].active = true;
        }
      }
      if (t[i].size > sizeMax) {
        t[i].reset();
      }
    }
  }
}

class TunnelPiece {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = size;
    this.speed = speed;
    this.rot = 0;
    this.active = false;
    this.prevState = false;
  }

  update() {
    if (this.prevState != this.active) {
      let dx = map(noise(0.002 * frameCount), 0.0, 1.0,0, width);
      let dy = map(noise(0.002 * frameCount), 0.0, 1.0,0, width);
      this.x = dx;
      this.y = dy;
      this.prevState = this.active;
    }
    this.size += this.speed;
  }
  reset() {
    this.active = false;
    this.prevState = false;
    this.size = size;
  }

  display() {
    push();
    this.rot = map(this.x, 0, width, -HALF_PI, HALF_PI);
    translate(this.x, this.y);
    rotate(this.rot);
    stroke(241,141,158);
    //rect(0, 0, this.size/10);
    square(0,0,this.size, this.size/20);
    //stroke(241,241,58);
    //circle(0,0,this.size/2);
    pop();
  }
}