 
var camera = new Camera();
const canvas = document.getElementById("mainCanvas"); 
const ctx = canvas.getContext("2d");

const image = new Image(60, 60); 
image.onload = drawImageActualSize; 
 
image.src = "src/img/ship1.png"; 

function drawImageActualSize() {  
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this, 0, 0, this.width, this.height);  
}

function init()
{ 
    canvas.width = document.body.clientWidth; // document.width is obsolete
    canvas.height = document.body.clientHeight; // document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;
    setup();
    setInterval(run , 33); 
}

function setup() {
    // Your setup code goes here  
}

function run() {
    // Your run code goes here
}

init();