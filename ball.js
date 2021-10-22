class Ball{
    constructor(x,y,width,height,angle){
var options={
    'restiution': 0.8,
    'density': 1.0,
    'friction': 1.0
}
this.body= Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);
this.width=width;
this.height=height;

}

display(){
var pos= this.body.position;
var angle= this.body.angle;
push()
translate(pos.x,pos.y);
rotate(angle);
fill("green");
ellipse(0,0,this.width,this.height);
pop()
    }
}