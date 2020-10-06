class Displacement {
  constructor(mass, x, y, vx, vy) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = sqrt(this.mass) * 10;
  }

  setNetForceZero() {
    this.acc.set(0, 0);
  }

  netForce(force) {
    // Use static version of division
    var f = p5.Vector.div(force, this.mass);
    //force.div(this.mass);
    this.acc.add(f);
  }

  boundry() {
    if (this.pos.y > height) {
      if (this.vel.y > 0) this.vel.y *= -1;
    }
    if (this.pos.y < 0) {
      if (this.vel.y < 0) this.vel.y *= -1;
    }
    //  if (this.pos.y > height-this.r) DETERMINE EDGE of circle
    // this.pos = hieght-this.r;

    if (this.pos.x > width) {
      if (this.vel.x > 0) this.vel.x *= -1;
    }
    if (this.pos.x < 0) {
      if (this.vel.x < 0) this.vel.x *= -1;
    }
  }

  update() {
    // set last state to current state before update
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    // set last state
    // check boundries
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 2 * this.r);
  }
}
