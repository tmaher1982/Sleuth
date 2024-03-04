/*

Officer: 3523094
CaseNum: 702-1-41416024-3523094

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

HINT: make sure you take a look at the initialisation of detective_carObject and the cars in
carObjectsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function drive_vehicle() {
	/*
	This function should do the following: 
	 - increment detective_carObject's distance_travelled property by its gas_val property 
	 - add a random amount between -0.09 and 0.09 to detective_carObject's rumble_amount property
	 - use the constrain function to constrain detective_carObject's rumble_amount property to values between 0.05 and 1.08
	 - call the drive_engine function passing detective_carObject as an argument
	*/
	detective_carObject.distance_travelled += detective_carObject.gas_val;

	var randomrum = random(-0.09, 0.09);
	//console.log(randomrum);
	detective_carObject.rumble_amount += randomrum;

	detective_carObject.rumble_amount = constrain(detective_carObject.rumble_amount, 0.05, 1.08);
	drive_engine(detective_carObject);

}


function switch_lanes(targetCar) {
	/*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosA and LanePosB to effect the change.
	 - finally you should return targetCar at the end of the function.
	 hint: You will need to modify the x property of targetCar.
	*/

	if (targetCar.x == LanePosA) {
		targetCar.x = LanePosB;
	}
	else {
		targetCar.x = LanePosA;
	}
	return targetCar;


}


function searchCar_isInfront(car_obj) {
	/*
	This function should do the following: 
	 - determine if car_obj  is in the same lane and less than 200px behind any of the cars in carObjectsList .
	 - do this by traversing carObjectsList and comparing each car's distance_travelled property to that of car_obj.
	 - if you find a car that matches these requirements then return the licence_plate property for the car. Otherwise return false.
	*/

	for (var i = 0; i < carObjectsList.length;) {
		if (
			(car_obj.x == carObjectsList[i].x)
			&& (
				((carObjectsList[i].distance_travelled - car_obj.distance_travelled) < 200)
				&& ((carObjectsList[i].distance_travelled - car_obj.distance_travelled) > 0)
			)
		) {
			// return carObjectsList[i].licence_plate;
			return car_obj.licence_plate;
		}
		else return false;
	}
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_carObject;

var roadWidth;
var roadLeftEdge;
var LanePosA;
var LanePosB;
var carImages = {};

var carObjectsList = [
	{ x: 500, y: 0, distance_travelled: -200, vehicle_variety: 'greenCar', licence_plate: '3SE0H0', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 200, vehicle_variety: 'blueCar', licence_plate: '0UW9OV', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 600, vehicle_variety: 'greenCar', licence_plate: '29S0WC', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 1000, vehicle_variety: 'redCar', licence_plate: 'C32TM3', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 1400, vehicle_variety: 'redCar', licence_plate: 'BCADO1', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 1800, vehicle_variety: 'redCar', licence_plate: 'MK9SS0', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 2200, vehicle_variety: 'redCar', licence_plate: 'JQCTAI', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 2600, vehicle_variety: 'whiteCar', licence_plate: 'DKUJWY', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 3000, vehicle_variety: 'blueCar', licence_plate: 'XG0E6F', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 3400, vehicle_variety: 'redCar', licence_plate: '6QSXXA', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 3800, vehicle_variety: 'greenCar', licence_plate: 'F3D3QT', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 4200, vehicle_variety: 'redCar', licence_plate: '7SRITG', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 4600, vehicle_variety: 'whiteCar', licence_plate: 'MQMDAN', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 5000, vehicle_variety: 'whiteCar', licence_plate: 'QTRRDK', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 5400, vehicle_variety: 'redCar', licence_plate: 'XVEKZM', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 5800, vehicle_variety: 'whiteCar', licence_plate: 'F39FDK', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 6200, vehicle_variety: 'redCar', licence_plate: '7J3X9J', gas_val: 2, exhaust: [] }, { x: 300, y: 0, distance_travelled: 6600, vehicle_variety: 'whiteCar', licence_plate: '7VEM94', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 7000, vehicle_variety: 'redCar', licence_plate: 'C3C61R', gas_val: 2, exhaust: [] }, { x: 500, y: 0, distance_travelled: 7400, vehicle_variety: 'greenCar', licence_plate: '2N6XDU', gas_val: 2, exhaust: [] }
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

	detective_carObject =
	{
		x: roadLeftEdge + roadWidth / 4,
		y: 550,
		distance_travelled: 0,
		gas_val: 3,
		rumble_amount: 0,
		vehicle_variety: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw() {
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	drive_vehicle();
	var b2b = searchCar_isInfront(detective_carObject);
	if (b2b) switch_lanes(detective_carObject);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for (var i = 0; i < carObjectsList.length; i++) {
		carObjectsList[i].distance_travelled += carObjectsList[i].gas_val;
		carObjectsList[i].y = detective_carObject.y - carObjectsList[i].distance_travelled + detective_carObject.distance_travelled;
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
			roadLeftEdge + roadWidth / 2, i * 100 + (detective_carObject.distance_travelled % 100),
			roadLeftEdge + roadWidth / 2, i * 100 + 70 + (detective_carObject.distance_travelled % 100)
		);
	}
}

function drawCars() {
	//draw the detective car

	image
	drawExhaust(detective_carObject);
	image
		(
			carImages["detective"],
			detective_carObject.x - carImages["detective"].width / 2 + random(-detective_carObject.rumble_amount, detective_carObject.rumble_amount),
			detective_carObject.y + random(-detective_carObject.rumble_amount, detective_carObject.rumble_amount)
		);

	//draw all other cars

	for (var i = 0; i < carObjectsList.length; i++) {
		if (carObjectsList[i].y < height && carObjectsList[i].y > -height / 2) {
			image(
				carImages[carObjectsList[i].vehicle_variety],
				carObjectsList[i].x - carImages[carObjectsList[i].vehicle_variety].width / 2,
				carObjectsList[i].y
			);
			drive_engine(carObjectsList[i]);

			drawExhaust(carObjectsList[i]);
		}
	}

}

function drive_engine(car) {

	car.exhaust.push({ size: 2, x: car.x, y: car.y + carImages[car.vehicle_variety].height });

	for (var i = car.exhaust.length - 1; i >= 0; i--) {

		car.exhaust[i].y += max(0.75, car.gas_val / 3);
		if (car.vehicle_variety != "detective") car.exhaust[i].y += (detective_carObject.gas_val - car.gas_val);
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
