const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var paper,rope;


function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(50,300,20,20)
    
    ground = new Ground(400,380,1000,20)
    dustbinObj1 = new Dustbin(605,300,20,140)
    dustbinObj2 = new Dustbin(665,362,100,18)
    dustbinObj3 = new Dustbin(725,300,20,140)
    rope = new Rope(paper.paper,{x:50,y:300})

}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    paper.display();
    dustbinObj1.display();
    dustbinObj2.display();
    dustbinObj3.display();
    rope.display();
   // console.log(paper.paper.position)
}

function mouseDragged(){
    Matter.Body.setPosition(paper.paper, {x:mouseX,y:mouseY})
}

function mouseReleased(){
    rope.fly();
}

