import { Camera } from "./camera";

var camera = new camera();
var canvas; 

function init()
{
    canvas = document.getElementById("mainCanvas");
    canvas.width = document.body.clientWidth; // document.width is obsolete
    canvas.height = document.body.clientHeight; // document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;
    setup();
    setInterval(run , 33); 
}

function setup() {
    // Your setup code goes here
    console.log(camera.getPosition.getX());
    console.log(document.body.clientHeight);
}

function run() {
    // Your run code goes here
}

init();