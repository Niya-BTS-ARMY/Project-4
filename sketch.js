var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg, olImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  olImg = loadImage("orangeLeaf.png");
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  var select_sprite = Math.round(random(1, 2));

  if (frameCount % 80 == 0)
   {

    if (select_sprite == 1)
     {
      createApples();
    }

    else
     {
      createLeaves();
    }

  }
  drawSprites();
}

function createApples()
 {

  var apples = createSprite(random(50, 350), 40, 10, 10);
  apples.addImage(appleImg);
  apples.scale = 0.05;
  apples.velocityY = 4;
  apples.lifetime = 400 / 4;

}

function createLeaves()
 {

  var leaves = createSprite(random(30, 350), 30, 10, 10)
  leaves.addImage(olImg);
  leaves.scale = 0.05;
  leaves.velocityY = 3;
  leaves.lifetime = 400 / 3;

}




