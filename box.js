class Box{
    constructor(x,y,width,height){
     var options={
    'restitution':0.08,
    'friction': 1.0,
    'density':0.4
}
  this.body= Bodies.rectangle(x,y,width,height,options);
  this.width=width;
  this.height=height;
  World.add(world,this.body);
    }
display(){
    var position= this.body.position;
    var angle= this.body.angle;
    push()
    translate(position.x,position.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(8);
    stroke("brown");
    fill("coral")
    rect(0,0,this.width,this.height);
    pop()
}

}