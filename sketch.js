var p1,p2,p3,p4,p5,p6; 
var pI1,pI2,pI3,pI4,pI5,pI6;
var gameState = 0;
var database;
var players = [];
var rand;
var game,player,form;
var playerCount;
var table;
function preload(){
    pI1 = loadImage("capture.PNG");
    pI2 = loadImage("capture1.PNG");
    pI3 = loadImage("capture2.PNG");
    pI4 = loadImage("capture3.PNG");
    pI5 = loadImage("capture4.PNG");
    pI6 = loadImage("capture5.PNG");
}

function setup(){
    createCanvas(displayWidth,displayHeight);


    database = firebase.database();
  
   
    p1 = createSprite(400,300,20,20);
    p1.addImage(pI1);

    table = createSprite(700,300,500,200);
    p1.debug = false;
    p1.setCollider("rectangle", 5, 5, 80, 120)



  
    
}

function draw(){
background(220);
 if(gameState === 0){

   
 }
 if(keyDown('w')){
    p1.y =p1.y -10
 }
 

 if(keyDown('s')){
    p1.y = p1.y +10
 }
 
 if(keyDown('a')){
    p1.x = p1.x -10
 }
 
 if(keyDown('d')){
    p1.x = p1.x +10
 }
p1.collide(table); 

 
 drawSprites();
  
}  


   

