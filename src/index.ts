//import { CanvasLocal } from './canvasLocal.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

function drawLine(x1, y1, x2, y2) {
  graphics.beginPath();
  graphics.moveTo(x1, y1);
  graphics.lineTo(x2, y2);
  graphics.closePath();
  graphics.stroke();
}

//graphics.fillRect(-50, 240.8, 100, 50);

drawLine(100, 100, 200, 100)
drawLine(200,100, 150, 150)
drawLine(150,150,100,100)
//const miCanvas:CanvasLocal = new CanvasLocal(graphics, canvas);
//miCanvas.paint();
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