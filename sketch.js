var ball;
var ground;
var leftSide;
var rightSide;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1920,681);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1550,600,20,120);
	rightSide = new Ground(1700,600,20,120);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,200,30,ball_options);
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
  ellipse(ball.position.x,ball.position.y,30);

  ground.display();
  leftSide.display();
  rightSide.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
 if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})  
 }
}



