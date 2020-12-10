var car,wall;
var speed,height;
var deformation;
var weight;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1600,200,100,height/2)
  wall.shapeColor=color("purple") 
  speed=random(55,90)
  weight=random(20,80)
  height=random(400,1500)
  car=createSprite(1600,200,1,0)
  car.velocityX = -7
  car.shapeColor=color("red","green","yellow")
}
function draw() {
if (wall.x=car.x<(car.width=wall.width/1.2)) {
  car.velocityX=0
  deformation=0.5*weight*speed*speed/22500
    if (deformation>180) 
    {
    car.shapeColor=color(255,0,0)
  }
  else if (deformation<180 && deformation>100)
   {
    car.shapeColor=color(230,230,0)
  }
  else if (deformation<100) {
    car.shapeColor=color(0,255,0)
  }
}
  background("black"); 
 drawSprites();
}