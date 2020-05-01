const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(600, 60, 200, 20);
    bird = new Bird(500,200);
    chain = new Chain(bird.body, platform.body);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    bird.display();
    platform.display();
    chain.display();
}

