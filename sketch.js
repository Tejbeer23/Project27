
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	fill("white");
	roofObject = new Roof (width/2,650,width,10)

	var bobDiameter = 40;

	startBobPositionX = width/2;
	startBobPositionY = height/4+500
	bobObject1 = new Bob(startBobPositionX - bobDiameter*2 , startBobPositionY , bobDiameter);
	bobObject2 = new Bob(startBobPositionX - bobDiameter*2 , startBobPositionY , bobDiameter);
	bobObject3 = new Bob(startBobPositionX  , startBobPositionY , bobDiameter);
	bobObject4 = new Bob(startBobPositionX + bobDiameter*2 , startBobPositionY , bobDiameter);
	bobObject5 = new Bob(startBobPositionX + bobDiameter*2 , startBobPositionY , bobDiameter);

	Rope1 = new Rope(bobObject1.body , roofObject.body , -bobDiameter*2 , 0);
	Rope2 = new Rope(bobObject2.body , roofObject.body , -bobDiameter*1 , 0)
	Rope3 = new Rope(bobObject3.body , roofObject.body , 0 , 0)
	Rope4 = new Rope(bobObject4.body , roofObject.body , bobDiameter*-1 , 0)
	Rope5 = new Rope(bobObject5.body , roofObject.body , bobDiameter*-2 , 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();

  drawSprites();
 
}



