const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder,polygon;
var polygonimage;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ground;
var slingShot;
var score=0;

function preload(){
polygonImage=loadImage("polygon.png");
}
function setup(){

canvas = createCanvas(900,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

box1= new Box(330,235,30,40);

box2= new Box(360,235,30,40);

box3= new Box(390,235,30,40);

box4= new Box(420,235,30,40);

box5= new Box(450,235,30,40);

box6= new Box(360,195,30,40);

box7= new Box(390,195,30,40);

box8= new Box(420,195,30,40);

box9= new Box(390,155,30,40);

polygon = Bodies.circle(50,200,20);

ground = new Ground(360,150,100,10);


polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new SlingShot(this.polygon,{x:100,y:200});

}
function draw(){
background(55,44,44);
text("SCORE : " + score,750,40); 
Engine.update(engine);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();

slingShot.display();

ground.display();

imageMode(CENTER)
image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}