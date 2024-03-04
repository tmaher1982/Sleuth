/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 3523094
CaseNum: 802-2-90514135-3523094

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in handToWin from the deck and store it in the hand array.

*Write a function called setWinningHand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in handToWin add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 6 and end at 79.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [{ "type": "Spades", "v": "A" }, { "type": "Spades", "v": "2" }, { "type": "Spades", "v": "3" }, { "type": "Spades", "v": "4" }, { "type": "Spades", "v": "5" }, { "type": "Spades", "v": "6" }, { "type": "Spades", "v": "7" }, { "type": "Spades", "v": "8" }, { "type": "Spades", "v": "9" }, { "type": "Spades", "v": "10" }, { "type": "Spades", "v": "J" }, { "type": "Spades", "v": "Q" }, { "type": "Spades", "v": "K" }, { "type": "Clubs", "v": "A" }, { "type": "Clubs", "v": "2" }, { "type": "Clubs", "v": "3" }, { "type": "Clubs", "v": "4" }, { "type": "Clubs", "v": "5" }, { "type": "Clubs", "v": "6" }, { "type": "Clubs", "v": "7" }, { "type": "Clubs", "v": "8" }, { "type": "Clubs", "v": "9" }, { "type": "Clubs", "v": "10" }, { "type": "Clubs", "v": "J" }, { "type": "Clubs", "v": "Q" }, { "type": "Clubs", "v": "K" }, { "type": "Hearts", "v": "A" }, { "type": "Hearts", "v": "2" }, { "type": "Hearts", "v": "3" }, { "type": "Hearts", "v": "4" }, { "type": "Hearts", "v": "5" }, { "type": "Hearts", "v": "6" }, { "type": "Hearts", "v": "7" }, { "type": "Hearts", "v": "8" }, { "type": "Hearts", "v": "9" }, { "type": "Hearts", "v": "10" }, { "type": "Hearts", "v": "J" }, { "type": "Hearts", "v": "Q" }, { "type": "Hearts", "v": "K" }, { "type": "Diamonds", "v": "A" }, { "type": "Diamonds", "v": "2" }, { "type": "Diamonds", "v": "3" }, { "type": "Diamonds", "v": "4" }, { "type": "Diamonds", "v": "5" }, { "type": "Diamonds", "v": "6" }, { "type": "Diamonds", "v": "7" }, { "type": "Diamonds", "v": "8" }, { "type": "Diamonds", "v": "9" }, { "type": "Diamonds", "v": "10" }, { "type": "Diamonds", "v": "J" }, { "type": "Diamonds", "v": "Q" }, { "type": "Diamonds", "v": "K" }];
var deck_img;
var table_img;
var drawCounter = 0;

var handToWin = [{ "cardSuit": "Clubs", "no": "Q" }, { "cardSuit": "Diamonds", "no": "K" }, { "cardSuit": "Spades", "no": "J" }, { "cardSuit": "Hearts", "no": "J" }, { "cardSuit": "Clubs", "no": "10" }];
var hand = [];

function preload() {
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup() {
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleSeed();
	shuffleDeck(shuffleSeed);

	//call your setWinningHand function here
	setWinningHand();
}

//write your setWinningHand function here
function setWinningHand() {
	const handArray = [];
	for (var i = 0; i < deck.length; i++) {
		for (var j = 0; j < handToWin.length; j++) {
			if (deck[i] == handToWin[j]) {
				handArray, push(handToWin[j]);
				break;
			}
		}
	}
	return handArray;
}

//write your shuffleSeed() function here.
function shuffleSeed() {
	const emptyarray = [];
	for (var i = 0; i < 52; i++) {
		emptyarray.push(round(random(6, 79)));
	}
	return emptyarray;
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
		if (drawCounter == 5) {
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++) {
		if (i < hand.length) {
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y) {

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < values.length; j++) {
			if (card.v == values[j] && card.type == suits[i]) {
				//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
