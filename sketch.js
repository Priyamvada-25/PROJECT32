const World= Matter.World;
const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4;
var box5,box6,box7,box8;
var box9,box10,box11,box12;
var ball;
var rope;

var gameState="hanging";

function setup(){
    createCanvas(1200,600);
    engine= Engine.create();
    world= engine.world;

    ground= new Ground(600,600,1200,20);

    box1= new Box(700,580,80,80);
    box2= new Box(780,580,80,80);
    box3= new Box(860,580,80,80);
    
    box4= new Box(700,500,80,80);
    box5= new Box(780,500,80,80);
    box6= new Box(860,500,80,80);
    
    box7 = new Box(700,420,80,80);
    box8= new Box(780,420,80,80);
    box9= new Box(860,420,80,80);
    
    box10= new Box(700,340,80,80);
    box11= new Box(780,340,80,80);
    box12= new Box(860,340,80,80);

    box13= new Box(700,260,80,80);
    box14= new Box(780,260,80,80);
    box15= new Box(860,260,80,80);

    box16= new Box(700,180,80,80);
    box17= new Box(780,180,80,80);
    box18= new Box(860,180,80,80);
    

    ball= new Ball(400,300,80,80);

    rope= new Rope(ball.body,{x:300,y:100});

}
function draw(){
    background("yellow");
    Engine.update(engine);

    textSize(24);
    textFont("jokerman");
    text("Drag and launch the bob to diminish the building!!",520,50);
    text("Press spacebar to get another chance!",560,90);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ball.display();
    rope.display();
}

function mouseDragged(){
    if(gameState==="hanging"){
        Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }
    
}

function mouseReleased(){
    rope.fly();
    gameState="launched";
}

function keyPressed(){
if(keyCode===32){
   rope.attach(ball.body);
   gameState="hanging";

}
}