
export class CanvasLocal {
  //atributos
  protected graphics: CanvasRenderingContext2D;
  maxX: number;
  maxY: number ;
  pixelSize: number;
  rWidth: number = 12.0;
  rHeight: number = 10.0;
  centerX: number;
  centerY: number;

  public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = g;
    this.maxX = canvas.width - 1;
    this.maxY = canvas.height - 1;
    
    this.pixelSize = Math.max(this.rWidth/this.maxX, this.rHeight/this.maxY);
    this.centerX = this.maxX/10; 
    this.centerY = this.maxY/ 10*8;
    
  }

  iX( x: number):number { return Math.round(this.centerX + x/this.pixelSize); }
  iY( y: number):number { return Math.round(this.centerY - y/this.pixelSize); }
  
  drawLine(x1: number, y1: number, x2: number, y2:number) {
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }
  o(x:number, y:number, s:number):void {
    this.drawLine(this.iX(x+0.2*s), this.iY(y+0), this.iX(x+0.7*s), this.iY(y+0));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+0), this.iX(x+0.9*s), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.2*s), this.iX(x+0.9*s), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0.9*s), this.iY(y+0.8*s), this.iX(x+0.7*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.7*s), this.iY(y+1*s), this.iX(x+0.2*s), this.iY(y+1*s));
    this.drawLine(this.iX(x+0.2*s), this.iY(y+1*s), this.iX(x+0.0), this.iY(y+0.8*s));
    this.drawLine(this.iX(x+0), this.iY(y+0.8*s), this.iX(x+0.0), this.iY(y+0.2*s));
    this.drawLine(this.iX(x+0.0), this.iY(y+0.2*s), this.iX(x+0.2*s), this.iY(y+0));
  }
  paint() {
    this.o(1, 1, 2);
    this.o(3, 1, 0.5);
    this.o(3.5,1, 1);
  }

}

