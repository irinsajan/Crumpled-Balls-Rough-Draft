const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(200,360,20);
	
	Engine.run(engine);
  
}


function draw() {
 
  background(0);

 

  ball.display();
  
  
 
}



