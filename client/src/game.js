var canvas; 

function init()
{
    canvas = document.getElementById("mainCanvas");   
    setup();
    setInterval(run , 33); 
}

function setup() {
    // Your setup code goes here
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);
}

function run() {
    // Your run code goes here
}

init();