
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    box1 = new Box(10,100,10,300);
    
    box2 = new Box(385,100,10,300);
    box3 = new Box(345,50,50,200);
    box4 = new Box(40,50,50,200);
    box5 = new Box(100,50,50,100);
    box6 = new Box(300,50,50,100);
    box7 = new Box(200,100,70,100);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box3.body.angle);
    console.log(box4.body.angle);
    console.log(box5.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box6.display();
    box5.display();
    box6.display();
    box7.display();
    ground.display();
}