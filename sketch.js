//constants for engine, world, bodies, body and constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables for the objects in the game
var tree;
var boy;
var ground;
var stone;
var chain;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
//variable for launching force
var launchingForce = 100;

function preload()
{
}

function setup() {
	//creating the canvas
	createCanvas(1100, 700);

	//creating the engine
	engine = Engine.create();
	world = engine.world;

	//creating the boy using x, y, width and height
	boy = new Boy(200, 570, 30, 90);

	//creating the ground using x, y, width and height
	ground = new Ground(600, 680, 1200, 20);

	//creating the stone using x, y and radius
	stone = new Stone(90, 200, 40);

	//creating the tree using x, y, width and height
	tree = new Tree(800, 400, 50, 300);

	//creating 8 mangoes using x, y and radius
	mango1 = new Mango(710, 370, 35);
	mango2 = new Mango(650, 280, 40);
	mango3 = new Mango(880, 300, 45);
	mango4 = new Mango(770, 300, 30);
	mango5 = new Mango(730, 200, 25);
	mango6 = new Mango(820, 200, 49);
	mango7 = new Mango(970, 360, 40);
	mango8 = new Mango(950, 260, 35);

	//creating the chain using bodyA and pointB
	chain = new Chain(stone.body, {x: 110, y: 480});

	//running the engine
	Engine.run(engine);
  
}

function draw() {
	//rectmode to center
	rectMode(CENTER);
	//background 
    background(230, 230, 230);

	//writing the text
	fill(0);
 	textSize(25);
	text("Press space to get a second chance to play.", 100, 200);

	//displaying all the objects in the game
  	boy.display();
	ground.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	chain.display();
	stone.display();

	//detecting the collision between the stone and any of the  mangoes
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	
	//drawing the sprites
	drawSprites();
 
}
//function for allowing the stone to be dragged usin the mouse
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x :mouseX, y :mouseY});
}
//function for making the stone move (or fly) when mouse is released
function mouseReleased(){
	chain.fly();
}
//function to reset the stone when space key is pressed
function keyPressed(){
	if(keyCode === 32){                   
	  Matter.Body.setPosition(stone.body,{x :110, y :480});
	  chain.attach(stone.body);
	}
}
//function for detectign the collision between stone and mango
function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if (distance <= lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body, false);
	}
}