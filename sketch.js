let plankton = [];
let fish1;
let school = [];
let weed = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 30);

  for(s = 0; s < 1000; s ++){
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    plankton[s] = new Krill(x, y, r, g, 255);
  }
  
  for(w = 0; w < 100; w ++){ 
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(10, 50)
    weed[w] = new Seaweed(rx, ry, rr);
  }

  for(c = 0; c < 20; c ++){ 
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(10, 50)
    school[c] = new Fish(rx, ry, rr);
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

class Krill {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  step() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  path() {
    strokeWeight(2);
    stroke(this.r, this.g, this.b);
    point(this.x, this.y);
  }
}

class Fish {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-4, 4);
    this.y += random(-4, 4);
  }

  show() {
    fill(160, 0, 255);
    noStroke();
    ellipse(this.x, this.y, 80, 40);
  }

  edges() {
    if (this.x < 15) {
      this.x = 15;
    } else if (this.x > width - 15) {
      this.x = width - 15;
    }
    if (this.y < 15) {
      this.y = 15;
    } else if (this.y > height - 15) {
      this.y = height - 15;
    }
  }
}

class Seaweed {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-4, 4);
    this.y += random(-4, 4);
  }

  show() {
    fill(0, 165, 100);
    noStroke();
    rect(this.x, this.y, 100, 1);
  }

  edges() {
    if (this.x < 15) {
      this.x = 15;
    } else if (this.x > width - 15) {
      this.x = width - 15;
    }
    if (this.y < 15) {
      this.y = 15;
    } else if (this.y > height - 15) {
      this.y = height - 15;
    }
  }
}

function draw() {
  background(0, 50, 50, 20);
  fill(0, 25)
  ellipse(windowWidth/2, windowHeight/2, 500, 500)
  for(let x = 0; x < plankton.length; x++){
    plankton[x].step();
    plankton[x].path();
  }

  for(let x = 0; x < school.length; x++){
    school[x].move();
    school[x].show();
    school[x].edges();
  }
  
  for(let x = 0; x < weed.length; x++){
    weed[x].move();
    weed[x].show();
    weed[x].edges();
  }
}
