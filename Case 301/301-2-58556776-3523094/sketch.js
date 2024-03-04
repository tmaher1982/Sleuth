/*
The case of the Python Syndicate
Stage 3


Officer: 3523094
CaseNum: 301-2-58556776-3523094

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Anna karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var countess_hamilton_image;
var anna_karpinski_image;
var rocky_kray_image;
var pawel_karpinski_image;
var robbie_kray_image;
var bones_karpinski_image;

var anna_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_image = loadImage("countessHamilton.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_object = {
		x: 408,
		y: 40,
		image: anna_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_object.image, anna_karpinski_object.x, anna_karpinski_object.y);
    
    image(countess_hamilton_image, anna_karpinski_object.x - 293, anna_karpinski_object.y);
    image(rocky_kray_image, anna_karpinski_object.x + 293, anna_karpinski_object.y);
    
    image(pawel_karpinski_image, anna_karpinski_object.x - 293, anna_karpinski_object.y + 269);
    image(robbie_kray_image, anna_karpinski_object.x, anna_karpinski_object.y + 269);
    image(bones_karpinski_image, anna_karpinski_object.x + 293, anna_karpinski_object.y + 269);
	//image(countess_hamilton_image, 115, 40);
	//image(rocky_kray_image, 701, 40);
	//image(pawel_karpinski_image, 115, 309);
	//image(robbie_kray_image, 408, 309);
	//image(bones_karpinski_image, 701, 309);

}