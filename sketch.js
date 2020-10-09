var car,car2,car3,car4;
var wall,wall2,wall3,wall4;
var lowerWall1;lowerWall2,lowerWall3,lowerWall4;
var speed;
var weight;





function setup() {
  createCanvas(1600,800);
  car = createSprite(50, 100, 20, 20);
  wall = createSprite(1450,100,60,100);
  
  lowerWall1 = createSprite(800,200,1600,5);
  lowerWall1.shapeColor = "white";

  car2 = createSprite(50,285,20,20);
  wall2 = createSprite(1450,300,60,100);

  lowerWall2 = createSprite(800,400,1600,5);
  lowerWall2.shapeColor = "white";

  car3  = createSprite(50,475,20,20);
  wall3 = createSprite(1450,500,60,100);

  lowerWall3 = createSprite(800,600,1600,5);
  lowerWall3.shapeColor = "white";

  car4  = createSprite(50,675,20,20);
  wall4 = createSprite(1450,675,60,75);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("black");  

  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;
  


  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180){

      car.shapeColor = color(255,0,0);
    
    }
    if(deformation<180 && deformation>100){

      car.shapeColor = color(230,230,0);

    }
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }




    if(wall2.x-car2.x < (car2.width+wall2.width)/2){
      car2.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation>180){
  
        car2.shapeColor = color(255,0,0);
      
      }
      if(deformation<180 && deformation>100){
  
        car2.shapeColor = color(230,230,0);
  
      }
      if(deformation<100){
        car2.shapeColor = color(0,255,0);
      }
    }


    

    if(wall3.x-car3.x < (car3.width+wall3.width)/2){
      car3.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation>180){
  
        car3.shapeColor = color(255,0,0);
      
      }
      if(deformation<180 && deformation>100){
  
        car3.shapeColor = color(230,230,0);
  
      }
      if(deformation<100){
        car3.shapeColor = color(0,255,0);
      }
    }

    

    if(wall4.x-car4.x < (car4.width+wall4.width)/2){
      car4.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation>180){
  
        car4.shapeColor = color(255,0,0);
      
      }
      if(deformation<180 && deformation>100){
  
        car4.shapeColor = color(230,230,0);
  
      }
      if(deformation<100){
        car4.shapeColor = color(0,255,0);
      }
    }







  

  drawSprites();
  }