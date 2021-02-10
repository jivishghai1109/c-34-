//Create variables here
var dog,hdog,database,foodS,foodStock;

function preload()
{
	//load images here
 dog= loadImage("images/dogImg.png");
 hdog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog=createSprite(250,250,50,50);

  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value");



  
}


function draw() {  
  background(46,138,97);
  drawSprites();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.shapeColor = "blue"
  }
  //add styles here
   drawSprites();
   Text("Note: Press Up arrow to feed drago milk!")
   TextSize(25);
   
}

//function to read values int he database
function readStock(data){
  foodS = data.val();
}

//function to write values in database
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

