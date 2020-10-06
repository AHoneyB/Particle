var displacement;
var pointMasses = [];
const num = 1;

function setup() {
  const maxv = 5;
  createCanvas(600, 600);
  for (i = 0; i < num; i++) {
    //let m = random(0.5, 3);
    ///let r = sqrt(m) * 10;
    pointMasses[i] = new Displacement(
      1,
      width / 2,
      height / 2,
      random(-maxv, maxv),
      0
    );
    // pointMasses[i] = new Displacement(
    //   random(1, 6),
    //   i * (width / num) + 5,
    //   height / 2,
    //   random(-maxv, maxv),
    //   random(-maxv, maxv)
    // );
    // pointMasses[i] = new Displacement(0.1, width * 0.5, height * 0.5, 1, 0);
  }
  background(0);
}

function draw() {
  background(0);
  for (i = 0; i < num; i++) {
    pointMasses[i].setNetForceZero();
  }

  var gravity = createVector(0, 0.005);
  if (mouseIsPressed) {
    var wind = createVector(0.1, 0);
    for (i = 0; i < num; i++) {
      pointMasses[i].netForce(wind);
    }
  }

  var gravity = createVector(0, 1);
  for (i = 0; i < num; i++) {
    var weight = p5.Vector.mult(gravity, pointMasses[i].mass);
    pointMasses[i].netForce(weight);
  }

  for (i = 0; i < num; i++) {
    //pointMasses[i].friction();
    pointMasses[i].update();
    pointMasses[i].show();
  }
}
