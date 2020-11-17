
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5
var Rope1,Rope2,Rope3,Rope4,Rope5
var roof


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	

	engine = Engine.create();
	world = engine.world;
	roof = new Roof (800,100,200,20)
	Bob1 = new Bob (700,250,40)
	Bob2 = new Bob (750,250,40)
	Bob3 = new Bob (800,250,40)
	Bob4 = new Bob (850,250,40)
	Bob5 = new Bob (900,250,40)

	Rope1 = new Rope (Bob1.body,roof.body,-80,0)
	Rope2 = new Rope (Bob2.body,roof.body,-40,0)
	Rope3 = new Rope (Bob3.body,roof.body,0,0)
	Rope4 = new Rope (Bob4.body,roof.body,40,0)
	Rope5 = new Rope (Bob5.body,roof.body,80,0)

	




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();

  roof.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-50,y:-45});

	}
}



