
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground, diamonds, knife, balloon,jewel, red
var diamondsGroup

var score ;

function preload(){
 jewel = loadImage("diamonds.png");
 sword = loadImage("knife.png");
 ground = loadImage("path.png");
 red = loadImage("red_balloon0.png")
 
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 path = createSprite(width/2,200)
 path.addImage(ground)
 path.velocityY = 4;
path.scale = 1.2;

knife=createSprite(width/2,3*height/4,20,20);
   knife.addImage(sword);
   knife.scale=0.7

   diamondsGroup=new Group();
   balloonGroup = new Group();

   score = 0;
}

function draw() {

    drawSprites();

    text("Score: "+ score, 500,50);

    path.velocityY = 4;
    if(path.y > 400 ){
   
        path.y = height/2;
        }
        score = score + Math.round(getFrameRate()/60);

        knife.x = World.mouseX;
        

       createDiamonds();
       function createDiamonds() {
        if (World.frameCount % 320 == 0) {
        var diamonds = createSprite(Math.round(random(width/2, height/2),40, 10, 10));
        diamonds.addImage(jewel);
        diamonds.scale=0.03;
        diamonds.velocityY = 3;
        diamonds.lifetime = 150;
        diamondsGroup.add(diamonds);
      }
      }
createballoon()
      function createballoon() {
        if (World.frameCount % 320 == 0) {
        var balloon = createSprite(Math.round(random(width/2, height/2),40, 10, 10));
        balloon.addImage(red);
        balloon.scale=0.15;
        balloon.velocityY = 4;
        balloon.lifetime = 200;
        balloonGroup.add(balloon);
      }
      }
      if (gameState ===END){

        diamondsGroup.destroyEach;
        balloonGroup.destroyEach;
        path.velocityY=0;
        score = 0;
      }

      if(balloonGroup.isTouching(knife)){

gameState =END;

      }


}


    
