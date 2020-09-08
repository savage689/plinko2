    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    
    
    
   
var ground;
var engine,world;
var object;
var division1;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=350;



function setup() {

  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(80,50,50,80);
 
  World.add(world,object);
  
  var canvas = createCanvas(400,800);
  canvas.shapeColor = "black";
  ground = new Ground(240,760,480,20);
 
  


}

function draw() {
  background(0);  

  Engine.update(engine);
  ground.display();




  for(var k =0; k <=width; k= k+80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  

  for (var k=0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j=40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75,5));
  }

  for (var j=20; j < plinkos.length; j++){
    plinkos[j].display();

  }

  for(var s=20; s <=width; s=s+50){
    plinkos.push(new Plinko(s,150,5));

  }

  for(var s=20; s < plinkos.length; s++){
    plinkos[s].display();
  }

  for(var v=20; v <=width; v = v+50){
    plinkos.push(new Plinko(v,225,5));

  }

  for(var v=20; v< plinkos.length; v++){
plinkos[v].display();
  }

  for(var c=20; c <=width; c= c+50){
    plinkos.push(new Plinko(c,300,5));

  }

  for (var c=20; c < plinkos.length; c++ ){

 plinkos[c].display();
  }

  

  drawSprites();

 
      
    
      for(var w=0; w < particles.length; w++){
    particles[w].display();
      }

  spawnParticles();

  

}

function spawnParticles(){
  if(frameCount%15===0){
particles.push(new Particle(random(width/2-10, width/2-10),10,10));



  }
  console.log(frameCount);
}
  




