var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "rgb(18, 201, 164)";
let y = 0;
let x  =  0;

function draw() {
  if (y >= 500) {
    y = 0;
  } else {
    y += 5;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 1; i < 11; i++) {
    ctx.beginPath();
    ctx.arc(canvas.width /2, canvas.height / 2, 50 - 5 * i, 2 * Math.PI * (y / canvas.height) + (x / canvas.width) *  Math.PI  *  2, 2 * Math.PI * (y / canvas.height), false);
    ctx.stroke();
  }
  window.requestAnimationFrame(draw);
}
draw();

canvas.addEventListener("mousemove", function(e) {
  let rect = document.getElementById("canvas").getBoundingClientRect();
  x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
});
