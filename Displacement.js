class Displacement {
  constructor(mass, x, y, vx, vy) {
    this.r = sqrt(this.mass) * 10;
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.mass = mass;
    this.r = 5 * sqrt(this.mass);
  }

  setToGround() {
    this.pos.y = height - this.r;
  }

  setNetForceZero() {
    this.acc.set(0, 0);
  }

  drag() {
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let c = 0.5;
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);
    this.netForce(drag);
  }

  netForce(force) {
    // Use static version of division
    var f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  boundry() {
    // Added radius to particle
    if (this.pos.y > height - this.r) {
      if (this.vel.y > 0) {
        this.vel.y *= -1;
        this.pos.add(this.vel);
      }
    }
    if (this.pos.y < this.r) {
      if (this.vel.y < 0) {
        this.vel.y *= -1;
        this.pos.add(this.vel);
      }
    }

    if (this.pos.x > width - this.r) {
      if (this.vel.x > 0) {
        this.vel.x *= -1;
        this.pos.add(this.vel);
      }
    }
    if (this.pos.x < this.r) {
      if (this.vel.x < 0) {
        this.vel.x *= -1;
        this.pos.add(this.vel);
      }
    }
  }

  update() {
    // set last state to current state before update
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // set last state
    // check boundries

    this.boundry();
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 2 * this.r);
  }
}
