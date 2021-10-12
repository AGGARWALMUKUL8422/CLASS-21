var movingRect ;
var object1 , object2 , object3 , object4 ;


function setup() {

  createCanvas(1200,800);
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = 'green' ;
  object1 = createSprite(100,100,50,50);
  object1.shapeColor = 'green' ;
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = 'green' ;
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = 'green' ;
  object4 = createSprite(400,100,50,50);
  object4.shapeColor = 'green' ;


}

function draw() {
  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,object1))
  {
      object1.shapeColor = 'blue';
      movingRect.shapeColor = 'blue';
    }
else{
  object1.shapeColor = 'green';
  movingRect.shapeColor = 'green';
}
if(isTouching(movingRect,object2))
  {
      object2.shapeColor = 'blue';
      movingRect.shapeColor = 'blue';
    }
else{
  object2.shapeColor = 'green';
  movingRect.shapeColor = 'green';
}
if(isTouching(movingRect,object3))
  {
      object3.shapeColor = 'blue';
      movingRect.shapeColor = 'blue';
    }
else{
  object3.shapeColor = 'green';
  movingRect.shapeColor = 'green';
}
if(isTouching(movingRect,object4))
  {
      object4.shapeColor = 'blue';
      movingRect.shapeColor = 'blue';
    }
else{
  object4.shapeColor = 'green';
  movingRect.shapeColor = 'green';
}
  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    &&obj2.x-obj1.x<obj2.width/2+obj1.width/2
    &&obj1.y-obj2.y<obj2.height/2+obj1.height/2
    &&obj2.y-obj1.y<obj2.height/2+obj1.height/2
    ){
      return  true ;
    }
else{
     return  false ;
}
}