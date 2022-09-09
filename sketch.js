var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //agrega imagen de suelo
  groundImage = loadImage("ground2.png");

}

function setup() {
  createCanvas(600, 200);
  
  //crear sprite de trex y dale animación
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //agregar escala y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crear sprite de suelo y haz que se restablezca
  ground = createSprite(200,180,400,20);
 
  //agrega imagen a suelo
  ground.addImage("ground",groundImage);

  //haz al invGround invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(220);
  //impreme la pos en x de Trex en la consola
  if(ground.x<0){
    ground.x = ground.width/2;
  }

  //agrega velocidad en X al suelo
  ground.velocityX = -2;
 
  //hacer que el Trex salte al presionar la barra espaciadora
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  //agrega gravedad
  trex.velocityY = trex.velocityY + 0.8
  
 
 //evitar que el Trex caiga y modifica para el suelo inv.
  trex.collide(invisibleGround);
  drawSprites();
}
