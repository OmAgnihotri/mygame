function spawnLogs(){
    if(frameCount % 70 === 0){
        var log=createSprite(30,10);
    }
    if(log.isTouching(boy)){
        log.display="false";
        logCount=logCount+1;
        if(logCount==4){
            var sword=createSprite(20,10);

        }else if(logCount=5){
            var axe=createSprite(20,10);
        }
        
    }
}