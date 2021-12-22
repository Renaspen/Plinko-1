var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var ball = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  //crea la tercera fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  //crea la cuarta fila de objetos plinko


  //crea los objetos partícula
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  if(frameCount%60===0){
    ball.push(new Ball(random(width/2-30,width/2+30),10,10));
  }
  for (var j =0; j<ball.length; j++){
    ball[j].display();
  }
  for (var k =0; k<divisions.length; k++){
    divisions[k].display();
  }
}
 