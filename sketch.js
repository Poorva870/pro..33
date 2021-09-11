const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world, engine;
var snow, snowImage; 
var ground, groundImage; 

function preload() { 
  groundImage = loadImage("snow3.jpg");
  snowImage = loadImage("snow5.webp"); 
} 

function setup() {
   createCanvas(1000, 800); 
   engine = Engine.create();
   world = engine.world;

   ground = createSprite(510, 300, 1000, 800); 
   ground.addImage("ground1", groundImage); 

   snow = createSprite(400, 150, 800, 400); 
   snow.addImage("snow1", snowImage); 
   snow.scale = 0.25; 
}
    
function draw() {
  // background(groundImage);
  
  if(frameCount%5===0) {
    snow.push(snowfall=new Snowfall());
 } 

  for(var i=0;i<snow.length;i++) { fall[i].display(); } 

   drawSprites(); 

 }