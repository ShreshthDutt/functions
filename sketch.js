var fixedRect, movingRect;
var flag;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
  flag=0;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  if(isTouching(movingRect,fixedRect)){
    flag=1;
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
    
  }
  if(flag===1){
    textSize(30);
    fill("lightblue");
    text("London bridge is falling down",600,400);
    
  }
  drawSprites();
}
function bounceOff(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
  ob1.velocityX = ob1.velocityX * (-1);
  ob2.velocityX = ob2.velocityX * (-1);
}
if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
  ob1.velocityY = ob1.velocityY * (-1);
  ob2.velocityY = ob2.velocityY * (-1);
  
}
}
function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
      return true;
      }else{
      return false;
      }

}
