
var movingRect,fixedRect


function setup() {

  createCanvas(800,400);
 movingRect= createSprite(100, 200, 50, 50);
 fixedRect = createSprite(400,200,40,40);

 movingRect.shapeColor="blue"
fixedRect.shapeColor="yellow";
}

function draw() {
  background(0);  
  
  movingRect.y=World.mouseY
  movingRect.x= World.mouseX


  if(movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 &&
      fixedRect.x -movingRect.x <fixedRect.width/2 + movingRect. width /2 &&
    movingRect.y -fixedRect.y <  movingRect.height/2 + fixedRect.height /2 &&
       fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2  )  {
  
  movingRect.shapeColor="red"
  fixedRect.shapeColor="red";
  } 
else{ 
  movingRect.shapeColor="blue"
  fixedRect.shapeColor="yellow";
  }


drawSprites();
}