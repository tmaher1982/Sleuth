/*

Officer: 3523094
CaseNum: 702-1-32061958-3523094

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthPI_vehicle and the cars in
carList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveCar() {
	/*
	This function should do the following: 
	 - increment sleuthPI_vehicle's kms_amnt property by its accel_val property 
	 - add a random amount between -0.1 and 0.1 to sleuthPI_vehicle's shudder_val property
	 - use the constrain function to constrain sleuthPI_vehicle's shudder_val property to values between 0.01 and 0.76
	 - call the TurnoverEngine function passing sleuthPI_vehicle as an argument
	*/
	sleuthPI_vehicle.kms_amnt += sleuthPI_vehicle.accel_val;
	var randomShud = random(-0.1, 0.1);
	sleuthPI_vehicle.shudder_val += randomShud;
	sleuthPI_vehicle.shudder_val = constrain(sleuthPI_vehicle.shudder_val, 0.01, 0.76);
	TurnoverEngine(sleuthPI_vehicle);
}


function SwitchLanes(target_vehicle) {
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosA and LanePosB to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the x_coordinate property of target_vehicle.
	*/
	if (target_vehicle.x_coordinate == LanePosA) {
		target_vehicle.x_coordinate = LanePosB;
	}
	else {
		target_vehicle.x_coordinate = LanePosA;
	}
	return target_vehicle;
}


function CarIsAhead(car_objA, car_objB) {
	/*
	This function should do the following: 
	 - determine if car_objA is in the same lane and less than 200px behind car_objB.
	 - do this by comparing the two cars' kms_amnt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
	if (
		(car_objA.x_coordinate == car_objB.x_coordinate) &&
		((car_objB.kms_amnt - car_objA.kms_amnt) < 200)
		&& ((car_objB.kms_amnt - car_objA.kms_amnt) > 0)
	) {
		return true;
	}

	else {
		return false;
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthPI_vehicle;

var roadWidth;
var roadLeftEdge;
var LanePosA;
var LanePosB;
var carImages = {};

var carList = [
	{ x_coordinate: 300, y_coordinate: 0, kms_amnt: -200, car_type: 'redCar', licence_plate: '589CDL', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 200, car_type: 'blueCar', licence_plate: '43BB5R', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 600, car_type: 'greenCar', licence_plate: 'SHDY1I', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 1000, car_type: 'greenCar', licence_plate: 'PEY68O', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 1400, car_type: 'redCar', licence_plate: 'R30UUP', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 1800, car_type: 'redCar', licence_plate: '2KQB51', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 2200, car_type: 'whiteCar', licence_plate: 'KYC1LE', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 2600, car_type: 'redCar', licence_plate: 'JX1N5X', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 3000, car_type: 'whiteCar', licence_plate: 'YC354Q', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 3400, car_type: 'blueCar', licence_plate: 'SNS53J', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 3800, car_type: 'whiteCar', licence_plate: 'XR4WQ1', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 4200, car_type: 'whiteCar', licence_plate: 'WJ6BIK', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 4600, car_type: 'greenCar', licence_plate: 'A6NEQE', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 5000, car_type: 'redCar', licence_plate: '0FJ2D6', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 5400, car_type: 'greenCar', licence_plate: '01WF64', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 5800, car_type: 'redCar', licence_plate: 'G9Q8A7', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 6200, car_type: 'greenCar', licence_plate: 'V4T98Y', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 6600, car_type: 'greenCar', licence_plate: 'LS9F5E', accel_val: 2, exhaust: [] }, { x_coordinate: 500, y_coordinate: 0, kms_amnt: 7000, car_type: 'redCar', licence_plate: 'OJ6H53', accel_val: 2, exhaust: [] }, { x_coordinate: 300, y_coordinate: 0, kms_amnt: 7400, car_type: 'whiteCar', licence_plate: 'HD35NL', accel_val: 2, exhaust: [] }
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

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePosA = 300;
	LanePosB = 500;

	sleuthPI_vehicle =
	{
		x_coordinate: roadLeftEdge + roadWidth / 4,
		y_coordinate: 550,
		kms_amnt: 0,
		accel_val: 3,
		shudder_val: 0,
		car_type: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	DriveCar();
	for (var i = 0; i < carList.length; i++) {
		var b2b = CarIsAhead(sleuthPI_vehicle, carList[i]);
		if (b2b) SwitchLanes(sleuthPI_vehicle);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < carList.length; i++) {
		carList[i].kms_amnt += carList[i].accel_val;
		carList[i].y_coordinate = sleuthPI_vehicle.y_coordinate - carList[i].kms_amnt + sleuthPI_vehicle.kms_amnt;
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
			roadLeftEdge + roadWidth / 2, i * 100 + (sleuthPI_vehicle.kms_amnt % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (sleuthPI_vehicle.kms_amnt % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(sleuthPI_vehicle);
	image
		(
			carImages["detective"],
			sleuthPI_vehicle.x_coordinate - carImages["detective"].width / 2 + random(-sleuthPI_vehicle.shudder_val, sleuthPI_vehicle.shudder_val),
			sleuthPI_vehicle.y_coordinate + random(-sleuthPI_vehicle.shudder_val, sleuthPI_vehicle.shudder_val)
		);

	//draw all other cars

	for (var i = 0; i < carList.length; i++) {
		if (carList[i].y_coordinate < height && carList[i].y_coordinate > -height / 2) {
			image(
				carImages[carList[i].car_type],
				carList[i].x_coordinate - carImages[carList[i].car_type].width / 2,
				carList[i].y_coordinate
			);
			TurnoverEngine(carList[i]);

			drawExhaust(carList[i]);
		}
	}

}

function TurnoverEngine(car) {

	car.exhaust.push({ size: 2, x: car.x_coordinate, y: car.y_coordinate + carImages[car.car_type].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.accel_val / 3);
		if (car.car_type != "detective") car.exhaust[i].y += (sleuthPI_vehicle.accel_val - car.accel_val);
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
