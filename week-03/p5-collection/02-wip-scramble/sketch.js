var img;
var glitch;

function preload(){
	img = loadImage('Helen-3.png');
}

function setup() {
	createCanvas(700, 800);
	img.resize(700,800);
	imageMode(CENTER);
	glitch = new GlitchFX(img);
	noLoop();
}

function draw() {
	background(255);
	image(glitch.getOutputImage(),width/2,height/2);
}

function keyTyped(){
	glitch.testScramble();
	// glitch.testScanlines();
	// glitch.testWarp();
	// glitch.testPixelBurn();
	// glitch.testNoiseEffect();
	// glitch.testScanner();
	// glitch.testJPGDegrade();
	redraw();
}