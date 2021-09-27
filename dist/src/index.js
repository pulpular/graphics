import { CanvasLocal } from './canvasLocal.js';
let canvas;
let graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
const miCanvas = new CanvasLocal(graphics, canvas);
//miCanvas.paint();
//miCanvas.animate();
function animate() {
    //this.graphics.drawImage(imgLocal.getImage(), 0, 0, this.maxX, this.maxY);
    miCanvas.getGraphics().fillStyle = 'rgb(0,0,0)';
    miCanvas.getGraphics().fillRect(0, 0, canvas.width, canvas.height);
    miCanvas.getGraphics().fillStyle = 'red';
    miCanvas.step += 10;
    miCanvas.step %= 400;
    miCanvas.getGraphics().fillRect(miCanvas.step, miCanvas.step, 10, 10);
    //console.log(this.step)
    miCanvas.paint();
    requestAnimationFrame(animate);
}
animate();
