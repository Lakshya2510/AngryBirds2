const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, log1, bird;

function preload(){
    bgImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(200,200)
    log1 = new Log(800,300,300,PI/2);
    pig1 = new Pig(800, 350, 50, 50)
    box1 = new Box(900,350,70,70);
    box2 = new Box(700,350,70,70);
    log2 = new Log(800,200,300,PI/2);
    pig2 = new Pig(800,250,50,50)
    box3 = new Box(900,250,70,70);
    box4 = new Box(700,250,70,70);
    box5 = new Box(800,150,70,70);
    log3 = new Log(735,150,150,PI/3);
    log4 = new Log(870,150,150,-PI/3);
    ground = new Ground(width/2,height-10,width,20)
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    log1.display();
    pig1.display();
    box1.display();
    box2.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    log3.display();
    box5.display();
    log4.display();
    bird.display();
    ground.display();
}