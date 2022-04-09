var square;
function setup() {
  createCanvas(400,400);
  square=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    square.position.x=square.position.x+5;
  }
  if(keyDown(LEFT_ARROW)){
    square.position.x=square.position.x-5;
  }
  if(keyDown(UP_ARROW)){
    square.position.y=square.position.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    square.position.y=square.position.y+5;
  }
 drawSprites();
}




