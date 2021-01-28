
  
var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);

  car = createSprite(300,500,100,50);
  car.shapeColor = "blue";
  car.velocityX = 3;
  wall = createSprite(600,500,80,30);
  wall.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
bounceOff(car,wall)
  
  drawSprites();
}

