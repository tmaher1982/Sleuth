/*

Officer: 3523094
CaseNum: 401-0-91319926-3523094

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If hemlock dips below 0.38, decrement methylene by 0.02
	- If polonium dips below 0.66, raise methylene by 0.05
	- When polonium dips below 0.48, decrement antibodies by 0.03
	- If hemlock goes above 0.34, increment antibodies by 0.02
	- When insecticide dips below 0.71, decrement paracetamol by 0.02
	- If hemlock goes above 0.68, increase paracetamol by 0.03


Your conditional statements should:

consider the following poisons:

	- insecticide
	- polonium
	- hemlock


and modify the following antidotes:

	- methylene
	- antibodies
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var insecticide;
var polonium;
var hemlock;


//Declare the antidote variables
var methylene;
var antibodies;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	insecticide = 0.5;
	polonium = 0.5;
	hemlock = 0.5;
	methylene = 0.5;
	antibodies = 0.5;
	paracetamol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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



//	- If hemlock goes above 0.68, increase paracetamol by 0.03
    if (hemlock < 0.38)
        {
            methylene -= 0.02;
        }
    
    if (polonium < 0.66)
        {
            methylene += 0.05;
        }
    
    if (polonium < 0.48)
        {
            antibodies -= 0.03;
        }
    
    if (hemlock > 0.34)
        {
            antibodies += 0.02;
        }
    
    if (insecticide < 0.71)
        {
            paracetamol -= 0.02;
        }

    if (hemlock > 0.68)
        {
            paracetamol += 0.03;
        }
    

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	insecticide = nextValue(graphs[0],insecticide);
	polonium = nextValue(graphs[1],polonium);
	hemlock = nextValue(graphs[2],hemlock);


	methylene = constrain(methylene, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


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
	text('insecticide: ' + nf(insecticide,1,2), 20,20);
	fill(colors[1]);
	text('polonium: ' + nf(polonium,1,2), 20,40);
	fill(colors[2]);
	text('hemlock: ' + nf(hemlock,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(antibodies,200,'antibodies');
	drawBar(paracetamol,350,'paracetamol');


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
