/*

Officer: 3523094
CaseNum: 702-0-71838069-3523094

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of sleuthPICarObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car() {
	/*
	This function should do the following: 
	 - increment sleuthPICarObject's kmsAmt property by its speedValue property 
	 - add a random amount between -0.06 and 0.06 to sleuthPICarObject's engineShudderValue property
	 - use the constrain function to constrain sleuthPICarObject's engineShudderValue property to values between 0.02 and 0.85
	 - call the Run_Car_motor function passing sleuthPICarObject as an argument
	*/

	sleuthPICarObject.kmsAmt += sleuthPICarObject.speedValue;
	sleuthPICarObject.engineShudderValue += random(-0.06, 0.06);
	sleuthPICarObject.engineShudderValue = constrain(sleuthPICarObject.engineShudderValue, 0.02, 0.85);
	Run_Car_motor(sleuthPICarObject);

}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPICarObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload() {
	carImages.detective = loadImage("cars/detective.png");
}

function setup() {
	createCanvas(800, 800);

	sleuthPICarObject =
	{
		xPosition: roadLeftEdge + roadWidth / 4,
		yPosition: 300,
		kmsAmt: 0,
		speedValue: 3,
		engineShudderValue: 0,
		vehicleType: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);


	Drive_Car();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
	stroke(100);
	fill(50);
	rect(roadLeftEdge, 0, roadWidth, 800);
	stroke(255);

	for (var i = -1; i < 20; i++) {
		line(
			roadLeftEdge + roadWidth / 2, i * 100 + (sleuthPICarObject.kmsAmt % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (sleuthPICarObject.kmsAmt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(sleuthPICarObject);
	image
		(
			carImages["detective"],
			sleuthPICarObject.xPosition - carImages["detective"].width / 2 + random(-sleuthPICarObject.engineShudderValue, sleuthPICarObject.engineShudderValue),
			sleuthPICarObject.yPosition + random(-sleuthPICarObject.engineShudderValue, sleuthPICarObject.engineShudderValue)
		);

}

function Run_Car_motor(car) {

	car.exhaust.push({ size: 2, x: car.xPosition, y: car.yPosition + carImages[car.vehicleType].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.speedValue / 3);
		car.exhaust[i].x += random(-1, 1);
		car.exhaust[i].size += 0.5;

		if (car.exhaust[i].y > height) {
			car.exhaust.splice(i, 1);
		}
	}
}


function drawExhaust(car) {
	noStroke();
	for (var i = 0; i < car.exhaust.length; i++) {
		var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
		fill(125, alpha);
		ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);

	}
}
