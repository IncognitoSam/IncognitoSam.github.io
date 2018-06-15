let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

canvas.addEventListener("mousemove", drawLines);

function drawLines(e) {
  let rect = document.getElementById("canvas").getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = 'rgb(100, 20, 90)';

  // X axis and Y axis
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.moveTo(x, 0);
  ctx.lineTo(x, canvas.height);
  ctx.stroke();

  // Fill top left square
  ctx.fillStyle = "#307cf4";
  ctx.fillRect(0, 0, x, y);

  // Fill bottom left square
  ctx.fillStyle = "#84d843";
  ctx.fillRect(0, y, x, canvas.height - y);

  // Fill top right square
  ctx.fillStyle = "#732199";
  ctx.fillRect(x, 0, canvas.width - x, y);

  // Fill bottom right square
  ctx.fillStyle = "#db5a27";
  ctx.fillRect(x, y, canvas.width - x, canvas.height - y);
}
