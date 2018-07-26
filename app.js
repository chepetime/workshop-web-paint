/**
 * Web Paint
 */

const canvas = document.getElementById('draw');
const context = canvas.getContext('2d');

const canvasConfig = {
  lineWidth: 20,
  lineCap: 'round'
}

let pos = {x: 0, y: 0};

function draw(e) {
  if (e.buttons !== 1) return;

  const color = document.getElementById('hex').value;

  context.lineWidth = canvasConfig.lineWidth;
  context.lineCap = canvasConfig.lineCap;
  context.strokeStyle = color;

  context.moveTo(pos.x, pos.y);
  setPosition(e);
  context.lineTo(pos.x, pos.y);

  context.stroke();
}

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function initEvents() {
  window.addEventListener('resize', handleResize);

  document.addEventListener('mousemove', draw);

  document.addEventListener('mousedown', setPosition);

  document.addEventListener('mouseenter', setPosition);
}

function handleResize() {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

function init() {
  handleResize();
  initEvents();
}

init();
