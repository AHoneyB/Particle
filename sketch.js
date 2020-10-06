var displacement;
var pointMasses = [];
const num = 1;

function setup() {
  const maxv = 10;
  createCanvas(600, 600);
  for (i = 0; i < num; i++) {
    pointMasses[i] = new Displacement(
      random(1, 6),
      width / 2,
      height / 2,
      random(-maxv, maxv),
      random(-maxv, maxv)
    );
    //pointMasses[i] = new Displacement(i + 1, width / 2, height * 0.1, 0, 0);
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
    pointMasses[i].netForce(weight);
    pointMasses[i].update();
    pointMasses[i].boundry();
    pointMasses[i].show();
  }
}
