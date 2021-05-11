const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

 //var maxDrops
 var engine, world;
 var maxDrops=100;
 var thunder,thunder1Img,thunder2Img,thunder3Img,thunder4Img;
 var drops=[];


function preload(){
    thunder1Img=loadImage("1.png");
    thunder2Img=loadImage("2.png");
    thunder3Img=loadImage("3.png");
    thunder4Img=loadImage("4.png");
   
   
}

function setup(){
   createCanvas(1000,600);
   engine = Engine.create();
   world = engine.world;

   umbrella= new Umbrella(200,218,200)
   
   

  
  for(var i=0; i<maxDrops; i++){
      drops.push(new Drop(random(0,1000),random(0,600)));
     

    
}
}

function draw(){
   Engine.update(engine);
   background("black");
   
    for (var i = 0; i < drops.length; i++) {
     drops[i].display();
     drops[i].position();
    }

   
    

   umbrella.display();

   if (frameCount % 60 === 0 ) {
      thunder = createSprite(random(100, 1000), 30, 100, 100);
      var rand = Math.round(random(1,4));
      switch(rand){
          case 1: thunder.addImage("thunder1",thunder1Img);
                  console.log("thunder1");
                  
          break;
          case 2: thunder.addImage("thunder2", thunder2Img);
                   console.log("thunder2");
          break;
          case 3: thunder.addImage("thunder3", thunder3Img);
                  console.log("thunder3");
          break;
          case 4: thunder.addImage("thunder4", thunder4Img);
                  console.log("thunder4");
          break;
        
      }
      thunder.lifetime=12
}

        drawSprites();
      
   }


   
    
 

