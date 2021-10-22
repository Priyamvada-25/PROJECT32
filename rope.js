class Rope{
    constructor(bodyA,pointB){
     var options={
    stiffness:0.04,
    length: 100,
    bodyA:bodyA,
    pointB:pointB

}
  this.rope= Constraint.create(options);
  this.pointB= pointB;
  World.add(world,this.rope);
    }

    attach(body){
    this.rope.bodyA= body;
    }

    fly(){
        this.rope.bodyA=null;
        }
    

display(){

    if(this.rope.bodyA){
    var pointA= this.rope.bodyA.position;
    var pointB= this.pointB;
    
    push()
    strokeWeight(3);
    stroke("black");
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop()
}
}

}