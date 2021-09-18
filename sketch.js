const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var runner,runnerImg;

function preload(){
  bg=loadImage("snow2.jpg");
  runnerImg=loadImage("images/sc1.png,sc2.png,sc3.png,sc4.png,sc5.png,sc6.png,sc7.png,sc8.png,sc9.png,sc10.png,sc11.png,sc12.png");
}

function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = Engine.world;

  runner=createSprite(150,480);
  runner.addAnimation("runner",runnerImg);
  runner.scale=1.1;
  runner.velocityX=2;
  runner.setCollider("rectangle",15, -20,100,180);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}