var runner, jetpack
var backGround, ground, happyRunner
var Play=1
var End=0
var gameState=Play
var reset




function preload(){
runnerImg=loadImage("Sonic_Runner2.gif")
backgroundImg=loadImage("bgImage.jpg")
jetpackImg=loadImage("jetpack.png")
happyRunnerImg=loadImage("Happy_Sonic.jpg")
resetImg=loadImage("reset.png")



}

function setup() {
 createCanvas(1400,700)

backGround=createSprite(700,350,1400,700)
backGround.addImage(backgroundImg)
backGround.scale=2

ground=createSprite(700,680,1400,30)
ground.visible=false

 


runner=createSprite(100,570,100,100)
runner.addImage(runnerImg)
runner.scale=.5
runner.setCollider("rectangle",0,0,200,80)
runner.debug=true

jetpack=createSprite(1600,600,50,50)
jetpack.addImage(jetpackImg)
jetpack.scale=.5

happyRunner=createSprite(700,600,50,50)
happyRunner.addImage(happyRunnerImg)
happyRunner.scale=.2

reset=createSprite(1300,100,50,50)
reset.addImage(resetImg)
reset.scale=.2


}

function draw() {

 if(gameState===Play){

if(backGround.x<600){
backGround.x=700
}

backGround.velocityX=-6

runner.visible=true

if(keyDown("Up") && runner.y>=400){
runner.velocityY=-8
}

runner.velocityY=runner.velocityY + 0.8

jetpack.visible=true


jetpack.velocityX=-8

reset.visible=false

if(runner.isTouching(jetpack)){
 gameState=End
}

happyRunner.visible=false




}

if(gameState===End){

background.velocityX=0
runner.velocityX=0


runner.visible=false

happyRunner.visible=true

reset.visible=true

if(mousePressedOver(reset)){
gameState=Play
}










}






 
runner.collide(ground)


drawSprites()
}