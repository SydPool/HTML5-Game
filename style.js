const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let box = {
  x: 100,
  y: 100,
  size: 50,
  color: 'red'
};

let score = 0;

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  if (
    mx >= box.x &&
    mx <= box.x + box.size &&
    my >= box.y &&
    my <= box.y + box.size
  ) {
    score++;
    box.x = Math.random() * (canvas.width - box.size);
    box.y = Math.random() * (canvas.height - box.size);
  }
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw box
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, box.size, box.size);

  // Draw score
  ctx.fillStyle = 'white';
  ctx.font = '20px sans-serif';
  ctx.fillText('Score: ' + score, 10, 30);

  requestAnimationFrame(gameLoop);
}

gameLoop();
