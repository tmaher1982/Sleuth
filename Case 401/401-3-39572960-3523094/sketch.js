/*

Officer: 3523094
CaseNum: 401-3-39572960-3523094

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If either deadly_nightshade goes above 0.58, strychnine dips below 0.43, or perhaps lead goes above 0.55, reduce betaBlocker by 0.01
	- If insecticide dips below 0.34 and snakeVenom goes above 0.73, or on the other hand, arsenic goes above 0.57 or mercury dips below 0.7, increment betaBlocker by 0.01
	- If mercury dips below 0.31 or arsenic dips below 0.3, or on the other hand, snakeVenom dips below 0.58 and strychnine goes above 0.25, decrease sulphates by 0.01
	- If sarin dips below 0.45 and insecticide goes above 0.7, or on the other hand, deadly_nightshade goes above 0.48, increment sulphates by 0.04
	- If snakeVenom goes above 0.43 or deadly_nightshade dips below 0.5, whilst at the same time, strychnine dips below 0.68, try decreasing sodiumBicarbonate by 0.04
	- If mercury goes above 0.53 and sarin goes above 0.46, or on the other hand, arsenic goes above 0.29, increment sodiumBicarbonate by 0.01
	- If arsenic dips below 0.39 and mercury dips below 0.53, or on the other hand, deadly_nightshade dips below 0.49, decrement opioids by 0.05
	- If lead dips below 0.55 or sarin dips below 0.45, whilst at the same time, snakeVenom goes above 0.65, raise opioids by 0.03
	- If snakeVenom goes above 0.66 or strychnine dips below 0.3, whilst at the same time, insecticide goes above 0.3 and arsenic dips below 0.44, reduce aspirin by 0.04
	- If sarin dips below 0.5, mercury goes above 0.74, lead dips below 0.28, and also deadly_nightshade goes above 0.75, increment aspirin by 0.01


Your conditional statements should:

consider the following poisons:

	- lead
	- arsenic
	- sarin
	- mercury
	- deadly_nightshade
	- snakeVenom
	- strychnine
	- insecticide


and modify the following antidotes:

	- betaBlocker
	- sulphates
	- sodiumBicarbonate
	- opioids
	- aspirin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var lead;
var arsenic;
var sarin;
var mercury;
var deadly_nightshade;
var snakeVenom;
var strychnine;
var insecticide;


//Declare the antidote variables
var betaBlocker;
var sulphates;
var sodiumBicarbonate;
var opioids;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	lead = 0.5;
	arsenic = 0.5;
	sarin = 0.5;
	mercury = 0.5;
	deadly_nightshade = 0.5;
	snakeVenom = 0.5;
	strychnine = 0.5;
	insecticide = 0.5;
	betaBlocker = 0.5;
	sulphates = 0.5;
	sodiumBicarbonate = 0.5;
	opioids = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

//    - If either deadly_nightshade goes above 0.58, strychnine dips below 0.43, or perhaps lead goes above 0.55, reduce betaBlocker by 0.01
    if (deadly_nightshade > 0.58 || strychnine < 0.43 || lead > 0.55)
        {
            betaBlocker -= 0.01;
        }
    
//	- If insecticide dips below 0.34 and snakeVenom goes above 0.73, or on the other hand, arsenic goes above 0.57 or mercury dips below 0.7, increment betaBlocker by 0.01
    if ((insecticide < 0.34 && snakeVenom > 0.73) || arsenic > 0.57 || mercury < 0.7)
        {
            betaBlocker += 0.01;
        }
    
//	- If mercury dips below 0.31 or arsenic dips below 0.3, or on the other hand, snakeVenom dips below 0.58 and strychnine goes above 0.25, decrease sulphates by 0.01
    if (mercury < 0.31 || arsenic < 0.3 || snakeVenom < 0.58 && strychnine > 0.25)
        {
            sulphates -= 0.01;
        }
        
//	- If sarin dips below 0.45 and insecticide goes above 0.7, or on the other hand, deadly_nightshade goes above 0.48, increment sulphates by 0.04
    if ((sarin < 0.45 && insecticide > 0.7) || deadly_nightshade > 0.48)
        {
            sulphates += 0.04;
        }
    
//	- If snakeVenom goes above 0.43 or deadly_nightshade dips below 0.5, whilst at the same time, strychnine dips below 0.68, try decreasing sodiumBicarbonate by 0.04
    if ((snakeVenom > 0.43 || deadly_nightshade < 0.5) && strychnine < 0.68)
        {
            sodiumBicarbonate -= 0.04;
        }
    
//	- If mercury goes above 0.53 and sarin goes above 0.46, or on the other hand, arsenic goes above 0.29, increment sodiumBicarbonate by 0.01
    if ((mercury > 0.53 && sarin > 0.46) || arsenic > 0.29)
        {
            sodiumBicarbonate += 0.01;
        }
    
//	- If arsenic dips below 0.39 and mercury dips below 0.53, or on the other hand, deadly_nightshade dips below 0.49, decrement opioids by 0.05
    if ((arsenic < 0.39 && mercury < 0.53) || deadly_nightshade < 0.49)
        {
            opioids -= 0.05;
        }
    
//	- If lead dips below 0.55 or sarin dips below 0.45, whilst at the same time, snakeVenom goes above 0.65, raise opioids by 0.03
    if ((lead < 0.55 || sarin < 0.45) && snakeVenom > 0.65)
        {
            opioids += 0.03;
        }
    
//	- If snakeVenom goes above 0.66 or strychnine dips below 0.3, whilst at the same time, insecticide goes above 0.3 and arsenic dips below 0.44, reduce aspirin by 0.04
    if ((snakeVenom > 0.66 || strychnine < 0.3) && insecticide > 0.3 && arsenic < 0.44)
        {
            aspirin -= 0.04;
        }
    
//	- If sarin dips below 0.5, mercury goes above 0.74, lead dips below 0.28, and also deadly_nightshade goes above 0.75, increment aspirin by 0.01
    if (sarin < 0.5 && mercury > 0.74 && lead < 0.28 && deadly_nightshade > 0.75)
        {
            aspirin += 0.01;
        }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	lead = nextValue(graphs[0],lead);
	arsenic = nextValue(graphs[1],arsenic);
	sarin = nextValue(graphs[2],sarin);
	mercury = nextValue(graphs[3],mercury);
	deadly_nightshade = nextValue(graphs[4],deadly_nightshade);
	snakeVenom = nextValue(graphs[5],snakeVenom);
	strychnine = nextValue(graphs[6],strychnine);
	insecticide = nextValue(graphs[7],insecticide);


	betaBlocker = constrain(betaBlocker, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	sodiumBicarbonate = constrain(sodiumBicarbonate, 0, 1);
	opioids = constrain(opioids, 0, 1);
	aspirin = constrain(aspirin, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('lead: ' + nf(lead,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('mercury: ' + nf(mercury,1,2), 20,80);
	fill(colors[4]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,100);
	fill(colors[5]);
	text('snakeVenom: ' + nf(snakeVenom,1,2), 20,120);
	fill(colors[6]);
	text('strychnine: ' + nf(strychnine,1,2), 20,140);
	fill(colors[7]);
	text('insecticide: ' + nf(insecticide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(betaBlocker,50,'betaBlocker');
	drawBar(sulphates,200,'sulphates');
	drawBar(sodiumBicarbonate,350,'sodiumBicarbonate');
	drawBar(opioids,500,'opioids');
	drawBar(aspirin,650,'aspirin');


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
