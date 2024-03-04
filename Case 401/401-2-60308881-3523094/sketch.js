/*

Officer: 3523094
CaseNum: 401-2-60308881-3523094

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If methanol goes above 0.75 and lead goes above 0.53, or on the other hand, sarin goes above 0.57, try decreasing methylene by 0.02
	- If botulinium goes above 0.71 or insecticide dips below 0.46, raise methylene by 0.04
	- If sarin goes above 0.59 or methanol dips below 0.67, decrease sulphates by 0.05
	- When insecticide goes above 0.57 or lead dips below 0.68, whilst at the same time, botulinium goes above 0.25, increase sulphates by 0.05
	- When either methanol dips below 0.62, insecticide dips below 0.38, or perhaps ricin dips below 0.45, decrease ethanol by 0.02
	- If either sarin goes above 0.57, lead goes above 0.58, or perhaps botulinium dips below 0.68, raise ethanol by 0.05
	- If botulinium goes above 0.39 and methanol goes above 0.52, or on the other hand, lead goes above 0.39, decrease insulin by 0.03
	- When ricin goes above 0.75 and sarin dips below 0.59, increase insulin by 0.03


Your conditional statements should:

consider the following poisons:

	- methanol
	- insecticide
	- sarin
	- ricin
	- botulinium
	- lead


and modify the following antidotes:

	- methylene
	- sulphates
	- ethanol
	- insulin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var methanol;
var insecticide;
var sarin;
var ricin;
var botulinium;
var lead;


//Declare the antidote variables
var methylene;
var sulphates;
var ethanol;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	insecticide = 0.5;
	sarin = 0.5;
	ricin = 0.5;
	botulinium = 0.5;
	lead = 0.5;
	methylene = 0.5;
	sulphates = 0.5;
	ethanol = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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

//    - If methanol goes above 0.75 and lead goes above 0.53, or on the other hand, sarin goes above 0.57, try decreasing methylene by 0.02
    if ((methanol > 0.75 && lead > 0.53) || sarin > 0.57)
        {
            methylene -= 0.02;
        }
    
//	- If botulinium goes above 0.71 or insecticide dips below 0.46, raise methylene by 0.04
    if (botulinium > 0.71 || insecticide < 0.46)
        {
            methylene += 0.04;
        }
    
//	- If sarin goes above 0.59 or methanol dips below 0.67, decrease sulphates by 0.05
    if (sarin > 0.59 || methanol  < 0.67)
        {
            sulphates -= 0.05;
        }
    
//	- When insecticide goes above 0.57 or lead dips below 0.68, whilst at the same time, botulinium goes above 0.25, increase sulphates by 0.05
    if ((insecticide > 0.57 || lead < 0.68) && botulinium > 0.25)
        {
            sulphates += 0.05;
        }
    
//	- When either methanol dips below 0.62, insecticide dips below 0.38, or perhaps ricin dips below 0.45, decrease ethanol by 0.02
    if ((methanol < 0.62 || insecticide < 0.38)|| ricin < 0.45)
        {
            ethanol -= 0.02;
        }
//	- If either sarin goes above 0.57, lead goes above 0.58, or perhaps botulinium dips below 0.68, raise ethanol by 0.05
    if ((sarin > 0.57 || lead > 0.58) || botulinium < 0.68)
        {
            ethanol+= 0.05;
        }
//	- If botulinium goes above 0.39 and methanol goes above 0.52, or on the other hand, lead goes above 0.39, decrease insulin by 0.03
    if ((botulinium > 0.39 && methanol > 0.52) || lead > 0.39)
        {
            insulin -= 0.03;
        }
//	- When ricin goes above 0.75 and sarin dips below 0.59, increase insulin by 0.03
    if (ricin > 0.75 && sarin < 0.59)
        {
            insulin += 0.03;
        }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	insecticide = nextValue(graphs[1],insecticide);
	sarin = nextValue(graphs[2],sarin);
	ricin = nextValue(graphs[3],ricin);
	botulinium = nextValue(graphs[4],botulinium);
	lead = nextValue(graphs[5],lead);


	methylene = constrain(methylene, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('ricin: ' + nf(ricin,1,2), 20,80);
	fill(colors[4]);
	text('botulinium: ' + nf(botulinium,1,2), 20,100);
	fill(colors[5]);
	text('lead: ' + nf(lead,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(sulphates,200,'sulphates');
	drawBar(ethanol,350,'ethanol');
	drawBar(insulin,500,'insulin');


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
