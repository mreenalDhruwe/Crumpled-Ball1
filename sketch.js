
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var ball1;
var DBPl, DBPr, DBPc;  

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(600,height,1200,20)
	ball1 = new ball(100, 550);
	DBPl = new DBP(570, 540, 20, 100);
	DBPc = new DBP(620, 580, 80, 20);
	DBPr = new DBP(670, 540, 20, 100);


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");

	ground1.display();
	ball1.display();
	DBPl.display();
	DBPr.display();
	DBPc.display(); 	
	
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x : 13, y : -15});
	}
}



