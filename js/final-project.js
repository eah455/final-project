var w = window.innerWidth;
var h = window.innerHeight;
var fr = 40;
var r1, r1;
var d;
var x1, x2, y1, y2;
var angle = Math.PI / 4;
var randAngle;
var startDraw = false;

function setup() {
	// canvas setup
	createCanvas(w, h);
	background(255);
	angleMode(RADIANS);
	frameRate(fr);
	
	// randomly generated radiuses 
	r1 = Math.floor(Math.random() * (h/2-300)) + 300;
	r2 = Math.floor(Math.random() * (200-100)) + 100;
	
	// drawing the two ellipses
	ellipseMode(CENTER);
	noFill();
	ellipse(w/2, h/2, r1*2, r1*2);
	ellipse(w/2, h/2, r2*2, r2*2);
	
	// random angle for the outer circle
	randAngle = Math.random();
	console.log(randAngle);
}

function draw() {
	
	if (startDraw == false) return;
		
		// points on the circles
		x1 = (r1 * (Math.cos(angle))) + (w/2);
		y1 = (h/2) - (r1 * (Math.sin(angle)));
		x2 = (r2 * (Math.cos(angle*(randAngle)))) + (w/2);
		y2 = (h/2) - (r2 * (Math.sin(angle*(randAngle))));
	
		// drawing two circles at those points
		ellipseMode(CENTER);
		noStroke();
		fill('rgb(140, 140, 140)');
		ellipse(x1, y1, 10, 10);
		// ellipse(x2, y2, 10, 10);
	
		// randomly generated color for the line
		var r = random(0, 255);
		var g = random(0, 255);
		var b = random(0, 255);
		stroke(r, g, b);
		strokeWeight(0.5);
		// drawing the line that connects the two points
		line(x1, y1, x2, y2);

		// animation
		angle = angle + (10 * (Math.PI / 180));
}

function keyPressed() {
	console.log('A key has been pressed');
	document.getElementById('message').style.opacity = 0;
	startDraw = !startDraw;
	console.log(startDraw);
}

