var backgroundImage,Background
var bowImage,bow
var rBall,rBallImage
var bBall,bBallImage
var gBall,gBallImage
var pBall,pBallImage
var arrow,arrowImage
var redBalloonGroup, blueBallonGroup,pinkBallonGroup,greenBalloonGroup;
var score = 0;
var arrow, arrowImage
var arrowGroup
function preload(){
backgroundImage = loadImage("background0.png")
bowImage = loadImage("bow0.png")
rBallImage = loadImage("red_balloon0.png")
bBallImage = loadImage("blue_balloon0.png")
gBallImage = loadImage("green_balloon0.png")
pBallImage = loadImage("pink_balloon0.png")
arrowImage = loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  background = createSprite(0,300,600,600)
  background.addImage(backgroundImage)
  background.scale = 1.5
  
  bow = createSprite(300,300,40,100)
  bow.addImage(bowImage)
  bow.scale = 2
 redBalloonGroup = new Group() 
  blueBalloonGroup = new Group() 
  pinkBalloonGroup = new Group() 
  greenBalloonGroup = new Group() 
  arrowGroup= new Group()
}

function draw() {
  
 
background.velocityX = -3 
if (background.x<0){
  background.x = background.width/4
}
  if (frameCount % 50 === 0)
 { 
  var N =  Math.round(random(1,4))
  console.log(N)
  switch(N)
    {
      case 1: redBall()
              break;
      case 2: greenBall()
              break;
      case 3: blueBall()
              break;
      case 4: pinkBall()
              break;
    }
}    
  
 if (keyDown("space")){
     Arrow()
    
  }
  
 bow.y = World.mouseY 
  if (arrowGroup.isTouching(redBalloonGroup)){
    redBalloonGroup. destroyEach()
  }
 if (arrowGroup.isTouching(greenBalloonGroup)){
    greenBalloonGroup. destroyEach()
  }
  if (arrowGroup.isTouching(blueBalloonGroup)){
    blueBalloonGroup. destroyEach()
  } 
   if (arrowGroup.isTouching(pinkBalloonGroup)){
    pinkBalloonGroup. destroyEach()
  }
  
  
  
  
drawSprites()
   score = score+Math.round(frameCount/60)
  text("score = "+score,20,30)
}

function redBall(){
  var ballR = Math.round(random(150,500))
  rBall = createSprite(30,ballR,10,10)
  rBall.addImage(rBallImage)
  rBall.scale = 0.1 
  rBall.velocityY = -5
  
  redBalloonGroup. add(rBall)
}

function blueBall(){
  var ballB = Math.round(random(180,450))
  bBall = createSprite(110,ballB,10,10)
  bBall.addImage(bBallImage)
  bBall.scale = 0.1
  bBall.velocityY = -5
  
  blueBalloonGroup. add(bBall)
}
function greenBall(){
  var ballG = Math.round(random(160,500))
  gBall = createSprite(70,ballG,10,10)
  gBall.addImage(gBallImage)
  gBall.scale = 0.1
  gBall.velocityY = -5
 greenBalloonGroup. add(gBall) 
}
function pinkBall(){
  var ballP = Math.round(random(200,400))
  pBall = createSprite(150,ballP,10,10)
  pBall.addImage(pBallImage)
  pBall.scale = 1.1
  pBall.velocityY = -5
 pinkBalloonGroup. add(pBall) 
}
function Arrow(){
 arrow = createSprite(300,300,20,10) 
 arrow.addImage(arrowImage)
 arrow.scale = 0.4
 arrow.y = bow.y
 arrow.velocityX = -4
 arrowGroup. add(arrow) 
  

  
  
  
  
}





