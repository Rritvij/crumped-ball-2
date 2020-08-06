
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper,ground;
var log,log2,log3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);

	paper = new Paper(350,320,1,1);
	
 log= new Log(870,305,130,20 );
 log2= new Log(980,305,130,20 );
 log3= new Log2(935,380,100,20 );

 
 
   

    
}




function draw(){
    background(255);
    Engine.update(engine);
    console.log(paper.body.position.x);
    
	paper.display();
	ground.display();
	log.display();
	log2.display();
	log3.display();
   
}
function keyPressed (){

if(keyCode === RIGHT_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position, {x:15,y:-15});
}
if(keyCode === LEFT_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position, {x:-15,y:15});
}

}