function spawnApple(){
if (farmeCount % 300 ===0){
    var apple=createSprite(10,10)

  }
  if(boy.isTouching(apple)){
      apple.display="false";
      boy.health=boy.health+2;
  }

}