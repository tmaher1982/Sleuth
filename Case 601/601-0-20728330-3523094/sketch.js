/*
Officer: 3523094
CaseNum: 601-0-20728330-3523094

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing ForestGreen stroke vertexes at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- stroke()
- beginShape(), endShape(), vertex()


*/

var countyMap;

//Sightings of Casey Fry.

var Killer_Sighted = {
	PtX: [127, 156, 179, 200, 220, 228, 249, 269, 292, 321, 354, 390, 396, 429, 456, 467, 483, 531, 547, 571, 589, 637],
	PtY: [175, 158, 192, 154, 133, 168, 149, 139, 168, 133, 159, 144, 225, 228, 230, 277, 267, 291, 278, 274, 318, 280],
};

function preload() {
	countyMap = loadImage("map.png")
}

function setup() {
	createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0, 0);

	//add your code below here
	stroke(34, 139, 34);
	noFill();
	beginShape();
	for (var i = 0; i < Killer_Sighted.PtX.length; i++) {
		vertex(Killer_Sighted.PtX[i], Killer_Sighted.PtY[i]);
	}
	endShape();

}

//We are not using the draw function this time
