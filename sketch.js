const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
const Constraint = Matter.Constraint;
var knight
var wall1,wall2,wall3
var monster1,monster2,monster3


function preload(){
  
}

function setup() {
  createCanvas(600,400);
  engine = Engine.create();
	 world = engine.world;
   ground = new Ground(300, 390,600,20)
 knight = new Knight(295,300)
  wall1 = new Wall(300,200,20,100)
  wall2 = new Wall(190,40,20,100)
  wall3 = new Wall(430,40,20,100)
  wall4 = new Wall(590,200,20,400)
  wall5 = new Wall(10,200,20,400)
  wall6 = new Wall(300,10,600,20)
  zombie = new Zombie(300,70)
  rope = new Rope(knight.body, { x: 250, y: 330 });
}

function draw() {
  background("black");
  Engine.update(engine);
   text(mouseX +","+mouseY,mouseX,mouseY)
   ground.display();
  knight.display()
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  zombie.display();
  rope.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(knight.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(knight.body,{x:295, y:300});
     rope.attach(knight.body);
  }
}
