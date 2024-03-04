/*

Officer: 3523094
CaseNum: 702-2-18840669-3523094

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a Number_Plate of J81ZAP. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of SleuthPI_VehicleObject and the cars in
VehiclesList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car() {
	/*
	This function should do the following: 
	 - increment SleuthPI_VehicleObject's Dist_Amount property by its Gas_Amount property 
	 - add a random amount between -0.06 and 0.06 to SleuthPI_VehicleObject's Shudder_Value property
	 - use the constrain function to constrain SleuthPI_VehicleObject's Shudder_Value property to values between 0.05 and 0.82
	 - call the Run_Engine function passing SleuthPI_VehicleObject as an argument
	*/
	SleuthPI_VehicleObject.Dist_Amount += SleuthPI_VehicleObject.Gas_Amount;

	var randomShudder = random(-0.06, 0.06);

	SleuthPI_VehicleObject.Shudder_Value = constrain(SleuthPI_VehicleObject.Shudder_Value, 0.05, 0.82);

	Run_Engine(SleuthPI_VehicleObject);

}


function Move_Lanes(carObj) {
	/*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordinateA and LaneCoordinateB to effect the change.
	 - finally you should return carObj at the end of the function.
	 hint: You will need to modify the X_Coordinate property of carObj.
	*/
	if (carObj.X_Coordinate == LaneCoordinateA) {
		carObj.X_Coordinate = LaneCoordinateB;
	}
	else {
		carObj.X_Coordinate = LaneCoordinateA;

	}
	return carObj;

}


function Search_Ahead(TargetCarA, TargetCarB) {
	/*
	This function should do the following: 
	 - determine if TargetCarA is in the same lane and less than 200px behind TargetCarB.
	 - do this by comparing the two cars' Dist_Amount properties
	 - if these requirements are met then return the Number_Plate property for TargetCarB. Otherwise return false.
	*/
	if (
		(TargetCarA.X_Coordinate == TargetCarB.X_Coordinate) &&
		((TargetCarB.Dist_Amount - TargetCarA.Dist_Amount) < 200) &&
		((TargetCarB.Dist_Amount - TargetCarA.Dist_Amount) > 0)
	) {
		return TargetCarB.Number_Plate;
	}
	else {
		return false;
	}
}


function Vehicle_IsAtSide(carObj) {
	/*
	This function should do the following: 
	 - determine if car_objis parallel with SleuthPI_VehicleObject.
	 - if car_obj is found to be parallel to SleuthPI_VehicleObject then return 	 - cars are considered parallel if the absolute difference between their Dist_Amount properties is less than 25 px and they have non-matching X_Coordinate properties	*/
	if ((abs(carObj.Dist_Amount - SleuthPI_VehicleObject.Dist_Amount) < 25)
		&& (carObj.X_Coordinate != SleuthPI_VehicleObject.X_Coordinate)
	) {
		return true;
	}
}


function Detect_Criminal() {
	/*
	This function should do the following: 
	 - Check cars passing parallel to SleuthPI_VehicleObject to see if they match the Number_Plate property in the criminal description.
	 - it does this by traversing VehiclesList and calling Vehicle_IsAtSide for each car
.	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the criminal description.
	 - if a match is found then the car in question is assigned to the global variable criminal.
	*/
	for (var i = 0; i < VehiclesList.length; i++) {
		// blue car with a Number_Plate of J81ZAP
		var carObj = VehiclesList[i];
		var s = Vehicle_IsAtSide[carObj];
		if (s && c.Number_Plate == "J81ZAP" && carObj.Vehicle_Model == "blue") {
			criminal = carObj;
		}
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var SleuthPI_VehicleObject;

var roadWidth;
var roadLeftEdge;
var LaneCoordinateA;
var LaneCoordinateB;
var carImages = {};
var criminal;

var VehiclesList = [
	{ X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: -200, Vehicle_Model: 'whiteCar', Number_Plate: 'VB63BT', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 200, Vehicle_Model: 'whiteCar', Number_Plate: 'VPW1ZG', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 600, Vehicle_Model: 'whiteCar', Number_Plate: 'RIIZTY', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 1000, Vehicle_Model: 'greenCar', Number_Plate: 'NEBVZG', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 1400, Vehicle_Model: 'greenCar', Number_Plate: 'NJKXQH', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 1800, Vehicle_Model: 'redCar', Number_Plate: 'LHTD9O', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 2200, Vehicle_Model: 'blueCar', Number_Plate: 'J81ZAP', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 2600, Vehicle_Model: 'blueCar', Number_Plate: 'DKY2TJ', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 3000, Vehicle_Model: 'greenCar', Number_Plate: 'Y3Z5UU', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 3400, Vehicle_Model: 'redCar', Number_Plate: 'AJJVPV', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 3800, Vehicle_Model: 'blueCar', Number_Plate: 'Y2ZN3L', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 4200, Vehicle_Model: 'whiteCar', Number_Plate: '85PEEC', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 4600, Vehicle_Model: 'greenCar', Number_Plate: 'ZTCT5X', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 5000, Vehicle_Model: 'whiteCar', Number_Plate: '9IG8GK', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 5400, Vehicle_Model: 'greenCar', Number_Plate: 'XSBI0X', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 5800, Vehicle_Model: 'blueCar', Number_Plate: 'PMV08U', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 500, Y_Coordinate: 0, Dist_Amount: 6200, Vehicle_Model: 'whiteCar', Number_Plate: 'O6QVHZ', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 6600, Vehicle_Model: 'redCar', Number_Plate: 'T80FQ2', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 7000, Vehicle_Model: 'whiteCar', Number_Plate: 'EX9ZDM', Gas_Amount: 2, exhaust: [] }, { X_Coordinate: 300, Y_Coordinate: 0, Dist_Amount: 7400, Vehicle_Model: 'blueCar', Number_Plate: '7UZ3HB', Gas_Amount: 2, exhaust: [] }
];



function preload() {

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for (var i = 0; i < carTypes.length; i++) {
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup() {
	createCanvas(800, 800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LaneCoordinateA = 300;
	LaneCoordinateB = 500;

	SleuthPI_VehicleObject =
	{
		X_Coordinate: roadLeftEdge + roadWidth / 4,
		Y_Coordinate: 550,
		Dist_Amount: 0,
		Gas_Amount: 3,
		Shudder_Value: 0,
		Vehicle_Model: 'detective',
		Number_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	if (criminal) {
		fill(255);

		text("criminal found !", width / 2, height / 2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	Drive_Car();
	for (var i = 0; i < VehiclesList.length; i++) {
		var b2b = Search_Ahead(SleuthPI_VehicleObject, VehiclesList[i]);
		if (b2b) Move_Lanes(SleuthPI_VehicleObject);
	}
	Detect_Criminal();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < VehiclesList.length; i++) {
		VehiclesList[i].Dist_Amount += VehiclesList[i].Gas_Amount;
		VehiclesList[i].Y_Coordinate = SleuthPI_VehicleObject.Y_Coordinate - VehiclesList[i].Dist_Amount + SleuthPI_VehicleObject.Dist_Amount;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
	stroke(100);
	fill(50);
	rect(roadLeftEdge, 0, roadWidth, 800);
	stroke(255);

	for (var i = -1; i < 20; i++) {
		line(
			roadLeftEdge + roadWidth / 2, i * 100 + (SleuthPI_VehicleObject.Dist_Amount % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (SleuthPI_VehicleObject.Dist_Amount % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(SleuthPI_VehicleObject);
	image
		(
			carImages["detective"],
			SleuthPI_VehicleObject.X_Coordinate - carImages["detective"].width / 2 + random(-SleuthPI_VehicleObject.Shudder_Value, SleuthPI_VehicleObject.Shudder_Value),
			SleuthPI_VehicleObject.Y_Coordinate + random(-SleuthPI_VehicleObject.Shudder_Value, SleuthPI_VehicleObject.Shudder_Value)
		);

	//draw all other cars

	for (var i = 0; i < VehiclesList.length; i++) {
		if (VehiclesList[i].Y_Coordinate < height && VehiclesList[i].Y_Coordinate > -height / 2) {
			image(
				carImages[VehiclesList[i].Vehicle_Model],
				VehiclesList[i].X_Coordinate - carImages[VehiclesList[i].Vehicle_Model].width / 2,
				VehiclesList[i].Y_Coordinate
			);
			Run_Engine(VehiclesList[i]);

			drawExhaust(VehiclesList[i]);
		}
	}

}

function Run_Engine(car) {

	car.exhaust.push({ size: 2, x: car.X_Coordinate, y: car.Y_Coordinate + carImages[car.Vehicle_Model].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.Gas_Amount / 3);
		if (car.Vehicle_Model != "detective") car.exhaust[i].y += (SleuthPI_VehicleObject.Gas_Amount - car.Gas_Amount);
		car.exhaust[i].x += random(-1, 1);
		car.exhaust[i].size += 0.5;

		if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
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
