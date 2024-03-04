/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 3523094
CaseNum: 802-1-49929016-3523094

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

* Write a function called shuffleSeed.
* Declare an empty array in the function.
* Using a for loop fill the array with 52 random integers between 2 and 79.
* Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
* Return the array at the end of the function.
* Call shuffleSeed in setup.
* Call Shuffle deck using the return value from shuffleSeed as the argument.

*/

var deck = [{ "type": "Spades", "value": "A" }, { "type": "Spades", "value": "2" }, { "type": "Spades", "value": "3" }, { "type": "Spades", "value": "4" }, { "type": "Spades", "value": "5" }, { "type": "Spades", "value": "6" }, { "type": "Spades", "value": "7" }, { "type": "Spades", "value": "8" }, { "type": "Spades", "value": "9" }, { "type": "Spades", "value": "10" }, { "type": "Spades", "value": "J" }, { "type": "Spades", "value": "Q" }, { "type": "Spades", "value": "K" }, { "type": "Clubs", "value": "A" }, { "type": "Clubs", "value": "2" }, { "type": "Clubs", "value": "3" }, { "type": "Clubs", "value": "4" }, { "type": "Clubs", "value": "5" }, { "type": "Clubs", "value": "6" }, { "type": "Clubs", "value": "7" }, { "type": "Clubs", "value": "8" }, { "type": "Clubs", "value": "9" }, { "type": "Clubs", "value": "10" }, { "type": "Clubs", "value": "J" }, { "type": "Clubs", "value": "Q" }, { "type": "Clubs", "value": "K" }, { "type": "Hearts", "value": "A" }, { "type": "Hearts", "value": "2" }, { "type": "Hearts", "value": "3" }, { "type": "Hearts", "value": "4" }, { "type": "Hearts", "value": "5" }, { "type": "Hearts", "value": "6" }, { "type": "Hearts", "value": "7" }, { "type": "Hearts", "value": "8" }, { "type": "Hearts", "value": "9" }, { "type": "Hearts", "value": "10" }, { "type": "Hearts", "value": "J" }, { "type": "Hearts", "value": "Q" }, { "type": "Hearts", "value": "K" }, { "type": "Diamonds", "value": "A" }, { "type": "Diamonds", "value": "2" }, { "type": "Diamonds", "value": "3" }, { "type": "Diamonds", "value": "4" }, { "type": "Diamonds", "value": "5" }, { "type": "Diamonds", "value": "6" }, { "type": "Diamonds", "value": "7" }, { "type": "Diamonds", "value": "8" }, { "type": "Diamonds", "value": "9" }, { "type": "Diamonds", "value": "10" }, { "type": "Diamonds", "value": "J" }, { "type": "Diamonds", "value": "Q" }, { "type": "Diamonds", "value": "K" }];
var deck_img;
var table_img;
var drawCounter = 0;

function preload() {
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup() {
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed function here. Followed by a call to shuffleDeck with the return value of shuffleSeed as an argument.
	shuffleSeed();
	var theValue = shuffleSeed();
	shuffleDeck(theValue);

}

//write your shuffleSeed function here
function shuffleSeed() {
	var empytArray = [];

	for (i = 0; i < 52; i++) {
		empytArray.push(round(random(2, 80)));

	}
	return empytArray;

}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
	//shuffle the deck by rotating the cards location with the values in
	//shuffleSeed. Repeat this a random number of times between 20 and 50
	var shuffleIterations = parseInt(random(20, 50));
	for (var i = 0; i < shuffleIterations; i++) {
		for (var j = 0; j < deck.length; j++) {
			var tempCard = deck.splice(j, 1);
			var newLoc = (j + shuffleSeed[j]) % 52;
			deck.splice(newLoc, 0, tempCard[0]);
		}
	}
}

function draw() {
	image(table_img, 0, 0);

	if (frameCount % 7 == 0) {
		drawCounter++;
		if (drawCounter == 52) {
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++) {
		if (deck[i].marked) {
			drawCard(deck[i], 400 + i * 18, 230);
		}
		else {
			drawCard(deck[i], 400 + i * 18, 250);
		}
	}


}


function drawCard(card, x, y) {

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < values.length; j++) {
			if (card.value == values[j] && card.type == suits[i]) {
				//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
