/*

Officer: 3523094
CaseNum: 303-2-81322302-3523094

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	When the mouse button is pressed:
	- Make RestrictedStoreKeyA equal to the value of mouseY
	- Use the 'max' function to prevent RestrictedStoreKeyA from falling below 3

	When any key is released:
	- Increment RestrictedStoreKeyB by 3
	- Use the 'min' function to prevent RestrictedStoreKeyB from going above 19

	Whilst the mouse is being dragged:
	- Make RestrictedStoreKeyC equal to the value of mouseX
	- Use the 'constrain' function to prevent RestrictedStoreKeyC from falling below 3 and going above 16

	Whilst the mouse is being dragged:
	- Increment RestrictedStoreKeyD by 1
	- Use the 'min' function to prevent RestrictedStoreKeyD from going above 21

	Whilst the mouse is being dragged:
	- Make RestrictedStoreKeyE equal to the value of mouseX
	- Use the 'min' function to prevent RestrictedStoreKeyE from going above 78



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var RestrictedStoreKeyA;
var RestrictedStoreKeyB;
var RestrictedStoreKeyC;
var RestrictedStoreKeyD;
var RestrictedStoreKeyE;
var minKeyA = 3;
var keyB;
var maxKeyB = 19;
var keyC;
var minKeyC = 3;
var maxKeyC = 16;
var keyD;
var maxKeyD = 21;
var keyE;
var maxKeyE = 78;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	RestrictedStoreKeyA = 0;
	RestrictedStoreKeyB = 0;
	RestrictedStoreKeyC = 0;
	RestrictedStoreKeyD = 0;
	RestrictedStoreKeyE = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mousePressed() 
{
    RestrictedStoreKeyA = max(mouseY, minKeyA);
}

function keyReleased() 
{
    keyB = RestrictedStoreKeyB + 3;
    RestrictedStoreKeyB =min (keyB, maxKeyB);
}


function mouseDragged() 
{
    keyC = mouseX;
    RestrictedStoreKeyC = constrain(keyC, minKeyC, maxKeyC);
    keyD = RestrictedStoreKeyD + 1;
    RestrictedStoreKeyD = min(keyD, maxKeyD);
    
    keyE = mouseX;
    RestrictedStoreKeyE = min(keyE, maxKeyE);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,RestrictedStoreKeyA, 26);
	pop();

	push();
	translate(120,380);
	drawDial(140,RestrictedStoreKeyB, 23);
	pop();

	push();
	translate(280,170);
	drawDial(140,RestrictedStoreKeyC, 22);
	pop();

	push();
	translate(280,380);
	drawDial(140,RestrictedStoreKeyD, 25);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(RestrictedStoreKeyE);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
