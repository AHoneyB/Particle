var displacement;
var pointMasses = [];
const num = 10;

function setup() {
  const maxv = 10;
  createCanvas(600, 600);
  for (i = 0; i < num; i++) {
    pointMasses[i] = new Displacement(
      random(1, 10),
      (width / num) * i + 10,
      height / 2,
      5,
      0
    );
    pointMasses[i].setToGround();

    //random(-maxv, maxv)
  }
  background(0);
}

function draw() {
  background(0);

  var gravity = createVector(0, 0.05);
  if (mouseIsPressed) {
    var wind = createVector(1, 0);
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
    // pointMasses[i].netForce(weight);
    pointMasses[i].friction();
    pointMasses[i].update();
    //pointMasses[i].setNetForceZero();
    pointMasses[i].boundry();
    pointMasses[i].show();
  }
}
