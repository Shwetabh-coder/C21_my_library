//Declaring all the variables
var fixedRect, movingRect;
function setup() {
  //Creating canvas
  createCanvas(1200, 800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green"; fixedRect.debug = true;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
}

function draw() {
  background(0, 0, 0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,fixedRect)) {
   movingRect.shapeColor = "blue";
   fixedRect.shapeColor = "blue"; 
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

// function bounceOff(object1, object2) {
//   if (object1.x - object2.x <= object2.width / 2 + object1.width / 2
//     && object2.x - object1.x <= object2.width / 2 + object1.width / 2
//   ) {
//     object1.velocityX = object1.velocityX * (-1);
//     object2.velocityX = object2.velocityX * (-1);
//   }

//   if (object1.y - object2.y <= object2.height / 2 + object1.height / 2
//     && object2.y - object1.y <= object2.height / 2 + object1.height / 2
//   ) {
//     object1.velocityY = object1.velocityY * (-1);
//     object2.velocityY = object2.velocityY * (-1);
//   }
// }

// function isTouching(object1, object2) {
//   if (object1.x - object2.x <= object2.width / 2 + object1.width / 2
//     && object2.x - object1.x <= object2.width / 2 + object1.width / 2
//     && object1.y - object2.y <= object2.height / 2 + object1.height / 2
//     && object2.y - object1.y <= object2.height / 2 + object1.height / 2) {
//     // object1.shapeColor = "red";
//     // object2.shapeColor = "red";
//     return true;
//   }
//   else {
//     // object1.shapeColor = "green";
//     // object2.shapeColor = "green";
//     return false;
//   }
// }