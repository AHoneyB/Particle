// Main script
var displacement;
var pointMasses = [];
const num = 50;

function setup() {
  const maxv = 5;
  createCanvas(600, 600);
  for (i = 0; i < num; i++) {
    //let m = random(0.5, 3);
    ///let r = sqrt(m) * 10;
    pointMasses[i] = new Displacement(
      random(5, 20),
      (width / num) * i + 10,
      height * 0.1,
      0,
      0
    );
    // pointMasses[i].setToGround();
    // (i + 1) * 2

    //random(-maxv, maxv)
  }
  background(0);
}

function draw() {
  background(0);

  fill(255, 125);
  noStroke();
  rect(0, height / 2, width, height / 2);

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

  var gravity = createVector(0, 0.05);
  // for (i = 0; i < num; i++) {
  //
  // }

  for (i = 0; i < num; i++) {
    var weight = p5.Vector.mult(gravity, pointMasses[i].mass);
    pointMasses[i].netForce(weight);
    if (pointMasses[i].pos.y > height / 2) {
      pointMasses[i].drag();
    }
    pointMasses[i].update();
    pointMasses[i].show();
  }
}
