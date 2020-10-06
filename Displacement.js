class Displacement {
  constructor(mass, x, y, vx, vy) {
    this.r = sqrt(this.mass) * 10;
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.mass = mass;

    this.posLast = this.pos;
    this.velLast = this.vel;
    this.accLast = this.acc;
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

  friction() {
    let diff = height - (this.pos.y + this.r);
    if (diff < 1) {
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      let mu = 0.1;
      let normal = this.mass;
      friction.setMag(mu * normal);
      this.netForce(friction);
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

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 2 * this.r);
  }
}
