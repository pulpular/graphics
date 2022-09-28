
export class CanvasLocal {
  //atributos
  protected graphics: CanvasRenderingContext2D;
  protected rWidth:number;
  protected rHeight:number;
  protected maxX: number;
  protected maxY: number;
  protected pixelSize: number;
  protected centerX: number;
  protected centerY: number;
  protected limInf: number;
  protected limSup: number;
  
      
  public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
    this.graphics = g;
    this.rWidth = 12;
    this.rHeight= 10;
    this.maxX = canvas.width - 1
    this.maxY = canvas.height - 1;
    this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
    this.centerX = this.maxX/10*2;
    this.centerY = this.maxY / 8 * 7;
    this.limInf = 1;
    this.limSup = 9;
  }

  iX(x: number): number{return Math.round(this.centerX + x/this.pixelSize);}
  iY(y: number): number{return Math.round(this.centerY - y / this.pixelSize); }
  
  drawLine(x1: number, y1: number, x2: number, y2:number) {
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }

  drawOval(x1: number, y1: number, r:number) {
    this.graphics.beginPath();
    this.graphics.arc(x1, y1, r, 0, 2 * Math.PI, false);
    this.graphics.fill();
  }

  fx(x:number):number {
    return (1/x);
  }

  fillFuncion( tpaso: number, r:number, g:number, b:number) {
    
      // Color de relleno
    this.graphics.fillStyle = `rgb(${r},${g},${b})`;
      // Comenzamos la ruta de dibujo, o path
      this.graphics.beginPath();
      // Mover a la esquina superior izquierda
      this.graphics.moveTo(this.iX(this.limInf), this.iY(this.fx(this.limInf)));
      // Dibujar la línea hacia la derecha
      for (let x = this.limInf; x <= this.limSup; x += tpaso) {
        this.graphics.lineTo(this.iX(x), this.iY(this.fx(x)));
      }
      this.graphics.lineTo(this.iX(this.limSup), this.iY(this.fx(this.limSup)));
      this.graphics.lineTo(this.iX(this.limSup), this.iY(0));
      this.graphics.lineTo(this.iX(this.limInf), this.iY(0));
      // Y dejamos que la última línea la dibuje JS
      this.graphics.closePath();
      // Hacemos que se dibuje
      //this.graphics.stroke();
      // Lo rellenamos
      this.graphics.fill();
    }

  fillCuadritos(tpaso: number, r: number, g: number, b: number) {
    let areas = new Array(0);
    // Color de relleno
    this.graphics.fillStyle = `rgba(${r},${g},${b}, 0.5)`;
    // Mover a la esquina superior izquierda
    for (let x = this.limInf; x <= this.limSup-tpaso; x += tpaso) {
      this.graphics.beginPath();
      areas.push(tpaso*this.fx(x));
      this.graphics.moveTo(this.iX(x), this.iY(this.fx(x)));
      this.graphics.lineTo(this.iX(x+tpaso), this.iY(this.fx(x)));
      this.graphics.lineTo(this.iX(x+tpaso), this.iY(0));
      this.graphics.lineTo(this.iX(x), this.iY(0));
 
    // Y dejamos que la última línea la dibuje JS
      this.graphics.closePath();
      this.graphics.fill();
    }
    console.log(areas)
  }
  
  paint() {
    

    //dibuja la cuadricula
    /*this.graphics.strokeStyle = 'lightgray';
    for (let x = -5; x <= 5; x+=1){
      this.drawLine(this.iX(x), this.iY(-5), this.iX(x), this.iY(5));
    }
    for (let y = -5; y <= 5; y+=1){
      this.drawLine(this.iX(-5), this.iY(y), this.iX(5), this.iY(y));
    }*/
    
    //dibuja las divisiones
    this.graphics.strokeStyle = 'green';
    this.drawLine(this.iX(-1), this.iY(0), this.iX(9), this.iY(0));
    this.drawLine(this.iX(0), this.iY(-1), this.iX(0), this.iY(3));
    for (let x = -1; x <= 9; x++){
      this.graphics.strokeStyle = 'green';
      this.drawLine(this.iX(x), this.iY(-0.1), this.iX(x), this.iY(0));
      this.graphics.strokeStyle = 'blue';
      this.graphics.strokeText(x + "", this.iX(x-0.05), this.iY(-0.4));
    }
    for (let y = -1; y <= 3; y++){
      this.drawLine(this.iX(-0.1), this.iY(y), this.iX(0), this.iY(y));
      this.graphics.strokeText(y+"", this.iX(-0.3), this.iY(y-0.05));
    }
    
    
    /*this.graphics.strokeText("X", this.iX(4.8), this.iY(0.2));
    this.graphics.strokeText("Y", this.iX(-0.2), this.iY(4.8));

    */
    //dibujar la funcion
    this.graphics.strokeStyle = 'blue';
    this.graphics.fillStyle = 'blue';
    let paso: number = 0.1;
    let cont=0
    for (let x = this.limInf-0.5; x <= this.limSup; x+=paso){
      this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x+paso), this.iY(this.fx(x+paso)));
      /*if (cont%10 === 0) {
        this.drawOval(this.iX(x), this.iY(this.fx(x)), this.iX(0.1)-this.iX(0));
      }  */
      cont++;
    }
    this.fillFuncion(paso, 0, 200, 25);
    this.fillCuadritos(1, 0, 200, 25);
    /*this.graphics.strokeStyle = 'red';
    this.drawLine(this.iX(0), this.iY(0), this.iX(2), this.iY(0));
    this.drawLine(this.iX(2), this.iY(0), this.iX(1), this.iY(1.5));
    this.drawLine(this.iX(1), this.iY(1.5), this.iX(0), this.iY(0));*/
    
  }

}