
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper
var dusbin1,dusbin2,dusbin3
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(800,670,1600,20)
paper=new Paper(200,500,40,40)
dustbin1=new Dustbin(1200,600,20,100)
dustbin2=new Dustbin(1000,600,20,100)
dustbin3=new Dustbin(1100,650,150,20)
Engine.run(engine);
  
}


function draw() {
 
  background(0);

  ground.display();
  paper.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-60})
	}
}