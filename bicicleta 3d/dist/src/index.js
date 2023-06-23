import { Obj3D } from './Obj3D.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
        obj = new Obj3D();
        if (obj.read(contenido)) {
            //sDir = sDir1;
            cv = new CvHLines(graphics, canvas);
            cv.setObj(obj);
            cv.paint();
        }
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    // Viewpoint
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
            alert('datos no validos');
    }
    else
        alert('aun no has leido un archivo');
}
function eyeDownFunc() {
    vp(0, 0.1, 1);
}
function eyeUpFunc() {
    vp(0, -0.1, 1);
}
function eyeLeftFunc() {
    vp(-0.1, 0, 1);
}
function eyeRightFunc() {
    vp(0.1, 0, 1);
}
function incrDistFunc() {
    vp(0, 0, 2);
}
function decrDistFunc() {
    vp(0, 0, 0.5);
}
var rotationInProgress = false; // Variable de control
function pzaIzq() {
    // Comprobar si la rotación está en progreso
    if (rotationInProgress) {
        // Si la rotación está en progreso, detenerla
        rotationInProgress = false;
    }
    else {
        // Si la rotación no está en progreso, iniciarla
        rotationInProgress = true;
        // Iniciar la rotación
        rotateDerecha();
    }
}
function rotateDerecha() {
    // Realizar la rotación del objeto
    var af = -1;
    var af2 = -1;
    var af3 = -1;
    var af4 = 1;
    Rota3D.initRotate(obj.w[1004], obj.w[1005], af3 * Math.PI / 180);
    for (var i = 11; i <= 50; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1000], obj.w[1001], af * Math.PI / 180);
    for (var i = 51; i <= 82; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1002], obj.w[1003], af2 * Math.PI / 180);
    for (var i = 83; i <= 114; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1006], obj.w[1007], af4 * Math.PI / 180);
    for (var i = 115; i <= 134; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1006], obj.w[1007], af4 * Math.PI / 180);
    for (var i = 171; i <= 230; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
    cv.setObj(obj);
    cv.paint();
    // Comprobar si la rotación aún está en progreso
    if (rotationInProgress) {
        // Si la rotación está en progreso, continuar la rotación en el siguiente frame
        requestAnimationFrame(rotateDerecha);
    }
}
function pzaDer() {
    // Comprobar si la rotación está en progreso
    if (rotationInProgress) {
        // Si la rotación está en progreso, detenerla
        rotationInProgress = false;
    }
    else {
        // Si la rotación no está en progreso, iniciarla
        rotationInProgress = true;
        // Iniciar la rotación
        rotateObject();
    }
}
function rotateObject() {
    // Realizar la rotación del objeto
    var af = 1;
    var af2 = 1;
    var af3 = 1;
    var af4 = -1;
    Rota3D.initRotate(obj.w[1004], obj.w[1005], af3 * Math.PI / 180);
    for (var i = 11; i <= 50; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1000], obj.w[1001], af * Math.PI / 180);
    for (var i = 51; i <= 82; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1002], obj.w[1003], af2 * Math.PI / 180);
    for (var i = 83; i <= 114; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1006], obj.w[1007], af4 * Math.PI / 180);
    for (var i = 115; i <= 134; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    Rota3D.initRotate(obj.w[1006], obj.w[1007], af4 * Math.PI / 180);
    for (var i = 171; i <= 230; i++) {
        obj.w[i] = Rota3D.rotate(obj.w[i]);
    }
    cv.setObj(obj);
    cv.paint();
    // Comprobar si la rotación aún está en progreso
    if (rotationInProgress) {
        // Si la rotación está en progreso, continuar la rotación en el siguiente frame
        requestAnimationFrame(rotateObject);
    }
}
function init() {
    obj = new Obj3D();
    cv = new CvHLines(graphics, canvas);
    // Asignar eventos a los botones
    // document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
    // document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
    // document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
    // document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
    // document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
    // document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);
    document.getElementById('pzaIzq').addEventListener('click', pzaIzq, false);
    document.getElementById('pzaDer').addEventListener('click', pzaDer, false);
    // Asignar evento al input de carga de archivo
    document.getElementById('file-input').addEventListener('change', leerArchivo, false);
}
init();
var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
        vp(0, 0.1 * difY / 50, 1);
        Piy = Pfy;
        vp(0.1 * difX, 0 / 50, 1);
        Pix = Pfx;
    }
}
function noDraw() {
    flag = false;
}
canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);
