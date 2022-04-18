import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const miCanvas = new CanvasLocal(graphics, canvas);
miCanvas.paint();
/*let dibujar = false
let x1, y1;
//
function movimiento(evt) {
  graphics.clearRect(0,0, 640,480)
  if (!dibujar)
  {
    x1 = evt.offsetX
    y1 = evt.offsetY
    dibujar = true;
  }
  else
  {
    graphics.strokeRect(x1, y1 , Math.abs(x1 - evt.offsetX), Math.abs(y1 - evt.offsetY));
    dibujar = false;
    }
  
}


canvas.addEventListener('click', movimiento)*/ 
