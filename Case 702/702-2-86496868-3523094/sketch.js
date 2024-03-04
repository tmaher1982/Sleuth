/*

Officer: 3523094
CaseNum: 702-2-86496868-3523094

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a Licence_Plate of RQ7PAP. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Sleuth_CarObject and the cars in
vehicle_data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveVehicle() {
	/*
	This function should do the following: 
	 - increment Sleuth_CarObject's Miles_Amt property by its Speed_Val property 
	 - add a random amount between -0.05 and 0.05 to Sleuth_CarObject's Shudder_Val property
	 - use the constrain function to constrain Sleuth_CarObject's Shudder_Val property to values between 0.08 and 1.13
	 - call the CycleCarMotor function passing Sleuth_CarObject as an argument
	*/
	Sleuth_CarObject.Miles_Amt += Sleuth_CarObject.Speed_Val;

	var randomShudder = random(-0.05, 0.05);

	Sleuth_CarObject.Shudder_Val += randomShudder;

	Sleuth_CarObject.Shudder_Val = constrain(Sleuth_CarObject.Shudder_Val, 0.08, 1.13);

	CycleCarMotor(Sleuth_CarObject);

}


function MoveLanes(targetVehicle) {
	/*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_position_a and lane_position_b to effect the change.
	 - finally you should return targetVehicle at the end of the function.
	 hint: You will need to modify the Coordinate_X property of targetVehicle.
	*/

	if (targetVehicle.Coordinate_X == lane_position_a) {
		targetVehicle.Coordinate_X = lane_position_b;
	}
	else {
		targetVehicle.Coordinate_X = lane_position_a;
	}
}


function CheckAhead(targetCar) {
	/*
	This function should do the following: 
	 - determine if targetCar is in the same lane and less than 200px behind any of the cars in vehicle_data.
	 - do this by traversing vehicle_data and comparing each car's Miles_Amt property to that of targetCar.
	 - use the Licence_Plate property of each car to ignore cars that match targetCar.
	 - if you find a car that matches these requirements then return the car object. Otherwise return false.
	*/
	for (i = 0; i < vehicle_data.length; i++) {
		if ((targetCar.Coordinate_X == vehicle_data[i].Coordinate_X)
			&& ((targetCar.Miles_Amt - vehicle_data[i].Miles_Amt) < 200)
			&& (((targetCar.Miles_Amt - vehicle_data[i].Miles_Amt) > 0))
			&& (targetCar.Licence_Plate != vehicle_data[i].Licence_Plate)
		) {
			return vehicle_data[i];
		}
		else {
			return false;
		}
	}
}


function VehicleParallel(target_car_a, target_car_b) {
	/*
	This function should do the following: 
	 - determine if target_car_ais parallel with target_car_b.
	 - if target_car_a is found to be parallel to target_car_b then return 	 - cars are considered parallel if the absolute difference between their Miles_Amt properties is less than 25 px and they have non-matching Coordinate_X properties	*/
	if (
		(abs((target_car_a.Miles_Amt - target_car_b.Miles_Amt) < 25)) && (target_car_a.Coordinate_X != target_car_b.Coordinate_X)
	) {
		return target_car_b;
	}
	else { return false; }
}


function SpotCriminal() {
	/*
	This function should do the following: 
	 - Check cars passing parallel to Sleuth_CarObject to see if they match the Licence_Plate property in the criminal description.
	 - it does this by traversing vehicle_data and calling VehicleParallel for each car
.	 - if a positive result is returned then the Licence_Plate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
	for (var i = 0; i < vehicle_data.length; i++) {
		var car = VehicleParallel(Sleuth_CarObject, vehicle_data[i]);
		// if (car.Licence_Plate == "RQ7PAP" && car.Car_Category == "blueCar") {
		// 	//return vehicle_data[i];

	}
}




//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Sleuth_CarObject;

var roadWidth;
var roadLeftEdge;
var lane_position_a;
var lane_position_b;
var carImages = {};
var criminal;

var vehicle_data = [
	{ Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: -200, Car_Category: 'greenCar', Licence_Plate: 'FRXQVO', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 200, Car_Category: 'blueCar', Licence_Plate: 'BEYMS7', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 600, Car_Category: 'redCar', Licence_Plate: '5E4AQ6', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 1000, Car_Category: 'greenCar', Licence_Plate: 'AHK6I7', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 1400, Car_Category: 'blueCar', Licence_Plate: 'PRM2WS', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 1800, Car_Category: 'blueCar', Licence_Plate: 'SSU2IA', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 2200, Car_Category: 'whiteCar', Licence_Plate: 'R3VAD3', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 2600, Car_Category: 'redCar', Licence_Plate: 'Y5ANRC', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 3000, Car_Category: 'blueCar', Licence_Plate: 'RQ7PAP', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 3400, Car_Category: 'blueCar', Licence_Plate: 'DMFZ7P', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 3800, Car_Category: 'redCar', Licence_Plate: 'WG27Z0', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 4200, Car_Category: 'redCar', Licence_Plate: 'TVX2KX', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 4600, Car_Category: 'redCar', Licence_Plate: '67WDU9', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 5000, Car_Category: 'redCar', Licence_Plate: 'GDAE5T', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 5400, Car_Category: 'greenCar', Licence_Plate: 'B7Z57R', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 5800, Car_Category: 'redCar', Licence_Plate: '6K7NP0', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 6200, Car_Category: 'greenCar', Licence_Plate: 'X30BVP', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 6600, Car_Category: 'whiteCar', Licence_Plate: '1N9UNC', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 300, Coordinate_Y: 0, Miles_Amt: 7000, Car_Category: 'whiteCar', Licence_Plate: 'DRMKQ2', Speed_Val: 2, exhaust: [] }, { Coordinate_X: 500, Coordinate_Y: 0, Miles_Amt: 7400, Car_Category: 'whiteCar', Licence_Plate: '4C1AGO', Speed_Val: 2, exhaust: [] }
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
	lane_position_a = 300;
	lane_position_b = 500;

	Sleuth_CarObject =
	{
		Coordinate_X: roadLeftEdge + roadWidth / 4,
		Coordinate_Y: 550,
		Miles_Amt: 0,
		Speed_Val: 3,
		Shudder_Val: 0,
		Car_Category: 'detective',
		Licence_Plate: '5L3UTH',
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

	DriveVehicle();
	var b2b = CheckAhead(Sleuth_CarObject);
	if (b2b) MoveLanes(Sleuth_CarObject);
	var a = SpotCriminal();
	if (a != false) criminal = a;


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < vehicle_data.length; i++) {
		vehicle_data[i].Miles_Amt += vehicle_data[i].Speed_Val;
		vehicle_data[i].Coordinate_Y = Sleuth_CarObject.Coordinate_Y - vehicle_data[i].Miles_Amt + Sleuth_CarObject.Miles_Amt;
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
			roadLeftEdge + roadWidth / 2, i * 100 + (Sleuth_CarObject.Miles_Amt % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (Sleuth_CarObject.Miles_Amt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(Sleuth_CarObject);
	image
		(
			carImages["detective"],
			Sleuth_CarObject.Coordinate_X - carImages["detective"].width / 2 + random(-Sleuth_CarObject.Shudder_Val, Sleuth_CarObject.Shudder_Val),
			Sleuth_CarObject.Coordinate_Y + random(-Sleuth_CarObject.Shudder_Val, Sleuth_CarObject.Shudder_Val)
		);

	//draw all other cars

	for (var i = 0; i < vehicle_data.length; i++) {
		if (vehicle_data[i].Coordinate_Y < height && vehicle_data[i].Coordinate_Y > -height / 2) {
			image(
				carImages[vehicle_data[i].Car_Category],
				vehicle_data[i].Coordinate_X - carImages[vehicle_data[i].Car_Category].width / 2,
				vehicle_data[i].Coordinate_Y
			);
			CycleCarMotor(vehicle_data[i]);

			drawExhaust(vehicle_data[i]);
		}
	}

}

function CycleCarMotor(car) {

	car.exhaust.push({ size: 2, x: car.Coordinate_X, y: car.Coordinate_Y + carImages[car.Car_Category].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.Speed_Val / 3);
		if (car.Car_Category != "detective") car.exhaust[i].y += (Sleuth_CarObject.Speed_Val - car.Speed_Val);
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
