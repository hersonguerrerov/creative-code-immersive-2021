var img1;
var glitch1;
var img2;
var glitch2;
var img3;
var glitch3;
var img4;
var glitch4;

function preload(){
	img1 = loadImage('Patrick.png');
    img2 = loadImage('Patrick.png');
    img3 = loadImage('Patrick.png');
	img4 = loadImage('Patrick.png');

}

function setup() {
	createCanvas(500, 800);
	background(0);
  
    img1.resize(width/2, height/2);
	glitch1 = new GlitchFX(img1);
    img2.resize(width/2, height/2);
	glitch2 = new GlitchFX(img2);
    img3.resize(width/2, height/2);
	glitch3 = new GlitchFX(img3);
    img4.resize(width/2, height/2);
	glitch4 = new GlitchFX(img4);
  
	noLoop();
}

function draw() { 
	background(255);
	image(glitch1.getOutputImage(),0,0);
  	image(glitch2.getOutputImage(),width/2,0);
    image(glitch3.getOutputImage(),0,height/2);
	image(glitch4.getOutputImage(),width/2,height/2);
}

function keyTyped(){
	glitch1.mosh();
  	glitch2.mosh();
	glitch3.mosh();
	glitch4.mosh();
	redraw();
} 