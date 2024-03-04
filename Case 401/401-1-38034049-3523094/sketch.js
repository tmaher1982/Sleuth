/*

Officer: 3523094
CaseNum: 401-1-38034049-3523094

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When formaldehyde dips below 0.56 or amanita_mushrooms dips below 0.38, reduce plasma by 0.04
	- If chlorine goes above 0.63 or alcohol dips below 0.36, raise plasma by 0.03
	- If chlorine goes above 0.69, try decreasing paracetamol by 0.02
	- When amanita_mushrooms dips below 0.74 or formaldehyde goes above 0.37, increment paracetamol by 0.05
	- When alcohol goes above 0.54, try decreasing hydrochloric_acid by 0.01
	- If formaldehyde goes above 0.75 or amanita_mushrooms dips below 0.51, raise hydrochloric_acid by 0.01
	- When chlorine goes above 0.63, decrease sulphates by 0.02
	- When alcohol dips below 0.26 or amanita_mushrooms goes above 0.38, increase sulphates by 0.04


Your conditional statements should:

consider the following poisons:

	- chlorine
	- formaldehyde
	- amanita_mushrooms
	- alcohol


and modify the following antidotes:

	- plasma
	- paracetamol
	- hydrochloric_acid
	- sulphates


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var formaldehyde;
var amanita_mushrooms;
var alcohol;


//Declare the antidote variables
var plasma;
var paracetamol;
var hydrochloric_acid;
var sulphates;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	chlorine = 0.5;
	formaldehyde = 0.5;
	amanita_mushrooms = 0.5;
	alcohol = 0.5;
	plasma = 0.5;
	paracetamol = 0.5;
	hydrochloric_acid = 0.5;
	sulphates = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...

//    - When formaldehyde dips below 0.56 or amanita_mushrooms dips below 0.38, reduce plasma by 0.04
    if ( formaldehyde < 0.56 || amanita_mushrooms < 0.38)
        {
            plasma -= 0.04;
        }
    
//	- If chlorine goes above 0.63 or alcohol dips below 0.36, raise plasma by 0.03
    if (chlorine > 0.63 || alcohol < 0.36)
        {
            plasma += 0.03;
        }
    
//	- If chlorine goes above 0.69, try decreasing paracetamol by 0.02
    if (chlorine > 0.69)
        {
            paracetamol -= 0.02;
        }
    
//	- When amanita_mushrooms dips below 0.74 or formaldehyde goes above 0.37, increment paracetamol by 0.05
    if (amanita_mushrooms < 0.74 || formaldehyde > 0.37)
        {
            paracetamol += 0.05;
        }
    
//	- When alcohol goes above 0.54, try decreasing hydrochloric_acid by 0.01
    if (alcohol > 0.54)
        {
            hydrochloric_acid -= 0.01;
        }
    
//	- If formaldehyde goes above 0.75 or amanita_mushrooms dips below 0.51, raise hydrochloric_acid by 0.01
    if (formaldehyde > 0.75 || amanita_mushrooms < 0.51)
        {
            hydrochloric_acid += 0.01;
        }
    
//	- When chlorine goes above 0.63, decrease sulphates by 0.02
    if (chlorine > 0.63)
        {
            sulphates -= 0.02;
        }
    
//	- When alcohol dips below 0.26 or amanita_mushrooms goes above 0.38, increase sulphates by 0.04
    if (alcohol < 0.26 || amanita_mushrooms > 0.38)
        {
            sulphates += 0.04;
        }
    
        


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	chlorine = nextValue(graphs[0],chlorine);
	formaldehyde = nextValue(graphs[1],formaldehyde);
	amanita_mushrooms = nextValue(graphs[2],amanita_mushrooms);
	alcohol = nextValue(graphs[3],alcohol);


	plasma = constrain(plasma, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	hydrochloric_acid = constrain(hydrochloric_acid, 0, 1);
	sulphates = constrain(sulphates, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('chlorine: ' + nf(chlorine,1,2), 20,20);
	fill(colors[1]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,40);
	fill(colors[2]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,60);
	fill(colors[3]);
	text('alcohol: ' + nf(alcohol,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(plasma,50,'plasma');
	drawBar(paracetamol,200,'paracetamol');
	drawBar(hydrochloric_acid,350,'hydrochloric_acid');
	drawBar(sulphates,500,'sulphates');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
