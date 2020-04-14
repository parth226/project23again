const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;
var wall1:








function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 World = engine.world;

 wall1 = new Wall(200,100,50,50);
 wall2 = new Wall(100,50,50,100);
} 

function draw() {
  background(0);
  Engine.update(engine);

  wall1.display();
  wall2.display();
  drawSprites();
}