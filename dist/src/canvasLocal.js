export class CanvasLocal {
    constructor(g, canvas) {
        this.rWidth = 12.0;
        this.rHeight = 10.0;
        this.graphics = g;
        this.maxX = canvas.width - 1;
        this.maxY = canvas.height - 1;
        this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
        this.centerX = this.maxX / 10;
        this.centerY = this.maxY / 10 * 8;
    }
    iX(x) { return Math.round(this.centerX + x / this.pixelSize); }
    iY(y) { return Math.round(this.centerY - y / this.pixelSize); }
    drawLine(x1, y1, x2, y2) {
        this.graphics.beginPath();
        this.graphics.moveTo(x1, y1);
        this.graphics.lineTo(x2, y2);
        this.graphics.closePath();
        this.graphics.stroke();
    }
    fx(x) {
        return Math.pow(x, 3);
    }
    paint() {
        /*this.drawLine(this.iX(0), this.iY(0), this.iX(1), this.iY(0));
        this.drawLine(this.iX(1), this.iY(0), this.iX(1), this.iY(1));
        this.drawLine(this.iX(1), this.iY(1), this.iX(0), this.iY(1));
        this.drawLine(this.iX(0), this.iY(1), this.iX(0), this.iY(0));*/
        /*triasngulo con base = 2, altura de 5
          this.drawLine(this.iX(-3), this.iY(-1), this.iX(3), this.iY(-1));
          this.drawLine(this.iX(3), this.iY(-1), this.iX(0), this.iY(3));
          this.drawLine(this.iX(0), this.iY(3), this.iX(-3), this.iY(-1));
        /*this.drawLine(this.iX(-3), this.iY(0), this.iX(3), this.iY(0));
        this.drawLine(this.iX(0), this.iY(-3), this.iX(0), this.iY(3));
          this.graphics.strokeStyle = "gray";
          for (let i = -3; i <= 3; i++){
            this.drawLine(this.iX(i), this.iY(-10), this.iX(i), this.iY(10));
            this.graphics.fillText(i+"", this.iX(i), this.iY(-0.2))
            this.drawLine(this.iX(-10), this.iY(i), this.iX(10), this.iY(i));
            this.graphics.fillText(i+"", this.iX(0.1), this.iY(i))
          }
      
          this.graphics.strokeStyle = "red";
          for (let x = -3; x < 3; x+=0.1){
      
      
            this.drawLine(this.iX(x), this.iY(this.fx(x)), this.iX(x+0.1), this.iY(this.fx(x+0.1)));
            
          }*/
        let lado = 4;
        let side = 0.95 * lado;
        let sideHalf = 0.5 * side;
        let xCenter = 6;
        let yCenter = 5;
        let h = sideHalf * Math.sqrt(3);
        let xA, yA, xB, yB, xC, yC, xA1, yA1, xB1, yB1, xC1, yC1, xD, yD, xD1, yD1, p, q;
        q = 0.05;
        p = 1 - q;
        /*xA = xCenter - sideHalf;
        yA = yCenter - 0.5 * h;
        xB = xCenter + sideHalf;
        yB = yA;
        xC = xB;
        yC = yCenter + 0.5 * h;
        xD = xA;
        yD = yC; */
        for (let m = 0; m < 1; m++) {
            for (let n = 0; n < 1; n++) {
                xA = 1 + n * lado - sideHalf;
                yA = 1 + m * lado - 0.5 * h;
                xB = 1 + n * lado + sideHalf;
                yB = yA;
                xC = xB;
                yC = 1 + m * lado + 0.5 * h;
                xD = xA;
                yD = yC;
                for (let i = 0; i < 20; i++) {
                    this.drawLine(this.iX(xA), this.iY(yA), this.iX(xB), this.iY(yB));
                    this.drawLine(this.iX(xB), this.iY(yB), this.iX(xC), this.iY(yC));
                    this.drawLine(this.iX(xC), this.iY(yC), this.iX(xD), this.iY(yD));
                    this.drawLine(this.iX(xD), this.iY(yD), this.iX(xA), this.iY(yA));
                    xA1 = p * xA + q * xB;
                    yA1 = p * yA + q * yB;
                    xB1 = p * xB + q * xC;
                    yB1 = p * yB + q * yC;
                    xC1 = p * xC + q * xD;
                    yC1 = p * yC + q * yD;
                    xD1 = p * xD + q * xA;
                    yD1 = p * yD + q * yA;
                    xA = xA1;
                    xB = xB1;
                    xC = xC1, xD = xD1;
                    yA = yA1;
                    yB = yB1;
                    yC = yC1, yD = yD1;
                }
            }
        }
        /* for (let i = 0; i < 50; i++){
            this.drawLine(xA, yA, xB, yB);
            this.drawLine(xB, yB, xC, yC);
            this.drawLine(xC, yC, xA, yA);
            xA1 = p * xA + q * xB;
            yA1 = p * yA + q * yB;
            xB1 = p * xB + q * xC;
            yB1 = p * yB + q * yC;
            xC1 = p * xC + q * xA;
            yC1 = p * yC + q * yA;
            xA = xA1; xB = xB1; xC = xC1;
            yA = yA1; yB = yB1; yC = yC1;
        } */
    }
}
