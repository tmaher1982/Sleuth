/*
The case of the Python Syndicate
Stage 2


Officer: 3523094
CaseNum: 301-1-61319856-3523094

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Countess hamilton

- The variables for Countess hamilton have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Countess hamilton for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var bonesKarpinskiImg;
var robbieKrayImg;
var annaKarpinskiImg;
var countessHamiltonImg;
var rockyKrayImg;
var pawelKarpinskiImg;


var countessHamiltonLocationX = 115;
var countessHamiltonLocationY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countessHamiltonImg, countessHamiltonLocationX, countessHamiltonLocationY);
    image(bonesKarpinskiImg, countessHamiltonLocationX, countessHamiltonLocationY - 269);
    image(robbieKrayImg, countessHamiltonLocationX + 293, countessHamiltonLocationY - 269);
    image(annaKarpinskiImg, countessHamiltonLocationX + 586, countessHamiltonLocationY - 269);
    image(rockyKrayImg, countessHamiltonLocationX + 293, countessHamiltonLocationY);
    image(pawelKarpinskiImg, countessHamiltonLocationX + 586, countessHamiltonLocationY);
	//image(bonesKarpinskiImg, 115, 40);
	//image(robbieKrayImg, 408, 40);
	//image(annaKarpinskiImg, 701, 40);
	//image(rockyKrayImg, 408, 309);
	//image(pawelKarpinskiImg, 701, 309);

}