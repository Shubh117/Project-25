
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var enhgine,world;
var trash,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin = createSprite(600,700,30,30);
	dustbin.shapeColor("brown");
	trash = createSprite(600,300,10);
	trash.shapeColor("white");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
    if(keyCode === UP_ARROW){
		
	Matter.Body.applyForce(trash.body,trash.body.position,{x:600,y:300});

	}
}



