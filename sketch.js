const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,350,20);
	bob2 = new Bob(350,350,20);
	bob3 = new Bob(400,350,20);
	bob4 = new Bob(450,350,20);
    roof1 = new Roof(400,250,200,20);
	rope1 = new Rope(bob1.body,roof1.body);
	rope2 = new Rope(bob2.body,roof1.body);
	rope3 = new Rope(bob3.body,roof1.body);
	rope4 = new Rope(bob4.body,roof1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

  drawSprites();
}

function mouseDragged()
{
  Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
}



