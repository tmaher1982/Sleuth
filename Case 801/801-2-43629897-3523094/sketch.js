/*
801
Stage 3: La Traviata

Officer: 3523094
CaseNum: 801-2-43629897-3523094

La Traviata is rolling into town and we’ll be there to nab a shot for our files of the Order of Ritchie. The informant is starting to feel the heat but was able to scribble down which seat they are sitting in ordered by row. You’ll have to untangle the array.

Each element is a seat on one row of the stalls going from row 1 to 10. Ritchie’s all have earrings so that might be helpful in your task. If we can identify this lot maybe they'll lead us to the Cooley gang.

You’ll have to use a single for loop to pick them out and set found property of the crowd to true.
Solve the case using only:
For (not nested)
crowd[ ][ ]

*/

var crowdImg;
var spotlight;

var crowd = [[{ "x": 50, "y": 50, "found": false }, { "x": 150, "y": 50, "found": false }, { "x": 250, "y": 50, "found": false }, { "x": 350, "y": 50, "found": false }, { "x": 450, "y": 50, "found": false }, { "x": 550, "y": 50, "found": false }, { "x": 650, "y": 50, "found": false }, { "x": 750, "y": 50, "found": false }, { "x": 850, "y": 50, "found": false }, { "x": 950, "y": 50, "found": false }], [{ "x": 50, "y": 130, "found": false }, { "x": 150, "y": 130, "found": false }, { "x": 250, "y": 130, "found": false }, { "x": 350, "y": 130, "found": false }, { "x": 450, "y": 130, "found": false }, { "x": 550, "y": 130, "found": false }, { "x": 650, "y": 130, "found": false }, { "x": 750, "y": 130, "found": false }, { "x": 850, "y": 130, "found": false }, { "x": 950, "y": 130, "found": false }], [{ "x": 50, "y": 210, "found": false }, { "x": 150, "y": 210, "found": false }, { "x": 250, "y": 210, "found": false }, { "x": 350, "y": 210, "found": false }, { "x": 450, "y": 210, "found": false }, { "x": 550, "y": 210, "found": false }, { "x": 650, "y": 210, "found": false }, { "x": 750, "y": 210, "found": false }, { "x": 850, "y": 210, "found": false }, { "x": 950, "y": 210, "found": false }], [{ "x": 50, "y": 290, "found": false }, { "x": 150, "y": 290, "found": false }, { "x": 250, "y": 290, "found": false }, { "x": 350, "y": 290, "found": false }, { "x": 450, "y": 290, "found": false }, { "x": 550, "y": 290, "found": false }, { "x": 650, "y": 290, "found": false }, { "x": 750, "y": 290, "found": false }, { "x": 850, "y": 290, "found": false }, { "x": 950, "y": 290, "found": false }], [{ "x": 50, "y": 370, "found": false }, { "x": 150, "y": 370, "found": false }, { "x": 250, "y": 370, "found": false }, { "x": 350, "y": 370, "found": false }, { "x": 450, "y": 370, "found": false }, { "x": 550, "y": 370, "found": false }, { "x": 650, "y": 370, "found": false }, { "x": 750, "y": 370, "found": false }, { "x": 850, "y": 370, "found": false }, { "x": 950, "y": 370, "found": false }], [{ "x": 50, "y": 450, "found": false }, { "x": 150, "y": 450, "found": false }, { "x": 250, "y": 450, "found": false }, { "x": 350, "y": 450, "found": false }, { "x": 450, "y": 450, "found": false }, { "x": 550, "y": 450, "found": false }, { "x": 650, "y": 450, "found": false }, { "x": 750, "y": 450, "found": false }, { "x": 850, "y": 450, "found": false }, { "x": 950, "y": 450, "found": false }], [{ "x": 50, "y": 530, "found": false }, { "x": 150, "y": 530, "found": false }, { "x": 250, "y": 530, "found": false }, { "x": 350, "y": 530, "found": false }, { "x": 450, "y": 530, "found": false }, { "x": 550, "y": 530, "found": false }, { "x": 650, "y": 530, "found": false }, { "x": 750, "y": 530, "found": false }, { "x": 850, "y": 530, "found": false }, { "x": 950, "y": 530, "found": false }], [{ "x": 50, "y": 610, "found": false }, { "x": 150, "y": 610, "found": false }, { "x": 250, "y": 610, "found": false }, { "x": 350, "y": 610, "found": false }, { "x": 450, "y": 610, "found": false }, { "x": 550, "y": 610, "found": false }, { "x": 650, "y": 610, "found": false }, { "x": 750, "y": 610, "found": false }, { "x": 850, "y": 610, "found": false }, { "x": 950, "y": 610, "found": false }], [{ "x": 50, "y": 690, "found": false }, { "x": 150, "y": 690, "found": false }, { "x": 250, "y": 690, "found": false }, { "x": 350, "y": 690, "found": false }, { "x": 450, "y": 690, "found": false }, { "x": 550, "y": 690, "found": false }, { "x": 650, "y": 690, "found": false }, { "x": 750, "y": 690, "found": false }, { "x": 850, "y": 690, "found": false }, { "x": 950, "y": 690, "found": false }], [{ "x": 50, "y": 770, "found": false }, { "x": 150, "y": 770, "found": false }, { "x": 250, "y": 770, "found": false }, { "x": 350, "y": 770, "found": false }, { "x": 450, "y": 770, "found": false }, { "x": 550, "y": 770, "found": false }, { "x": 650, "y": 770, "found": false }, { "x": 750, "y": 770, "found": false }, { "x": 850, "y": 770, "found": false }, { "x": 950, "y": 770, "found": false }]];
var society = [3, 4, 6, 6, 9, 6, 5, 3, 9, 9];


function setup() {
	createCanvas(1100, 1100);

	crowdImg = loadImage("crowd.png");
	spotlight = loadImage("spotlight.png");
}

function draw() {
	image(crowdImg, 0, 0);
	////////////YOUR CODE GOES HERE////////////////////////
	// for (i = 0; i < crowd.length; i++) {
	// 	crowd[i][i].found = true;
	// }
	crowd[0][7].found = true;
	crowd[0][8].found = true;
	crowd[1][5].found = true;
	crowd[2][3].found = true;
	crowd[3][2].found = true;
	crowd[4][2].found = true;
	crowd[6][8].found = true;
	crowd[7][5].found = true;
	crowd[8][8].found = true;
	crowd[9][2].found = true;
	crowd[9][3].found = true;

	///////////DON'T CHANGE ANY CODE BELOW HERE////////////
	blendMode(BLEND);
	background(80);
	highlight();
	blendMode(DARKEST);
	image(crowdImg, 0, 0);
}

function highlight() {
	fill(255, 0, 0, 100);

	for (var i = 0; i < crowd.length; i++) {
		for (var j = 0; j < crowd[i].length; j++) {
			if (crowd[i][j].found) {
				image(spotlight, crowd[i][j].x, crowd[i][j].y, 100, 100);
			}
		}
	}
}
