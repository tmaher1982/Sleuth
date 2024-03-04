/*
801
Stage 3: La Traviata

Officer: 3523094
CaseNum: 801-2-14149571-3523094

La Traviata is rolling into town and we’ll be there to nab a shot for our files of the Order of Ritchie. The informant is starting to feel the heat but was able to scribble down which seat they are sitting in ordered by row. You’ll have to untangle the array.

Each element is a seat on one row of the stalls going from row 1 to 10. Ritchie’s all have beard so that might be helpful in your task. If we can identify this lot maybe they'll lead us to the Cooley gang.

You’ll have to use a single for loop to pick them out and set identified property of the viewers to true.
Solve the case using only:
For (not nested)
viewers[ ][ ]

*/

var crowdImg;
var spotlight;

var viewers = [[{ "x": 50, "y": 50, "identified": false }, { "x": 150, "y": 50, "identified": false }, { "x": 250, "y": 50, "identified": false }, { "x": 350, "y": 50, "identified": false }, { "x": 450, "y": 50, "identified": false }, { "x": 550, "y": 50, "identified": false }, { "x": 650, "y": 50, "identified": false }, { "x": 750, "y": 50, "identified": false }, { "x": 850, "y": 50, "identified": false }, { "x": 950, "y": 50, "identified": false }], [{ "x": 50, "y": 130, "identified": false }, { "x": 150, "y": 130, "identified": false }, { "x": 250, "y": 130, "identified": false }, { "x": 350, "y": 130, "identified": false }, { "x": 450, "y": 130, "identified": false }, { "x": 550, "y": 130, "identified": false }, { "x": 650, "y": 130, "identified": false }, { "x": 750, "y": 130, "identified": false }, { "x": 850, "y": 130, "identified": false }, { "x": 950, "y": 130, "identified": false }], [{ "x": 50, "y": 210, "identified": false }, { "x": 150, "y": 210, "identified": false }, { "x": 250, "y": 210, "identified": false }, { "x": 350, "y": 210, "identified": false }, { "x": 450, "y": 210, "identified": false }, { "x": 550, "y": 210, "identified": false }, { "x": 650, "y": 210, "identified": false }, { "x": 750, "y": 210, "identified": false }, { "x": 850, "y": 210, "identified": false }, { "x": 950, "y": 210, "identified": false }], [{ "x": 50, "y": 290, "identified": false }, { "x": 150, "y": 290, "identified": false }, { "x": 250, "y": 290, "identified": false }, { "x": 350, "y": 290, "identified": false }, { "x": 450, "y": 290, "identified": false }, { "x": 550, "y": 290, "identified": false }, { "x": 650, "y": 290, "identified": false }, { "x": 750, "y": 290, "identified": false }, { "x": 850, "y": 290, "identified": false }, { "x": 950, "y": 290, "identified": false }], [{ "x": 50, "y": 370, "identified": false }, { "x": 150, "y": 370, "identified": false }, { "x": 250, "y": 370, "identified": false }, { "x": 350, "y": 370, "identified": false }, { "x": 450, "y": 370, "identified": false }, { "x": 550, "y": 370, "identified": false }, { "x": 650, "y": 370, "identified": false }, { "x": 750, "y": 370, "identified": false }, { "x": 850, "y": 370, "identified": false }, { "x": 950, "y": 370, "identified": false }], [{ "x": 50, "y": 450, "identified": false }, { "x": 150, "y": 450, "identified": false }, { "x": 250, "y": 450, "identified": false }, { "x": 350, "y": 450, "identified": false }, { "x": 450, "y": 450, "identified": false }, { "x": 550, "y": 450, "identified": false }, { "x": 650, "y": 450, "identified": false }, { "x": 750, "y": 450, "identified": false }, { "x": 850, "y": 450, "identified": false }, { "x": 950, "y": 450, "identified": false }], [{ "x": 50, "y": 530, "identified": false }, { "x": 150, "y": 530, "identified": false }, { "x": 250, "y": 530, "identified": false }, { "x": 350, "y": 530, "identified": false }, { "x": 450, "y": 530, "identified": false }, { "x": 550, "y": 530, "identified": false }, { "x": 650, "y": 530, "identified": false }, { "x": 750, "y": 530, "identified": false }, { "x": 850, "y": 530, "identified": false }, { "x": 950, "y": 530, "identified": false }], [{ "x": 50, "y": 610, "identified": false }, { "x": 150, "y": 610, "identified": false }, { "x": 250, "y": 610, "identified": false }, { "x": 350, "y": 610, "identified": false }, { "x": 450, "y": 610, "identified": false }, { "x": 550, "y": 610, "identified": false }, { "x": 650, "y": 610, "identified": false }, { "x": 750, "y": 610, "identified": false }, { "x": 850, "y": 610, "identified": false }, { "x": 950, "y": 610, "identified": false }], [{ "x": 50, "y": 690, "identified": false }, { "x": 150, "y": 690, "identified": false }, { "x": 250, "y": 690, "identified": false }, { "x": 350, "y": 690, "identified": false }, { "x": 450, "y": 690, "identified": false }, { "x": 550, "y": 690, "identified": false }, { "x": 650, "y": 690, "identified": false }, { "x": 750, "y": 690, "identified": false }, { "x": 850, "y": 690, "identified": false }, { "x": 950, "y": 690, "identified": false }], [{ "x": 50, "y": 770, "identified": false }, { "x": 150, "y": 770, "identified": false }, { "x": 250, "y": 770, "identified": false }, { "x": 350, "y": 770, "identified": false }, { "x": 450, "y": 770, "identified": false }, { "x": 550, "y": 770, "identified": false }, { "x": 650, "y": 770, "identified": false }, { "x": 750, "y": 770, "identified": false }, { "x": 850, "y": 770, "identified": false }, { "x": 950, "y": 770, "identified": false }]];
var suspects = [1, 1, 2, 2, 4, 5, 1, 8, 2, 9];


function setup() {
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw() {
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////
	// viewers[0][1].identified = true;
	// viewers[1][1].identified = true;
	// viewers[2][2].identified = true;
	// viewers[3][2].identified = true;
	// viewers[4][4].identified = true;
	// viewers[5][5].identified = true;
	// viewers[6][1].identified = true;
	// viewers[7][8].identified = true;
	// viewers[8][2].identified = true;
	// viewers[9][9].identified = true;

	var withBeard = [
		{ "x": 0, "y": 1 },
		{ "x": 1, "y": 1 },
		{ "x": 2, "y": 2 },
		{ "x": 3, "y": 2 },
		{ "x": 4, "y": 4 },
		{ "x": 5, "y": 5 },
		{ "x": 6, "y": 1 },
		{ "x": 7, "y": 8 },
		{ "x": 8, "y": 2 },
		{ "x": 9, "y": 9 }
	];

	for (i = 0; i < withBeard.length; i++) {
		viewers[withBeard[i].x][withBeard[i].y].identified = true;
	}
	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight() {
	fill(255, 0, 0, 100);

	for (var i = 0; i < viewers.length; i++) {
		for (var j = 0; j < viewers[i].length; j++) {
			if (viewers[i][j].identified) {
				image(spotlight, viewers[i][j].x, viewers[i][j].y, 100, 100);
			}
		}
	}
}
