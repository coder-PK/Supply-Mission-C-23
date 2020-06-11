var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var ob1, ob2, ob3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	ob1Sprite=createSprite(width/2, height-50, 200, 20);
	ob1Sprite.shapeColor=color(255, 0, 0);

	ob2Sprite=createSprite(300, height-90, 20, 100);
	ob2Sprite.shapeColor=color(255, 0, 0);

	ob3Sprite=createSprite(500, height-90, 20, 100);
	ob3Sprite.shapeColor=color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: .55, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ob1 = Bodies.rectangle(width/2, 630, 200, 20 , {isStatic:true} );
	ob2 = Bodies.rectangle(300, 630, 20, 100 , {isStatic:true} );
	ob3 = Bodies.rectangle(500, 630, 20, 100 , {isStatic:true} );
	 World.add(world, ground);
	 World.add(world, ob1);
	 World.add(world, ob2);
	 World.add(world, ob3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



