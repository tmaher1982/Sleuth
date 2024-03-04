/*

Officer: 3523094
CaseNum: 702-2-61341908-3523094

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a red car with a licencePlate of OFVJPC. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detectiveVehicle and the cars in
carObject_data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_car() {
	/*
	This function should do the following: 
	 - increment detectiveVehicle's distDriven property by its speedAmt property 
	 - add a random amount between -0.1 and 0.1 to detectiveVehicle's engineVibrateVal property
	 - use the constrain function to constrain detectiveVehicle's engineVibrateVal property to values between 0.03 and 1.18
	 - call the turnover_engine function passing detectiveVehicle as an argument
	*/
	detectiveVehicle.distDriven += detectiveVehicle.speedAmt;

	var randomEngineVibrateVal = random(-0.1, 0.1);

	detectiveVehicle.engineVibrateVal += randomEngineVibrateVal;

	detectiveVehicle.engineVibrateVal = constrain(detectiveVehicle.engineVibrateVal, 0.03, 1.18);

	turnover_engine(detectiveVehicle);
}


function change_lanes(target_vehicle) {
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_position_a and lane_position_b to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the positionX property of target_vehicle.
	*/
	if (target_vehicle.positionX == lane_position_a) {
		target_vehicle.positionX = lane_position_b;
	}
	else {
		target_vehicle.positionX = lane_position_a;
	}

	return target_vehicle;

}


function check_ahead(car_a, car_b) {
	/*
	This function should do the following: 
	 - determine if car_a is in the same lane and less than 200px behind car_b.
	 - do this by comparing the two cars' distDriven properties
	 - if these requirements are met then return the licencePlate property for car_b. Otherwise return false.
	*/
	if (
		(car_a.positionX == car_b.positionX)
		&& ((car_b.distDriven - car_a.distDriven) < 200)
		&& ((car_b.distDriven - car_a.distDriven) > 0)
	) {

		return car_b.licencePlate;

	}
	else {
		return false;
	}

}


function checkCar_bySide(targetCar) {
	/*
	This function should do the following: 
	 - traverse carObject_data and determine if any of the cars are parallel with targetCar.
	 - if a car is found to be parallel to targetCar then return that car object.
	 - cars are considered parallel if the absolute difference between their distDriven properties is less than 25 px and they have non-matching positionX properties	*/



	for (var i = 0; i < carObject_data.length; i++) {
		if (abs(targetCar.distDriven - carObject_data[i].distDriven) < 25 && targetCar.positionX != carObject_data[i].positionX) {

			return i;
		}

	}
}


function locate_assailant() {
	/*
	This function should do the following: 
	 - Check cars passing parallel to detectiveVehicle to see if they match the licencePlate property in the assailant description.
	 - it does this by calling checkCar_bySide.
	 - if a positive result is returned then the licencePlate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/


	// if (checkCar_bySide(detectiveVehicle).licencePlate == "OFVJPC" && checkCar_bySide(detectiveVehicle).vehicleVariety == "redCar") {
	//checkCar_bySide(detectiveVehicle);


	// var plate = checkCar_bySide(detectiveVehicle.licencePlate);
	// if (plate == "OFVJPC") {
	// 	assailant = checkCar_bySide(detectiveVehicle);
	// }


	// //}

	// for (var i = 0; i < carObject_data.length; i++) {
	// 	//var aside = checkCar_bySide(carObject_data[i].licencePlate);
	// 	//
	// 	if (aside.licencePlate = "OFVJPC") {
	// 		assailant = carObject_data[i];
	// 	}


	// }

	//assailant = aside;

	//var thecarBySiderank = checkCar_bySide(detectiveVehicle);

	//console.log("the rank is " + thecarBySiderank);
	// var thecarBySide = carObject_data[thecarBySiderank];

	// //console.log("plate number is " + thecarBySide);
	// if (thecarBySide.licencePlate == "OFVJPC") {
	// 	//assailant = carObject_data[i];
	// 	console.log("amazing");
	// var rank = checkCar_bySide(detectiveVehicle);
	// var plate = carObject_data[rank];

	//console.log("plate is " + plate.licencePlate());
	// 
	// var theplate = carObject_data[checkCar_bySide(detectiveVehicle)].licencePlate;
	// console.log("the plate is " + theplate);

	for (var i = 0; i < carObject_data.length; i++) {
		if (carObject_data[i].licencePlate == "OFVJPC") {
			assailant = carObject_data[i];
		}
	}



}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detectiveVehicle;

var roadWidth;
var roadLeftEdge;
var lane_position_a;
var lane_position_b;
var carImages = {};
var assailant;

var carObject_data = [
	{ positionX: 300, positionY: 0, distDriven: -200, vehicleVariety: 'redCar', licencePlate: 'QKIGPQ', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 200, vehicleVariety: 'greenCar', licencePlate: 'HILGWO', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 600, vehicleVariety: 'whiteCar', licencePlate: 'LRS1YZ', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 1000, vehicleVariety: 'greenCar', licencePlate: 'HMZE91', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 1400, vehicleVariety: 'redCar', licencePlate: 'OFVJPC', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 1800, vehicleVariety: 'greenCar', licencePlate: '0K0URW', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 2200, vehicleVariety: 'whiteCar', licencePlate: '2DWBOG', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 2600, vehicleVariety: 'redCar', licencePlate: 'A0XZR1', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 3000, vehicleVariety: 'blueCar', licencePlate: 'P10NTZ', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 3400, vehicleVariety: 'blueCar', licencePlate: '71AJKS', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 3800, vehicleVariety: 'redCar', licencePlate: 'L3UNHA', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 4200, vehicleVariety: 'blueCar', licencePlate: 'K91FPZ', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 4600, vehicleVariety: 'greenCar', licencePlate: 'QZUG9H', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 5000, vehicleVariety: 'redCar', licencePlate: '8EF000', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 5400, vehicleVariety: 'blueCar', licencePlate: 'ZVAQ5L', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 5800, vehicleVariety: 'blueCar', licencePlate: 'E6OMGP', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 6200, vehicleVariety: 'redCar', licencePlate: '3T1H63', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 6600, vehicleVariety: 'greenCar', licencePlate: 'KFTA96', speedAmt: 2, exhaust: [] }, { positionX: 300, positionY: 0, distDriven: 7000, vehicleVariety: 'whiteCar', licencePlate: '994M5Y', speedAmt: 2, exhaust: [] }, { positionX: 500, positionY: 0, distDriven: 7400, vehicleVariety: 'whiteCar', licencePlate: '394TMH', speedAmt: 2, exhaust: [] }
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

	detectiveVehicle =
	{
		positionX: roadLeftEdge + roadWidth / 4,
		positionY: 550,
		distDriven: 0,
		speedAmt: 3,
		engineVibrateVal: 0,
		vehicleVariety: 'detective',
		licencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	if (assailant) {
		fill(255);

		text("assailant found !", width / 2, height / 2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	move_car();
	for (var i = 0; i < carObject_data.length; i++) {
		var b2b = check_ahead(detectiveVehicle, carObject_data[i]);
		if (b2b) change_lanes(detectiveVehicle);
	}
	locate_assailant();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < carObject_data.length; i++) {
		carObject_data[i].distDriven += carObject_data[i].speedAmt;
		carObject_data[i].positionY = detectiveVehicle.positionY - carObject_data[i].distDriven + detectiveVehicle.distDriven;
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
			roadLeftEdge + roadWidth / 2, i * 100 + (detectiveVehicle.distDriven % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (detectiveVehicle.distDriven % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(detectiveVehicle);
	image
		(
			carImages["detective"],
			detectiveVehicle.positionX - carImages["detective"].width / 2 + random(-detectiveVehicle.engineVibrateVal, detectiveVehicle.engineVibrateVal),
			detectiveVehicle.positionY + random(-detectiveVehicle.engineVibrateVal, detectiveVehicle.engineVibrateVal)
		);

	//draw all other cars

	for (var i = 0; i < carObject_data.length; i++) {
		if (carObject_data[i].positionY < height && carObject_data[i].positionY > -height / 2) {
			image(
				carImages[carObject_data[i].vehicleVariety],
				carObject_data[i].positionX - carImages[carObject_data[i].vehicleVariety].width / 2,
				carObject_data[i].positionY
			);
			turnover_engine(carObject_data[i]);

			drawExhaust(carObject_data[i]);
		}
	}

}

function turnover_engine(car) {

	car.exhaust.push({ size: 2, x: car.positionX, y: car.positionY + carImages[car.vehicleVariety].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.speedAmt / 3);
		if (car.vehicleVariety != "detective") car.exhaust[i].y += (detectiveVehicle.speedAmt - car.speedAmt);
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
