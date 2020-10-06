var displacement;
var pointMasses = [];
const num = 200;

function setup() {
  const maxv = 2;
  createCanvas(600, 600);
  for (i = 0; i < num; i++) {
    pointMasses[i] = new Displacement(
      random(0.5, 3),
      width / 2,
      height / 2,
      random(-maxv, maxv),
      random(-maxv, maxv)
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

  var gravity = createVector(0, 0);
  for (i = 0; i < num; i++) {
    var weight = p5.Vector.mult(gravity, pointMasses[i].mass);
    pointMasses[i].netForce(weight);
  }

  for (i = 0; i < num; i++) {
    pointMasses[i].update();
    pointMasses[i].show();
  }
}
