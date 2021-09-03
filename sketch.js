var zombie, zombieimg;
var bg, bgimg;
var player;
var heart1, heart2, heart3;
var heart1img, heart2img, heart3img;
var shooterimg, shooter_shooting;


function preload(){

  zombieimg = loadImage("assets/zombie.png");
  bgimg = loadImage("assets/bg.jpeg");
  heart1img = loadImage("assets/heart_1.png");
  heart2img = loadImage("assets/heart_2.png");
  heart3img = loadImage("assets/heart_3.png");
  shooterimg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");

}

function setup(){

  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20, displayHeight/2+90, 30, 30);
  bg.addImage(bgimg);
  bg.scale = 1.1

  player = createSprite(displayWidth-1000, displayHeight-300, 30, 30);
  player.addImage(shooterimg);
  player.scale = 0.3

  heart1 = createSprite(displayWidth-150, 40, 40, 40)
  heart1.addImage(heart1img);
  heart1.scale = 0.3
  heart1.visible = false

  heart2 = createSprite(displayWidth-100, 40, 40, 40)
  heart2.addImage(heart2img);
  heart2.scale = 0.3
  heart2.visible = false
  

  heart3 = createSprite(displayWidth-150, 40, 40, 40)
  heart3.addImage(heart3img);
  heart3.scale = 0.3
  heart3.visible = true



}


function draw(){

background(0);
if(keyDown(UP_ARROW)){
  player.y = player.y-3
}

if(keyDown(DOWN_ARROW)){
  player.y = player.y+3
}

if(keyWentDown("space")){
 player.addImage(shooter_shooting);
}
enemy();
drawSprites();

}

function enemy(){
  if(frameCount%50===0){
zombie = createSprite(1200, 400, 40, 40)
zombie.addImage(zombieimg);
zombie.scale = 0.15
zombie.velocityX = -5;
zombie.lifetime = 400;
zombie.setCollider("rectangle", 0, 0, 400, 400);
zombie.debug = true

}}
