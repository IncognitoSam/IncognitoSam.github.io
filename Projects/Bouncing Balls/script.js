let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "rgb(0, 0, 0)";
let vMag = 5;
let rMax = 50;
let balls;
let numBalls;
let valid = false;

class Ball {

  constructor(x, y, r, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x - this.r <= 0 || this.x + this.r>= canvas.width) {
      this.dx = - this.dx;
    }
    if (this.y - this.r <= 0 || this.y + this.r> canvas.height) {
      this.dy = - this.dy;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.stroke();
  }
}

function getInput() {
  while (!valid) {
    numBalls = parseInt(prompt("Choose the number of circles, 1 - 1000."));
    if (isNaN(numBalls) || numBalls > 1000 || numBalls < 1) {
      console.log(numBalls);
    } else {
      valid = true;
    }
  }
}

function init() {
  balls = [];
  getInput();
  for (var i = 0; i < numBalls; i++) {
    let r = 10;
    let x = (Math.random() * (canvas.width - 2 * r)) + r;
    let y = (Math.random() * (canvas.height - 2 * r)) + r;
    let dx = (Math.random() * vMag - (.5 * vMag)) * 2;
    let sign;
    if (Math.floor(Math.random() * 2) === 0) {
      sign = -1;
    } else {
      sign = 1;
    }
    let dy = Math.sqrt(Math.pow(vMag, 2) - Math.pow(dx, 2)) * sign;
    let ball = new Ball(x, y, r, dx, dy);
    balls[i] = ball;
    console.log(ball.dy);
    console.log(balls.length);
  }
  run();
}

function run() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < balls.length; i ++) {
    ctx.beginPath();
    balls[i].draw();
    balls[i].move();
  }
  window.requestAnimationFrame(run);
}

// init();
