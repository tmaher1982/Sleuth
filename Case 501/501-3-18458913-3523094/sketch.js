/*

Officer: 3523094
CaseNum: 501-3-18458913-3523094

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the chessPieceImage variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, chessPieceImage;

function preload() {
    backgroundImg = loadImage("background.jpg");
    chessPieceImage = loadImage("Piece.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);
    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    // h 55 v 60
    for (i = 0; i < 6; i++) {
        for (k = 0; k < 6; k++) {
            //image(chessPieceImage, 820, 353);
            image(chessPieceImage, 540 + (i * 56) + (k * 56), 673 - (k * 65));
        }
    }

    //image(chessPieceImage, 875, 353);
    //image(chessPieceImage, 875, 413);

}
