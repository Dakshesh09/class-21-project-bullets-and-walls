var bullets,wall;
var speed,weight;
var thickness;






function setup() {
  createCanvas(1600,400);
  
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullets=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  
  
  bullets.velocityX=speed;
  bullets.shapeColor = "white";
  wall.shapeColor = ("80,80,80");
 
}

function draw() {
  background(0);  
  
  


  if(wall.x - bullets.x <(bullets.width + wall.width)/2){
    bullets.velocityX = 0;
    
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(deformation>180)
    {
      bullets.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      bullets.shapeColor=color(2300,230,0);
    }

    if(deformation<100)
    {
      bullets.shapeColor=color(0,255,0);
    }

  }
  drawSprites();

}