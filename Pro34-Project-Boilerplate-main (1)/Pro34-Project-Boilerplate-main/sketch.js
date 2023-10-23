const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ftbl,ftbl_img;
var bg_img;
var topR_btn;

function preload() {

  ftbl_img = loadImage("football.png");



  bg_img = loadImage("background.jpg");


}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  ftbl = Bodies.circle(400,450,20);
  ftbl.scale = 3;


topR_btn = createImg("btn1.png");
topR_btn.position(650,100);
topR_btn.size(112.5,75);
topR_btn.mouseClicked(topRight);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);


  push();
  imageMode(CENTER);
  if(ftbl !=null){
    image(ftbl_img,ftbl.position.x,ftbl.position.y,75,75);
  }
  pop();


  Engine.update(engine);

}

function topRight() {
  Matter.Body.applyForce(ftbl,{x:5,y:0},{x:0,y:5});
}
