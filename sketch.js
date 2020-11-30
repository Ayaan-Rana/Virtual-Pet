var dog, happyDog, database, foodS, foodStock;
var dogI, happyDogI;

function preload(){
  dogI=loadImage("images/dogImg.png")
  happyDogI=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  
  dog=createSprite(200,200,20,20)

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);


}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(doghappy)
  }

  drawSprites();
fill("black");
  text("Note: Press up arrow to feed",300,20)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



