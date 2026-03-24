// Typing
const text = ["Software Engineer", "Backend Developer", "Tech Enthusiast"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
  current = text[i];

  if (deleting) j--; else j++;

  document.getElementById("typing").textContent = current.substring(0, j);

  if (!deleting && j === current.length) {
    deleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (deleting && j === 0) {
    deleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();

// Partículas
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let p = [];
for (let i = 0; i < 60; i++) {
  p.push({x: Math.random()*innerWidth, y: Math.random()*innerHeight});
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  p.forEach(pt => {
    pt.y += 0.3;
    if (pt.y > innerHeight) pt.y = 0;
    ctx.fillStyle = "#00ffff";
    ctx.fillRect(pt.x, pt.y, 2, 2);
  });
  requestAnimationFrame(draw);
}
draw();
